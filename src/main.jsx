import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import Langding from './components/Langding/Langding';
import ResisterRBS from './components/ResisterRBS/ResisterRBS';
import ResisterBS from './components/ResisterBS/ResisterBS';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Langding></Langding>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/resister",
        element: <Resister></Resister>
      },
      {
        path: "/resister-rbs",
        element: <ResisterRBS></ResisterRBS>
      },
      {
        path: "/resister-rb",
        element: <ResisterBS></ResisterBS>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
