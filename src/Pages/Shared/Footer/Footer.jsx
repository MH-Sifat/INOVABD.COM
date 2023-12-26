import React from 'react';
import { Link } from 'react-router-dom';
import UpperFooter from './UpperFooter/UpperFooter';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <UpperFooter />
            <footer className="footer p-10 bg-neutral-800 text-white">
                <nav>
                    <header className="footer-title opacity-100">Shop</header>
                    <Link className="foot-link">Men's Collection</Link>
                    <Link className="foot-link">Women's Collection</Link>
                    <Link className="foot-link">Size Guide</Link>
                </nav>

                <nav>
                    <header className="footer-title opacity-100">Company</header>
                    <Link className="foot-link">About us</Link>
                    <Link className="foot-link">Terms & Conditions</Link>
                    <Link className="foot-link">Privacy policy</Link>
                </nav>
                <nav>
                    <header className="footer-title opacity-100">Help</header>
                    <Link className="foot-link">Contact Us</Link>
                    <Link className="foot-link">Shipping & Exchange Policy</Link>
                    <Link className="foot-link">Shipping & Return Policy</Link>
                    <Link className="foot-link">Refund policy</Link>
                </nav>
                <nav>
                    <header className="footer-title opacity-100">Contact</header>
                    <Link className="foot-link">Mail: <Link>inova@gmail.com</Link></Link>
                    <Link className="foot-link">Phone Number: +8801000000</Link>
                    <Link className="foot-link">WhatsApp: +8801000000</Link>
                </nav>
            </footer>
            <div className='bg-neutral-800 text-center p-1 copy-right'>
                <p>COPYRIGHT © 2024 INOVA BD, ALL RIGHTS RESERVED. DESIGNED & DEVELOPED BY MH SIFAT.</p>
            </div>
        </div>
    );
};

export default Footer;