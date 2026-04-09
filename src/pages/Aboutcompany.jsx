import React, { useState } from "react";
import rotateImg from "./vendorimage/BiZhar Heritage logo Social Media.png";


const BiharMittiSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = [
    "BiZhar Heritage is a cultural and creative platform dedicated to connecting handicrafts artists across India and bringing their unique craftsmanship to a wider audience.",
    "Our vision is to create a strong network where talented artisans, designers, and craft lovers come together to celebrate the beauty of handmade traditions. Through this platform, we aim to support skilled artists by showcasing their work, sharing their stories, and helping their creations reach people who truly value authentic handcrafted products.",
    "BiZhar Heritage is more than just a marketplace. It is a growing community that promotes creativity, preserves traditional skills, and encourages innovation in the world of handicrafts.",
    "From handmade paintings and traditional crafts to modern artisan products, our platform highlights the diversity and richness of Indian craftsmanship while empowering artists with new opportunities and recognition.",
    "At BiZhar Heritage, we believe that every handcrafted piece carries a story, a culture, and the passion of the artist behind it."
  ];

  // Show only first 2 paragraphs when not expanded
  const displayedText = isExpanded ? fullText : fullText.slice(0, 2);

  return (
    <>
      <div className="bihar-section">
        {/* Left Content */}
        <div className="bihar-content">
          <h2>
            About <span style={{ color: "black" }}>BiZhar-heritage</span>
          </h2>
          <div className="newspaper-text">
            {displayedText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          
          {/* Read More / Read Less Button */}
          <button 
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Read Less ▲" : "Read More ▼"}
          </button>
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
          padding: 11px 8%;
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

        /* Newspaper-style justified text with hyphenation */
        .newspaper-text {
          text-align: justify;
          hyphens: auto;
          word-spacing: normal;
          letter-spacing: normal;
        }

        .newspaper-text p {
          font-size: 1.05rem;
          color: #333;
          line-height: 1.8;
          margin-bottom: 15px;
          text-align: justify;
        }

        /* Optional: first letter drop cap effect for newspaper feel */
        .newspaper-text p:first-child::first-letter {
          font-size: 3.2rem;
          font-weight: 500;
          float: left;
          line-height: 0.85;
          margin-right: 8px;
          color: #8b0000;
        }

        /* Read More Button Styles */
        .read-more-btn {
          background: transparent;
          border: 2px solid #8b0000;
          color: #8b0000;
          padding: 10px 24px;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 15px;
          display: inline-block;
        }

        .read-more-btn:hover {
          background: #8b0000;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(139, 0, 0, 0.3);
        }

        .read-more-btn:active {
          transform: translateY(0);
        }

        .bihar-image {
          flex: 1;
          text-align: center;
        }

        .bihar-image img {
          width: 100%;
          max-width: 480px;
          border-radius: 16px;
          /* box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15); */
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

          .newspaper-text p {
            font-size: 1rem;
            text-align: left; /* Better readability on mobile */
          }

          /* Disable drop cap on mobile */
          .newspaper-text p:first-child::first-letter {
            font-size: inherit;
            float: none;
            line-height: inherit;
            margin-right: 0;
            color: inherit;
          }

          .bihar-image img {
            max-width: 100%;
          }
          
          .read-more-btn {
            padding: 8px 20px;
            font-size: 0.9rem;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .bihar-content h2 {
            font-size: 1.6rem;
          }

          .newspaper-text p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </>
  );
};

export default BiharMittiSection;