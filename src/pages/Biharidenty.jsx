

import React from "react";
import biharVideo from "./Biharimage/mitibatan.mp4"; // replace with your video

const BiharIdentitySection = () => {
  return (
    <>
      <style>{`
        .identity-section {
          width: 100%;
          // padding: 80px 20px;
          background: #fefaf0;
          font-family: "Segoe UI", sans-serif;
        }

        .identity-container {
          max-width: 1200px;
          margin: auto;
        }

        .identity-heading {
          text-align: center;
          font-size: 42px;
          font-weight: 900;
          color: #8b0000;
          margin-bottom: 15px;
        }

        .identity-subheading {
          text-align: center;
          font-size: 18px;
          color: #555;
          margin-bottom: 50px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .identity-content {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .identity-text {
          flex: 1;
        }

        .identity-text h3 {
          font-size: 26px;
          color: #8b0000;
          margin-bottom: 20px;
        }

        .identity-text p {
          font-size: 16px;
          line-height: 1.8;
          color: #444;
          margin-bottom: 15px;
        }

        .identity-video {
          flex: 1;
        }

        .identity-video video {
          width: 100%;
          height: auto;
          border-radius: 14px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* Tablet */
        @media (max-width: 992px) {
          .identity-content {
            flex-direction: column;
          }

          .identity-heading {
            font-size: 36px;
          }
        }

        /* Mobile */
        @media (max-width: 576px) {
          .identity-section {
            padding: 60px 15px;
          }

          .identity-heading {
            font-size: 30px;
          }

          .identity-subheading {
            font-size: 16px;
          }

          .identity-text h3 {
            font-size: 22px;
          }

          .identity-text p {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="identity-section">
        <div className="identity-container">
          <h2 className="identity-heading">Our  <span style={{color: '#030202'}}>Cultural</span> Identity</h2>
          <p className="identity-subheading">
            Rooted in heritage, driven by culture, and shaped by timeless traditions
          </p>

          <div className="identity-content">
            {/* LEFT TEXT */}
            <div className="identity-text">
              <h3>The Cultural Identity of Bihar</h3>
              <p>
                Bihar stands as a symbol of India’s ancient wisdom, cultural richness,
                and intellectual legacy. It is the land where history, spirituality,
                and craftsmanship blend seamlessly to form a distinct identity.
              </p>
              <p>
                From the teachings of Lord Buddha and Mahavira to world-renowned
                centers of learning like Nalanda, Bihar has played a pivotal role
                in shaping global knowledge systems.
              </p>
              <p>
                Our identity is reflected in the simplicity of rural life, the
                strength of local artisans, the authenticity of handloom and
                handicrafts, and the deep-rooted values passed down through generations.
              </p>
              <p>
                Bihar is not just a place — it is a living heritage that continues
                to inspire progress while staying connected to its cultural roots.
              </p>
            </div>

            {/* RIGHT VIDEO */}
            <div className="identity-video">
              <video
                src={biharVideo}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BiharIdentitySection;

