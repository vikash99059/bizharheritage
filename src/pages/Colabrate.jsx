// import React, { useEffect, useRef } from "react";
// // import "./BrandStory.css";

// // Import your images here
// import mainImage from "./vendorimage/sidtha.jpeg"; // Replace with your actual image path
// import logo1 from "./vendorimage/HOUSEOFMITHILA.jpeg";
// import logo2 from "./vendorimage/MITHILADIYA6.jpeg";
// import logo3 from "./vendorimage/VEDPRAVALOGO.jpeg";

// const logos = [logo1, logo2, logo3];

// const BrandStory = () => {
//   // Duplicate logos for seamless infinite scrolling
//   const duplicatedLogos = [...logos, ...logos, ...logos];

//   return (
//     <section className="brand-story-section">
//       <div className="brand-story-container">
//         {/* Heading at Top Center */}
//         <div className="brand-heading-center">
//           <h2 className="brand-main-heading">
//             Brand <span className="highlight">Collaboration</span>
//           </h2>
//           {/* <div className="heading-underline"></div> */}
//         </div>

//         {/* Content Wrapper - Left Image + Right Content */}
//         <div className="brand-content-wrapper">
//           {/* Left Side - Image */}
//           <div className="brand-image-wrapper">
//             <div className="brand-image-container">
//               <img src={mainImage} alt="Bihar Heritage" className="brand-main-image" />
//               <div className="image-shape-overlay"></div>
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className="brand-content">
            
//             <h2 className="brand-title">
//               SIDDHITA MISHRA  <span className="highlight">Founder-  House  </span>
//               <br />of Mithila
//             </h2>
//             <p className="brand-description">
//              House of Mithila, founded by Siddhita Mishra, collaborates with  
// BiZhar Heritage to support and promote traditional art and artists,  especially the rich heritage of Mithila art and culture. 

//             </p>
            
           
//           </div>
//         </div>
//       </div>

//       {/* Bottom - Continuous Sliding Logos Section */}
//       <div className="logo-slider-section">
//         <div className="logo-slider-container">
//           <div className="logo-slider-track">
//             {duplicatedLogos.map((logo, index) => (
//               <div key={`logo-${index}`} className="logo-slide">
//                 <img src={logo} alt={`Partner Logo ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .brand-story-section {
//           width: 100%;
//         //   background: linear-gradient(135deg, #fff9f0 0%, #fff5e8 100%);
//           overflow-x: hidden;
//           padding: 20px 20px 0 20px;
//         }

//         .brand-story-container {
//           max-width: 1350px;
//           margin: 0 auto;
//         }

//         /* Heading at Top Center */
//         .brand-heading-center {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .brand-main-heading {
//           font-size: 38px;
//           font-weight: 800;
//           margin: 0 0 15px 0;
//           color: #333;
//           font-family: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
//         }

//         .highlight {
//           color: #eaae5e;
//         }

//         

//         /* Content Wrapper - Left Image + Right Content */
//         .brand-content-wrapper {
//           display: flex;
//           align-items: center;
//           gap: 60px;
//           padding-bottom: 80px;
//         }

//         /* Left Image Styles */
//         .brand-image-wrapper {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }

//         .brand-image-container {
//           position: relative;
//           width: 100%;
//           max-width: 450px;
//         }

//         .brand-main-image {
//           width: 100%;
//           height: auto;
//           border-radius: 30px;
//           position: relative;
//           z-index: 2;
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }

//         .image-shape-overlay {
//           position: absolute;
//           top: 20px;
//           right: -20px;
//           width: 100%;
//           height: 100%;
//           background: #eaae5e;
//           border-radius: 30px;
//           z-index: 1;
//           opacity: 0.2;
//         }

//         /* Right Content Styles */
//         .brand-content {
//           flex: 1;
//         }

//         .brand-tagline {
//           display: inline-block;
//           font-size: 14px;
//           font-weight: 600;
//           color: #eaae5e;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           margin-bottom: 20px;
//           position: relative;
//           padding-left: 40px;
//         }

