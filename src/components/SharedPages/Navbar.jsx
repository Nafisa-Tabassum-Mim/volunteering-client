import { Link, NavLink } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import '../../App.css';
// import { useContext } from "react";
// import { AuthContext } from "../firebase/AuthProvider";


const Navbar = () => {

    // const { logOut, user } = useContext(AuthContext)
    // const location = useLocation()
    // const navigate = useNavigate()

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => {
    //             navigate(location?.state ? location.state : '/')
    //         })
    //         .catch()
    // }

    const links = <>
        <li className=" font-black text-xl "><NavLink to="/" >Home</NavLink></li>
        <li className="font-black text-xl "><NavLink to="/needvolunteer">Need Volunteer</NavLink></li>
        <li className="dropdown font-black text-xl ">
            <Link tabIndex={0} role="" className="">My Profile</Link>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to='/'>Add Volunteer Post</NavLink>
                <NavLink>Manage My Post</NavLink>
            </ul>
        </li>
        {/* {
            user && <><li className="font-medium text-lg" ><NavLink to="/userprofile">User Profile</NavLink></li></>
        } */}
    </>

    return (
        <div className="bg-[url('https://i.ibb.co/gZ8Sjnm/people-volunteering-donating-money-53876-66112.jpg')]  h-[140px] rounded-b-[55px]">
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
                <div className="navbar  bg-gray-200 bg-opacity-45 rounded-full" >
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
                    <div>
                        <Link to='/login'>login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;