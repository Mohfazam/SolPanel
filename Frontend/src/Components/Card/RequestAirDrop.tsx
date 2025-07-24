import { Download  } from "lucide-react";
import { CardTop } from "../UI/CardTop";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";

import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import axios from "axios";
import { NumberInput } from "../UI/NumberInput";
import { Button } from "../UI/Button";

export const RequestAirdrop = () => {
    const [solBal, setSolBal] = useState(0);
    //@ts-ignore
    const [solPrice, setSolPrice] = useState(0);
    const { connected } = useWallet();
    const wallet = useWallet();
    const {connection} = useConnection();
    const publicKey = wallet.publicKey;

    useEffect(() => {
        const fetchBalance = async () => {
            if(publicKey){
                try{
                    const lamports = await connection.getBalance(publicKey);
                    setSolBal(lamports/LAMPORTS_PER_SOL);
                } catch(error){
                    console.error("Error fetching Balance: ", error);
                }
            }
        };

        const fetchSolPrice = async () => {
            try{
                const response = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd");
                console.log(response.data.solana.usd);
                setSolPrice(response.data.solana.usd);
            } catch(error){
                console.log("Error fetching price: ", error);
            }

        }
        
        fetchSolPrice();
        fetchBalance();
    }, [connected, solBal, publicKey])

    return (
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 h-[381px]">
            <div className="mb-12">
                <CardTop Text="Request Airdrop" Icon={<Download  size={24} />} />
            </div>

            <NumberInput Text="Amount (SOL)" Max={5} Placeholder="Enter amount (max 5)"/>

            <Button text="Request AirDrop" />
        </div>
    );
};
