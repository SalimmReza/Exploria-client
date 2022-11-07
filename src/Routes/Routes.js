import { createBrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }

        ]
    },
    {
        path: '/footer',
        element: <Footer></Footer>
    }

])