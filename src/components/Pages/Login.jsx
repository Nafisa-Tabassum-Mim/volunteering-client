import { Link } from 'react-router-dom';
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
// import { useContext, useState } from "react";
// import { AuthContext } from "../firebase/AuthProvider";
import { ToastContainer } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';


const Login = () => {
    const [showPass, setshowPass] = useState(false)


    return (
        <div>
            <div className="flex justify-center gap-4 flex-col-reverse md:flex-row">
                {/* <Helmet>
                <title> Login </title>
            </Helmet> */}
                <div className='relative h-[600px]'>
                    <img src="https://i.ibb.co/xDTDMT2/istockphoto-1188864563-612x612-1.jpg" alt="" />
                </div>
                <div className="card  w-full max-w-md shadow-md shadow-roaming  shadow-green-300 shadow-t-2 my-4 md:my-12">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPass ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                <span className="absolute top-3 right-3" onClick={() => setshowPass(!showPass)}>
                                    {showPass ? <IoEye /> : <IoEyeOff />
                                    }

                                </span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-green-500 text-white hover:bg-green-300 ">Login</button>
                        </div>
                        <div className="text-center text-white font-black">
                            You can also login by
                        </div>
                        <div className="flex items-center  justify-center">
                            <div className="border-b border-black w-full"></div>
                            <div className="flex items-center gap-1 relative z-10">
                                <button className="border border-green-300 rounded-lg p-2 text-[30px]"><FcGoogle /></button>
                                <p className="text-gray-500">or</p>
                                <button className="border border-green-300 rounded-lg p-2 text-[30px]"><SiGithub /></button>
                            </div>
                            <div className="border-b border-black w-full"></div>
                        </div>
                        <p className="text-center mt-4">Do not have an account ? <Link className="text-green-300 font-bold" to="/register">Register</Link> </p>

                    </form>

                </div >
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;