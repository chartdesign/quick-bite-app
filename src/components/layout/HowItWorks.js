"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function MyDisclosure() {
  return (
    <Disclosure>
      <Disclosure.Button className='py-2'>
        <ChevronDownIcon className='w-5 h-5' />
      </Disclosure.Button>
      <Disclosure.Panel className='text-gray-500'>
        <div className='md:flex'>
          <div className='flex flex-col items-center justify-center p-2'>
            <Image src='/step1.png' width={125} height={125} />
            <h3 className='text-2xl text-darkBlue mt-2 font-medium'>Step 1</h3>
            <p className='text-sm'>
              Enter Your location. Type in your address, or pin your location by
              enabling location services.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <Image src='/step2.png' width={125} height={125} />
            <h3 className='text-2xl text-darkBlue mt-2 font-medium'>Step 2</h3>
            <p className='text-sm'>
              Now select a restaurant and a menu item. You're one step closer to
              the perfect quick bite.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center p-2'>
            <Image src='/step3.png' width={125} height={125} />
            <h3 className='text-2xl text-darkBlue mt-2 font-medium'>Step 3</h3>
            <p className='text-sm'>
              Settle your payment. Then, sit back and relax as we make your food
              ready!
            </p>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}

const HowItWorks = () => {
  return (
    <section className='flex flex-col items-center mt-4 max-w-4xl mx-auto border-b border-darkBlue/25'>
      <span>HowItWorks</span>
      <MyDisclosure />
    </section>
  );
};

export default HowItWorks;
