const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 10; i++) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await prisma.user.create({
      data: {
        email: `owner${i}@example.com`,
        hashedPassword: hashedPassword, // In a real app, hash the password
        name: `Owner ${i}`,
        address: `Owner Address ${i}`,
        role: "RESTAURANT_OWNER",
        // Add other necessary fields if required
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
