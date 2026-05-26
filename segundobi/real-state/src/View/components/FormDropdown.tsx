interface DropdownProps {
    icon: React.ReactNode,
    values: string[],
}

export function FormDropDown({icon, values}: DropdownProps) {
    return (
        <select id="" className="bg-off-white rounded-lg py-[14px] px-4 shadow-sm text-charcoal font-family-primary">
            {values.map((value) => (
                <option value={value}>{value}</option>
            ))}
        </select>
    )
}