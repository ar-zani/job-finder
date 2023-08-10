import React from 'react'
import { Link } from 'react-router-dom';

const AppliedJobCard = (props) => {
    // console.log(props);
    const { id, job_title, logo, company_name, work_location, job_type,contact,salary } = props.data || {};

    return (
        <div className="flex p-5 border justify-between items-center">
            <div className="flex items-center">
                <div className='grid items-center justify-center w-40 h-40 bg-slate-100 p-6'>
                    <img className="w-full" src={logo} alt="" />
                </div>
                <div className='px-3'>
                    <h4 className='text-xl font-bold text-gray-600'>{job_title}</h4>
                    <h5 className='py-1 text-gray-500 text-lg font-medium'>{company_name}</h5>
                    <div className="mt-2 flex gap-3 text-violet-400 font-bold">
                        <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{work_location}</p>
                        <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{job_type}</p>
                    </div>
                    <div className="pt-3 flex gap-5 text-gray-500 text-lg font-medium">
                        <p>{contact?.address}</p>
                        <p>Salary: {salary}</p>
                    </div>

                </div>
            </div>
            <Link to={`/jobs/${id}`}><button  className='bg-violet-400 px-3 py-1.5 rounded text-white font-semibold text-xl'>View Details</button></Link>
        </div>
    );
};

export default AppliedJobCard;