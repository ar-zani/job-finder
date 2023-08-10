import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='flex justify-between py-4 items-center w-8/12 m-auto'>
            <h2 className='text-3xl font-bold'>JobFinder</h2>
            <div className=' font-medium text-gray-400'>
                <ActiveLink to='/home'>Home</ActiveLink>
                <ActiveLink to='/applied-job'>Applied Jobs</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <button className='bg-violet-400 px-5 py-4 rounded-lg text-white font-semibold text-xl'>Start Applying</button>
        </nav>
    );
};

export default Header;