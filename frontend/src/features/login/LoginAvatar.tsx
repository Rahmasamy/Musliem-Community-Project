import React from 'react'
import loginBg from '../../assets/imgs/login.png'
import Group from '../../assets/imgs/Group 3.png'
import persons from '../../assets/icons/persons.png'
import mosque from '../../assets/icons/mosque.png'
import dollars from '../../assets/icons/dollars.png'
import './LoginDetails.css'
export default function LoginAvatar() {
  return (
    <div className="LoginAvatarImgs flex flex-col items-center gap-4">
      <div className="outer-ellipse">
  <div className="inner-ellipse">
     <img
        src={mosque}
        alt="mosque img"
        className="icon2  object-contain shadow-md"
      /> 
  </div>
    <img
        src={loginBg}
        alt="Login background"
        className="img1 w-full  object-cover object-center shadow-md"
      /> 
      <img
        src={Group}
        alt="Group"
        className="img2 w-2/3 max-w-xs object-contain shadow-md"
      /> 
       <img
        src={persons}
        alt="person img"
        className="icon1 object-cover object-center shadow-md"
      /> 
     
       <img
        src={dollars}
        alt="Login background"
        className="icon3 w-full  object-cover object-center shadow-md"
      /> 
      <span className='messageSpan'>
        💬
      </span>
    
</div>

     
    </div>
  )
}

