import { useEffect, useState } from 'react';

const JobCategory = () => {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>setCategory(data.category));
    },[])

    return (
        <div className='py-10'>
             <h3 className='text-center text-4xl font-bold'>Job Category List</h3>
            <p className='text-center py-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-around gap-7 py-10">
                {
                    category.map(job=> 
                    <div className='shadow bg-slate-50 p-6 rounded-md' key={job.id}>
                        <img className='py-3' src={job.logo} alt="" />
                        <h4 className='text-xl font-bold text-gray-600 py-2'>{job.title}</h4>
                        <p className='text-gray-400'>{job.available_jobs} jobs Available</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JobCategory;