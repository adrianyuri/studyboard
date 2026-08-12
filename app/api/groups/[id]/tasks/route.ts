import { NextRequest, NextResponse } from "next/server";
import { getGroupById, Task } from "@/lib/data";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json(group.tasks);
}

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const body = await request.json();

  if (!body.title) {
    return NextResponse.json(
      { error: "title is required" },
      { status: 400 }
    );
  }

  const newTask: Task = {
    id: `t${Date.now()}`,
    title: body.title,
    done: false,
  };

  group.tasks.push(newTask);

  return NextResponse.json(newTask, { status: 201 });
}