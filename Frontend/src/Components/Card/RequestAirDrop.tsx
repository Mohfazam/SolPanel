import { Download } from "lucide-react";
import { CardTop } from "../UI/CardTop";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import axios from "axios";
import { NumberInput } from "../UI/NumberInput";
import { Button } from "../UI/Button";
import { PulseLoader } from "react-spinners";

export const RequestAirdrop = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [solBal, setSolBal] = useState(0);
    const [refreshBalance, setRefreshBalance] = useState(false);

    const [input, setInput] = useState("");
    //@ts-ignore
    const [solPrice, setSolPrice] = useState(0);
    const { connected } = useWallet();
    const wallet = useWallet();
    const { connection } = useConnection();
    const publicKey = wallet.publicKey;

    useEffect(() => {
        const fetchBalance = async () => {
            if (publicKey) {
                try {
                    const lamports = await connection.getBalance(publicKey);
                    setSolBal(lamports / LAMPORTS_PER_SOL);
                } catch (error) {
                    console.error("Error fetching Balance: ", error);
                }
            }
        };

        const fetchSolPrice = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
                console.log(response.data.solana.usd);
                setSolPrice(response.data.solana.usd);
            } catch (error) {
                console.log("Error fetching price: ", error);
            }

        }

        fetchSolPrice();
        fetchBalance();
    }, [connected, solBal, publicKey, refreshBalance]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

        const value = parseFloat(e.target.value);
        if (value > 5) {
            setInput("5");
        } else {

            setInput(e.target.value);
        }
    }


    const handleAirDrop = async () => {
        const amount = parseFloat(input);

        if (!publicKey) return;

        setIsLoading(true);

        try {
            const signature = await connection.requestAirdrop(
                publicKey,
                amount * LAMPORTS_PER_SOL
            );

            await connection.confirmTransaction(signature, "confirmed");
            alert("Air Drop Successfull");
            setRefreshBalance(!refreshBalance);
        } catch (error) {
            console.log("Airdrop failed error: " + error);
            alert("Air Drop Limit Exceeded");
        }
        finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 h-[381px]">
            <div className="mb-12">
                <CardTop Text="Request Airdrop" Icon={<Download size={24} />} />
            </div>

            {connected ? (<>
            
                <NumberInput Text="Amount (SOL)" Max={5} Placeholder="Enter amount (max 5)" onChange={handleInput} />

                <div className="flex justify-center items-center w-full mt-3">
                    {isLoading ? (
                        <div className="mt-4">
                            <PulseLoader color="#3b82f6" />
                        </div>
                    ) : (
                        <Button onClick={handleAirDrop} text="Request AirDrop" disable={input.length === 0 ? true : false} />
                    )}
                </div>
            
            </>
            ) : (
                <div className="flex justify-center items-center text-white w-full  px-4 py-6 bg-[#141414] border border-[#2a2a2a] rounded-xl">
                    Connect the Wallet First
                </div>
            )}


        </div>
    );
};
