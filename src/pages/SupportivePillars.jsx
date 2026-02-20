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


import React, { useEffect, useRef, useState } from 'react';
import img1 from "./vendorimage/ashasingh.jpeg";
import img2 from "./vendorimage/minakchmi.jpeg";
import img3 from "./vendorimage/nidhiu.jpeg";
import img4 from "./Productimage/prygya.jpeg";
import img5 from "./vendorimage/resmi.jpeg";

const coaches = [
  {
    name: "Aastha Singh Rajput",
    title: "Artist Outreach & Medical Professional (MBBS)",
    subheading: "Aastha Singh Chauhan is a Research Scholar at People’s University, Bhopal, with research interests in infectious diseases and millets as nutraceutical resources. As a volunteer and active member with Bizhar Heritage, she contributes to promoting the rich art, culture, and heritage of Bihar and Jharkhand, aiming to create meaningful cultural impact through community engagement and awareness.",
    image: img1
  },
  {
    name: "Minakshi Upadhyay",
    title: "Artist Support – Ranchi & Delhi",
    subheading: "Minakshi Upadhyay supports BIZHAR Heritage by helping onboard artists in Ranchi and Delhi. Her role focuses on expanding our creative network and strengthening connections with artists across regions. She is also a social media influencer, helping amplify our artists' voices and promote heritage art to wider digital audiences.",
    image: img2
  },
  {
    name: "Niti Gyan Pathak",
    title: "Artist Support Coordinator",
    subheading: "Niti Gyan Pathak supports BIZHAR Heritage by helping onboard new artists and strengthening connections within the artisan community. Her efforts contribute to expanding our creative network and empowering more artists to join the heritage movement.",
    image: img3
  },
  {
    name: "Pragya Pathak ",
    title: "Artist Support",
    subheading: "Pragya Pathak is a dedicated member of BiZhar Heritage who supports our artists and helps connect them with opportunities. She assists in adding new artists to the platform and also helps in bringing product orders. Her efforts play an important role in promoting handmade art and supporting local talent..",
    image: img4
  },
  {
    name: "Reshmi Singh ",
    title: "Artist Support",
    subheading: "Reshmi Singh is a dedicated member of BiZhar Heritage who supports our artists and helps connect them with opportunities. She assists in adding new artists to the platform and also helps in bringing product orders. Her efforts play an important role in promoting handmade art and supporting local talent.",
    image: img5
  }
];

const CoachProfiles = () => {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auto-scroll only for desktop
  useEffect(() => {
    if (isMobile) return;
    
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    let scrollAmount = 0;
    const speed = 0.5;
    let animationFrameId;

    const step = () => {
      scrollAmount += speed;
      if (scrollAmount >= carousel.scrollWidth / 1) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  // For mobile: show regular cards, for desktop: show carousel
  const displayCoaches = isMobile ? coaches : [...coaches, ...coaches];

  return (
    <div style={styles.wrapper}>
      <p style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: '900',
          margin: '8px 0',
          marginTop: '-30px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
        }}>
          <span style={{ color: 'black' }}>SUPPORTIVE PILLARS OF </span>
          <span style={{ color: '#8b0000' }}> BIZHAR HERITAGE</span>
        </p>

      {/* Desktop: Carousel, Mobile: Grid */}
      {isMobile ? (
        <div className="mobile-grid">
          {displayCoaches.map((card, index) => (
            <div key={index} className="mobile-card">
              <div className="mobile-card-content">
                {/* Circle image at top for mobile */}
                <div className="mobile-image-container">
                  <img src={card.image} alt={card.name} className="mobile-card-img" />
                </div>
                <div className="mobile-text-content">
                  <h3 style={{fontSize:'20px',color:'#8b0000',fontFamily:'sans-serif', marginBottom: '5px'}}>{card.name}</h3>
                  <p style={{color: '#000', fontSize: '14px', marginBottom: '8px'}}>{card.title}</p>
                  <p style={{color:'black', fontSize:'14px', lineHeight: '1.4', textAlign: 'left', fontFamily: 'sans-serif', marginTop: '10px'}}>
                    {card.subheading}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div ref={carouselRef} className="carousel">
          {displayCoaches.map((card, index) => (
            <div key={index} style={styles.card} className="card">
              <img src={card.image} alt={card.name} className="card-img" />
              <div className="text-overlay">
                <button className="info-button">
                  <div className="info-header">
                    <h3 style={{fontSize:'20px',color:'#8b0000',fontFamily:'sans-serif', marginBottom: '5px'}}>{card.name}</h3>
                    <p style={{color: '#000', fontSize: '14px', marginBottom: '8px'}}>{card.title}</p>
                    <div className="info-details">
                      <p style={{color:'black', fontSize:'14px', lineHeight: '1.4', textAlign: 'left', fontFamily: 'sans-serif'}}>
                        {card.subheading}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>{`
        /* Desktop Carousel Styles */
        .carousel {
          display: flex;
          overflow-x: hidden;
          gap: 30px;
          user-select: none;
          cursor: grab;
          width: 100%;
        
          margin: auto;
          max-width: 1400px;
          padding: 20px 0;
        }

        .card {
          width: 280px;
          height: 390px;
          position: relative;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 15px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.15);
          background: white;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.5s ease;
          z-index: 1;
        }

        .text-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgb(255, 255, 255);
          color: blue;
          text-align: center;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          z-index: 2;
          box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
        }

        .info-button {
          background-color: transparent;
          border: none;
          color: inherit;
          width: 100%;
          padding: 15px;
          cursor: pointer;
          border-radius: 10px;
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          max-height: 80px;
        }

        .card:hover .info-button {
          max-height: 250px;
          padding: 20px 15px;
        }

        .info-header h3 {
          font-size: 18px;
          margin: 0;
          font-weight: bold;
          color: #2c3e50;
        }

        .info-header p {
          font-size: 12px;
          margin: 2px 0 8px 0;
          color: #666;
        }

        .info-details {
          opacity: 0;
          transition: opacity 0.5s ease 0.2s;
          text-align: left;
          margin-top: 8px;
          max-height: 0;
          overflow: hidden;
        }

        .card:hover .info-details {
          opacity: 1;
          max-height: 150px;
        }

        /* Image moves to top-left circle on hover */
        .card:hover .card-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          top: 20px;
          left: 20px; /* Changed from center to top-left */
          transform: translateX(0); /* Removed centering transform */
          border: 3px solid orange;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        /* Mobile Grid Styles */
        .mobile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        .mobile-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .mobile-card:hover {
          transform: translateY(-5px);
        }

        .mobile-card-content {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .mobile-image-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .mobile-card-img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid orange;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .mobile-text-content {
          text-align: center;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mobile-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            padding: 10px;
          }
          
          .mobile-card {
            margin-bottom: 20px;
          }
          
          .mobile-card-img {
            width: 100px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .mobile-grid {
            padding: 5px;
          }
          
          .mobile-card-content {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    overflow: 'hidden',
    padding: '20px',
     maxWidth: "1200px",   // ✅ FIXED
    margin: "0 auto",
   
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '300px',
    height: '350px',
    backgroundColor: '#fff',
    borderRadius: '15px',
 
    position: 'relative',
  },
};

export default CoachProfiles;