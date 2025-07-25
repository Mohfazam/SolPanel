import { useState } from "react"

interface ButtonProps{
    text: string;
    disable?: boolean;
    onClick: () => null;
}

export const Button = ({text, disable, onClick}:ButtonProps) => {

    return(
        <div className={`w-full h-full p-3 flex justify-center items-center rounded-xl text-center  ${disable ? "bg-[#1a1a1a] text-[#737373] cursor-not-allowed" : "bg-[#3b82f6] text-white cursor-pointer active:scale-95 transition-transform duration-150"}`} >
            <button className="text-center" onClick={onClick}>{text}</button>
        </div>
    )
}