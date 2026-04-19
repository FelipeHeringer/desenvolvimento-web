import { useState } from "react";
import { PlusIcon } from "../../assets/Icons";

interface TaskFormProps {
    onAddTask: (text: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
    const [value, setValue] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (value.trim()) {
            onAddTask(value);
            setValue("");
        }
    }

    return (
        <section className="flex items-center gap-2.5 mb-4 pb-2.5 border-b-[1.5px] border-b-solid border-b-[#d0d3da]">
            <form className="flex items-center gap-2.5 flex-1" onSubmit={handleSubmit}>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Adicionar uma nova tarefa"
                    className="placeholder-[#aaa] flex-1 border-none outline-none text-[0.88rem] color-[#333] bg-transparent" />
                <button
                    type="submit"
                    className="w-8 h-8 rounded-lg border-none bg-[#1c1c2e] flex items-center justify-center transition-colors duration-150 hover:bg-[#2e2e4a]">
                    <PlusIcon color="#f1f1f1" height={16} width={16}/>
                </button>
            </form>
        </section>
    )
}