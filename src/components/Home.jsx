import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Keshana Viynga
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front End Developer 
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Front End Developer,  web developer ,Moblie developer
        </p>
        <div>
          <Link className='  w-[100px] h-[10px] text-white group border-2 px-3 py-6 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' to='skills'>
            View Skils
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;