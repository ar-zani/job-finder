// import React from 'react'
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const AppliedJobCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, job_title, logo, company_name, work_location, job_type, contact, salary } = props.data;

  return (
    <div className="grid md:flex p-5 border justify-between place-items-center items-center">
      <div className="md:flex items-center">
        <div className='grid items-center justify-center m-auto md:w-40 md:h-40 bg-slate-100 p-6 mb-2 md:mb-0'>
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className='px-3 text-center md:text-left'>
          <h4 className='md:text-lg lg:text-xl font-bold text-gray-600'>{job_title}</h4>
          <h5 className='py-1 text-gray-500 lg:text-lg font-medium'>{company_name}</h5>
          <div className="mt-2 flex justify-between md:justify-normal gap-3 text-violet-400 font-semibold md:font-bold">
            <p className='border border-violet-400 px-3 py-0.5 lg:py-1.5 rounded-md'>{work_location}</p>
            <p className='border border-violet-400 px-3 py-0.5 lg:py-1.5 rounded-md'>{job_type}</p>
          </div>
          <div className="text-left pt-3 grid md:grid-cols-2 gap-3 md:gap-5 text-gray-500 text-sm lg:text-lg font-medium">
            <p><MapPinIcon className='h-5 inline -mt-1'></MapPinIcon> {contact?.address}</p>
            <p><CurrencyDollarIcon className='h-5 inline -mt-1'></CurrencyDollarIcon> Salary: {salary}</p>
          </div>

        </div>
      </div>
      <Link to={`/jobs/${id}`} className='mt-5 md:mt-0'><button className='bg-violet-400 px-3 py-1.5 rounded text-white font-semibold lg:text-xl'>View Details</button></Link>
    </div>
  );
};

export default AppliedJobCard;