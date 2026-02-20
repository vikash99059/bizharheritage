// import React from "react";
// import "./ImageTrainSlider.css";

// // Images
// import img1 from "./jharkhandimage/art2.jpeg";
// import img2 from "./Teamimage/heritagevendor.jpeg";
// import img3 from "./jharkhandimage/art3.jpeg";
// import img4 from "./jharkhandimage/art4.jpeg";
// import img5 from "./jharkhandimage/art5.jpeg";
// import img6 from "./vendorimage/newartishian.jpeg";

// const images = [img1, img2, img3, img4, img5, img6];

// const ImageTrainSlider = () => {
//   return (
//     <div className="train-slider-wrapper">
//         <h2 className="train-slider-title">  OUR ARTISANS<span style={{color:"black"}}> WORK</span> </h2>
//       <div className="train-slider-container">
//         <div className="train-slider-track">
//           {[...images, ...images].map((img, index) => (
//             <div className="train-card" key={index}>
//               <img src={img} alt={`slider-${index}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageTrainSlider;



// import React, { useEffect, useState } from "react";

// // Images
// import img1 from "./jharkhandimage/art2.jpeg";
// import img2 from "./Teamimage/heritagevendor.jpeg";
// import img3 from "./jharkhandimage/art3.jpeg";
// import img4 from "./jharkhandimage/art4.jpeg";
// import img5 from "./jharkhandimage/art5.jpeg";
// import img6 from "./vendorimage/newartishian.jpeg";
// import img7 from "./jharkhandimage/artishian.jpeg";  

// const images = [img1, img2, img3, img4, img5, img6, img7];

// const ImageTrainSlider = () => {

  
//   return (
//     <div style={styles.wrapper}>
//       <h2 style={styles.title}>
//         OUR ARTISANS<span style={styles.blackText}> WORK</span>
//       </h2>
      
//       <div style={styles.container}>
//         <div style={styles.track}>
//           {[...images, ...images].map((img, index) => (
//             <div key={index} style={styles.card}>
//               <img src={img} alt={`artisan-work-${index}`} style={styles.image} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideTrain {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-50% - 10px));
//           }
//         }
        
//         @media (min-width: 769px) {
//           .desktop-track:hover {
//             animation-play-state: paused !important;
//           }
//         }
        
//         /* Custom scrollbar for mobile */
//         .mobile-container::-webkit-scrollbar {
//           height: 6px;
//         }
        
//         .mobile-container::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
        
//         .mobile-container::-webkit-scrollbar-thumb {
//           background: #d4a574;
//           border-radius: 10px;
//         }
        
