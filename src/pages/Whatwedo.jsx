// // import React from "react";

// export default function WhatWeDo() {
//   return (
//     <div className="whatwedo-wrapper">
//       <h2 className="main-title">What We Do</h2>
//       <p className="subtitle">
//         Celebrating local culture, heritage, and craftsmanship through products,
//         people, and experiences.
//       </p>

//       <div className="cards-container">
//         {/* Card 1 */}
//         <div className="info-card">
//           <h3>Local Products Marketplace</h3>
//           <ul>
//             <li>Dedicated marketplace for local & specialty products</li>
//             <li>Products under <strong>BiZhar Heritage</strong> brand</li>
//             <li>Onboarding existing regional brands</li>
//             <li>Scalability, visibility & brand recognition</li>
//             <li>Quality standards, fair pricing & delivery</li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="info-card">
//           <h3>Customized Festival Products</h3>
//           <ul>
//             <li>Own branded & customized product lines</li>
//             <li>Festival-based collections:</li>
//             <li>• Chhath Puja</li>
//             <li>• Sarhul</li>
//             <li>• Sohrai</li>
//             <li>• Diwali</li>
//             <li>• Weddings & special occasions</li>
//             <li>Online, exhibitions, hotels & partner locations</li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="info-card">
//           <h3>Artist, Vendor & Brand Network</h3>
//           <ul>
//             <li>Direct collaboration with local artists & vendors</li>
//             <li>Branding & structured sales channels</li>
//             <li>Transparent & sustainable partnerships</li>
//             <li>Support local-to-global market growth</li>
//           </ul>
//         </div>

//         {/* Card 4 */}
//         <div className="info-card">
//           <h3>Tourism & Experience Integration</h3>
//           <ul>
//             <li>Blend tourism with local traditions</li>
//             <li>Collaboration with hotels, resorts & tourism offices</li>
//             <li>Instant product access from travel touchpoints</li>
//             <li>Seamless travel-to-product experience</li>
//           </ul>
//         </div>
//       </div>

//       {/* Internal CSS */}
//       <style>{`
//         .whatwedo-wrapper {
//           padding: 60px 20px;
//           background: linear-gradient(180deg, #f7efe5, #fff);
//           font-family: "Segoe UI", sans-serif;
//         }

//         .main-title {
//           text-align: center;
//           font-size: 36px;
//           font-weight: 700;
//           color: #5a2d0c;
//           margin-bottom: 10px;
//         }

//         .subtitle {
//           text-align: center;
//           max-width: 700px;
//           margin: 0 auto 50px;
//           color: #6b4b2a;
//           font-size: 16px;
//           line-height: 1.6;
//         }

//         .cards-container {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 25px;
//           max-width: 1200px;
//           margin: auto;
//         }

//         .info-card {
//           background: #ffffff;
//           border-radius: 16px;
//           padding: 25px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
//           transition: all 0.3s ease;
//           border-top: 6px solid #a04c1a;
//         }

//         .info-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.15);
//         }

//         .info-card h3 {
//           font-size: 20px;
//           margin-bottom: 15px;
//           color: #7a3b12;
//         }

//         .info-card ul {
//           padding-left: 18px;
//           margin: 0;
//         }

//         .info-card li {
//           font-size: 14px;
//           margin-bottom: 8px;
//           color: #4b3a2a;
//           line-height: 1.5;
//         }

//         /* Tablet */
//         @media (max-width: 992px) {
//           .cards-container {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* Mobile */
//         @media (max-width: 576px) {
//           .main-title {
//             font-size: 28px;
//           }

//           .subtitle {
//             font-size: 14px;
//           }

//           .cards-container {
//             grid-template-columns: 1fr;
//           }

//           .info-card {
//             padding: 20px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }


import React from "react";
import "./Whatwedo.css";
import {
  FaStore,
  FaGift,
  FaUsers,
  FaUmbrellaBeach,
} from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      title: "Local Products Marketplace",
      icon: <FaStore />,
      desc:
        "A trusted marketplace for authentic local and heritage products, connecting artisans directly with customers.",
      points: [
        "BiZhar Heritage branding",
        "Verified local sellers",
        "Fair pricing & quality checks",
        "Pan-India delivery network",
      ],
    },
    {
      title: "Festival Special Collections",
      icon: <FaGift />,
      desc:
        "Carefully curated festive products inspired by regional traditions and cultural celebrations.",
      points: [
        "Chhath Puja collections",
        "Tribal & folk festivals",
        "Wedding & ritual products",
        "Limited edition offerings",
      ],
    },
    {
      title: "Artist & Vendor Network",
      icon: <FaUsers />,
      desc:
        "Empowering artisans and vendors by providing market access, visibility, and sustainable growth.",
      points: [
        "Direct artisan onboarding",
        "Transparent business model",
        "Brand & sales support",
        "National & global reach",
      ],
    },
    {
      title: "Tourism Integration",
      icon: <FaUmbrellaBeach />,
      desc:
        "Bringing local culture into tourism through hotels, travel hubs, and experience-based discovery.",
      points: [
        "Hotel & resort partnerships",
        "Airport & travel desks",
        "Cultural discovery points",
        "Instant purchase access",
      ],
    },
  ];

  return (
    <section className="whatwedo-section">
      <div className="whatwedo-header">
        <h1>What We <span style={{color:"goldenrod"}}>Do</span></h1>
        <p>
          Preserving heritage, supporting artisans, and connecting culture with
          modern markets.
        </p>
      </div>

      <div className="whatwedo-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="card-top">
              <div className="card-icon">{item.icon}</div>
              <h2>{item.title}</h2>
              <div className="gold-line"></div>
            </div>

            <p className="card-desc">{item.desc}</p>

            <ul className="card-list">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
