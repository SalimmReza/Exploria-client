import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProv';

const SubmitForm = ({ service }) => {
    const { user } = useContext(AuthContext);

    const [reviews, setreviews] = useState([]);
    // console.log(service);

    const { _id, service_title, price, duration, img, details, r1, r2, r3 } = service

    function refreshPage() {
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const namee = form.namee.value;
        const photo = user?.photoURL || 'No Photo'
        const review = form.review.value;

        const value = { namee, photo, review }
        console.log(value);

        const reviewItems = {
            service: _id,
            service_title,
            price,
            customer_name: namee,
            photo,
            review,
            email: user.email

        }

        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);


            })



    }
    return (
        <div>
            <div className="hero bg-base-200 p-10">

                <form onSubmit={handleSubmit}
                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Review now!</h1>
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" name='namee' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="PhotURL" defaultValue={user?.photoURL} readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Review</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Your Review" name='review' maxlength="40"></textarea>

                        </div>
                        <button
                            type='submit' className="btn btn-outline btn-primary mt-5">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitForm;