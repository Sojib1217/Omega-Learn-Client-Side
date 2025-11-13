import React, { use, useEffect, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Navbar.css'


const Navbar = () => {
    const { logout, user } = use(AuthContext)
    const [dark,setDark]=useState(false)

    const handleLogout = () => {
        logout().then(() => alert('you logout successfully')).catch(error => console.log(error))
    }

    useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleToggleTheme=()=>{
    setDark(!dark)
  }

    const links = <>
        <NavLink to={'/'} className={({ isActive }) => (isActive ? "underline text-yellow-500" : "")}> <li className='p-2 text-xl hover:text-yellow-500'>Home</li></NavLink>
        <NavLink to={'/courses'} className={({ isActive }) => (isActive ? "underline text-yellow-500" : "")}> <li className='p-2 text-xl hover:text-yellow-500'>Courses</li></NavLink>

        <div className="dropdown">
            <div tabIndex={0} role="button" className="flex items-center justify-center px-2 py-1">
                <span className='hover:text-yellow-500 text-xl'>Dashboard</span> <MdKeyboardArrowDown />
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content  menu bg-base-100 rounded-box w-52 shadow-accent p-3 space-y-2"
            >
                <li className=' hover:bg-yellow-300 hover:animation duration-500'><NavLink to={'/myEnrolledCourse'}>My Enrolled Course</NavLink></li>
                <li className=' hover:bg-yellow-300 hover:animation duration-500'><NavLink to={'/myAddedCourse'}>My Added Course</NavLink></li>
                <li className='hover:bg-yellow-300 hover:animation duration-500'><NavLink to={'/addCourse'}>Add Course</NavLink></li>
            </ul>
        </div>
    </>





    return (
        <div className='pt-6 sticky h-fit top-0 z-10 bg-gray-100 px-4 md:px-10'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">OmegaLearn</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <div className='flex gap-6 items-center justify-center text-xl font-bold '>
                            {links}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <button onClick={handleToggleTheme}>

                        <label class="switch">
                            <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                            <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                            <input type="checkbox" class="input"
                             
                            
                            ></input>
                                <span class="slider"></span>
                        </label>
                    </button>
                    {/* dark mode */}

                    {/* buttons */}
                    {
                        user ? <Link to={'/login'}><button onClick={handleLogout} className='px-6 py-1 border-2 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Logout</button></Link> : <div className='flex gap-3'>
                            <Link to={'/login'}><button className='px-6 py-1 border-2 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Login</button></Link>
                            <Link to={'/register'}><button className='hidden md:block px-6 py-1 border-2 border-black text-white bg-black rounded-xl text-xl font-semibold hover:bg-white hover:text-black'>Sign Up</button></Link>
                        </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;