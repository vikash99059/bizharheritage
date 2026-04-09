
import React from "react";
import bannerImage from "./modules/image/bannernew2.avif"; // apni image ka path
import Aboutcompany from './Aboutcompany';
import Teamcomponanat from './Teamcomponanat';
import Ourgroingteam from './Ourgroingteam';
import Whatwedo from './Whatwedo';
import Missionvision from './Missionvision';
import Ourthout from './Ourthout';
import Decated from './Decated';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import Colabrate from "./Colabrate.jsx"; 
import Founder from "./Allproduct.jsx";  
import TechSupportTeam from "./TechSupportTeam.jsx"; 

const AboutBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Internal CSS */}
      <style>{`
        .about-banner {
          position: relative;
          width: 100%;
          height: 40vh;
          background-image: url(${bannerImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
         
        }

        .about-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
        }

        .about-title {
          color: #fff;
          font-size: 3.2rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .about-desc {
          color: #f1f1f1;
          font-size: 1.2rem;
          max-width: 720px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .about-btn {
          background: #daa520;
          color: #fff;
          border: none;
          padding: 14px 36px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .about-btn:hover {
          background: #ff9800;
          transform: translateY(-2px);
        }

        /* Tablet */
        @media (max-width: 768px) {
          .about-title {
            font-size: 2.3rem;
          }

          .about-desc {
            font-size: 1rem;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .about-banner {
            height: 75vh;
            background-attachment: scroll;
          }

          .about-title {
            font-size: 1.7rem;
          }

          .about-desc {
            font-size: 0.95rem;
          }

          .about-btn {
            padding: 12px 26px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* JSX */}
      <section className="about-banner">
        <div className="about-overlay">
          <h1 className="about-title">Welcome to BiZhar Heritage</h1>
          <p className="about-desc">
            Connecting local artisans with wider markets and preserving the
            cultural heritage of our land. Join us in building a strong artisan
            community.
          </p>
         <button
  className="about-btn"
  onClick={() => navigate("/contact")}
>
  Join Us
</button>

        </div>
      </section>
      <Aboutcompany/>
      {/* <Whatwedo/> */}
       {/* <Missionvision/> */}
       {/* <Ourthout/> */}
       
       <Teamcomponanat/>
       {/* <Founder/> */}
       <Colabrate/>
        <Decated/>
        <TechSupportTeam/>
       <Ourgroingteam/>
        <Footer/>
       
       
      
    </>
  );
};

export default AboutBanner;

