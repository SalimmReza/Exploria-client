import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllServices/AllServices";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layout/Main";

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
                path: 'allservices',
                element: <AllServices></AllServices>,
                loader: () => fetch(`http://localhost:5000/services`)
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },


        ]
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }

])