import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;