




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

import { FaXTwitter } from "react-icons/fa6"; // ✅ New X icon

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

          {/* EXPLORE DROPDOWN */}
          {/* <li className="explore-item" onMouseEnter={() => setExploreOpen(true)} onMouseLeave={() => setExploreOpen(false)}>
            <span className="explore-link">Explore ▾</span>
            {exploreOpen && (
              <ul className="dropdown">
                <li><Link to="/about-bihar">Bihar</Link></li>
                <li><Link to="/about-jharkhand">Jharkhand</Link></li>
              </ul>
            )}
          </li> */}

          <li><Link to="/what-we-offer-bihar">Product</Link></li>
          <li><Link to="/Art">Craft Makers</Link></li>
          {/* <li><Link to="/blog">Blog</Link></li> */}
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
      
        {/* ✅ X (Twitter नया icon) */}
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
      
        {/* ✅ YouTube */}
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
        <Link to="/" className="logo-area">
            <img src={biharlogo} alt="logo" className="logo"/>
            <div className="logo-text">
              <span className="slogan">Crafted Roots of Tradition</span>
            </div>
          </Link>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/NewAbout" onClick={() => setMenuOpen(false)}>About</Link>

        {/* <div className="mobile-explore">
          <span onClick={() => setExploreOpen(!exploreOpen)}>Explore ▾</span>
          {exploreOpen && (
            <div className="mobile-dropdown">
              <Link to="/about-bihar" onClick={() => setMenuOpen(false)}>Bihar</Link>
              <Link to="/about-jharkhand" onClick={() => setMenuOpen(false)}>Jharkhand</Link>
            </div>
          )}
        </div> */}

        <Link to="/what-we-offer-bihar" onClick={() => setMenuOpen(false)}>Product</Link>
        <Link to="/Art" onClick={() => setMenuOpen(false)}>Craft Makers</Link>
        {/* <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link> */}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;