
import React, { use, useEffect, useState } from 'react';
import { FaCalendarCheck, FaCheckCircle, FaStar } from 'react-icons/fa';
import { LuBriefcaseBusiness, LuMonitor } from "react-icons/lu";
import { FaHourglassStart } from "react-icons/fa";
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';


const CourseDetails = () => {
  const { user } = use(AuthContext)
  const { id } = useParams()
  const courseData = useLoaderData()
  const [course, setCourse] = useState([])
  const [disabled, setDisabled] = useState(false)

  const handleEnroll = () => {
    const enrollData = {
      courseId: course._id,
      title: course.title,
      image: course.image,
      price: course.price,
      userEmail: user.email,
    };

    axios.post(`https://omega-learn-server.vercel.app/enrollCourse`, enrollData)
      .then(data => {
        console.log(data.data);
        setDisabled(true)
        if (data.data.insertedId) {
          Swal.fire({
            title: "Course Add Successful",
            icon: "success",
            draggable: true
          });
        }
      })
      .catch(error => console.error(error));
  };


  useEffect(() => {
    const course = courseData.find(singleCourse => singleCourse._id == id)

    setCourse(course)

  }, [id, courseData])





  return (
    <div>
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
              <div className="flex items-center gap-1 text-2xl">
                <FaStar className='text-2xl text-amber-500' />
                {course.rating} <span className="text-gray-400">(3k reviews)</span>
              </div>
            </div>


            <div className="flex items-center gap-5">
              <div>
                <p className="text-gray-400 line-through text-lg">$79.99</p>
                <p className="text-3xl font-bold text-gray-900">${course.price}</p>
              </div>
              {
                disabled ? <button disabled onClick={handleEnroll} className=" bg-amber-500 px-6 py-3 font-semibold text-white  rounded hover:scale-105 duration-300">
                  Enrolled
                </button> : <button onClick={handleEnroll} className=" bg-amber-500 px-6 py-3 font-semibold text-white  rounded hover:scale-105 duration-300">
                  Enroll Now
                </button>
              }

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

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          {/* Left Side */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              What You will Learn
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <FaCheckCircle className="text-yellow-500 w-5 h-5 mt-1" />
                Learn how to build user-friendly interfaces and understand the
                principles of great UX design.
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-yellow-500 w-5 h-5 mt-1" />
                Understand design structure, usability, and the psychology behind
                user behavior.
              </li>
              <li className="flex gap-3">
                <FaCheckCircle className="text-yellow-500 w-5 h-5 mt-1" />
                Master the process of planning, designing, and testing modern user
                experiences.
              </li>
            </ul>
          </div>


          <div className="border rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
            <LuMonitor className="text-gray-900 w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              Course Format
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> Video
                Tutorials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span>{" "}
                Checking the Task
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span>{" "}
                Pulvinar sapien
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> Software
              </li>
            </ul>
          </div>


          <div className="border rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
            <FaCalendarCheck className="text-gray-900 w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 mb-4">
              Duration Course
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> 3 Weeks
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> 5 Video
                Tutorials
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> 3 Hours
                of Consultations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-sm"></span> 1.5 Hours
                Webinar
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;