import React from 'react';

const PopularClassesCard = ({ singleClass }) => {
    const { image, instructor, name, price, seats, _id } = singleClass;
    return (
        <div
            className='card border  w-full hover:bg-[#f7ae1c] relative '
        >
            <figure className='p-10'>
                <img src={image} alt='' className='rounded-xl ' />
            </figure>
            <div className='card-body items-center   '>
                <h2 className=' text-center  text-2xl font-bold'>{name}</h2>
                <h2>Instructor: {instructor}</h2>
                <p>Available Seat: {seats}</p>
                <p>Price: BDT {price}</p>

            </div>
        </div>
    );
};

export default PopularClassesCard;