import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Events from "../component/Event/Events";
import EventDetails from "../component/Details/EventDetails";
import Admin from "../component/Admin/Admin";
import Form from "../Pages/Form";
import AddWorkshop from "../Pages/AddWorkshop";
import AllExperts from "../Pages/AllExperts";
import Attendance from "../Pages/Attendance";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../component/Navbar.jsx";
import AllUsers from "../Pages/AllUsers";
 const router = createBrowserRouter([
    {
       path:'/',
       element: <Layout></Layout>,
       children:[
         {
            path: '/',
            element: <Events></Events>

         },
         {
         path:'/events/:id',
         loader:({params}) =>fetch(`http://localhost:5000/events/${params.id}`),
         element: <EventDetails></EventDetails>

         },
         {
            path:'/form',
            element: <Form></Form>
         },
         {
            path:'/addWorkshop',
            loader:() =>fetch(`http://localhost:5000/events`),
            element: <AddWorkshop></AddWorkshop>
         },
         {
            path:'/AllExpert',
            element: <AllExperts></AllExperts>
         },
         {
            path:'/AllUsers',
            element: <AllUsers></AllUsers>
         },
         {
            path:'/Attendance',
            element: <Attendance></Attendance>
         }
        
         // {
         //    path:'/admin',
         //    element: <Admin></Admin>
            
         // }
      ]
       
    },
    {
       path: '/signIn',
       element: <SignIn></SignIn>
       
    },
  
    {
       path:'/signUp',
       loader:()=>fetch(`http://localhost:5000/users`),
         element: <SignUp></SignUp>
       
    },
    {
       path:'/',
       loader:()=>fetch(`http://localhost:5000/users`),
       element: <Navbar></Navbar>
       
    }
   
])

export default router;