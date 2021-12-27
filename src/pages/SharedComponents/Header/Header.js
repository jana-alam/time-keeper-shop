import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <Disclosure as="nav" className="shadow-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Navbar Left Side on large screen */}
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    {/* logo */}
                    <h1 className="text-2xl font-medium text-orange-500">
                      TimeKeeper
                    </h1>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {/* Navigation menu on large device */}
                      <a
                        href="#home"
                        className=" hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-gray-800"
                      >
                        Home
                      </a>
                      <a
                        href="#shop"
                        className="hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-gray-800"
                      >
                        Shop
                      </a>
                    </div>
                  </div>
                </div>
                {/* Navbar Right Side */}
                <div className="flex items-center pr-2  sm:ml-6 sm:pr-0 space-x-3 text-gray-300">
                  {/* User Name */}
                  <span className="text-yellow-500 font-medium">Hi! Jana</span>
                  {/* <HeaderCart /> */}

                  {/* cart menu */}

                  {/* cart menu end*/}
                </div>
              </div>
            </div>
            {/* Mobile Menus */}
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="shop"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Shop
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
