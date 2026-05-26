interface InputProps {
    placeholder: string,
    type: string,
}

export function FormInput({placeholder, type}: InputProps) {
    return (
        <input className="bg-off-white rounded-lg py-[14px] px-4 shadow-sm font-family-primary" placeholder={placeholder}  type={type}></input>
    )
}