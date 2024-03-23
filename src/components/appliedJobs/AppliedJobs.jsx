import { useLoaderData, useNavigate } from "react-router-dom";
import {
  getJobToLocalStorage,
  removeJobToLocalStorage,
} from "../../util/localStorage";

const AppliedJobs = () => {
  const navigate = useNavigate();
  const jobs = useLoaderData();
  const jobIds = getJobToLocalStorage();
  const appliedJobs = [];
  jobIds.forEach((id) => {
    const appliedJob = jobs.find((job) => job.id === id);
    if (appliedJob) {
      appliedJobs.push(appliedJob);
    }
  });

  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold text-center text-purple-500">
        Applied Jobs
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {appliedJobs.map((job, idx) => {
          const {
            id,
            job_title,
            company_name,
            remote_or_onsite,
            location,
            job_type,
            salary,
          } = job;
          return (
            <div
              key={idx}
              className="border-2 border-gray-400 p-8 rounded-lg flex flex-col gap-4"
            >
              <h2 className="text-xl font-bold text-sky-500">{job_title}</h2>
              <p>{company_name}</p>
              <div className="flex flex-row gap-4">
                <p className="btn bg-pink-100 ring text-pink-600 btn-sm">
                  {remote_or_onsite}
                </p>
                <p className="btn bg-yellow-100 ring text-yellow-600 btn-sm">
                  {job_type}
                </p>
              </div>
              <p>{location}</p>
              <p>{salary}</p>
              <button
                onClick={() => {
                  navigate(`/job/${id}`);
                }}
                className="btn btn-info w-fit"
              >
                Details
              </button>
              <button
                onClick={() => {
                  removeJobToLocalStorage(id);
                  navigate(0);
                }}
                className="btn btn-error w-fit"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedJobs;
