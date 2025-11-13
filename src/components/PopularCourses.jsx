
import React, { use } from 'react';
import CourseCard from './CourseCard';



const popularCoursePromise = fetch('http://localhost:3000/popularCourses').then(res => res.json())
const PopularCourses = () => {
    const popularCourses = use(popularCoursePromise)
    console.log(popularCourses)
    return (
        <div className='mt-10 px-4 md:px-10 '>
            <div className='text-center'>
                <h1
                    data-aos="fade-down"
                    data-aos-duration="800"
                    className='text-4xl font-bold'>Popular Courses </h1>
                <p
                    data-aos="fade-down"
                    data-aos-duration="800"
                    
                    className='text-xl mt-4 font-semibold'>Discover What People Are Learning!</p>
            </div>




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    popularCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
        </div>
    );
};

export default PopularCourses;