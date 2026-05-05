




import React, { useState } from "react";
import "./Navbar.css";
import biharlogo from "../pages/jharkhandimage/BiZhar Heritage logo .png";
import { Link } from "react-router-dom";

import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"; // ✅ Better close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  return (
    <>
      <header className="navbar">

        {/* LEFT LOGO + SLOGAN */}
        <div className="nav-left">
          <Link to="/" className="logo-area">
            <img src={biharlogo} alt="logo" className="logo"/>
            <div className="logo-text">
              <span className="slogan">Connecting Handicraft Artists Across India</span>
            </div>
          </Link>
        </div>

        {/* CENTER NAV LINKS */}
        <ul className="nav-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/NewAbout">About</Link></li>
          <li><Link to="/what-we-offer-bihar">Product</Link></li>
          <li><Link to="/Art">Craft Makers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* RIGHT SOCIAL */}
        <div className="nav-right">
          <a 
            href="https://www.facebook.com/people/Bizhar-Heritag-E/61586597638647/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social fb"
          >
            <FaFacebookF/>
          </a>
          <a 
            href="https://www.instagram.com/bizharheritage/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social ig"
          >
            <FaInstagram/>
          </a>
          <a 
            href="https://x.com/BiZharheritage" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social tw"
          >
            <FaXTwitter/>
          </a>
          <a 
            href="https://www.linkedin.com/company/bizhar-heritage/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social li"
          >
            <FaLinkedinIn/>
          </a>
          <a 
            href="https://youtube.com/@bizharheritage?si=xzHmpWtKVZ9hpyg5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social yt"
          >
            <FaYoutube/>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="menu-btn" onClick={() => setMenuOpen(true)}>☰</div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        {/* Close Button - Top Right */}
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <IoClose /> {/* Better cut/close icon */}
        </button>

        {/* Logo in Sidebar */}
        <div className="nav-left">
          <Link to="/" className="logo-area" onClick={() => setMenuOpen(false)}>
            <img src={biharlogo} alt="logo" className="logo"/>
            <div className="logo-text">
              <span className="slogan">Connecting Handicraft Artists Across India</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/NewAbout" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/what-we-offer-bihar" onClick={() => setMenuOpen(false)}>Product</Link>
        <Link to="/Art" onClick={() => setMenuOpen(false)}>Craft Makers</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        
        {/* Social Icons in Mobile Sidebar */}
        <div className="mobile-social-icons">
          <a 
            href="https://www.facebook.com/people/Bizhar-Heritag-E/61586597638647/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social fb"
          >
            <FaFacebookF/>
          </a>
          <a 
            href="https://www.instagram.com/bizharheritage/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social ig"
          >
            <FaInstagram/>
          </a>
          <a 
            href="https://x.com/BiZharheritage" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social tw"
          >
            <FaXTwitter/>
          </a>
          <a 
            href="https://www.linkedin.com/company/bizhar-heritage/posts/?feedView=all" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social li"
          >
            <FaLinkedinIn/>
          </a>
          <a 
            href="https://youtube.com/@bizharheritage?si=xzHmpWtKVZ9hpyg5" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social yt"
          >
            <FaYoutube/>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;