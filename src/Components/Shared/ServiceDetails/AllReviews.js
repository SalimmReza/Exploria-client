import React, { useEffect, useState } from 'react';

const AllReviews = ({ rev }) => {
    // console.log(rev);

    const { _id, customer_name, price, email, service_title, service, photo, review } = rev
    console.log(service);


    const [reviews, setreviews] = useState([]);
    // console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewspecific?service=${service}`
        )
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [service])




    return (
        <div>
            <p>{review}</p>
        </div>
    );
};

export default AllReviews;