import {motion } from 'framer-motion';
import React from 'react';
import heroImg from '../assets/heroImage.jpg'
import { Link } from 'react-router';
          

const Banner = () => {
     return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Online Learning"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      Text Content
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg"
        >
          Learn New Skills Anytime, With OmegaLearn
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl text-white drop-shadow-md max-w-2xl"
        >
          Explore hundreds of courses from top instructors and boost your career.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex space-x-4"
        >
          <Link to={'/courses'}><button className="bg-blue-600 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
            Explore Courses
          </button></Link>
          
        </motion.div>
        
      </div>
    </section>
  );
};

export default Banner;