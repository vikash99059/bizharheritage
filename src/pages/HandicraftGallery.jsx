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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import img1 from "./Productimage/silkkurti.jpeg";
// import img2 from "./Productimage/mithilalahnga.jpeg";
// import img3 from "./Productimage/shree.jpeg";
// import img4 from "./Productimage/menskurta.jpeg";
// import img5 from "./Productimage/wallnew.jpeg";
// import img6 from "./Productimage/loutsart.jpeg";
// import img7 from './Productimage/mithlapaint1.jpeg';
// import img8 from './Productimage/budhpainting1.jpeg';

// const initialBoxes = [
//   { id: 1, name: "Handloom Saree", subtitle: "Traditional silk collection", main: img3, thumb: img4, link: "/what-we-offer-bihar" },
//   { id: 2, name: "Traditional Kurti", subtitle: "Elegant ethnic wear", main: img1, thumb: img2, link: "/what-we-offer-bihar" },
//   { id: 3, name: "Ethnic Decor", subtitle: "Handcrafted home decor", main: img5, thumb: img6, link: "/what-we-offer-bihar" },
//   { id: 4, name: "Wall Art", subtitle: "Authentic Indian paintings", main: img8, thumb: img7, link: "/what-we-offer-bihar" },
// ];

// const SwapGallery = () => {
//   const [hovered, setHovered] = useState(null);
// const isMobile = window.innerWidth <= 768;

//   return (
//     <section style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <div style={{ textAlign: "center", marginBottom: "2rem" }}>
//         <h2 style={{ fontSize: "2rem", margin: 0 }}>
//           Explore Our Handicraft <span style={{ color: "#8b0000" }}>Collection</span>
//         </h2>
//         <p style={{ color: "#555", marginTop: "0.5rem" }}>
//           Discover handmade treasures from the heart of India.
//         </p>
//       </div>

//       <div

//         style={{
//           display: "flex",
//   flexWrap: "nowrap",
//   overflowX: "auto",
//   scrollbarWidth:"none",
//   justifyContent: isMobile ? "flex-start" : "center",
//   gap: "1rem",
//   paddingBottom: "1rem",
//   scrollSnapType: "x mandatory",
//   WebkitOverflowScrolling: "touch",
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
//               width: "300px",
//               borderRadius: "4px",
//               boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//               scrollSnapAlign: "start",   // add this
//             }}
//           >
//             {/* Main Image with Fade */}
//             <img
//               src={box.main}
//               alt={box.name}
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "opacity 0.5s ease",
//                 opacity: hovered === index ? 0 : 1,
//                 position: "relative",
//                 zIndex: 1,
//               }}
//             />

//             {/* Thumbnail Image with Fade */}
//             <img
//               src={box.thumb}
//               alt={`${box.name} thumbnail`}
//               style={{
//                 display: "block",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 transition: "opacity 0.5s ease",
//                 opacity: hovered === index ? 1 : 0,
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 zIndex: 2,
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
//                 zIndex: 3,
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




// import React, { useRef, useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const NewLaunchSlider = () => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = (data.products || data).map((p, index) => ({
//           id: p.id,
//           name: p.name,
//           price: p.sell_price,
//           originalPrice: p.original_price,
//           image1: p.images?.[0]?.url || "https://via.placeholder.com/400x500",
//           image2: p.images?.[1]?.url || p.images?.[0]?.url || "https://via.placeholder.com/400x500",
//           rating: 4 + Math.random(), // Simulated rating
//           reviews: Math.floor(Math.random() * 100) + 20 // Simulated reviews
//         }));
//         setProducts(formatted);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = 320; // Card width + gap
//       sliderRef.current.scrollBy({
//         left: direction === 'next' ? scrollAmount : -scrollAmount,
//         behavior: "smooth"
//       });
//     }
//   };

//   const renderRating = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="star filled" />);
//     }
//     if (hasHalfStar) {
//       stars.push(<FaStarHalfAlt key="half" className="star filled" />);
//     }
//     const remainingStars = 5 - stars.length;
//     for (let i = 0; i < remainingStars; i++) {
//       stars.push(<FaStar key={`empty-${i}`} className="star" />);
//     }
//     return stars;
//   };

//   if (loading) {
//     return (
//       <div className="launch-container">
//         <div className="loading-spinner">
//           <div className="spinner"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="launch-container">
//       {/* HEADER SECTION */}
//       <div className="launch-header">
//         <div className="header-content">
//           <h2 className="section-title">
//             <span className="title-highlight">New</span> Arrivals
//           </h2>
//           <p className="section-subtitle">Discover the latest trends in fashion</p>
//         </div>

//         <div className="nav-controls">
//           <button className="nav-btn prev-btn" onClick={() => scroll('prev')}>
//             <FaChevronLeft />
//           </button>
//           <button className="nav-btn next-btn" onClick={() => scroll('next')}>
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>

//       {/* PRODUCT SLIDER */}
//       <div className="slider-wrapper">
//         <div className="product-slider" ref={sliderRef}>
//           {products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//               onClick={() => navigate(`/product/${product.id}`)}
//             >
//               {/* IMAGE CONTAINER */}
//               <div className="product-image-container">
//                 <div className="product-image">
//                   <img
//                     src={product.image1}
//                     className="img-front"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                   <img
//                     src={product.image2}
//                     className="img-back"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* BADGES */}
//                 <div className="product-badges">
//                   {product.originalPrice && (
//                     <span className="badge discount">
//                       {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
//                     </span>
//                   )}
//                 </div>

