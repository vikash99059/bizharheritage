


// import React, { useState, useRef, useEffect } from "react";
// import "./Ourproduct.css";

// import img1 from "./what-we-offer-biharimage/silkkurti.jpeg";
// import img2 from "./what-we-offer-biharimage/kurtismall.jpeg";

// const topProducts = [
//   { id: 1, name: "Silk Kurti", desc: "Premium silk kurti", price: "₹1299", img1, img2 },
//   { id: 2, name: "Designer Kurti", desc: "Stylish wear", price: "₹999", img1: img2, img2: img1 },
//   { id: 3, name: "Cotton Kurti", desc: "Daily comfort", price: "₹799", img1, img2 },
//   { id: 4, name: "Party Kurti", desc: "Party special", price: "₹1499", img1: img2, img2: img1 },
//   { id: 9, name: "Silk Kurti", desc: "Premium silk kurti", price: "₹1299", img1, img2 },
//   { id: 10, name: "Designer Kurti", desc: "Stylish wear", price: "₹999", img1: img2, img2: img1 },
//   { id: 11, name: "Cotton Kurti", desc: "Daily comfort", price: "₹799", img1, img2 },
//   { id: 12, name: "Party Kurti", desc: "Party special", price: "₹1499", img1: img2, img2: img1 },
// ];

// const bottomProducts = [
//   { id: 5, name: "Floral Kurti", desc: "Floral design", price: "₹899", img1, img2 },
//   { id: 6, name: "Printed Kurti", desc: "Printed design", price: "₹999", img1: img2, img2: img1 },
//   { id: 7, name: "Office Kurti", desc: "Office wear", price: "₹1099", img1, img2 },
//   { id: 8, name: "Festive Kurti", desc: "Festive look", price: "₹1399", img1: img2, img2: img1 },
// ];

// // CARD
// const ProductCard = ({ product, openPopup }) => (
//   <div className="ps-card" onClick={() => openPopup(product)}>
//     <div className="ps-img-box">
//       <img src={product.img1} alt={product.name} className="ps-img" />
//     </div>
//     <div className="ps-info">
//       <h4>{product.name}</h4>
//       <p>{product.desc}</p>
//       <span>{product.price}</span>
//     </div>
//   </div>
// );






// // ROW WITH ARROWS
// const ProductRow = ({ products = [], autoSlide, openPopup }) => {
//   const scrollRef = useRef(null);
//    const isMobile = window.innerWidth < 768;

//   useEffect(() => {
//     const isMobile = window.innerWidth < 768;

//     if (!autoSlide && !isMobile) return;

