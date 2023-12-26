import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './UpperFooter.css';

const UpperFooter = () => {
    return (
        <> 
         <div className="divider mb-0.5 px-3 md:px-12 lg:px-16 font-semibold mt-12">Follow Us On</div>

            <div className='h-12 flex justify-center items-center text-black text-3xl'>
                <div className='w-60 md:w-64 lg:w-72 flex justify-around'>
                    <Link className='hover:text-blue-500 hover:bg-white rounded-full'><FaFacebook /></Link>
                    <Link className='rounded-md instagram'><FaInstagram /></Link>
                    <Link className='hover:text-white hover:bg-[#25D366] rounded-md'><FaWhatsapp  className='p-0.5'/></Link>
                    <Link className='rounded-md hover:bg-black hover:text-white'><FaTiktok className='p-1' /></Link>
                    <Link className='hover:text-red-500 hover:bg-white rounded-lg'><FaYoutube /></Link>
                </div>
            </div>
        </>

    );
};

export default UpperFooter;