//                 {/* WISHLIST BUTTON */}
//                 <button className="wishlist-btn" onClick={(e) => e.stopPropagation()}>
//                   <FaHeart />
//                 </button>

//                 {/* QUICK VIEW */}
//                 <div className="quick-view">
//                   <span>Quick View</span>
//                 </div>
//               </div>

//               {/* PRODUCT INFO */}
//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>

//                 <div className="product-rating">
//                   <div className="stars">
//                     {renderRating(product.rating)}
//                   </div>
//                   <span className="reviews">({product.reviews})</span>
//                 </div>

//                 <div className="product-price">
//                   <span className="current-price">₹{product.price}</span>
//                   {product.originalPrice && (
//                     <>
//                       <span className="original-price">₹{product.originalPrice}</span>
//                       <span className="save-tag">
//                         Save ₹{product.originalPrice - product.price}
//                       </span>
//                     </>
//                   )}
//                 </div>

//                 <button className="add-to-cart" onClick={(e) => e.stopPropagation()}>
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .launch-container {
//           padding: 60px 5%;
//           background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
//           position: relative;
//           overflow: hidden;
//         }

//         /* Header Styles */
//         .launch-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-end;
//           margin-bottom: 40px;
//           position: relative;
//           z-index: 2;
//         }

//         .header-content {
//           flex: 1;
//         }

//         .section-title {
//           font-size: 42px;
//           font-weight: 300;
//           margin: 0 0 10px 0;
//           color: #1a1a1a;
//           letter-spacing: -0.5px;
//         }

//         .title-highlight {
//           font-weight: 700;
//           color: #000;
//           position: relative;
//           display: inline-block;
//         }

//         .title-highlight::after {
//           content: '';
//           position: absolute;
//           bottom: 5px;
//           left: 0;
//           width: 100%;
//           height: 8px;
//           background: linear-gradient(90deg, #ffd700 0%, #ffb347 100%);
//           opacity: 0.3;
//           z-index: -1;
//         }

//         .section-subtitle {
//           color: #666;
//           font-size: 16px;
//           margin: 0;
//           letter-spacing: 0.3px;
//         }

//         /* Navigation Controls */
//         .nav-controls {
//           display: flex;
//           gap: 15px;
//         }

//         .nav-btn {
//           width: 50px;
//           height: 50px;
//           border: none;
//           background: white;
//           border-radius: 50%;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 20px;
//           color: #333;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//           z-index: 10;
//         }

//         .nav-btn:hover {
//           background: #000;
//           color: white;
//           transform: scale(1.05);
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
//         }

//         .nav-btn:active {
//           transform: scale(0.95);
//         }

//         /* Slider Wrapper */
//         .slider-wrapper {
//           position: relative;
//           margin: 0 -10px;
//         }

//         .product-slider {
//           display: flex;
//           gap: 25px;
//           overflow-x: auto;
//           scrollbar-width: none;
//           scroll-behavior: smooth;
//           padding: 10px;
//           margin: -10px;
//         }

//         .product-slider::-webkit-scrollbar {
//           display: none;
//         }

//         /* Product Card */
//         .product-card {
//           width: 300px;
//           height: 400px;
//           display: flex;
//           flex-direction: column;
//           flex: 0 0 auto;
//           cursor: pointer;
//           background: white;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//           transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
//           position: relative;
//         }

//         .product-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }

//         /* Image Container */
//         .product-image-container {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 3/4;
//           overflow: hidden;
//           background: #f8f8f8;
//         }

//         .product-image {
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }

//         .product-image img {
//           width: 300px;
//           height: 300px;
//           object-fit: contain;
//           position: absolute;
//           top: 0;
//           left: 0;
//           transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .img-front {
//           opacity: 1;
//           z-index: 1;
//         }

//         .img-back {
//           opacity: 0;
//           z-index: 2;
//         }

//         .product-image-container:hover .img-front {
//           opacity: 0;
//           transform: scale(1.05);
//         }

//         .product-image-container:hover .img-back {
//           opacity: 1;
//           transform: scale(1.05);
//         }

//         /* Badges */
//         .product-badges {
//           position: absolute;
//           top: 15px;
//           left: 15px;
//           z-index: 3;
//           display: flex;
//           gap: 10px;
//         }

//         .badge {
//           padding: 6px 12px;
//           border-radius: 30px;
//           font-size: 12px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//         }

//         .badge.discount {
//           background: linear-gradient(135deg, #ff416c, #ff4b2b);
//           color: white;
//         }

//         /* Wishlist Button */
//         .wishlist-btn {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           z-index: 3;
//           background: white;
//           border: none;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 18px;
//           color: #ff416c;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }

//         .wishlist-btn:hover {
//           transform: scale(1.1);
//           background: #ff416c;
//           color: white;
//         }

//         /* Quick View */
//         .quick-view {
//           position: absolute;
//           bottom: -50px;
//           left: 0;
//           right: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
//           color: white;
//           padding: 15px;
//           text-align: center;
//           z-index: 4;
//           transition: bottom 0.3s ease;
//           font-weight: 500;
//           letter-spacing: 1px;
//           font-size: 14px;
//         }

