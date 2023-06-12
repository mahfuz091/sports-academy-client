import React from "react";
import anime from 'animejs/lib/anime.es.js';
import "./WhatWeDo.css";
import img1 from "../../../assets/Whatwedo/w-1.jpg";
import img2 from "../../../assets/Whatwedo/w-2.jpg";
import img3 from "../../../assets/Whatwedo/w-3.webp";
import img4 from "../../../assets/Whatwedo/w-4.jpg";
import img5 from "../../../assets/Whatwedo/w-5.webp";
import img6 from "../../../assets/Whatwedo/w-6.webp";


const WhatWeDo = () => {
  // anime({
  //   targets: 'div',
  //   translateX: 250,
  //   rotate: '1turn',
  //   backgroundColor: '#FFF',
  //   duration: 800
  // });
  return (
    <div >
      <div className='lg:flex items-start justify-between lg:gap-20 px-10 lg:px-32 mb-24'>
        <h2 className='text-5xl font-semibold '>
          What We <span className='text-[#dc1d24]'>Do</span>
        </h2>
        <p className='text-base lg:w-1/2 mt-5 lg:mt-0'>
          The Sports Academy provides students with opportunities to be
          physically active while increasing social awareness and drive to max
          potential. We place specific attention on providing athletes with life
          lesions that encourage them to be better people and contribute
          positively to society.
        </p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-0 '>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img1} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Basket Ball Camp</div>
          </div>
        </div>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img2} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Base Ball Camp</div>
          </div>
        </div>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img3} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Football Camp</div>
          </div>
        </div>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img4} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Football Camp</div>
          </div>
        </div>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img5} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Cricket Batting Camp</div>
          </div>
        </div>
        <div class='image'>
          <img class='image__img w-96 h-52 rounded-xl' src={img6} alt='' />
          <div class='image__overlay image__overlay--primary'>
            <div class='image__title'>Wicket Keeping Camp</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WhatWeDo;
