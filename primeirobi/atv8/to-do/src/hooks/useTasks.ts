import { useState } from "react";
import type { Task } from "../models/Task";

const QUOTES = [
    '"The secret of getting ahead is getting started." – Mark Twain',
    '"Action is the foundational key to all success." – Pablo Picasso',
    '"Focus on being productive instead of busy." – Tim Ferriss',
];

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [quote] = useState(
        () => QUOTES[Math.floor(Math.random() * QUOTES.length)]
    );

    function addTask(text: string) {
        const trimmed = text.trim();
        if (!trimmed) return;
        setTasks((prev) => [
            ...prev,
            { id: Date.now(), text: trimmed, completed: false },
        ]);
    }

    function deleteTask(id: number) {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    function toggleTask(id: number) {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    }

    const remaining = tasks.filter((t) => !t.completed).length;

    return { tasks, addTask, deleteTask, toggleTask, remaining, quote };
}