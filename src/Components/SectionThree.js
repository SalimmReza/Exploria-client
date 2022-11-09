import React from 'react';

const SectionThree = () => {
    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-none image-full">
            <img className='w-full h-[500px] bg-cover' src="https://images.pexels.com/photos/1033729/pexels-photo-1033729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="card-body text-center">
                <h2 className="text-3xl font-bold ">Challenges of Wildlife Photography</h2>
                <p>Wildlife photographers must be prepared to venture into remote and isolated locations, often in extreme weather conditions. They may find themselves working solo or in small teams and must also be prepared to capture quick action shots of elusive wild animals. Animal behavior can be erratic and unpredictable, meaning that professionals might only get a few seconds to observe or photograph their subjects</p>

                <h2 className='text-xl font-bold'>Challenges we might face <span className='text-red-500'>Cant Complain!</span></h2>

                <div className=''>
                    <p>Environmental Factors </p>
                    <p> Finding Wildlife to Photograph </p>
                    <p> Getting Close to Wildlife </p>
                    <p> Physical Risks </p>
                    <p> Working With Available Light </p>
                </div>


            </div>
        </div>
    );
};

export default SectionThree;