import React from 'react';
import logo from './Assets/deer.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <img className='h-14 ' src={logo} alt="" />
                <p>Exploria Photography Ltd.<br />Providing reliable service since 0000</p>
            </div>
            <div>
                <span className="footer-title">Copy right to @Exploria.com</span>
                <div className="grid grid-flow-col gap-4">

                </div>
            </div>
        </footer>
    );
};

export default Footer;