//         .product-image-container:hover .quick-view {
//           bottom: 0;
//         }

//         /* Product Info */
//         .product-info {
//           padding: 20px;
//           background: white;
//         }

//         .product-name {
//           font-size: 16px;
//           font-weight: 500;
//           margin: 0 0 10px 0;
//           color: #333;
//           line-height: 1.4;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//           height: 44px;
//         }

//         /* Rating */
//         .product-rating {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 12px;
//         }

//         .stars {
//           display: flex;
//           gap: 2px;
//         }

//         .star {
//           color: #ddd;
//           font-size: 14px;
//         }

//         .star.filled {
//           color: #ffd700;
//         }

//         .reviews {
//           color: #888;
//           font-size: 13px;
//         }

//         /* Price */
//         .product-price {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex-wrap: wrap;
//           margin-bottom: 15px;
//         }

//         .current-price {
//           font-size: 20px;
//           font-weight: 700;
//           color: #000;
//         }

//         .original-price {
//           font-size: 16px;
//           color: #999;
//           text-decoration: line-through;
//         }

//         .save-tag {
//           background: #e8f5e9;
//           color: #2e7d32;
//           padding: 4px 8px;
//           border-radius: 20px;
//           font-size: 12px;
//           font-weight: 600;
//         }

//         /* Add to Cart Button */
//         .add-to-cart {
//           width: 100%;
//           padding: 12px;
//           background: transparent;
//           border: 2px solid #000;
//           border-radius: 30px;
//           font-size: 14px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           color: #000;
//         }

//         .add-to-cart:hover {
//           background: #000;
//           color: white;
//         }

//         /* Loading Spinner */
//         .loading-spinner {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 400px;
//         }

//         .spinner {
//           width: 50px;
//           height: 50px;
//           border: 3px solid #f3f3f3;
//           border-top: 3px solid #000;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* Responsive Design */
//         @media (max-width: 1200px) {
//           .product-card {
//             min-width: 280px;
//           }
//         }

//         @media (max-width: 992px) {
//           .section-title {
//             font-size: 36px;
//           }

//           .product-card {
//             min-width: 260px;
//           }
//         }

//         @media (max-width: 768px) {
//           .launch-container {
//             padding: 40px 20px;
//           }

//           .launch-header {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 20px;
//           }

//           .nav-controls {
//             align-self: flex-end;
//           }

//           .section-title {
//             font-size: 32px;
//           }

//           .product-slider {
//             gap: 15px;
//           }

//           .product-card {
//             min-width: 240px;
//           }

//           .quick-view {
//             display: none;
//           }
//         }

//         @media (max-width: 480px) {
//           .product-card {
//             min-width: 200px;
//           }

//           .product-info {
//             padding: 15px;
//           }

//           .current-price {
//             font-size: 18px;
//           }

//           .add-to-cart {
//             padding: 10px;
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NewLaunchSlider;




