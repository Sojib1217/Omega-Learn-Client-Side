
import React, { use } from 'react';
import MyCourseCard from './MyCourseCard';

const myCoursesPromise=fetch('http://localhost:3000/myCourse').then(res=>res.json())
const MyAddedCourse = () => {
    const myCourses=use(myCoursesPromise)
    console.log(myCourses)
    
    return (
        <div className=' '>
            <h1 className='text-4xl font-bold text-center '>My Added Course</h1>
            <div>
                {
                    myCourses.map(course=><MyCourseCard course={course}></MyCourseCard>)
                }
            </div>
        </div>
    );
};

export default MyAddedCourse;