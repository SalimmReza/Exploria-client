import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProv';
import SubmitForm from './SubmitForm';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext)
    console.log(user);

    const { _id, name, price, duration, img, details, r1, r2, r3 } = service
    return (
        <div>

            {
                user?.email ? <div>
                    <SubmitForm></SubmitForm>

                    <div className='w-[80%] mx-auto'>
                        <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full">
                            <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                                src={img} alt="" /></figure></PhotoView></PhotoProvider>

                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p className='w-[400px]'>{details}</p>
                                <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                                <p>{r1}</p>
                                <p>{r2}</p>
                                <p>{r3}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    :
                    ""
            }
            <div>



                {
                    user?.email ? <>
                    </> :
                        <div className='w-[80%] mx-auto'>
                            <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full">
                                <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                                    src={img} alt="" /></figure></PhotoView></PhotoProvider>

                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p className='w-[400px]'>{details}</p>
                                    <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                                    <p>{r1}</p>
                                    <p>{r2}</p>
                                    <p>{r3}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
};

export default ServiceDetails;