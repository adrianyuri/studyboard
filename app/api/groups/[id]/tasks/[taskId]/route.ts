import { NextRequest, NextResponse } from "next/server";
import { deleteTask, getGroupById, updateTask } from "@/lib/data.ts";

type Params = { params: Promise<{ id: string; taskId: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const group = await getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const task = group.tasks.find((t) => t.id === taskId);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const body = await request.json();
  const updated = await updateTask(id, taskId, body);

  return NextResponse.json(updated);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const group = await getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const task = group.tasks.find((t) => t.id === taskId);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  await deleteTask(id, taskId);

  return NextResponse.json(task);
}
