
import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';



const MyAddedCourse = () => {

    const { user } = use(AuthContext)
    const [myCourses, setMyCourses] = useState([])

    const updateModal = useRef(null)
    const titleRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()
    const durationRef = useRef()
    const categoryRef = useRef()
    const descriptionRef = useRef()
    const isFeaturedRef = useRef()

    useEffect(() => {
        if(user?.email)
       axios.get(`http://localhost:3000/myCourse?email=${user.email}`)
            .then(data => {
                setMyCourses(data.data)
            })

    }, [user])

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

                axios.delete(`http://localhost:3000/myCourse/${_id}`)
                    .then(data => {
                        if (data.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });

                            // 
                            const remainingCourses = myCourses.filter(course => course._id !== _id);
                            setMyCourses(remainingCourses)
                        }
                    })


            }
        });
    }

    const handleShowModal = () => {
        if (updateModal.current) {
            updateModal.current.showModal();
        }

    };
    const handleUpdateData = (e, _id) => {
        e.preventDefault()
        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        const duration = durationRef.current.value;
        const category = categoryRef.current.value;
        const description = descriptionRef.current.value;
       const isFeatured = isFeaturedRef.current.checked;
        const newCourse = {
            title, image, price, duration, category, description, isFeatured
        }
        console.log(title, image, price, duration, category, description, isFeatured)

        axios.patch(`http://localhost:3000/myCourse/${_id}`, newCourse)
            .then(data => {
                console.log(data.data)
                if(data.data.insertedId){
                     Swal.fire({
                                title: "Updated!",
                                text: "Your info Updated.",
                                icon: "success"
                            });

                }
                 const updatedCourses = myCourses.map(course =>
                course._id === _id ? { ...course, ...newCourse } : course
            );
            setMyCourses(updatedCourses)
            })



            if (updateModal.current) {
    updateModal.current.close();
}




    }

    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl font-bold text-center '>My Added Course</h1>
            <div className="overflow-x-auto mt-10">
                <table className="table table-auto w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-xl font-semibold  '>
                            <th>#</th>
                            <th>Course</th>
                            <th>Instructor</th>
                            <th>Course Price</th>
                            <th>Remove</th>
                            <th>Update</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody className='mx-10'>


                        {
                            myCourses.map((course, index) =>
                             <tr className='mx-10' key={course._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-20 w-20">
                                                <img
                                                    src={course.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.displayName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{user.email}</span>
                                </td>
                                <td>{course.price}</td>

                                <th>
                                    <button
                                        onClick={() => handleDeleteBid(course._id)}
                                        className="btn btn-warning btn-md font-bold">Remove</button>
                                </th>
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn btn-primary btn-md font-bold" onClick={handleShowModal}>Update Now</button>
                                    <dialog ref={updateModal} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <form onSubmit={(e) => handleUpdateData(e,course._id)} >
                                                <fieldset className='w-full' >
                                                    <h1 className='text-2xl font-semibold my-4 text-center'>Course Details</h1>
                                                    {/* Title */}

                                                    <div>
                                                        <label className="block mb-1 font-medium">Title</label>
                                                        <input
                                                            type="text"
                                                            name="title"
                                                            ref={titleRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Image URL */}
                                                    <div>
                                                        <label className="block mb-1 font-medium">Image URL</label>
                                                        <input
                                                            type="text"
                                                            name="image"
                                                            ref={imageRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Price */}
                                                    <div>
                                                        <label className="block mb-1 font-medium">Price</label>
                                                        <input
                                                            type="number"
                                                            name="price"
                                                            ref={priceRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Duration */}
                                                    <div>
                                                        <label className="block mb-1 font-medium">Duration</label>
                                                        <input
                                                            type="text"
                                                            name="duration"
                                                            ref={durationRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            placeholder="Hours"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Category */}
                                                    <div>
                                                        <label className="block mb-1 font-medium">Category</label>
                                                        <input
                                                            type="text"
                                                            name="category"
                                                            ref={categoryRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Description */}
                                                    <div>
                                                        <label className="block mb-1 font-medium">Description</label>
                                                        <textarea
                                                            name="description"
                                                            ref={descriptionRef}
                                                            className="w-full border border-gray-300 rounded-md p-2"
                                                            rows="4"
                                                            required
                                                        ></textarea>
                                                    </div>

                                                    {/* isFeatured */}
                                                    <div className="flex items-center space-x-2">
                                                        <input type="checkbox" ref={isFeaturedRef} name="isFeatured" />

                                                        <label className="font-medium">Featured Course</label>
                                                    </div>


                                                </fieldset>
                                                <button type="submit" className='w-full px-6 py-1 border-2 mt-4 border-black rounded-md text-xl font-semibold hover:bg-black hover:text-white'> Update Now

                                                </button>
                                            </form>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}

                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                <td>
                                    <Link to={`/myCourse/${course._id}`}>
                                        <button className="btn btn-neutral btn-md font-bold">View Details</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default MyAddedCourse;