//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         scrollRef.current.scrollBy({
//           left: scrollRef.current.offsetWidth,
//           behavior: "smooth",
//         });
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [autoSlide]);

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({
//       left: -300,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({
//       left: 300,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//   if (!autoSlide && !isMobile) return;

//   const interval = setInterval(() => {
//     scrollRef.current?.scrollBy({
//       left: scrollRef.current.offsetWidth,
//       behavior: "smooth",
//     });
//   }, 3000);

//   return () => clearInterval(interval);
// }, [autoSlide, isMobile]);


//   return (
//     <div className="ps-row-wrapper">
//       <button className="ps-nav ps-prev" onClick={scrollLeft}>
//         ❮
//       </button>

//       <div className="ps-scroll" ref={scrollRef}>
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} openPopup={openPopup} />
//         ))}
//       </div>

//       <button className="ps-nav ps-next" onClick={scrollRight}>
//         ❯
//       </button>
//     </div>
//   );
// };

// // MAIN SECTION
// const ProductSections = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [mainImage, setMainImage] = useState("");
 





//   const openPopup = (product) => {
//     setSelectedProduct(product);
//     setMainImage(product.img1);
//   };

//   const closePopup = () => {
//     setSelectedProduct(null);
//   };

//   const handleBuyNow = () => {
//     const message = `✨ New Order Request
// 🛍 Product: ${selectedProduct.name}
// 💰 Price: ${selectedProduct.price}
// 📏 Size: ${selectedSize}

// Please confirm availability.`;

//     const url = `https://wa.me/919572540788?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <section className="ps-section">
//       <h2 className="ps-title">Our Products</h2>

//       {/* Top Row */}
//       <ProductRow products={topProducts} openPopup={openPopup} />

//       {/* Bottom Row */}
//       <ProductRow products={bottomProducts} autoSlide openPopup={openPopup} />

//       {/* View More */}
//       <div className="ps-viewmore-wrap">
//         <a href="/what-we-offer-bihars" className="ps-viewmore">
//           View More Products
//         </a>
//       </div>

//       {/* Popup */}
//       {selectedProduct && (
//         <div className="ps-popup">
//           <div className="ps-popup-content">
//             <button className="ps-close" onClick={closePopup}>×</button>

//             <div className="ps-popup-left">
//               <img src={mainImage} className="ps-main-img" alt="" />

//               <div className="ps-thumbs">
//                 <img
//                   src={selectedProduct.img1}
//                   onClick={() => setMainImage(selectedProduct.img1)}
//                   alt=""
//                 />
//                 <img
//                   src={selectedProduct.img2}
//                   onClick={() => setMainImage(selectedProduct.img2)}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className="ps-popup-right">
//               <h2>{selectedProduct.name}</h2>
//               <p>{selectedProduct.desc}</p>
//               <h3>{selectedProduct.price}</h3>

//               <div className="ps-sizes">
//                 {["M", "L", "XL"].map((size) => (
//                   <button
//                     key={size}
//                     className={selectedSize === size ? "active" : ""}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>

//               <button className="ps-buy" onClick={handleBuyNow}>
//                 Buy Now on WhatsApp
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductSections;





// import React, { useState, useRef, useEffect } from "react";
// import "./Ourproduct.css";

// import img1 from "./what-we-offer-biharimage/silkkurti.jpeg";
// import img2 from "./what-we-offer-biharimage/kurtismall.jpeg";

// const topProducts = [
//   { id: 1, name: "Silk Kurti by Sujata-Jhaa", desc: "Premium silk kurti | Handcrafted | Artish Collection", price: "₹1299", img1, img2 },
//   { id: 2, name: "Designer Kurti by Artish", desc: "Stylish wear | Artish Exclusive", price: "₹999", img1: img2, img2: img1 },
//   { id: 3, name: "Cotton Kurti by Artish", desc: "Daily comfort | Artish Comfort Wear", price: "₹799", img1, img2 },
//   { id: 4, name: "Party Kurti by Artish", desc: "Party special | Artish Party Collection", price: "₹1499", img1: img2, img2: img1 },
//   { id: 9, name: "Silk Kurti by Artish", desc: "Premium silk kurti | Handcrafted", price: "₹1299", img1, img2 },
//   { id: 10, name: "Designer Kurti by Artish", desc: "Stylish wear | Artish Exclusive", price: "₹999", img1: img2, img2: img1 },
//   { id: 11, name: "Cotton Kurti by Artish", desc: "Daily comfort | Artish Comfort", price: "₹799", img1, img2 },
//   { id: 12, name: "Party Kurti by Artish", desc: "Party special | Festive Look", price: "₹1499", img1: img2, img2: img1 },
// ];

// const bottomProducts = [
//   { id: 5, name: "Floral Kurti by Artish", desc: "Floral design | Artish Floral Collection", price: "₹899", img1, img2 },
//   { id: 6, name: "Printed Kurti by Artish", desc: "Printed design | Artish Prints", price: "₹999", img1: img2, img2: img1 },
//   { id: 7, name: "Office Kurti by Artish", desc: "Office wear | Professional Look", price: "₹1099", img1, img2 },
//   { id: 8, name: "Festive Kurti by Artish", desc: "Festive look | Traditional Wear", price: "₹1399", img1: img2, img2: img1 },
// ];

// // Product Card Component
// const ProductCard = ({ product, openPopup }) => (
//   <div className="ps-card" onClick={() => openPopup(product)}>
//     <div className="ps-img-box">
//       <img src={product.img1} alt={product.name} className="ps-img" />
//     </div>
//     <div className="ps-info">
//       <h4>{product.name}</h4>
//       <p>{product.desc}</p>
//       <span>{product.price}</span>
//     </div>
//   </div>
// );

// // Product Row Component
// const ProductRow = ({ products = [], autoSlide = false, openPopup }) => {
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const cardWidthRef = useRef(300);

//   useEffect(() => {
//     const checkMobile = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       // Calculate card width based on screen size
//       if (window.innerWidth < 480) {
//         cardWidthRef.current = window.innerWidth - 40; // Full width minus padding
//       } else if (window.innerWidth < 768) {
//         cardWidthRef.current = window.innerWidth * 0.9;
//       } else {
//         cardWidthRef.current = 300; // Desktop card width
//       }
//     };

//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   useEffect(() => {
//     if (!autoSlide || !isMobile) return;

//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const scrollLeft = scrollRef.current.scrollLeft;
//         const scrollWidth = scrollRef.current.scrollWidth;
//         const clientWidth = scrollRef.current.clientWidth;
        
//         // If at the end, scroll back to start
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           scrollRef.current.scrollTo({
//             left: 0,
//             behavior: "smooth"
//           });
//         } else {
//           scrollRef.current.scrollBy({
//             left: cardWidthRef.current,
//             behavior: "smooth"
//           });
//         }
//       }
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [autoSlide, isMobile]);

//   const scrollLeft = () => {
//     scrollRef.current?.scrollBy({
//       left: -cardWidthRef.current,
//       behavior: "smooth"
//     });
//   };

//   const scrollRight = () => {
//     scrollRef.current?.scrollBy({
//       left: cardWidthRef.current,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className="ps-row-wrapper">
//       {!isMobile && (
//         <button className="ps-nav ps-prev" onClick={scrollLeft} aria-label="Previous">
//           ❮
//         </button>
//       )}

//       <div className="ps-scroll" ref={scrollRef}>
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} openPopup={openPopup} />
//         ))}
//       </div>

//       {!isMobile && (
//         <button className="ps-nav ps-next" onClick={scrollRight} aria-label="Next">
//           ❯
//         </button>
//       )}
//     </div>
//   );
// };

// // Main Component
// const ProductSections = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [mainImage, setMainImage] = useState("");

//   const openPopup = (product) => {
//     setSelectedProduct(product);
//     setMainImage(product.img1);
//   };

//   const closePopup = () => {
//     setSelectedProduct(null);
//   };

//   const handleBuyNow = () => {
//   const message = `🛍 Order Request - Artish Collection
// Product: ${selectedProduct.name}
// Price: ${selectedProduct.price}
// Size: ${selectedSize}

// Return Policy: 7 Days Return Available

// Please confirm availability.`;

//   const url = `https://wa.me/919572540788?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
// };

//   return (
//     <section className="ps-section">
//      <h2 className="ps-title">
//   Our New Arrivals <span style={{ color: "#8b0000", display: "inline" }}>Product</span>
// </h2>


//       {/* Top Row - Manual on desktop, static on mobile */}
//       <ProductRow products={topProducts} openPopup={openPopup} />

//       {/* Bottom Row - Auto slide on mobile */}
//       <ProductRow products={bottomProducts} autoSlide={true} openPopup={openPopup} />

//       {/* View More Button */}
//       <div className="ps-viewmore-wrap">
//         <a href="/what-we-offer-bihar" className="ps-viewmore">
//           View More Products
//         </a>
//       </div>

//       {/* Product Popup */}
//       {selectedProduct && (
//   <div className="ps-popup" onClick={closePopup}>
//     <div className="ps-popup-content" onClick={(e) => e.stopPropagation()}>
//       <button className="ps-close" onClick={closePopup} aria-label="Close">
//         ×
//       </button>

//       <div className="ps-popup-left">
//         <img src={mainImage} className="ps-main-img" alt={selectedProduct.name} />
        
//         <div className="ps-thumbs">
//           <img
//             src={selectedProduct.img1}
//             onClick={() => setMainImage(selectedProduct.img1)}
//             alt={`${selectedProduct.name} view 1`}
//             className={mainImage === selectedProduct.img1 ? "active" : ""}
//           />
//           <img
//             src={selectedProduct.img2}
//             onClick={() => setMainImage(selectedProduct.img2)}
//             alt={`${selectedProduct.name} view 2`}
//             className={mainImage === selectedProduct.img2 ? "active" : ""}
//           />
//         </div>
//       </div>

//       <div className="ps-popup-right">
//         <h2>{selectedProduct.name}</h2>
//         <p className="ps-desc">{selectedProduct.desc}</p>
//         <h3 className="ps-price">{selectedProduct.price}</h3>
        
//         {/* Return Policy - Small Text */}
//         <div className="ps-return-info">
//           🔄 7 Days Return Policy | Free Exchange
//         </div>

//         <div className="ps-size-section">
//           <p className="ps-size-label">Select Size:</p>
//           <div className="ps-sizes">
//             {["M", "L", "XL", "XXL"].map((size) => (
//               <button
//                 key={size}
//                 className={`ps-size-btn ${selectedSize === size ? "active" : ""}`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Small WhatsApp Button */}
//         <button className="ps-buy-small" onClick={handleBuyNow}>
//           <span className="ps-whatsapp-icon-small"></span> Buy NOw
//         </button>
//       </div>
//     </div>
//   </div>
// )}
//     </section>
//   );
// };

// export default ProductSections;





// import React, { useState, useRef, useEffect } from "react";
// import "./Ourproduct.css";
// import { products } from "./ProductData"; // Your full products array
// import { BsCart } from "react-icons/bs"; // Cart icon
// import qrImage from "./vendorimage/qr1.jpeg";

// // Product Card Component
// const ProductCard = ({ product, openPopup }) => (
//   <div className="ps-card" onClick={() => openPopup(product)}>
//     <div className="ps-img-box">
//       <img src={product.images[0]} alt={product.brand} className="ps-img" />
//     </div>
//     <div className="ps-info">
//       <h4>{product.brand}</h4>
//       <p>{product.description}</p>
//       <span>{product.currentPrice}</span>
//     </div>
//   </div>
// );

// // Product Row Component
// const ProductRow = ({ products = [], autoSlide = false, openPopup }) => {
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const cardWidthRef = useRef(300);

//   useEffect(() => {
//     const checkMobile = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       if (width < 480) cardWidthRef.current = width - 40;
//       else if (width < 768) cardWidthRef.current = width * 0.9;
//       else cardWidthRef.current = 300;
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (!autoSlide || !isMobile) return;
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const scrollLeft = scrollRef.current.scrollLeft;
//         const scrollWidth = scrollRef.current.scrollWidth;
//         const clientWidth = scrollRef.current.clientWidth;
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollRef.current.scrollBy({
//             left: cardWidthRef.current,
//             behavior: "smooth",
//           });
//         }
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [autoSlide, isMobile]);

//   const scrollLeft = () =>
//     scrollRef.current?.scrollBy({ left: -cardWidthRef.current, behavior: "smooth" });
//   const scrollRight = () =>
//     scrollRef.current?.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });

//   return (
//     <div className="ps-row-wrapper">
//       {!isMobile && (
//         <button className="ps-nav ps-prev" onClick={scrollLeft}>
//           ❮
//         </button>
//       )}
//       <div className="ps-scroll" ref={scrollRef}>
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} openPopup={openPopup} />
//         ))}
//       </div>
//       {!isMobile && (
//         <button className="ps-nav ps-next" onClick={scrollRight}>
//           ❯
//         </button>
//       )}
//     </div>
//   );
// };

// // Main ProductSections Component
// const ProductSections = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [selectedSize, setSelectedSize] = useState("M");

//   // WhatsApp form & payment
//   const [showForm, setShowForm] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     quantity: 1,
//     payment: "COD",
//   });

//   // Open / Close product popup
//   const openPopup = (product) => {
//     setSelectedProduct(product);
//     setMainImage(product.images[0]);
//     setSelectedSize(product.size?.[0] || "M");
//   };
//   const closePopup = () => {
//     setSelectedProduct(null);
//     setShowForm(false);
//     setShowPayment(false);
//   };

//   // Generate WhatsApp message
//   const generateOrderId = () => "ORD" + Math.floor(100000 + Math.random() * 900000);

//   const openWhatsApp = () => {
//   if (!selectedProduct) return;

//   const orderId = generateOrderId();

//   const msg = `🧾 *New Order Received*

// ━━━━━━━━━━━━━━
// *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━

// 👤 *Customer Details*
// Name: ${customer.name}
// Phone: ${customer.phone}
// Address: ${customer.address}

// ━━━━━━━━━━━━━━
// 🛍️ *Product Details*
// Product: ${selectedProduct.brand}
// Artist: ${selectedProduct.artist || "N/A"}
// Price: ${selectedProduct.currentPrice}
// Size: ${selectedSize || "N/A"}
// Quantity: ${customer.quantity}
// Payment: ${customer.payment}
// Category: ${selectedProduct.category} → ${selectedProduct.subcategory || "N/A"}
// ━━━━━━━━━━━━━━`;

//   const url = `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`;
//   window.open(url, "_blank");
//   setShowForm(false);
// };


//   const handleOrderSubmit = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all details");
//       return;
//     }
//     if (customer.payment === "Online") setShowPayment(true);
//     else openWhatsApp();
//   };

//   const confirmPayment = () => {
//     alert("Payment Confirmed!");
//     openWhatsApp();
//     setShowPayment(false);
//   };

//   // Separate products by category
//   const paintingProducts = products.filter((p) => p.category === "Painting");
//   const textileProducts = products.filter((p) => p.category !== "Painting");

//   return (
//     <section className="ps-section">
//       <h2 className="ps-title">
//         Our New Arrivals <span style={{ color: "#8b0000" }}>Product</span>
//       </h2>

//       <ProductRow products={paintingProducts} autoSlide={false} openPopup={openPopup} />
//       <ProductRow products={textileProducts} autoSlide={true} openPopup={openPopup} />

//       <div className="ps-viewmore-wrap">
//         <a href="/what-we-offer-bihar" className="ps-viewmore">
//           View More Products
//         </a>
//       </div>

//       {/* Product Popup */}
//       {selectedProduct && (
//         <div className="ps-popup" onClick={closePopup}>
//           <div
//             className="ps-popup-content"
//             style={{ width: "900px" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button className="ps-close" onClick={closePopup}>
//               ×
//             </button>

//             <div className="ps-popup-left">
//               <img src={mainImage} alt={selectedProduct.brand} className="ps-main-img" />
//               <div className="ps-thumbs">
//                 {selectedProduct.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`${selectedProduct.brand} view ${idx + 1}`}
//                     className={mainImage === img ? "active" : ""}
//                     onClick={() => setMainImage(img)}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="ps-popup-right">
//               <h2>{selectedProduct.brand}</h2>
//               <p className="ps-desc">{selectedProduct.description}</p>
//               <h3 className="ps-price">{selectedProduct.currentPrice}</h3>
//               <div className="ps-return-info">🔄 7 Days Return Policy | Free Exchange</div>

//               {/* Size Selection */}
//               {selectedProduct.size && (
//                 <div className="ps-size-section">
//                   <p className="ps-size-label">Select Size:</p>
//                   <div className="ps-sizes">
//                     {selectedProduct.size.map((size) => (
//                       <button
//                         key={size}
//                         className={`ps-size-btn ${selectedSize === size ? "active" : ""}`}
//                         onClick={() => setSelectedSize(size)}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Buy Now */}
//               <button className="ps-buy-small" onClick={() => setShowForm(true)}>
//                 <BsCart /> Buy Now
//               </button>

//               {/* WhatsApp Form */}
//               {showForm && (
//                 <div className="whatsapp-form-overlay">
//                   <div className="whatsapp-form-box">
//                     <h3>Enter Your Details</h3>

//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       value={customer.name}
//                       onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
//                     />

//                     <input
//                       type="tel"
//                       placeholder="Mobile Number"
//                       value={customer.phone}
//                       onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
//                     />

//                     <textarea
//                       placeholder="Delivery Address"
//                       value={customer.address}
//                       onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
//                     />

//                     <div className="form-group">
//                       <label>Quantity</label>
//                       <input
//                         type="number"
//                         min="1"
//                         value={customer.quantity}
//                         onChange={(e) =>
//                           setCustomer({ ...customer, quantity: e.target.value })
//                         }
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label>Payment Method</label>
//                       <select
//                         value={customer.payment}
//                         onChange={(e) =>
//                           setCustomer({ ...customer, payment: e.target.value })
//                         }
//                       >
//                         <option value="COD">Cash on Delivery</option>
//                         <option value="Online">Online Payment</option>
//                       </select>
//                     </div>

//                     <button className="submit-btn" onClick={handleOrderSubmit}>
//                       Submit Order
//                     </button>

//                     <button className="close-btn" onClick={() => setShowForm(false)}>
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Payment Overlay */}
//               {showPayment && (
//                 <div className="payment-overlay">
//                   <div className="payment-box">
//                     <h3>Scan & Pay</h3>
//                      <img
//                           src={qrImage}
//                           alt="Payment QR"
//                           className="payment-qr"
//                         />

