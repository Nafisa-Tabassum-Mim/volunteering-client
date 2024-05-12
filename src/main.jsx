import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/show')
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
        loader:({params})=>fetch(`http://localhost:5000/post/${params.id}`),
        element: <PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
