



import React, { useState, useRef, useEffect } from "react";
import {
  FaUsers,
  FaStore,
  FaBoxOpen,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import Banner1 from "../Biharimage/onlineimage.webp";
import Banner2 from "../Biharimage/online.jpg";
import Banner3 from "../Biharimage/b5.jpg";
import Banner4 from "../Productimage/lanhgaw.jpg";
import Banner5 from "../Biharimage/gy.jpg";
import Banner6 from "../Biharimage/chat.webp";
import Banner7 from "../Biharimage/Thekua.jpg";
import Banner8 from "../Biharimage/SHARUHAL.webp";
import Banner9 from "../Productimage/banner3.jpeg";
import Banner10 from "../Productimage/banner4.jpeg";
import Banner11 from "../Productimage/banner5.jpeg";
import Banner12 from "../Productimage/vedprvaslider.jpeg";
import Banner13 from "../Productimage/banner.jpeg";
import Banner14 from "../Biharimage/slider2.jpeg";
import banner  from '../Productimage/banner2.jpeg'

import videoimage from "../Biharimage/slider1.jpeg";
import Video2 from "../Biharimage/136922-765457800_small.mp4";

/* ================= COUNTER COMPONENT ================= */
const CounterItem = ({ icon, value, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.max(Math.floor(duration / value), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === value) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <div className="counter-icon">{icon}</div>
      <h2 className="counter-number">
        {count}
        <span className="plus">+</span>
      </h2>
      <p>{text}</p>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const BannerCarousel = () => {
  const slides = [
    { type: "image", src: Banner1 },
    
    { type: "image", src: Banner2 },
    { type: "image", src: Banner13 },
    { type: "image", src: banner },

    { type: "image", src: Banner3 },
     { type: "image", src: Banner14 },
    { type: "image", src: Banner4 },
    { type: "image", src: Banner5 },
    { type: "image", src: Banner6 },
    { type: "image", src: Banner7 },
     { type: "image", src: Banner12 },
    { type: "image", src: Banner8 },
    { type: "image", src: Banner9 },
  
    { type: "image", src: Banner10 },
    { type: "image", src: Banner11 },
    
    
     

   
  ];

  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

  const playActiveVideo = (newIndex) => {
    videoRefs.current.forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });
    const activeVideo = videoRefs.current[newIndex];
    if (activeVideo) activeVideo.play().catch(() => {});
  };

  const nextSlide = () => {
    const newIndex = (index + 1) % slides.length;
    setIndex(newIndex);
    playActiveVideo(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (index - 1 + slides.length) % slides.length;
    setIndex(newIndex);
    playActiveVideo(newIndex);
  };

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 sec auto slide

    return () => clearInterval(interval);
  }, [index]);

  /* ================= COUNTERS ================= */
  const counters = [
    { icon: <FaUsers />, value: 200, text: "Active Users" },
    { icon: <FaStore />, value: 5, text: "Verified Vendors" },
    { icon: <FaBoxOpen />, value: 200, text: "Products Listed" },
    { icon: <FaShoppingCart />, value: 230, text: "Total Orders" },
  ];

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* ================= BANNER ================= */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 2,
          }}
        />

        <div
          style={{
            display: "flex",
            transform: `translateX(-${index * 100}%)`,
            transition: "0.8s ease-in-out",
            height: "100%",
          }}
        >
          {slides.map((item, i) => (
            <div key={i} style={{ minWidth: "100%", height: "100%" }}>
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt=""
                  style={{
                    wposition: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    objectFit: "cover",    // changed from contain → cover
    objectPosition: "center"
                  }}
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[i] = el)}
                  src={item.src}
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* ================= TEXT ================= */}
        <div
  style={{
    position: "absolute",
    top: "38%",
    left: "50px",
    zIndex: 3,
    color: "#fff",
    maxWidth: "560px",
  }}
