import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className='bg-white p-2 text-center border-b border-darkBlue/25'>
      <div className='max-w-3xl mx-auto flex'>
        <Image
          src='/sushi_1.png'
          width={192}
          height={264}
          alt='Picture of sushi roll'
          className='hidden lg:block'
        />
        <div className='flex flex-col items-center justify-between'>
          <div className='mb-4 flex'>
            <div>
              <h1 className='text-3xl md:text-5xl font-semibold text-gray-900 mb-3'>
                The quickest way to find the perfect bite
              </h1>
              <p className='text-base text-gray-600'>
                Discover restaurants, cafés, and bars near you.
              </p>
            </div>
          </div>
          <div className='w-full '>
            <div className='flex items-center border border-gray-300 rounded-md overflow-hidden '>
              <input
                type='text'
                placeholder='Delivery address'
                className='p-3 flex-grow'
              />
              <button className='bg-darkBlue text-white p-3'>Search</button>
              <Link href='/restaurants' className='bg-darkBlue text-white p-3'>
                View all restaurants
              </Link>
            </div>
          </div>
        </div>
        <Image
          src='/pizzaSm.png'
          width={192}
          height={176}
          alt='Picture of pizza'
          className='hidden lg:block'
        />
      </div>
    </div>
  );
};

export default HeroSection;
