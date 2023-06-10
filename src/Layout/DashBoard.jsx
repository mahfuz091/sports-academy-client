import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaUserAlt, FaHome, FaPlusSquare } from "react-icons/fa";
import useCart from "../hooks/useCart";
import logo from "../assets/logo.png";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        <Outlet></Outlet>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
      </div>
      <div className='drawer-side mt-10 bg- '>
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
                  to='/dashboard/adminhome'
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
                <NavLink to='/dashboard/history'>
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
                  <span className='badge inl badge-secondary'>
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/instructorhome'
                >
                  <FaHome></FaHome> Instructor Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/add-class'>
                  <FaPlusSquare></FaPlusSquare> Add A Class
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'>
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
                  <span className='badge inl badge-secondary'>
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#017f35]" : ""
                  }
                  to='/dashboard/studenthome'
                >
                  <FaHome></FaHome> Student Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/reservations'>
                  <FaUserAlt></FaUserAlt> Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/history'>
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
                  <span className='badge inl badge-secondary'>
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