// import React, { useRef, useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaHeart, FaStar, FaStarHalfAlt, FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const NewLaunchSlider = () => {
//   const sliderRef = useRef(null);
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = (data.products || data).map((p) => ({
//           id: p.id,
//           name: p.name,
//           price: p.sell_price,
//           originalPrice: p.original_price,
//           image1: p.images?.[0]?.url || "https://via.placeholder.com/400x400",
//           image2: p.images?.[1]?.url || p.images?.[0]?.url || "https://via.placeholder.com/400x400",
//           rating: 4 + Math.random() * 0.9,
//           reviews: Math.floor(Math.random() * 80) + 15,
//           discount: p.original_price ? Math.round(((p.original_price - p.sell_price) / p.original_price) * 100) : 0
//         }));
//         setProducts(formatted);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       const cardWidth = 400 + 25; // Card width + gap
//       sliderRef.current.scrollBy({
//         left: direction === 'next' ? cardWidth : -cardWidth,
//         behavior: "smooth"
//       });
//     }
//   };

//   const toggleWishlist = (e, productId) => {
//     e.stopPropagation();
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const renderRating = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={`full-${i}`} className="star filled" />);
//     }
//     if (hasHalfStar) {
//       stars.push(<FaStarHalfAlt key="half" className="star filled" />);
//     }
//     const remainingStars = 5 - stars.length;
//     for (let i = 0; i < remainingStars; i++) {
//       stars.push(<FaStar key={`empty-${i}`} className="star" />);
//     }
//     return stars;
//   };

//   if (loading) {
//     return (
//       <div className="launch-container">
//         <div className="loading-spinner">
//           <div className="spinner"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="launch-container">
//       {/* HEADER SECTION */}
//       <div className="launch-header">
//         <div className="header-content">
//           <h2 className="section-title">
//             <span className="title-highlight">New</span> Arrivals
//           </h2>
//           <p className="section-subtitle">Discover the latest trends collection</p>
//         </div>

//         <div className="nav-controls desktop-only">
//           <button className="nav-btn" onClick={() => scroll('prev')}>
//             <FaChevronLeft />
//           </button>
//           <button className="nav-btn" onClick={() => scroll('next')}>
//             <FaChevronRight />
//           </button>
//         </div>

//         <div className="view-all mobile-only">
//           <span>View All</span>
//         </div>
//       </div>

//       {/* DESKTOP SLIDER VIEW */}
//       <div className="slider-wrapper desktop-only">
//         <div className="product-slider" ref={sliderRef}>
//           {products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//               onClick={() => navigate(`/product/${product.id}`)}
//             >
//               <div className="product-image-container">
//                 <div className="product-image">
//                   <img
//                     src={product.image1}
//                     className="img-front"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                   <img
//                     src={product.image2}
//                     className="img-back"
//                     alt={product.name}
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* DISCOUNT BADGE - PREMIUM */}
//                 {product.discount > 0 && (
//                   <div className="discount-badge">
//                     <span className="discount-text">{product.discount}% OFF</span>
//                   </div>
//                 )}

//                 {/* WISHLIST BUTTON */}
//                 <button 
//                   className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
//                   onClick={(e) => toggleWishlist(e, product.id)}
//                 >
//                   <FaHeart />
//                 </button>

//                 {/* QUICK VIEW */}
//                 <div className="quick-view">
//                   <FaEye />
//                   <span>Quick View</span>
//                 </div>
//               </div>

//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>

//                 <div className="product-rating">
//                   <div className="stars">
//                     {renderRating(product.rating)}
//                   </div>
//                   <span className="reviews">({product.reviews})</span>
//                 </div>

//                 <div className="product-price">
//                   <span className="current-price">₹{product.price}</span>
//                   {product.originalPrice && (
//                     <>
//                       <span className="original-price">₹{product.originalPrice}</span>
//                       <span className="save-tag">Save ₹{product.originalPrice - product.price}</span>
//                     </>
//                   )}
//                 </div>

//                 {/* <button className="add-to-cart" onClick={(e) => e.stopPropagation()}>
//                   Add to Cart
//                 </button> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MOBILE GRID VIEW - 2 CARDS PER ROW */}
//       <div className="product-grid mobile-only">
//         {products.slice(0, 6).map((product) => (
//           <div
//             className="grid-card"
//             key={product.id}
//             onClick={() => navigate(`/product/${product.id}`)}
//           >
//             <div className="grid-image-container">
//               <img
//                 src={product.image1}
//                 alt={product.name}
//                 loading="lazy"
//                 className="grid-image"
//               />

//               {/* PREMIUM DISCOUNT BADGE */}
//               {product.discount > 0 && (
//                 <div className="grid-discount">
//                   <span>{product.discount}%</span>
//                 </div>
//               )}

//               {/* WISHLIST BUTTON */}
//               <button 
//                 className={`grid-wishlist ${wishlist.includes(product.id) ? 'active' : ''}`}
//                 onClick={(e) => toggleWishlist(e, product.id)}
//               >
//                 <FaHeart />
//               </button>

//               {/* RATING OVERLAY */}
//               <div className="grid-rating-overlay">
//                 <div className="grid-stars">
//                   {renderRating(product.rating)}
//                 </div>
//                 <span className="grid-reviews">{product.reviews}</span>
//               </div>
//             </div>

//             <div className="grid-info">
//               <h4 className="grid-title">{product.name}</h4>

//               <div className="grid-price-container">
//                 <span className="grid-current">₹{product.price}</span>
//                 {product.originalPrice && (
//                   <span className="grid-original">₹{product.originalPrice}</span>
//                 )}
//               </div>

//               {product.discount > 0 && (
//                 <div className="grid-save-tag">
//                   Save ₹{product.originalPrice - product.price}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .launch-container {
//           padding: 60px 5%;
//           background: #fafafa;
//           max-width: 1600px;
//           margin: 0 auto;
//         }

//         /* HEADER STYLES */
//         .launch-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 40px;
//         }

//         .header-content {
//           flex: 1;
//         }

//         .section-title {
//           font-size: 36px;
//           font-weight: 300;
//           margin: 0 0 5px 0;
//           color: #1a1a1a;
//           letter-spacing: -0.5px;
//         }

//         .title-highlight {
//           font-weight: 700;
//           position: relative;
//           display: inline-block;
//         }

//         .title-highlight::after {
//           content: '';
//           position: absolute;
//           bottom: 5px;
//           left: 0;
//           width: 100%;
//           height: 8px;
//           background: linear-gradient(90deg, #000 0%, #333 100%);
//           opacity: 0.1;
//           border-radius: 4px;
//         }

//         .section-subtitle {
//           color: #666;
//           font-size: 15px;
//           margin: 0;
//         }

//         .view-all {
//           padding: 8px 20px;
//           border: 1px solid #000;
//           border-radius: 25px;
//           font-size: 13px;
//           font-weight: 500;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .view-all:hover {
//           background: #000;
//           color: white;
//         }

//         /* NAVIGATION CONTROLS */
//         .nav-controls {
//           display: flex;
//           gap: 12px;
//         }

//         // .nav-btn {
//         //   width: 48px;
//         //   height: 48px;
//         //   border: 1px solid #e0e0e0;
//         //   background: white;
//         //   border-radius: 50%;
//         //   cursor: pointer;
//         //   display: flex;
//         //   align-items: center;
//         //   justify-content: center;
//         //   font-size: 18px;
//         //   color: #333;
//         //   transition: all 0.3s ease;
//         //   box-shadow: 0 4px 12px rgba(0,0,0,0.05);
//         // }

//         // .nav-btn:hover {
//         //   background: #000;
//         //   color: white;
//         //   border-color: #000;
//         //   transform: scale(1.05);
//         // }

//         /* DESKTOP SLIDER */
//         .slider-wrapper {
//           position: relative;
//         }

//         .product-slider {
//           display: flex;
//           gap: 25px;
//           overflow-x: auto;
//           scrollbar-width: none;
//           scroll-behavior: smooth;
//           padding: 10px 0 20px 0;
//         }

//         .product-slider::-webkit-scrollbar {
//           display: none;
//         }

//         /* DESKTOP CARD - 400x400 */
//         .product-card {
//           min-width: 300px;
//           width: 300px;
//           height: 400px;
//           display: flex;
//           flex-direction: column;
//           flex: 0 0 auto;
//           cursor: pointer;
//           background: white;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//           transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
//           position: relative;
//         }

//         .product-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
//         }

//         /* IMAGE CONTAINER - 400x400 */
//         .product-image-container {
//           position: relative;
//           width: 300px;
//           height: 300px;
//           overflow: hidden;
//           background: #f5f5f5;
//         }

//         .product-image {
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }

