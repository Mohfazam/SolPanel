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
            {Text} yo {Placehoder}
        </div>
    )
}