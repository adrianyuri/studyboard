import TaskItem from "@/components/TaskItem";
import { getGroupById, getTasksByGroup } from "@/lib/data";

export default async function GroupDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const group = getGroupById(id);
  const tasks = getTasksByGroup(id);

  if (!group) {
    return <p className="text-purple-700">Group not found.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{group.name}</h1>
      <p className="mt-1 text-sm text-purple-800">{group.subject}</p>
      <p className="mt-1 text-sm text-purple-900">{group.memberCount} members</p>

      <h2 className="mt-8 text-xl font-semibold">Members</h2>
      <ul className="mt-4 list-inside list-disc space-y-1 text-purple-900">
        {group.members.map((member) => (
          <li key={member}>{member}</li>
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