//         .product-image img {
//           width: 300px;
//           height: 300px;
//           object-fit: contain;
//           position: absolute;
//           top: 0;
//           left: 0;
//           transition: opacity 0.5s ease, transform 0.8s ease;
//         }

//         .img-front {
//           opacity: 1;
//           z-index: 1;
//         }

//         .img-back {
//           opacity: 0;
//           z-index: 2;
//         }

//         .product-card:hover .img-front {
//           opacity: 0;
//           transform: scale(1.1);
//         }

//         .product-card:hover .img-back {
//           opacity: 1;
//           transform: scale(1.1);
//         }

//         /* DISCOUNT BADGE */
//         .discount-badge {
//           position: absolute;
//           top: 15px;
//           left: 15px;
//           z-index: 3;
//           background: linear-gradient(135deg, #ff416c, #ff4b2b);
//           color: white;
//           padding: 8px 12px;
//           border-radius: 30px;
//           font-size: 13px;
//           font-weight: 700;
//           letter-spacing: 0.5px;
//           box-shadow: 0 4px 15px rgba(255, 65, 108, 0.3);
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0% { box-shadow: 0 4px 15px rgba(255, 65, 108, 0.3); }
//           50% { box-shadow: 0 4px 20px rgba(255, 65, 108, 0.5); }
//           100% { box-shadow: 0 4px 15px rgba(255, 65, 108, 0.3); }
//         }

//         /* WISHLIST BUTTON */
//         .wishlist-btn {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           z-index: 3;
//           background: white;
//           border: none;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 18px;
//           color: #ff416c;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//           transition: all 0.3s ease;
//         }

//         .wishlist-btn.active {
//           background: #ff416c;
//           color: white;
//         }

//         .wishlist-btn:hover {
//           transform: scale(1.1);
//         }

//         /* QUICK VIEW */
//         .quick-view {
//           position: absolute;
//           bottom: -50px;
//           left: 0;
//           right: 0;
//           background: rgba(0, 0, 0, 0.8);
//           backdrop-filter: blur(5px);
//           color: white;
//           padding: 12px;
//           text-align: center;
//           z-index: 4;
//           transition: bottom 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .product-card:hover .quick-view {
//           bottom: 0;
//         }

//         /* PRODUCT INFO */
//         .product-info {
//           padding: 15px 20px;
//           background: white;
//           flex: 1;
//         }

//         .product-name {
//           font-size: 16px;
//           font-weight: 500;
//           margin: 0 0 8px 0;
//           color: #333;
//           line-height: 1.4;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }

//         .product-rating {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 10px;
//         }

//         .stars {
//           display: flex;
//           gap: 2px;
//         }

//         .star {
//           color: #ddd;
//           font-size: 13px;
//         }

//         .star.filled {
//           color: #ffd700;
//         }

//         .reviews {
//           color: #888;
//           font-size: 12px;
//         }

//         .product-price {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           flex-wrap: wrap;
//           margin-bottom: 12px;
//         }

//         .current-price {
//           font-size: 20px;
//           font-weight: 700;
//           color: #000;
//         }

//         .original-price {
//           font-size: 15px;
//           color: #999;
//           text-decoration: line-through;
//         }

//         .save-tag {
//           background: #e8f5e9;
//           color: #2e7d32;
//           padding: 4px 10px;
//           border-radius: 20px;
//           font-size: 11px;
//           font-weight: 600;
//         }

//         .add-to-cart {
//           width: 100%;
//           padding: 12px;
//           background: transparent;
//           border: 2px solid #000;
//           border-radius: 30px;
//           font-size: 14px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           color: #000;
//         }

//         .add-to-cart:hover {
//           background: #000;
//           color: white;
//         }

//         /* MOBILE GRID - 2 CARDS PER ROW */
//         .product-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 15px;
//         }

//         .grid-card {
//           cursor: pointer;
//           background: white;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
//           transition: all 0.3s ease;
//         }

//         .grid-card:active {
//           transform: scale(0.98);
//         }

//         .grid-image-container {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 1/1;
//           overflow: hidden;
//           background: #f5f5f5;
//         }

//         .grid-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .grid-card:hover .grid-image {
//           transform: scale(1.08);
//         }

//         /* MOBILE DISCOUNT BADGE */
//         .grid-discount {
//           position: absolute;
//           top: 10px;
//           left: 10px;
//           z-index: 2;
//           background: linear-gradient(135deg, #ff416c, #ff4b2b);
//           color: white;
//           padding: 5px 8px;
//           border-radius: 20px;
//           font-size: 11px;
//           font-weight: 700;
//           box-shadow: 0 2px 8px rgba(255, 65, 108, 0.3);
//         }

