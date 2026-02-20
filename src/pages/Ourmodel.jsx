// import React from 'react';
// import './Ourmodel.css';

// // Import local images
// import socialImpactImage from './Biharimage/stroy.png';
// import businessModelImage from '../pages/Biharimage/stroy.png';

// // Alternatively, if you want to use better Unsplash images, you can use these URLs:
// const socialImpactImageURL = "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
// const businessModelImageURL = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// const BizharHeritage = () => {
//   return (
//     <div className="bizhar-container">
//       {/* Social Impact Section */}
//       <section className="bizhar-section">
//         <h2 className="section-title">OUR SOCIAL IMPACT</h2>
        
//         <div className="content-wrapper">
//           <div className="image-side">
//             <img 
//               src={socialImpactImage} 
//               alt="Artisans and craftspeople working on traditional crafts in rural India"
//               className="section-image"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
//               }}
//             />
//             <div className="image-overlay">
//               <span className="overlay-text">Empowering Communities</span>
//             </div>
//           </div>
          
//           <div className="content-side">
//             <h3>Creating Sustainable Change</h3>
//             <ul className="content-list">
//               <li className="impact-point">
//                 <div className="icon-container">
//                   <i className="fas fa-users"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Generate large-scale direct and indirect employment</span> across Bihar and Jharkhand
//                 </div>
//               </li>
//               <li className="impact-point">
//                 <div className="icon-container">
//                   <i className="fas fa-handshake"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Connect producers directly with markets</span> to improve incomes
//                 </div>
//               </li>
//               <li className="impact-point">
//                 <div className="icon-container">
//                   <i className="fas fa-home"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Strengthen rural livelihoods</span> through sustainable practices
//                 </div>
//               </li>
//               <li className="impact-point">
//                 <div className="icon-container">
//                   <i className="fas fa-female"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Empower women self-help groups</span> with skill development and resources
//                 </div>
//               </li>
//               <li className="impact-point">
//                 <div className="icon-container">
//                   <i className="fas fa-palette"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Preserve traditional art, crafts and indigenous knowledge</span> for future generations
//                 </div>
//               </li>
//             </ul>
//             <p className="tagline">Transforming communities through ethical commerce</p>
//           </div>
//         </div>
//       </section>

//       {/* Business Model Section */}
//       <section className="bizhar-section">
//         <h2 className="section-title">OUR BUSINESS MODEL</h2>
        
//         <div className="content-wrapper alternate">
//           <div className="content-side">
//             <h3>Innovative & Sustainable Approach</h3>
//             <ul className="content-list">
//               <li className="business-point">
//                 <div className="icon-container">
//                   <i className="fas fa-shopping-basket"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Direct sourcing from local producers</span> ensuring fair compensation
//                 </div>
//               </li>
//               <li className="business-point">
//                 <div className="icon-container">
//                   <i className="fas fa-chart-line"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Transparent pricing & strict quality control</span> for premium products
//                 </div>
//               </li>
//               <li className="business-point">
//                 <div className="icon-container">
//                   <i className="fas fa-book"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Strong storytelling-driven branding</span> that highlights heritage
//                 </div>
//               </li>
//               <li className="business-point">
//                 <div className="icon-container">
//                   <i className="fas fa-leaf"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Sustainable & eco-friendly packaging</span> minimizing environmental impact
//                 </div>
//               </li>
//               <li className="business-point">
//                 <div className="icon-container">
//                   <i className="fas fa-globe"></i>
//                 </div>
//                 <div className="text-content">
//                   <span className="highlight">Sales via digital platforms and selective offline channels</span> for maximum reach
//                 </div>
//               </li>
//             </ul>
//             <p className="tagline">
//               A digital-first approach allows us to scale efficiently while keeping costs low.
//             </p>
//           </div>
          
//           <div className="image-side">
//             <img 
//               src={businessModelImage} 
//               alt="Digital platform and business operations showcasing Bizhar Heritage's model"
//               className="section-image"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
//               }}
//             />
//             <div className="image-overlay">
//               <span className="overlay-text">Modern & Sustainable</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <div className="stats-section">
//         <div className="stat-item">
//           <div className="stat-number">500+</div>
//           <div className="stat-label">Artisans Empowered</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-number">100+</div>
//           <div className="stat-label">Women SHGs</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-number">50+</div>
//           <div className="stat-label">Villages Reached</div>
//         </div>
//         <div className="stat-item">
//           <div className="stat-number">25+</div>
//           <div className="stat-label">Traditional Crafts</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BizharHeritage;




