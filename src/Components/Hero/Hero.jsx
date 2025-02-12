// eslint-disable-next-line no-unused-vars
import React from 'react'
import Mountain from '../../assets/moon-surface-hd.png'


const Hero = () => {
  return (
    <div className='bg-black/20 h-full text-white relative z-50'>
      <div className='h-full flex justify-center items-center p-4'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div data-aos="fade-up" className='space-y-4 lg:pr-36'>
                <h1 className='text-5xl font-bold uppercase'>Orbit The  Earth </h1>
                <p data-aos="fade-up" data-aos-delay="300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptatum alias, totam aliquid facilis ullam sed fugiat pariatur quisquam? Cupiditate dicta earum minima atque, nihil tempore id dolore placeat? Et!</p>
                <button
                data-aos="fade-up" 
                data-aos-delay="300"  
                className='primary-button'>Learn More</button>
            </div>
            <div></div>
        </div>
      </div>
       {/* surgace section */}
       <img src={Mountain} alt="" className='absolute right-0 bottom-0 w-full brigtness-50 z-10'/>
      {/* bottom gradient section */}
      <div className='absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:[60px]'></div>
    </div>
  )
}

export default Hero