//                     <p>Scan this QR using any UPI app</p>
//                     <button className="confirm-btn" onClick={confirmPayment}>
//                       Payment Done
//                     </button>
//                     <button className="close-btn" onClick={() => setShowPayment(false)}>
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductSections;



// import React, { useState, useRef, useEffect } from "react";
// import "./Ourproduct.css";
// import { BsCart } from "react-icons/bs";
// import qrImage from "./vendorimage/qr1.jpeg";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// // Helper functions for data transformation
// const extractBrand = (name) => {
//   if (!name) return "Handcrafted Product";
//   const parts = name.split('|')[0].split('-')[0].trim();
//   return parts.length > 30 ? parts.substring(0, 30) + '...' : parts;
// };

// const extractArtist = (description) => {
//   if (!description) return "Traditional Artist";
//   const artistMatch = description.match(/artist\s+([^.!?]+)/i) || 
//                      description.match(/by\s+([^.!?]+)/i) ||
//                      description.match(/crafted\s+by\s+([^.!?]+)/i) ||
//                      description.match(/made\s+by\s+([^.!?]+)/i);
//   return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
// };

// const formatPrice = (price) => {
//   return `Rs. ${price?.toLocaleString() || price}`;
// };

// const calculateDiscount = (original, sell) => {
//   if (!original || !sell) return null;
//   const discount = Math.round(((original - sell) / original) * 100);
//   return discount + '%';
// };

