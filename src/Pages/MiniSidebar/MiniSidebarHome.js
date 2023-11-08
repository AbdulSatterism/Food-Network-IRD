import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitch, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MiniSidebarHome = () => {
    return (
        <div className='bg-white '>
            <ul className='menu rounded-xl gap-[10px] w-[70px] h-screen top-[60px] items-center justify-center '>
                <li>
                    <Link><FaFacebook></FaFacebook></Link>
                </li>
                <li>
                    <Link><FaLinkedin></FaLinkedin></Link>
                </li>
                <li>
                    <Link><FaTwitch></FaTwitch></Link>
                </li>
                <li>
                    <Link><FaWhatsapp></FaWhatsapp></Link>
                </li>
            </ul>
        </div>
    );
};

export default MiniSidebarHome;