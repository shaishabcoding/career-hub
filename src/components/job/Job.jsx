import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="border-2 border-gray-400 p-8 rounded-lg flex flex-col gap-4">
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
      <Link to={`/job/${id}`} className="w-fit">
        <button className="btn btn-info">Show Details</button>
      </Link>
    </div>
  );
};

export default Job;