import React from "react";
import { motion } from "framer-motion";
import PromoImage from "./Biharimage/stroy.png";



const BusinessPromo = () => {
  const features = [
    {
      number: "01",
      title: "🏠 Dashboard",
      text: "Manage orders, inventory, and promotions ———— all in one place.",
    },
    {
      number: "02",
      title: "🛒 Orders",
      text: "Track incoming orders, update status, and view complete order history.",
    },
    {
      number: "03",
      title: "📦 Inventory",
      text: "Monitor stock levels, add new items, and update availability in real-time.",
    },
    {
      number: "04",
      title: "💬 Support",
      text: "Chat with support, raise issues, or request technical help — anytime.",
    },
    {
      number: "05",
      title: "📊 Reports",
      text: "Get insights on sales, earnings, and customer behavior — daily or monthly",
    },
    {
      number: "06",
      title: "🧾 Billing",
      text: "View transactions, download invoices, and track payments received.",
    },
    {
      number: "07",
      title: "👤 Profile",
      text: "Update store details, working hours, delivery radius, and bank info.",
    },
    
  ];
  
  return (
    <>
      <style>{`
        .why-container {
          width: 100%;
          padding: 40px 20px;
           background: 'linear-gradient(135deg, #f8f4f0, #ffffff, #f5f5f5)',
        }

        .why-heading {
          text-align: center;
          font-size: 50px;
          font-weight: bold;
          color: #2a2a2a;
          margin-bottom: 10px;
        }

        .why-subtext {
          text-align: center;
          font-size: 16px;
          color: #777;
          max-width: 700px;
          margin: auto;
        }

        .dot-row {
          text-align: center;
          margin-top: 10px;
          margin-bottom: 40px;
        }
        .dot {
          height: 10px;
          width: 10px;
          background: #e74c3c;
          border-radius: 50%;
          display: inline-block;
          margin: 5px;
        }

        .why-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .why-image {
          width: 577px;
          max-width: 100%;
          border-radius: 12px;
        }

        .blue-box {
          background: #e74c3c;
          padding: 20px;
          border-radius: 12px;
          width: 130px;
          color: white;
        }

        .blue-item {
          text-align: center;
          margin: 35px 0;
        }

        .blue-num {
          font-size: 38px;
          font-weight: bold;
        }

        .blue-line {
          width: 60%;
          height: 3px;
          margin: 8px auto 0 auto;
          background: white;
          opacity: 0.7;
        }

        .right-content {
          width: 45%;
          min-width: 280px;
        }

        .right-title {
          color: black;
          font-size: 22px;
          font-weight: 700;
        }

        .right-text {
          color: #444;
          font-size: 15px;
          margin-top: 5px;
        }

        .dotted-line {
          border-bottom: 1px dotted #888;
          margin: 10px 0 20px 0;
        }

        @media (max-width: 992px) {
          .why-section {
            flex-direction: column;
            text-align: center;
          }
          .right-content {
            width: 100%;
          }
          .why-heading {
            font-size: 32px;
          }
        }

        @media (max-width: 600px) {
          .blue-box {
            display: flex;
            justify-content: space-between;
            width: 95%;
          }
          .blue-item {
            margin: 10px 0;
          }
        }
      `}</style>

      <div className="why-container">

        <h1 className="why-heading">
          DASHBOARD –Your<span style={{ color: "red", fontWeight: "bold" }}>Command Center</span>
        </h1>
 

        <div className="why-section">

          {/* IMAGE — Scroll Animation */}
          <motion.img
            src={PromoImage}
            className="why-image"
            initial={{ opacity: 0, x: -150, y: 100 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {/* BLUE NUMBER BOX — Scroll Animation */}
          <motion.div
            className="blue-box"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((item) => (
              <div className="blue-item" key={item.number}>
                <div className="blue-num">{item.number}</div>
                <div className="blue-line"></div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT CONTENT — Stagger Scroll Animation */}
          <motion.div
            className="right-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="right-title">{item.title}</div>
                <div className="right-text">{item.text}</div>
                <div className="dotted-line"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BusinessPromo;

