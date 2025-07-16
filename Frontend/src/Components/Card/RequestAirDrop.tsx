import { Wallet } from "lucide-react";
import { CardTop } from "../UI/CardTop";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { ConnectionStatus } from "../Header/ConnectionStatus";
import { useEffect, useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import axios from "axios";

export const RequestAirdrop = () => {
    const [solBal, setSolBal] = useState(0);
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
                <CardTop Text="Balance" Icon={<Wallet size={24} />} />
            </div>

            {connected ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1f1f1f] border border-[#2a2a2a] rounded-full mb-4">
                        <span className="text-2xl font-bold text-[#3b82f6]">SOL</span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold text-white">{solBal}</span>
                        <span className="text-2xl font-medium text-[#3b82f6]">SOL</span>
                    </div>

                    <p className="text-[#a3a3a3]">Available balance</p>
                    <p className="text-[#a3a3a3]">1 SOL ≈ ${solPrice} USD</p>
                    
                </div>
            ) : (
                <ConnectionStatus />
            )}
        </div>
    );
};
