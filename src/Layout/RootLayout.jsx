import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";



const RootLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 100,
      once: false,
    });
  }, []);

    return (
        <div className=' bg-gray-100'>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;