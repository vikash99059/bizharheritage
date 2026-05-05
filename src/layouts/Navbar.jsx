// import React, { useState } from "react";
// import "./Navbar.css";
// import biharlogo from "../assets/biharlogo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false);
//   const [authTab, setAuthTab] = useState("login");
//   const [errors, setErrors] = useState({});

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [forgotEmail, setForgotEmail] = useState("");

//   /* ================= VALIDATIONS ================= */
//   const validateLogin = () => {
//     let err = {};
//     if (!loginData.email) err.email = "Email required";
//     if (!loginData.password) err.password = "Password required";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const validateSignup = () => {
//     let err = {};
//     if (!signupData.name) err.name = "Name required";
//     if (!signupData.email) err.email = "Email required";
//     if (!signupData.mobile || signupData.mobile.length !== 10)
//       err.mobile = "Valid mobile required";
//     if (!signupData.password) err.password = "Password required";
//     if (signupData.password !== signupData.confirmPassword)
//       err.confirmPassword = "Passwords not matched";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const validateForgot = () => {
//     let err = {};
//     if (!forgotEmail) err.email = "Email required";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   /* ================= SUBMIT FUNCTIONS ================= */
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!validateLogin()) return;
//     console.log("LOGIN DATA:", loginData);
//     alert("Login Successful (API Ready)");
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (!validateSignup()) return;
//     console.log("SIGNUP DATA:", signupData);
//     alert("Signup Successful (API Ready)");
//   };

//   const handleForgot = (e) => {
//     e.preventDefault();
//     if (!validateForgot()) return;
//     console.log("FORGOT EMAIL:", forgotEmail);
//     alert("Reset link sent to email");
//   };

//   const closeAllPanels = () => {
//     setMenuOpen(false);
//     setAuthOpen(false);
//   };

//   return (
//     <>
//       {/* OVERLAY */}
//       {(menuOpen || authOpen) && (
//         <div className="overlay active" onClick={closeAllPanels} />
//       )}

//       {/* MAIN NAVBAR */}
//       <header className="navbar-main">
//         {/* Left side navigation links */}
//         <div className="nav-left-section">
//           <ul className="nav-links-left">
//   <li><Link to="/">HOME</Link></li>
//   <li><Link to="/about">ABOUT</Link></li>
//   <li><Link to="/heritage-culture">HERITAGE & CULTURE</Link></li>
// </ul>

//         </div>

//         {/* Hamburger button - only shows on mobile */}
//         <button 
//           className="mobile-menu-btn" 
//           onClick={() => setMenuOpen(true)}
//           aria-label="Open menu"
//         >
//           ☰
//         </button>

//         {/* Center Logo - Hangs below navbar */}
//         <div className="nav-center-logo">
//           <div className="logo-wrapper">
//             <div className="logo-hanger"></div>
//             <div className="logo-circle">
//               <img 
//                 src={biharlogo} 
//                 alt="BiZgarHeritage Logo" 
//                 className="logo-image"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right side with navigation links and login button */}
//         <div className="nav-right-section">
//           <ul className="nav-links-right">
//   <li><Link to="/festivals">FESTIVALS OF BIHAR</Link></li>
//   <li><Link to="/contact">CONTACT US</Link></li>
// </ul>


//           {/* Login button */}
//           <button 
//             className="login-button" 
//             onClick={() => setAuthOpen(true)}
//             aria-label="Login or Signup"
//           >
//             LOGIN
//           </button>
//         </div>
//       </header>

//       {/* MOBILE SIDEBAR MENU */}
//       <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
//         <button 
//           className="close-btn" 
//           onClick={() => setMenuOpen(false)}
//           aria-label="Close menu"
//         >
//           ✕
//         </button>

//         <Link to="/">HOME</Link>
// <Link to="/about">ABOUT</Link>
// <Link to="/heritage-culture">HERITAGE & CULTURE</Link>
// <Link to="/festivals">FESTIVALS OF BIHAR</Link>
// <Link to="/contact">CONTACT US</Link>

//         <button 
//           className="mobile-login-btn" 
//           onClick={() => {
//             setMenuOpen(false);
//             setAuthOpen(true);
//           }}
//         >
//           LOGIN
//         </button>
//       </div>

//       {/* AUTHENTICATION PANEL */}
//       <div className={`auth-panel ${authOpen ? "open" : ""}`}>
//         <button 
//           className="close-btn" 
//           onClick={() => setAuthOpen(false)}
//           aria-label="Close authentication panel"
//         >
//           ✕
//         </button>

//         <h2>
//           Welcome to <span>BiZgarHeritage</span>
//         </h2>

