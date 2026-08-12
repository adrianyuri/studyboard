import { NextRequest, NextResponse } from "next/server";
import { getGroups, Group } from "@/lib/data";

export async function GET() {
  const groups = getGroups();
  return NextResponse.json(groups);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.subject) {
    return NextResponse.json(
      { error: "name and subject are required" },
      { status: 400 }
    );
  }

  const groups = getGroups();

  const newGroup: Group = {
    id: String(Date.now()),
    name: body.name,
    subject: body.subject,
    memberCount: body.memberCount ?? 0,
    members: body.members ?? [],
    tasks: [],
  };

  groups.push(newGroup);

  return NextResponse.json(newGroup, { status: 201 });
}