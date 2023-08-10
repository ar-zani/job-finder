import { Link } from "react-router-dom";


const JobCard = (props) => {
    console.log(props.data);
    // eslint-disable-next-line react/prop-types
    const{id,logo, job_title, company_name, work_location, job_type,contact, salary} = props.data;
    return (
        <div className='p-6 pb-20 shadow relative'>
            <div>
                <img className='h-15 py-3 block' src={logo} alt="" />
            </div>
            <h4 className='text-xl font-bold text-gray-600 pt-5'>{job_title}</h4>
            <h5 className='py-2 text-gray-500 text-lg font-medium'>{company_name}</h5>
            <div className="mt-2 flex gap-3 text-violet-400 font-bold">
                <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{work_location}</p>
                <p className='border border-violet-400 px-3 py-1.5 rounded-md'>{job_type}</p>
            </div>
            <div className="py-5 flex gap-5 text-gray-500 text-lg font-medium">
                <p>{contact.address}</p>
                <p>Salary: {salary}</p>
            </div>
            <Link to={`/jobs/${id}`}><button  className='absolute bottom-6 bg-violet-400 px-3 py-1.5 rounded text-white font-semibold text-xl'>View Details</button></Link>
        </div>
    );
};

export default JobCard;