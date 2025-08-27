import React, { useState } from 'react'
import logo from '@/assets/imgs/logo.png'
import Group from '@/assets/icons/Group.png';
import email from '@/assets/icons/email.png';
import search from '@/assets/icons/iconamoon_search-light.png'
import { MdOutlineArrowDropDown } from "react-icons/md";

import './Navbar.css'
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { useProfileStore } from '@/store/useProfileStore';
export default function Navbar() {
    const [showServices, setShowServices] = useState(false);
    
    const AuthState = useAuthStore();
    console.log("Auth stores user", AuthState.user)
    const userId = AuthState.user?._id;
    const profileState = useProfileStore();
    const { profile} = profileState;
    console.log("Profile stores user",profile)
    const toggleService = () => {
        setShowServices(prev => !prev);
    }
      const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    return (
        <div className='header w-full flex justify-center items-center'>
            <div className="navbar-container w-[95%] flex justify-around">
                <div className="logo flex gap-1 items-center">
                    <img src={logo} alt="Logo Image" />
                    <h2>
                        MCUS
                    </h2>
                </div>
                <div className="navLinks flex items-center ">
                    <ul className='flex gap-1 items-center cursor-pointer'>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/Groups">

                                Groups</Link>

                        </li>
                        <li>
                            <Link to="/Events">

                                Events</Link>

                        </li>
                        <li className='flex items-center text-center relative cursor-pointer' onClick={toggleService}>
                            <Link to="/ServicesPage">
                                Services
                            </Link>



                            <span className='service-span'>
                                <MdOutlineArrowDropDown fontSize={"23px"} />

                            </span>
                            {showServices && (
                                <ul className="dropdown absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded p-2 z-10">
                                    <li className="p-2 hover:bg-gray-100">Laptops</li>
                                    <li className="p-2 hover:bg-gray-100">Mobiles</li>
                                    <li className="p-2 hover:bg-gray-100">Babysitter Booking</li>
                                    <li className="p-2 hover:bg-gray-100">Event Booking</li>
                                </ul>
                            )}

                        </li>
                        <li>
                            <Link to="/membership">Membership</Link>
                        </li>
                        <li>
                            <Link to="/halal-business-dirctory">Halal Business Dirctory</Link>
                        </li>
                        <li>
                            <Link to="/contactus">Contact Us</Link>
                        </li>
                      
                    </ul>
                </div>
                <div className="Logos flex items-center">
                    <img src={search} alt="search icon" />
                    <Link to={`/messages/user/${userId}/false`}>
                        <img src={email} alt="email icon" />
                    </Link>
                    {AuthState?.user ?  (
                        <Link to="/profilePage" className="flex items-center space-x-2">
                            <img
                                src={AuthState.user?.photo ||
                                (profile?.photo ? `${BASE_URL}/${profile.photo}`
                                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg")}
                                alt="profile"
                                className="w-12 h-10 rounded-full object-cover"
                            />
                            <span>{AuthState.user?.fullName}</span>
                        </Link>
                    ) : (
                        <Link className="login-btn flex items-center space-x-2" to="/login">
                        
                            <span className='px-6 py-1 rounded-lg'>
                                Login
                            </span>
                        </Link>
                    )}


                </div>
            </div>
        </div>
    )
}
