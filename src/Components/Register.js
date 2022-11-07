import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthProv";

const Register = () => {

    const [error, setError] = useState("")
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    // const from = location.state?.from?.pathname || '/';

    const handleGoogleClick = () => {
        googleSignIn(provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                setError('');
                // navigate(from, { replace: true });

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage);

            });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                form.reset();
                setError('');
                handleUpdateUser(name, photo);
                // navigate(from, { replace: true });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            });

        const handleUpdateUser = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo

            }

            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.log(error))
        }



    }

    return (
        <div>
            <div className="hero bg-base-200 p-10">
                <div className="hero-content flex-cols-2 ">
                    <div className="text-center lg:text-left">

                        {/* <img className='w-[70%]' src={img} alt="" /> */}
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <h1 className="text-4xl font-bold">Register now!</h1>
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text font-medium">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="PhotURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered" />

                            </div>
                            <p className='text-red-700'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn bg-red-600 border-0 hover:bg-red-500 ">Register</button>
                                <p className='mt-2 text-[15px] font-medium'>or Register With</p>
                            </div>

                            <div className="avatar gap-4 flex justify-center cursor-pointer">

                                <div className="w-9 h-9 rounded-full">
                                    <img onClick={handleGoogleClick}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt='' />
                                </div>
                                <div className="w-9 h-9 rounded-full">
                                    <img className=''
                                        src="https://www.pngitem.com/pimgs/m/0-6762_circle-fb-logo-icon-photos-facebook-circle-fb.png" alt='' />
                                </div>
                                <div className="w-9 h-9 rounded-full">
                                    <img className=''
                                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='' />
                                </div>

                            </div>

                            <div className='mt-2 text-[15px] font-medium'>
                                <p>Already have an Account! <Link to='/login'><span className='text-red-600'>Login</span></Link></p>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;