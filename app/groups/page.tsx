import GroupCard from "@/components/GroupCard";
import { getGroups } from "@/lib/data";

export default function Home() {
  const groups = getGroups().slice(0,2);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to StudyBoard!</h1>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <GroupCard 
          key={group.id} 
          group={group} 
          />
        ))}
      </div>
    </main>
  );
}5