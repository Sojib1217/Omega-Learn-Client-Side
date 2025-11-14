
import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { PiStudent } from 'react-icons/pi';
import { Link } from 'react-router';

const CourseCard = ({ course }) => {

    return (

        // data-aos="fade-up" data-aos-delay={course.courseId * 100}

        <div data-aos="fade-down" className="mt-10 bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:scale-105 hover:duration-700  ">
            {/* Cover */}
            <div className="relative w-full h-[270px]">
                <img
                    src={course.image}

                    className="w-full h-full bg-cover"
                />
            </div>

            <div className="px-6 pb-6 pt-2 text-center">

                <h3 className="mt-2 text-lg font-semibold text-gray-800">
                    {course.title}
                </h3>

                <hr className="my-4 border-t border-gray-200" />


                <div className="flex items-center justify-between">
                    <div className="flex items-center  space-x-4 text-gray-600">
                        {/* duration */}
                        <div className="flex items-center space-x-1 ">
                            <IoMdTime className='text-lg' />
                            <span>{course.duration}</span>
                        </div>

                    </div>
                    {/* Students */}
                    <div className="flex items-center space-x-1">
                        <PiStudent className="text-lg" />
                        <span>{course.students}</span>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        <div className="text-xl font-bold text-red-600">${course.price}.00</div>
                    </div>
                </div>
               <Link to={`/courses/${course._id}`}> <button
                    className='px-6 py-1 border-2 mt-4 border-black rounded-md font-semibold hover:bg-black hover:text-white'>View Details</button></Link>
            </div>

        </div>




    );
};

export default CourseCard;