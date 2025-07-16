import { ConnectionStatus } from "./Header/ConnectionStatus"
import { Network } from "./Header/Network"

export const SolHEader = () => {
    return (
        <div className="flex items-center justify-between mb-8 bg-[#0a0a0a]">
            <h1 className="text-2xl font-medium text-[#ffffff]">
                Solana Wallet
            </h1>
            <div className="flex items-center gap-3">
                <div>
                    <Network />
                </div>
                <div>
                    <ConnectionStatus />
                </div>
            </div>
        </div>
    )
}