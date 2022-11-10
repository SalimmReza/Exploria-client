import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/UseTitle';


const AddService = () => {
    useTitle('Add-Service')
    const notify = () => toast("Service Added Successfully");


    const handleADD = (e) => {
        e.preventDefault();

        const field = e.target;
        const service_title = field.name.value;
        const price = field.price.value;
        const duration = field.duration.value;
        const details = field.description.value;
        const img = field.photo.value;

        const services = {
            service_title,
            price,
            duration,
            details,
            img

        }



        fetch(`https://assignment-11-server-xi.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // alert('added successfully')
                    notify()
                    field.reset();
                }
            })
    }
    return (


        <form onSubmit={handleADD}
            className=' my-32 p-28 bg-gray-200 rounded-xl'>

            <div className='grid grid-cols-2 gap-4'>

                <input name="name" type="text" required placeholder="service Name" className=" w-full border-2 rounded-lg p-2 border-indigo-500 " />
                <input name="price" type="text" required placeholder="Price" className=" w-full border-2 rounded-lg p-2 border-indigo-500 " defaultValue="$" />
                <input name="duration" type="text" required placeholder="Duration" className=" w-full border-2 rounded-lg p-2 border-indigo-500" />
                <input name="photo" type="text" required placeholder="PhotoUrl" className=" w-full border-2 rounded-lg p-2 border-indigo-500 " />


            </div>

            <textarea name='description' className="textarea textarea-primary mt-5 w-full h-[150px]" placeholder="Description"></textarea>

            <button type='submit' className="btn  bg-blue-600 border-0 hover:bg-yellow-500 mt-10 w-full">Add Service</button>

            <ToastContainer />
        </form>


    );
};

export default AddService;