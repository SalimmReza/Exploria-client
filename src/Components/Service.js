import { useEffect, useState, CSSProperties } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id,
        service_title, price, duration, img, details } = service
    return (

        <div>

            <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-full lg:h-[300px]">

                <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' w-full lg:h-full'
                    src={img} alt="" /></figure></PhotoView></PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title">{
                        service_title}</h2>
                    <p className='w-[600px] lg:w-[400px]'>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
                    <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Service;
