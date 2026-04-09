




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Import your images
// import img0 from "../Biharimage/stroyling.jpeg";
// import img1 from "../Biharimage/legency.jpeg";
// import img2 from "../Biharimage/clutureexprience.jpeg";
// import img3 from "../Biharimage/arestinimage.jpeg";
// import img4 from "../Biharimage/comuinity.jpeg";
// import img5 from "../Biharimage/culturaltorisam.jpeg";
// import img6 from "../Biharimage/selfcreaft.jpeg";

// import { useNavigate } from "react-router-dom";
// const DigitalMenuSection = ({ setShowLogin, setIsSignup, isLoggedIn }) => {

// const navigate = useNavigate();
//   const sections = [
//     {
//       title: "Cultural Legacy Preservation",
//       desc: "BiZharHeritage works to protect and promote the rich culture of Bihar and Jharkhand. We share local stories, traditional art, living traditions, and cultural handicraft products so they are not lost and can be passed on to future generations..",
//       img: img1
//     },
//     {
//       title: "Authentic Storytelling",
//       desc: "We share real stories from real people. Our content is based on local experiences and community voices, helping you understand the true culture, traditions, and emotions of Bihar and Jharkhand.",
//       img: img0
//     },
//     {
//       title: "Culture You Can Experience",
//       desc: "Discover the living culture of Bihar and Jharkhand through festivals, traditional art, local customs, tours, stories, and regular updates—both online and on ground. We bring age-old traditions to life, so you don’t just see the culture, you truly experience it.",
//       img: img2
//     },
//     {
//       title: "Artisan Empowerment",
//       desc: "We directly connect traditional artists, craftsmen, and cultural practitioners with global audiences. Our platform provides market access, fair compensation, and recognition for masters of Madhubani, Sujni, Bhagalpur silk, Dokra metalwork, and other indigenous art forms—preserving skills while creating sustainable livelihoods.",
//       img: img3
//     },
//     {
//       title: "Community-Curated Content",
//       desc: "Our content comes directly from local communities of Bihar and Jharkhand. Artisans, elders, youth, and cultural experts share real stories, traditions, and everyday experiences. We showcase the culture along with local products—Bihar’s traditional arts, crafts, and handmade products, and Jharkhand’s herbal products, sal leaf items, handicrafts, and tourism—helping people truly understand the lifestyle, heritage, and identity of the region..",
//       img: img4
//     },
//     {
//       title: "Cultural Tourism Experiences (Bihar & Jharkhand) ",
//       desc: "For those who have only read about our culture in books or seen it on screens, we invite you to experience it on the ground. Our cultural tourism packages let you feel the true spirit of Bihar and Jharkhand—from the peaceful land of Bodh Gaya, the Glass Bridge, Surya Dev Temple, and other cultural sites in Bihar, to Parasnath, Netarhat, Saranda Eco-Tourism, and other cultural destinations in Jharkhand. Come, see, walk, and enjoy the living culture, traditions, and natural beauty of Eastern India..",
//       img: img5
//     },
//     {
//       title: "Self-Funding for Creative Crafts People",
//       desc: "We believe that no one’s talent should go unnoticed just because of lack of money. That’s why we have designed a scheme to help creative crafts people earn through self-funding ( BiZhar Heritage). We also provide them with our online platform for free, so they can showcase and sell their handmade products to a wider audience.",
//       img: img6
//     },
//   ];

//   const openPlayStore = () =>
//     window.open("https://play.google.com/store/apps?id=com.maamaas.app", "_blank");
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [showSignupPopup, setShowSignupPopup] = useState(false);




//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//     @keyframes arrowBlink {
//       0% {
//         transform: translateX(0);
//         opacity: 0.4;
//       }
//       100% {
//         transform: translateX(8px);
//         opacity: 1;
//       }
//     }
//   `;
//     document.head.appendChild(style);
//   }, []);

