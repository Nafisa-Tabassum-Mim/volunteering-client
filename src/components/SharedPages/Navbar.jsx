import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import '../../App.css';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { IoIosArrowDown } from "react-icons/io";



const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [theme,setTheme]=useState("light")

    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme= localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])

    const handleToggle=(e)=>{
        if(e.target.checked){
            setTheme('nord')
        }
        else{
            setTheme('light')
        }
    }
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
            .catch()
    }

    const links = <>
        <li className=" font-black text-xl "><NavLink to="/" >Home <IoIosArrowDown /></NavLink></li>
        <li className="font-black text-xl "><NavLink to="/needvolunteer">Need Volunteer <IoIosArrowDown /></NavLink></li>
        <li className="dropdown font-black text-xl ">
            <button tabIndex={0} role="" className="mybtn">My Profile <IoIosArrowDown /></button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to='/addvolunteer'>Add Volunteer Post</NavLink>
                <NavLink to='/managemypost'>Manage My Post</NavLink>
            </ul>
        </li>
    </>

    return (
        <div className="bg-[url('https://i.ibb.co/gZ8Sjnm/people-volunteering-donating-money-53876-66112.jpg')]   h-[140px] rounded-b-[55px]">
            <div className="max-w-7xl mx-auto ">
                <div className="flex justify-between pt-4 px-2">
                    <div>
                        <p> +938948474</p>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <p><CiFacebook /></p>
                        <p><LuTwitter /></p>
                        <p><CiYoutube /></p>
                        <p><FaPinterestP /></p>
                    </div>
                </div>
                <div className="navbar  bg-gray-200 bg-opacity-45 rounded-full " >
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 drop-btn">
                                {links}
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost lg:text-2xl drop-shadow-lg text-black font-black "> Youth <br /> Volunteer </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal  px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">

                        {
                            user ?
                                (
                                    <>
                                        <div tabIndex={0} role="button" data-tip={`${user.displayName}`} className="tooltip tooltip-bottom tooltip-bg-orange-500 z-50 btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                            </div>
                                        </div>
                                        <button onClick={handleLogout} className="btn bg-green-400 opacity-65 text-white mr-2">Logout</button>
                                    </>

                                )
                                :
                                (<>
                                    <Link to='/login' className="btn bg-green-400 bg-opacity-60 text-white">Login</Link>
                                </>
                                )
                        }
                    </div>
                    {/* theme  */}
                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" className="theme-controller"  />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};
export default Navbar;