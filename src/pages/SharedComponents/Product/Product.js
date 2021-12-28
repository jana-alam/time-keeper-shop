import React from "react";

const Product = ({ watch }) => {
  return (
    <div>
      <div>
        <img src={watch.picture} alt="watch" />
      </div>
      <div>
        <p>{watch.brand}</p>
        <p>{watch.name}</p>
        <p>{watch.price}</p>
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
