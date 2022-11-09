import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import useTitle from '../../Hooks/UseTitle';

const Update = () => {
    useTitle('Update')
    const notify = () => toast("Updated Successfully");
    const navigation = useNavigate()
    const update = useLoaderData();
    console.log(update);
    const { _id, service_title, review, customer_name, email } = update

    const handleUpdate = (e) => {
        e.preventDefault();

        const field = e.target;
        const service_title = field.name.value;
        const email = field.email.value;
        const customer_name = field.customer.value;
        const review = field.review.value;
        const user = { service_title, email, customer_name, review };
        console.log(user);

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    alert('updated')
                    // notify()
                    field.reset()

                    navigation('/reviews');

                }
            })


    }
    return (
        <div>
            <form onSubmit={handleUpdate}
                className=' my-32 p-28 bg-gray-200 rounded-xl'>

                <div className='grid grid-cols-1 gap-4'>

                    <input name="name" type="text" defaultValue={service_title} readOnly placeholder="service Name" className=" w-full border-2 rounded-lg p-2 border-indigo-500 " />
                    <input name="customer" type="text" defaultValue={customer_name} readOnly placeholder="Customer Name" className=" w-full border-2 rounded-lg p-2 border-indigo-500 " />
                    <input name="email" type="text" required placeholder="email" className=" w-full border-2 rounded-lg p-2 border-indigo-500" defaultValue={email} readOnly />



                </div>

                <textarea name='review' className="textarea textarea-primary mt-5 w-full h-[150px]" placeholder="Review" defaultValue={review}></textarea>

                <button type='submit' className="btn  bg-blue-600 border-0 hover:bg-yellow-500 mt-10 w-full">Update Review</button>
                <ToastContainer></ToastContainer>
            </form>

        </div>
    );
};

export default Update;