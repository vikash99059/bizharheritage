import React from "react";
import jharkhandImage from "./Biharimage/Patratu Valley.jpg"; 

const JharkhandNatureSection = () => {
  return (
    <>
      <div className="jharkhand-section">
        {/* Left Content */}
        <div className="jharkhand-content">
          <h2> <span style={{color:"black"}}>Jharkhand – Where Nature Has</span> a Soul</h2>

          <p>
            Jharkhand is a land where nature breathes freely and life grows in
            harmony with the earth. Dense forests, flowing rivers, rolling
            hills, and rich minerals together form a state that is raw,
            powerful, and deeply connected to its roots.
          </p>

          <p>
            Known as the “Land of Forests,” Jharkhand carries an untouched
            natural beauty that reflects strength and simplicity. Its soil is
            rich not only in resources, but in culture, tradition, and the
            spirit of its people who live close to nature with dignity and
            resilience.
          </p>

          <p>
            Jharkhand represents balance — between progress and preservation.
            From tribal heritage to modern development, it stands as a symbol
            of sustainable growth, silent determination, and respect for the
            natural world.
          </p>
        </div>

        {/* Right Image */}
        <div className="jharkhand-image">
          <img src={jharkhandImage} alt="Jharkhand Nature Identity" />
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .jharkhand-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 60px 8%;
          background:#fefaf0;
        }

        .jharkhand-content {
          flex: 1;
        }

        .jharkhand-content h2 {
          font-size: 25px;
          color: #8b0000;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .jharkhand-content p {
          font-size: 1.05rem;
          color: #333;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .jharkhand-image {
          flex: 1;
          text-align: center;
        }

        .jharkhand-image img {
          width: 100%;
          max-width: 480px;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        /* Tablet View */
        @media (max-width: 992px) {
          .jharkhand-section {
            padding: 40px 6%;
            gap: 30px;
          }

          .jharkhand-content h2 {
            font-size: 2.1rem;
          }
        }

        /* Mobile View */
        @media (max-width: 768px) {
          .jharkhand-section {
            flex-direction: column;
            text-align: center;
            padding: 35px 5%;
          }

          .jharkhand-content h2 {
            font-size: 1.9rem;
          }

          .jharkhand-content p {
            font-size: 1rem;
          }

          .jharkhand-image img {
            max-width: 100%;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .jharkhand-content h2 {
            font-size: 1.6rem;
          }

          .jharkhand-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default JharkhandNatureSection;