//         .brand-tagline::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 50%;
//           width: 30px;
//           height: 2px;
//           background: #eaae5e;
//           transform: translateY(-50%);
//         }

//         .brand-title {
//           font-size: 30px;
//           font-weight: 800;
//           line-height: 1.2;
//           margin-bottom: 25px;
//           color: #222;
//         }

//         .brand-description {
//           font-size: 16px;
//           line-height: 1.7;
//           color: #555;
//           margin-bottom: 20px;
//         }

//         /* Stats Styles */
//         .brand-stats {
//           display: flex;
//           gap: 40px;
//           margin: 35px 0 30px 0;
//         }

//         .stat-item h3 {
//           font-size: 32px;
//           font-weight: 800;
//           color: #eaae5e;
//           margin: 0 0 5px 0;
//         }

//         .stat-item p {
//           font-size: 14px;
//           color: #666;
//           margin: 0;
//         }

//         /* Button Styles */
//         .brand-btn {
//           background: #eaae5e;
//           color: white;
//           border: none;
//           padding: 14px 35px;
//           font-size: 16px;
//           font-weight: 600;
//           border-radius: 40px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(234, 174, 94, 0.3);
//         }

//         .brand-btn:hover {
//           background: #d4943e;
//           transform: translateX(5px);
//           box-shadow: 0 6px 20px rgba(234, 174, 94, 0.4);
//         }

//         /* Logo Slider Section - Continuous Sliding with Original Colors */
//         .logo-slider-section {
//           width: 100%;
//           padding: 40px 0;
//           background: white;
//           border-top: 1px solid rgba(0, 0, 0, 0.05);
//           border-bottom: 1px solid rgba(0, 0, 0, 0.05);
//         }

//         .logo-slider-container {
//           width: 100%;
//           overflow: hidden;
//           position: relative;
//         }

//         .logo-slider-track {
//           display: flex;
//           gap: 50px;
//           width: max-content;
//           animation: slideLogos 10s linear infinite;
//         }

//         .logo-slider-track:hover {
//           animation-play-state: paused;
//         }

//         @keyframes slideLogos {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-33.33%);
//           }
//         }

//         .logo-slide {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-width: 120px;
//           padding: 10px 20px;
//         }

//         .logo-slide img {
//           max-width: 100px;
//           height: auto;
        
//           filter: none;
//           opacity: 0.8;
//           transition: all 0.3s ease;
//         }

//         .logo-slide:hover img {
//         //   opacity: 1;
//           transform: scale(1.05);
//         }

//         /* Responsive Styles */
//         @media (max-width: 1024px) {
//           .brand-content-wrapper {
//             gap: 40px;
//             padding-bottom: 60px;
//           }

//           .brand-main-heading {
//             font-size: 36px;
//           }

//           .brand-title {
//             font-size: 36px;
//           }

//           .brand-stats {
//             gap: 25px;
//           }

//           .stat-item h3 {
//             font-size: 28px;
//           }

//           .logo-slide {
//             min-width: 100px;
//           }

//           .logo-slide img {
//             max-width: 80px;
//           }
//         }

//         @media (max-width: 900px) {
//           .brand-content-wrapper {
//             flex-direction: column;
//             text-align: center;
//             gap: 40px;
//           }

//           .brand-tagline {
//             padding-left: 0;
//           }

//           .brand-tagline::before {
//             display: none;
//           }

//           .brand-stats {
//             justify-content: center;
//           }

//           .brand-image-wrapper {
//             order: 1;
//           }

//           .brand-content {
//             order: 2;
//           }

//           .brand-image-container {
//             max-width: 350px;
//           }

//           .image-shape-overlay {
//             top: 15px;
//             right: -15px;
//           }
//         }

//         @media (max-width: 768px) {
//           .brand-story-section {
//             padding: 40px 15px 0 15px;
//           }

//           .brand-main-heading {
//             font-size: 30px;
//           }

//           .brand-heading-center {
//             margin-bottom: 35px;
//           }

//           .brand-title {
//             font-size: 28px;
//           }

