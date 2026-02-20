// import React from "react";

// // ✅ IMPORT IMAGES
// import visionImg from "./Biharimage/vision-logo.png";
// import missionImg from "./Biharimage/mission.png";
// import logoImg from "./Biharimage/biharlogo.png";

// const VisionMission = () => {
//   return (
//     <div className="vm-wrapper">
//         <div>
//             <h1 style={{textAlign:"center", marginBottom:"40px", color:"#8b0000"}}>VISION &<span style={{color:'black'}}>MISSION</span> </h1>
        
//       <div className="vm-grid">
//         {/* TOP LEFT - VISION */}
//         <div className="vm-box orange animated-fade-in-left">
//           <h2>OUR VISION</h2>
//           <p className="vision-text">
//             To establish Bihar and Jharkhand as globally recognized hubs of 
//             heritage, natural and indigenous products, proudly representing 
//             their diverse cultural roots on the world map.
//           </p>
//         </div>

//         {/* TOP RIGHT - VISION IMAGE */}
//         <div className="vm-box white animated-fade-in-right">
//           <img src={visionImg} alt="Vision" className="vision-image" />
//         </div>

//         {/* BOTTOM LEFT - MISSION IMAGE */}
//         <div className="vm-box white animated-fade-in-left-delayed">
//           <img src={missionImg} alt="Mission" className="mission-image" />
//         </div>

//         {/* BOTTOM RIGHT - MISSION */}
//         <div className="vm-box red animated-fade-in-right-delayed">
//           <h2>OUR MISSION</h2>
//           <div className="mission-list">
//             <div className="mission-item">
//               <span className="mission-icon">+</span>
//               <span>To create sustainable employment for tribal and rural communities</span>
//             </div>
//             <div className="mission-item">
//               <span className="mission-icon">+</span>
//               <span>To ensure fair pricing and maximum benefit to producers</span>
//             </div>
//             <div className="mission-item">
//               <span className="mission-icon">+</span>
//               <span>To build a trusted global heritage brand rooted in authenticity</span>
//             </div>
//             <div className="mission-item">
//               <span className="mission-icon">+</span>
//               <span>To promote Bihar & Jharkhand's culture, art and languages through ethical trade</span>
//             </div>
//             <div className="mission-item">
//               <span className="mission-icon">+</span>
//               <span>To preserve traditional skills that are at risk of disappearing</span>
//             </div>
//           </div>
//         </div>

//         {/* CENTER LOGO - Desktop Only */}
//         <div className="center-logo animated-rotate">
//           <img src={logoImg} alt="Logo" />
//         </div>
//       </div>
// </div>
//       {/* INTERNAL CSS */}
//       <style jsx>{`
//         .vm-wrapper {
//           width: 100%;
//           padding: 15px 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background-color:#fefaf0;
         
//           min-height: 100vh;
//         }

//         .vm-grid {
//           width: 100%;
//           max-width: 1200px;
//           margin-bottom: 45px;
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           grid-template-rows: 1fr 1fr;
//           position: relative;
//           border-radius: 30px;
//           overflow: hidden;
         
          
//           min-height: 700px;
//         }

//         .vm-box {
//           padding: 10px 40px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           flex-direction: column;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }

//         /* Vision Box */
//         .orange {
//           background: linear-gradient(135deg, #8b0000 0%, #8b0000 100%);
//           position: relative;
//         }

//         .orange::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
//           background-size: 30px 30px;
//           opacity: 0.2;
//         }

//         /* Mission Box */
//         .red {
//           background: linear-gradient(135deg, #8b0000 0%, #8b0000 100%);
//           position: relative;
//         }

//         .red::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
//           background-size: 30px 30px;
//           opacity: 0.2;
//         }

//         .white {
         
//         }

//         /* Typography */
//         .vm-box h2 {
//           color: #fff;
//           margin-bottom: 30px;
//           font-size: 32px;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
//           position: relative;
//           z-index: 2;
//         }

