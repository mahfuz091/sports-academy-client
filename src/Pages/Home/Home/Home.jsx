import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sports Avademy | Home</title>
      </Helmet>
      <Banner></Banner>
    </>
  );
};

export default Home;
