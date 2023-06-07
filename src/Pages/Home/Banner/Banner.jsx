import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner/banner-1.avif";
import banner2 from "../../../assets/banner/banner-2.avif";
import banner3 from "../../../assets/banner/banner-3.jpg";
import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.png";
import img3 from "../../../assets/banner/3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div className='lg:h-[700px]'>
        <img src={img1} />
      </div>
      <div className='lg:h-[700px]'>
        <img src={img2} />
      </div>
      <div className='lg:h-[700px]'>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default Banner;
