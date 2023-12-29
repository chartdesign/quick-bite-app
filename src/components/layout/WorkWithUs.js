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
        <div className='flex flex-col gap-2'>
          <div className='md:flex items-center justify-between p-2'>
            <Image
              src='/bicycle.png'
              width={464}
              height={160}
              className='hidden md:block'
            />
            <div className='flex flex-col gap-8 p-4 md:w-2/5 items-start justify-end'>
              <h3 className='text-2xl text-darkBlue mt-2 font-medium'>
                As a rider
              </h3>
              <p className='text-sm'>
                Earn money by delivering food from restaurants. All you need are
                the skills and a bike.
              </p>
              <Link
                href={"/login"}
                className='cursor text-center p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
              >
                Ride With Us
              </Link>
            </div>
          </div>

          <div className='md:flex items-center justify-between p-2'>
            <Image
              src='/restaurant.png'
              width={464}
              height={160}
              className='hidden md:block'
            />
            <div className='flex flex-col gap-8 p-4 md:w-2/5 items-start justify-end'>
              <h3 className='text-2xl text-darkBlue mt-2 font-medium'>
                As a Partner
              </h3>
              <p className='text-sm'>
                QuickBite helps restaurants grow with online ordering, loyalty
                programs, and more.
              </p>
              <Link
                href={"/login"}
                className='cursor text-center p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className='md:flex items-center justify-between p-2'>
            <Image
              src='/girlOnTarget.png'
              width={464}
              height={160}
              className='hidden md:block'
            />
            <div className='flex flex-col gap-8 p-4 md:w-2/5 items-start justify-end'>
              <h3 className='text-2xl text-darkBlue mt-2 font-medium'>
                As a Colleague
              </h3>
              <p className='text-sm'>
                Be part of a team that’s building a top-notch delivery service.
              </p>
              <Link
                href={"/login"}
                className='cursor text-center p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

const WorkWithUs = () => {
  return (
    <section className='flex flex-col items-center mt-4 max-w-4xl mx-auto border-b border-darkBlue/25'>
      <span>Work With Us</span>
      <MyDisclosure />
    </section>
  );
};

export default WorkWithUs;
