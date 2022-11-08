import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProv';
import MyReviewDetails from './MyReviewDetails';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`
        )
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email, logOut])





    return (
        <div className='w-[80%] mx-auto'>

            <div className='relative'>
                {/* <img className='w-full' src={img} alt="" /> */}
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-20  top-[50%]">
                    <h1 className='text-white text-3xl font-bold'>
                        Cart Details
                    </h1>
                </div>
            </div>


            <div className="overflow-x-auto w-full my-28">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Message</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(revw => <MyReviewDetails
                                key={revw._id}
                                revw={revw}

                            ></MyReviewDetails>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReviews;