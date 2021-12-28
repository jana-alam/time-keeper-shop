import React from "react";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
const Shipping = () => {
  const { cart } = useAuth();
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 ">
        <ShippingAddress />
        <ul className="mt-10">
          {cart.map((item) => {
            return (
              <div className="px-5 py-2 bg-orange-50 my-3  text-gray-700 text-sm">
                <div className="flex items-center justify-between ">
                  {/* item description */}
                  <div className="flex flex-col">
                    <p className="font-semibold">{item.name}</p>
                    <p>$ {item.quantity * item.price}</p>
                  </div>
                  <div className="flex space-x-3">
                    {/* qty changing button */}
                    <div className="space-x-2">
                      <span>{item.quantity}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
      <Footer />
    </>
  );
};

export default Shipping;
