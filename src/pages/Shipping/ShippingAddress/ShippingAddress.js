import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ShippingAddress = () => {
  const { user, setCart, loading } = useAuth();

  const [userInfo, setUserInfo] = useState({
    name: user?.displayName,
    email: user?.email,
  });
  const [shipping, setShipping] = useState({});
  const navigate = useNavigate();
  const handleShippingInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updatedShipping = { ...shipping };
    updatedShipping[field] = value;
    setShipping(updatedShipping);
  };
  const handleUserInfo = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const updatedUser = { ...userInfo };
    updatedUser[name] = value;
    setUserInfo(updatedUser);
  };
  const handleOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      userEmail: user?.email,
      ...userInfo,
      ...shipping,
    };

    fetch(" http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal({
            title: "Congrats!",
            text: "Your order is confirmed!",
            icon: "success",
            button: "Ok!",
          });
          e.target.reset();
          setCart([]);
          navigate("/shop");
        }
      })
      .catch((error) => {
        e.target.reset();
      });
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="mx-auto mt-10">
      {/* form */}
      <form onSubmit={handleOrder} className="px-6">
        <div className="shadow">
          <div className="px-4 py-5 bg-white sm:p-6">
            {/* inputs grid container */}
            <div className="grid grid-cols-6 gap-4">
              {/* personal information */}
              <div className="col-span-6 text-gray-700 text-sm font-medium">
                Personal Information
              </div>
              {/* name */}
              <div className="col-span-6 sm:col-span-3">
                <input
                  onChange={handleUserInfo}
                  type="text"
                  name="name"
                  value={userInfo?.name || ""}
                  placeholder="Your Name"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* email */}
              <div className="col-span-6 sm:col-span-3">
                <input
                  onChange={handleUserInfo}
                  type="email"
                  name="email"
                  value={userInfo?.email || ""}
                  placeholder="Your Email"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* phone number */}
              <div className="col-span-6 sm:col-span-3">
                <input
                  onBlur={handleShippingInput}
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* Shipping Address */}
              <div className="col-span-6 text-gray-700 text-sm font-medium">
                Shipping Address
              </div>
              <div className="col-span-6">
                <textarea
                  onBlur={handleShippingInput}
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  onBlur={handleShippingInput}
                  type="text"
                  name="city"
                  placeholder="City"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <input
                  onBlur={handleShippingInput}
                  type="text"
                  name="state"
                  placeholder="State/Province"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <input
                  onBlur={handleShippingInput}
                  type="number"
                  name="postal-code"
                  placeholder="ZIP/Postal Code"
                  className="p-2 mt-1 block w-full shadow-sm sm:text-sm border-b-2 border-gray-300"
                />
              </div>
              {/* payment method */}
              <div className="col-span-6 text-gray-700 text-sm font-medium mb-2">
                Payment Method
              </div>

              <div className="col-span-6 sm:col-span-2">
                <div className="flex items-center">
                  <input
                    onChange={handleShippingInput}
                    id="paypal"
                    name="payment"
                    value="paypal"
                    type="radio"
                    className=" h-4 w-4 "
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-3 block text-sm font-medium text-gray-500"
                  >
                    PayPal
                  </label>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <div className="flex items-center">
                  <input
                    onChange={handleShippingInput}
                    id="cash-on-delivery"
                    name="payment"
                    value="cash-on-delivery"
                    type="radio"
                    className=" h-4 w-4 "
                  />
                  <label
                    htmlFor="cash-on-delivery"
                    className="ml-3 block text-sm font-medium text-gray-500"
                  >
                    Cash On Delivery
                  </label>
                </div>
              </div>
              <div className="col-span-6 sm:col-span-2">
                <div className="flex items-center">
                  <input
                    onChange={handleShippingInput}
                    id="visa-Card"
                    value="visa-card"
                    name="payment"
                    type="radio"
                    className=" h-4 w-4 "
                  />
                  <label
                    htmlFor="visa-card"
                    className="ml-3 block text-sm font-medium text-gray-500"
                  >
                    VISA Card
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* submit button */}
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
