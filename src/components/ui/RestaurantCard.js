import Image from "next/image";
import React from "react";

const RestaurantCard = ({
  name,
  description,
  imageUrl,
  price,
  deliveryTime,
}) => {
  return (
    <div className='min-w-[275px] max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-2'>
      <Image
        className='w-full'
        src={imageUrl}
        width={192}
        height={264}
        alt='Food'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {deliveryTime}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {price}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
