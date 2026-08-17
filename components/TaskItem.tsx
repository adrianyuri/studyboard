"use client";

import { useState } from "react";
import { Task } from "@/lib/data.ts";

export default function TaskItem({ task }: { task: Task }) {
    const [done, setDone] = useState(task.done);

    return (
        <li className="flex items-center gap-3 rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900">
            <input
                type="checkbox"
                checked={done}
                onChange={() => setDone(!done)}
                className="h-4 w-4"
            />
            <span className={done ? "line-through text-slate-500" : ""}>
                {task.title}
            </span>
        </li>
    );
}
