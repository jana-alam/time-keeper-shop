import React from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Header from "../../SharedComponents/Header/Header";
import Banner from "../Banner/Banner";
import HomeProduts from "../HomeProducts/HomeProduts";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeProduts />
      <Footer />
    </>
  );
};

export default Home;