// const getCategory = (apiCategory) => {
//   const categoryMap = {
//     'painting': 'Painting',
//     'mandala dot art': 'Painting',
//     'accessories': 'Handicraft'
//   };
//   return categoryMap[apiCategory] || 'Handicraft';
// };

// const getSubcategory = (apiCategory, productName) => {
//   const name = productName?.toLowerCase() || '';
//   if (apiCategory === 'mandala dot art') return 'Mandala Art';
//   if (apiCategory === 'accessories') {
//     if (name.includes('diary')) return 'Stationery';
//     if (name.includes('cover')) return 'Mobile Cover';
//     if (name.includes('gamchha')) return 'Textile';
//     return 'Accessories';
//   }
//   if (name.includes('madhubani') || name.includes('mithila')) return 'Madhubani Painting';
//   if (name.includes('sohrai')) return 'Sohrai Painting';
//   return 'Traditional Painting';
// };

// const extractMaterial = (description) => {
//   if (!description) return "Handcrafted";
//   if (description.toLowerCase().includes('cotton')) return "Cotton";
//   if (description.toLowerCase().includes('silk')) return "Silk";
//   if (description.toLowerCase().includes('paper')) return "Paper";
//   if (description.toLowerCase().includes('acrylic')) return "Acrylic";
//   return "Handcrafted";
// };

// // Product Card Component - NO CSS CHANGES
// const ProductCard = ({ product, openPopup }) => (
//   <div className="ps-card" onClick={() => openPopup(product)}>
//     <div className="ps-img-box">
//       <img 
//         src={product.images[0]} 
//         alt={product.brand} 
//         className="ps-img"
//         onError={(e) => {
//           e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Available';
//         }}
//       />
//     </div>
//     <div className="ps-info">
//       <h4>{product.brand}</h4>
//       <p>{product.description.substring(0, 60)}...</p>
//       <span>{product.currentPrice}</span>
//     </div>
//   </div>
// );

// // Product Row Component - NO CSS CHANGES
// const ProductRow = ({ products = [], autoSlide = false, openPopup }) => {
//   const scrollRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const cardWidthRef = useRef(300);

//   useEffect(() => {
//     const checkMobile = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       if (width < 480) cardWidthRef.current = width - 40;
//       else if (width < 768) cardWidthRef.current = width * 0.9;
//       else cardWidthRef.current = 300;
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     if (!autoSlide || !isMobile || products.length === 0) return;
//     const interval = setInterval(() => {
//       if (scrollRef.current) {
//         const scrollLeft = scrollRef.current.scrollLeft;
//         const scrollWidth = scrollRef.current.scrollWidth;
//         const clientWidth = scrollRef.current.clientWidth;
//         if (scrollLeft + clientWidth >= scrollWidth - 10) {
//           scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
//         } else {
//           scrollRef.current.scrollBy({
//             left: cardWidthRef.current,
//             behavior: "smooth",
//           });
//         }
//       }
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [autoSlide, isMobile, products.length]);

//   const scrollLeft = () =>
//     scrollRef.current?.scrollBy({ left: -cardWidthRef.current, behavior: "smooth" });
//   const scrollRight = () =>
//     scrollRef.current?.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });

//   if (products.length === 0) return null;

//   return (
//     <div className="ps-row-wrapper">
//       {!isMobile && products.length > 4 && (
//         <button className="ps-nav ps-prev" onClick={scrollLeft}>
//           ❮
//         </button>
//       )}
//       <div className="ps-scroll" ref={scrollRef}>
//         {products.map((p) => (
//           <ProductCard key={p.id} product={p} openPopup={openPopup} />
//         ))}
//       </div>
//       {!isMobile && products.length > 4 && (
//         <button className="ps-nav ps-next" onClick={scrollRight}>
//           ❯
//         </button>
//       )}
//     </div>
//   );
// };

// // Main ProductSections Component
// const ProductSections = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [mainImage, setMainImage] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");

//   // WhatsApp form & payment
//   const [showForm, setShowForm] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     quantity: 1,
//     payment: "COD",
//   });

//   // Fetch products from Supabase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
        