//   const openSignup = () => {
//     setShowSignupPopup(true);
//   };
//   return (
//     <div style={styles.container}>
//       {/* MAIN HEADER */}
//       <div style={styles.header}>
//         <div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           style={{ position: "relative", display: "inline-block" }}
//         >
//           <p style={styles.mainHeading}>
//             Why Choose <span style={styles.highlight}>BiZharHeritage?</span>
//           </p>

//           {/* Animated Underline */}
//           <div
//             initial={{ width: 0 }}
//             animate={{ width: "70%" }}
//             transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
//             style={{
//               height: "2px",
//               background: "#860000",
//               borderRadius: "4px",
//               marginTop: "6px",
//               marginLeft: "auto",
//               marginRight: "auto", // ★ center alignment
//             }}
//           />
//         </div>

//         <p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           style={styles.subHeading}
//         >
//         BiZharHeritage brings the unique products of Bihar and Jharkhand to the world—taking local crafts and natural products to the global, supporting artisans, and giving the region’s 
// art and culture a distinct identity

//         </p>
//       </div>

//       {/* SECTIONS - One by One with Alternating Layout */}
//       <div style={styles.sectionsWrapper}>
//         {sections.map((section, index) => (
//           <div 
//   key={index}
//   style={styles.sectionCardWrapper}   // ⬅ ADD CARD WRAPPER HERE
// >

//   <div
//     initial={{
//       x: index % 2 === 0 ? -50 : 50,
//       opacity: 0,
//       scale: 0.95
//     }}

//             whileInView={{
//               x: 0,
//               opacity: 1,
//               scale: 1
//             }}
//             transition={{
//               duration: 0.7,
//               ease: "easeOut",
//               delay: index * 0.1
//             }}
//             viewport={{ once: true, margin: "-50px" }}
//             style={{
//               ...styles.sectionContainer,
//               marginBottom: index === sections.length - 1 ? "0" : "20px",
//               flexDirection: isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse",
//             }}
//           >
//             {/* IMAGE SECTION - Same size for all */}
//             <div style={styles.imageWrapper}>
//               <div style={styles.imageFrame}>
//                 <img
//                   src={section.img}
//                   alt={section.title}
//                   style={styles.sectionImage}
//                   loading="lazy"
//                 />
//                 <div style={{
//                   ...styles.imageDecoration,
//                   background: index % 2 === 0
//                     ? "linear-gradient(135deg, #860000 0%, #860000 100%)"
//                     : "linear-gradient(135deg, #860000 0%, #860000 100%)"
//                 }} />
//               </div>
//               {/* <div style={styles.sectionNumber}>
//                 <span style={styles.numberText}>0{index + 1}</span>
//               </div> */}
//             </div>

//             {/* CONTENT SECTION - Same size for all */}
//             <div style={styles.contentWrapper}>
//               <div style={styles.contentInner}>
//                 <div style={styles.titleRow}>
//                   <div style={{
//                     ...styles.titleIcon,
//                     background: index % 2 === 0
//                       ? "linear-gradient(135deg, #860000 0%, #860000 100%)"
//                       : "linear-gradient(135deg, #860000 0%, #860000 100%)"
//                   }}>
//                     <span style={styles.iconText}>{index + 1}</span>
//                   </div>
//                   <h2 style={styles.sectionTitle}>{section.title}</h2>
//                 </div>

//                 <p style={styles.sectionDescription}>
//                   {section.desc}
//                 </p>

//                 <div style={styles.buttonContainer}>
//   {!isLoggedIn && (
//     <button
//       onClick={() => navigate("/contact")}   // 👈 navigation here
//       style={{
//         ...styles.signupBtn,
//         background:
//           index % 2 === 0
//             ? "linear-gradient(135deg, #860000 0%, #860000 100%)"
//             : "linear-gradient(135deg, #860000 0%, #860000 100%)",
//         padding: window.innerWidth <= 600 ? "8px 14px" : "12px 22px",
//         fontSize: window.innerWidth <= 600 ? "13px" : "16px",
//         borderRadius: window.innerWidth <= 600 ? "6px" : "10px",
//         cursor: "pointer",
//       }}
//     >
//       <span
//         style={{
//           ...styles.btnText,
//           fontSize: window.innerWidth <= 600 ? "13px" : "16px",
//         }}
//       >
//         Join Heritage Community
//       </span>

