import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate();
    // const handleExplore = () =>{
    //     navigate(`/services/${_id}`)
    // }
    return (
        <div className="hero h-[60vh] w-full" style={{ backgroundImage: `url("https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" w-[250px] lg:w-[700px]">
                    <h1 className="mb-5 text-5xl font-bold">Close To Nature</h1>
                    <p className="mb-5">Welcome To Our Website. We provide experienced photographers for wild live photography. We have many options, you can check out our services and the reviews of out customers. Lets explore the wildLife together!
                    </p>
                    <Link to='/services'><button
                        className="btn btn-primary px-10">Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;