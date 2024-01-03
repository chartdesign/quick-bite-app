const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const prisma = new PrismaClient();

async function main() {
  const owners = [
    "6594a398767a12f9bb236385",
    "6594a399767a12f9bb236386",
    "6594a39a767a12f9bb236387",
    "6594a399767a12f9bb236388",
    "6594a399767a12f9bb236389",
    "6594a39a767a12f9bb23638a",
    "6594a39a767a12f9bb23638b",
    "6594a39a767a12f9bb23638c",
    "6594a39b767a12f9bb23638d",
    "6594a39b767a12f9bb23638e",
  ];
  for (let i = 0; i < 10; i++) {
    const restaurant = await prisma.restaurant.create({
      data: {
        name: `Restaurant ${i}`,
        description: `Description for Restaurant ${i}`,
        address: `Address ${i}`,
        phone: `Phone ${i}`,
        owner: owners[i], // You should replace this with a valid User ID
        // Create a menu for each restaurant
        menu: {
          create: [
            {
              items: {
                create: [
                  {
                    name: `MenuItem 1 for Restaurant ${i}`,
                    description: `Description for MenuItem 1 of Restaurant ${i}`,
                    price: 10.99,
                    category: "Category 1",
                  },
                  // Add more menu items as needed
                  {
                    name: `MenuItem 2 for Restaurant ${i}`,
                    description: `Description for MenuItem 2 of Restaurant ${i}`,
                    price: 12.99,
                    category: "Category 2",
                  },
                ],
              },
            },
          ],
        },
      },
    });

    console.log(`Created restaurant with ID: ${restaurant.id}`);
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
