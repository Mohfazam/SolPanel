import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";

export const SendToken = () => {
    const [amount, setAmount] = useState(0);
    const [sender, setSender] = useState("");
    
    
    const wallet = useWallet();
    const {connection} = useConnection();
    
    async function sendToken() {
        const publickey = wallet.publicKey;

        if(!publickey) return;

        const transaction  = new Transaction();

        transaction.add(SystemProgram.transfer({
            fromPubkey: publickey,
            toPubkey: new PublicKey(sender),
            lamports: amount * LAMPORTS_PER_SOL
        }));

        await wallet.sendTransaction(transaction, connection);

        alert("Set " + amount +  " SOL to " + sender);

    }


    return(
        <div className="flex flex-col">
            <h1 className="text-center mb-4 text-4xl">Transfer <strong>SOL</strong> in <strong>DEVNET</strong></h1>
           <input type="text" placeholder="To" onChange={(e) => setSender(e.target.value)} className="border-4 m-2 p-2 w-106 rounded-4xl border-r-4 border-t-3 border-t-blue-700 border-b-3 border-b-blue-700"/>

           <input type="Text" placeholder="Amount" onChange={(e) => setAmount(Number(e.target.value))} className="border-4 m-2 p-2 w-106 rounded-4xl border-r-4 border-t-3 border-t-blue-700 border-b-3 border-b-blue-700"/>

           <button className="p-2 m-2 w-106 font-bold rounded-lg bg-yellow-400 border-4 hover:cursor-pointer" onClick={sendToken}>Send</button>
        </div>
    )
}