import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import Root from './components/Root/Root';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import AuthProvider from './components/firebase/AuthProvider';
import PrivateRoute from './components/firebase/PrivateRoute';
import AddVolunteer from './components/Volunteer/AddVolunteer';
import VolunteerDetails from './components/Volunteer/VolunteerDetails';
import NeedVolunteer from './components/Volunteer/NeedVolunteer';
import ManageMyPost from './components/ManageMyPost/ManageMyPost';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://volunteer-website-server.vercel.app/post')
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/addvolunteer',
        element: <PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>,
      },
      {
        path: '/:id',
        loader: ({ params }) => fetch(`https://volunteer-website-server.vercel.app/post/${params.id}`),
        element: <PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
      },
      {
        path: '/needvolunteer',
        loader: () => fetch('https://volunteer-website-server.vercel.app/post'),
        element: <PrivateRoute><NeedVolunteer></NeedVolunteer></PrivateRoute>,
      },
      {
        path: '/managemypost',
        element: <PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
