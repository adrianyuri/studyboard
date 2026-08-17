export type Task = {
  id: string;
  title: string;
  done: boolean;
};

export type Group = {
  id: string;
  name: string;
  subject: string;
  memberCount: number;
  members: string[];
  tasks: Task[];
};

// Static mock data — will be replaced by real database queries in Week 5.
const groups: Group[] = [
  {
    id: "1",
    name: "Mobile App Makers",
    subject: "Software Development",
    memberCount: 5,
    members: ["Andrea", "Carlo", "Denise", "Miguel", "Rina"],
    tasks: [
      { id: "t1", title: "Sketch the home-screen layout", done: true },
      { id: "t2", title: "Build the sign-in form", done: false },
      { id: "t3", title: "Test the app on a phone", done: false },
    ],
  },
  {
    id: "2",
    name: "Campus Podcast Team",
    subject: "Media Studies",
    memberCount: 4,
    members: ["Aira", "Ben", "Chloe", "Diego"],
    tasks: [
      { id: "t4", title: "Choose this week's interview topic", done: true },
      { id: "t5", title: "Record the opening segment", done: false },
      { id: "t6", title: "Edit the episode audio", done: false },
    ],
  },
  {
    id: "3",
    name: "Green Campus Project",
    subject: "Environmental Science",
    memberCount: 6,
    members: ["Elena", "Farid", "Gia", "Hana", "Ivan", "Jules"],
    tasks: [
      { id: "t7", title: "Measure recycling-bin usage", done: false },
      { id: "t8", title: "Design the awareness poster", done: true },
      { id: "t9", title: "Present the project proposal", done: false },
    ],
  },
];

export function getGroups(): Group[] {
  return groups;
}

export function getGroupById(id: string): Group | undefined {
  return groups.find((group) => group.id === id);
}

export function getTasksByGroup(id: string): Task[] {
  const group = getGroupById(id);
  return group ? group.tasks : [];
}
