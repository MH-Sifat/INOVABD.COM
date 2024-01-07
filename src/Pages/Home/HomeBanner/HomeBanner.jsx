import React from 'react';
import './HomeBanner.css';
// import Banner from '../../../../src/assets/images/Banner.jpg';
import Banner from '../../../../src/assets/images/Homepage-Banner.png'
const HomeBanner = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full h-64 sm:h-full">
                <img src={Banner} className=' w-full h-64 sm:h-full xl:full' alt="Products Banner" />
                <div className="flex justify-center text-center text-neutral-content absolute">
                    <div className="max-w-lg text-base-100">
                        <h1 className="mb-3 text-2xl font-bold sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl">INOVA FASHIONE</h1>
                        <button className="btn glass sm:btn-wide sm:text-xl text-white lg:text-2xl lg:btn-lg hover:text-black">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeBanner;