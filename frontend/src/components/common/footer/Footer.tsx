// import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "@/assets/imgs/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-t from-[#00787B] to-[#003F41] text-white py-10 px-4"
      style={{ marginTop: "20px" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-white/30 pb-8">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="MCUS Logo"
              className="w-28 h-28 object-contain"
            />
            <h2 className="font-bold text-lg">MCUS</h2>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
            facilisis euismod feugiat ultrices in nunc sit. Nibh ut tellus at
            scelerisque et facilisi viverra urna. Vitae velit etiam id egestas
            sed habitasse velit.
          </p>
        </div>

        {/* Center Quick Links */}
        <div className="flex-1 grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/terms-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/Groups">Groups</Link>
              </li>
              <li>
                <Link to="/Events">Events</Link>
              </li>
              <li>
                <Link to="/ServicesPage">Services</Link>
              </li>
              <li>
                <Link to="/halal-business-dirctory">Market Place</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="hidden md:flex items-start">
          <button
            className="cursor-pointer border border-white rounded-full px-6 py-6 hover:bg-white hover:text-[#00787B] transition text-2xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            
          >
            ↑
          </button>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-6 px-2 flex justify-between items-center text-sm text-white">
        <p>MCUS © 2025. All rights reserved.</p>
        <div className="flex gap-4 text-lg">
          <FaYoutube />
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
}
