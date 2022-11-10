import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";


import AllServices from "../Components/AllServices/AllServices";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Login from "../Components/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import Update from "../Components/MyReviews/Update";
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
                loader: () => fetch(`https://assignment-11-server-xi.vercel.app/servicesThree`)
            },
            {
                path: '/services',
                element: <AllServices></AllServices>,
                loader: () => fetch(`https://assignment-11-server-xi.vercel.app/services`)
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-11-server-xi.vercel.app/services/${params.id}`)

            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },

            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://assignment-11-server-xi.vercel.app/reviews/${params.id}`)

            }



        ]
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }

])