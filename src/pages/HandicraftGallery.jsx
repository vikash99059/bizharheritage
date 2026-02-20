// import React, { useState } from "react";
// import "./HandicraftGallery.css";

// import img1 from "./Productimage/silkkurti.jpeg";
// import img2 from "./Productimage/kurtismall.jpeg";

// const initialBoxes = [
//   {
//     id: 1,
//     name: "Handloom Saree",
//     main: img1,
//     thumb: img2,
//   },
//   {
//     id: 2,
//     name: "Traditional Kurti",
//     main: img1,
//     thumb: img2,
//   },
//   {
//     id: 3,
//     name: "Ethnic Decor",
//     main: img1,
//     thumb: img2,
//   },
//   {
//     id: 4,
//     name: "Wall Art",
//     main: img1,
//     thumb: img2,
//   },
// ];

// const SwapGallery = () => {
//   const [boxes, setBoxes] = useState(initialBoxes);

//   const swapImages = (index) => {
//     const updated = [...boxes];
//     const temp = updated[index].main;
//     updated[index].main = updated[index].thumb;
//     updated[index].thumb = temp;
//     setBoxes(updated);
//   };

//   return (
//     <section className="swap-gallery">
//       <div className="swap-container">
//         {boxes.map((box, index) => (
//           <div className="swap-box" key={box.id}>
//             <img
//               src={box.main}
//               alt={box.name}
//               className="main-image"
//             />

//             <div className="box-footer">
//               <span className="box-name">{box.name}</span>

//               <img
//                 src={box.thumb}
//                 alt="thumbnail"
//                 className="thumb-image"
//                 onClick={() => swapImages(index)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SwapGallery;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import img1 from "./Productimage/silkkurti.jpeg";
// import img2 from "./Productimage/kurtismall.jpeg";
// import img3 from "./Productimage/shree.jpeg";
// import img4 from "./Productimage/shree1.jpeg";
// import img5 from "./Productimage/wallnew.jpeg";
// import img6 from "./Productimage/wall2.jpeg";
// import img7 from './Productimage/radapaint.jpeg';
// import img8 from './Productimage/radhapaint1.jpeg';


// const initialBoxes = [
//   { id: 1, name: "Handloom Saree", subtitle: "Traditional silk collection", main: img3, thumb: img4, link: "/what-we-offer-bihar" },
//   { id: 2, name: "Traditional Kurti", subtitle: "Elegant ethnic wear", main: img1, thumb: img2, link: "/what-we-offer-bihar" },
//   { id: 3, name: "Ethnic Decor", subtitle: "Handcrafted home decor", main: img5, thumb: img6, link: "/what-we-offer-bihar" },
//   { id: 4, name: "Wall Art", subtitle: "Authentic Indian paintings", main: img7, thumb: img8, link: "/what-we-offer-bihar" },
// ];

// const SwapGallery = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <section style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ textAlign: "center", marginBottom: "2rem" }}>
//         <h2 style={{ fontSize: "2rem", margin: 0 }}>
//           Explore Our Handicraft <span style={{ color: "#b5651d" }}>Collection</span>
//         </h2>
//         <p style={{ color: "#555", marginTop: "0.5rem" }}>
//           Discover handmade treasures from the heart of India.
//         </p>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexWrap: "nowrap",
//           overflowX: "hidden",
//           justifyContent: "center",
//           gap: "1rem",
//           paddingBottom: "1rem",
//         }}
//       >
//         {initialBoxes.map((box, index) => (
//           <Link
//             to={box.link}
//             key={box.id}
//             onMouseEnter={() => setHovered(index)}
//             onMouseLeave={() => setHovered(null)}
//             style={{
//               position: "relative",
//               display: "inline-block",
//               textDecoration: "none",
//               color: "white",
//               cursor: "pointer",
//               overflow: "hidden",
//               flex: "0 0 auto",
//               width: "300px",        // width similar to screenshot
//               borderRadius: "4px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // optional shadow
//             }}
//           >
//             <img
//               src={hovered === index ? box.thumb : box.main}
//               alt={box.name}
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover", // keeps image fully visible, no stretching
//                 transition: "transform 0.3s ease",
//               }}
//             />

//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 width: "100%",
//                 padding: "0.5rem 0.8rem",
//                 background: "rgba(0,0,0,0.4)",
//                 backdropFilter: "blur(4px)",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//               }}
//             >
//               <span style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "2px" }}>
//                 {box.name}
//               </span>
//               <span style={{ fontSize: "0.85rem", color: "#f0f0f0" }}>
//                 {box.subtitle}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SwapGallery;


import React, { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "./Productimage/silkkurti.jpeg";
import img2 from "./Productimage/mithilalahnga.jpeg";
import img3 from "./Productimage/shree.jpeg";
import img4 from "./Productimage/menskurta.jpeg";
import img5 from "./Productimage/wallnew.jpeg";
import img6 from "./Productimage/loutsart.jpeg";
import img7 from './Productimage/mithlapaint1.jpeg';
import img8 from './Productimage/budhpainting1.jpeg';

const initialBoxes = [
  { id: 1, name: "Handloom Saree", subtitle: "Traditional silk collection", main: img3, thumb: img4, link: "/what-we-offer-bihar" },
  { id: 2, name: "Traditional Kurti", subtitle: "Elegant ethnic wear", main: img1, thumb: img2, link: "/what-we-offer-bihar" },
  { id: 3, name: "Ethnic Decor", subtitle: "Handcrafted home decor", main: img5, thumb: img6, link: "/what-we-offer-bihar" },
  { id: 4, name: "Wall Art", subtitle: "Authentic Indian paintings", main: img8, thumb: img7, link: "/what-we-offer-bihar" },
];

const SwapGallery = () => {
  const [hovered, setHovered] = useState(null);
const isMobile = window.innerWidth <= 768;

  return (
    <section style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", margin: 0 }}>
          Explore Our Handicraft <span style={{ color: "#8b0000" }}>Collection</span>
        </h2>
        <p style={{ color: "#555", marginTop: "0.5rem" }}>
          Discover handmade treasures from the heart of India.
        </p>
      </div>

      <div

        style={{
          display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  scrollbarWidth:"none",
  justifyContent: isMobile ? "flex-start" : "center",
  gap: "1rem",
  paddingBottom: "1rem",
  scrollSnapType: "x mandatory",
  WebkitOverflowScrolling: "touch",
        }}
      >

        {initialBoxes.map((box, index) => (
          <Link
            to={box.link}
            key={box.id}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
              overflow: "hidden",
              flex: "0 0 auto",
              width: "300px",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              scrollSnapAlign: "start",   // add this
            }}
          >
            {/* Main Image with Fade */}
            <img
              src={box.main}
              alt={box.name}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.5s ease",
                opacity: hovered === index ? 0 : 1,
                position: "relative",
                zIndex: 1,
              }}
            />

            {/* Thumbnail Image with Fade */}
            <img
              src={box.thumb}
              alt={`${box.name} thumbnail`}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.5s ease",
                opacity: hovered === index ? 1 : 0,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 2,
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: "0.5rem 0.8rem",
                background: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(4px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                zIndex: 3,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "2px" }}>
                {box.name}
              </span>
              <span style={{ fontSize: "0.85rem", color: "#f0f0f0" }}>
                {box.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SwapGallery;