//         /* MOBILE WISHLIST */
//         .grid-wishlist {
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           z-index: 2;
//           background: white;
//           border: none;
//           width: 32px;
//           height: 32px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           font-size: 14px;
//           color: #ff416c;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//           transition: all 0.2s ease;
//         }

//         .grid-wishlist.active {
//           background: #ff416c;
//           color: white;
//         }

//         /* MOBILE RATING OVERLAY */
//         .grid-rating-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
//           padding: 15px 10px 8px 10px;
//           display: flex;
//           align-items: center;
//           gap: 5px;
//           z-index: 2;
//         }

//         .grid-stars {
//           display: flex;
//           gap: 2px;
//         }

//         .grid-stars .star {
//           font-size: 10px;
//           color: rgba(255,255,255,0.5);
//         }

//         .grid-stars .star.filled {
//           color: #ffd700;
//         }

//         .grid-reviews {
//           color: white;
//           font-size: 10px;
//           opacity: 0.9;
//         }

//         /* MOBILE INFO */
//         .grid-info {
//           padding: 12px 10px;
//         }

//         .grid-title {
//           font-size: 13px;
//           font-weight: 500;
//           margin: 0 0 6px 0;
//           color: #333;
//           line-height: 1.3;
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//           height: 32px;
//         }

//         .grid-price-container {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           margin-bottom: 4px;
//         }

//         .grid-current {
//           font-size: 16px;
//           font-weight: 700;
//           color: #000;
//         }

//         .grid-original {
//           font-size: 12px;
//           color: #999;
//           text-decoration: line-through;
//         }

//         .grid-save-tag {
//           background: #e8f5e9;
//           color: #2e7d32;
//           padding: 3px 8px;
//           border-radius: 15px;
//           font-size: 10px;
//           font-weight: 600;
//           display: inline-block;
//         }

//         /* LOADING SPINNER */
//         .loading-spinner {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           min-height: 400px;
//         }

//         .spinner {
//           width: 50px;
//           height: 50px;
//           border: 3px solid #f3f3f3;
//           border-top: 3px solid #000;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         /* RESPONSIVE BREAKPOINTS */
//         @media (min-width: 769px) {
//           .desktop-only {
//             display: block;
//           }
//           .mobile-only {
//             display: none;
//           }
//         }

//         @media (max-width: 768px) {
//           .desktop-only {
//             display: none;
//           }
//           .mobile-only {
//             display: block;
//           }

//           .launch-container {
//             padding: 30px 4%;
//           }

//           .section-title {
//             font-size: 26px;
//           }

//           .section-subtitle {
//             font-size: 13px;
//           }

//           .product-grid {
//             gap: 12px;
//           }
//         }

//         @media (max-width: 480px) {
//           .product-grid {
//             gap: 10px;
//           }

//           .grid-info {
//             padding: 10px 8px;
//           }

//           .grid-title {
//             font-size: 12px;
//             height: 30px;
//           }

//           .grid-current {
//             font-size: 14px;
//           }

//           .grid-original {
//             font-size: 11px;
//           }

//           .grid-save-tag {
//             font-size: 9px;
//             padding: 2px 6px;
//           }
//         }

//         @media (max-width: 360px) {
//           .grid-current {
//             font-size: 13px;
//           }

//           .grid-original {
//             font-size: 10px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default NewLaunchSlider;



// import React, { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   Card,
//   CardMedia,
//   CardContent,
//   Chip,
//   Rating,
//   Stack
// } from "@mui/material";

// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// import { useNavigate } from "react-router-dom";

// const API_URL =
//   "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const NewLaunchSlider = () => {
//   const [products, setProducts] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const sliderRef = useRef();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = (data.products || data).map((p) => ({
//           id: p.id,
//           name: p.name,
//           price: p.sell_price,
//           originalPrice: p.original_price,
//           image1:
//             p.images?.[0]?.url ||
//             "https://via.placeholder.com/400x400",
//           image2:
//             p.images?.[1]?.url ||
//             p.images?.[0]?.url ||
//             "https://via.placeholder.com/400x400",
//           rating: 4 + Math.random() * 1,
//           reviews: Math.floor(Math.random() * 60) + 10,
//           discount: p.original_price
//             ? Math.round(
//                 ((p.original_price - p.sell_price) /
//                   p.original_price) *
//                   100
//               )
//             : 0
//         }));

//         setProducts(formatted);
//         setLoading(false);
//       });
//   }, []);

//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id)
//         ? prev.filter((i) => i !== id)
//         : [...prev, id]
//     );
//   };

//   const scroll = (direction) => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({
//         left: direction === "next" ? 350 : -350,
//         behavior: "smooth"
//       });
//     }
//   };

//   if (loading) return <Typography align="center">Loading...</Typography>;

//   return (
//     <Box sx={{ px: { xs: 2, md: 6 }, py: 6, background: "#fafafa" }}>
//       {/* HEADER */}

//       <Stack
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         mb={4}
//       >
//         <Box>
//           <Typography variant="h4" fontWeight={700}>
//             New Arrivals
//           </Typography>

//           <Typography color="text.secondary">
//             Discover latest products
//           </Typography>
//         </Box>