//         <div className="auth-tabs">
//           <button
//             onClick={() => setAuthTab("login")}
//             className={authTab === "login" ? "active" : ""}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setAuthTab("signup")}
//             className={authTab === "signup" ? "active" : ""}
//           >
//             Signup
//           </button>
//           <button
//             onClick={() => setAuthTab("forgot")}
//             className={authTab === "forgot" ? "active" : ""}
//           >
//             Forgot
//           </button>
//         </div>

//         {/* LOGIN FORM */}
//         {authTab === "login" && (
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={loginData.email}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, email: e.target.value })
//               }
//             />
//             {errors.email && <small>{errors.email}</small>}

//             <input
//               type="password"
//               placeholder="Password"
//               value={loginData.password}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, password: e.target.value })
//               }
//             />
//             {errors.password && <small>{errors.password}</small>}

//             <button type="submit">LOGIN</button>
//           </form>
//         )}

//         {/* SIGNUP FORM */}
//         {authTab === "signup" && (
//           <form onSubmit={handleSignup}>
//             <input
//               placeholder="Full Name"
//               value={signupData.name}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, name: e.target.value })
//               }
//             />
//             {errors.name && <small>{errors.name}</small>}

//             <input
//               type="email"
//               placeholder="Email Address"
//               value={signupData.email}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, email: e.target.value })
//               }
//             />
//             {errors.email && <small>{errors.email}</small>}

//             <input
//               placeholder="Mobile Number"
//               value={signupData.mobile}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, mobile: e.target.value })
//               }
//             />
//             {errors.mobile && <small>{errors.mobile}</small>}

//             <input
//               type="password"
//               placeholder="Password"
//               value={signupData.password}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, password: e.target.value })
//               }
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={signupData.confirmPassword}
//               onChange={(e) =>
//                 setSignupData({
//                   ...signupData,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//             {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

//             <button type="submit">CREATE ACCOUNT</button>
//           </form>
//         )}

//         {/* FORGOT PASSWORD FORM */}
//         {authTab === "forgot" && (
//           <form onSubmit={handleForgot}>
//             <input
//               type="email"
//               placeholder="Registered Email Address"
//               value={forgotEmail}
//               onChange={(e) => setForgotEmail(e.target.value)}
//             />
//             {errors.email && <small>{errors.email}</small>}
//             <button type="submit">SEND RESET LINK</button>
//           </form>
//         )}
//       </div>

//       {/* CONTENT AREA EXAMPLE */}

//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import "./Navbar.css";
// import biharlogo from "../assets/biharlogo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [authOpen, setAuthOpen] = useState(false);
//   const [authTab, setAuthTab] = useState("login");
//   const [errors, setErrors] = useState({});
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [profileDropdown, setProfileDropdown] = useState(false);

//   const navigate = useNavigate();

//   // Check login status on component mount
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);

