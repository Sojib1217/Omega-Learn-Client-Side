import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

 const links = <>
    <NavLink> <li>Home</li></NavLink>
    <NavLink> <li>Courses</li></NavLink>

    <div className="dropdown">
        <div tabIndex={0} role="button" className="px-2 py-1">
            Dashboard
        </div>

        <ul 
            tabIndex={0} 
            className="dropdown-content menu bg-base-100 rounded-box w-52 shadow p-3 space-y-2"
        >
            <li><NavLink>My Enrolled Course</NavLink></li>
            <li><NavLink>My Added Course</NavLink></li>
            <li><NavLink>Add Course</NavLink></li>
        </ul>
    </div>
</>



  

    return (
        <div className='mt-10'>
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <div className='flex gap-6 items-center justify-center text-xl font-bold'>
                            {links}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;