//       <span
//         style={{
//           ...styles.arrowBlink,
//           fontSize: window.innerWidth <= 600 ? "15px" : "20px",
//           marginLeft: window.innerWidth <= 600 ? "6px" : "10px",
//         }}
//       >
//         ➜
//       </span>
//     </button>
//   )}
// </div>

//               </div>
//             </div>
//           </div>
//           </div>
//         ))}
//       </div>


//     </div>
//   );
// };

// const styles = {
//   sectionCardWrapper: {
//   // background: "#fff",
//   padding: "10px",
//   borderRadius: "25px",
//   // boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
//   // marginBottom: "30px",
//   width :"100%",
// },

//   container: {
//     width: "100%",
//     minHeight: "100vh",
   
//     padding: "13px 5%",
//     fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//     position: "relative",
//     overflow: "hidden",
//   },

//   header: {
//     textAlign: "center",
//     marginBottom: "32px",
//     // marginTop: "-57px",
//     padding: "0 20px",
//   },

//   mainHeading: {
//     fontSize: "36px",
//     fontWeight: "800",
//     color: "#222",
//     marginBottom: "20px",
//     letterSpacing: "-1px",
//     lineHeight: "1.1",
//   },

//   highlight: {
//     background: "linear-gradient(135deg, #860000 0%, #860000 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//   },

//   subHeading: {
//     fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
//     color: "#666",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     lineHeight: "1.6",
//     fontWeight: "400",
//     opacity: 0.9,
//   },

//   sectionsWrapper: {
//     maxWidth: "1400px",
//     margin: "0 auto",
//     padding: "20px 0",
//   },

//   sectionContainer: {
//     display: "flex",
//     alignItems: "center",
//     gap: "0px",
//     width: "100%",
//     minHeight: "400px",
//     position: "relative",
//   },

//   imageWrapper: {
//     flex: "1",
//     minWidth: "0",
//     position: "relative",
//   },

//   imageFrame: {
//     position: "relative",
//     height: "400px",  // 🔽 500px se 400px
//     overflow: "hidden",
//     borderRadius: "25px",
//   },


//   sectionImage: {
//     width: "100%",
//     height: "100%",     // 🔽 81% hatao
//     objectFit: "contain",   // 🔽 cover ki jagah contain / product style look
//     transition: "transform 0.6s ease",
//   },


//   imageDecoration: {
//     position: "absolute",
//     top: "20px",
//     left: "20px",
//     right: "-20px",
//     bottom: "-20px",
//     borderRadius: "25px",
//     opacity: 0.1,
//     zIndex: -1,
//     filter: "blur(10px)",
//   },

//   sectionNumber: {
//     position: "absolute",
//     top: "-20px",
//     right: "-20px",
//     width: "80px",
//     height: "80px",
//     borderRadius: "50%",
//     background: "linear-gradient(135deg, #860000 0%, #860000 100%)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 10px 30px rgba(177, 92, 214, 0.3)",
//     zIndex: 2,
//   },

//   numberText: {
//     fontSize: "2rem",
//     fontWeight: "800",
//     color: "white",
//     opacity: 0.9,
//   },

//   contentWrapper: {
//     flex: "1",
//     minWidth: "0",
//   },

//   contentInner: {
//     padding: "50px",
//     // background: "white",
//     // borderRadius: "25px",
//     // boxShadow: "0 15px 40px rgba(0, 0, 0, 0.05)",
//     // border: "1px solid rgba(177, 92, 214, 0.1)",
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },

//   titleRow: {
//     display: "flex",
//     alignItems: "center",
//     gap: "20px",
//     marginBottom: "25px",
//   },

//   titleIcon: {
//     width: "50px",
//     height: "50px",
//     borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexShrink: 0,
//     boxShadow: "0 8px 20px rgba(177, 92, 214, 0.2)",
//   },

//   iconText: {
//     color: "white",
//     fontSize: "1.5rem",
//     fontWeight: "700",
//   },

