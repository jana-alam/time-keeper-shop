import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const bannerStyle = {
    height: "38rem",
    backgroundImage: "url('https://i.ibb.co/QdjGgMf/banner-time.jpg')",
  };
  return (
    <div className="w-full bg-cover bg-no-repeat bg-center" style={bannerStyle}>
      <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-3xl font-semibold md:text-7xl">
            Time Waits For{" "}
            <span className="underline text-orange-600">No Body</span>
          </h1>
          <NavLink to="/shop">
            <button className="mt-6 px-6 py-4 bg-orange-700 text-white text-lg font-medium rounded hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
              Explore
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
