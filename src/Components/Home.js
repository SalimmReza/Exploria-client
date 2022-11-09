import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/UseTitle';

import Banner from './Banner';
import CloseToNature from './CloseToNature';
import Sectionthree from './SectionThree';
import Service from './Service';
import Resizable from './Slick';
import SimpleSlider from './Slick';



const Home = () => {
    const services = useLoaderData();

    useTitle('Home')
    return (
        <div >

            <Banner></Banner>

            <div className='w-[80%] mx-auto my-20'>
                <CloseToNature></CloseToNature>
            </div>
            <Sectionthree></Sectionthree>


            <div className='w-[80%] mx-auto my-20'>
                <h1 className='text-black font-bold text-3xl my-20 text-center'>Our services</h1>
                {
                    services.slice(0, 3).map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>).reverse()
                }


                <div className='flex justify-center items-center'>
                    <Link to='/allservices'><button class="btn btn-outline btn-primary px-10">See All</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Home;