//         // Transform API data to match product structure with proper IDs
//         const transformedProducts = data.map(product => ({
//           id: product.id, // Keep original ID from database
//           brand: extractBrand(product.name),
//           artist: extractArtist(product.description),
//           currentPrice: formatPrice(product.sell_price),
//           originalPrice: product.original_price ? formatPrice(product.original_price) : null,
//           discount: product.original_price ? calculateDiscount(product.original_price, product.sell_price) : null,
//           images: product.images?.map(img => img.url) || [],
//           category: getCategory(product.category),
//           subcategory: getSubcategory(product.category, product.name),
//           description: product.description || "Beautiful handcrafted product by traditional artists.",
//           size: product.size || ["Standard"],
//           material: extractMaterial(product.description),
//           active: product.active
//         }));
        
//         console.log('Fetched products with IDs:', transformedProducts.map(p => ({ id: p.id, brand: p.brand })));
//         setProducts(transformedProducts);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Open / Close product popup with proper ID handling
//   const openPopup = (product) => {
//     console.log('Opening product with ID:', product.id);
//     setSelectedProduct(product);
//     setMainImage(product.images[0]);
//     setSelectedSize(product.size?.[0] || "M");
//   };

//   const closePopup = () => {
//     setSelectedProduct(null);
//     setShowForm(false);
//     setShowPayment(false);
//   };

//   // Generate WhatsApp message with product ID
//   const generateOrderId = () => "ORD" + Math.floor(100000 + Math.random() * 900000);

//   const openWhatsApp = () => {
//     if (!selectedProduct) return;

//     const orderId = generateOrderId();
//     const productLink = `${window.location.origin}/what-we-offer-bihar/${selectedProduct.id}`;

//     const msg = `🧾 *New Order Received*

// ━━━━━━━━━━━━━━
// *Order ID:* ${orderId}
// *Product ID:* ${selectedProduct.id}
// ━━━━━━━━━━━━━━

// 👤 *Customer Details*
// Name: ${customer.name}
// Phone: ${customer.phone}
// Address: ${customer.address}

// ━━━━━━━━━━━━━━
// 🛍️ *Product Details*
// Product: ${selectedProduct.brand}
// Artist: ${selectedProduct.artist}
// Price: ${selectedProduct.currentPrice}
// Size: ${selectedSize}
// Quantity: ${customer.quantity}
// Payment: ${customer.payment}
// Category: ${selectedProduct.category} → ${selectedProduct.subcategory}

// 🔗 *Product Link:* ${productLink}
// ━━━━━━━━━━━━━━`;

//     const url = `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`;
//     window.open(url, "_blank");
//     setShowForm(false);
//   };

//   const handleOrderSubmit = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all details");
//       return;
//     }
    
//     if (!selectedSize && selectedProduct?.size?.length > 1) {
//       alert("Please select a size");
//       return;
//     }

//     if (customer.payment === "Online") {
//       setShowPayment(true);
//     } else {
//       openWhatsApp();
//     }
//   };

//   const confirmPayment = () => {
//     alert("Payment Confirmed! Your order has been placed.");
//     openWhatsApp();
//     setShowPayment(false);
//   };

//   // Loading State - Using existing CSS
//   if (loading) {
//     return (
//       <section className="ps-section">
//         <h2 className="ps-title">
//           Our New Arrivals <span style={{ color: "#8b0000" }}>Product</span>
//         </h2>
//         <div style={{ 
//           textAlign: "center", 
//           padding: "50px 20px",
//           minHeight: "300px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center"
//         }}>
//           <div style={{
//             border: "4px solid #f3f3f3",
//             borderTop: "4px solid #8b0000",
//             borderRadius: "50%",
//             width: "50px",
//             height: "50px",
//             animation: "spin 1s linear infinite",
//             marginBottom: "20px"
//           }}></div>
//           <p>Loading authentic handicrafts...</p>
//         </div>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </section>
//     );
//   }

//   // Error State - Using existing CSS
//   if (error) {
//     return (
//       <section className="ps-section">
//         <h2 className="ps-title">
//           Our New Arrivals <span style={{ color: "#8b0000" }}>Product</span>
//         </h2>
//         <div style={{ 
//           textAlign: "center", 
//           padding: "50px 20px",
//           minHeight: "300px"
//         }}>
//           <h3 style={{ color: "#8b0000", marginBottom: "10px" }}>Oops! Something went wrong</h3>
//           <p style={{ color: "#666", marginBottom: "20px" }}>{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             style={{
//               background: "#8b0000",
//               color: "white",
//               border: "none",
//               padding: "12px 30px",
//               borderRadius: "8px",
//               fontSize: "16px",
//               cursor: "pointer"
//             }}
//           >
//             Try Again
//           </button>
//         </div>
//       </section>
//     );
//   }

//   // Separate products by category
//   const paintingProducts = products.filter((p) => p.category === "Painting");
//   const handicraftProducts = products.filter((p) => p.category !== "Painting");

//   return (
//     <section className="ps-section">
//       <h2 className="ps-title">
//         Our New Arrivals <span style={{ color: "#8b0000" }}>Product</span>
//       </h2>

//       {paintingProducts.length > 0 && (
//         <ProductRow products={paintingProducts} autoSlide={false} openPopup={openPopup} />
//       )}

//       {handicraftProducts.length > 0 && (
//         <ProductRow products={handicraftProducts} autoSlide={true} openPopup={openPopup} />
//       )}

//       <div className="ps-viewmore-wrap">
//         <a href="/what-we-offer-bihar" className="ps-viewmore">
//           View More Products ({products.length})
//         </a>
//       </div>

//       {/* Product Popup - NO CSS CLASS CHANGES */}
//       {selectedProduct && (
//         <div className="ps-popup" onClick={closePopup}>
//           <div
//             className="ps-popup-content"
//             style={{ width: "900px" }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button className="ps-close" onClick={closePopup}>
//               ×
//             </button>

//             <div className="ps-popup-left">
//               <img 
//                 src={mainImage} 
//                 alt={selectedProduct.brand} 
//                 className="ps-main-img"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/500x600?text=Image+Not+Available';
//                 }}
//               />
//               <div className="ps-thumbs">
//                 {selectedProduct.images.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`${selectedProduct.brand} view ${idx + 1}`}
//                     className={mainImage === img ? "active" : ""}
//                     onClick={() => setMainImage(img)}
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="ps-popup-right">
//               <h2>{selectedProduct.brand}</h2>
//               <p className="ps-desc">{selectedProduct.description}</p>
//               <h3 className="ps-price">{selectedProduct.currentPrice}</h3>
//               <div className="ps-return-info">🔄 7 Days Return Policy | Free Exchange</div>

