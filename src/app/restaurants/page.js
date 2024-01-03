import React from "react";
import Image from "next/image";
import RestaurantCard from "@/components/ui/RestaurantCard";
import { fetchRestaurants } from "@/lib/utils/fetchRestarants";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const restaurants = [
//   {
//     name: "Bruncherie",
//     description: "Breakfast, lunch, desserts",
//     imageUrl: "/restaurant1.jpeg", // Replace with actual image path
//     price: "$$",
//     deliveryTime: "25-35 min",
//   },
//   {
//     name: "Pasta Palace",
//     description: "Authentic Italian pastas",
//     imageUrl: "/restaurant1.jpeg", // Replace with actual image path
//     price: "$$$",
//     deliveryTime: "30-45 min",
//   },
//   {
//     name: "Burger Bistro",
//     description: "Gourmet burgers and fries",
//     imageUrl: "/restaurant1.jpeg", // Replace with actual image path
//     price: "$",
//     deliveryTime: "15-25 min",
//   },
// ];
async function getData() {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
}

const page = async () => {
  const restaurants = await getData();

  return (
    <>
      <Image
        src='/restaurantHero.png'
        alt='logo'
        width={1152}
        height={400}
        className='w-full'
      />
      <div className='flex flex-col items-center justify-center p-4 border-b border-darkBlue/25'>
        <div className='flex items-center w-full max-w-md'>
          <input
            className='w-full h-12 px-4 transition duration-200 border rounded-l-lg focus:border-blue-500 focus:outline-none'
            type='text'
            placeholder='Delivery address'
          />
          <button className='h-12 px-4 text-white bg-darkBlue rounded-r-lg hover:bg-blue-700'>
            Search
          </button>
        </div>
        <div className='flex mt-2 gap-4'>
          <button className='bg-darkBlue rounded-2xl text-white p-4 ml-4 cursor hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'>
            open now
          </button>
          <button className='cursor p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'>
            free delivery
          </button>
          <button className='cursor p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'>
            5 stars
          </button>
        </div>
      </div>
      <h1 className='text-2xl font-semibold'>Popular Restaurants</h1>
      <div className='flex flex-col items-center justify-center p-4 border-b border-darkBlue/25'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 justify-items-center md:justify-items-center'>
          {restaurants &&
            restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                name={restaurant.name}
                description={restaurant.description}
                address={restaurant.address}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default page;