>
  <h1
    style={{
      fontSize: "30px",          // heading thoda chhota
      fontWeight: 700,
      lineHeight: "44px",        // line break smooth
      marginBottom: "14px",
      letterSpacing: "0.5px",
    }}
  >
    Welcome to Bihar & Jharkhand Where Culture Turns into Craft
  </h1>

  <p
    style={{
      fontSize: "20px",          // description bada
      lineHeight: "28px",
      fontWeight: 400,
      color: "#f1f1f1",          // soft white
    }}
  >
    Discover authentic products made by local hands—inspired by tradition, made with heart, and created to bring the spirit of Bihar &  Jharkhand into everyday life.
  </p>
</div>



        {/* ================= ARROWS ================= */}
        <button onClick={prevSlide} style={arrowStyle("left")}>
          <FaChevronLeft />
        </button>
        <button onClick={nextSlide} style={arrowStyle("right")}>
          <FaChevronRight />
        </button>
      </div>

      {/* ================= COUNTER ================= */}
      <div
        style={{
          marginTop: "-90px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="counter-box">
          {counters.map((c, i) => (
            <CounterItem key={i} {...c} />
          ))}
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>
        {`
.counter-box{
  background:#8b0000;
  width:90%;
  max-width:1200px;
  border-radius:18px;
  box-shadow:0 20px 50px rgba(0,0,0,0.35);
  padding:40px 25px;
  border:2px solid #d3bf0a;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  text-align:center;
  gap:20px;
}
.counter-icon{
  font-size:36px;
  color:#fff;
}
.counter-number{
  font-size:36px;
  font-weight:800;
  color:#fff;
}
.counter-item p{
  color:#ffeaea;
}
@media(max-width:768px){
  .counter-box{
    grid-template-columns:repeat(2,1fr);
  }
}
`}
      </style>
    </div>
  );
};

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "8px",
  transform: "translateY(-50%)",
  zIndex: 5,
  background: "rgba(0,0,0,0.6)",
  border: "none",
  color: "#fff",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  cursor: "pointer",
});

export default BannerCarousel;








// import React, { useState, useEffect } from "react";
// import "../Banner.css";

// /* LEFT IMAGES */
// import kurti1 from "../what-we-offer-biharimage/silkkurti.jpeg";
// import kurti2 from "../what-we-offer-biharimage/kurtismall.jpeg";
// import kurti3 from "../what-we-offer-biharimage/kurti3.jpeg";
// import suite from "../what-we-offer-biharimage/mithlasuite1.jpeg";
// import suite1 from "../what-we-offer-biharimage/Mithlasuite.jpeg";
// import shorai from "../what-we-offer-biharimage/shorai.jpeg";
// import shorai1 from "../what-we-offer-biharimage/shorai1.jpeg";
// import madhubani from "../what-we-offer-biharimage/madhubani.jpeg";
// import madhubani1 from "../what-we-offer-biharimage/madhubani1.jpeg";
// import mathliblue from "../what-we-offer-biharimage/mathliblue.jpeg";
// import mathliblue1 from "../what-we-offer-biharimage/mathliblue1.jpeg";
// import mithilapaint from "../what-we-offer-biharimage/mithlapaint.jpeg";
// import mithilapaint1 from "../what-we-offer-biharimage/mithlapaint1.jpeg";
// import wall from "../what-we-offer-biharimage/madhubaniwall.jpeg";
// import wall1 from "../what-we-offer-biharimage/madubaniwallhangi1.jpeg";
// import wall2 from "../what-we-offer-biharimage/madhubaniwalhanging2.jpeg";
// import kurta from "../what-we-offer-biharimage/menskurta.jpeg";
// import kurta1 from "../what-we-offer-biharimage/menkurta1.jpeg";
// import kidscraft from "../what-we-offer-biharimage/kidscraft.jpeg";

