import React from "react";
import useAuth from "../../../hooks/useAuth";

const Product = ({ watch }) => {
  const { cart, setCart } = useAuth();

  const handleAddToCart = (watch) => {
    const exist = cart.find((item) => item._id === watch._id);

    if (!exist) {
      const newCart = [...cart, { ...watch, quantity: 1 }];
      setCart(newCart);
    } else {
      const newCart = cart.map((item) =>
        item._id === exist._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setCart(newCart);
    }
  };

  return (
    <div className="my-4 p-4 hover:shadow-2xl hover:transition-all ">
      <div>
        <img
          className="w-8/12 mx-auto hover:scale-105 cursor-pointer hover:transition-all"
          src={watch.picture}
          alt="watch"
        />
      </div>
      <div className="mt-4">
        <p className="text-2xl text-slate-700 font-semibold">{watch.brand}</p>
        <p className=" text-zinc-700">{watch.name}</p>
        <p className="text-2xl font-semibold text-orange-600">
          $ {watch.price}
        </p>
        <div className="mt-2">
          <button
            onClick={() => handleAddToCart(watch)}
            className="w-full bg-cyan-700 py-2 text-white rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
