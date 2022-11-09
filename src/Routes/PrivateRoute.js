import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthProv';
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     setIsLoading(true)
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 5000);
    // }, [])



    if (loading) {


        <h1 className='text-5xl'>Loading...</h1>







    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;