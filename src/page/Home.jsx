import React, { use } from 'react';
import Banner from '../components/Banner';
import PopularCourses from '../components/PopularCourses';
import WhyUs from '../components/WhyUs';
import Instructor from '../components/Instructor';
import MarqueeStyle from '../components/MarqueeStyle';

// const imagePromise=fetch('http://localhost:3000/courses').then(res=>res.json())
const teacherPromise=fetch('http://localhost:3000/instructors').then(res=>res.json())
const Home = () => {
    const instructors=use(teacherPromise)
    // const images=use(imagePromise)
    return (
        <div >
            <Banner></Banner>
            <PopularCourses></PopularCourses>
            <WhyUs></WhyUs>
             <h1 className='text-4xl font-bold text-center mt-10'>Our Top Instructors</h1>
          <div className='mt-10 flex flex-col md:flex-row px-4 md:px-20 justify-around items-center gap-10'>
            {
                instructors.map(instructor=><Instructor instructor={instructor}></Instructor>)
            }
          </div>
          {/* <div className='flex gap-4'>
            {
                images.map(image=> <MarqueeStyle image={image}></MarqueeStyle>)
            }
          </div> */}
         

        </div>
    );
};

export default Home;