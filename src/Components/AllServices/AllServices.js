import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/UseTitle';
import AllService from './AllService';

const AllServices = () => {
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div>


            <div className='w-[80%] mx-auto my-20'>
                <h1 className='text-black font-bold text-3xl my-20 text-center'>All services</h1>
                {
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