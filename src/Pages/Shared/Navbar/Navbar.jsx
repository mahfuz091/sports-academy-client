import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='/'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='dashboard'
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='menu'
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='/order/salad'
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='/dashboard'
        ></NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-600" : "")}
          to='/login'
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className='navbar sticky max-w-[1320px] z-10 pt-8 pb-6 px-14 nav-bg justify-between'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 uppercase rounded-box w-52'
            >
              {navOptions}
            </ul>
          </div>
          <div className='flex items-center'>
            <img className='w-16' src={logo} alt='' />
            <p className='ml-2 text-xl font-bold  uppercase'>Sports Camp</p>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal font-semibold text-xl   px-1'>
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
