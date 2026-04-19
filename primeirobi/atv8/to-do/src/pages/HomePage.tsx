import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import TaskList from "../components/layout/TaskList";
import TaskForm from "../components/layout/TasksForm";
import { useTasks } from "../hooks/useTasks";

export function HomePage() {
    const { tasks, addTask, deleteTask, toggleTask, remaining, quote } = useTasks();

    return (
        <main className="w-full px-6 py-10 sm:px-9 md:max-w-110 md:bg-white md:shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:rounded-[20px]">
            <Header />
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
            <Footer remaining={remaining} quote={quote} />
        </main>
    )
}
