import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
       path:'/',
       element: <Layout></Layout>,
       
    },
    {
       path: '/signIn',
       element: <SignIn></SignIn>
       
    },
    {
       path:'/signUp',
       element: <SignUp></SignUp>
       
    }
])