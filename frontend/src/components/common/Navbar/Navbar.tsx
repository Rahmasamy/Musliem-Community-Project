import React, { useState } from 'react'
import logo from '@/assets/imgs/logo.png'
import Group from '@/assets/icons/Group.png';
import email from '@/assets/icons/email.png';
import profile from '@/assets/icons/iconamoon_search-light.png'
import { MdOutlineArrowDropDown } from "react-icons/md";

import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [showServices, setShowServices] = useState(false);
    const toggleService = () => {
        setShowServices(prev => !prev);
    }
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
                        <li className='flex items-center text-center relative cursor-pointer'  onClick={toggleService}>
                       <Link to="/ServicesPage">
                       Services
                       </Link>
                          
                       
                            
                            <span className='service-span'>
                              <MdOutlineArrowDropDown fontSize={"23px"}/>

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
                         <li>
                            <Link to="/profilePage">Profile</Link>
                        </li>
                    </ul>
                </div>
                <div className="Logos flex items-center">
                    <img src={profile} alt="search icon" />
                    <Link to="/messages">
                    <img src={email} alt="email icon" />
                    </Link>
                    <Link className='login-btn'
                    to="/login"
                    >

                        <img src={Group} alt="profile icon" />
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}
