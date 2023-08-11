import { useEffect, useState } from "react";
import { getDatabaseData } from "../../utilities/databaseManager";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";


const AppliedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('fakeData.json');
            const data = await res.json();
            setJobs(data.jobs);
        }
        loadData();
    }, [])
    useEffect(() => {
        if (jobs.length > 0) {
            const ids = Object.keys(getDatabaseData())
            let addedJob = [];
            ids.forEach(id => {
                const job = jobs.find(jobb => jobb.id === parseInt(id))
                addedJob.push(job);
            })
            setAppliedJobs(addedJob);
        }
    }, [jobs])


    return (
        <div className="pt-30">
            <h2 className="py-20 bg-slate-50 text-3xl font-bold text-center">
                {appliedJobs.length === 0 ? 'No job applications have been made' : 'Applied Jobs'}</h2>
            <div className='md:w-10/12 lg:w-8/12 m-auto grid place-content-center gap-8 mt-10'>
                {
                    appliedJobs?.map((job) => <AppliedJobCard key={job.id} data={job}></AppliedJobCard>)
                }
            </div>

        </div>
    );
};

export default AppliedJob;