
import React from 'react';
import { FaIndustry } from 'react-icons/fa';
import { RiBaseStationLine, RiGraduationCapFill } from 'react-icons/ri';
import { TbWorld } from 'react-icons/tb';

const WhyUs = () => {
    return (
        <div className='mt-16'> 
        <h1 data-aos="fade-up"
           data-aos-duration="800" className='text-4xl font-bold text-center mb-10'>Why Choose Us</h1>
            <div className='bg-[#0B163F] text-gray-200 px-4 md:px-20 '>
            
            <h1 data-aos="fade-up"
             data-aos-duration="800" className='text-4xl font-bold text-center pt-30'>Courses Focused On Building Strong Foundational  <br /> Skills For Career Growth</h1>
            <div data-aos="fade-up"
             data-aos-duration="800" className='grid grid-cols-  md:grid-cols-2 lg:grid-cols-4 mt-20 text-center gap-6 pb-20'> 
                <div className='flex flex-col justify-center items-center'>
                    <span className='items-center text-5xl mb-4 text-amber-600'><FaIndustry /></span>
                    <h1 className='text-3xl font-semibold'>Industry Expert</h1>
                    <p className='text-xl opacity-70 mt-2  w-2/3'>Comprehensive self-paced courses created with top practitioners</p>
                </div>
                <div data-aos="fade-up"
             data-aos-duration="800" className='flex flex-col justify-center items-center'>
                    <span className='items-center text-5xl mb-4 text-amber-600'><RiBaseStationLine /></span>
                    <h1 className='text-3xl font-semibold' >Free Resources</h1>
                    <p className='text-xl opacity-70 mt-2  w-2/3'>Free guides on career paths, salaries, interview tips, and more</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="800" className='flex flex-col justify-center items-center'>
                    <span className='items-center text-5xl mb-4 text-amber-600'><RiGraduationCapFill /></span>
                    <h1 className='text-3xl font-semibold'>Skill-based Learning</h1>
                    <p className='text-xl opacity-70 mt-2 w-2/3'>600+ job-ready skills on offer in today's most in-demand domains</p>
                </div>
                <div data-aos="fade-up"
             data-aos-duration="800" className='flex flex-col justify-center items-center'>
                    <span className='items-center text-5xl mb-4 text-amber-600'><TbWorld /></span>
                    <h1 className='text-3xl font-semibold'>Anytime, Anywhere</h1>
                    <p className='text-xl opacity-70 mt-2  w-2/3'>Learn while working or studying from any place, across any device</p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default WhyUs;