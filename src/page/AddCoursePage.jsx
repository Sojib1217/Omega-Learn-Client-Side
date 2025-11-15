
import axios from 'axios';
import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AddCoursePage = () => {

    const { user } = use(AuthContext)
    console.log(user)


    const handleAddCourse = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const userEmail = user.email;
        const duration = e.target.duration.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const isFeatured = e.target.isFeatured.value;
        const newCourse = {
            title, image, price, userEmail, duration, category, description, isFeatured
        }
        console.log(title, image, price, duration, category, description, isFeatured)

        axios.post('https://omega-learn-server.vercel.app/myCourse', newCourse)
            .then(data => {
                console.log(data.data)
                if (data.data.insertedId) {
                    Swal.fire({
                        title: "Course Add Successful",
                        icon: "success",
                        draggable: true
                    });
                }
            })
        e.target.reset()




    }

    return (
        <div className='px-4 mb-10 md:px-20 bg-cyan-100 '>
            <h1 className='text-4xl font-bold text-center py-10'>Add Your <span className='text-amber-700'>Course</span></h1>
            <form onSubmit={handleAddCourse} className=' md:w-[800px] border-2 border-gray-300 bg-white rounded-2xl p-4 mx-auto shadow-[8px_8px_0px_#1a1a1a]'>
                <div className='flex gap-4 justify-between' >
                    <fieldset className='w-full' >
                        <h1 className='text-2xl font-semibold my-4 text-center'>Course Details</h1>
                        {/* Title */}

                        <div>
                            <label className="block mb-1 font-medium">Title</label>
                            <input
                                type="text"
                                name="title"
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
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block mb-1 font-medium">Description</label>
                            <textarea
                                name="description"
                                className="w-full border border-gray-300 rounded-md p-2"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* isFeatured */}
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" name="isFeatured" />

                            <label className="font-medium">Featured Course</label>
                        </div>

                    </fieldset>
                    <fieldset className='w-full'>
                        <h1 className='text-2xl font-semibold my-4 text-center'>Instructor Details</h1>
                        <div>
                            <label className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                name="name"
                                readOnly
                                defaultValue={user.displayName}
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                readOnly
                                defaultValue={user.email}
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Photo</label>
                            <input
                                type="text"
                                name="photoURL"
                                readOnly
                                defaultValue={user.photoURL}
                                className="w-full border border-gray-300 rounded-md p-2"
                                required
                            />
                        </div>


                    </fieldset>
                </div>
                <div className='flex justify-center items-center'>
                    <button type="submit"
                        className='w-full px-6 py-1 border-2 mt-4 border-black rounded-md text-xl font-semibold hover:bg-black hover:text-white'>Add Course</button>
                </div>

            </form>

        </div>
    );
};

export default AddCoursePage;