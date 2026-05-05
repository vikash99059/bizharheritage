// import React from "react";
// import "./SupportivePillars.css";

// import img1 from "./vendorimage/ashasingh.jpeg";
// import img2 from "./vendorimage/minakchmi.jpeg";
// import img3 from "./vendorimage/nidhiu.jpeg";
// import img4 from "./vendorimage/default.webp";

// const slides = [
//   {
//     name: "Aastha Singh Rajput",
//     role: "Artist Outreach & Medical Professional (MBBS)",
//     desc: "Aastha Singh Rajput supports BIZHAR Heritage by helping connect artists across regions while actively contributing to community engagement. Alongside this, she is a qualified medical doctor (MBBS), bringing compassion, leadership, and social responsibility to both healthcare and heritage initiatives.",
//     img: img1
//   },
//   {
//     name: "Minakshi Upadhyay",
//     role: "Artist Support – Ranchi & Delhi",
//     desc: "Minakshi Upadhyay supports BIZHAR Heritage by helping onboard artists in Ranchi and Delhi. Her role focuses on expanding our creative network and strengthening connections with artists across regions. She is also a social media influencer, helping amplify our artists’ voices and promote heritage art to wider digital audiences.",
//     img: img2
//   },
//   {
//     name: "Niti Gyan Pathak",
//     role: "Artist Support Coordinator",
//     desc: "Niti Gyan Pathak supports BIZHAR Heritage by helping onboard new artists and strengthening connections within the artisan community. Her efforts contribute to expanding our creative network and empowering more artists to join the heritage movement.",
//     img: img3
//   },
//   {
//     name: "Seema Singh Rajput",
//     role: "Artist Support Coordinator | MCA | Artist",
//     desc: "Seema Singh Rajput manages website operations and supports digital content at BIZHAR Heritage. Alongside her technical role, she is also a professional artist and holds a Master in Computer Applications (MCA). With her blend of creativity and technical expertise, she helps strengthen our digital presence while supporting our artistic mission.",
//     img: img4
//   }
// ];


// const SupportivePillars = () => {
//   return (
//     <section className="pillar-section">
//       <h2 className="pillar-heading">
//         SUPPORTIVE PILLARS OF <span style={{color:"black"}}>BIZHAR HERITAGE</span>
//       </h2>

//       <div className="pillar-carousel">
//         <div className="pillar-track">
//           {[...slides, ...slides].map((item, i) => (
//             <div className="pillar-slide" key={i}>
//               <div
//                 className="pillar-card"
//                 style={{ backgroundImage: `url(${item.img})` }}
//               >
//                 <div className="pillar-overlay">
//                   <h3>{item.name}</h3>
//                   <h4>{item.role}</h4>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SupportivePillars;


// import React, { useEffect, useRef, useState } from 'react';
// import img1 from "./vendorimage/ashasingh.jpeg";
// import img2 from "./vendorimage/minakchmi.jpeg";
// import img3 from "./vendorimage/nidhiu.jpeg";
// import img4 from "./Productimage/prygya.jpeg";
// import img5 from "./vendorimage/resmi.jpeg";

// const coaches = [
//   {
//     name: "Aastha Singh Rajput",
//     title: "Artist Outreach & Medical Professional (MBBS)",
//     image: img1
//   },
//   {
//     name: "Minakshi Upadhyay",
//     title: "Artist Support – Ranchi & Delhi",
//     image: img2
//   },
//   {
//     name: "Niti Gyan Pathak",
//     title: "Artist Support Coordinator",
//     image: img3
//   },
//   {
//     name: "Pragya Pathak",
//     title: "Artist Support",
//     image: img4
//   },
//   {
//     name: "Reshmi Singh",
//     title: "Artist Support",
//     image: img5
//   }
// ];

// const CoachProfiles = () => {
//   const [isMobile, setIsMobile] = useState(false);
  
//   // Check if mobile view
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
    
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
    
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // For mobile: show as grid, for desktop: continuous scroll
//   // Duplicate array for seamless infinite scrolling on desktop
//   const duplicatedCoachesDesktop = [...coaches, ...coaches, ...coaches];

//   return (
//     <div className="coach-section">
//       <div className="coach-container">
//         <h2 className="coach-heading">
//           <span className="heading-dark"> Supportive Pillars Of </span>
//           <span className="heading-gold">Bizhar Heritage</span>
//         </h2>

