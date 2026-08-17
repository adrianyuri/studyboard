import Link from "next/link";
import { Group } from "@/lib/data.ts";

export default function GroupCard({ group }: { group: Group }) {
  const completedCount = group.tasks.filter((t) => t.done).length;

  return (
    <Link
      href={`/groups/${group.id}`}
      className="block rounded-lg border border-slate-300 bg-white p-5 shadow-sm transition-shadow hover:border-blue-400 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-slate-900">{group.name}</h3>
      <p className="mt-1 text-sm text-slate-700">{group.subject}</p>
      <div className="mt-3 flex justify-between text-sm text-slate-700">
        <span>{group.memberCount} members</span>
        <span>
          {completedCount}/{group.tasks.length} tasks done
        </span>
      </div>
    </Link>
  );
}
