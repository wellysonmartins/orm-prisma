import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Mônica Martins",
        email: "monicamartins@gmail.com",
      },
      {
        name: "Pedro Tavares",
        email: "pedrotavares@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});
