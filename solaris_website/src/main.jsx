import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter ,
  RouterProvider,
} from "react-router-dom";
import {CaseStudies, OurPeople, WhatWeDo} from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/whatWeDo",
    element: <WhatWeDo/>
  },
  {
    path: "/caseStudies",
    element: <CaseStudies/>
  },
  {
    path: "/OurPeople",
    element:<OurPeople/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
