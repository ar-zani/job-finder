import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/main.jsx';
import Home from './components/Layout/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Navigate to="home" replace/>
      },
      {
        path: "home",
        element: <Home></Home>
      },
      {
        path: "applied-job",
        element: <AppliedJob></AppliedJob>
      },
      {
        path:"jobs/:jobId",
        element: <JobDetails></JobDetails>
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"blog",
        element: <Blog></Blog>
      },
      {
        path:"*",
        element: <NotFound></NotFound>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
