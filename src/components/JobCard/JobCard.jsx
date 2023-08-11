import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


const JobCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { id, logo, job_title, company_name, work_location, job_type, contact, salary } = props.data;
    return (
        <div className='grid  place-items-center md:block bg-slate-50 p-6 md:pb-12 lg:pb-20 shadow relative'>
            <div>
                <img className='h-12 md:h-15 py-3 block' src={logo} alt="" />
            </div>
            <h4 className='md:text-xl font-bold text-gray-600 pt-5'>{job_title}</h4>
            <h5 className='py-2 text-gray-500 md:text-lg font-medium'>{company_name}</h5>
            <div className="mt-2 flex gap-3 text-violet-400 font-semibold lg:font-bold">
                <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{work_location}</p>
                <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{job_type}</p>
            </div>
            <div className="py-5 lg:flex gap-2 lg:gap-5 text-gray-500 text-sm lg:text-lg font-medium">
                <p className="my-2 lg:my-0"><MapPinIcon className='h-5 inline -mt-1'></MapPinIcon>{contact.address}</p>
                <p className="my-2 lg:my-0"><CurrencyDollarIcon className='h-5 inline -mt-1'></CurrencyDollarIcon>Salary: {salary}</p>
            </div>
            <Link to={`/jobs/${id}`}><button className='md:absolute bottom-6 bg-violet-400 px-3 py-1.5 rounded text-white font-semibold lg:text-xl'>View Details</button></Link>
        </div>
    );
};

export default JobCard;