//         .orange h2, .red h2 {
//           width: 100%;
//           text-align: center;
//           padding-left: 10px;
//         }

//         .vision-text {
//           color: #fff;
//           font-size: 18px;
//           line-height: 1.8;
//           max-width: 500px;
//           position: relative;
//           z-index: 2;
//           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
//           font-weight: 300;
//         }

//         .mission-list {
//           width: 100%;
//           max-width: 500px;
//         }

//         .mission-item {
//           display: flex;
//           align-items: flex-start;
//           margin-bottom: 20px;
//           color: #fff;
//           font-size: 16px;
//           line-height: 1.6;
//           position: relative;
//           z-index: 2;
//           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
//           font-weight: 300;
//         }

//         .mission-icon {
//           font-size: 24px;
//           margin-right: 15px;
//           font-weight: bold;
//           color: #ffd700;
//           min-width: 25px;
//         }

//         /* Images */
//         .white img {
//           width: 280px;
//           max-width: 100%;
//           height: auto;
//           transition: transform 0.5s ease;
//         }

//         .white img:hover {
//           transform: scale(1.05);
//         }

//         /* CENTER LOGO - Desktop Only */
//         .center-logo {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//         //   background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
//           width: 180px;
//           height: 180px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 
//             0 15px 35px rgba(0, 0, 0, 0.1),
//             0 0 0 15px rgba(247, 148, 29, 0.1),
//             0 0 0 30px rgba(237, 28, 36, 0.05);
//           z-index: 10;
//           border: 8px solid #ffffff;
//         }

//         .center-logo img {
//           width: 220px;
//           height: 220px;
//           object-fit: contain;
//         }

//         /* ANIMATIONS */
//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes rotate {
//           from {
//             transform: translate(-50%, -50%) rotate(0deg);
//           }
//           to {
//             transform: translate(-50%, -50%) rotate(360deg);
//           }
//         }

//         .animated-fade-in-left {
//           animation: fadeInLeft 1s ease-out forwards;
//         }

//         .animated-fade-in-right {
//           animation: fadeInRight 1s ease-out forwards;
//           animation-delay: 0.2s;
//           opacity: 0;
//         }

//         .animated-fade-in-left-delayed {
//           animation: fadeInLeft 1s ease-out forwards;
//           animation-delay: 0.4s;
//           opacity: 0;
//         }

//         .animated-fade-in-right-delayed {
//           animation: fadeInRight 1s ease-out forwards;
//           animation-delay: 0.6s;
//           opacity: 0;
//         }

//         .animated-rotate {
//           animation: rotate 20s linear infinite;
//         }

//         /* TABLET RESPONSIVE */
//         @media (max-width: 1024px) {
//           .vm-grid {
//             max-width: 95%;
//             min-height: 600px;
//           }

//           .vm-box {
//             padding: 40px 30px;
//           }

//           .vm-box h2 {
//             font-size: 28px;
//           }

//           .vision-text {
//             font-size: 16px;
//           }

//           .mission-item {
//             font-size: 15px;
//           }

//           .white img {
//             width: 220px;
//           }

//           .center-logo {
//             width: 150px;
//             height: 150px;
//           }

//           .center-logo img {
//             width: 130px;
//             height: 130px;
//           }
//         }

//         /* MOBILE RESPONSIVE */
//         @media (max-width: 768px) {
//           .vm-wrapper {
//             padding: 30px 15px;
//           }

//           .vm-grid {
//             grid-template-columns: 1fr;
//             grid-template-rows: auto auto auto auto;
//             border-radius: 20px;
//             min-height: auto;
//           }

//           .vm-box {
//             padding: 30px 25px;
//             min-height: 300px;
//           }

