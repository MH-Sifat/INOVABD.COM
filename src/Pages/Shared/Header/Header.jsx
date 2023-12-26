import React, { useState } from 'react';
import './Header.css';
import logo from '../../../../src/assets/images/INOVA-tag.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Header = () => {
    const [status, setStatus] = useState(false);
    const [cart, setCart] = useState(false);

    return (
        <>
            <div className="navbar sticky top-0 bg-base-100 z-10">
                <div className="navbar-start">
                    <label htmlFor="my-drawer">
                        <svg onClick={() => setStatus(true)} xmlns="http://www.w3.org/2000/svg" className="h-7 w-100 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="#97582c"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul className='hidden lg:flex lg:w-11/12 lg:text-sm xl:text-base xl:w-100 2xl:w-100 2xl:text-xl pr-10 justify-around text-primary font-semibold '>
                        <Link className='link'><li>NEW COLLECTIONS</li></Link>
                        <Link className='link'><li>MAN</li></Link>
                        <Link className='link'><li>WOMAN</li></Link>
                        <Link className='link'><li>ACCESSORIES</li></Link>
                    </ul>
                </div>

                <div className="navbar-center flex-col">
                    <Link to='/'><img className='w-full h-14 rounded-full' src={logo} alt="INOVA" /></Link>
                    <Link to='/'><p className='text-primary text-3xl font-semibold hidden lg:block'>INOVA</p></Link>
                </div>

                <div className="navbar-end justify-end">
                    <div className='w-24 md:w-32 flex justify-around'>

                        <div onClick={() => setCart(true)} className="indicator">
                            <FaCartShopping className='text-2xl text-primary hover:text-black' />
                            <span className="badge w-5 h-5 rounded-full border-none text-base-100 bg-red-600 indicator-item">8</span>
                        </div>

                        <Link><FaRegHeart className='text-2xl text-primary hover:text-black' /></Link>
                        <Link to='/signin'><LuUser2 className='text-2xl text-primary hover:text-black' /></Link>
                    </div>
                </div>
            </div>
            {
                status ?
                    <div className="drawer lg:hidden z-40">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-side p-0">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className='menu p-0 w-3/4 md:w-1/2  min-h-full bg-base-100'>
                                <div className='flex justify-between px-2 py-4 shadow'>
                                    <div className='flex-col text-center'>
                                        <img className='h-16 w-16 rounded-full' src={logo} alt="" />
                                        <Link><p className='text-primary text-lg font-semibold'>INOVA</p></Link>
                                    </div>
                                    <button onClick={() => setStatus(false)} className="btn btn-circle btn-sm btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                <ul className="menu p-4  text-base-content text-primary font-semibold gap-y-3 ">
                                    <Link to='/home' onClick={() => setStatus(false)}><li>NEW COLLECTIONS</li></Link>
                                    <Link><li>MAN</li></Link>
                                    <Link><li>WOMAN</li></Link>
                                    <Link><li>ACCESSORIES</li></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    : null
            }
            {
                cart ?
                    <div>
                        <div className='h-screen w-full bg-black/40 flex top-0 z-30 fixed min-h-full' >
                        </div>
                        <div className='h-screen w-3/4 md:w-1/2 lg:w-1/3 min-h-full bg-base-100 z-40 fixed top-0 right-0 '>
                            <div className='flex justify-between px-2 py-4 shadow'>
                                <button onClick={() => setCart(false)} className="btn btn-circle btn-sm btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                        </div>
                    </div>
                    : null
            }

        </>
    );
};

export default Header;

{/* <div className="lg:hidden">
    <div className='h-screen w-full bg-black/40 flex absolute top-0 z-20' >
    </div>
    <div className={`h-screen w-80 min-h-full bg-base-100 z-40 absolute top-0 left-0 ${status ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <div className='flex justify-between px-2 py-4 shadow'>
            <div className='flex-col text-center'>
                <img className='h-16 w-16 rounded-full' src={logo} alt="" />
                <Link><p className='text-primary text-lg font-semibold'>INOVA</p></Link>
            </div>
            <button onClick={() => setStatus(false)} className="btn btn-circle btn-sm btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
        <ul className="menu p-4  text-base-content text-primary font-semibold gap-y-3 z-50">
            <Link to='/home' onClick={() => setStatus(false)}><li>NEW COLLECTIONS</li></Link>
            <Link><li>MAN</li></Link>
            <Link><li>WOMAN</li></Link>
            <Link><li>ACCESSORIES</li></Link>
        </ul>
    </div>
</div> */}


