import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewDetails = ({ revw, handleDelete }) => {


    const { _id, customer_name, price, email, service_title, service, photo, review } = revw

    //console.log(revw);


    const [reviewDetails, setReviewDetails] = useState({})
    // console.log(reviewDetails);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewDetails(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            {
                                reviewDetails?.img &&
                                <img src={reviewDetails.img} alt="Avatar Tailwind CSS Component" />
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_title}</div>
                        <div className="text-sm text-red-600">Price {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customer_name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{review}</td>
            <th>

                <Link to={`/update/${_id}`}>  <button
                    className="btn btn-ghost btn-xs lowercase">
                    Update
                </button></Link>
            </th>
        </tr>
    );
};

export default MyReviewDetails;