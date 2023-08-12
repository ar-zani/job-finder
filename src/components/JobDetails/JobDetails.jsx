import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb, getDatabaseData } from "../../utilities/databaseManager";


const JobDetails = () => {
    const {jobId} = useParams();
    const [jobDetails, setJobDetails] = useState({});

    useEffect(()=>{
        const loadData = async () =>{
        const res = await fetch('/fakeData.json');
        const data = await res.json();
        const neededJob = data.jobs.find(job=> job.id===(+jobId));
        setJobDetails(neededJob);
        // console.log(neededJob);
        }
        loadData();
    },[])
    
    const handleAdd = (id)=>{
        const storedId = getDatabaseData();
        if(storedId[id]) alert('already applied');
        else{
            addToDb(id);
        }
    }
    return (
        <div className="mt-14 lg:mt-24">
            <h2 className="py-20 bg-slate-50 text-3xl font-bold text-center">Job Details</h2>
            <div className="lg:flex w-10/12 lg:w-8/12 py-14 m-auto">
                <div className="lg:w-7/12 m-auto">
                    <p className="text-md md:text-xl text-justify font-semibold py-3">Job Description: <span className="text-sm md:text-base font-normal text-gray-400">{jobDetails.job_description}</span></p>
                    <p className="text-md md:text-xl text-justify font-semibold py-3">Job Responsibility: <span className="text-sm md:text-base font-normal text-gray-400">{jobDetails.job_responsibility}</span></p>
                    <p className="text-md md:text-xl font-semibold py-3">Educational Requirements: <br /> <span className="text-sm md:text-base font-normal text-gray-400">{jobDetails.educational_requirements}</span></p>
                    <p className="text-md md:text-xl font-semibold py-3">Experiences: <br /> <span className="text-sm md:text-base font-normal text-gray-400">{jobDetails.experiences}</span></p>
                </div>
                <div className="mt-5 lg:mt-0 h-fit lg:ms-5 lg:w-7/12 m-auto lg:w-5/12 bg-slate-100">
                    <div className="p-4">
                    <h4 className="text-center lg:text-left text-xl font-semibold pb-3">Job Details</h4>
                    <hr className="border" />
                    <p className="text-lg font-semibold py-3">Salary: <span className="text-base font-normal text-gray-400">{jobDetails.salary} (Per month)</span></p>
                    <p className="text-lg font-semibold pb-3">Job Title: <span className="text-base font-normal text-gray-400">{jobDetails.job_title}</span></p>
                    <h4 className="text-center lg:text-left text-xl font-semibold py-3">Contact Information</h4>
                    <hr className="border" />
                    <p className="text-lg font-semibold py-3">Phone: <span className="text-base font-normal text-gray-400">{jobDetails.contact?.phone}</span></p>
                    <p className="text-lg font-semibold pb-3">Email: <span className="text-base font-normal text-gray-400">{jobDetails.contact?.email}</span></p>
                    <p className="text-lg font-semibold pb-3">Address: <span className="text-base font-normal text-gray-400">{jobDetails.contact?.address}</span></p>
                    </div>
                    <button onClick={()=> handleAdd(jobDetails.id)} className='w-full mt-4 bg-violet-400 px-4 py-2.5 rounded-md text-white font-semibold md:text-xl'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;