import React from 'react'
import OrangeButton from '../OrangeButton/OrangeButton'
import landingage from '@/assets/icons/landing-img.png'
import './LandingPage.css' 
import downArrow from '@/assets/icons/arrow-down.png'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="landing-wrapper">
      <img src={landingage} alt="Landing" className="landing-image" />

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
      <div className="landing-content">
        <h2>Welcome to Your Muslim Community Hub</h2>
        <p>
          Create groups, host events, support local businesses, and give back through donations — all in one meaningful space.
        </p>
        <p>Join us and start building connections that matter.</p>

        <div className="landing-buttons">
          <OrangeButton title="Join Us" className="orange"
          onClick={() => navigate("/halal-business-dirctory")}
          />
          <OrangeButton title="About Us" className="white"
          onClick={() => navigate("/aboutus")}
          />
        </div>
        <div className="down-arrow">
            <img src={downArrow} alt="down arrow" />
        </div>
      </div>
    </div>
  )
}
