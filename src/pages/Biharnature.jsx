import React from "react";
import biharImage from "./Biharimage/thisbihar.jpg"; // apni image yahan import karein

const BiharMittiSection = () => {
  return (
    <>
      <div className="bihar-section">
        {/* Left Content */}
        <div className="bihar-content">
          <h2>Soil of Strength <span style={{color:'black'}}>– Bihar</span></h2>
          <p>
            Bihar is not just a land of history and culture, but a land deeply
            rooted in fertile soil that has shaped civilizations for centuries.
            The rich alluvial soil of Bihar, nourished by rivers like the Ganga,
            Kosi, and Son, represents resilience, growth, and endless
            possibilities.
          </p>

          <p>
            This soil has produced thinkers, leaders, and innovators. From
            agriculture to education, Bihar’s foundation lies in its mitti —
            strong, humble, and full of life. It symbolizes hard work,
            perseverance, and the power to rise again despite challenges.
          </p>

          <p>
            Bihar’s mitti teaches us values of simplicity, discipline, and
            determination. It is not merely land, but an identity that connects
            tradition with modern ambition.
          </p>
        </div>

        {/* Right Image */}
        <div className="bihar-image">
          <img src={biharImage} alt="Bihar Soil Identity" />
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
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
