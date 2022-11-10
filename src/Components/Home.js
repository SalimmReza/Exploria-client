import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/UseTitle';
import Banner from './Banner';
import CloseToNature from './CloseToNature';
import SectionThree from './SectionThree';
import Service from './Service';
import { Audio } from 'react-loader-spinner';



const Home = () => {
    const services = useLoaderData();

    const [loading, setLoading] = useState(true);
    //spinner
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useTitle('Home')
    return (
        <div >

            <Banner></Banner>

            <div className='w-[80%] mx-auto my-20'>
                <CloseToNature></CloseToNature>
            </div>
            <SectionThree></SectionThree>


            <div className='w-[80%] mx-auto my-20'>
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




                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>).reverse()




                }




                <h1 className='text-black font-bold text-3xl my-20 text-center'>Our services</h1>


                <div className='flex justify-center items-center'>
                    <Link to='/services'><button class="btn btn-outline btn-primary px-10">See All</button></Link>
                </div>



            </div>

        </div>
    );
};

export default Home;