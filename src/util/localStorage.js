const getJobToLocalStorage = () => {
  const jobs = localStorage.getItem("jobs");
  if (jobs) {
    return JSON.parse(jobs);
  } else {
    return [];
  }
};
const saveJobToLocalStorage = (jobId) => {
  const jobs = getJobToLocalStorage();
  jobs.push(jobId);
  localStorage.setItem("jobs", JSON.stringify([...new Set(jobs)]));
};
const removeJobToLocalStorage = (jobId) => {
  const jobs = getJobToLocalStorage();
  const newJobs = jobs.filter((id) => id !== jobId);
  localStorage.setItem("jobs", JSON.stringify(newJobs));
};
export { getJobToLocalStorage, saveJobToLocalStorage, removeJobToLocalStorage };
