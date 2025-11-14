import React from 'react';
import { FaHourglassStart } from 'react-icons/fa';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { useLoaderData, } from 'react-router';

const MyCourseDetails = () => {
   
const data=useLoaderData()
    
    const course=data[0]
    return (
        <div className='min-h-screen'>
            <section className="bg-[#fafafa] py-10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
                      {/* Left Content */}
                      <div className="flex-1">
            
            
            
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                          {course.title}
                        </h1>
            
            
                        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-600 mb-6">
                          <div className="flex items-center gap-1 text-2xl">
                            <LuBriefcaseBusiness className='text-2xl text-amber-500' />
            
                            {course.category}
                          </div>
                          <div className="flex items-center gap-1 text-2xl">
                            <FaHourglassStart className='text-2xl text-amber-500' />
                            {course.duration}
                          </div>
                          
                        </div>
            
            
                        <div className="flex items-center gap-5">
                          <div>
                          
                            <p className="text-3xl font-bold text-gray-900">${course.price}</p>
                          </div>
                         
                         
                        </div>
                      </div>
            
            
                      <div className="relative flex-1">
                        <div className="w-full h-full  rounded-2xl"></div>
                        <img
                          src={course.image}
                          alt="Course Banner"
                          className="r rounded-2xl shadow-md w-[600px]  "
                        />
                      </div>
                    </div>
                  </section>
        </div>
    );
};

export default MyCourseDetails;