//           /* Reorder for mobile: Vision -> Vision Image -> Mission Image -> Mission */
//           .vm-grid > :nth-child(1) { grid-row: 1; } /* Vision */
//           .vm-grid > :nth-child(2) { grid-row: 2; } /* Vision Image */
//           .vm-grid > :nth-child(3) { grid-row: 3; } /* Mission Image */
//           .vm-grid > :nth-child(4) { grid-row: 4; } /* Mission */

//           .vm-box h2 {
//             font-size: 26px;
//             text-align: center;
//             margin-bottom: 25px;
//           }

//           .orange h2, .red h2 {
//             text-align: center;
//             padding-left: 0;
//           }

//           .vision-text {
//             font-size: 16px;
//             line-height: 1.6;
//             text-align: center;
//             max-width: 100%;
//           }

//           .mission-list {
//             max-width: 100%;
//           }

//           .mission-item {
//             font-size: 14px;
//             margin-bottom: 15px;
//             align-items: flex-start;
//           }

//           .mission-icon {
//             font-size: 20px;
//             margin-right: 12px;
//             margin-top: 2px;
//           }

//           .white img {
//             width: 200px;
//             max-width: 80%;
//           }

//           /* HIDE CENTER LOGO ON MOBILE */
//           .center-logo {
//             display: none;
//           }

//           /* Reset animations for mobile */
//           .animated-fade-in-left,
//           .animated-fade-in-right,
//           .animated-fade-in-left-delayed,
//           .animated-fade-in-right-delayed {
//             animation: none;
//             opacity: 1;
//           }
//         }

//         /* SMALL MOBILE RESPONSIVE */
//         @media (max-width: 480px) {
//           .vm-wrapper {
//             padding: 20px 10px;
//           }

//           .vm-box {
//             padding: 25px 20px;
//             min-height: 250px;
//           }

//           .vm-box h2 {
//             font-size: 22px;
//             margin-bottom: 20px;
//           }

//           .vision-text {
//             font-size: 15px;
//           }

//           .mission-item {
//             font-size: 13px;
//             margin-bottom: 12px;
//           }

//           .mission-icon {
//             font-size: 18px;
//             margin-right: 10px;
//           }

//           .white img {
//             width: 180px;
//           }
//         }

//         /* LARGE DESKTOP */
//         @media (min-width: 1600px) {
//           .vm-grid {
//             max-width: 1600px;
//             min-height: 800px;
//           }

//           .vm-box {
//             padding: 70px 60px;
//           }

//           .vm-box h2 {
//             font-size: 36px;
//           }

//           .vision-text {
//             font-size: 20px;
//             max-width: 600px;
//           }

//           .mission-item {
//             font-size: 18px;
//           }

//           .white img {
//             width: 320px;
//           }

//           .center-logo {
//             width: 220px;
//             height: 220px;
//           }

//           .center-logo img {
//             width: 190px;
//             height: 190px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default VisionMission;



import React from "react";

// ✅ IMPORT IMAGES
import visionImg from "./Biharimage/vision-logo.png";
import missionImg from "./Biharimage/mission.png";
import logoImg from "./Biharimage/biharlogo.png";
// import madhubaniPattern from "./Biharimage/madhubani-pattern.png"; // Add Madhubani art pattern
// import jharkhandArt from "./Biharimage/jharkhand-art.png"; // Add Jharkhand tribal art

