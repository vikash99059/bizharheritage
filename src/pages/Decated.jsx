import React, { useEffect, useRef } from "react";
import profileImg from "./vendorimage/palvisingh.jpeg";

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
          <h2 className="dedication-title">Pallavi Singh</h2>
          <div className="gold-line"></div>

          <h3 className="dedication-name">
            Senior Artist
          </h3>

          <p className="dedication-text">
            Our respected and experienced artist, Pallavi Singh ji, is a passionate art lover who beautifully mixes traditional and tribal art with modern fashion. With a background in fashion designing, her work includes traditional Indian wear as well as modern and fusion styles. Through her work with BiZhar Heritage, she is trying to bring back and showcase the hidden beauty of tribal art from India and around the world.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="dedication-image">
          <img
            src={profileImg}
            alt="Pallavi Singh - Senior Artist"
          />
        </div>

      </div>

      {/* INTERNAL CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dedication-wrapper {
          width: 100%;
          padding: 60px 20px;
          
          display: flex;
          justify-content: center;
          align-items: center;
          // min-height: 100vh;
        }

        .dedication-card {
          max-width: 1300px;
          width: 100%;
          background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
          border-radius: 30px;
          padding: 50px 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dedication-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        .dedication-content {
          flex: 2;
          color: #fff;
        }

        .dedication-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 15px;
          background: linear-gradient(135deg, #fff, #f5c400);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 2px;
        }

        .gold-line {
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, #f5c400, #ff8c00);
          margin-bottom: 30px;
          border-radius: 3px;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .dedication-name {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #f5c400;
          letter-spacing: 1px;
        }

        .dedication-text {
          font-size: 18px;
          line-height: 1.8;
          color: #e0e0e0;
          max-width: 700px;
          text-align: justify;
          font-weight: 400;
        }

        .dedication-image {
          flex-shrink: 0;
          width: 250px;
          height: 250px;
          // border-radius: 50%;
          border: 8px solid #f5c400;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, #f5c400, #ff8c00);
          position: relative;
        }

        .dedication-image:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 45px rgba(245, 196, 0, 0.3);
          border-color: #fff;
        }

        .dedication-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .dedication-image:hover img {
          transform: scale(1.1);
        }

        /* ===== RESPONSIVE DESIGN ===== */

        /* Tablet View */
        @media (max-width: 1024px) {
          .dedication-card {
            padding: 40px 35px;
            gap: 35px;
          }

          .dedication-title {
            font-size: 42px;
          }

          .dedication-name {
            font-size: 24px;
          }

          .dedication-text {
            font-size: 17px;
            line-height: 1.7;
          }

          .dedication-image {
            width: 220px;
            height: 220px;
          }
        }

        /* Mobile Landscape & Tablet Portrait */
        @media (max-width: 900px) {
          .dedication-wrapper {
            padding: 40px 15px;
          }

          .dedication-card {
            flex-direction: column-reverse;
            text-align: center;
            padding: 40px 25px;
            gap: 30px;
          }

          .gold-line {
            margin: 0 auto 25px;
            width: 80px;
          }

          .dedication-text {
            max-width: 100%;
            text-align: center;
          }

          .dedication-title {
            font-size: 38px;
          }

          .dedication-name {
            font-size: 22px;
          }

          .dedication-image {
            width: 200px;
            height: 200px;
          }
        }

        /* Mobile Small View */
        @media (max-width: 768px) {
          .dedication-wrapper {
            padding: 30px 12px;
          }

          .dedication-card {
            padding: 30px 20px;
            gap: 25px;
          }

          .dedication-title {
            font-size: 32px;
            margin-bottom: 10px;
          }

          .gold-line {
            width: 60px;
            height: 4px;
            margin-bottom: 20px;
          }

          .dedication-name {
            font-size: 20px;
            margin-bottom: 15px;
          }

          .dedication-text {
            font-size: 16px;
            line-height: 1.6;
          }

          .dedication-image {
            width: 170px;
            height: 170px;
            border-width: 6px;
          }
        }

        /* Extra Small Mobile (iPhone SE, etc.) */
        @media (max-width: 480px) {
          .dedication-wrapper {
            padding: 20px 10px;
          }

          .dedication-card {
            padding: 25px 15px;
            border-radius: 20px;
            gap: 20px;
          }

          .dedication-title {
            font-size: 26px;
          }

          .dedication-name {
            font-size: 18px;
          }

          .dedication-text {
            font-size: 14px;
            line-height: 1.5;
          }

          .gold-line {
            width: 50px;
            height: 3px;
            margin-bottom: 15px;
          }

          .dedication-image {
            width: 140px;
            height: 140px;
            border-width: 5px;
          }
        }

        /* Very Small Devices */
        @media (max-width: 360px) {
          .dedication-card {
            padding: 20px 12px;
          }

          .dedication-title {
            font-size: 24px;
          }

          .dedication-name {
            font-size: 16px;
          }

          .dedication-text {
            font-size: 13px;
            line-height: 1.45;
          }

          .dedication-image {
            width: 120px;
            height: 120px;
            border-width: 4px;
          }
        }

        /* Large Desktop View */
        @media (min-width: 1400px) {
          .dedication-card {
            max-width: 1400px;
            padding: 70px 80px;
          }

          .dedication-title {
            font-size: 56px;
          }

          .dedication-name {
            font-size: 32px;
          }

          .dedication-text {
            font-size: 20px;
            max-width: 800px;
          }

          .dedication-image {
            width: 300px;
            height: 377px;
            border-width: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default DedicationCard;