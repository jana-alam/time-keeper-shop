import React, { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const {
    value: { user, logOut },
    setOpen,
    cart,
  } = useAuth();
  const handleLogOut = () => {
    logOut();
  };
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
                      <NavLink
                        to={"/home"}
                        className=" hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-gray-800"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to={"/shop"}
                        className="hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-lg font-medium text-gray-800"
                      >
                        Shop
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Navbar Right Side */}
                <div className="flex items-center pr-2  sm:ml-6 sm:pr-0 space-x-3 text-gray-300">
                  {/* User Name */}
                  <div className="flex items-center pr-2 sm:ml-6 sm:pr-0 space-x-4">
                    {user?.email ? (
                      <div className="space-x-4 flex items-center">
                        <span className="text-orange-600 text-xl  border-b-2 border-transparent">
                          {user?.displayName}
                        </span>
                        <NavLink
                          className="text-orange-600 text-xl  border-b-2 border-transparent hover:text-gray-200"
                          activeclassname=" border-white"
                          to="/dashboard"
                        >
                          DashBoard
                        </NavLink>
                        <div
                          className="relative cursor-pointer"
                          onClick={() => setOpen(true)}
                        >
                          <ShoppingCartIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                          {cart.length >= 1 && (
                            <span className="bg-orange-600 text-white px-1 text-xs rounded-md absolute bottom-3 left-4">
                              {cart.length}{" "}
                            </span>
                          )}
                        </div>
                        <button
                          onClick={handleLogOut}
                          className="px-4 py-2 bg-white text-red-600 font-medium rounded-full"
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        className="text-orange-600 text-xl border-b-2 border-transparent hover:text-orange-400"
                        activeclassname="border-orange"
                        to="/login"
                      >
                        Login
                      </NavLink>
                    )}
                  </div>
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
                  href="/home"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/shop"
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
