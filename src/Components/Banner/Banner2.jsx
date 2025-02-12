/* eslint-disable no-unused-vars */
import React from 'react'
import satelite1 from '../../assets/satelite2.jpg'

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            
            <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 gap-4 mr-5 ml-5'>
                <p data-aos="fade-up"
                data-aos-delay="500" className='text-sky-800 uppercase font-bold'>Our Mission </p>
                <h1 data-aos="fade-up"
                data-aos-delay="500" className='uppercase text-5xl'>Rapidcast</h1>
                <p data-aos="fade-up"
                data-aos-delay="500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptatem blanditiis tempore fugit itaque inventore esse nulla maiores numquam exercitationem. Iusto porro quia ullam, ad, quas provident eligendi inventore temporibus consequuntur laudantium dolorum explicabo fuga. Natus, perferendis. Facilis, impedit nemo?</p>
                <button
                data-aos="fade-up"
                data-aos-delay="700" 
                className='primary-button'>Learn More</button>
            </div>
            <div data-aos="zoom-in">
                <img src={satelite1} alt="" className='ml-5 rounded-xl w-100'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner2
