import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router';


const Navbar = () => {

 const links = <>
    <NavLink to={'/'}  className={({ isActive }) => (isActive ? "underline text-yellow-500" : "")}> <li className='p-2 text-xl'>Home</li></NavLink>
    <NavLink to={'/courses'}  className={({ isActive }) => (isActive ? "underline text-yellow-500" : "")}> <li className='p-2 text-xl'>Courses</li></NavLink>

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
        <div className='pt-10 sticky h-fit top-0 z-10 bg-gray-100'>
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
                   <Link to={'/login'}><button className='px-6 py-1 border-2 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Login</button></Link>
                   <Link to={'/register'}><button className='px-6 py-1 border-2 border-black text-white bg-black rounded-xl text-xl font-semibold hover:bg-white hover:text-black'>Sign Up</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;