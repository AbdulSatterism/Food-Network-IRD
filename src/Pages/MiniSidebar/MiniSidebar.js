import React from 'react';
import { FaArrowsAlt, FaHome, FaStar, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MiniSidebar = () => {
    return (
        <div className='bg-white '>
            <ul className='menu  rounded-xl gap-[10px] w-[70px] h-screen top-[60px] items-center justify-center '>
                <li>
                    <Link><FaHome></FaHome></Link>
                </li>
                <li>
                    <Link><FaArrowsAlt></FaArrowsAlt></Link>
                </li>
                <li>
                    <Link><FaStar></FaStar></Link>
                </li>
                <li>
                    <Link><FaSun></FaSun></Link>
                </li>
            </ul>
        </div>
    );
};

export default MiniSidebar;