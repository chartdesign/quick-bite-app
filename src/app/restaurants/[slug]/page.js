import React from "react";
import { fetchRestaurantByName } from "@/lib/utils/fetchRestarants";
import ShoppingCart from "@/components/ui/ShoppingCart";

const page = async ({ params }) => {
  const restaurant = await fetchRestaurantByName(params.slug);
  console.log(params);
  return (
    <div>
      Welcome to: {restaurant.name}
      {restaurant.address}
      {restaurant.phone}
      {restaurant.description}
      <div>
        {restaurant.menu.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            {item.items.map((menuItem) => (
              <div
                key={menuItem.id}
                className='border-2 border-gray-200 p-4 rounded-2xl'
              >
                <p>{menuItem.name}</p>
                <p>{menuItem.description}</p>
                <p>{menuItem.price}</p>
                <p>{menuItem.category}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <ShoppingCart />
    </div>
  );
};

export default page;
