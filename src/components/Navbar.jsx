import React, { use, } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Navbar.css'
import logo from '../assets/logo.png'


const Navbar = () => {
    const { logout, user } = use(AuthContext)


    const handleLogout = () => {
        logout().then(() => alert('you logout successfully')).catch(error => console.log(error))
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
        <div className='sticky h-fit top-0 z-10 bg-gray-100 px-2 md:px-10'>
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
                    <div className='flex items-center gap-4'>
                        <img className='w-12 md:w-20' src={logo} alt="" />
                        <a className="text-3xl font-bold hidden md:block ">OmegaLearn</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                        <div className='flex gap-6 items-center justify-center text-xl font-bold '>
                            {links}
                        </div>
                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    {/* dark mode */}
                    


                    {/* buttons */}
                    {
                        user ?
                            <div className='flex items-center gap-2'>
                                <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
                                <Link to={'/login'}><button onClick={handleLogout} className='px-2 md:px-6 py-1 border-2 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Logout</button></Link>
                            </div>
                            : <div className='flex gap-3'>
                                <Link to={'/login'}><button className='px-2 py-0 md:px-6 md:py-1 border-2 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Login</button></Link>
                                <Link to={'/register'}><button className='hidden md:block md:px-6 py-1 border-2 border-black text-white bg-black rounded-xl text-xl font-semibold hover:bg-white hover:text-black'>Sign Up</button></Link>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;