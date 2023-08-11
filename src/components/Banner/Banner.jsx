import React from 'react';

const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 py-12 gap-5 px-4 md:px-0 items-center'>
            <div className="w-full -mr-9 -mt-3 md:order-2">
                <img className='w-full' src='assets/images/banner.png' alt="" />
            </div>
            <div className="text-center md:text-left w-full md:order-1">
                <h1 className='text-4xl lg:text-6xl font-bold leading-tight'>One Step <br />Closer To Your <br /><span className='text-violet-400'>Dream Job</span></h1>
                <p className='py-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-violet-400 my-2 px-5 py-2 lg:py-4 rounded-lg text-white font-semibold lg:text-xl'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;