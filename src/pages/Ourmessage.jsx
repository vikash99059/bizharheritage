import React from "react";

// 👉 Replace these with your actual images
import messageImg from "./Biharimage/ourmassage1.jpg";
import growthImg from "./Biharimage/grothplan.jpg";
import impactImg from "./Biharimage/soiscalimpact.jpg";

const OurStorySection = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .story-wrapper {
          width: 100%;
          background: #fefaf0;
          padding: 80px 20px;
          font-family: "Segoe UI", sans-serif;
        }

        .story-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .story-row {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .story-row.reverse {
          flex-direction: row-reverse;
        }

        .story-image {
          flex: 1;
        }

        .story-image img {
          width: 81%;
          height:317px;
          border-radius: 5px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .story-content {
          flex: 1;
        }

        .story-content h2 {
          font-size: 36px;
          color: #7a0c0c;
          margin-bottom: 20px;
          font-weight: 900;
        }

        .story-content p {
          font-size: 17px;
          line-height: 1.8;
          color: #444;
        }

        .story-content ul {
          margin-top: 20px;
          padding-left: 20px;
        }

        .story-content li {
          margin-bottom: 12px;
          font-size: 16px;
          color: #444;
        }

        /* ---------- Responsive ---------- */

        @media (max-width: 992px) {
          .story-row,
          .story-row.reverse {
            flex-direction: column;
            text-align: center;
          }

          .story-content h2 {
            font-size: 30px;
          }
        }
           @media (max-width: 768px) {
          .story-image img{
            width:100%;
            height:auto;
            }
      }
        @media (max-width: 576px) {
          .story-wrapper {
            padding: 50px 15px;
          }
            .story-image img{
            width:100%;
            height:auto;
            }

          .story-container {
            gap: 70px;
          }

          .story-content h2 {
            font-size: 26px;

          }

          .story-content p,
          .story-content li {
            font-size: 15px;
          }
        }
      `}</style>

      <section className="story-wrapper">
        <div className="story-container">

          {/* ---------- Our Message ---------- */}
          <div className="story-row">
            <div className="story-image">
              <img src={messageImg} alt="Our Message" />
            </div>

            <div className="story-content">
              <h2>Our <span style={{color: '#090707',}}>Message</span></h2>
              <p>
                We are not just building a business. We are building a cultural
                movement. A movement rooted in the soil, stories, and spirit of
                Bihar and Jharkhand — regions rich with history, creativity, and
                living traditions that have shaped generations.
              </p>
              <p>
                Our journey begins with the land itself. From the timeless
                beauty of mud art to the deep wisdom preserved in tribal
                forests, every element of our work reflects an identity that is
                raw, authentic, and deeply human.
              </p>
            </div>
          </div>

          {/* ---------- Our Growth Plan ---------- */}
          <div className="story-row reverse">
            <div className="story-image">
              <img src={growthImg} alt="Our Growth Plan" />
            </div>

            <div className="story-content">
              <h2>Our Growth <span style={{color: '#090707',}}>Plan</span></h2>
              <p>
                We begin with Bihar and Jharkhand—strengthening local supply
                chains, empowering grassroots producers, and building deep
                brand trust.
              </p>
              <p>
                From this strong regional foundation, our vision is to scale
                sustainably across India and emerge as a global Indian heritage
                brand, carrying authentic stories, craftsmanship, and values
                from local communities to national and international markets.
              </p>
            </div>
          </div>

          {/* ---------- Our Social Impact ---------- */}
          <div className="story-row">
            <div className="story-image">
              <img src={impactImg} alt="Our Social Impact" />
            </div>

            <div className="story-content">
              <h2>Our Social<span style={{color: '#090707',}}> Impact</span></h2>
              <p>
                Bizhar Heritage is committed to creating meaningful social and
                economic impact across Bihar and Jharkhand by directly
                connecting producers with markets.
              </p>

              <ul>
                <li>Generate large-scale direct and indirect employment</li>
                <li>Improve artisan and producer incomes</li>
                <li>Strengthen rural livelihoods</li>
                <li>Empower women self-help groups</li>
                <li>Preserve traditional art, crafts & indigenous knowledge</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default OurStorySection;
