import TaskItem from "@/components/TaskItem";
import { getGroupById, getTasksByGroup } from "@/lib/data.ts";

export default async function GroupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = await getGroupById(id);
  const tasks = await getTasksByGroup(id);

  if (!group) {
    return <p className="text-red-700">Group not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{group.name}</h1>
      <p className="mt-1 text-sm text-slate-700">{group.subject}</p>
      <p className="mt-1 text-sm text-slate-700">{group.memberCount} members</p>

      <h2 className="mt-8 text-xl font-semibold">Members</h2>
      <ul className="mt-4 list-inside list-disc space-y-1 text-slate-800">
        {group.members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Tasks</h2>
      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
