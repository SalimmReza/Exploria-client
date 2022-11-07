import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[60vh]" style={{ backgroundImage: `url("https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[700px]">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome To Our Website. We provide experienced photographers for wild live photography. We have many options, you can check out our services and the reviews of out customers. Lets explore the wildLife together!
                    </p>
                    <button className="btn btn-primary px-10">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;