//         <Stack direction="row" spacing={1}>
//           <IconButton onClick={() => scroll("prev")}>
//             <ArrowBackIosNewIcon />
//           </IconButton>

//           <IconButton onClick={() => scroll("next")}>
//             <ArrowForwardIosIcon />
//           </IconButton>
//         </Stack>
//       </Stack>

//       {/* SLIDER */}

//       <Box
//         ref={sliderRef}
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           gap: 3,
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": { display: "none" }
//         }}
//       >
//         {products.map((product) => (
//           <Card
//             key={product.id}
//             sx={{
//               minWidth: { xs: 220, md: 300 },
//               borderRadius: 3,
//               cursor: "pointer",
//               position: "relative",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "translateY(-8px)",
//                 boxShadow: 6
//               }
//             }}
//             onClick={() =>
//               navigate(`/product/${product.id}`)
//             }
//           >
//             {/* IMAGE */}

//             <Box sx={{ position: "relative" }}>
//               <CardMedia
//                 component="img"
//                 height="260"
//                 image={product.image1}
//                 sx={{
//                   objectFit: "contain",
//                   p: 2,
//                   transition: "0.4s"
//                 }}
//               />

//               {/* DISCOUNT */}

//               {product.discount > 0 && (
//                 <Chip
//                   label={`${product.discount}% OFF`}
//                   color="error"
//                   size="small"
//                   sx={{
//                     position: "absolute",
//                     top: 10,
//                     left: 10,
//                     fontWeight: 700
//                   }}
//                 />
//               )}

//               {/* WISHLIST */}

//               <IconButton
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleWishlist(product.id);
//                 }}
//                 sx={{
//                   position: "absolute",
//                   top: 10,
//                   right: 10,
//                   bgcolor: "white"
//                 }}
//               >
//                 {wishlist.includes(product.id) ? (
//                   <FavoriteIcon color="error" />
//                 ) : (
//                   <FavoriteBorderIcon />
//                 )}
//               </IconButton>

//               {/* QUICK VIEW */}

//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 10,
//                   right: 10,
//                   bgcolor: "rgba(0,0,0,0.6)",
//                   color: "#fff",
//                   px: 1.5,
//                   py: 0.5,
//                   borderRadius: 2,
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 0.5,
//                   fontSize: 12
//                 }}
//               >
//                 <VisibilityIcon sx={{ fontSize: 16 }} />
//                 Quick
//               </Box>
//             </Box>

//             {/* PRODUCT INFO */}

//             <CardContent>
//               <Typography
//                 variant="subtitle1"
//                 fontWeight={600}
//                 sx={{
//                   display: "-webkit-box",
//                   WebkitLineClamp: 2,
//                   WebkitBoxOrient: "vertical",
//                   overflow: "hidden"
//                 }}
//               >
//                 {product.name}
//               </Typography>

//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 spacing={1}
//                 mt={0.5}
//               >
//                 <Rating
//                   value={product.rating}
//                   precision={0.5}
//                   size="small"
//                   readOnly
//                 />

//                 <Typography variant="caption">
//                   ({product.reviews})
//                 </Typography>
//               </Stack>

//               <Stack direction="row" spacing={1} mt={1}>
//                 <Typography
//                   variant="h6"
//                   fontWeight={700}
//                   color="black"
//                 >
//                   ₹{product.price}
//                 </Typography>

//                 {product.originalPrice && (
//                   <Typography
//                     sx={{
//                       textDecoration: "line-through",
//                       color: "gray",
//                       mt: "4px"
//                     }}
//                   >
//                     ₹{product.originalPrice}
//                   </Typography>
//                 )}
//               </Stack>

//               {product.originalPrice && (
//                 <Typography
//                   variant="caption"
//                   color="success.main"
//                 >
//                   Save ₹
//                   {product.originalPrice -
//                     product.price}
//                 </Typography>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default NewLaunchSlider;




import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Rating,
  Stack,
  Grid,
  useTheme,
  useMediaQuery
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useNavigate } from "react-router-dom";

const API_URL =
  "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

const NewLaunchSlider = () => {

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderRef = useRef();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {

        const formatted = (data.products || data).map((p) => ({
          id: p.id,
          name: p.name,
          price: p.sell_price,
          originalPrice: p.original_price,
          image1:
            p.images?.[0]?.url ||
            "https://via.placeholder.com/400x400",
          image2:
            p.images?.[1]?.url ||
            p.images?.[0]?.url ||
            "https://via.placeholder.com/400x400",
          rating: 4 + Math.random(),
          reviews: Math.floor(Math.random() * 60) + 10,
          discount: p.original_price
            ? Math.round(
              ((p.original_price - p.sell_price) /
                p.original_price) *
              100
            )
            : 0
        }));

        setProducts(formatted);
        setLoading(false);
      });
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };


  useEffect(() => {

  const interval = setInterval(() => {

    if (sliderRef.current) {

      sliderRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });

      if (
        sliderRef.current.scrollLeft +
          sliderRef.current.clientWidth >=
        sliderRef.current.scrollWidth
      ) {
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      }

    }

  }, 3000); // 3 sec

  return () => clearInterval(interval);

}, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "next" ? 370 : -350,
        behavior: "smooth"
      });
    }
  };

  if (loading)
    return <Typography align="center">Loading...</Typography>;

  return (
    <Box
  sx={{
    maxWidth: "1450px",
    mx: "auto",
    px: { xs: 2, sm: 3, md: 4 },
    py: { xs: 4, md: 2 },
    background: "#fff"
  }}
>

      {/* HEADER */}

      <Stack
        direction={isMobile ? "column" : "row"}
        // justifyContent="space-between"

        alignItems="center"
        justifyContent={isMobile ? "center" : "center"}
        mb={4}
        textAlign={isMobile ? "center" : "center"}
        spacing={isMobile ? 2 : 0}
      >
        <Box>
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: { xs: 22, md: 24 },
      fontFamily: "Roboto, sans-serif",
      lineHeight: 1.4
    }}
  >
    Handcrafted  {" "}
    <span
      style={{
        color: "#eaae5e",
        fontWeight: 800
      }}
    >
     Traditions
    </span>{" "}
    , Newly Arrived
  </Typography>

  <Typography
    sx={{
      color: "gray",
      fontSize: { xs: 12, md: 15 },
      fontFamily: "Roboto, sans-serif",
      letterSpacing: "0.3px"
    }}
  >
    Discover <span style={{ color: "#eaae5e" }}>latest products</span>
  </Typography>
