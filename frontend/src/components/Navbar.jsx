import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import DarkLightMode from "./DarkLightMode";
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { profile, isAuthenticated, setIsAuthenticated, isAdmin } = useAuth();
  const navigateTo = useNavigate(); // Initialize the useNavigate hook

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "http://localhost:4001/api/users/logout",
        { withCredentials: true }
      );
      console.log(data);
      localStorage.removeItem("jwt"); // Remove token on logout
      toast.success(data.message);
      setIsAuthenticated(false); // Set authentication state to false
      navigateTo("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to logout");
    }
  };

  // Function to dynamically set the active class
  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600';

  return (
    <>
      <nav className='shadow-lg px-4 py-2'>
        <div className='flex items-center justify-between container mx-auto'>

          {/* --------- Logo (using regular Link instead of NavLink) ----------- */}
          <div className='font-semibold text-xl hidden md:block'>
            <Link to='/'>Rahul Raj <span className='text-blue-500'>Blogs</span></Link>
          </div>

          {/* --------- Desktop Navbar ----------- */}
          <div className='mx-6'>
            <ul className='hidden md:flex space-x-6'>
              <NavLink to='/' className={getNavLinkClass}>
                HOME
              </NavLink>
              <NavLink to='/blogs' className={getNavLinkClass}>
                BLOGS
              </NavLink>
              <NavLink to='/creators' className={getNavLinkClass}>
                CREATORS
              </NavLink>
              <NavLink to='/about' className={getNavLinkClass}>
                ABOUT
              </NavLink>
              <NavLink to='/contact' className={getNavLinkClass}>
                CONTACT
              </NavLink>
            </ul>

            <div className='md:hidden' onClick={() => setShow(!show)}>
              {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>

          {/* -------- Dashboard, Login and Dark/Light Mode Toggle for Desktop----------- */}
          <div className='md:flex space-x-2'>
            {isAuthenticated && isAdmin && (
              <button
                onClick={() => navigateTo('/dashboard')} // Navigate to dashboard
                className='bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded'
              >
                DASHBOARD
              </button>
            )}

            {!isAuthenticated ? (
              <button
                onClick={() => navigateTo('/login')} // Navigate to login
                className='bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded'
              >
                LOGIN
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className='bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded'
              >
                LOGOUT
              </button>
            )}

            {/* Dark/Light Mode Toggle */}
            <DarkLightMode />
          </div>
        </div>

        {/* --------- Mobile Navbar ----------- */}
        {show && (
          <div className='bg-white'>
            <ul className='flex flex-col h-screen items-center justify-center space-y-3 text-xl text-black md:hidden'>
              {/* Mobile NavLinks */}
              <NavLink
                to='/'
                onClick={() => setShow(!show)} // Close the menu when clicked
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className={getNavLinkClass}
              >
                HOME
              </NavLink>

              <NavLink
                to='/blogs'
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className={getNavLinkClass}
              >
                BLOGS
              </NavLink>

              <NavLink
                to='/creators'
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className={getNavLinkClass}
              >
                CREATORS
              </NavLink>

              <NavLink
                to='/about'
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className={getNavLinkClass}
              >
                ABOUT
              </NavLink>

              <NavLink
                to='/contact'
                onClick={() => setShow(!show)}
                smooth="true"
                duration={500}
                offset={-70}
                activeClass="active"
                className={getNavLinkClass}
              >
                CONTACT
              </NavLink>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
