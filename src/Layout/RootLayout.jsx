import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';


const RootLayout = () => {
    return (
        <div className='px-4 md:px-10 bg-gray-100'>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;