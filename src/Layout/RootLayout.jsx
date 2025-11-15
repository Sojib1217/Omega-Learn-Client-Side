import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import Loading from '../page/Loading/Loading';



const RootLayout = () => {
  const { state } = useNavigation()
  useEffect(() => {
    AOS.init({
      duration: 100,
      offset: 100,
      once: false,
    });
  }, []);

  return (
    <div className=' bg-gray-100'>
      <header className='sticky top-0 z-50'>

        <Navbar></Navbar>
      </header>
      <main>
        {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>

        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;