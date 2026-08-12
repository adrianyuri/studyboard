import { NextRequest, NextResponse } from "next/server";
import { getGroupById } from "@/lib/data";

type Params = { params: Promise<{ id: string; taskId: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const task = group.tasks.find((t) => t.id === taskId);

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const body = await request.json();
  Object.assign(task, body);

  return NextResponse.json(task);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const index = group.tasks.findIndex((t) => t.id === taskId);

  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const [deleted] = group.tasks.splice(index, 1);

  return NextResponse.json(deleted);
}