</Box>


      </Stack>

      {/* MOBILE GRID */}

      {isMobile ? (

        <Grid container spacing={1.5}>

          {products.map((product) => (

            <Grid size={{ xs: 6 }} key={product.id}>

              <Card
                onClick={() => navigate(`/product/${product.id}`)}
                sx={{
                  width: "100%",
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4
                  }
                }}
              >

                <Box sx={{ position: "relative" }}>

                  <CardMedia
                    component="img"
                    image={product.image1}
                    sx={{
                      height: 130,
                      objectFit: "contain",
                      p: 1,
                      background: "#f5f5f5"
                    }}
                  />

                  {product.discount > 0 && (
                    <Chip
                      label={`${product.discount}%`}
                      size="small"
                      color="error"
                      sx={{
                        position: "absolute",
                        top: 6,
                        left: 6,
                        fontSize: 9
                      }}
                    />
                  )}

                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    sx={{
                      position: "absolute",
                      top: 6,
                      right: 6,
                      bgcolor: "white",
                      width: 26,
                      height: 26
                    }}
                  >
                    {wishlist.includes(product.id) ? (
                      <FavoriteIcon sx={{ fontSize: 16 }} color="error" />
                    ) : (
                      <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                    )}
                  </IconButton>

                </Box>

                <CardContent sx={{ p: 1 }}>

                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 600,
                      height: 28,
                      overflow: "hidden"
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Rating
                    value={product.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                    sx={{ fontSize: 14 }}
                  />

                  <Stack direction="row" spacing={0.5}>
                    <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
                      ₹{product.price}
                    </Typography>

                    {product.originalPrice && (
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          fontSize: 10,
                          color: "gray"
                        }}
                      >
                        ₹{product.originalPrice}
                      </Typography>
                    )}
                  </Stack>

                </CardContent>

              </Card>


            </Grid>



          ))}



        </Grid>

      ) : (

        /* DESKTOP SLIDER */

        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2.5,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" }
          }}
        >

          {products.map((product) => (

            <Card
              key={product.id}
              sx={{
                minWidth: { xs: 260, md: 280 },   // desktop 4 cards fit
                borderRadius: 3,
                cursor: "pointer",
                marginBottom: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6
                }
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >

              <Box sx={{ position: "relative" }}>

                <CardMedia
                  component="img"
                  height="260"
                  image={product.image1}
                  sx={{
                    objectFit: "contain",
                    p: 2
                  }}
                />

                {product.discount > 0 && (
                  <Chip
                    label={`${product.discount}% OFF`}
                    color="error"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10
                    }}
                  />
                )}

                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    bgcolor: "white"
                  }}
                >
                  {wishlist.includes(product.id) ? (
                    <FavoriteIcon color="error" />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    bgcolor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontSize: 12
                  }}
                >
                  <VisibilityIcon sx={{ fontSize: 16 }} />
                  Quick
                </Box>

              </Box>

              <CardContent>

                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {product.name}
                </Typography>

                <Stack direction="row" spacing={1}>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Stack>

                <Stack direction="row" spacing={1} mt={1}>
                  <Typography fontWeight={700}>
                    ₹{product.price}
                  </Typography>

                  {product.originalPrice && (
                    <Typography
                      sx={{
                        textDecoration: "line-through",
                        color: "gray"
                      }}
                    >
                      ₹{product.originalPrice}
                    </Typography>
                  )}
                </Stack>

              </CardContent>

            </Card>

          ))}



        </Box>


      )}
      {/* {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3
          }}
        >
          <Stack direction="row" spacing={2}>
            <IconButton
              onClick={() => scroll("prev")}
              sx={{
                background: "#fff",
                border: "1px solid #e0e0e0",
                width: 45,
                height: 45,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                "&:hover": {
                  background: "#000",
                  color: "#fff"
                }
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>

            <IconButton
              onClick={() => scroll("next")}
              sx={{
                background: "#fff",
                border: "1px solid #e0e0e0",
                width: 45,
                height: 45,
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                "&:hover": {
                  background: "#000",
                  color: "#fff"
                }
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </Box>
      )} */}

    </Box>
  );
};

export default NewLaunchSlider;