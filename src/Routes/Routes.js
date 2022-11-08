import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";


import AllServices from "../Components/AllServices/AllServices";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Login from "../Components/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import Register from "../Components/Register";
import ServiceDetails from "../Components/Shared/ServiceDetails/ServiceDetails";

import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>,
                loader: () => fetch(`http://localhost:5000/services`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },



        ]
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }

])