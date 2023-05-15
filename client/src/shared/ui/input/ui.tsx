import { ReactNode } from "react"

interface InputProps {
    onChange: (v: string) => void,
    name: string,
    value: string,
    label: string,
    disabled?: boolean,
    error?: string | null,
    icon?: ReactNode,
    type?: 'text' | 'password'
}
export const Input = ({
    onChange,
    name,
    value,
    label,
    disabled,
    error,
    icon,
    type = 'text',
}:InputProps) => {
    return (
        <label className="w-full flex flex-col" htmlFor={name}>
            <span className="text-left text-grey text-[12px]">{label}</span>
            <div className="relative w-full flex items-center text-sm">
                <input type={type} 
                disabled={disabled} 
                onChange={(e) => onChange(e.target.value)} 
                value={value} 
                className={`w-full hover:border-[#1c2c4c] focus:border-[#1c2c4c] outline-none ${error && 'text-error'} pr-8 bg-transparent pb-1 border-b-[1px] border-grey`} />
                <span className="absolute right-0">{icon}</span>
            </div>
        </label>
    )
}