// /* RIGHT SIDE SLIDER IMAGES */
// import Banner5 from "../Biharimage/jharkhandfood.webp";
// import Banner6 from "../Biharimage/chat.webp";
// import Banner7 from "../Biharimage/Thekua.jpg";
// import Banner8 from "../Biharimage/SHARUHAL.webp";
// import Banner9 from "../Biharimage/slider3.jpeg";
// import Banner11 from "../Biharimage/businessmodel.jpeg";
// import Banner12 from "../Biharimage/jhman.jpg";
// import Banner13 from "../Biharimage/slider1.jpeg";

// const Banner = () => {
//   /* LEFT SIDE DATA WITH TEXT */
//   const allImages = [
//     { id: 1, src: kurti1, name: "Silk Kurti", price: "₹1,299" },
//     { id: 2, src: kurti2, name: "Cotton Kurti", price: "₹999" },
//     { id: 3, src: kurti3, name: "Designer Kurti", price: "₹1,599" },
//     { id: 4, src: suite, name: "Mithila Suite", price: "₹2,499" },
//     { id: 5, src: suite1, name: "Traditional Suite", price: "₹2,999" },
//     { id: 6, src: shorai, name: "Shorai Art", price: "₹899" },
//     { id: 7, src: shorai1, name: "Shorai Painting", price: "₹1,199" },
//     { id: 8, src: madhubani, name: "Madhubani Art", price: "₹1,599" },
//     { id: 9, src: madhubani1, name: "Madhubani Painting", price: "₹1,899" },
//     { id: 10, src: mathliblue, name: "Mathil Blue", price: "₹2,199" },
//     { id: 11, src: mathliblue1, name: "Blue Art", price: "₹2,499" },
//     { id: 12, src: mithilapaint, name: "Mithila Painting", price: "₹1,799" },
//     { id: 13, src: mithilapaint1, name: "Mithila Art", price: "₹2,099" },
//     { id: 14, src: wall, name: "Wall Art", price: "₹3,499" },
//     { id: 15, src: wall1, name: "Wall Hanging", price: "₹2,999" },
//     { id: 16, src: wall2, name: "Madhubani Wall", price: "₹3,999" },
//     { id: 17, src: kurta, name: "Men Kurta", price: "₹1,499" },
//     { id: 18, src: kurta1, name: "Designer Kurta", price: "₹1,899" },
//     { id: 19, src: kidscraft, name: "Kids Craft", price: "₹799" },
//   ];

//   const rightImages = [
//     Banner5,
//     Banner6,
//     Banner7,
//     Banner8,
//     Banner9,
//     Banner11,
//     Banner12,
//     Banner13,
//   ];

//   /* LEFT GRID */
//   const [leftImages, setLeftImages] = useState(allImages.slice(0, 4));
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false);
//       setTimeout(() => {
//         const shuffled = [...allImages].sort(() => 0.5 - Math.random());
//         setLeftImages(shuffled.slice(0, 4));
//         setFade(true);
//       }, 400);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   /* RIGHT CAROUSEL */
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentSlide((prev) =>
//         prev === rightImages.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(slider);
//   }, []);

//   return (
//     <div className="banner">
//       {/* LEFT GRID */}
//       <div className="banner-left">
//         <div className="grid-container">
//           {leftImages.map((item, index) => (
//             <div key={item.id} className="grid-item">
//               <img
//                 src={item.src}
//                 alt={item.name}
//                 className={fade ? "fade-in" : "fade-out"}
//               />
//               <div className="image-overlay">
//                 <p>{item.name}</p>
//                 <span>{item.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT CAROUSEL */}
//       <div className="banner-right">
//         <div
//           className="carousel-track"
//           style={{
//             transform: `translateX(-${currentSlide * 100}%)`,
//           }}
//         >
           
//           {rightImages.map((img, index) => (
//             <img key={index} src={img} alt="slide" />
            
//           ))}
//           <div className="overlay">
//           <h1>Bihar & Jharkhand Heritage</h1>
//           <p>Authentic Handicrafts • Traditional Wear • Madhubani Art</p>
//           <button>Shop Now</button>
//         </div>
//         </div>

       
//       </div>
//     </div>
//   );
// };

// export default Banner;
