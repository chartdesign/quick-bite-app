"use client";
import React, { useState, useContext } from "react";
import { CartContext } from "@/app/context/Provider";

const ShoppingCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const price = 7.5;
  const deliveryFee = 3.26;
  const subtotal = price * quantity;

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1);

  const handleAddToCart = (menuItem) => {
    setCart((prev) => {
      // Check if item already in cart
      const itemInCart = prev.find((item) => item.id === menuItem.id);

      if (itemInCart) {
        // If so, increment quantity
        return prev.map((item) =>
          item.id === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not, add new item with quantity 1
        return [...prev, { ...menuItem, quantity: 1 }];
      }
    });
  };

  return (
    <div className='max-w-sm mx-auto my-10 p-6 bg-white rounded-lg shadow-md'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-semibold'>Shopping cart</h2>
      </div>
      <div className='flex justify-between items-center border-b pb-4'>
        <span className='text-gray-600'>Artichoke Sandwich</span>
        <span className='text-gray-900 font-semibold'>${price.toFixed(2)}</span>
      </div>
      <div className='flex justify-between items-center my-4'>
        <span className='text-gray-600'>Quantity</span>
        <div className='flex items-center'>
          <button
            onClick={decrement}
            className='text-gray-500 focus:outline-none focus:text-gray-600'
          >
            <span>-</span>
          </button>
          <span className='text-gray-700 mx-2'>{quantity}</span>
          <button
            onClick={increment}
            className='text-gray-500 focus:outline-none focus:text-gray-600'
          >
            <span>+</span>
          </button>
        </div>
      </div>
      <div className='flex justify-between items-center border-t pt-4'>
        <span>Subtotal</span>
        <span className='font-semibold'>${subtotal.toFixed(2)}</span>
      </div>
      <div className='flex justify-between items-center my-2'>
        <span className='text-gray-600'>Delivery fee</span>
        <span className='font-semibold'>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className='flex justify-between items-center border-t pt-4'>
        <span>Total</span>
        <span className='font-semibold'>
          ${(subtotal + deliveryFee).toFixed(2)}
        </span>
      </div>
      <button
        onClick={() => handleAddToCart(item)}
        className='mt-6 w-full bg-blue-500 text-white p-3 rounded shadow hover:bg-blue-600 focus:outline-none'
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
