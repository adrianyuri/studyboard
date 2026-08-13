/**
 * lib/actions.ts
 * --------------
 * The "use server" directive at the top of this file marks every exported
 * function as a Server Action: a function that always runs on the server,
 * but that Client Components and <form> elements can call as if it were
 * a normal JavaScript function -- no hand-written /api/... fetch, no
 * client-side JSON.stringify, no manual loading/error wiring for the call
 * itself (React's useTransition / useFormStatus give you that instead).
 *
 * Two things every action here does, and why:
 *  1. Call the data layer (lib/data.ts) to actually change something.
 *  2. Call revalidatePath() so the pages that read that data are marked
 *     stale and Next.js re-renders them with fresh data on next request.
 *     Skipping step 2 is the #1 "why isn't my UI updating" bug beginners
 *     hit with Server Actions.
 */
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createTask, deleteTask, toggleTask } from "./data";

export async function createTaskAction(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const notes = String(formData.get("notes") || "").trim();
  const priority = String(formData.get("priority") || "medium") as
    | "low"
    | "medium"
    | "high";

  if (!title) {
    // In a real app you'd return a validation error object instead of
    // throwing -- see the README section on `useActionState` for that
    // pattern. Thrown errors here are caught by the nearest error.tsx.
    throw new Error("Title is required");
  }

  await createTask({ title, notes, priority });

  // Both of these pages show task lists, so both need to know data changed.
  revalidatePath("/tasks");
  revalidatePath("/");

  redirect("/tasks");
}

export async function toggleTaskAction(id: string) {
  await toggleTask(id);
  revalidatePath("/tasks");
  revalidatePath(`/tasks/${id}`);
  revalidatePath("/");
}

export async function deleteTaskAction(id: string) {
  await deleteTask(id);
  revalidatePath("/tasks");
  revalidatePath("/");
  redirect("/tasks");
}
