import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function fetchRestaurants() {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
}
export async function fetchRestaurantByName(name) {
  const restaurant = await prisma.restaurant.findUnique({
    where: { name: name },
    include: {
      menu: {
        include: {
          items: true,
        },
      },
    },
  });
  if (!restaurant) {
    throw new Error("Restaurant not found");
  }
  console.log(restaurant);
  return restaurant;
}