//         .mobile-container::-webkit-scrollbar-thumb:hover {
//           background: #b88a5e;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Main styles
// const styles = {
//   wrapper: {
//     width: "100%",
//     maxWidth: "1200px",   // ✅ FIXED
//     margin: "0 auto",
//     overflow: "hidden",
//     padding: "50px 0",
//     position: "relative",
//   },
//   title: {
//     textAlign: 'center',
//     // fontSize: '3rem',
//     fontSize: '36px',
//     fontWeight: '900',
//     marginBottom: '40px',
//     color: '#8b0000',
//     textTransform: 'uppercase',
//     letterSpacing: '2px',
//   },
//   blackText: {
//     color: '#2c3e50',
//   },
//   container: {
//     width: '100%',
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   track: {
//     display: 'flex',
//     animation: 'slideTrain 30s linear infinite',
//     width: 'fit-content',
//     gap: '20px',
//   },
//   card: {
//    flex: "0 0 calc((1200px - 40px) / 3)", 
//     width: '300px',
//     height: '420px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     background: 'white',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.5s ease',
//   },
// };

// // Mobile responsive styles
// const mobileStyles = `
//   @media (max-width: 768px) {
//     .train-slider-wrapper {
//       padding: 30px 0 !important;
//     }
    
//     .train-slider-title {
//       font-size: 2rem !important;
//       margin-bottom: 30px !important;
//       letter-spacing: 1px !important;
//     }
    
//     .train-slider-container {
//       overflow-x: auto !important;
//       scroll-snap-type: x mandatory !important;
//       -webkit-overflow-scrolling: touch !important;
//     }
    
//     .train-slider-track {
//       display: grid !important;
//       grid-template-columns: repeat(2, 1fr) !important;
//       grid-auto-rows: 1fr !important;
//       gap: 15px !important;
//       width: 100% !important;
//       padding: 0 15px !important;
//       animation: none !important;
//       scroll-snap-align: start !important;
//     }
    
//     .train-card {
//       width: 100% !important;
//       height: 180px !important;
//       scroll-snap-align: center !important;
//     }
//   }
  
//   @media (max-width: 480px) {
//     .train-slider-title {
//       font-size: 1.8rem !important;
//       margin-bottom: 25px !important;
//     }
    
//     .train-slider-track {
//       grid-template-columns: repeat(2, 1fr) !important;
//       gap: 12px !important;
//       padding: 0 10px !important;
//     }
    
//     .train-card {
//       height: 160px !important;
//     }
//   }
  
//   @media (max-width: 360px) {
//     .train-slider-track {
//       grid-template-columns: repeat(2, 1fr) !important;
//       gap: 10px !important;
//       padding: 0 8px !important;
//     }
    
//     .train-card {
//       height: 150px !important;
//     }
    
//     .train-slider-title {
//       font-size: 1.6rem !important;
//     }
//   }
  
//   @media (min-width: 769px) and (max-width: 1024px) {
//     .train-card {
//       width: 280px !important;
//       height: 190px !important;
//     }
//   }
  
//   /* Hover effects */
//   .train-card:hover {
//     transform: translateY(-5px) !important;
//     box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
//   }
  
//   .train-card:hover img {
//     transform: scale(1.05) !important;
//   }
// `;

// // Adding mobile styles to component
// const ImageTrainSliderWithStyles = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   return (
//     <>
//       <style>{mobileStyles}</style>
//       <div className="train-slider-wrapper" style={styles.wrapper}>
//         <h2 className="train-slider-title" style={styles.title}>
//           OUR ARTISANS<span style={styles.blackText}> WORK</span>
//         </h2>
        
//         <div className="train-slider-container mobile-container" style={styles.container}>
//   <div className="train-slider-track desktop-track" style={styles.track}>
//     {(isMobile ? images : [...images, ...images]).map((img, index) => (
//       <div key={index} className="train-card" style={styles.card}>
//         <img
//           src={img}
//           alt={`artisan-work-${index}`}
//           style={styles.image}
//         />
//       </div>
//     ))}
//   </div>
// </div>

        
//         <style>{`
//           @keyframes slideTrain {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(calc(-50% - 10px));
//             }
//           }
          
//           @media (min-width: 769px) {
//             .desktop-track:hover {
//               animation-play-state: paused !important;
//             }
//             .train-slider-container {
//               cursor: pointer;
//             }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default ImageTrainSliderWithStyles;




import React from "react";

import img1 from "./Productimage/mithlaart.jpeg";
import img2 from "./Productimage/shorahitraditional1.jpeg";
import img3 from "./Productimage/madhubani28.jpeg";
import img4 from "./Productimage/madhubani8.jpeg";
import img5 from "./Productimage/mithla3.jpeg";
import img6 from "./Productimage/dupata.jpeg";
import img7 from "./Productimage/menkurta6.jpeg";
import img8 from "./Productimage/lahanga.jpeg";
import img9 from "./Productimage/kidscraft.jpeg";
import img10 from "./Productimage/Mithlasuite.jpeg";
import img11 from "./Productimage/madhubani20.jpeg";
import img12 from "./Productimage/madhubani1.jpeg";
import img13 from "./Productimage/loutsart.jpeg";

const GalleryComponent = () => {
  const container = {
    padding: "40px 20px",
    // background: "#f5f5f5",
  };

  const wrapper = {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };

  const row3 = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  };

  const row2 = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "40px",
    justifyContent: "center",
    // maxWidth: "800px",
    margin: "auto",
  };

  const box = {
    background: "#fff",
    padding: "10px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    borderRadius: "8px",
    transition: "0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "4px",
  };

  return (
    <div style={container}>
      <h1 style={{
        textAlign: "center",
        marginBottom: "40px",
        color:"black",
        fontSize: "36px",
        fontWeight: "700",
        letterSpacing: "1px"
      }}>
        OUR ARTISANS <span style={{color:"#8b0000"}}>HANDCRAFTED</span>
      </h1>
      <div className="wrapper" style={wrapper}>
        
        {/* Row 1 → 3 images */}
        <div className="row3" style={row3}>
          <div style={box}><img src={img1} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img2} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img3} style={imgStyle} alt="" /></div>
        </div>

        {/* Row 2 → 2 images */}
        <div className="row2" style={row2}>
          <div style={box}><img src={img4} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img5} style={imgStyle} alt="" /></div>
        </div>

        {/* Row 3 → 3 images */}
        <div className="row3" style={row3}>
          <div style={box}><img src={img6} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img7} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img8} style={imgStyle} alt="" /></div>
        </div>

        {/* Row 4 → 3 images */}
        <div className="row2" style={row2}>
          <div style={box}><img src={img9} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img10} style={imgStyle} alt="" /></div>
        </div>
        <div className="row3" style={row3}>
          <div style={box}><img src={img13} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img11} style={imgStyle} alt="" /></div>
          <div style={box}><img src={img12} style={imgStyle} alt="" /></div>
        </div>

      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 992px) {
            .row3 {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            .row2 {
              grid-template-columns: repeat(2, 1fr) !important;
              max-width: 100% !important;
            }
          }

          @media (max-width: 600px) {
            .row3, .row2 {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
          }

          .wrapper div div:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default GalleryComponent;
