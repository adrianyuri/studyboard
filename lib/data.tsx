export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Group = {
  groupId: string;
  groupName: string;
  subjectName: string;
  memberCount: number;
  members: string[];
  tasks: Task[];
};

// Static mock data — will be replaced by real database queries in Week 5.
const groups: Group[] = [
  {
    groupId: "1",
    groupName: "Algorithms Mastery Lab",
    subjectName: "Mathematics",
    memberCount: 5,
    members: ["yuri", "jericho", "kirt", "layla", "pijo"],
    tasks: [
      { id: "t1", title: "Review binary trees", done: false },
      { id: "t2", title: "Practice linked list problems", done: true },
      { id: "t3", title: "Summarize Big-O notation", done: false },
    ],
  },
  {
    groupId: "2",
    groupName: "Quantum Explorer Squad",
    subjectName: "Engineering",
    memberCount: 3,
    members: ["Frank", "Grace", "Henry"],
    tasks: [
      { id: "t4", title: "Solve entropy problem set", done: false },
      { id: "t5", title: "Read Chapter 4", done: false },
    ],
  },
  {
    groupId: "3",
    groupName: "World Literature Circle",
    subjectName: "English",
    memberCount: 8,
    members: ["Iris", "John", "Kate", "Leo", "Mia", "Noah", "Olivia", "Paul"],
    tasks: [
      { id: "t6", title: "Outline Chapter 2 discussion", done: true },
      { id: "t7", title: "Prepare debate points", done: false },
      { id: "t8", title: "Watch assigned documentary", done: true },
    ],
  },
];

export function getGroups(): Group[] {
  return groups;
}

export function getGroupById(id: string): Group | undefined {
  return groups.find((group) => group.groupId === id);
}

export function getTasksByGroup(id: string): Task[] {
  const group = getGroupById(id);
  return group ? group.tasks : [];
}
