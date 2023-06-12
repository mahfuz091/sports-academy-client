import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../Providers/Authprovider";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useBookedClass from "../../../hooks/useBookedClass";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bookedClasses] = useBookedClass();
  const [axiosSecure] = useAxiosSecure();
  const { data: dbUser = [], refetch } = useQuery(["user"], async () => {
    const res = await axiosSecure.get(`/user/${user?.email}`);
    return res.data;
  });

  const handleSignOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState('light-theme')

  const handleToggle = (e) => {
    if (theme === "dark-theme") {
      setTheme('light-theme')
    }
    else {
      setTheme('dark-theme')
    }
  }
  useEffect(() => {

    document.body.className = theme;
  }, [theme])
  const navOptions = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#017f35]" : "")}
          to='/'
        >
          Home
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#017f35]" : "")}
              to='/dashboard/home'
            >
              Dashboard
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#017f35]" : "")}
          to='instructors'
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-[#017f35]" : "")}
          to='/all-classes'
        >
          Classes
        </NavLink>
      </li>
      {user && dbUser?.role == "student" ? (
        <>
          <li>
            <Link to='/dashboard/selectclass'>
              Selected Classes
              <div className='badge bg-[#017f35] text-white  rounded-full absolute bottom-0 -right-8 w-4 h-4 p-5 text-lg font-semibold'>
                {bookedClasses?.length || 0}
              </div>
            </Link>
          </li>
        </>
      ) : null}
      {user ? (
        <>
          <img
            className='w-12 ml-10 rounded-full mr-4'
            src={user.photoURL}
            alt=''
          />
          <Link onClick={handleSignOut}>SignOut</Link>
        </>
      ) : (
        <>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-[#017f35]" : "")}
              to='/login'
            >
              Login
            </NavLink>
          </li>
        </>
      )}
      <li ><Link className="ml-5" onClick={handleToggle}> {theme == "dark-theme" ? "Light" : "Dark"}
      </Link>
      </li>

    </>
  );
  return (
    <div>

      <div className='navbar fixed max-w-[1320px] z-10  pt-8 pb-6  lg:px-14 nav-bg justify-between'>
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
            <p className='ml-2 text-2xl font-extrabold   text-[#017f35] bg-slate-100 bg-opacity-10 p-2 rounded  '>
              Sports Academy
            </p>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal items-center font-semibold text-base   px-1'>
            {navOptions}
          </ul>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