//         {/* Desktop: Continuous Scroll - Mobile: Grid View */}
//         {isMobile ? (
//           <div className="mobile-grid">
//             {coaches.map((card, index) => (
//               <div key={index} className="mobile-card">
//                 <h4 className="mobile-name">{card.name}</h4>
//                 <p className="mobile-title">{card.title}</p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="marquee-row">
//             <div className="marquee-wrapper scroll-left">
//               <div className="marquee-content">
//                 {duplicatedCoachesDesktop.map((card, idx) => (
//                   <div key={`coach-${idx}`} className="marquee-card">
//                     <h4 className="coach-name">{card.name}</h4>
//                     <p className="coach-title">{card.title}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         /* Section Styles */
//         .coach-section {
//           width: 100%;
//           padding: 10px 20px;
//           // background-color: #f7f7f7;
//           overflow-x: hidden;
//         }

//         .coach-container {
//           max-width: 1350px;
//           margin: 0 auto;
//           width: 100%;
//         }

//         .coach-heading {
//           text-align: center;
//           font-size: 32px;
//           font-weight: 700;
//           margin-bottom: 50px;
//           font-family: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
//         }

//         .heading-dark {
//           color: #333;
//         }

//         .heading-gold {
//           color: #eaae5e;
//           border-bottom: 3px solid #eaae5e;
//           padding-bottom: 5px;
//         }

//         /* Desktop Marquee Styles */
//         .marquee-row {
//           width: 100%;
//           overflow: hidden;
//           position: relative;
//         }

//         .marquee-wrapper {
//           overflow: hidden;
//           width: 100%;
//         }

//         .marquee-content {
//           display: flex;
//           gap: 25px;
//           width: max-content;
//         }

//         /* Left to right animation */
//         .scroll-left .marquee-content {
//           animation: scrollLeft 25s linear infinite;
//         }

//         /* Pause animation on hover */
//         .marquee-wrapper:hover .marquee-content {
//           animation-play-state: paused;
//         }

//         @keyframes scrollLeft {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }

//         /* Card styling - only name and designation */
//         .marquee-card {
//           background: #fff;
//           padding: 20px 30px;
//           border-radius: 12px;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
//           text-align: center;
//           min-width: 220px;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(0, 0, 0, 0.05);
//         }

//         .marquee-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
//           background: #fffaf5;
//         }

//         .coach-name {
//           margin: 0 0 8px 0;
//           font-size: 18px;
//           font-weight: 600;
//           color: #222;
//         }

//         .coach-title {
//           margin: 0;
//           font-size: 13px;
//           color: #eaae5e;
//           font-weight: 500;
//           letter-spacing: 0.3px;
//         }

//         /* Mobile Grid Styles */
//         .mobile-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//           gap: 20px;
//           width: 100%;
//         }

//         .mobile-card {
//           background: #fff;
//           padding: 20px;
//           border-radius: 12px;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
//           text-align: center;
//           transition: all 0.3s ease;
//           border: 1px solid rgba(0, 0, 0, 0.05);
//         }

//         .mobile-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
//           background: #fffaf5;
//         }

//         .mobile-name {
//           margin: 0 0 8px 0;
//           font-size: 16px;
//           font-weight: 600;
//           color: #222;
//         }

//         .mobile-title {
//           margin: 0;
//           font-size: 12px;
//           color: #eaae5e;
//           font-weight: 500;
//           letter-spacing: 0.3px;
//         }

//         /* Responsive Breakpoints */
//         @media (max-width: 1200px) {
//           .coach-container {
//             max-width: 1140px;
//           }
//         }

//         @media (max-width: 992px) {
//           .coach-section {
//             padding: 40px 15px;
//           }
          
//           .coach-heading {
//             font-size: 28px;
//             margin-bottom: 40px;
//           }
          
//           .marquee-card {
//             padding: 16px 24px;
//             min-width: 200px;
//           }
          
//           .coach-name {
//             font-size: 16px;
//           }
          
//           .coach-title {
//             font-size: 12px;
//           }
          
//           .scroll-left .marquee-content {
//             animation-duration: 20s;
//           }
//         }

//         @media (max-width: 768px) {
//           .coach-section {
//             padding: 30px 15px;
//           }
          
//           .coach-heading {
//             font-size: 24px;
//             margin-bottom: 30px;
//           }
          
//           .mobile-grid {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }
          
//           .mobile-card {
//             padding: 16px;
//           }
          
//           .mobile-name {
//             font-size: 15px;
//           }
          
//           .mobile-title {
//             font-size: 11px;
//           }
//         }

//         @media (max-width: 576px) {
//           .coach-section {
//             padding: 25px 12px;
//           }
          
//           .coach-heading {
//             font-size: 20px;
//             margin-bottom: 25px;
//           }
          
