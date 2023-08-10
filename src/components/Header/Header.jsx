import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between py-4 items-center w-8/12 m-auto'>
            <h2 className='text-3xl font-bold'>JobFinder</h2>
            <div className=' font-medium text-gray-400'>
                <Link className='mx-3' to='/home'>Home</Link>
                <Link className='mx-3' to='/applied-job'>Applied Jobs</Link>
                <Link className='mx-3' to='/statistics'>Statistics</Link>
                <Link className='mx-3' to='/blog'>Blog</Link>
            </div>
            <button className='bg-violet-400 px-5 py-4 rounded-lg text-white font-semibold text-xl'>Start Applying</button>
        </nav>
    );
};

export default Header;