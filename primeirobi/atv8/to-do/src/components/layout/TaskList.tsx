import type { Task } from "../../models/Task";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

export default function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
    return (
        <section>
            <ul className="flex list-none flex-col gap-2 mt-2">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </ul>
        </section>
    )
}