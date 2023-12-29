"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Topics", href: "/topics" },
  { name: "Features", href: "#" },
  { name: "Ice Breakers", href: "#" },
  { name: "Company", href: "#" },
];

function AuthLinks({ status, userName }) {
  if (status === "authenticated") {
    return (
      <>
        <Link href={"/profile"} className='whitespace-nowrap ml-8'>
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className='bg-darkBlue rounded-2xl text-white p-4 ml-4 cursor hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Logout
        </button>
      </>
    );
  }
  if (status === "unauthenticated") {
    return (
      <>
        <Link
          href={"/login"}
          className='cursor p-4 border border-darkBlue rounded-2xl hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className='bg-darkBlue rounded-2xl text-white p-4 ml-4 cursor hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Register
        </Link>
      </>
    );
  }
  return null;
}

export default function Header() {
  const { data: session, status } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className=' max-w-4xl mx-auto'>
      <nav
        className='flex items-center justify-between p-4 lg:px-6'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='-m-1.5 p-1.5 cursor text-darkBlue font-semibold md:text-4xl'
          >
            <span className='sr-only'>Quick Bites</span>
            Quick Bites
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        {/* <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div> */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end items-center'>
          <AuthLinks status={status} userName={session?.user?.name || "User"} />
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              Connect Cues
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <AuthLinks
                  status={status}
                  userName={session?.user?.name || "User"}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
