import { Wallet } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const ConnectionStatus = () => {

    const { connected } = useWallet();
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#2a2a2a] rounded-lg hover:cursor-pointer">
            <div className={`w-2 h-2 rounded-full ${connected ? "bg-[#22c55e]" : "bg-red-500"}`} />
            <Wallet size={18} className="text-[#a3a3a3]" />
            <span className="text-sm text-[#a3a3a3] font-medium">
                {connected ? "Connected" : "Connect"}
            </span>
            <div>
                <WalletMultiButton />
            </div>
             
        </div>
    );
};
