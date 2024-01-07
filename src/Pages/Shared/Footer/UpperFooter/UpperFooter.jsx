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
                    <Link className='hover:text-blue-500 hover:bg-white rounded-full border-2'><FaFacebook className='p-[px]'/></Link>
                    <Link className='rounded-full instagram border-2 bg-black text-white'><FaInstagram className='p-[4px]' /></Link>
                    <Link className='hover:text-white hover:bg-[#25D366] rounded-full border-2 bg-black text-white'><FaWhatsapp  className='p-[4px]'/></Link>
                    <Link className='rounded-full hover:bg-black hover:text-white border-2 '><FaTiktok className='p-[6px]' /></Link>
                    <Link className='hover:text-red-500 hover:bg-white rounded-full border-2 bg-black text-white'><FaYoutube className='p-[4px]' /></Link>
                </div>
            </div>
        </>

    );
};

export default UpperFooter;