//               {/* Size Selection */}
//               {selectedProduct.size && selectedProduct.size.length > 0 && (
//                 <div className="ps-size-section">
//                   <p className="ps-size-label">Select Size:</p>
//                   <div className="ps-sizes">
//                     {selectedProduct.size.map((size) => (
//                       <button
//                         key={size}
//                         className={`ps-size-btn ${selectedSize === size ? "active" : ""}`}
//                         onClick={() => setSelectedSize(size)}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Buy Now */}
//               <button className="ps-buy-small" onClick={() => setShowForm(true)}>
//                 <BsCart /> Buy Now
//               </button>

//               {/* WhatsApp Form - NO CSS CHANGES */}
//               {showForm && (
//                 <div className="whatsapp-form-overlay" style={{
//                   position: "fixed",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "rgba(0,0,0,0.5)",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   zIndex: 10000
//                 }}>
//                   <div className="whatsapp-form-box" style={{
//                     background: "white",
//                     padding: "30px",
//                     borderRadius: "10px",
//                     width: "90%",
//                     maxWidth: "400px",
//                     position: "relative"
//                   }}>
//                     <h3>Enter Your Details</h3>
//                     <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
//                       Product ID: #{selectedProduct.id}
//                     </p>

//                     <input
//                       type="text"
//                       placeholder="Your Name"
//                       value={customer.name}
//                       onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
//                       style={{
//                         width: "100%",
//                         padding: "10px",
//                         marginBottom: "15px",
//                         border: "1px solid #ddd",
//                         borderRadius: "5px"
//                       }}
//                     />

//                     <input
//                       type="tel"
//                       placeholder="Mobile Number"
//                       value={customer.phone}
//                       onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
//                       style={{
//                         width: "100%",
//                         padding: "10px",
//                         marginBottom: "15px",
//                         border: "1px solid #ddd",
//                         borderRadius: "5px"
//                       }}
//                     />

//                     <textarea
//                       placeholder="Delivery Address"
//                       value={customer.address}
//                       onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
//                       style={{
//                         width: "100%",
//                         padding: "10px",
//                         marginBottom: "15px",
//                         border: "1px solid #ddd",
//                         borderRadius: "5px",
//                         minHeight: "80px"
//                       }}
//                     />

//                     <div className="form-group" style={{ marginBottom: "15px" }}>
//                       <label style={{ display: "block", marginBottom: "5px" }}>Quantity</label>
//                       <input
//                         type="number"
//                         min="1"
//                         value={customer.quantity}
//                         onChange={(e) =>
//                           setCustomer({ ...customer, quantity: parseInt(e.target.value) || 1 })
//                         }
//                         style={{
//                           width: "100%",
//                           padding: "10px",
//                           border: "1px solid #ddd",
//                           borderRadius: "5px"
//                         }}
//                       />
//                     </div>

//                     <div className="form-group" style={{ marginBottom: "20px" }}>
//                       <label style={{ display: "block", marginBottom: "5px" }}>Payment Method</label>
//                       <select
//                         value={customer.payment}
//                         onChange={(e) =>
//                           setCustomer({ ...customer, payment: e.target.value })
//                         }
//                         style={{
//                           width: "100%",
//                           padding: "10px",
//                           border: "1px solid #ddd",
//                           borderRadius: "5px"
//                         }}
//                       >
//                         <option value="COD">Cash on Delivery</option>
//                         <option value="Online">Online Payment</option>
//                       </select>
//                     </div>

//                     <button 
//                       className="submit-btn" 
//                       onClick={handleOrderSubmit}
//                       style={{
//                         width: "100%",
//                         padding: "12px",
//                         background: "#25D366",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         cursor: "pointer"
//                       }}
//                     >
//                       Submit Order
//                     </button>

//                     <button 
//                       className="close-btn" 
//                       onClick={() => setShowForm(false)}
//                       style={{
//                         position: "absolute",
//                         top: "10px",
//                         right: "10px",
//                         background: "none",
//                         border: "none",
//                         fontSize: "20px",
//                         cursor: "pointer"
//                       }}
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Payment Overlay - NO CSS CHANGES */}
//               {showPayment && (
//                 <div className="payment-overlay" style={{
//                   position: "fixed",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: "rgba(0,0,0,0.5)",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   zIndex: 10000
//                 }}>
//                   <div className="payment-box" style={{
//                     background: "white",
//                     padding: "30px",
//                     borderRadius: "10px",
//                     width: "90%",
//                     maxWidth: "400px",
//                     textAlign: "center",
//                     position: "relative"
//                   }}>
//                     <h3>Scan & Pay</h3>
//                     <img
//                       src={qrImage}
//                       alt="Payment QR"
//                       style={{
//                         width: "200px",
//                         height: "200px",
//                         margin: "20px auto",
//                         display: "block"
//                       }}
//                     />
//                     <p style={{ marginBottom: "10px" }}>Amount: {selectedProduct.currentPrice}</p>
//                     <p style={{ marginBottom: "20px", color: "#666" }}>Scan this QR using any UPI app</p>
//                     <button 
//                       className="confirm-btn" 
//                       onClick={confirmPayment}
//                       style={{
//                         width: "100%",
//                         padding: "12px",
//                         background: "#4CAF50",
//                         color: "white",
//                         border: "none",
//                         borderRadius: "5px",
//                         fontSize: "16px",
//                         fontWeight: "bold",
//                         cursor: "pointer",
//                         marginBottom: "10px"
//                       }}
//                     >
//                       Payment Done
//                     </button>
//                     <button 
//                       className="close-btn" 
//                       onClick={() => setShowPayment(false)}
//                       style={{
//                         position: "absolute",
//                         top: "10px",
//                         right: "10px",
//                         background: "none",
//                         border: "none",
//                         fontSize: "20px",
//                         cursor: "pointer"
//                       }}
//                     >
//                       ×
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProductSections;


// import React, { useEffect, useRef, useState } from "react";
// import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const API_URL =
//   "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const ProductSections = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((p) => ({
//           id: p.id,
//           name: p.name,
//           description: p.description || "",
//           category: p.category || "Handicraft",
//           price: p.sell_price,
//           originalPrice: p.original_price,
//           image:
//             p.images?.[0]?.url ||
//             "https://via.placeholder.com/400x400"
//         }));

//         setProducts(formatted);
//       });
//   }, []);

//   const categories = [...new Set(products.map((p) => p.category))];

//   return (
//     <Box
//       sx={{
//         maxWidth: "1450px",
//         mx: "auto",
//         px: { xs: 2, md: 3 },
//         py: { xs: 4, md: 0 }
//       }}
//     >
//       <Typography
//         variant="h5"
//         fontWeight={700}
//         mb={0}
//         textAlign="center"
//       >
//         Discover what’s new – fresh styles, authentic crafts, {" "}
//         <span style={{ color: "#eaae5e" }}>
//           and unique finds
//         </span>
//       </Typography>

//       {categories.map((cat) => (
//         <CategorySlider
//           key={cat}
//           title={cat}
//           products={products.filter((p) => p.category === cat)}
//           navigate={navigate}
//         />
//       ))}
//     </Box>
//   );
// };

