import { BalanceCard } from "../Card/BalanceCard"
import { SolHEader } from "../SolHeader"

export const Layout = () => {
    return(
        <div className="min-h-screen bg-[#0a0a0a]">
            <div className="min-h-screen bg-dark-primary p-4">
                <div className="max-w-6xl mx-auto">
                    <SolHEader />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <BalanceCard />
                </div>

            </div>

        </div>
    )
}