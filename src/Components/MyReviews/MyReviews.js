import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProv';
import MyReviewDetails from './MyReviewDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useTitle from '../../Hooks/UseTitle';


const MyReviews = () => {
    useTitle('My-Reviews')
    const notify = () => toast("Deleted Successfully");

    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);
    console.log(reviews);
    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-xi.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        )
            .then(res => {
                if (res.status === 401 || res.status === 403) {

                }
                return res.json()
            })
            .then(data => setreviews(data))
    }, [user?.email])


    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete')
        if (proceed) {
            fetch(`https://assignment-11-server-xi.vercel.app/reviews/${id}`, {
                method: 'DELETE',

                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        notify();
                        const remaining = reviews.filter(ordr => ordr._id !== id);
                        setreviews(remaining);
                    }
                })

        }
    }

    return (
        <div className='w-[80%] mx-auto  mb-[480px]' >



            <div className="overflow-x-auto w-full my-28">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >


                        {
                            reviews.map(revw => <MyReviewDetails
                                key={revw._id}
                                revw={revw}
                                handleDelete={handleDelete}
                            // handleUpdate={handleUpdate}

                            ></MyReviewDetails>).reverse()
                        }
                    </tbody>


                </table>

                {
                    reviews.length === 0 ? <h1 className='text-center font-bold text-2xl text-red-500 my-10'>No Reviews Yet! Go to service details to review the item!</h1> : ""
                }
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default MyReviews;