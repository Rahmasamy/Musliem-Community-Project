import React from 'react'
import OrangeButton from '../OrangeButton/OrangeButton'
import landingage from '@/assets/icons/landing-img.png'
import './LandingPage.css' 
import downArrow from '@/assets/icons/arrow-down.png'

export default function LandingPage() {
  return (
    <div className="landing-wrapper">
      <img src={landingage} alt="Landing" className="landing-image" />

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className="landing-content">
        <h2>Welcome to Your Muslim
            <br/>
             Community Hub</h2>
        <p>
          Create groups, host events, support local <br/>
           businesses, and give back through donations — all <br/>
           in one meaningful space.
        </p>
        <p>Join us and start building connections that matter.</p>

        <div className="landing-buttons">
          <OrangeButton title="Join Us" className="orange" />
          <OrangeButton title="About Us" className="white" />
        </div>
        <div className="down-arrow">
            <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </div>
  )
}
