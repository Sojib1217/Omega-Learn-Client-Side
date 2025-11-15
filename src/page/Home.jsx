import React, { use } from 'react';
import Banner from '../components/Banner';
import PopularCourses from '../components/PopularCourses';
import WhyUs from '../components/WhyUs';
import Instructor from '../components/Instructor';
import Horizontal from '../components/Horizontal';
import Marquee from 'react-fast-marquee';
import logo from '../assets/logo.png'


// const imagePromise=fetch('https://omega-learn-server.vercel.app/courses').then(res=>res.json())
const teacherPromise = fetch('https://omega-learn-server.vercel.app/instructors').then(res => res.json())
const Home = () => {
    const instructors = use(teacherPromise)
    // const images=use(imagePromise)
    return (
        <div >
            <Banner></Banner>
            <Marquee className='my-10' direction='left' pauseOnHover={true} speed={50}>
                <div className='flex items-center gap-4'>
                    <img className='w-20' src={logo} alt="" />
                    <p className='text-xl font-bold '> <span className='text-3xl font-bold text-amber-700 '>OmegaLearn</span> is an online learning platform where people can learn skills and also share courses and explore, enroll, and manage their learning activities.</p>
                </div>
            </Marquee>
            <PopularCourses></PopularCourses>
            <WhyUs></WhyUs>
            <h1 className='text-4xl font-bold text-center mt-10'>Our Top <span className='text-amber-700'>Instructors</span>
            </h1>
            <div className='mt-10 flex flex-col md:flex-row px-4 md:px-20 justify-around items-center gap-10'>
                {
                    instructors.map(instructor => <Instructor instructor={instructor}></Instructor>)
                }
            </div>
            <Horizontal></Horizontal>


        </div>
    );
};

export default Home;