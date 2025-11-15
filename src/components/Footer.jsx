import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '../assets/logo.png'

const Footer = () => {
    return (
    <footer className="footer bg-black text-white p-10">
     <div className='flex flex-col md:flex-row justify-around gap-8'>
       <nav className='md:w-1/4'>
       <div className='flex items-center gap-4'>
       <img className='w-20 h-20 ' src={logo} alt="" />
          <h1 className='text-3xl font-bold'>OmegaLearn</h1>
       </div>
          <p className='mt-2'></p>OmegaLearn is An online learning platform where learners explore new skills and creators share their knowledge with the world. Empowering education through accessible, high-quality courses for everyone.
      </nav>
      <nav className='flex flex-col space-y-3'>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Develop</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className='flex flex-col space-y-3'>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">course</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className='flex flex-col space-y-3'>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 mt-2">
          <FaInstagram className='text-3xl'/>
          
          <FaFacebook className='text-3xl' />
          <FaSquareXTwitter  className='text-3xl'/>
        </div>
      </nav>
     </div>
    <div className='max-w-10/12 mx-auto'>
       <p >© 2025 OmegaLearn. All rights reserved.</p>
    </div>
    </footer>
  );
};

export default Footer;