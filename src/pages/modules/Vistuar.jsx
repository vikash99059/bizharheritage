import React from "react";
import BiharImg from "../Biharimage/visuitbihar.jpeg";
import JharkhandImg from "../jharkhandimage/explorejharkhand.jpeg";

const VisitCards = () => {
  return (
    <>
      {/* Section Heading */}
      <div className="visit-heading">
        <h1>Explore Eastern <span style={{color:"black"}}>India</span> </h1>
        <p>
          Explore the culture and crafts of Bihar and Jharkhand—where tradition and everyday life come together
        </p>
      </div>

      {/* Cards */}
      <div className="visit-container">
        {/* Bihar Card */}
        <div className="visit-card">
          <img src={BiharImg} alt="Bihar Tourism" />
          <h2>Explore Bihar</h2>
          <p>
            Step into the land of Gautam Buddha, Bodh Gaya, and Nalanda—where history meets vibrant traditions. Discover Madhubani art, Tussar silk, Thekua, Litti Chokha, and other local specialties that tell the story of Bihar.
          </p>
          <a
            href="/what-we-offer-bihar"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit on Bihar →
          </a>
        </div>

        {/* Jharkhand Card */}
        <div className="visit-card">
          <img src={JharkhandImg} alt="Jharkhand Tourism" />
          <h2>Explore Jharkhand</h2>
          <p>
            To experience the natural beauty of India, start with Jharkhand. From forests and rivers to Sohrai and Khovar art, herbal products, Sal leaf products, Tasar silk, palash flowers, and other local specialties, this land lives close to nature.
          </p>
          <a
            href="/what-we-offer-jharkhand"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-btn"
          >
            Visit on Jharkhand →
          </a>
        </div>
      </div>

      {/* Internal CSS */}
      <style>{`
        .visit-heading {
          text-align: center;
          max-width: 1200px;
          margin: 40px auto 20px;
          padding: 0 20px;
        }

        .visit-heading h1 {
          font-size: 36px;
          color: #7a0000;
          margin-bottom: 10px;
        }

        .visit-heading p {
          font-size: 17px;
          color: #555;
          line-height: 1.7;
        }

        .visit-container {
          display: flex;
          gap: 30px;
          padding: 40px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .visit-card {
          width: 561px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          text-align: center;
          transition: all 0.3s ease;
          border-top: 6px solid #8b0000;
        }

        .visit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .visit-card img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }

        .visit-card h2 {
          font-size: 26px;
          margin: 20px 0 10px;
          color: #222;
        }

        .visit-card p {
          font-size: 16px;
          line-height: 1.6;
          padding: 0 20px;
          color: #555;
        }

        .visit-btn {
          display: inline-block;
          margin: 20px 0 30px;
          padding: 12px 28px;
          background: #8b0000;
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          border-radius: 30px;
          transition: all 0.3s ease;
        }

        .visit-btn:hover {
          background: #b48c1eff;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .visit-container {
            flex-direction: column;
            align-items: center;
            padding: 20px;
          }

          .visit-card {
            width: 100%;
            max-width: 380px;
          }

          .visit-heading h1 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default VisitCards;