//   sectionTitle: {
//     fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
//     fontWeight: "800",
//     color: "#222",
//     margin: 0,
//     letterSpacing: "-0.5px",
//     lineHeight: "1.2",
//   },

//   sectionDescription: {
//     fontSize: "1.05rem",
//     lineHeight: "1.8",
//     color: "#555",
//     marginBottom: "35px",
//     flex: 1,
//     fontWeight: "400",
//      textAlign: "justify",
//   },

//   buttonContainer: {
//     marginTop: "auto",
//   },

//   signupBtn: {
//     border: "none",
//     padding: "16px 28px",
//     borderRadius: "50px",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "12px",
//     transition: "transform 0.3s ease",
//     boxShadow: "0px 8px 15px rgba(0,0,0,0.15)",
//   },

//   btnText: {
//     fontSize: "20px",
//     fontWeight: "700",
//     color: "#fff",
//     letterSpacing: "0.5px"
//   },

//   arrowBlink: {
//     fontSize: "24px",
//     fontWeight: "700",
//     color: "#fff",
//     animation: "arrowBlink 0.8s infinite alternate ease-in-out",
//   },

//   btnText: {
//     fontSize: "1.1rem",
//     fontWeight: "700",
//     marginBottom: "4px",
//     color: "#fff",
//   },



//   btnSubtext: {
//     fontSize: "0.85rem",
//     opacity: 0.9,
//     fontWeight: "400",
//   },

//   finalCta: {
//     maxWidth: "1000px",
//     margin: "100px auto 0",
//     padding: "60px",
//     background: "linear-gradient(135deg, rgba(177, 92, 214, 0.05) 0%, rgba(106, 17, 203, 0.05) 100%)",
//     borderRadius: "30px",
//     border: "2px solid rgba(177, 92, 214, 0.1)",
//     textAlign: "center",
//     position: "relative",
//     overflow: "hidden",
//   },

//   ctaContent: {
//     position: "relative",
//     zIndex: 2,
//   },

//   ctaTitle: {
//     fontSize: "clamp(2rem, 3vw, 2.5rem)",
//     fontWeight: "800",
//     color: "#222",
//     marginBottom: "20px",
//     background: "linear-gradient(135deg, #860000 0%, #860000 100%)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//     backgroundClip: "text",
//   },

//   ctaDesc: {
//     fontSize: "1.2rem",
//     color: "#666",
//     marginBottom: "40px",
//     maxWidth: "600px",
//     margin: "0 auto 40px",
//     lineHeight: "1.6",
//   },

//   finalDownloadBtn: {
//     padding: "22px 45px",
//     borderRadius: "20px",
//     background: "linear-gradient(135deg, #860000 0%, #860000 100%)",
//     border: "none",
//     color: "white",
//     cursor: "pointer",
//     fontWeight: "600",
//     transition: "all 0.3s ease",
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 15px 35px rgba(177, 92, 214, 0.25)",
//     ':hover': {
//       transform: "translateY(-5px)",
//       boxShadow: "0 25px 50px rgba(177, 92, 214, 0.35)",
//     },
//   },

//   btnContent: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: "5px",
//   },

//   finalBtnText: {
//     fontSize: "1.3rem",
//     fontWeight: "700",
//   },

//   finalBtnSub: {
//     fontSize: "0.9rem",
//     opacity: 0.9,
//     fontWeight: "400",
//   },

//   // Responsive Styles
//   '@media (max-width: 1200px)': {
//     sectionContainer: {
//       gap: "50px",
//     },

//     imageFrame: {
//       height: "320px",
//     },

//     contentInner: {
//       padding: "35px",
//     },
//   },

//   '@media (max-width: 992px)': {
//     sectionContainer: {
//       flexDirection: "column !important",
//       gap: "40px",
//       minHeight: "auto",
//     },

//     imageWrapper: {
//       width: "100%",
//     },

//     imageFrame: {
//       height: "300px",
//     },

//     contentWrapper: {
//       width: "100%",
//     },

//     finalCta: {
//       padding: "50px 30px",
//       marginTop: "80px",
//     },
//   },

