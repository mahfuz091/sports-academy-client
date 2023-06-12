import React from "react";
import Banner from "../Banner/Banner";
import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInsTructor from "../PopularInstructor/PopularInsTructor";
import WhatWeDo from "../WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div >
      <Helmet>
        <title>Sports Avademy | Home</title>
      </Helmet>
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <PopularClasses></PopularClasses>
      <PopularInsTructor></PopularInsTructor>
    </div>
  );
};

export default Home;