const VisionMission = () => {
  return (
    <div className="vm-wrapper">
      {/* Cultural Header Decoration */}
      <div className="cultural-header">
        <div className="traditional-border-top">
          <span className="border-element">◆</span>
          <span className="border-element">🪷</span>
          <span className="border-element">ॐ</span>
          <span className="border-element">🌺</span>
          <span className="border-element">◆</span>
        </div>
        
        <h1 className="main-title">
          {/* <span className="title-devanagari">दृष्टि</span> */}
          <span className="title-english">VISION &</span>
          <span className="title-highlight">MISSION</span>
          {/* <span className="title-devanagari">लक्ष्य</span> */}
        </h1>
        
        <div className="traditional-border-bottom">
          <span className="border-element">🌸</span>
          <span className="border-element">🪔</span>
          <span className="border-element">卐</span>
          <span className="border-element">🪷</span>
          <span className="border-element">🌸</span>
        </div>
      </div>

      <div className="vm-grid">
        {/* TOP LEFT - VISION */}
        <div className="vm-box orange animated-fade-in-left">
          <div className="cultural-corner top-left">
            <div className="mandala-decoration"></div>
          </div>
          <h2 className="section-title">
            {/* <span className="hindi-title">हमारी दृष्टि</span> */}
            <span className="english-title">OUR VISION</span>
          </h2>
          <p className="vision-text">
            To build <span className="highlight">BiZhar Heritage</span> into a recognized 
            <span className="highlight"> Indian marketplace brand</span> for local products, 
            starting with Bihar & Jharkhand and expanding across India. To establish 
            these regions as globally recognized hubs of heritage, natural and 
            indigenous products.
          </p>
          <div className="traditional-pattern"></div>
        </div>

        {/* TOP RIGHT - VISION IMAGE */}
        <div className="vm-box white animated-fade-in-right">
          <div className="image-container cultural-frame">
            <img src={visionImg} alt="Vision" className="vision-image" />
            <div className="frame-decoration"></div>
          </div>
          <div className="cultural-quote">
            <p>"स्वदेशी उत्पाद, वैश्विक पहचान"</p>
            <p className="quote-translation">"Local Products, Global Recognition"</p>
          </div>
        </div>

        {/* BOTTOM LEFT - MISSION IMAGE */}
        <div className="vm-box white animated-fade-in-left-delayed">
          <div className="image-container tribal-frame">
            <img src={missionImg} alt="Mission" className="mission-image" />
            <div className="tribal-pattern"></div>
          </div>
          <div className="cultural-quote">
            <p>"माटी की खुशबू, हुनर की कहानी"</p>
            <p className="quote-translation">"Fragrance of Soil, Story of Skill"</p>
          </div>
        </div>

        {/* BOTTOM RIGHT - MISSION */}
        <div className="vm-box red animated-fade-in-right-delayed">
          <div className="cultural-corner bottom-right">
            <div className="rangoli-decoration"></div>
          </div>
          <h2 className="section-title">
            {/* <span className="hindi-title">हमारा लक्ष्य</span> */}
            <span className="english-title">OUR MISSION</span>
          </h2>
          <div className="mission-list">
            <div className="mission-item">
              <span className="mission-icon">🪷</span>
              <span>To create <strong>scalable market access</strong> for local and regional products</span>
            </div>
            <div className="mission-item">
              <span className="mission-icon">🌟</span>
              <span>To build a <strong>trusted, high-impact marketplace brand</strong></span>
            </div>
            <div className="mission-item">
              <span className="mission-icon">🌍</span>
              <span>To help local products reach <strong>national and global customers</strong></span>
            </div>
            <div className="mission-item">
              <span className="mission-icon">🗺️</span>
              <span>To expand state-wise with <strong>authentic regional offerings</strong></span>
            </div>
            <div className="mission-item">
              <span className="mission-icon">🤝</span>
              <span>To ensure <strong>fair pricing</strong> and maximum benefit to producers</span>
            </div>
          </div>
          <div className="traditional-pattern"></div>
        </div>

        {/* CENTER LOGO WITH CULTURAL ELEMENTS */}
        <div className="center-logo animated-rotate">
          <div className="logo-outer-ring">
            <div className="cultural-motifs">
              <span>🌾</span>
              <span>🪡</span>
              <span>🎨</span>
              <span>🧵</span>
            </div>
          </div>
          <div className="logo-inner-ring">
            <img src={logoImg} alt="BiZhar Heritage Logo" className="logo-img" />
          </div>
          <div className="logo-text-ring">
            {/* <span className="hindi-text">बिहार झारखंड विरासत</span> */}
            {/* <span className="english-text">BIHAR JHARKHAND HERITAGE</span> */}
          </div>
        </div>
      </div>

      {/* OUR THOUGHT SECTION */}
      {/* <div className="our-thought-section">
        <div className="thought-header">
          <h3> Our Thought</h3>
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-icon">🪔</div>
            <div className="divider-line"></div>
          </div>
        </div>
        
        <div className="thought-content">
          <div className="thought-item">
            <div className="thought-icon">🌱</div>
            <p>Many local people create excellent products, but they do not get proper recognition, fair markets, or the right income.</p>
          </div>
          
          <div className="thought-item">
            <div className="thought-icon">🚜</div>
            <p>We work directly on the ground to help local producers reach the right platforms and customers.</p>
          </div>
          
          <div className="thought-item">
            <div className="thought-icon">⚖️</div>
            <p>Our aim is to give them fair value, fair prices, and respectful opportunities to grow.</p>
          </div>
          
          <div className="thought-item">
            <div className="thought-icon">💪</div>
            <p>When local people become strong and self-reliant, the country grows with them.</p>
          </div>
          
          <div className="thought-item">
            <div className="thought-icon">🌏</div>
            <p>With the right support, local and regional products from India can succeed in global markets.</p>
          </div>
        </div>
        
        <div className="thought-footer">
          <p className="sanskrit-quote">
            
            <span className="translation">"The World is One Family"</span>
          </p>
        </div>
      </div> */}

      {/* INTERNAL CSS */}
      <style jsx>{`
        .vm-wrapper {
          width: 100%;
          padding: 20px 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #fefaf0 0%, #fff5e6 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Cultural Header Styles */
        .cultural-header {
          width: 100%;
          max-width: 1200px;
          text-align: center;
          margin-bottom: 50px;
        }

        .traditional-border-top,
        .traditional-border-bottom {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin: 10px 0;
        }

        .border-element {
          font-size: 24px;
          color: #8b0000;
          animation: float 3s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        // .border-element:nth-child(odd) {
        //   color: #d4af37;
        // }

        .main-title {
          font-size: 42px;
          color: #8b0000;
          margin: 20px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .title-devanagari {
          font-size: 36px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          color: #d4af37;
        }

        .title-english {
          color: #8b0000;
          font-weight: 700;
        }

        .title-highlight {
          color: #000;
          background: linear-gradient(45deg, #d4af37, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        /* Main Grid Layout */
        .vm-grid {
          width: 100%;
          max-width: 1200px;
          margin-bottom: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          position: relative;
          border-radius: 40px;
          overflow: hidden;
          // box-shadow: 0 20px 60px rgba(139, 0, 0, 0.1);
          min-height: 750px;
          background: #fff;
          // border: 2px solid #d4af37;
        }

        .vm-box {
          padding: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Vision Box */
        .orange {
          background: linear-gradient(135deg, #8b0000 0%, #a52a2a 100%);
          position: relative;
        }

        .orange::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 50.42L50.42 54 6 9.58 9.58 6l44.42 44.42z' fill='%23d4af37' fill-opacity='0.1'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        /* Mission Box */
        .red {
          background: linear-gradient(135deg, #a52a2a 0%, #8b0000 100%);
          position: relative;
        }

        .red::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 6l6 18h18l-15 12 6 18-15-12-15 12 6-18L6 24h18l6-18z' fill='%23ffd700' fill-opacity='0.1'/%3E%3C/svg%3E");
          opacity: 0.3;
        }

        .white {
          background: #fffaf0;
        }

        /* Cultural Decorations */
        .cultural-corner {
          position: absolute;
          width: 100px;
          height: 100px;
          overflow: hidden;
        }

        .top-left {
          top: 0;
          left: 0;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
        }

        .mandala-decoration {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, transparent 50%, #d4af37 51%);
          opacity: 0.2;
          transform: rotate(45deg);
          top: -50px;
          left: -50px;
        }

        .rangoli-decoration {
          position: absolute;
          width: 150px;
          height: 150px;
          background: conic-gradient(from 0deg, #ffd700, #d4af37, #ffd700);
          opacity: 0.2;
          border-radius: 50%;
          bottom: -75px;
          right: -75px;
        }

        /* Section Titles */
        .section-title {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 30px;
          width: 100%;
        }

        .hindi-title {
          font-size: 28px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          color: #ffd700;
          font-weight: 600;
        }

        .english-title {
          color: #fff;
          font-size: 32px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        /* Typography */
        .vision-text {
          color: #fff;
          font-size: 18px;
          line-height: 1.8;
          max-width: 500px;
          position: relative;
          z-index: 2;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-weight: 300;
        }

        .highlight {
          color: #ffd700;
          font-weight: 600;
        }

        .mission-list {
          width: 100%;
          max-width: 500px;
        }

        .mission-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          color: #fff;
          font-size: 16px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
          font-weight: 300;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          padding: 12px 20px;
          border-radius: 10px;
          border-left: 4px solid #ffd700;
        }

        .mission-icon {
          font-size: 24px;
          margin-right: 15px;
          font-weight: bold;
          color: #ffd700;
          min-width: 30px;
        }

        /* Images and Frames */
        .image-container {
          position: relative;
          padding: 20px;
        }

        .cultural-frame {
          border: 3px double #d4af37;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(139, 0, 0, 0.2);
        }

        .tribal-frame {
          border: 3px dashed #8b0000;
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
        }

        .frame-decoration {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid #ffd700;
          border-radius: 25px;
          pointer-events: none;
        }

        .white img {
          width: 280px;
          max-width: 100%;
          height: auto;
          transition: transform 0.5s ease;
        }

        .white img:hover {
          transform: scale(1.08) rotate(2deg);
        }

        .cultural-quote {
          margin-top: 25px;
          font-style: italic;
          color: #8b0000;
        }

        .cultural-quote p:first-child {
          font-size: 20px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          color: #d4af37;
          margin-bottom: 5px;
        }

        .quote-translation {
          font-size: 14px;
          color: #666;
        }

        /* CENTER LOGO - Enhanced */
        .center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 220px;
          z-index: 10;
        }

        .logo-outer-ring {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid #d4af37;
          border-radius: 50%;
          animation: pulse-ring 4s ease-in-out infinite;
        }

        .cultural-motifs {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: rotate-motifs 20s linear infinite;
        }

        .cultural-motifs span {
          position: absolute;
          font-size: 24px;
          animation: float-motif 3s ease-in-out infinite;
        }

        .cultural-motifs span:nth-child(1) { top: 0; left: 50%; animation-delay: 0s; }
        .cultural-motifs span:nth-child(2) { top: 50%; right: 0; animation-delay: 0.5s; }
        .cultural-motifs span:nth-child(3) { bottom: 0; left: 50%; animation-delay: 1s; }
        .cultural-motifs span:nth-child(4) { top: 50%; left: 0; animation-delay: 1.5s; }

        .logo-inner-ring {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          // background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          border: 5px solid #8b0000;
        }

        .logo-img {
          width: 150px;
          height: 150px;
          object-fit: contain;
        }

        .logo-text-ring {
          position: absolute;
          top: -30px;
          left: -30px;
          right: -30px;
          bottom: -30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          animation: rotate-text 40s linear infinite;
        }

        .hindi-text, .english-text {
          position: absolute;
          color: #8b0000;
          font-weight: bold;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hindi-text {
          font-family: 'Noto Sans Devanagari', sans-serif;
          transform: rotate(90deg);
        }

        .english-text {
          transform: rotate(-90deg);
        }

        /* Our Thought Section */
        .our-thought-section {
          width: 100%;
          max-width: 1200px;
          background: #fff5e6;
          border-radius: 30px;
          padding: 40px;
          margin-top: 40px;
          box-shadow: 0 15px 50px rgba(139, 0, 0, 0.1);
          border: 2px solid #ffd700;
        }

        .thought-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .thought-header h3 {
          font-size: 32px;
          color: #8b0000;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .divider-line {
          width: 150px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .divider-icon {
          font-size: 24px;
          color: #d4af37;
          animation: glow 2s ease-in-out infinite;
        }

        .thought-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }

        .thought-item {
          background: #8b0000;
          padding: 25px;
          border-radius: 15px;
          border-left: 5px solid #ffd700;
          box-shadow: 0 5px 20px rgba(139, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .thought-item:hover {
          transform: translateY(-5px);
        }

        .thought-icon {
          font-size: 36px;
          margin-bottom: 15px;
          color: #ffd700;
        }

        .thought-item p {
          color: white;
          line-height: 1.6;
          font-size: 16px;
        }

        .thought-footer {
          text-align: center;
          padding-top: 30px;
          border-top: 2px dashed #d4af37;
        }

        .sanskrit-quote {
          font-size: 28px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          color: #8b0000;
          line-height: 1.4;
        }

        .translation {
          display: block;
          font-size: 16px;
          color: #666;
          font-style: italic;
          margin-top: 10px;
        }

        /* ANIMATIONS */
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes rotate-motifs {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float-motif {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.2); }
        }

        @keyframes rotate-text {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animated-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animated-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animated-fade-in-left-delayed {
          animation: fadeInLeft 1s ease-out forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animated-fade-in-right-delayed {
          animation: fadeInRight 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .animated-rotate {
          animation: rotate 20s linear infinite;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 1200px) {
          .vm-grid {
            max-width: 95%;
            min-height: 650px;
          }
          
          .center-logo {
            width: 180px;
            height: 180px;
          }
          
          .logo-inner-ring {
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
          }
        }

        @media (max-width: 1024px) {
          .main-title {
            font-size: 36px;
            flex-direction: column;
            gap: 10px;
          }
          
          .vm-box {
            padding: 30px;
          }
          
          .section-title {
            margin-bottom: 20px;
          }
          
          .hindi-title {
            font-size: 24px;
          }
          
          .english-title {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .vm-wrapper {
            padding: 20px 15px;
          }

          .vm-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            border-radius: 25px;
            min-height: auto;
          }

          .vm-box {
            padding: 30px 20px;
            min-height: 300px;
          }

          /* Mobile reordering */
          .vm-grid > :nth-child(1) { grid-row: 1; }
          .vm-grid > :nth-child(2) { grid-row: 2; }
          .vm-grid > :nth-child(3) { grid-row: 3; }
          .vm-grid > :nth-child(4) { grid-row: 4; }

          .center-logo {
            display: none;
          }

          .our-thought-section {
            padding: 30px 20px;
          }

          .thought-content {
            grid-template-columns: 1fr;
          }

          /* Reset animations for mobile */
          .animated-fade-in-left,
          .animated-fade-in-right,
          .animated-fade-in-left-delayed,
          .animated-fade-in-right-delayed {
            animation: none;
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 28px;
          }
          
          .title-devanagari {
            font-size: 24px;
          }
          
          .vm-box {
            padding: 25px 15px;
          }
          
          .hindi-title {
            font-size: 20px;
          }
          
          .english-title {
            font-size: 24px;
          }
          
          .vision-text,
          .mission-item {
            font-size: 14px;
          }
          
          .mission-icon {
            font-size: 20px;
            margin-right: 10px;
          }
        }

        @media (min-width: 1600px) {
          .vm-grid {
            max-width: 1400px;
            min-height: 850px;
          }
          
          .vm-box {
            padding: 50px;
          }
          
          .center-logo {
            width: 260px;
            height: 260px;
          }
        }
      `}</style>
    </div>
   
  );
};

export default VisionMission;