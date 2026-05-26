interface TextAreaProps {
    rows: number,
    placeholder,
}

export function FormTextArea({rows, placeholder}: TextAreaProps) {
    return (
        <textarea className="bg-off-white rounded-lg py-[14px] px-4 shadow-sm resize-none font-family-primary" placeholder={placeholder} rows={rows}></textarea>
    )
}