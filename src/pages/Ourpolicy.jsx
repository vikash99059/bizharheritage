import React from "react";

const PolicyAndInitiatives = () => {
  return (
    <>
      <style>{`
        .policy-wrapper {
          width: 100%;
          padding: 1px 20px;
          margin-bottom:20px;
        
          font-family: "Segoe UI", sans-serif;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
          color: #8b0000;
          margin-bottom: 12px;
        }

        .section-subtitle {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 50px;
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        /* ===== POLICY CARDS ===== */
        .policy-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto 90px;
        }

        .policy-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 30px 22px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.12);
        }

        .policy-card h3 {
          color: #8b0000;
          font-size: 18px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .policy-card p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        /* ===== UPCOMING INITIATIVES ===== */
        .initiative-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .initiative-card {
          background: linear-gradient(135deg, #7a0000, #3d1a1a);
          border-radius: 20px;
          padding: 35px 30px;
          color: #ffffff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }

        .initiative-card:hover {
          transform: translateY(-6px);
        }

        .initiative-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 14px;
        }

        .initiative-card p {
          font-size: 15px;
          line-height: 1.7;
          opacity: 0.95;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1100px) {
          .policy-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }

          .policy-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .initiative-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .policy-grid {
            grid-template-columns: 1fr;
          }

          .policy-card,
          .initiative-card {
            padding: 25px 20px;
          }
        }
      `}</style>

      <div className="policy-wrapper">
        {/* Government & Policy Alignment */}
        <h2 className="section-title">Government & Policy<span style={{color:'black'}}>Alignment</span> </h2>
        <p className="section-subtitle">
          Bizhar Heritage is aligned with key national and state government initiatives, creating strong opportunities for government partnerships, funding support, and long-term policy collaboration. 
        </p>

        <div className="policy-grid">
          <div className="policy-card">
            <h3>Make in India</h3>
            <p>
              Promoting indigenous production by supporting local manufacturing and empowering artisans.
            </p>
          </div>

          <div className="policy-card">
            <h3>Vocal for Local</h3>
            <p>
              Strengthening local economies by promoting regional crafts, traditional skills, and cultural heritage
            </p>
          </div>

          <div className="policy-card">
            <h3>Startup India</h3>
            <p>
              Driving innovation through digital platforms, scalable business models, and startupfriendly growth.
            </p>
          </div>

          <div className="policy-card">
            <h3>MSME & GI / DOP</h3>
            <p>
              Supporting micro-enterprises, GI-tagged products, and authentic region-based craftsmanship.
            </p>
          </div>

          <div className="policy-card">
            <h3>Tribal Development Programs</h3>
            <p>
              Creating sustainable livelihoods for tribal communities through ethical sourcing and fair trade practices.
            </p>
          </div>
        </div>

        {/* Upcoming Initiatives */}
        <h2 className="section-title">Upcoming  <span style={{color:"black"}}>Initiatives</span></h2>
        <p className="section-subtitle">
          Expanding Bizhar Heritage into thoughtfully curated collections that
          blend tradition, sustainability, and contemporary demand.
        </p>

        <div className="initiative-grid">
          <div className="initiative-card">
            <h3>We Turn Local Craft into Living Spaces</h3>
            <p>
              We help hotels, resorts, and offices become cultural, eco-friendly, and unique. 
Using local art, handmade furniture, and traditional crafts, we turn ordinary spaces into authentic experiences. 
Guests can also buy the products they love—scan a QR code, pay, and take them home. 
Artisans earn, owners earn more, and guests enjoy a peaceful, cultural stay
.
            </p>
          </div>

          <div className="initiative-card">
            <h3>Cultural & Nature Tour Packages</h3>
            <p>
              Curated all-inclusive tour packages across Bihar and Jharkhand, offering authentic cultural experiences, scenic destinations, and heritage trails. 
Each package includes stay, local travel, sightseeing, and guided experiences at a single, transparent price — helping you explore the true beauty, culture, and natural richness of the region effortlessly
.
            </p>
          </div>

          <div className="initiative-card">
            <h3>Kids Cultural Toys</h3>
            <p>
              In the future, we will introduce toys for children that represent the culture and daily life of Bihar and Jharkhand. 
These toys will help children understand local traditions and rural life in a simple and meaningful way.
Examples include: 
<li>	Bullock cart toys </li> 
<li>	Farmer life–based toys </li> 
<li>	Flower bouquets made from Palash flowers </li> 
<li>Other toys inspired by village life and folk culture</li> 
 

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyAndInitiatives;
