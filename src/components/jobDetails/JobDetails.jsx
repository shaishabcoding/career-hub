import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { saveJobToLocalStorage } from "../../util/localStorage";

const JobDetails = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const selectedJob = jobs.find((job) => job.id === +jobId);
  const {
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = selectedJob;

  return (
    <div className="flex flex-col gap-4 m-12">
      <h2 className="text-3xl font-bold text-sky-500">{job_title}</h2>
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
      <p>Salary: {salary}</p>
      <p>{job_description}</p>
      <p>{job_responsibility}</p>
      <p>{educational_requirements}</p>
      <p>{experiences}</p>
      <p>Phone: {contact_information.phone}</p>
      <p>Email: {contact_information.email}</p>
      <p>Address: {contact_information.address}</p>
      <button
        onClick={() => {
          saveJobToLocalStorage(id);
          navigate("/applied");
        }}
        className="btn btn-info w-fit"
      >
        Apply Now
      </button>
      <button className="btn w-fit btn-error" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default JobDetails;
