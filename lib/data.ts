/**
 * lib/data.ts
 * -----------
 * This file pretends to be a database. In a real app you'd swap these
 * functions for Prisma/Drizzle queries, a fetch() to an external API, etc.
 * The important idea for learning Next.js is *where* this file gets called
 * from, not how it stores data:
 *
 *   - Server Components (app/**\/page.tsx) import these functions directly.
 *   - Server Actions (lib/actions.ts) import these functions directly.
 *   - Route Handlers (app/api/**\/route.ts) also import these functions,
 *     so external clients (a mobile app, a third party) have an HTTP API
 *     to hit -- but your own pages never need to fetch() your own API.
 *
 * Data lives in memory (a plain array), so it resets whenever the dev
 * server restarts. That's fine for learning; note the comment near the
 * bottom about swapping in a real database later.
 */

export type Task = {
  id: string;
  title: string;
  notes: string;
  done: boolean;
  priority: "low" | "medium" | "high";
  createdAt: string;
};

let tasks: Task[] = [
  {
    id: "1",
    title: "Learn the App Router folder conventions",
    notes: "page.tsx, layout.tsx, loading.tsx, error.tsx, route.ts",
    done: true,
    priority: "high",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
  {
    id: "2",
    title: "Understand Server vs Client Components",
    notes: "Server by default. Add 'use client' only when you need interactivity.",
    done: false,
    priority: "high",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "3",
    title: "Try a Server Action",
    notes: "Submit the 'New task' form and watch it work without writing an API call.",
    done: false,
    priority: "medium",
    createdAt: new Date().toISOString(),
  },
];

/** Small helper so loading.tsx skeletons are actually visible while learning. */
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTasks(): Promise<Task[]> {
  await delay(400);
  // Newest first
  return [...tasks].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getTask(id: string): Promise<Task | undefined> {
  await delay(300);
  return tasks.find((t) => t.id === id);
}

export async function getStats() {
  await delay(200);
  return {
    total: tasks.length,
    done: tasks.filter((t) => t.done).length,
    open: tasks.filter((t) => !t.done).length,
  };
}

export async function createTask(input: {
  title: string;
  notes: string;
  priority: Task["priority"];
}): Promise<Task> {
  await delay(300);
  const task: Task = {
    id: crypto.randomUUID(),
    title: input.title,
    notes: input.notes,
    done: false,
    priority: input.priority,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

export async function toggleTask(id: string): Promise<Task | undefined> {
  await delay(150);
  const task = tasks.find((t) => t.id === id);
  if (task) task.done = !task.done;
  return task;
}

export async function deleteTask(id: string): Promise<void> {
  await delay(150);
  tasks = tasks.filter((t) => t.id !== id);
}

/**
 * Swapping this for a real database later:
 * Replace the array above with, e.g., Prisma calls (`prisma.task.findMany()`),
 * keep every function signature the same, and nothing in app/ or components/
 * has to change. That boundary is the whole point of this file existing.
 */
