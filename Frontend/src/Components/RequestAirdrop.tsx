import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
export const RequestAirdrop = () => {

    const [amount, setAmount] = useState(0);

    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        const publicKey = wallet.publicKey;
        if(!publicKey) return;
        try{
            await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
            alert("Air Drop of " + amount + "is successfull");
        } catch(e){
            alert("Something went wrong:"+ e);
        }
    }

    return (
        <div className="flex flex-col">
                <input onChange={(e) => setAmount((Number(e.target.value)))} className="border-8 rounded-2xl p-4 m-4" type="text" placeholder="Amount.." />
            <button onClick={requestAirdrop} className="border-4 rounded-xl font-bold p-2 mb-4 bg-amber-300 hover:cursor-pointer">Request AirDrop</button>
            <strong className="m-2 mb-2 border-b-4 rounded-lg border-b-blue-700"><b>Public Key: </b><span className="font-mono text-green-600">{wallet.publicKey?.toBase58()}</span></strong>
        </div>
    )
}