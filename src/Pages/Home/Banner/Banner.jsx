import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.png";
import img3 from "../../../assets/banner/3.jpg";

const Banner = () => {
  return (
    <div className='pt-32'>
      <Carousel className=' wrapper'>
        <div className='lg:h-[500px]'>
          <img src={img1} />
        </div>
        <div className='lg:h-[500px]'>
          <img src={img2} />
        </div>
        <div className='lg:h-[500px]'>
          <img src={img3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
