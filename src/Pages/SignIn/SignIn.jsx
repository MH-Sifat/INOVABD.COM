import React, { useContext, useState } from 'react';
// import './SignIn.css';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authprovider/Authprovider';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { signIn, forgetPassword } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [userEmail, setUserEmail] = useState('');
    console.log(userEmail);
    const handleLogIn = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('successfully Log in', {
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

    const handleEmailBlur = (e) => {
        const email = e.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            toast.error('please enter your mail', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else {
            forgetPassword(userEmail)
                .then(() => {
                    toast.info('please check your mail and reset password', {
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
                .catch(error => console.log(error))

        }
    }

    return (

        <div className='flex justify-center items-center min-h-[80vh] md:min-h-[70vh] lg:min-h-[100vh]'>
            <div className='flex justify-center items-center mt-6 md:mt-0'>
                <div className="form-container">
                    <p className="title">Sign In</p>
                    <form className="form" onSubmit={handleSubmit(handleLogIn)} >
                        <div className="input-group mb-4">
                            <div className='flex items-center relative'>
                                <MdEmail className='absolute ml-2' />
                                <input type="email" placeholder="user mail"
                                    name='email'
                                    {...register("email", {
                                        onBlur: (e) => handleEmailBlur(e)
                                    })}
                                    {...register("email", { required: "required" })} />
                            </div>
                            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="input-group mb-4">
                            <div className='flex items-center relative'>
                                <FaLock className='absolute ml-2' />
                                <input type="password" placeholder="user password"
                                    {...register("password", {
                                        required: "required", minLength: { value: 6, message: "password must be 6 charecters long" }
                                    })} />
                            </div>
                            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                            <div className="forgot">
                                <button onClick={handleForgetPassword}>Forgot Password ?</button>
                            </div>
                        </div>
                        <input className="sign mt-8" type='submit' value='Sign in' />
                    </form>
                    <p className="signup mt-5">Don't have an account?
                        <Link to='/signup' className='text-black font-semibold'>SignUp</Link>
                    </p>
                </div>
            </div>
        </div>


    );
};

export default SignIn;