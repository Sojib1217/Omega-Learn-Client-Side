import React, { Suspense, use } from 'react';
import CourseCard from '../components/CourseCard';
import Loading from './Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
const coursePromise=fetch('http://localhost:3000/courses').then(res=>res.json())

const AllCourse = () => {
    const courses=use(coursePromise)
    
    
    return (
      
       <section>
            
         <div className='px-4 md:px-20 min-h-screen pb-4 md:pb-10'>
          <h1 data-aos="fade-down"
           data-aos-duration="200"  className='text-4xl font-bold text-center mt-10 max-h-screen'>All Courses Here</h1>
               
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                
                { 
                courses.map(course=><CourseCard course={course}></CourseCard>)
              }
                </div>  
                
            
        </div>
       
       </section>
    );
};

export default AllCourse;