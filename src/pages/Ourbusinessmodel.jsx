import React from "react";
import bgImage from "./Biharimage/clutureexprience.jpeg"; // 🔴 apna background image
import modelImage from "./Biharimage/businessmodel.jpeg"; // 🔴 left card image

const BusinessModelSection = () => {
  return (
    <>
      <style>{`
        .business-section {
          width: 100%;
          // min-height: 55vh;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.65)
          ), url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          padding: 50px 20px;
          font-family: "Segoe UI", sans-serif;
        }

        .business-container {
          // max-width: px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }

        /* LEFT IMAGE */
        .business-image {
          display: flex;
          justify-content: center;
        }

        .business-image img {
          max-width: 547px;
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        /* RIGHT CONTENT */
        .business-content {
          color: #ffffff;
        }

        .business-content h2 {
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .business-content p {
          font-size: 16px;
          line-height: 1.7;
          color: #e0e0e0;
          margin-bottom: 25px;
          max-width: 650px;
        }

        .business-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .business-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 15px;
          line-height: 1.6;
        }

        .check {
          color: #4caf50;
          font-size: 18px;
          margin-top: 2px;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .business-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .business-content h2 {
            font-size: 34px;
          }

          .business-list li {
            justify-content: center;
            text-align: left;
          }
        }

        @media (max-width: 576px) {
          .business-content h2 {
            font-size: 28px;
          }

          .business-content p {
            font-size: 14px;
          }

          .business-list li {
            font-size: 14px;
          }

          .business-image img {
            max-width: 320px;
          }
        }
      `}</style>

      <section className="business-section">
        <div className="business-container">
          {/* LEFT IMAGE */}
          <div className="business-image">
            <img src={modelImage} alt="Business Model" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="business-content">
            <h2>Our Business Model</h2>
            <p>
              Our business model is based on trust, honesty, and long-term growth. We work directly with local artisans and producers and use a digital-first approach to deliver quality products at fair prices, while keeping the real stories and traditions alive.
            </p>

            <ul className="business-list">
              <li>
                <span className="check">✔</span>
                •	Directly sourced from local artisans and producers
              </li>
              <li>
                <span className="check">✔</span>
                •	Fair and transparent pricing with quality checks
              </li>
              <li>
                <span className="check">✔</span>
                •	Story-based branding that celebrates local culture and heritage
              </li>
              <li>
                <span className="check">✔</span>
                •	Eco-friendly and sustainable packaging
              </li>
              <li>
                <span className="check">✔</span>
                •	Sales through online platforms and selected offline stores
              </li>
              <li>
                <span className="check">✔</span>
                •	Digital-first model for easy scaling and cost-effective growth
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessModelSection;
