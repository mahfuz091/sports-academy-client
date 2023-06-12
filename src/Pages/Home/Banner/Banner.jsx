import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/1.jpg";
import img2 from "../../../assets/banner/2.jpg";
import img3 from "../../../assets/banner/3.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Banner = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const autoplayConfig = {
    interval: 3000, // Time between each slide transition (in milliseconds)
    infiniteLoop: true, // Whether the carousel should loop back to the first slide
    stopOnHover: true, // Pause autoplay when hovering over the carousel
    transitionTime: 500, // Transition duration (in milliseconds)
  };
  return (
    <div className='pt-32 mb-24'>
      <Carousel autoPlay={isMobile ? false : true} {...autoplayConfig} className=' wrapper'>
        <div className='lg:h-[640px] '>
          <img src={img1} />
          <div className="legend">
            <h2>Summer Camp</h2>
            <h3 className="uppercase">July to August</h3>
            <Link to='/register'><button>Register Now</button></Link>
          </div>
        </div>
        <div className='lg:h-[640px]'>
          <img src={img2} />
          <div className="legend">
            <h2>Summer Camp</h2>
            <h3 className="uppercase">July to August</h3>
            <Link to='/register'><button>Register Now</button></Link>
          </div>
        </div>
        <div className='lg:h-[640px]'>
          <img src={img3} />
          <div className="legend">
            <h2>Summer Camp</h2>
            <h3 className="uppercase">July to August</h3>
            <Link to='/register'><button>Register Now</button></Link>
          </div>
        </div>
      </Carousel>
    </div >
  );
};

export default Banner;
