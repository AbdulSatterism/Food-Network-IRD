import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo/logo.png'
import { FaBars, FaStar, FaSun } from 'react-icons/fa';

const Header = () => {

  return (
    <div className="navbar bg-white h-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><FaBars></FaBars> </label>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box ">
            {/* sm:display  */}

          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* lg:dispaly  */}
          <input type="text" placeholder="Search" className="input input-bordered w-32 h-10 md:w-auto" />
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li><Link className='text-orange-400'><FaSun></FaSun> </Link></li>
          <li><Link className='text-orange-400'><FaStar></FaStar> </Link></li>
        </ul>
      </div>
    </div>

  );
};

export default Header;
