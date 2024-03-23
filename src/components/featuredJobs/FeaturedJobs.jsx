import { useState } from "react";
import Job from "../job/Job";

const FeaturedJobs = ({ jobs }) => {
  const [showJobsLength, setShowJobsLength] = useState(4);
  return (
    <div>
      <h2>FeaturedJobs</h2>
      <div className="grid grid-cols-2 gap-4">
        {jobs.slice(0, showJobsLength).map((job, idx) => (
          <Job key={idx} {...{ job }}></Job>
        ))}
      </div>
      <div className="flex justify-center items-center m-6">
        {showJobsLength === jobs.length ? (
          <button
            onClick={() => setShowJobsLength(4)}
            className="btn btn-primary"
          >
            Show less
          </button>
        ) : (
          <button
            onClick={() => setShowJobsLength(jobs.length)}
            className="btn btn-primary"
          >
            Show all
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
