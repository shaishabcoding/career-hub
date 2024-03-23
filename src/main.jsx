import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import AppliedJobs from "./components/appliedJobs/AppliedJobs";
import Error from "./components/error/Error";
import JobDetails from "./components/jobDetails/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("jobs.json"),
        element: <Home></Home>,
      },
      {
        path: "/applied",
        loader: () => fetch("../jobs.json"),
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:jobId",
        loader: () => fetch("../jobs.json"),
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
