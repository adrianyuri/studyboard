import { NextRequest, NextResponse } from "next/server";
import { createTask, getGroupById, getTasksByGroup } from "@/lib/data.ts";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = await getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json(await getTasksByGroup(id));
}

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = await getGroupById(id);

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

  const newTask = await createTask(id, body.title);

  return NextResponse.json(newTask, { status: 201 });
}
