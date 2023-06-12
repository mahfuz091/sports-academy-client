import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sports Avademy | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
    </>
  );
};

export default Home;
