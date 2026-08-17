import { NextRequest, NextResponse } from "next/server";
import { createGroup, getGroups } from "@/lib/data.ts";

export async function GET() {
  const groups = await getGroups();
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

  const newGroup = await createGroup({
    name: body.name,
    subject: body.subject,
    memberCount: body.memberCount ?? 1,
  });

  return NextResponse.json(newGroup, { status: 201 });
}
