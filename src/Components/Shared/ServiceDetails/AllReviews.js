import React, { useEffect, useState } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AllReviews.css'
import Resizable from '../../Slick';


const AllReviews = ({ rev }) => {
    // console.log(rev);

    const { service, review, photo, customer_name } = rev
    // console.log(service_title);

    return (

        <div className='flex   my-5 '>
            <div className="avatar">
                <div className="w-7 rounded-xl mr-2">
                    <img src={photo} alt='' />
                </div>
            </div>
            <div className='text-[10px] font-bold'>
                <p>{customer_name}</p>
                <p>{review}</p>
            </div>


        </div>
    );
};

export default AllReviews;