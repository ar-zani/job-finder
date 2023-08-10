import React from 'react';
import banner from '../../assets/Images/banner.png'

const Banner = () => {
    return (
        <div className='flex py-12 items-center w-8/12 m-auto'>
            <div className="w-full">
                <h1 className='text-6xl font-bold leading-tight'>One Step <br />Closer To Your <br /><span className='text-violet-400'>Dream Job</span></h1>
                <p className='py-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-violet-400 my-2 px-5 py-4 rounded-lg text-white font-semibold text-xl'>Get Started</button>
            </div>
            <div className="w-full -mr-9 -mt-3">
                <img className='w-full' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;