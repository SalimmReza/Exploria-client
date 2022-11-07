import React from 'react';

const CloseToNature = () => {
    return (
        <div className='my-32 '>
            <div className="hero h-[500px] bg-gray-100 rounded-xl">

                <div className="hero-content flex-col lg:flex-row">

                    <div className='relative w-[70%]'>
                        <img src="https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className=" rounded-lg shadow-2xl w-[60%] h-full " />
                        <img src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="rounded-lg shadow-2xl w-[30%] absolute top-[70%] border-8 left-[2%] " />
                        <img src="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="rounded-lg shadow-2xl w-[30%] absolute top-[70%] left-[35%] border-8" />
                        <img src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="rounded-lg shadow-2xl w-[30%] absolute top-[70%] left-[68%] border-8" />
                        <img src="https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="rounded-lg shadow-2xl w-[30%] absolute top-[20%] left-[50%] border-8" />
                        <img src="https://images.pexels.com/photos/1829979/pexels-photo-1829979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="rounded-lg shadow-2xl w-[30%] absolute top-[-10%] left-[70%] border-8" />

                    </div>
                    <div className='w-[40%] flex flex-col items-start'>
                        <p className='font-bold text-black flex my-3'>Out Collections</p>
                        <h1 className="text-5xl font-bold text-justify text-red-600">Close To Nature</h1>
                        <p className="py-6 text-justify">Look deep into nature, and then you will understand everything better.The continued existence of wildlife and wilderness is important to the quality of life of humans</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloseToNature;