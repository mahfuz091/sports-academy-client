import React from "react";

const ClassCard = ({ singleClass }) => {
  const { image, instructor, name, price, seats } = singleClass;

  return (
    <div className='card w-full hover:bg-[#f7ae1c]'>
      <figure className='px-10 pt-10'>
        <img src={image} alt='' className='rounded-xl' />
      </figure>
      <div className='card-body items-center'>
        <h2 className=''>{name}</h2>
        <h2>Instructor: {instructor}</h2>
        <p>Available Seat: {seats}</p>
        <p>Price: BDT {price}</p>
        <div className='card-actions'>
          <button className='btn bg-[#dd5449] hover:bg-[#b31409] hover:text-white border-0'>
            Select Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
