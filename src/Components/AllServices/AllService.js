import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllService = ({ service }) => {
    const { _id,
        service_title, price, duration, img, details } = service
    return (
        <div className="card lg:card-side bg-base-100 drop-shadow-xl my-10 h-[300px]">

            {/* <PhotoView src={img}>
                <img src={img} style={{ objectFit: 'cover' }} alt="" />
            </PhotoView> */}



            <PhotoProvider>  <PhotoView src={img}><figure className='w-[50%]'><img className=' h-full'
                src={img} alt="" /></figure></PhotoView></PhotoProvider>


            <div className="card-body">
                <h2 className="card-title">{
                    service_title}</h2>
                <p className='w-[400px]'>{details.length > 100 ? details.slice(0, 100) + "..." : details}</p>
                <p className='text-red-500'>Price: {price} <span className='text-black font-semibold'>for {duration}</span></p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllService;