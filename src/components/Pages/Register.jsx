import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


// slider 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import '../styles.css';
import '../../styles.css'

// import required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';

const Register = () => {

    const { createUser, setLoading, updateUserId } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [showPass, setshowPass] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value


        // check pass 
        if (password.length < 6) {
            toast.warning('Password must be 6 character long !')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warning('Password should have at least one uppercase !')
            return
        }
        else if (!/[a-z]/.test(password)) {
            toast.warning('Password should have at least one lowercase !')
            return
        }

        // create user 
        createUser(email, password)
            .then((result) => {
                toast.success('Your id is created successfully')
                updateUserId(name, photo)
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                    })

            })
            .catch((error) => {
                setLoading(false)
                toast.error(error.code)
            })
    }

    return (

        <div className='flex bg-gradient-to-t from-[#7FFFD4]  to-[#71c4cc] items-center' >
            <div className="  w-1/3">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    effect={'coverflow'}
                    grabCursor={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    navigation={true}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper"

                >
                    <div>
                        <p className='text-white text-center text-medium'> Volunteering allows individuals to actively engage with their communities and contribute to making them better places to live</p>
                    </div>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/vjqWr7Y/importance-of-community-service-1200-1200x794.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>

                </Swiper>

            </div>
            <div className='w-2/3 bg-white rounded-l-[70px]'>
                <div className="flex justify-center mx-4">
                    {/* <Helmet>
                <title>Register </title>
            </Helmet> */}
                    <div className="card  w-full max-w-md shadow-md shadow-green-400 shadow-t-2 bg-base-100 my-24 ">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered " required />
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-green-500 text-white hover:bg-green-300 ">Register</button>
                            </div>
                            <p className="text-center mt-4">Already have an account ? <Link className="text-green-300 font-bold" to="/login">Login</Link> </p>

                        </form>

                    </div >
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;