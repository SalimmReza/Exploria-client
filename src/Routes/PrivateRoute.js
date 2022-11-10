import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthProv';
import { Audio } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    const [isLoading, setIsLoading] = useState(true);
    //spinner
    // useEffect(() => {
    //     setIsLoading(true)
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 10000)
    // }, [])


    if (loading) {

        return <Audio
            height="80"
            width="80"
            radius="9"
            justify-content="center"
            align-items="center"
            display="flex"
            color="blue"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />



    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;