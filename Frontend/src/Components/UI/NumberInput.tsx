

interface InputProps{
    Text: string;
    Max?: number;
    Placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export const NumberInput = ({ Text, Max, Placeholder, onChange}:InputProps) => {
    return(
        <div>
            <div className="block text-md text-[#a3a3a3] mb-2">
                {Text}
            </div> 

            <div>
                <input type="number" onChange={onChange} max={Max} min={0} placeholder={Placeholder} className="w-full p-3 bg-[#1a1a1a] border border-[#333333] rounded-lg text-[#ffffff] placeholder-[#777]  focus:border-[#3b82f6] focus:outline-none transition-colors"/>
            </div>
        </div>
    )
}