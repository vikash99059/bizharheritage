import React from "react";
import bgImage from "./jharkhsndbackground.jpg";
import sideImage from "./Biharimage/adiwasii.png";
import Explorejharkhand from "./Explorejharkhand.jsx";
import Missionvision from "./Missionvision.jsx";
import Jharkhandidenty from './Jharkhandidenty';
 import Ourteam from './Ourteam'
 import Jharkhandnature from './Jharkhandnature';
 import Ourmessage  from './Ourmessage';
 import Teamcomponanat from './Teamcomponanat.jsx';
const Aboutjharkhand = () => {
  return (
    <>
      <style>{`
        .about-bihar {
          width: 100%;
          min-height: 90vh;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          display: flex;
          align-items: center;
          padding: 80px 20px;
        }

        /* OVERLAY */
        .about-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        .about-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 60px;
          color: #fff;
        }

        /* LEFT TEXT */
        .about-text {
          flex: 1;
        }

        .about-text h2 {
          font-size: 44px;
          margin-bottom: 20px;
          color: #ffd700;
          position: relative;
        }

        .about-text h2::after {
          content: "";
          width: 90px;
          height: 4px;
          background: #ffd700;
          display: block;
          margin-top: 12px;
          border-radius: 10px;
        }

        .about-text p {
          font-size: 18px;
          line-height: 1.9;
          color: #f1f1f1;
          margin-top: 18px;
        }

        /* RIGHT IMAGE */
        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .about-image img {
          width: 64%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 20px;
         
          transition: transform 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.05);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-container {
            flex-direction: column;
            text-align: center;
          }

          .about-image img {
            height: 420px;
          }
        }

        @media (max-width: 480px) {
          .about-text h2 {
            font-size: 30px;
          }

          .about-text p {
            font-size: 16px;
          }

          .about-image img {
            height: 340px;
          }
        }
      `}</style>

      <section className="about-bihar">
        <div className="about-overlay"></div>

        <div className="about-container">
          {/* LEFT TEXT */}
          <div className="about-text">
  <h2>About Jharkhand</h2>
  <p>
    Jharkhand is a land of dense forests, majestic waterfalls, and vibrant
    tribal heritage. Known as the heart of India’s tribal culture, the state
    is rich in indigenous traditions, folklore, and natural beauty.
  </p>
  <p>
    From sacred hills like Parasnath to scenic destinations such as Netarhat
    and Hundru Falls, Jharkhand reflects a deep connection between nature,
    spirituality, and community life.
  </p>
</div>


          {/* RIGHT IMAGE */}
          <div className="about-image">
            <img src={sideImage} alt="Bihar Heritage" />
          </div>
        </div>
      </section>
      <Jharkhandnature/>
       <Explorejharkhand/>
        <Ourmessage/>
        {/* <Missionvision/> */}
        <Jharkhandidenty/>
        {/* <Teamcomponanat/> */}
        <Ourteam/>
    </>
  );
};

export default Aboutjharkhand;

