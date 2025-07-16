import type{ ReactElement } from "react";

interface CardTopProps {
    Text: string;
    Icon: ReactElement;
}

export const CardTop = ({ Text, Icon }: CardTopProps) => {
    return (
        <div className="text-white flex items-center gap-2 w-full h-full">
            <div className="text-[#a3a3a3]">{Icon}</div>
            <div className="text-lg font-medium text-[#ffffff]">{Text}</div>
        </div>
    );
};
