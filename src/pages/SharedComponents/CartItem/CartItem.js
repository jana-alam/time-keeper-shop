import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

const CartItem = ({ item, increaseQty, decreaseQty, deleteCartItem }) => {
  const handleIncrease = (item) => {
    increaseQty(item);
  };
  const handleDecrease = (item) => {
    decreaseQty(item);
  };
  const handleDelete = (item) => {
    deleteCartItem(item);
  };
  return (
    <div className="p-2 bg-orange-50 my-3  text-gray-700 text-sm">
      <div className="flex items-center justify-between ">
        {/* item description */}
        <div className="flex flex-col">
          <p className="font-semibold">{item.name}</p>
          <p>$ {item.quantity * item.price}</p>
        </div>
        <div className="flex space-x-3">
          {/* qty changing button */}
          <div className="space-x-2">
            <button
              onClick={() => handleIncrease(item)}
              className="w-5 border  rounded-md hover:bg-orange-500 hover:text-white border-orange-500`
            "
            >
              +
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleDecrease(item)}
              disabled={item.quantity === 1}
              className={`w-5  border  rounded-md ${
                item.quantity === 1
                  ? `cursor-not-allowed bg-red-100 text-red-600 opacity-60 `
                  : `hover:bg-orange-500 hover:text-white border-orange-500`
              }`}
            >
              -
            </button>
          </div>
          {/* delete cart item */}
          <button onClick={() => handleDelete(item)} className="text-red-600">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
