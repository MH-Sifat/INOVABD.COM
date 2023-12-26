import React, { useContext } from 'react';
import './SignUp.css';
import { FaFacebook, FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Authprovider/Authprovider';
import { toast } from 'react-toastify';

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUser, verifyEmail, googleLogIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('user created successfully', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                reset();
                // navigate(from, { replace: true })
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // savedUser(data.name, data.email)
                        console.log(data.name, data.email);

                    })
                    .catch(error => {
                        console.log(error);
                    })
                verifyEmail()
                    .then(() => {
                        toast.info('please check your mail and verify it.', {
                            position: "top-left",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    })
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }

    const handleGoogleLogIn = (event) => {
        event.preventDefault();
        googleLogIn()
            .then(result => {
                const user = result.user;
                toast.success('Log in successful', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                // navigate(from, { replace: true })

            })
            .catch(error => {
                console.log('error', error);
            })
    }
    return (
        <div className='flex justify-center items-center min-h-[80vh] md:min-h-[70vh] lg:min-h-[100vh]'>
            <div className='flex justify-center items-center mt-6 md:mt-0'>
                <div className="form-container">
                    <p className="title">Sign Up</p>
                    <form onSubmit={handleSubmit(handleSignUp)} className="form">
                        <div className="input-group mb-4">
                            <div className='flex items-center relative'>
                                <FaUser className='absolute ml-2' />
                                <input {...register("name", { required: "required" })} type="text" placeholder="user name" />
                            </div>
                            {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="input-group mb-4">
                            <div className='flex items-center relative'>
                                <MdEmail className='absolute ml-2' />
                                <input type="email" placeholder="user mail"
                                    {...register("email", { required: "required" })} />
                            </div>
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                        </div>
                        <div className="input-group mb-4">
                            <div className='flex items-center relative'>
                                <FaLock className='absolute ml-2' />
                                <input type="password" placeholder="user password"
                                    {...register("password", {
                                        required: "required",
                                        minLength: { value: 6, message: "Password must be 6 charecters long" },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*?[0-9])/,
                                            message: "password must have one Uppercase,Number and Special charecters(@$!%*?&)"
                                        }
                                    })} />
                            </div>
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                        </div>
                        <input className="sign mt-8" type='submit' value='Sign up' />
                    </form>
                    <div className="social-message">
                        <div className="line"></div>
                        <p className="message">Sign up with social accounts</p>
                        <div className="line"></div>
                    </div>
                    <div className="social-icons">
                        <button className="icon">
                            <FaFacebook className='w-8 h-8 text-blue-500 bg-white rounded-full' />

                        </button>
                        <span className='mt-4 text-slate-400'>or</span>
                        <button className="icon" onClick={handleGoogleLogIn}>
                            <FcGoogle className=" w-9 h-9 rounded-full bg-white p-[3px] border border-2 rounded-full" />
                        </button>
                    </div>
                    <p className="signup">Already have an account?
                        <Link to='/signin' className='text-black font-semibold'>SignIn</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;