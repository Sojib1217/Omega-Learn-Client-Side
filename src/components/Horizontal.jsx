import React from 'react';
import Marquee from "react-fast-marquee";


import react from '../assets/react.jpg'
import cook from '../assets/cooking.jpg'
import digital from '../assets/digital.jpg'
import enter from '../assets/enterpo.jpg'
import fluter from '../assets/fultter.png'
import java from '../assets/javascript.jpg'
import machine from '../assets/machine.jpg'
import node from '../assets/node.png'
import photoshop from '../assets/photoshop.jpg'
import python from '../assets/pythone.jpg'


const Horizontal = () => {
    return (
        <div className='my-10 md:px-10' >
            
            <Marquee direction='right' className='flex justify-between' pauseOnHover={true} speed={50}>
                <img className='w-40 h-40 rounded-full' src={react} alt="" />
                <img className='w-40 h-40 rounded-full' src={python} alt="" />
                <img className='w-40 h-40 rounded-full' src={node} alt="" />
                <img className='w-40 h-40 rounded-full' src={machine} alt="" />
                <img className='w-40 h-40 rounded-full' src={java} alt="" />
                <img className='w-40 h-40 rounded-full' src={photoshop} alt="" />
                <img className='w-40 h-40 rounded-full' src={cook} alt="" />
                <img className='w-40 h-40 rounded-full' src={digital} alt="" />
                <img className='w-40 h-40 rounded-full' src={fluter} alt="" />
                <img className='w-40 h-40 rounded-full' src={enter} alt="" />


            </Marquee>
            
        </div>

    );
};

export default Horizontal;