//   // Handle scroll effect for logo
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [signupData, setSignupData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [forgotEmail, setForgotEmail] = useState("");

//   /* ================= VALIDATIONS ================= */
//   const validateLogin = () => {
//     let err = {};
//     if (!loginData.email) err.email = "Email required";
//     if (!loginData.password) err.password = "Password required";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const validateSignup = () => {
//     let err = {};
//     if (!signupData.name) err.name = "Name required";
//     if (!signupData.email) err.email = "Email required";
//     if (!signupData.mobile || signupData.mobile.length !== 10)
//       err.mobile = "Valid mobile required";
//     if (!signupData.password) err.password = "Password required";
//     if (signupData.password !== signupData.confirmPassword)
//       err.confirmPassword = "Passwords not matched";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const validateForgot = () => {
//     let err = {};
//     if (!forgotEmail) err.email = "Email required";
//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   /* ================= SUBMIT FUNCTIONS ================= */
//   const handleLogin = (e) => {
//   e.preventDefault();
//   if (!validateLogin()) return;

//   const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

//   if (
//     storedUser &&
//     storedUser.email === loginData.email &&
//     storedUser.password === loginData.password
//   ) {
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("userName", storedUser.name);
//     localStorage.setItem("userEmail", storedUser.email);

//     setIsLoggedIn(true);
//     setAuthOpen(false);
//     setLoginData({ email: "", password: "" });

//     alert("Login successful!");
//     navigate("/");
//   } else {
//     alert("Invalid email or password");
//   }
// };


//   const handleSignup = (e) => {
//   e.preventDefault();
//   if (!validateSignup()) return;

//   console.log("SIGNUP DATA:", signupData);

//   // Store user data only (NOT login)
//   localStorage.setItem("registeredUser", JSON.stringify({
//     name: signupData.name,
//     email: signupData.email,
//     password: signupData.password,
//   }));

//   setSignupData({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmPassword: "",
//   });

//   alert("Account created successfully! Please login.");

//   // Switch to LOGIN tab
//   setAuthTab("login");
// };


//   const handleForgot = (e) => {
//     e.preventDefault();
//     if (!validateForgot()) return;
//     console.log("FORGOT EMAIL:", forgotEmail);
//     alert("Reset link sent to email");
//     setForgotEmail("");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("userEmail");
//     setIsLoggedIn(false);
//     setProfileDropdown(false);
//     navigate("/");
//     alert("Logged out successfully!");
//   };

//   const closeAllPanels = () => {
//     setMenuOpen(false);
//     setAuthOpen(false);
//     setProfileDropdown(false);
//   };

//   const handleProfileClick = () => {
//     setProfileDropdown(!profileDropdown);
//   };

//   const userName = localStorage.getItem("userName") || "Profile";

//   return (
//     <>
//       {/* OVERLAY */}
//       {(menuOpen || authOpen) && (
//         <div className="overlay active" onClick={closeAllPanels} />
//       )}

//       {/* MAIN NAVBAR */}
//       <header className={`navbar-main ${isScrolled ? 'scrolled' : ''}`}>
//         {/* Left side navigation links */}
//         <div className="nav-left-section">
//           <ul className="nav-links-left">
//             <li><Link to="/">HOME</Link></li>
//             <li className="dropdown">
//   <span className="dropdown-link">
//     EXPLORE <span className="arrow">▾</span>
//   </span>

//   <ul className="dropdown-menu">
//     <li>
//       <Link to="/about-bihar">Bihar</Link>
//     </li>
//     <li>
//       <Link to="/about-jharkhand">Jharkhand</Link>
// </li>

//   </ul>
// </li>

// <li className="dropdown">
//   <span className="dropdown-link">
//     <Link to="/what-we-offer-bihar">PRODUCT</Link>
//   </span>

//   {/* <ul className="dropdown-menu">
//     <li>
//       <Link to="/what-we-offer-bihar">Bihar-Product</Link>
//     </li>
//     <li>
//       <Link to="/what-we-offer-jharkhand">Jharkhand-product</Link>
//     </li>
//   </ul> */}
// </li>



           
//           </ul>
//         </div>

//         {/* Hamburger button - only shows on mobile */}
//         <button
//           className="mobile-menu-btn"
//           onClick={() => setMenuOpen(true)}
//           aria-label="Open menu"
//         >
//           ☰
//         </button>

//         {/* Center Logo - Position changes on scroll */}
//         <div className={`nav-center-logo ${isScrolled ? 'scrolled' : ''}`}>
//           <div className="logo-wrapper">
//             <div className="logo-hanger"></div>
//             <Link to="/">
//   <div className="logo-circle">
//     <img
//       src={biharlogo}
//       alt="BiZgarHeritage Logo"
//       className="logo-image"
//     />
//   </div>
// </Link>
//           </div>
//         </div>

//         {/* Right side with navigation links and login button */}
//         <div className="nav-right-section">
//           <ul className="nav-links-right">
//             <li><Link to="/NewAbout">About</Link></li>
//             <li><Link to ="/Art">Our Craft Makers
// </Link></li>
//             <li><Link to="/blog">Blog</Link></li>
//             <li><Link to="/contact">CONTACT US</Link></li>
//           </ul>

//           {/* Profile/Login Section */}
//           {/* {isLoggedIn ? (
//             <div className="profile-section">
//               <button
//                 className="profile-button"
//                 onClick={handleProfileClick}
//                 aria-label="Profile menu"
//               >
//                 <div className="profile-icon">
//                   <FaUserCircle />
//                 </div>

//               </button>

              
//               {profileDropdown && (
//                 <div className="profile-dropdown">
//                   <div className="dropdown-item">
//                     <span className="profile-name">{userName}</span>
//                   </div>
//                   <div className="dropdown-item">
//                     <Link to="/profile" onClick={() => setProfileDropdown(false)}>
//                       Profile
//                     </Link>
//                   </div>
//                   <div className="dropdown-item">
//                     <button
//                       className="logout-btn"
//                       onClick={handleLogout}
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <button
//               className="login-button"
//               onClick={() => setAuthOpen(true)}
//               aria-label="Login or Signup"
//             >
//               LOGIN
//             </button>
//           )} */}
//         </div>
//       </header>

//       {/* MOBILE SIDEBAR MENU */}
//       <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
//         <button
//           className="close-btn"
//           onClick={() => setMenuOpen(false)}
//           aria-label="Close menu"
//         >
//           ✕
//         </button> 

//         <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
//          <Link to="/NewAbout" onClick={() => setMenuOpen(false)}>ABOUT</Link>
//         <Link to="/about-bihar" onClick={() => setMenuOpen(false)}>EXPLORE-BIHAR</Link>
//          <Link to="/about-jharkhand" onClick={() => setMenuOpen(false)}>EXPLORE-JHARKHAND</Link>
//         {/* <Link to="/what-we-offer-jharkhand" onClick={() => setMenuOpen(false)}>PRODUCT-JHARKHAND</Link> */}
//         <Link to="/what-we-offer-bihar" onClick={() => setMenuOpen(false)}>PRODUCT</Link>
//         <Link to="/Art" onClick={() => setMenuOpen(false)}>Our Craft Makers</Link>
//          <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>

//         {/* {isLoggedIn ? (
//           <>
//             <Link to="/profile" onClick={() => setMenuOpen(false)}>PROFILE</Link>
//             <button
//               className="mobile-logout-btn"
//               onClick={() => {
//                 setMenuOpen(false);
//                 handleLogout();
//               }}
//             >
//               LOGOUT
//             </button>
//           </>
//         ) : (
//           <button
//             className="mobile-login-btn"
//             onClick={() => {
//               setMenuOpen(false);
//               setAuthOpen(true);
//             }}
//           >
//             LOGIN
//           </button>
//         )} */}
//       </div>

//       {/* AUTHENTICATION PANEL */}
//       <div className={`auth-panel ${authOpen ? "open" : ""}`}>
//         <button
//           className="close-btn"
//           onClick={() => setAuthOpen(false)}
//           aria-label="Close authentication panel"
//         >
//           ✕
//         </button>

//         <h2>
//           Welcome to <span>BiZharrHeritage</span>
//         </h2>

//         <div className="auth-tabs">
//           <button
//             onClick={() => setAuthTab("login")}
//             className={authTab === "login" ? "active" : ""}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setAuthTab("signup")}
//             className={authTab === "signup" ? "active" : ""}
//           >
//             Signup
//           </button>
//           <button
//             onClick={() => setAuthTab("forgot")}
//             className={authTab === "forgot" ? "active" : ""}
//           >
//             Forgot
//           </button>
//         </div>

//         {/* LOGIN FORM */}
//         {authTab === "login" && (
//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={loginData.email}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, email: e.target.value })
//               }
//             />
//             {errors.email && <small>{errors.email}</small>}

//             <input
//               type="password"
//               placeholder="Password"
//               value={loginData.password}
//               onChange={(e) =>
//                 setLoginData({ ...loginData, password: e.target.value })
//               }
//             />
//             {errors.password && <small>{errors.password}</small>}

//             <button type="submit">LOGIN</button>
//           </form>
//         )}

//         {/* SIGNUP FORM */}
//         {authTab === "signup" && (
//           <form onSubmit={handleSignup}>
//             <input
//               placeholder="Full Name"
//               value={signupData.name}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, name: e.target.value })
//               }
//             />
//             {errors.name && <small>{errors.name}</small>}

//             <input
//               type="email"
//               placeholder="Email Address"
//               value={signupData.email}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, email: e.target.value })
//               }
//             />
//             {errors.email && <small>{errors.email}</small>}

//             <input
//               placeholder="Mobile Number"
//               value={signupData.mobile}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, mobile: e.target.value })
//               }
//             />
//             {errors.mobile && <small>{errors.mobile}</small>}

//             <input
//               type="password"
//               placeholder="Password"
//               value={signupData.password}
//               onChange={(e) =>
//                 setSignupData({ ...signupData, password: e.target.value })
//               }
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={signupData.confirmPassword}
//               onChange={(e) =>
//                 setSignupData({
//                   ...signupData,
//                   confirmPassword: e.target.value,
//                 })
//               }
//             />
//             {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

//             <button type="submit">CREATE ACCOUNT</button>
//           </form>
//         )}

//         {/* FORGOT PASSWORD FORM */}
//         {authTab === "forgot" && (
//           <form onSubmit={handleForgot}>
//             <input
//               type="email"
//               placeholder="Registered Email Address"
//               value={forgotEmail}
//               onChange={(e) => setForgotEmail(e.target.value)}
//             />
//             {errors.email && <small>{errors.email}</small>}
//             <button type="submit">SEND RESET LINK</button>
//           </form>
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;

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