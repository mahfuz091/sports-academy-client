import React from "react";

const PageCover = ({ img, title }) => {
  return (
    <div className='hero h-[300px] my-12'>
      <div
        className='hero-overlay'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='hero-content text-center text-white'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold '>Sports Camp/{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
