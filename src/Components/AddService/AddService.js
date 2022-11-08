import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {



    const handleADD = (e) => {
        e.preventDefault();

        const field = e.target;
        const service_title = field.name.value;
        // const price = field.price.value;
        const duration = field.duration.value;
        const details = field.description.value;
        const img = field.photo.value;

        const services = {
            service_title,
            // price,
            duration,
            details,
            img

        }



        fetch(`http://localhost:5000/services`, {
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
                    alert('added successfully')
                    field.reset();
                }
            })
    }
    return (


        <form onSubmit={handleADD}
            className=' my-32 p-28 bg-gray-200 rounded-xl'>

            <div className='grid grid-cols-2 gap-4'>

                <input name="name" type="text" placeholder="service Name" className="input input-bordered input-primary w-full " />
                <input name="Price" type="text" placeholder="Price" className="input input-bordered input-primary w-full " />
                <input name="duration" type="text" placeholder="Duration" className="input input-bordered input-primary w-full " />
                <input name="photo" type="text" placeholder="PhotoUrl" className="input input-bordered input-primary w-full " />


            </div>

            <textarea name='description' className="textarea textarea-primary mt-5 w-full h-[150px]" placeholder="Description"></textarea>

            <button type='submit' className="btn  bg-red-600 border-0 hover:bg-yellow-500 mt-10 w-full">Add Service</button>
        </form>
    );
};

export default AddService;