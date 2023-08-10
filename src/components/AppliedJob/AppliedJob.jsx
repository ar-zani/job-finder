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
        const ids = Object.keys(getDatabaseData())
        let addedjob = [];
        ids.forEach(id => {
            const job = jobs.find(jobb=> jobb.id===parseInt(id))
            addedjob.push(job);
        })
        setAppliedJobs(addedjob);
    }, [jobs])
    

    return (
        <div>
            <h2 className="py-20 bg-slate-50 text-3xl font-bold text-center">Applied Jobs</h2>
            <div className='w-8/12 m-auto grid gap-8 mt-10'>
                {
                    appliedJobs.length && appliedJobs.map((job,idx)=> <AppliedJobCard key={idx} data={job}></AppliedJobCard>)
                }
            </div>

        </div>
    );
};

export default AppliedJob;