import React, { useEffect, useState } from 'react';

const AllReviews = ({ rev }) => {
    // console.log(rev);

    const { service, review } = rev
    // console.log(service_title);


    const [reviews, setreviews] = useState([]);
    // console.log(reviews);

    useEffect(() => {
        fetch(`http://localhost:5000/reviewspecific?service=${service}`
        )
            .then(res => res.json())
            .then(data => {
                // console.log(data);

            })
    }, [service])

    return (
        <div>
            <p>{review}</p>
        </div>
    );
};

export default AllReviews;