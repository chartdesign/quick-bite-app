"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button className='py-2'>
        <ChevronDownIcon className='w-5 h-5' />
      </Disclosure.Button>
      <Disclosure.Panel className='text-gray-500'>
        <div className='flex flex-col gap-4'>
          <div className='md:flex items-center justify-between p-2'>
            <div className='flex flex-col gap-8 p-4 md:w-2/5 items-start justify-end'>
              <h3 className='text-2xl text-darkBlue mt-2 font-medium'>
                Order easily!
              </h3>
              <p className='text-sm'>
                Get the most delicious bites delivered to your door with
                QuickBite. Our fastest delivery service carries a variety of
                cuisines from local restaurants.
              </p>
              <Link
                href={"/login"}
                className='cursor text-center text-white p-4 border bg-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
              >
                Download App
              </Link>
            </div>
            <Image
              src='/appImage.png'
              width={464}
              height={160}
              className='hidden md:block'
            />
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

const DownloadOurApp = () => {
  return (
    <section className='flex flex-col items-center mt-4 max-w-4xl mx-auto border-b border-darkBlue/25'>
      <span>Download Our App</span>
      <MyDisclosure />
    </section>
  );
};

export default DownloadOurApp;
