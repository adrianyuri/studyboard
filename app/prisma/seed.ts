import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data so this script can be re-run safely.
  await prisma.task.deleteMany();
  await prisma.group.deleteMany();

  await prisma.group.create({
    data: {
      name: "Mobile App Makers",
      subject: "Software Development",
      memberCount: 5,
      members: {
        create: ["Andrea", "Carlo", "Denise", "Miguel", "Rina"].map((name) => ({ name })),
      },
      tasks: {
        create: [
          { title: "Sketch the home-screen layout", done: true },
          { title: "Build the sign-in form", done: false },
          { title: "Test the app on a phone", done: false },
        ],
      },
    },
  });

  await prisma.group.create({
    data: {
      name: "Campus Podcast Team",
      subject: "Media Studies",
      memberCount: 4,
      members: {
        create: ["Aira", "Ben", "Chloe", "Diego"].map((name) => ({ name })),
      },
      tasks: {
        create: [
          { title: "Choose the interview topic", done: true },
          { title: "Record the opening segment", done: false },
          { title: "Edit the episode audio", done: false },
        ],
      },
    },
  });

  await prisma.group.create({
    data: {
      name: "Green Campus Project",
      subject: "Environmental Science",
      memberCount: 6,
      members: {
        create: ["Elena", "Farid", "Gia", "Hana", "Ivan", "Jules"].map((name) => ({ name })),
      },
      tasks: {
        create: [
          { title: "Measure recycling-bin usage", done: false },
          { title: "Design the awareness poster", done: true },
          { title: "Present the project proposal", done: false },
        ],
      },
    },
  });

  console.log("Seed data created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
