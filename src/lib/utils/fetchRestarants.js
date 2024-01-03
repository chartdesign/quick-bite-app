import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function fetchRestaurants() {
  const restaurants = await prisma.restaurant.findMany();
  return {
    props: {
      restaurants,
    },
  };
}
