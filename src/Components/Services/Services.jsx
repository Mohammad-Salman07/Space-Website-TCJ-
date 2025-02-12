/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {FaReact} from "react-icons/fa";
import { FaShuttleSpace,FaSpaceAwesome } from 'react-icons/fa6';
import wave from '../../assets/wave Gif.gif'

const ServiceData=[
    {
        title:'HST',
        content:'300-1500km',
        description:'Used for astronomial observation, Capturing stunning images of the universe.',
        icon:<FaReact className='text-7xl'/>,
        aosDelay:'300',

    },
    {
        title:'ISS',
        content:'500-1500km',
        description:'Its a habitable artificial satelite orbiting earth and servs as a space environment researc laboraty',
        icon:<FaShuttleSpace className='text-7xl'/>,
        aosDelay:'700'   
    },
    {
        title:'GPS',
        content:'300-1500km',
        description:'Part of the global postitioning sysytem (GPS) used for Navigation.',
        icon:<FaSpaceAwesome className='text-7xl'/>,
        aosDelay:'700'
    }
]

const Services = () => {
  return (
    <div className='bg-black text-white relative z-50]'>
      <div className="container">
        <div className='min-h-[400px]'>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10'>
                {ServiceData.map((data)=>
                (
                    <div data-aos="fade-up" data-aos-delay={data.aosDelay} className='min-h[180px] flex gap-2 flex-col justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w=full lg:w-[300px] mx-auto'>
                        {data.icon}
                        <h1>{data.title}</h1>
                        <p>{data.content}</p>
                        <p className='text-sm'>{data.description}</p>
                    </div>
                ))} 

            </div>
            <img src={wave} alt="" className='h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]'/>
           
        </div>
      </div>
    </div>
  )
}

export default Services
