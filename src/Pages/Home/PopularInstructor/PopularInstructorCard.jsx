import React from "react";

const PopularInstructorCard = ({ instructor }) => {
  const { name, email, image } = instructor;
  return (
    <div className='card border  w-full hover:bg-[#f7ae1c] relative '>
      <figure className='p-10'>
        <img src={image} alt='' className='rounded-xl ' />
      </figure>
      <div className='card-body items-center   '>
        <h2 className=' text-center  text-2xl font-bold uppercase'>{name}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