//   '@media (max-width: 768px)': {
//     container: {
//       padding: "40px 4%",
//     },

//     header: {
//       marginBottom: "60px",
//     },

//     mainHeading: {
//       fontSize: "2.5rem",
//     },

//     sectionContainer: {
//       marginBottom: "60px",
//       gap: "30px",
//     },

//     imageFrame: {
//       height: "280px",
//       borderRadius: "20px",
//     },

//     contentInner: {
//       padding: "30px",
//       borderRadius: "20px",
//     },

//     titleRow: {
//       flexDirection: "column",
//       alignItems: "flex-start",
//       gap: "15px",
//     },

//     sectionTitle: {
//       fontSize: "1.6rem",
//     },

//     sectionDescription: {
//       fontSize: "1rem",
//     },

//     downloadBtn: {
//       padding: "16px 30px",
//       minWidth: "100%",
//     },

//     finalCta: {
//       padding: "40px 20px",
//       marginTop: "60px",
//       borderRadius: "25px",
//     },

//     finalDownloadBtn: {
//       padding: "20px 35px",
//       width: "100%",
//     },
//   },

//   '@media (max-width: 480px)': {
//     container: {
//       padding: "30px 3%",
//     },

//     mainHeading: {
//       fontSize: "2rem",
//     },

//     subHeading: {
//       fontSize: "1rem",
//     },

//     imageFrame: {
//       height: "250px",
//     },

//     sectionNumber: {
//       width: "60px",
//       height: "60px",
//       top: "-15px",
//       right: "-15px",
//     },

//     numberText: {
//       fontSize: "1.5rem",
//     },

//     contentInner: {
//       padding: "25px",
//     },

//     titleIcon: {
//       width: "45px",
//       height: "45px",
//     },

//     sectionTitle: {
//       fontSize: "1.4rem",
//     },

//     sectionDescription: {
//       fontSize: "0.95rem",
//       lineHeight: "1.7",
//     },

//     ctaTitle: {
//       fontSize: "1.6rem",
//     },

//     ctaDesc: {
//       fontSize: "1rem",
//     },

//     finalBtnText: {
//       fontSize: "1.1rem",
//     },
//   },
// };

// export default DigitalMenuSection;


import React, { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css'; // CSS ko alag file mein rakhenge

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);
  const autoSlideRef = useRef(null);

  // Slide data - aap apni images aur text yahan daal sakte ho
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mountain Adventure",
      description: "Explore the beautiful mountains with our guided tours"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Serene Lake Views",
      description: "Peaceful lakes surrounded by nature's beauty"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1426604966849-d7adac402b2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Forest Trails",
      description: "Walk through ancient forests and discover hidden gems"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Misty Mornings",
      description: "Experience the magic of foggy landscapes"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Beach Sunsets",
      description: "Golden hours by the ocean"
    }
  ];

  const totalSlides = slides.length;

  // Next slide function
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left - next
      nextSlide();
    }
    if (touchStart - touchEnd < -100) {
      // Swipe right - previous
      prevSlide();
    }
  };

  // Auto slide effect
  useEffect(() => {
    startAutoSlide();

    // Cleanup on unmount
    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

  // Reset auto slide when currentIndex changes
  useEffect(() => {
    resetAutoSlide();
  }, [currentIndex]);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    startAutoSlide();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
        resetAutoSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetAutoSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="slider-container">
      {/* Slider main wrapper */}
      <div 
        className="slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => {
          if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
          }
        }}
        onMouseLeave={() => {
          startAutoSlide();
        }}
      >
        {/* Slides */}
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img 
                src={slide.image} 
                alt={slide.title}
                loading="lazy"
              />
              <div className="slide-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        className="slider-btn prev" 
        onClick={() => {
          prevSlide();
          resetAutoSlide();
        }}
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button 
        className="slider-btn next" 
        onClick={() => {
          nextSlide();
          resetAutoSlide();
        }}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots Indicator - GOL path */}
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              goToSlide(index);
              resetAutoSlide();
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