//           .heading-gold {
//             border-bottom: 2px solid #eaae5e;
//             padding-bottom: 3px;
//           }
          
//           .mobile-card {
//             padding: 14px;
//           }
          
//           .mobile-name {
//             font-size: 14px;
//             margin-bottom: 6px;
//           }
          
//           .mobile-title {
//             font-size: 10px;
//           }
//         }

//         @media (max-width: 480px) {
//           .coach-heading {
//             font-size: 18px;
//           }
          
//           .mobile-name {
//             font-size: 13px;
//           }
          
//           .mobile-title {
//             font-size: 9px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CoachProfiles;





// import React, { useEffect, useState } from "react";
// import img1 from "./vendorimage/ashasingh.jpeg";
// import img2 from "./vendorimage/minakchmi.jpeg";
// import img3 from "./vendorimage/nidhiu.jpeg";
// import img4 from "./Productimage/prygya.jpeg";
// import img5 from "./vendorimage/resmi.jpeg";

// const coaches = [
//   {
//     name: "Aastha Singh Rajput",
//     title: "Artist Outreach & Medical Professional (MBBS)",
//     image: img1,
//   },
//   {
//     name: "Minakshi Upadhyay",
//     title: "Artist Support – Ranchi & Delhi",
//     image: img2,
//   },
//   {
//     name: "Niti Gyan Pathak",
//     title: "Artist Support Coordinator",
//     image: img3,
//   },
//   {
//     name: "Pragya Pathak",
//     title: "Artist Support",
//     image: img4,
//   },
//   {
//     name: "Reshmi Singh",
//     title: "Artist Support",
//     image: img5,
//   },
// ];

// const CoachProfiles = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const duplicated = [...coaches, ...coaches, ...coaches];

//   return (
//     <div className="coach-section">
//       <div className="coach-container">
//         <h2 className="coach-heading">
//           <span className="heading-dark">Supportive Pillars Of </span>
//           <span className="heading-gold">Bizhar Heritage</span>
//         </h2>

//         {isMobile ? (
//           <div className="mobile-grid">
//             {coaches.map((card, index) => (
//               <div key={index} className="mobile-card">
//                 <img src={card.image} className="mobile-img" alt="" />
//                 <div>
//                   <h4>{card.name}</h4>
//                   <p>{card.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="marquee-wrapper">
//             <div className="marquee-content">
//               {duplicated.map((card, i) => (
//                 <div key={i} className="marquee-card">
//                   <img src={card.image} className="coach-img" alt="" />
//                   <div className="coach-text">
//                     <h4>{card.name}</h4>
//                     <p>{card.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         .coach-section {
//           width: 100%;
//           padding: 40px 20px;
//           overflow: hidden;
//         }

//         .coach-container {
//           max-width: 1450px;
//           margin: auto;
//         }

//         .coach-heading {
//           text-align: center;
//           font-size: 28px;
//           margin-bottom: 40px;
//         }

//         .heading-dark {
//           color: #333;
//         }

//         .heading-gold {
//           color: #eaae5e;
//           border-bottom: 2px solid #eaae5e;
//         }

//         /* MARQUEE */
//         .marquee-wrapper {
//           overflow: hidden;
//         }

//         .marquee-content {
//           display: flex;
//           gap: 20px;
//           animation: scroll 20s linear infinite;
//         }

//         .marquee-wrapper:hover .marquee-content {
//           animation-play-state: paused;
//         }

//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-33.33%); }
//         }

//         /* CARD */
//         .marquee-card {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           background: #fff;
//           padding: 12px 18px;
//           border-radius: 40px;
//           min-width: 260px;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.08);
//           transition: 0.3s;
//         }

//         .marquee-card:hover {
//           transform: translateY(-3px);
//           background: #fffaf5;
//         }

//         /* IMAGE */
//         .coach-img {
//           width: 45px;
//           height: 45px;
//           border-radius: 50%;
//           object-fit: cover;
//           border: 2px solid #eaae5e;
//         }

//         .coach-text h4 {
//           margin: 0;
//           font-size: 15px;
//           font-weight: 600;
//         }

//         .coach-text p {
//           margin: 0;
//           font-size: 12px;
//           color: #eaae5e;
//         }

//         /* MOBILE */
//         .mobile-grid {
//           display: grid;
//           gap: 15px;
//         }

//         .mobile-card {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           background: #fff;
//           padding: 12px;
//           border-radius: 12px;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.08);
//         }

//         .mobile-img {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .mobile-card h4 {
//           margin: 0;
//           font-size: 14px;
//         }

