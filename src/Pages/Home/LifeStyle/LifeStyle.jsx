import React from 'react';
import banner2 from '../../../../src/assets/images/banner-2.jpeg';
import './LifeStyle.css';

const LifeStyle = () => {
    return (
        <div className='my-8 flex flex-wrap md:flex-nowrap md:my-12 w-100'>
            <div className='w-full md:w-2/3'>
                <img src={banner2} alt="" />
            </div>
            <div className='w-full mt-7 md:mt-0 md:w-1/2 flex justify-center items-center'>
                <div className='items-center text-center justify-center'>
                    <img className='w-16 h-16 rounded-full inline mb-3' src="../../../../src/assets/images/INOVA-tag.jpg" alt="" />
                    <h2 className='text-2xl lg:text-3xl font-semibold text-primary mb-3'>INOVA LIFESTYLE</h2>
                    <button className='button2'> SHOP NOW
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LifeStyle;

