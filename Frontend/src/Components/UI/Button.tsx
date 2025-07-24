import { useState } from "react"

interface ButtonProps{
    text: string;
    disable?: boolean;
}

export const Button = ({text, disable}:ButtonProps) => {

    return(
        <div className={`w-full py-3  p-4 rounded-xl m-2 ${disable ? "bg-[#1a1a1a] text-[#737373]" : "bg-[#3b82f6] text-white"}`} >
            <span>{text}</span>
        </div>
    )
}