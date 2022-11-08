import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProv';

const SubmitForm = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = user?.photoURL || 'No Photo'
        const review = form.review.value;

        const value = { name, photo, review }
        console.log(value);
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
                            <input type="text" name='name' placeholder="Name" defaultValue={user?.displayName} className="input input-bordered" />
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
                            <textarea className="textarea textarea-bordered" placeholder="Your Review" name='review'></textarea>

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