import type { ReactElement } from "react"

interface InputProps{
    Icon?: ReactElement;
    Text: string;
    Varient?: string | number;
    Placehoder: string;
}

export const Input = ({Icon, Text, Varient, Placehoder}:InputProps) => {
    return(
        <div>
            <div className="block text-md text-[#a3a3a3] mb-2">
                {Text}
            </div> 

            <div>
                <input type="text" max={Varient} placeholder={Placehoder} className="w-full p-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#1a1a1a] focus:border-[#3b82f6] focus:outline-none transition-colors"/>
            </div>
        </div>
    )
}