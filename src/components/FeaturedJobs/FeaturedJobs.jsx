import { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [seeMore, setSeeMore] = useState(false)

    useEffect(()=>{
        const loadData = async (limit) =>{
        const res = await fetch('fakeData.json');
        const data = await res.json();
        setJobs(data.jobs.slice(0,limit));
        }
        seeMore || loadData(4);
        seeMore && loadData(6);
    },[seeMore])
    
    return (
        <div className='py-10'>
            <h3 className='text-center text-4xl font-bold'>Job Category List</h3>
            <p className='text-center py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 py-10 gap-8">
                {
                    jobs.map(job=> <JobCard data={job} key={job.id}></JobCard>)
                }
            </div>
            {
                seeMore || <div className='text-center'>
                <button onClick={()=> setSeeMore(true)} className='bg-violet-400 px-4 py-2.5 rounded-md text-white font-semibold text-xl'>See All Jobs</button>
                </div>
            }
            
        </div>
    );
};

export default FeaturedJobs;