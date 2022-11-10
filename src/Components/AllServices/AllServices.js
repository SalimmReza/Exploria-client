import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';
import AllService from './AllService';
import { Audio } from 'react-loader-spinner';

const AllServices = () => {
    useTitle('Services')
    const services = useLoaderData();
    const [loading, setLoading] = useState(true);
    //spinner
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [])
    return (
        <div>
            <div className='w-[80%] mx-auto my-20'>
                <h1 className='text-black font-bold text-3xl my-20 text-center'>All services</h1>
                {
                    loading ?
                        <Audio
                            height="80"
                            width="80"
                            radius="9"
                            justify-content="center"
                            align-items="center"
                            color="blue"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        /> :

                        services.map(service => <AllService
                            key={service._id}
                            service={service}
                        ></AllService>).reverse()
                }
            </div>

        </div>
    );
};

export default AllServices;