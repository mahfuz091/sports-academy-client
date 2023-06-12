import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';
import animationData from "../../assets/Lotties/97041-error-page.json";
import Lottie from 'react-lottie';

const ErrorPage = () => {
    // const { error, status } = useRouteError();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <div className='mt-16 mb-10'>
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className='text-center'>
                {/* <h2 className='error-status'>
                    <span>Error</span>
                    {status || 404}
                </h2>
                <p className='error-message mb-5'>{error?.message}</p> */}

                <NavLink to='/' className=' bg-[#dd5449] text-white hover:bg-[#b31409 mt-5  ml-2  font-semibold  rounded px-6 py-2 mb-10'>
                    Back to homepage
                </NavLink>
            </div>
        </>
    );
};

export default ErrorPage;