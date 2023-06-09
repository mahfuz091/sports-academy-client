import React from 'react';
import coverImg from '../assets/banner/dcover.jpg'

const DashboardCover = ({ title }) => {
    return (
        <div className='hero h-[400px] my-12'>
            <div
                className='hero-overlay'
                style={{
                    backgroundImage: `url(${coverImg})`,
                    backgroundPosition: "top",
                }}
            ></div>
            <div className='hero-content text-center uppercase text-white'>
                <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold '>{title}</h1>
                    <p className='font-medium'>Dashboard/{title}</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardCover;