import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='fixed top-0 w-full bg-white'>
      <div className="flex justify-between py-2 md:py-4 md:items-center w-full px-7 md:px-0 md:w-10/12 lg:w-8/12 m-auto z-50">
        <Link to='/home'><h2 className='text-2xl lg:text-3xl font-bold'>JobFinder</h2></Link>
        <Link to='/home#jobs' className='bg-violet-400 p-2 lg:p-3 rounded-lg text-white font-semibold text-sm lg:text-xl md:order-1'><button className=''>Start Applying</button></Link>
        <div>
          <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className='w-8 ms-auto'></XMarkIcon>
              : <Bars4Icon className='w-8 ms-auto'></Bars4Icon>}
          </div>
          <div>
            <ul onClick={() => setIsOpen(!isOpen)} className={`duration-500 block bg-white text-center md:mt-0 w-full absolute md:static md:flex font-medium top-14 -mt-1 text-gray-400 md:order-2 ${isOpen ? ' right-3 ' : ' -right-full '}`}>
              <li><ActiveLink to='/home'>Home</ActiveLink></li>
              <li><ActiveLink to='/applied-job'>Applied Jobs</ActiveLink></li>
              <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
              <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;