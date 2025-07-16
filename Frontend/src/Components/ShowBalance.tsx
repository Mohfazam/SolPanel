import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useEffect, useState } from "react";

export const ShowBalance = () => {

    const [balance, setBalance] = useState(0);

    const wallet  = useWallet();
    const publicKey = wallet.publicKey;

    const {connection} = useConnection(); 

    useEffect(() => {
        const getUserBalance = async () => {

        if(!publicKey) return;

        try{
            const bal = await connection.getBalance(publicKey);
            const solBal = bal / 1_000_000_000;
        setBalance(() => solBal)
        console.log("Balance Fetched Successfully");
        } catch(e){
            console.log("Something went wrong: " + e);
        }
    }

    getUserBalance();
    }, [publicKey, connection]);

    return(
        <div className="border-l-4 rounded-2xl m-4 p-2 border-r-4 border-t-3 border-t-blue-700 border-b-3 border-b-blue-700">
            <h3>The Balance of the user is:&nbsp;
                <strong>{balance}&nbsp;<b className="text-blue-700">SOL</b></strong>
            </h3>
        </div>
    )
}