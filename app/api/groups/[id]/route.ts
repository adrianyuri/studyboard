import { NextRequest, NextResponse } from "next/server";
import { getGroups, getGroupById } from "@/lib/data";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json(group);
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const body = await request.json();
  Object.assign(group, body);

  return NextResponse.json(group);
}

export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const groups = getGroups();
  const index = groups.findIndex((g) => g.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const [deleted] = groups.splice(index, 1);

  return NextResponse.json(deleted);
}