// const CategorySlider = ({ title, products, navigate }) => {
//   const sliderRef = useRef();

//   const scroll = (dir) => {
//     sliderRef.current.scrollBy({
//       left: dir === "next" ? 320 : -320,
//       behavior: "smooth"
//     });
//   };

//   if (!products.length) return null;

//   return (
//     <Box sx={{ mb: 2 }}>

//       {/* CATEGORY TITLE */}

//       <Typography
//         variant="h5"
//         fontWeight={700}
//         mb={2}
//       >
//         {title}
//       </Typography>

//       {/* SLIDER */}

//       <Box
//         ref={sliderRef}
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           gap: 3,
//           pb: 2,
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": { display: "none" }
//         }}
//       >

//         {products.map((product) => {

//           const discount =
//             product.originalPrice
//               ? Math.round(
//                   ((product.originalPrice -
//                     product.price) /
//                     product.originalPrice) *
//                     100
//                 )
//               : 0;

//           return (

//             <Card
//               key={product.id}
//               onClick={() =>
//                 navigate(`/product/${product.id}`)
//               }
//               sx={{
//                 minWidth: 300,
//                 maxWidth: 300,
//                 borderRadius: 3,
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: 6
//                 }
//               }}
//             >

//               <Box sx={{ position: "relative" }}>

//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   sx={{
//                     height: 260,
//                     objectFit: "contain",
//                     p: 2,
//                     background: "#fafafa"
//                   }}
//                 />

//                 {discount > 0 && (
//                   <Chip
//                     label={`${discount}% OFF`}
//                     color="error"
//                     size="small"
//                     sx={{
//                       position: "absolute",
//                       top: 10,
//                       left: 10
//                     }}
//                   />
//                 )}

//               </Box>

//               <CardContent>

//                 <Typography
//                   fontWeight={600}
//                   sx={{
//                     fontSize: 14,
//                     height: 38,
//                     overflow: "hidden"
//                   }}
//                 >
//                   {product.name}
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: 12,
//                     color: "gray",
//                     height: 32,
//                     overflow: "hidden"
//                   }}
//                 >
//                   {product.description.substring(0, 50)}
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     gap: 1,
//                     mt: 1
//                   }}
//                 >

//                   <Typography fontWeight={700}>
//                     ₹{product.price}
//                   </Typography>

//                   {product.originalPrice && (
//                     <Typography
//                       sx={{
//                         textDecoration:
//                           "line-through",
//                         color: "gray",
//                         fontSize: 13
//                       }}
//                     >
//                       ₹{product.originalPrice}
//                     </Typography>
//                   )}

//                 </Box>

//               </CardContent>

//             </Card>

//           );

//         })}

//       </Box>

//       {/* NAV BUTTONS */}

//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           gap: 2,
//           mt: 2
//         }}
//       >

//         <button
//           onClick={() => scroll("prev")}
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: "50%",
//             border: "1px solid #ddd",
//             cursor: "pointer"
//           }}
//         >
//           ❮
//         </button>

//         <button
//           onClick={() => scroll("next")}
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: "50%",
//             border: "1px solid #ddd",
//             cursor: "pointer"
//           }}
//         >
//           ❯
//         </button>

//       </Box>

//     </Box>
//   );
// };

// export default ProductSections;




// import React, { useEffect, useRef, useState } from "react";
// import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const API_URL =
//   "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const ProductSections = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((p) => ({
//           id: p.id,
//           name: p.name,
//           description: p.description || "",
//           category: p.category || "Handicraft",
//           price: p.sell_price,
//           originalPrice: p.original_price,
//           image:
//             p.images?.[0]?.url ||
//             "https://via.placeholder.com/400x400"
//         }));

//         setProducts(formatted);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//       });
//   }, []);

//   // Extract unique categories - ensure we're getting strings
//   const categories = [...new Set(products.map((p) => String(p.category || "Handicraft")))];

//   // Log to debug
//   console.log("Categories:", categories);
//   console.log("Products:", products);

//   return (
//     <Box
//       sx={{
//         maxWidth: "1450px",
//         mx: "auto",
//         px: { xs: 2, md: 3 },
//         py: { xs: 4, md: 0 }
//       }}
//     >
//       <Typography
//         variant="h5"
//         fontWeight={700}
//         mb={0}
//         textAlign="center"
//       >
//       Explore  Handcarfted  to  {" "}
//         <span style={{ color: "#eaae5e" }}>
//           Modern Homes
//         </span>
//       </Typography>

//       {categories && categories.length > 0 ? (
//         categories.map((cat) => {
//           // Filter products for this category
//           const categoryProducts = products.filter((p) => String(p.category) === cat);
          
//           return categoryProducts.length > 0 ? (
//             <CategorySlider
//               key={cat}
//               title={cat}
//               products={categoryProducts}
//               navigate={navigate}
//             />
//           ) : null;
//         })
//       ) : (
//         <Typography textAlign="center" mt={4}>
//           Loading products...
//         </Typography>
//       )}
//     </Box>
//   );
// };

// const CategorySlider = ({ title, products, navigate }) => {
//   const sliderRef = useRef(null);

//   const scroll = (dir) => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollBy({
//         left: dir === "next" ? 320 : -320,
//         behavior: "smooth"
//       });
//     }
//   };

//   if (!products || products.length === 0) return null;

//   return (
//     <Box sx={{ mb: 4 }}>

//       {/* CATEGORY TITLE */}
//       <Typography
//         variant="h5"
//         fontWeight={700}
//         mb={2}
//         sx={{ textTransform: "capitalize" }}
//       >
//         {title}
//       </Typography>

//       {/* SLIDER */}
//       <Box
//         ref={sliderRef}
//         sx={{
//           display: "flex",
//           overflowX: "auto",
//           gap: 3,
//           pb: 2,
//           scrollBehavior: "smooth",
//           "&::-webkit-scrollbar": { display: "none" },
//           scrollbarWidth: "none" // Firefox
//         }}
//       >
//         {products.map((product) => {
//           const discount = product.originalPrice
//             ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//             : 0;

//           return (
//             <Card
//               key={product.id}
//               onClick={() => navigate(`/product/${product.id}`)}
//               sx={{
//                 minWidth: 300,
//                 maxWidth: 300,
//                 borderRadius: 3,
//                 cursor: "pointer",
//                 transition: "0.3s",
//                 flexShrink: 0,
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: 6
//                 }
//               }}
//             >
//               <Box sx={{ position: "relative" }}>
//                 <CardMedia
//                   component="img"
//                   image={product.image}
//                   alt={product.name}
//                   sx={{
//                     height: 260,
//                     objectFit: "contain",
//                     p: 2,
//                     background: "#fafafa"
//                   }}
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
//                   }}
//                 />
//                 {discount > 0 && (
//                   <Chip
//                     label={`${discount}% OFF`}
//                     color="error"
//                     size="small"
//                     sx={{
//                       position: "absolute",
//                       top: 10,
//                       left: 10,
//                       fontWeight: "bold"
//                     }}
//                   />
//                 )}
//               </Box>

