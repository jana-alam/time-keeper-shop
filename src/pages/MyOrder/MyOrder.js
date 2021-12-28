import React from "react";
import Footer from "../SharedComponents/Footer/Footer";
import Header from "../SharedComponents/Header/Header";

const MyOrder = () => {
  return (
    <div>
      <Header />
      <div className=" h-screen text-orange-500 text-6xl text-center mt-20">
        My Orders are coming soon
      </div>
      <Footer className="mt-30" />
    </div>
  );
};

export default MyOrder;
