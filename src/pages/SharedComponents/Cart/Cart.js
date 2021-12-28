import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import useAuth from "../../../hooks/useAuth";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
  const { open, setOpen, cart, setCart } = useAuth();
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const updatedAmount = cart.reduce((a, b) => a + b.quantity, 0);
    const updatedPrice = cart.reduce((a, b) => a + b.quantity * b.price, 0);
    setTotalAmount(updatedAmount);
    setTotalPrice(updatedPrice);
  }, [cart]);

  const increaseQty = (item) => {
    const newCart = cart.map((cartItem) =>
      cartItem._id === item._id
        ? { ...item, quantity: item.quantity + 1 }
        : cartItem
    );
    setCart(newCart);
  };
  const decreaseQty = (item) => {
    const newCart = cart.map((cartItem) =>
      cartItem._id === item._id
        ? { ...item, quantity: item.quantity - 1 }
        : cartItem
    );
    setCart(newCart);
  };
  const deleteCartItem = (watch) => {
    const newCart = cart.filter((item) => item._id !== watch._id);
    setCart(newCart);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <Dialog.Title className="text-lg font-medium text-gray-900">
                      <div className=" flex justify-between items-center py-3 -2xl px-2">
                        <h3 className="  text-xl font-medium">Your Cart</h3>
                        {cart.length ? (
                          <p className="italic text-gray-500">
                            <span>{cart?.length}</span>
                            <span>
                              {cart?.length > 1 ? " items" : " item"}
                            </span>{" "}
                            Added
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </Dialog.Title>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Main Cart */}
                    <aside className="">
                      <div className="rounded-2xl shadow-lg">
                        {/* Cart Items */}
                        <div className="p-2 bg-white rounded-2xl">
                          {cart.length ? (
                            <>
                              {cart.map((item) => (
                                <CartItem
                                  key={item.name}
                                  item={item}
                                  increaseQty={increaseQty}
                                  decreaseQty={decreaseQty}
                                  deleteCartItem={deleteCartItem}
                                />
                              ))}
                              {/* cart total */}
                              <span className="text-gray-600 italic font-medium">
                                Total {totalAmount}{" "}
                                {totalAmount > 1 ? "Watches" : "Watch"}
                              </span>

                              <div className="space-y-4 py-2">
                                <div className="flex justify-between font-medium text-lg">
                                  <p>Total Price:</p>
                                  <p>$ {totalPrice}</p>
                                </div>
                                <button className="w-full bg-orange-500 p-2 text-white font-medium rounded-lg">
                                  Proceed To Check Out
                                  <p></p>
                                </button>
                              </div>
                            </>
                          ) : (
                            <div>
                              <img
                                src="https://i.ibb.co/Nr3SPjs/undraw-empty-cart-co35.png"
                                alt="empty cart"
                              />
                              <div className="text-center text-gray-400 leading-5">
                                <p>Your cart is empty</p>
                                <p>Add Some Watches.</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </aside>
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