//               <CardContent>
//                 <Typography
//                   fontWeight={600}
//                   sx={{
//                     fontSize: 14,
//                     height: 38,
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     display: "-webkit-box",
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: "vertical"
//                   }}
//                 >
//                   {product.name}
//                 </Typography>

//                 <Typography
//                   sx={{
//                     fontSize: 12,
//                     color: "gray",
//                     height: 32,
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     display: "-webkit-box",
//                     WebkitLineClamp: 2,
//                     WebkitBoxOrient: "vertical"
//                   }}
//                 >
//                   {product.description.substring(0, 50)}
//                 </Typography>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     gap: 1,
//                     mt: 1,
//                     alignItems: "center"
//                   }}
//                 >
//                   <Typography fontWeight={700} color="primary">
//                     ₹{product.price?.toLocaleString()}
//                   </Typography>

//                   {product.originalPrice && (
//                     <Typography
//                       sx={{
//                         textDecoration: "line-through",
//                         color: "gray",
//                         fontSize: 13
//                       }}
//                     >
//                       ₹{product.originalPrice?.toLocaleString()}
//                     </Typography>
//                   )}
//                 </Box>
//               </CardContent>
//             </Card>
//           );
//         })}
//       </Box>

//       {/* NAV BUTTONS - Only show if there are enough products to scroll */}
//       {products.length > 4 && (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             gap: 2,
//             mt: 2
//           }}
//         >
//           <button
//             onClick={() => scroll("prev")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "50%",
//               border: "1px solid #ddd",
//               cursor: "pointer",
//               backgroundColor: "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "20px",
//               transition: "0.3s"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "#f5f5f5";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "white";
//             }}
//           >
//             ❮
//           </button>

//           <button
//             onClick={() => scroll("next")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "50%",
//               border: "1px solid #ddd",
//               cursor: "pointer",
//               backgroundColor: "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "20px",
//               transition: "0.3s"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = "#f5f5f5";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = "white";
//             }}
//           >
//             ❯
//           </button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ProductSections;



import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

const ProductSections = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((p) => ({
          id: p.id,
          name: p.name,
          description: p.description || "",
          // IMPORTANT FIX: category is an object, so access category.name
          category: p.category?.name || "Handicraft",
          price: p.sell_price,
          originalPrice: p.original_price,
          image:
            p.images?.[0]?.url ||
            "https://via.placeholder.com/400x400"
        }));

        setProducts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    const category = String(product.category || "Handicraft").trim();
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  // Get unique categories
  const categories = Object.keys(productsByCategory);

  console.log("Categories found:", categories);
  console.log("Products by category:", productsByCategory);

  if (loading) {
    return (
      <Box sx={{ maxWidth: "1450px", mx: "auto", px: { xs: 2, md: 3 }, py: 4 }}>
        <Typography textAlign="center">Loading products...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "1450px",
        mx: "auto",
        px: { xs: 2, md: 3 },
        py: { xs: 4, md: 0 }
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        mb={4}
        textAlign="center"
      >
        Explore Handcrafted to{" "}
        <span style={{ color: "#eaae5e" }}>
          Modern Homes
        </span>
      </Typography>

      {/* Categories will appear one after another vertically */}
      {categories.length > 0 ? (
        categories.map((cat) => {
          const categoryProducts = productsByCategory[cat];
          
          return categoryProducts && categoryProducts.length > 0 ? (
            <CategorySlider
              key={cat}
              title={cat}
              products={categoryProducts}
              navigate={navigate}
            />
          ) : null;
        })
      ) : (
        <Typography textAlign="center" mt={4}>
          No products found
        </Typography>
      )}
    </Box>
  );
};

const CategorySlider = ({ title, products, navigate }) => {
  const sliderRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    setTimeout(checkScrollButtons, 100);
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [products]);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "next" ? 320 : -320;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <Box sx={{ mb: 6, position: "relative" }}>
      {/* CATEGORY TITLE */}
      <Typography
        variant="h5"
        fontWeight={700}
        mb={2}
        sx={{ textTransform: "capitalize" }}
      >
        {title}
      </Typography>

      {/* SLIDER CONTAINER WITH BUTTONS */}
      <Box sx={{ position: "relative" }}>
        {/* Left Navigation Button */}
        {showLeftButton && (
          <button
            onClick={() => scroll("prev")}
            style={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid #ddd",
              cursor: "pointer",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              transition: "0.3s",
              zIndex: 10,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            ❮
          </button>
        )}

        {/* Products Row */}
        <Box
          ref={sliderRef}
          onScroll={checkScrollButtons}
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 3,
            pb: 2,
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            justifyContent: "center"
          }}
        >
          {products.map((product) => {
            const discount = product.originalPrice && product.originalPrice > product.price
              ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
              : 0;

            return (
              <Card
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                sx={{
                  minWidth: 280,
                  maxWidth: 280,
                  borderRadius: 3,
                  cursor: "pointer",
                  transition: "0.3s",
                  flexShrink: 0,
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 6
                  }
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: 260,
                      objectFit: "contain",
                      p: 2,
                      background: "#fafafa"
                    }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x400?text=No+Image";
                    }}
                  />
                  {discount > 0 && (
                    <Chip
                      label={`${discount}% OFF`}
                      color="error"
                      size="small"
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        fontWeight: "bold"
                      }}
                    />
                  )}
                </Box>

                <CardContent>
                  <Typography
                    fontWeight={600}
                    sx={{
                      fontSize: 14,
                      height: 38,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 12,
                      color: "gray",
                      height: 32,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical"
                    }}
                  >
                    {product.description?.substring(0, 50) || "No description"}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mt: 1,
                      alignItems: "center"
                    }}
                  >
                    <Typography fontWeight={700} color="primary">
                      ₹{product.price?.toLocaleString()}
                    </Typography>

                    {product.originalPrice && product.originalPrice > product.price && (
                      <Typography
                        sx={{
                          textDecoration: "line-through",
                          color: "gray",
                          fontSize: 13
                        }}
                      >
                        ₹{product.originalPrice?.toLocaleString()}
                      </Typography>
                    )}
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Right Navigation Button */}
        {showRightButton && (
          <button
            onClick={() => scroll("next")}
            style={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid #ddd",
              cursor: "pointer",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              transition: "0.3s",
              zIndex: 10,
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f5f5f5";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
          >
            ❯
          </button>
        )}
      </Box>
    </Box>
  );
};

export default ProductSections;