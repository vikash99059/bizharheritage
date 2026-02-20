import React, { useEffect, useRef } from "react";
import profileImg from "./Teamimage/nporu.png";


const DedicationCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  return (
    <div className="dedication-wrapper">
      <div ref={cardRef} className="dedication-card">
        
        {/* LEFT CONTENT */}
        <div className="dedication-content">
          <h2 className="dedication-title">For My Little Sister

</h2>
          <div className="gold-line"></div>

          <h3 className="dedication-name">
            Dedicated to Noopur Mishra
          </h3>

          <p className="dedication-text">
            With love and gratitude to Noopur Mishra, my little sister, whose passion for culture has helped shape the very essence of Bizhar Heritage and made this journey truly special.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="dedication-image">
  <img
    src={profileImg}
    alt="Dedication"
  />
</div>

      </div>

      {/* INTERNAL CSS */}
      <style>{`
        .dedication-wrapper {
          width: 100%;
          padding: 40px 16px;
         
          display: flex;
          justify-content: center;
        }

        .dedication-card {
          max-width: 1200px;
          width: 100%;
          background: linear-gradient(135deg, #7a0000, #3d1a1a);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }

        .dedication-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .dedication-content {
          flex: 1;
          color: #fff;
        }

        .dedication-title {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .gold-line {
          width: 80px;
          height: 4px;
          background: #f5c400;
          margin-bottom: 25px;
          border-radius: 2px;
        }

        .dedication-name {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .dedication-text {
          font-size: 17px;
          line-height: 1.7;
          color: #f5f5f5;
          max-width: 650px;
        }

        .dedication-image {
          flex-shrink: 0;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 6px solid #fff;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .dedication-image img {
          width: 100%;
          height: 120%;
          background-color:#daa520;
          object-fit: cover;
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 900px) {
          .dedication-card {
            flex-direction: column-reverse;
            text-align: center;
            padding: 30px 20px;
          }

          .gold-line {
            margin: 0 auto 20px;
          }

          .dedication-text {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .dedication-title {
            font-size: 30px;
          }

          .dedication-name {
            font-size: 22px;
          }

          .dedication-image {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>
    </div>
  );
};

export default DedicationCard;
