




import React, { useState, useEffect } from "react";
import "./Secondnavbar.css";
import biharlogo from "../assets/biharlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Handle scroll effect for logo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [forgotEmail, setForgotEmail] = useState("");

  /* ================= VALIDATIONS ================= */
  const validateLogin = () => {
    let err = {};
    if (!loginData.email) err.email = "Email required";
    if (!loginData.password) err.password = "Password required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateSignup = () => {
    let err = {};
    if (!signupData.name) err.name = "Name required";
    if (!signupData.email) err.email = "Email required";
    if (!signupData.mobile || signupData.mobile.length !== 10)
      err.mobile = "Valid mobile required";
    if (!signupData.password) err.password = "Password required";
    if (signupData.password !== signupData.confirmPassword)
      err.confirmPassword = "Passwords not matched";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const validateForgot = () => {
    let err = {};
    if (!forgotEmail) err.email = "Email required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ================= SUBMIT FUNCTIONS ================= */
  const handleLogin = (e) => {
  e.preventDefault();
  if (!validateLogin()) return;

  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (
    storedUser &&
    storedUser.email === loginData.email &&
    storedUser.password === loginData.password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", storedUser.name);
    localStorage.setItem("userEmail", storedUser.email);

    setIsLoggedIn(true);
    setAuthOpen(false);
    setLoginData({ email: "", password: "" });

    alert("Login successful!");
    navigate("/");
  } else {
    alert("Invalid email or password");
  }
};


  const handleSignup = (e) => {
  e.preventDefault();
  if (!validateSignup()) return;

  console.log("SIGNUP DATA:", signupData);

  // Store user data only (NOT login)
  localStorage.setItem("registeredUser", JSON.stringify({
    name: signupData.name,
    email: signupData.email,
    password: signupData.password,
  }));

  setSignupData({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  alert("Account created successfully! Please login.");

  // Switch to LOGIN tab
  setAuthTab("login");
};


  const handleForgot = (e) => {
    e.preventDefault();
    if (!validateForgot()) return;
    console.log("FORGOT EMAIL:", forgotEmail);
    alert("Reset link sent to email");
    setForgotEmail("");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setProfileDropdown(false);
    navigate("/");
    alert("Logged out successfully!");
  };

  const closeAllPanels = () => {
    setMenuOpen(false);
    setAuthOpen(false);
    setProfileDropdown(false);
  };

  const handleProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  const userName = localStorage.getItem("userName") || "Profile";

  return (
    <>
      {/* OVERLAY */}
      {(menuOpen || authOpen) && (
        <div className="overlay active" onClick={closeAllPanels} />
      )}

      {/* MAIN NAVBAR */}
      <header className={`navbar-main ${isScrolled ? 'scrolled' : ''}`}>
        {/* Left side navigation links */}
        <div className="nav-left-section">
          <ul className="nav-links-left">
            <li><Link to="/">HOME</Link></li>
            <li className="dropdown">
  <span className="dropdown-link">
    EXPLORE <span className="arrow">▾</span>
  </span>

  <ul className="dropdown-menu">
    <li>
      <Link to="/about-bihar">Bihar</Link>
    </li>
    <li>
      <Link to="/about-jharkhand">Jharkhand</Link>
</li>

  </ul>
</li>

<li className="dropdown">
  <span className="dropdown-link">
   <Link to="/what-we-offer-bihar">PRODUCT</Link>
  </span>

  {/* <ul className="dropdown-menu">
    <li>
      <Link to="/what-we-offer-bihar">Bihar</Link>
    </li>
    <li>
      <Link to="/what-we-offer-jharkhand">Jharkhand</Link>
    </li>
  </ul> */}
</li>



           
          </ul>
        </div>

        {/* Hamburger button - only shows on mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Center Logo - Position changes on scroll */}
        {/* CENTER FIXED LOGO */}
<div className="navbar-logo-center">
  <div className="navbar-logo-box">
    <Link to="/">
    <div className="navbar-logo-circle">
      <img
        src={biharlogo}
        alt="BiZgarHeritage Logo"
        className="navbar-logo-img"
      />
    </div>
    </Link>
  </div>
</div>



        {/* Right side with navigation links and login button */}
        <div className="nav-right-section">
          <ul className="nav-links-right">
            <li><Link to="/NewAbout">ABOUT</Link></li>
            <li><Link to="/Art">OUR CRAFT MAKERS</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT US</Link></li>
          </ul>

          
          {/* {isLoggedIn ? (
            <div className="profile-section">
              <button
                className="profile-button"
                onClick={handleProfileClick}
                aria-label="Profile menu"
              >
                <div className="profile-icon">
                  <FaUserCircle />
                </div>

              </button>

             
              {profileDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-item">
                    <span className="profile-name">{userName}</span>
                  </div>
                  <div className="dropdown-item">
                    <Link to="/profile" onClick={() => setProfileDropdown(false)}>
                      Profile
                    </Link>
                  </div>
                  <div className="dropdown-item">
                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              className="login-button"
              onClick={() => setAuthOpen(true)}
              aria-label="Login or Signup"
            >
              LOGIN
            </button>
          )} */}
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      <div className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/NewAbout" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                <Link to="/about-bihar" onClick={() => setMenuOpen(false)}>EXPLORE-BIHAR</Link>
                 <Link to="/about-jharkhand" onClick={() => setMenuOpen(false)}>EXPLORE-JHARKHAND</Link>
                {/* <Link to="/what-we-offer-jharkhand" onClick={() => setMenuOpen(false)}>PRODUCT-JHARKHAND</Link> */}
                <Link to="/what-we-offer-bihar" onClick={() => setMenuOpen(false)}>PRODUCT</Link>
                <Link to="/Art" onClick={() => setMenuOpen(false)}>Our Craft Makers</Link>
                 <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</Link>

        {/* {isLoggedIn ? (
          <>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>PROFILE</Link>
            <button
              className="mobile-logout-btn"
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <button
            className="mobile-login-btn"
            onClick={() => {
              setMenuOpen(false);
              setAuthOpen(true);
            }}
          >
            LOGIN
          </button>
        )} */}
      </div>

      {/* AUTHENTICATION PANEL */}
      <div className={`auth-panel ${authOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setAuthOpen(false)}
          aria-label="Close authentication panel"
        >
          ✕
        </button>

        <h2>
          Welcome to <span>BiZgarHeritage</span>
        </h2>

        <div className="auth-tabs">
          <button
            onClick={() => setAuthTab("login")}
            className={authTab === "login" ? "active" : ""}
          >
            Login
          </button>
          <button
            onClick={() => setAuthTab("signup")}
            className={authTab === "signup" ? "active" : ""}
          >
            Signup
          </button>
          <button
            onClick={() => setAuthTab("forgot")}
            className={authTab === "forgot" ? "active" : ""}
          >
            Forgot
          </button>
        </div>

        {/* LOGIN FORM */}
        {authTab === "login" && (
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            {errors.email && <small>{errors.email}</small>}

            <input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            {errors.password && <small>{errors.password}</small>}

            <button type="submit">LOGIN</button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {authTab === "signup" && (
          <form onSubmit={handleSignup}>
            <input
              placeholder="Full Name"
              value={signupData.name}
              onChange={(e) =>
                setSignupData({ ...signupData, name: e.target.value })
              }
            />
            {errors.name && <small>{errors.name}</small>}

            <input
              type="email"
              placeholder="Email Address"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            />
            {errors.email && <small>{errors.email}</small>}

            <input
              placeholder="Mobile Number"
              value={signupData.mobile}
              onChange={(e) =>
                setSignupData({ ...signupData, mobile: e.target.value })
              }
            />
            {errors.mobile && <small>{errors.mobile}</small>}

            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupData.confirmPassword}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  confirmPassword: e.target.value,
                })
              }
            />
            {errors.confirmPassword && <small>{errors.confirmPassword}</small>}

            <button type="submit">CREATE ACCOUNT</button>
          </form>
        )}

        {/* FORGOT PASSWORD FORM */}
        {authTab === "forgot" && (
          <form onSubmit={handleForgot}>
            <input
              type="email"
              placeholder="Registered Email Address"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            {errors.email && <small>{errors.email}</small>}
            <button type="submit">SEND RESET LINK</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Navbar;