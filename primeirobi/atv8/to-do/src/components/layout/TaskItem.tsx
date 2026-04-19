// components/layout/TaskItem.tsx
import type { Task } from "../../models/Task";
import { CloseIcon } from "../../assets/Icons";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return (
    <li className="flex items-center gap-2.5 border-[1.5px] border-[#d8dae0] rounded-[10px] px-3 py-2 hover:border-[#b5b8c4] transition-colors">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 cursor-pointer accent-[#1c1c2e] shrink-0"
      />
      <span className={`flex-1 text-[0.875rem] ${task.completed ? "line-through text-[#aaa]" : "text-[#222]"}`}>
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="px-1 rounded hover:text-[#444] hover:bg-[#f0f0f0] transition-colors"
      >
        <CloseIcon height={18} width={18}/>
      </button>
    </li>
  );
}