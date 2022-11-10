import React, { useContext, useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Form, Link, Navigate, redirect, useLoaderData, useLocation } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import { AuthContext } from '../../Context/AuthProv';
import AllReviews from './AllReviews';
import SubmitForm from './SubmitForm';


const ServiceDetails = () => {
    useTitle('Service-Details')
    const services = useLoaderData();
    const { user, logOut } = useContext(AuthContext)


    const [reviews, setreviews] = useState([]);
    const [redirect, setRedirect] = useState(false)
    // console.log(user);

    const { _id,
        service_title, price, duration, img, details, r1, r2, r3 } = services

    // console.log(service);





    // console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewspecific?service=${_id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setreviews(data))
    }, [_id, reviews, logOut])

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    return (
        <div>


            {
                redirect && <Navigate to="/login" state={{ from: location }} replace></Navigate>
            }


            {
                user?.email ? <div>
                    <SubmitForm services={services}></SubmitForm>

                    <div className='w-[80%] mx-auto'>
                        <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full">
                            <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                                src={img} alt="" /></figure></PhotoView></PhotoProvider>

                            <div className="card-body">
                                <h2 className="card-title">{
                                    service_title}</h2>
                                <p className='w-[400px]'>{details}</p>
                                <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                                <p className='text-green-500'>Out Personal Review</p>
                                <p>{r1}</p>
                                <p>{r2}</p>
                                <p>{r3}</p>
                                <h1 className='text-[12px] font-semibold text-red-500'>Our Customer's Reviews</h1>
                                <div className=''>

                                    {
                                        reviews.map(rev => <AllReviews
                                            rev={rev}
                                        ></AllReviews>).reverse()
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                    :
                    <div className='w-[80%] mx-auto'>
                        <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full">
                            <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                                src={img} alt="" /></figure></PhotoView></PhotoProvider>

                            <div className="card-body">
                                <button className='text-blue-700 font-bold text-lg'
                                    onClick={() => { setRedirect(true) }}>Please Login To Add A Review
                                </button>
                                <h2 className="card-title">{
                                    service_title}</h2>
                                <p className='w-[400px]'>{details}</p>
                                <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                                <p className='text-green-500'>Out Personal Review</p>
                                <p>{r1}</p>
                                <p>{r2}</p>
                                <p>{r3}</p>
                                <h1 className='text-[12px] font-semibold text-red-500'>Our Customer's Reviews</h1>
                                <div className=''>

                                    {
                                        reviews.map(rev => <AllReviews
                                            rev={rev}
                                        ></AllReviews>)
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
            }
            <div>



                {/* {
                    user?.email ? <>
                    </> :
                        <div className='w-[80%] mx-auto'>
                            <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full">
                                <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                                    src={img} alt="" /></figure></PhotoView></PhotoProvider>

                                <div className="card-body">
                                    <p>Please login to add a review <button onClick={() => { setRedirect(true) }}>
                                    </button> </p>
                                    <h2 className="card-title">{
                                        service_title}</h2>
                                    <p className='w-[400px]'>{details}</p>
                                    <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                                    <p className='text-green-500'>Out Personal Review</p>
                                    <p>{r1}</p>
                                    <p>{r2}</p>
                                    <p>{r3}</p>
                                    <h1 className='text-[12px] font-semibold text-red-500'>Our Customer's Reviews</h1>
                                    <div className=''>

                                        {
                                            reviews.map(rev => <AllReviews
                                                rev={rev}
                                            ></AllReviews>)
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                } */}

            </div>
        </div>
    );
};

export default ServiceDetails;