//           .brand-description {
//             font-size: 14px;
//           }

//           .brand-stats {
//             gap: 20px;
//           }

//           .stat-item h3 {
//             font-size: 24px;
//           }

//           .stat-item p {
//             font-size: 12px;
//           }

//           .brand-btn {
//             padding: 12px 30px;
//             font-size: 14px;
//           }

//           .logo-slider-section {
//             padding: 30px 0;
//           }

//           .logo-slide {
//             min-width: 80px;
//             padding: 8px 15px;
//           }

//           .logo-slide img {
//             max-width: 60px;
//           }

//           .logo-slider-track {
//             gap: 30px;
//             animation-duration: 20s;
//           }
//         }

//         @media (max-width: 480px) {
//           .brand-story-section {
//             padding: 30px 12px 0 12px;
//           }

//           .brand-main-heading {
//             font-size: 26px;
//           }

//           .brand-title {
//             font-size: 24px;
//           }

//           .brand-stats {
//             flex-wrap: wrap;
//             gap: 15px;
//           }

//           .stat-item {
//             flex: 0 0 calc(33.33% - 10px);
//           }

//           .stat-item h3 {
//             font-size: 20px;
//           }

//           .stat-item p {
//             font-size: 10px;
//           }

//           .brand-image-container {
//             max-width: 280px;
//           }

//           .logo-slide {
//             min-width: 70px;
//             padding: 5px 12px;
//           }

//           .logo-slide img {
//             max-width: 50px;
//           }

//           .logo-slider-track {
//             gap: 25px;
//             animation-duration: 15s;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default BrandStory;



import React, { useEffect, useRef } from "react";

// Import your images here
import mainImage from "./vendorimage/sidtha.jpeg";
import logo1 from "./vendorimage/HOUSEOFMITHILA.jpeg";
import logo2 from "./vendorimage/MITHILADIYA6.jpeg";
import logo3 from "./vendorimage/VEDPRAVALOGO.jpeg";
import thirdimage from "./modules/image/bhavanajhaa.jpeg";

// Second section image (Right side image)
import secondImage from "./vendorimage/lahnga1.jpeg"; // Replace with your actual image path

const logos = [logo1, logo2, logo3];

