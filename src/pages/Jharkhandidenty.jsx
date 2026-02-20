import React from "react";
import jharkhandVideo from "./Biharimage/jharkhandvideo.mp4"; // replace if needed

const JharkhandIdentitySection = () => {
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
            Celebrating nature, indigenous wisdom, and the cultural soul of Jharkhand
          </p>

          <div className="identity-content">
            {/* LEFT TEXT */}
            <div className="identity-text">
              <h3>The Cultural Identity of Jharkhand</h3>

              <p>
                Jharkhand is a land deeply rooted in nature, tribal heritage, and
                indigenous traditions. Known as the heartland of forests and
                minerals, it reflects a unique harmony between people, culture,
                and the natural environment.
              </p>

              <p>
                The state is home to rich tribal communities whose art, music,
                dance, and craftsmanship have been preserved through generations,
                representing resilience, creativity, and deep cultural wisdom.
              </p>

              <p>
                Jharkhand’s identity is expressed through its handcrafted pottery,
                forest-based livelihoods, handloom traditions, and sustainable
                practices that honor the earth and its resources.
              </p>

              <p>
                More than a geographical region, Jharkhand stands as a living
                expression of self-reliance, cultural pride, and a timeless bond
                between humanity and nature.
              </p>
            </div>

            {/* RIGHT VIDEO */}
            <div className="identity-video">
              <video
                src={jharkhandVideo}
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

export default JharkhandIdentitySection;