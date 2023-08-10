import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setJobs(data.jobs));
    },[])
    return (
        <div className='py-10'>
            <h3 className='text-center text-4xl font-bold'>Job Category List</h3>
            <p className='text-center py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 py-10 gap-8">
                {
                    jobs.map(job=> <JobCard data={job} key={job.id}></JobCard>)
                }
                
            </div>
            
        </div>
    );
};

export default FeaturedJobs;