//         .mobile-card p {
//           margin: 0;
//           font-size: 11px;
//           color: #eaae5e;
//         }

//         @media (max-width: 768px) {
//           .marquee-content {
//             animation: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CoachProfiles;




import React, { useEffect, useState } from "react";
import img1 from "./vendorimage/ashasingh.jpeg";
import img2 from "./vendorimage/minakchmi.jpeg";
import img3 from "./vendorimage/nidhiu.jpeg";
import img4 from "./Productimage/prygya.jpeg";
import img5 from "./vendorimage/resmi.jpeg";
import img7 from "./vendorimage/palvi.jpeg"
import img6 from "./Teamimage/sukriti.jpeg"

const coaches = [
  {
    name: "Aastha Singh Rajput",
    title: "Artist Outreach & Medical Professional (MBBS)",
    image: img1,
  },
  {
    name: "Minakshi Upadhyay",
    title: "Artist Support – Ranchi & Delhi",
    image: img2,
  },
  {
    name: "Niti Gyan Pathak",
    title: "Artist Support Coordinator",
    image: img3,
  },
  {
    name: "Pragya Pathak",
    title: "Artist Support",
    image: img4,
  },
  // {
  //   name: "Reshmi Singh",
  //   title: "Artist Support",
  //   image: img5,
  // },
  
  
  {
    name: "Pallavi Singh",
    title: "Artist Support",
    image: img7, // Using existing image, replace with actual image if available
  },
  {
    name: "Sukriti Singh Rajput",
    title: "Artist Support",
    image: img6, // Using existing image, replace with actual image if available
  },
];

const CoachProfiles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const duplicated = [...coaches, ...coaches, ...coaches];

  return (
    <div className="coach-section">
      <div className="coach-container">
        <h2 className="coach-heading">
          <span className="heading-dark">Crafting the Legacy </span>
          <span className="heading-gold">Bizhar Heritage</span>
        </h2>

       

        {isMobile ? (
          <div className="mobile-grid">
            {coaches.map((card, index) => (
              <div key={index} className="mobile-card">
                <img src={card.image} className="mobile-img" alt="" />
                <div className="mobile-card-content">
                  <h4>{card.name}</h4>
                  <p>{card.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {duplicated.map((card, i) => (
                <div key={i} className="marquee-card">
                  <img src={card.image} className="coach-img" alt="" />
                  <div className="coach-text">
                    <h4>{card.name}</h4>
                    <p>{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .coach-section {
          width: 100%;
          padding: 40px 20px;
          overflow: hidden;
        }

        .coach-container {
          max-width: 1450px;
          margin: auto;
        }

        .coach-heading {
          text-align: center;
          font-size: 28px;
          margin-bottom: 40px;
        }

        .heading-dark {
          color: #333;
        }

        .heading-gold {
          color: #eaae5e;
          border-bottom: 2px solid #eaae5e;
        }

        /* MARQUEE */
        .marquee-wrapper {
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          gap: 20px;
          animation: scroll 20s linear infinite;
        }

        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        /* CARD */
        .marquee-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          padding: 12px 18px;
          border-radius: 40px;
          min-width: 260px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .marquee-card:hover {
          transform: translateY(-3px);
          background: #fffaf5;
        }

        /* IMAGE */
        .coach-img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #eaae5e;
        }

        .coach-text h4 {
          margin: 0;
          font-size: 15px;
          font-weight: 600;
        }

        .coach-text p {
          margin: 0;
          font-size: 12px;
          color: #eaae5e;
        }

        /* MOBILE GRID - 3 COLUMNS */
        .mobile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .mobile-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #fff;
          padding: 15px 10px;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .mobile-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }

        .mobile-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #eaae5e;
          margin-bottom: 10px;
        }

        .mobile-card-content {
          width: 100%;
        }

        .mobile-card h4 {
          margin: 5px 0;
          font-size: 13px;
          font-weight: 600;
          color: #333;
          line-height: 1.3;
        }

        .mobile-card p {
          margin: 0;
          font-size: 10px;
          color: #eaae5e;
          line-height: 1.3;
        }

        /* Small mobile devices */
        @media (max-width: 480px) {
          .mobile-grid {
            gap: 10px;
          }
          
          .mobile-img {
            width: 55px;
            height: 55px;
          }
          
          .mobile-card h4 {
            font-size: 11px;
          }
          
          .mobile-card p {
            font-size: 9px;
          }
          
          .mobile-card {
            padding: 12px 8px;
          }
        }

        @media (max-width: 768px) {
          .marquee-content {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default CoachProfiles;