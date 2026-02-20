


import React from "react";
 import rotateImg from "./Biharimage/biharlogo.png";

const BiharMittiSection = () => {
  return (
    <>
      <div className="bihar-section">
        {/* Left Content */}
        <div className="bihar-content">
          <h2>About <span style={{color:'black'}}>BiZhar-heritage</span></h2>
          <p>
     BiZhar Heritage is a Cultural driven brand and platform dedicated to
     showcasing, preserving, and promoting the true identity of Bihar and
     Jharkhand—locally, nationally, and globally.
     <br /><br />
     We are building more than a marketplace.
   </p>

  <p>
     We are creating a strong regional brand that brings together art, products,
     stories, and experiences from the heart of Bihar & Jharkhand and presents
     them to the world with pride.
     <br /><br />
     Bihar and Jharkhand are not just about history—they are living traditions.
   </p>

  <p>
     From paintings, handicrafts, folk art, music, languages, festivals, and
     tribal heritage to unexplored tourism experiences, these states are rich in
    talent and creativity. BiZhar Heritage exists to make this richness visible,
     valuable, and respected.
   </p>
        </div>

        {/* Right Image */}
        <div className="bihar-image">
          <img src={rotateImg} alt="Bihar Soil Identity" />
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .bihar-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 60px 8%;
          background: #fefaf0;
        }

        .bihar-content {
          flex: 1;
        }

        .bihar-content h2 {
          font-size: 25px;
          color: #8b0000;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .bihar-content p {
          font-size: 1.05rem;
          color: #333;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .bihar-image {
          flex: 1;
          text-align: center;
        }

        .bihar-image img {
          width: 100%;
          max-width: 480px;
          border-radius: 16px;
        //   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        /* Tablet View */
        @media (max-width: 992px) {
          .bihar-section {
            padding: 40px 6%;
            gap: 30px;
          }

          .bihar-content h2 {
            font-size: 2.1rem;
          }
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .bihar-section {
            flex-direction: column;
            text-align: center;
            padding: 35px 5%;
          }

          .bihar-content h2 {
            font-size: 1.9rem;
          }

          .bihar-content p {
            font-size: 1rem;
          }

          .bihar-image img {
            max-width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .bihar-content h2 {
            font-size: 1.6rem;
          }

          .bihar-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default BiharMittiSection;
