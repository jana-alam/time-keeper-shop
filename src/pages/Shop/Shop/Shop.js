import React from "react";
import useAuth from "../../../hooks/useAuth";
import Product from "../../SharedComponents/Product/Product";

const Shop = () => {
  const { products } = useAuth();
  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.map((watch) => (
          <Product key={watch._id} watch={watch}></Product>
        ))}
      </div>
    </section>
  );
};

export default Shop;