const BrandStory = () => {
  // Duplicate logos multiple times for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  // Refs for auto-scrolling
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Pause animation on hover
    const sliderTrack = sliderRef.current;
    if (sliderTrack) {
      const handleMouseEnter = () => {
        sliderTrack.style.animationPlayState = 'paused';
      };
      const handleMouseLeave = () => {
        sliderTrack.style.animationPlayState = 'running';
      };
      
      sliderTrack.addEventListener('mouseenter', handleMouseEnter);
      sliderTrack.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        sliderTrack.removeEventListener('mouseenter', handleMouseEnter);
        sliderTrack.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="brand-story-section">
      <div className="brand-story-container">
        {/* Heading at Top Center */}
        <div className="brand-heading-center">
          <h2 className="brand-main-heading">
            Brand <span className="highlight">Collaboration</span>
          </h2>
        </div>

        {/* FIRST SECTION - Left Image + Right Content */}
        <div className="brand-content-wrapper">
          {/* Left Side - Image */}
          <div className="brand-image-wrapper">
            <div className="brand-image-container">
              <img src={mainImage} alt="Bihar Heritage" className="brand-main-image" />
              <div className="image-shape-overlay"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="brand-content">
            <h2 className="brand-title">
              SIDDHITA MISHRA <span className="highlight">Founder - House</span>
              <br />of Mithila
            </h2>
            <p className="brand-description">
              House of Mithila, founded by Siddhita Mishra, collaborates with  
              BiZhar Heritage to support and promote traditional art and artists,  
              especially the rich heritage of Mithila art and culture.
            </p>
          </div>
        </div>

        {/* SECOND SECTION - Left Content + Right Image (Reversed Layout) */}
        <div className="brand-content-wrapper reversed">

<div className="brand-image-wrapper">
            <div className="brand-image-container">
              <img src={secondImage} alt="Traditional Art" className="brand-main-image" />
              <div className="image-shape-overlay overlay-right"></div>
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="brand-content">
            <h2 className="brand-title">
              VED PRABHA <span className="highlight">Mithila</span>
              <br />Art Of Painting
            </h2>
            <p className="brand-description">
              Our mission is to revive and promote the rich cultural heritage of Bihar 
              through collaborative efforts with local artisans and artists. We believe 
              in creating sustainable livelihoods while preserving ancient art forms 
              for future generations.
            </p>
            
           
          </div>

          {/* Right Side - Image */}
          
        </div>


        
      </div>
{/* THIRD SECTION - Left Image + Right Content */}
<div className="brand-content-wrapper">

  {/* Left Side - Image */}
  <div className="brand-image-wrapper">
    <div className="brand-image-container">
      <img src={thirdimage} alt="Traditional Art" className="brand-main-image" />
      <div className="image-shape-overlay"></div>
    </div>
  </div>

  {/* Right Side - Content */}  
  <div className="brand-content">
    <h2 className="brand-title">
      BHAVANA-JHAA <span className="highlight">Art Of</span>
      <br /> Mithilani-Dhiya
    </h2>
    <p className="brand-description">
      Our mission is to revive and promote the rich cultural heritage of Bihar 
      through collaborative efforts with local artisans and artists. We believe 
      in creating sustainable livelihoods while preserving ancient art forms 
      for future generations.
    </p>
  </div>

</div>


      {/* Bottom - Continuous Sliding Logos Section (Train Effect) */}
      <div className="logo-slider-section">
        <div className="logo-slider-container">
          <div className="logo-slider-track" ref={sliderRef}>
            {duplicatedLogos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-slide">
                <img src={logo} alt={`Partner Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .brand-story-section {
          width: 100%;
          overflow-x: hidden;
          padding: 20px 20px 0 20px;
         
        }

        .brand-story-container {
          max-width: 1350px;
          margin: 0 auto;
        }

        /* Heading at Top Center */
        .brand-heading-center {
          text-align: center;
          margin-bottom: 50px;
        }

        .brand-main-heading {
          font-size: 38px;
          font-weight: 800;
          margin: 0 0 15px 0;
          color: #333;
          font-family: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
        }

        .highlight {
          color: #eaae5e;
        }

        /* Content Wrapper */
        .brand-content-wrapper {
          display: flex;
          align-items: center;
          // gap: 60px;
          // padding-bottom: 40px;
        }

        /* Reversed Layout for Second Section */
        .brand-content-wrapper.reversed {
          flex-direction: row-reverse;
        }

        /* Left Image Styles */
        .brand-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .brand-image-container {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .brand-main-image {
          width: 100%;
          height: auto;
          border-radius: 30px;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .brand-main-image:hover {
          transform: scale(1.02);
        }

        .image-shape-overlay {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 100%;
          height: 100%;
          background: #eaae5e;
          border-radius: 30px;
          z-index: 1;
          opacity: 0.2;
        }

        .overlay-right {
          right: auto;
          left: -20px;
        }

        /* Right Content Styles */
        .brand-content {
          flex: 1;
        }

        .brand-title {
          font-size: 30px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 25px;
          color: #222;
        }

        .brand-description {
          font-size: 16px;
          line-height: 1.7;
          color: #555;
          margin-bottom: 20px;
        }

        /* Stats Styles */
        .brand-stats {
          display: flex;
          gap: 40px;
          margin: 35px 0 30px 0;
        }

        .stat-item h3 {
          font-size: 32px;
          font-weight: 800;
          color: #eaae5e;
          margin: 0 0 5px 0;
        }

        .stat-item p {
          font-size: 14px;
          color: #666;
          margin: 0;
        }

        /* Button Styles */
        .brand-btn {
          background: #eaae5e;
          color: white;
          border: none;
          padding: 14px 35px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 40px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(234, 174, 94, 0.3);
        }

        .brand-btn:hover {
          background: #d4943e;
          transform: translateX(5px);
          box-shadow: 0 6px 20px rgba(234, 174, 94, 0.4);
        }

        /* Logo Slider Section - Continuous Sliding (Train Effect) */
        .logo-slider-section {
          width: 100%;
          padding: 40px 0;
          background: white;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          margin-top: 20px;
        }

        .logo-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Gradient overlays for smooth edges */
        .logo-slider-container::before,
        .logo-slider-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .logo-slider-container::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .logo-slider-container::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        .logo-slider-track {
          display: flex;
          gap: 50px;
          width: max-content;
          animation: slideLogos 20s linear infinite;
        }

        @keyframes slideLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-40%);
          }
        }

        .logo-slide {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          padding: 10px 20px;
          transition: all 0.3s ease;
        }

        .logo-slide img {
          max-width: 100px;
          height: auto;
          filter: grayscale(0%);
          // opacity: 0.7;
          transition: all 0.3s ease;
        }

        .logo-slide:hover img {
          opacity: 1;
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .brand-content-wrapper {
            gap: 40px;
            padding-bottom: 60px;
          }

          .brand-main-heading {
            font-size: 36px;
          }

          .brand-title {
            font-size: 28px;
          }

          .brand-stats {
            gap: 25px;
          }

          .stat-item h3 {
            font-size: 28px;
          }

          .logo-slide {
            min-width: 100px;
          }

          .logo-slide img {
            max-width: 80px;
          }
        }

        @media (max-width: 900px) {
          .brand-content-wrapper,
          .brand-content-wrapper.reversed {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .brand-stats {
            justify-content: center;
          }

          .brand-image-wrapper {
            order: 1;
          }

          .brand-content {
            order: 2;
          }

          .brand-image-container {
            max-width: 350px;
          }

          .image-shape-overlay {
            top: 15px;
            right: -15px;
          }

          .overlay-right {
            left: -15px;
            right: auto;
          }

          .logo-slider-container::before,
          .logo-slider-container::after {
            width: 50px;
          }
        }

        @media (max-width: 768px) {
          .brand-story-section {
            padding: 40px 15px 0 15px;
          }

          .brand-main-heading {
            font-size: 30px;
          }

          .brand-heading-center {
            margin-bottom: 35px;
          }

          .brand-title {
            font-size: 24px;
          }

          .brand-description {
            font-size: 14px;
          }

          .brand-stats {
            gap: 20px;
          }

          .stat-item h3 {
            font-size: 24px;
          }

          .stat-item p {
            font-size: 12px;
          }

          .brand-btn {
            padding: 12px 30px;
            font-size: 14px;
          }

          .logo-slider-section {
            padding: 30px 0;
          }

          .logo-slide {
            min-width: 80px;
            padding: 8px 15px;
          }

          .logo-slide img {
            max-width: 60px;
          }

          .logo-slider-track {
            gap: 30px;
            animation-duration: 15s;
          }
        }

        @media (max-width: 480px) {
          .brand-story-section {
            padding: 30px 12px 0 12px;
          }

          .brand-main-heading {
            font-size: 26px;
          }

          .brand-title {
            font-size: 20px;
          }

          .brand-stats {
            flex-wrap: wrap;
            gap: 15px;
          }

          .stat-item {
            flex: 0 0 calc(33.33% - 10px);
          }

          .stat-item h3 {
            font-size: 20px;
          }

          .stat-item p {
            font-size: 10px;
          }

          .brand-image-container {
            max-width: 280px;
          }

          .logo-slide {
            min-width: 70px;
            padding: 5px 12px;
          }

          .logo-slide img {
            max-width: 50px;
          }

          .logo-slider-track {
            gap: 25px;
            animation-duration: 12s;
          }

          .logo-slider-container::before,
          .logo-slider-container::after {
            width: 30px;
          }
        }

        @media (max-width: 380px) {
          .logo-slide {
            min-width: 60px;
            padding: 5px 10px;
          }

          .logo-slide img {
            max-width: 45px;
          }

          .logo-slider-track {
            gap: 20px;
            animation-duration: 10s;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandStory;