import React from 'react';

const Instructor = ({instructor}) => {
    return (
        <div data-aos="fade-down"
           data-aos-duration="800" 
           className='flex flex-col justify-center items-center text-center  p-4 shadow-2xl overflow-hidden ' >
           <img data-aos="fade-down"
           data-aos-duration="800"  className='w-[250px] h-[250px] rounded-full' src={instructor.image} alt="" />
            <h1 data-aos="fade-down"
           data-aos-duration="800"  className='text-2xl font-bold my-2'>{instructor.name}</h1>
            <p data-aos="fade-down"
           data-aos-duration="800"  className='text-lg  text-gray-600'>{instructor.description}</p>
            <button 
             className='px-6 py-1 border-2 mt-4 border-black rounded-xl text-xl font-semibold hover:bg-black hover:text-white'>Get Support</button>
        </div>
    );
};

export default Instructor;