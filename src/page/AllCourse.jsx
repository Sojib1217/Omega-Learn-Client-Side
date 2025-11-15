import React, { use, useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import Loading from './Loading/Loading';
import { AuthContext } from '../AuthProvider/AuthProvider';

import { FaSearch } from 'react-icons/fa';
const coursePromise = fetch('http://localhost:3000/courses').then(res => res.json())

const AllCourse = () => {
  const courses = use(coursePromise)
  const { setLoading, loading } = use(AuthContext)
  const [search, setSearch] = useState("")
  const [filterCourse, setFilteredCourse] = useState([courses])
  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      if (search.trim() === '') {
        setFilteredCourse(courses)
      }
      else {
        const result = courses.filter(course => course.category.toLowerCase().includes(search.toLowerCase()));
        setFilteredCourse(result);
      }
      setLoading(false)
    }, 400);
    return () => clearTimeout(timeOut)
  }, [search, courses, setLoading])
  
  return (

    <section>

      <div className='px-4 md:px-20 min-h-screen pb-4 md:pb-10'>
        <h1 data-aos="fade-down"
          data-aos-duration="200" className='text-4xl font-bold text-center mt-10 max-h-screen'>All Courses Here</h1>
        <div className='md:flex justify-between mt-5 mx-4 md:mx-20 md:mt-10'>
          <h1 className='text-2xl font-bold text-center'>({courses.length}) Apps Found</h1>
          <div className='relative w-[350px] mt-4 md:-mt-4'>
            <FaSearch className='absolute top-4 left-3' />
            <input className='px-8 py-3 w-full border rounded-xl ' value={search} onChange={(e) => setSearch(e.target.value)} type="search" name="" placeholder='Search Course' />

          </div>
        </div>
        {loading ?
         (<Loading></Loading>) : filterCourse.length > 0  ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

          {
            filterCourse.map(course => <CourseCard course={course}></CourseCard>)
          }
        </div> :(
                    <div className='text-center my-32'>
                        <p className="text-center text-5xl text-gray-500 ">No Course found</p>
                        <button onClick={() => setSearch('')} className='btn px-8 mt-10 mb-10  from-purple-800 to-purple-600 text-white '>Show All Course</button>
                    </div>

                )
         
             }


      </div>

    </section>
  );
};

export default AllCourse;