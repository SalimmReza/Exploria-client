import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../Hooks/UseTitle";
import { AuthContext } from "./Context/AuthProv";
import { setLoginJWT } from "./Utils/LoginToken";




const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { loginIn, googleSignIn } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleClick = () => {
        googleSignIn(provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setError('');

                setLoginJWT(user);

                navigate(from, { replace: true });



            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage);

            });
    }


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        loginIn(email, password)

            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                form.reset();
                setError('');
                setLoginJWT(user);
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);

            });

    }



    return (
        <div >
            <div className="hero bg-base-200 p-10">
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <h1 className="text-4xl font-bold">Login now!</h1>
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-700'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn bg-red-600 border-0 hover:bg-red-500 ">Login</button>

                            <p className='mt-2 text-[15px] font-medium'>or Register With</p>
                        </div>

                        <div className="avatar gap-4 flex justify-center cursor-pointer">

                            <div className="w-9 h-9 rounded-full">
                                <img onClick={handleGoogleClick}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt='' />
                            </div>
                            {/* <div
                                className="w-9 h-9 rounded-full">
                                <img className=''
                                    src="https://www.pngitem.com/pimgs/m/0-6762_circle-fb-logo-icon-photos-facebook-circle-fb.png" alt='' />
                            </div>
                            <div className="w-9 h-9 rounded-full">
                                <img className=''
                                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' />
                            </div> */}

                        </div>

                        <div className='mt-2 text-[15px] font-medium'>
                            <p>Don't have an Account!<Link to='/register'><span className='text-red-600'>Register</span></Link></p>
                        </div>


                    </div>
                </form>
            </div>
        </div >

    );
};

export default Login;