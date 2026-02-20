


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





import React, { useState, useRef, useEffect } from "react";
import "./Ourproduct.css";
import { products } from "./ProductData"; // Your full products array
import { BsCart } from "react-icons/bs"; // Cart icon
import qrImage from "./vendorimage/qr1.jpeg";

// Product Card Component
const ProductCard = ({ product, openPopup }) => (
  <div className="ps-card" onClick={() => openPopup(product)}>
    <div className="ps-img-box">
      <img src={product.images[0]} alt={product.brand} className="ps-img" />
    </div>
    <div className="ps-info">
      <h4>{product.brand}</h4>
      <p>{product.description}</p>
      <span>{product.currentPrice}</span>
    </div>
  </div>
);

// Product Row Component
const ProductRow = ({ products = [], autoSlide = false, openPopup }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const cardWidthRef = useRef(300);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 480) cardWidthRef.current = width - 40;
      else if (width < 768) cardWidthRef.current = width * 0.9;
      else cardWidthRef.current = 300;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!autoSlide || !isMobile) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const scrollWidth = scrollRef.current.scrollWidth;
        const clientWidth = scrollRef.current.clientWidth;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({
            left: cardWidthRef.current,
            behavior: "smooth",
          });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoSlide, isMobile]);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -cardWidthRef.current, behavior: "smooth" });
  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: cardWidthRef.current, behavior: "smooth" });

  return (
    <div className="ps-row-wrapper">
      {!isMobile && (
        <button className="ps-nav ps-prev" onClick={scrollLeft}>
          ❮
        </button>
      )}
      <div className="ps-scroll" ref={scrollRef}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} openPopup={openPopup} />
        ))}
      </div>
      {!isMobile && (
        <button className="ps-nav ps-next" onClick={scrollRight}>
          ❯
        </button>
      )}
    </div>
  );
};

// Main ProductSections Component
const ProductSections = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("M");

  // WhatsApp form & payment
  const [showForm, setShowForm] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    payment: "COD",
  });

  // Open / Close product popup
  const openPopup = (product) => {
    setSelectedProduct(product);
    setMainImage(product.images[0]);
    setSelectedSize(product.size?.[0] || "M");
  };
  const closePopup = () => {
    setSelectedProduct(null);
    setShowForm(false);
    setShowPayment(false);
  };

  // Generate WhatsApp message
  const generateOrderId = () => "ORD" + Math.floor(100000 + Math.random() * 900000);

  const openWhatsApp = () => {
  if (!selectedProduct) return;

  const orderId = generateOrderId();

  const msg = `🧾 *New Order Received*

━━━━━━━━━━━━━━
*Order ID:* ${orderId}
━━━━━━━━━━━━━━

👤 *Customer Details*
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

━━━━━━━━━━━━━━
🛍️ *Product Details*
Product: ${selectedProduct.brand}
Artist: ${selectedProduct.artist || "N/A"}
Price: ${selectedProduct.currentPrice}
Size: ${selectedSize || "N/A"}
Quantity: ${customer.quantity}
Payment: ${customer.payment}
Category: ${selectedProduct.category} → ${selectedProduct.subcategory || "N/A"}
━━━━━━━━━━━━━━`;

  const url = `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
  setShowForm(false);
};


  const handleOrderSubmit = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details");
      return;
    }
    if (customer.payment === "Online") setShowPayment(true);
    else openWhatsApp();
  };

  const confirmPayment = () => {
    alert("Payment Confirmed!");
    openWhatsApp();
    setShowPayment(false);
  };

  // Separate products by category
  const paintingProducts = products.filter((p) => p.category === "Painting");
  const textileProducts = products.filter((p) => p.category !== "Painting");

  return (
    <section className="ps-section">
      <h2 className="ps-title">
        Our New Arrivals <span style={{ color: "#8b0000" }}>Product</span>
      </h2>

      <ProductRow products={paintingProducts} autoSlide={false} openPopup={openPopup} />
      <ProductRow products={textileProducts} autoSlide={true} openPopup={openPopup} />

      <div className="ps-viewmore-wrap">
        <a href="/what-we-offer-bihar" className="ps-viewmore">
          View More Products
        </a>
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <div className="ps-popup" onClick={closePopup}>
          <div
            className="ps-popup-content"
            style={{ width: "900px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="ps-close" onClick={closePopup}>
              ×
            </button>

            <div className="ps-popup-left">
              <img src={mainImage} alt={selectedProduct.brand} className="ps-main-img" />
              <div className="ps-thumbs">
                {selectedProduct.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProduct.brand} view ${idx + 1}`}
                    className={mainImage === img ? "active" : ""}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </div>
            </div>

            <div className="ps-popup-right">
              <h2>{selectedProduct.brand}</h2>
              <p className="ps-desc">{selectedProduct.description}</p>
              <h3 className="ps-price">{selectedProduct.currentPrice}</h3>
              <div className="ps-return-info">🔄 7 Days Return Policy | Free Exchange</div>

              {/* Size Selection */}
              {selectedProduct.size && (
                <div className="ps-size-section">
                  <p className="ps-size-label">Select Size:</p>
                  <div className="ps-sizes">
                    {selectedProduct.size.map((size) => (
                      <button
                        key={size}
                        className={`ps-size-btn ${selectedSize === size ? "active" : ""}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Buy Now */}
              <button className="ps-buy-small" onClick={() => setShowForm(true)}>
                <BsCart /> Buy Now
              </button>

              {/* WhatsApp Form */}
              {showForm && (
                <div className="whatsapp-form-overlay">
                  <div className="whatsapp-form-box">
                    <h3>Enter Your Details</h3>

                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    />

                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    />

                    <textarea
                      placeholder="Delivery Address"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    />

                    <div className="form-group">
                      <label>Quantity</label>
                      <input
                        type="number"
                        min="1"
                        value={customer.quantity}
                        onChange={(e) =>
                          setCustomer({ ...customer, quantity: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label>Payment Method</label>
                      <select
                        value={customer.payment}
                        onChange={(e) =>
                          setCustomer({ ...customer, payment: e.target.value })
                        }
                      >
                        <option value="COD">Cash on Delivery</option>
                        <option value="Online">Online Payment</option>
                      </select>
                    </div>

                    <button className="submit-btn" onClick={handleOrderSubmit}>
                      Submit Order
                    </button>

                    <button className="close-btn" onClick={() => setShowForm(false)}>
                      ×
                    </button>
                  </div>
                </div>
              )}

              {/* Payment Overlay */}
              {showPayment && (
                <div className="payment-overlay">
                  <div className="payment-box">
                    <h3>Scan & Pay</h3>
                     <img
                          src={qrImage}
                          alt="Payment QR"
                          className="payment-qr"
                        />

                    <p>Scan this QR using any UPI app</p>
                    <button className="confirm-btn" onClick={confirmPayment}>
                      Payment Done
                    </button>
                    <button className="close-btn" onClick={() => setShowPayment(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSections;
