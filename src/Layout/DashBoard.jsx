import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  FaShoppingCart,
  FaWallet,
  FaUserAlt,
  FaHome,
  FaPlusSquare,
  FaSchool,
} from "react-icons/fa";

import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useBookedClass from "../hooks/useBookedClass";

const DashBoard = () => {
  const [bookedClasses] = useBookedClass();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex mt-16 justify-center'>
        <Outlet></Outlet>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side mt-10   '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <Link to='/' className='flex items-center gap-2 ml-5'>
          <img className='w-10' src={logo} alt='' />
          <h2 className='text-center text-[#71b68e] font-bold mt-5'>
            Sports Academy
          </h2>
        </Link>
        <div className='divider px-5'></div>
        <ul className='menu p-4 w-80'>
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/admin-home'
                >
                  <FaHome></FaHome> Admin Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/manage-user'
                >
                  <FaUserAlt></FaUserAlt> Manage User
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/manage-class'
                >
                  <FaSchool></FaSchool> Manage Class
                </NavLink>
              </li>
              <div className='divider px-5'></div>
              <li>
                <Link to='/'><FaHome></FaHome>Home</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/instructor-home'
                >
                  <FaHome></FaHome> Instructor Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/add-class'
                >
                  <FaPlusSquare></FaPlusSquare> Add A Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/my-class'
                >
                  <FaWallet></FaWallet> My Class
                </NavLink>
              </li>
              <div className='divider px-5'></div>
              <li>
                <Link to='/'><FaHome></FaHome>Home</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/student-home'
                >
                  <FaHome></FaHome> Student Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/enroll-classes'
                >
                  <FaUserAlt></FaUserAlt> Enroll Class
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/history'
                >
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/selectclass'
                >
                  <FaShoppingCart></FaShoppingCart> Selected Class
                  <span className='badge bg-[#017f35] text-white'>
                    +{bookedClasses?.length || 0}
                  </span>
                </NavLink>
              </li>
              <div className='divider px-5'></div>
              <li>
                <Link to='/'><FaHome></FaHome>Home</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
