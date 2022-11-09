import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ClipLoader from "react-spinners/ClipLoader";
import logo from './Assets/deer.png'

const Nav = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="navbar bg-base-100 shadow-xl">




            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        {
                            user?.email ?
                                <>
                                    <li><Link to='/reviews'>My Reviews</Link></li>
                                    <li><Link to='/addservice'>Add Service</Link></li>

                                    <li><Link><button onClick={handleLogout}
                                        className="btn btn-ghost">LogOut</button></Link></li>
                                </>
                                :
                                ""


                        }
                    </ul>
                </div>
                <img className='h-10' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl text-blue-800">Exploria</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    {
                        user?.email ?
                            <>
                                <li><Link to='/reviews'>My Reviews</Link></li>
                                <li><Link to='/addservice'>Add Service</Link></li>

                                <li><Link><button onClick={handleLogout}
                                    className="btn btn-ghost">LogOut</button></Link></li>
                            </>
                            :
                            ""


                    }


                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.photoURL ?
                        <div className="avatar">
                            <div className="w-12">
                                <img className='rounded-xl' src={user.photoURL} alt='' />
                            </div>
                        </div>
                        :
                        <div>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

                        </div>


                }
            </div>
        </div>
    );
};

export default Nav;