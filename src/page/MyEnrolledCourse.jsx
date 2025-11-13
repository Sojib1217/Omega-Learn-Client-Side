import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';



const MyEnrolledCourse = () => {
       
    const {user}=use(AuthContext)

    const [courses,setCourses]=useState([])

    useEffect(()=>{
        if(user?.email){
        axios.get(`http://localhost:3000/enrollCourse?email=${user.email}`)
        .then(data=>{
            setCourses(data.data)
        })
         }
    },[user])

const handleDeleteBid = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:3000/enrollCourse/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });

                            // 
                            const remainingCourses = courses.filter(course => course._id !== _id);
                            setCourses(remainingCourses)
                        }
                    })


            }
        });
    }
 

    return (
        <div className='px-4 md:px-20  mt-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-center mb-10' >My Enrolled courses</h1>
             <div className="grid md:grid-cols-3 gap-6">
        {
      courses.map((course) => (
          <div key={course._id} className="border p-4 rounded-lg shadow-sm">
            <img src={course.image} alt={course.title} className="rounded-md mb-3 w-full h-[300px]" />
            <h3 className="font-bold text-center text-2xl ">{course.title}</h3>
            <div className='flex justify-between mt-6 items-center mx-10'>
                <p className="text-gray-600 text-xl font-bold">Price ${course.price}</p>
              <button onClick={()=>handleDeleteBid(course._id)} className='btn btn-primary text-xl'>Remove </button>
            </div>
          </div>
        ))
        }
      </div>
        </div>
    );
};

export default MyEnrolledCourse;