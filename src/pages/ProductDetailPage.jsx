





// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProductDetailPage.css";
// import {
//     FiHeart,
//     FiShoppingCart,
//     FiShare2,
//     FiArrowLeft,
//     FiChevronDown,
//     FiChevronUp,
//     FiCheck,
//     FiTruck,
//     FiShield,
//     FiRefreshCw,
//     FiPlus,
//     FiMinus
// } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";
// import { MdVerified } from "react-icons/md";
// import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
// import qrImage from "./vendorimage/qr1.jpeg";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// export default function ProductDetailPage() {
//     const { productId } = useParams();
//     const navigate = useNavigate();

//     const [product, setProduct] = useState(null);
//     const [allProducts, setAllProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeImage, setActiveImage] = useState(0);
//     const [selectedSize, setSelectedSize] = useState("");
//     const [wishlist, setWishlist] = useState([]);
//     const [showCheckoutModal, setShowCheckoutModal] = useState(false);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const [expandedSections, setExpandedSections] = useState({
//         description: true,
//         story: false,
//         details: false
//     });
//     const [quantity, setQuantity] = useState(1);
//     const [checkoutForm, setCheckoutForm] = useState({
//         fullName: "",
//         phoneNumber: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         pincode: "",
//         state: "Bihar",
//         paymentMethod: "COD",
//     });

//     // Fetch all products
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const data = await response.json();

//                 // Transform API data to match the required format
//                 const transformedProducts = data.map(item => ({
//                     id: item.id,
//                     sku: item.sku,
//                     name: item.name,
//                     brand: extractBrand(item.name),
//                     artist: extractArtist(item.description) || "Traditional Artist",
//                     currentPrice: `Rs. ${item.sell_price?.toLocaleString() || item.sell_price}`,
//                     originalPrice: item.original_price ? `Rs. ${item.original_price.toLocaleString()}` : null,
//                     discount: item.original_price ?
//                         Math.round(((item.original_price - item.sell_price) / item.original_price) * 100) + '%' : null,
//                     images: item.images?.map(img => img.url) || [],
//                     category: item.category?.name || "Others",
//                     subcategory: item.sub_category?.name || "Uncategorized",
//                     rating: 4.5,
//                     reviews: Math.floor(Math.random() * 50) + 10,
//                     size: item.size || ["Standard"],
//                     description: item.description || "No description available",
//                     story: extractStory(item.description),
//                     inStock: true,
//                     soldCount: Math.floor(Math.random() * 50) + 10,
//                     material: extractMaterial(item.description) || "Traditional Handicraft",
//                     origin: "India",
//                     deliveryTime: "5-7 business days",
//                     returnPolicy: "7 days return",
//                     careInstructions: extractCareInstructions(item.description)
//                 }));

//                 setAllProducts(transformedProducts);

//                 // Find current product
//                 const currentProduct = transformedProducts.find(p => p.id === parseInt(productId));
//                 if (currentProduct) {
//                     setProduct(currentProduct);
//                     setSelectedSize(currentProduct.size?.[0] || "");
//                 } else {
//                     setError('Product not found');
//                 }

//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching products:', err);
//                 setError('Failed to load product. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [productId]);

//     // Helper functions for data extraction
//     const extractBrand = (name) => {
//         if (!name) return "Handcrafted Item";
//         // Remove any pipe or separator content for cleaner brand name
//         const brandName = name.split('|')[0].trim();
//         return brandName.length > 60 ? brandName.substring(0, 60) + "..." : brandName;
//     };

//     const extractArtist = (description) => {
//         if (!description) return "Traditional Artist";
//         const artistMatch = description.match(/artist\s+([^.!?\n]+)/i) ||
//             description.match(/by\s+([^.!?\n]+)/i) ||
//             description.match(/Artist:\s*([^.\n]+)/i);
//         return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
//     };

//     const extractStory = (description) => {
//         if (!description) return [];
//         const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 30);
//         return sentences.slice(0, 3).map(s => s.trim());
//     };

//     const extractMaterial = (description) => {
//         if (!description) return "Cotton Blend";
//         const materialMatch = description.match(/fabric\s+([^.!?\n]+)/i) ||
//             description.match(/material\s+([^.!?\n]+)/i) ||
//             description.match(/cotton/i);
//         if (materialMatch) return materialMatch[1]?.trim() || "Cotton";
//         if (description.toLowerCase().includes('cotton')) return "Cotton";
//         if (description.toLowerCase().includes('silk')) return "Silk";
//         return "Traditional Handicraft";
//     };

//     const extractCareInstructions = (description) => {
//         if (!description) return "Gentle hand wash recommended";
//         const careMatch = description.match(/care\s*:?\s*([^.!?\n]+)/i);
//         return careMatch ? careMatch[1].trim() : "Gentle hand wash recommended";
//     };

//     // Get similar products based on category and subcategory
//     const getSimilarProducts = () => {
//         if (!product || !allProducts.length) return [];
//         return allProducts
//             .filter(p =>
//                 p.id !== product.id &&
//                 (p.category === product.category || p.subcategory === product.subcategory)
//             )
//             .slice(0, 4);
//     };

//     const formatPrice = (price) => {
//         if (!price) return '';
//         return price.replace('Rs. ', '₹');
//     };

//     const calculateTotal = () => {
//         const price = parseInt(product?.currentPrice?.replace(/[^0-9]/g, '') || '0');
//         return `₹${(price * quantity).toLocaleString()}`;
//     };

//     const calculateNumericTotal = () => {
//         return parseInt(product?.currentPrice?.replace(/[^0-9]/g, '') || '0') * quantity;
//     };

//     const generateOrderId = () => {
//         return "ORD" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
//     };

//     const openWhatsApp = (product, selectedSize, checkoutForm) => {
//         const orderId = generateOrderId();
//         const size = selectedSize || product.size?.[0] || "Standard";
//         const image = product.images?.[0] || "";
//         const total = calculateNumericTotal();

//         const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;

//         const msg = `🧾 *NEW ORDER RECEIVED*
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${product.brand}
// Artist: ${product.artist}
// Price: ${product.currentPrice}
// Size: ${size}
// Quantity: ${quantity}
// Subtotal: ₹${total.toLocaleString()}
// Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}
// Category: ${product.category} → ${product.subcategory}

// ━━━━━━━━━━━━━━━━━━━━━
// 🖼️ Product Image:
// ${image}

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order and delivery details.`;

//         window.open(
//             `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//             "_blank"
//         );
//     };

//     const handleCheckoutSubmit = (e) => {
//         e.preventDefault();

//         // Validate form
//         if (!checkoutForm.fullName || !checkoutForm.phoneNumber || !checkoutForm.addressLine1 || !checkoutForm.city || !checkoutForm.pincode) {
//             alert("Please fill in all required fields");
//             return;
//         }

//         if (checkoutForm.phoneNumber.length !== 10 || isNaN(checkoutForm.phoneNumber)) {
//             alert("Please enter a valid 10-digit phone number");
//             return;
//         }

//         if (checkoutForm.pincode.length !== 6 || isNaN(checkoutForm.pincode)) {
//             alert("Please enter a valid 6-digit pincode");
//             return;
//         }

//         if (checkoutForm.paymentMethod === "Online") {
//             setShowPaymentModal(true);
//         } else {
//             openWhatsApp(product, selectedSize, checkoutForm);
//             setShowCheckoutModal(false);
//             resetCheckoutForm();
//         }
//     };

//     const resetCheckoutForm = () => {
//         setCheckoutForm({
//             fullName: "",
//             phoneNumber: "",
//             addressLine1: "",
//             addressLine2: "",
//             city: "",
//             pincode: "",
//             state: "Bihar",
//             paymentMethod: "COD",
//         });
//     };

//     const confirmPayment = () => {
//         alert("✅ Payment Successful!");
//         openWhatsApp(product, selectedSize, checkoutForm);
//         setShowPaymentModal(false);
//         setShowCheckoutModal(false);
//         resetCheckoutForm();
//     };

//     const toggleWishlist = (productId) => {
//         setWishlist(prev =>
//             prev.includes(productId)
//                 ? prev.filter(id => id !== productId)
//                 : [...prev, productId]
//         );
//     };

//     const toggleSection = (section) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [section]: !prev[section]
//         }));
//     };

//     const handleShareProduct = () => {
//         const productUrl = `${window.location.origin}/product/${product.id}`;
//         const shareText = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts\n\n💰 Price: ${product.currentPrice}\n🎨 Artist: ${product.artist}\n\n🔗 ${productUrl}`;

//         if (navigator.share) {
//             navigator.share({
//                 title: product.brand,
//                 text: shareText,
//                 url: productUrl,
//             });
//         } else {
//             navigator.clipboard.writeText(productUrl);
//             alert('✅ Link copied to clipboard!');
//         }
//     };

//     const handleSimilarProductClick = (productId) => {
//         window.scrollTo(0, 0);
//         navigate(`/product/${productId}`);
//     };

//     const renderStars = (rating) => {
//         const stars = [];
//         const fullStars = Math.floor(rating);
//         const hasHalfStar = rating % 1 !== 0;

//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<FaStar key={`star-${i}`} className="pdp-star-filled" />);
//         }
//         if (hasHalfStar) {
//             stars.push(<FaStarHalfAlt key="half-star" className="pdp-star-filled" />);
//         }
//         while (stars.length < 5) {
//             stars.push(<FaRegStar key={`star-empty-${stars.length}`} className="pdp-star-empty" />);
//         }
//         return stars;
//     };

//     const similarProducts = getSimilarProducts();

//     if (loading) {
//         return (
//             <div className="pdp-loading-container">
//                 <div className="pdp-loader"></div>
//                 <p className="pdp-loading-text">Loading exquisite handcrafted details...</p>
//             </div>
//         );
//     }

//     if (error || !product) {
//         return (
//             <div className="pdp-error-container">
//                 <div className="pdp-error-content">
//                     <h3 className="pdp-error-title">Oops! Something went wrong</h3>
//                     <p className="pdp-error-message">{error || 'Product not found'}</p>
//                     <button className="pdp-error-button" onClick={() => navigate('/what-we-offer-bihar')}>
//                         Back to Products
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="pdp-wrapper">
//             {/* Header */}
//             <header className="pdp-header">
//                 <div className="pdp-container">
//                     <div className="pdp-header-content">
//                         <button
//                             className="pdp-back-button"
//                             onClick={() => navigate('/what-we-offer-bihar')}
//                             aria-label="Go back"
//                         >
//                             <FiArrowLeft />
//                         </button>

//                         <div className="pdp-logo">
//                             <h1>Handicrafts<span>Items</span></h1>
//                         </div>

//                         <div className="pdp-header-actions">
//                             <button
//                                 className="pdp-icon-button"
//                                 onClick={() => alert(`${wishlist.length} items in wishlist`)}
//                                 aria-label="Wishlist"
//                             >
//                                 <FiHeart />
//                                 {wishlist.length > 0 && <span className="pdp-badge">{wishlist.length}</span>}
//                             </button>
//                             <button className="pdp-icon-button" aria-label="Cart">
//                                 <FiShoppingCart />
//                                 <span className="pdp-badge">0</span>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="pdp-main">
//                 <div className="pdp-container">
//                     {/* Product Layout */}
//                     <div className="pdp-grid">
//                         {/* Left Column - Gallery */}
//                         <div className="pdp-gallery-column">
//                             <div className="pdp-gallery-sticky">
//                                 <div className="pdp-main-image-wrapper">
//                                     <img
//                                         src={product.images[activeImage]}
//                                         alt={product.brand}
//                                         className="pdp-main-image"
//                                         onError={(e) => {
//                                             e.target.src = 'https://via.placeholder.com/600x700?text=Image+Not+Available';
//                                         }}
//                                     />

//                                     {product.discount && (
//                                         <div className="pdp-discount-badge">
//                                             {product.discount} OFF
//                                         </div>
//                                     )}

//                                     {product.inStock && (
//                                         <div className="pdp-stock-badge">
//                                             <MdVerified /> In Stock
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Thumbnails */}
//                                 {product.images.length > 1 && (
//                                     <div className="pdp-thumbnail-strip">
//                                         {product.images.map((img, index) => (
//                                             <button
//                                                 key={index}
//                                                 className={`pdp-thumbnail-button ${activeImage === index ? 'pdp-thumbnail-active' : ''}`}
//                                                 onClick={() => setActiveImage(index)}
//                                                 aria-label={`View image ${index + 1}`}
//                                             >
//                                                 <img
//                                                     src={img}
//                                                     alt={`Thumbnail ${index + 1}`}
//                                                     onError={(e) => {
//                                                         e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
//                                                     }}
//                                                 />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Right Column - Details */}
//                         <div className="pdp-details-column">
//                             {/* Breadcrumb */}
//                             <nav className="pdp-breadcrumb" aria-label="Breadcrumb">
//                                 <span onClick={() => navigate('/')}>Home</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span onClick={() => navigate('/what-we-offer-bihar')}>Products</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span className="pdp-breadcrumb-current">{product.category}</span>
//                             </nav>

//                             {/* Title and Artist */}
//                             <h1 className="pdp-product-title">{product.brand}</h1>
//                             <div className="pdp-artist-info">
//                                 <span className="pdp-artist-label">Created by</span>
//                                 <span className="pdp-artist-name">{product.artist}</span>
//                             </div>

//                             {/* Rating and Sales */}
//                             <div className="pdp-meta-info">
//                                 <div className="pdp-rating-container">
//                                     <div className="pdp-stars">
//                                         {renderStars(product.rating)}
//                                     </div>
//                                     <span className="pdp-rating-score">{product.rating}</span>
//                                     <span className="pdp-review-count">({product.reviews} reviews)</span>
//                                 </div>
//                             </div>

//                             {/* Accordion Sections */}
//                             <div className="pdp-accordion-container">
//                                 {/* Description Accordion */}
//                                 <div className="pdp-accordion-item">
//                                     <button
//                                         className="pdp-accordion-header"
//                                         onClick={() => toggleSection('description')}
//                                         aria-expanded={expandedSections.description}
//                                     >
//                                         <span className="pdp-accordion-title">Description</span>
//                                         {expandedSections.description ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.description && (
//                                         <div className="pdp-accordion-content">
//                                             <p className="pdp-description-text">{product.description}</p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* About This Piece Accordion */}
//                                 {product.story && product.story.length > 0 && (
//                                     <div className="pdp-accordion-item">
//                                         <button
//                                             className="pdp-accordion-header"
//                                             onClick={() => toggleSection('story')}
//                                             aria-expanded={expandedSections.story}
//                                         >
//                                             <span className="pdp-accordion-title">About this piece</span>
//                                             {expandedSections.story ? <FiChevronUp /> : <FiChevronDown />}
//                                         </button>
//                                         {expandedSections.story && (
//                                             <div className="pdp-accordion-content">
//                                                 <ul className="pdp-story-list">
//                                                     {product.story.map((item, i) => (
//                                                         <li key={i} className="pdp-story-item">• {item}</li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         )}
//                                     </div>
//                                 )}

//                                 {/* Product Details Accordion */}
//                                 <div className="pdp-accordion-item">
//                                     <button
//                                         className="pdp-accordion-header"
//                                         onClick={() => toggleSection('details')}
//                                         aria-expanded={expandedSections.details}
//                                     >
//                                         <span className="pdp-accordion-title">Product Details</span>
//                                         {expandedSections.details ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.details && (
//                                         <div className="pdp-accordion-content">
//                                             <table className="pdp-details-table">
//                                                 <tbody>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Artist</td>
//                                                         <td className="pdp-details-value">{product.artist}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Category</td>
//                                                         <td className="pdp-details-value">{product.category}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Subcategory</td>
//                                                         <td className="pdp-details-value">{product.subcategory}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Available Sizes</td>
//                                                         <td className="pdp-details-value">{product.size.join(', ')}</td>
//                                                     </tr>
//                                                     {product.discount && (
//                                                         <tr className="pdp-details-row">
//                                                             <td className="pdp-details-label">Discount</td>
//                                                             <td className="pdp-details-value pdp-discount-value">{product.discount}</td>
//                                                         </tr>
//                                                     )}
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Material</td>
//                                                         <td className="pdp-details-value">{product.material}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Care Instructions</td>
//                                                         <td className="pdp-details-value">{product.careInstructions}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Country of Origin</td>
//                                                         <td className="pdp-details-value">{product.origin}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Delivery Time</td>
//                                                         <td className="pdp-details-value">{product.deliveryTime}</td>
//                                                     </tr>
//                                                     <tr className="pdp-details-row">
//                                                         <td className="pdp-details-label">Return Policy</td>
//                                                         <td className="pdp-details-value">{product.returnPolicy}</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Delivery Info */}
//                             <div className="pdp-delivery-grid">
//                                 <div className="pdp-delivery-card">
//                                     <FiTruck className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Free Delivery</strong>
//                                         <span>on orders above ₹999</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiShield className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Secure Payment</strong>
//                                         <span>100% protection</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiRefreshCw className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Easy Returns</strong>
//                                         <span>7 days policy</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Price Section */}
//                             <div className="pdp-price-container">
//                                 <div className="pdp-price-wrapper">
//                                     <span className="pdp-current-price">{formatPrice(product.currentPrice)}</span>
//                                     {product.originalPrice && (
//                                         <span className="pdp-original-price">{formatPrice(product.originalPrice)}</span>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Size Selection */}
//                             {product.size && product.size.length > 0 && (
//                                 <div className="pdp-size-section">
//                                     <div className="pdp-size-header">
//                                         <h4 className="pdp-size-title">Select Size</h4>
//                                     </div>
//                                     <div className="pdp-size-options">
//                                         {product.size.map((size) => (
//                                             <button
//                                                 key={size}
//                                                 className={`pdp-size-option ${selectedSize === size ? 'pdp-size-selected' : ''}`}
//                                                 onClick={() => setSelectedSize(size)}
//                                                 aria-pressed={selectedSize === size}
//                                             >
//                                                 {size}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             {/* Action Buttons */}
//                             <div className="pdp-action-group">
//                                 <button
//                                     className="pdp-buy-button"
//                                     onClick={() => setShowCheckoutModal(true)}
//                                 >
//                                     <BsCart className="pdp-buy-icon" />
//                                     <span className="pdp-buy-text">Buy Now</span>
//                                     <span className="pdp-buy-price">{calculateTotal()}</span>
//                                 </button>

//                                 <button
//                                     className="pdp-quantity-button"
//                                     onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                                     disabled={quantity <= 1}
//                                     aria-label="Decrease quantity"
//                                 >
//                                     <FiMinus />
//                                 </button>

//                                 <span className="pdp-quantity-value">{quantity}</span>

//                                 <button
//                                     className="pdp-quantity-button"
//                                     onClick={() => setQuantity(prev => prev + 1)}
//                                     aria-label="Increase quantity"
//                                 >
//                                     <FiPlus />
//                                 </button>

//                                 <button
//                                     className={`pdp-wishlist-button ${wishlist.includes(product.id) ? 'pdp-wishlist-active' : ''}`}
//                                     onClick={() => toggleWishlist(product.id)}
//                                     aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
//                                 >
//                                     <FiHeart />
//                                 </button>

//                                 <button
//                                     className="pdp-share-button"
//                                     onClick={handleShareProduct}
//                                     aria-label="Share product"
//                                 >
//                                     <FiShare2 />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Similar Products Section */}
//                     {similarProducts.length > 0 && (
//                         <section className="pdp-similar-section">
//                             <h2 className="pdp-section-title">You might also like</h2>
//                             <div className="pdp-similar-grid">
//                                 {similarProducts.map((item) => (
//                                     <div
//                                         key={item.id}
//                                         className="pdp-similar-card"
//                                         onClick={() => handleSimilarProductClick(item.id)}
//                                         role="button"
//                                         tabIndex={0}
//                                         onKeyPress={(e) => e.key === 'Enter' && handleSimilarProductClick(item.id)}
//                                     >
//                                         <div className="pdp-similar-image-wrapper">
//                                             <img
//                                                 src={item.images[0]}
//                                                 alt={item.brand}
//                                                 className="pdp-similar-image"
//                                                 onError={(e) => {
//                                                     e.target.src = 'https://via.placeholder.com/200x250?text=No+Image';
//                                                 }}
//                                             />
//                                             {item.discount && (
//                                                 <span className="pdp-similar-discount">{item.discount}</span>
//                                             )}
//                                             <button
//                                                 className="pdp-similar-wishlist"
//                                                 onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     toggleWishlist(item.id);
//                                                 }}
//                                                 aria-label="Add to wishlist"
//                                             >
//                                                 <FiHeart className={wishlist.includes(item.id) ? 'pdp-wishlist-active' : ''} />
//                                             </button>
//                                         </div>
//                                         <div className="pdp-similar-content">
//                                             <h3 className="pdp-similar-title">{item.brand.length > 40 ? item.brand.substring(0, 40) + "..." : item.brand}</h3>
//                                             <p className="pdp-similar-artist">{item.artist}</p>
//                                             <div className="pdp-similar-price">
//                                                 <span className="pdp-similar-current">{formatPrice(item.currentPrice)}</span>
//                                                 {item.originalPrice && (
//                                                     <span className="pdp-similar-original">{formatPrice(item.originalPrice)}</span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//                 </div>
//             </main>

//             {/* Checkout Modal */}
//             {showCheckoutModal && (
//                 <div className="pdp-modal-overlay" onClick={() => setShowCheckoutModal(false)}>
//                     <div className="pdp-modal-container" onClick={(e) => e.stopPropagation()}>
//                         <button
//                             className="pdp-modal-close"
//                             onClick={() => setShowCheckoutModal(false)}
//                             aria-label="Close modal"
//                         >
//                             ×
//                         </button>

//                         <div className="pdp-modal-header">
//                             <h3 className="pdp-modal-title">Complete Your Order</h3>
//                             <p className="pdp-modal-subtitle">Fill in your details to proceed</p>
//                         </div>

//                         {/* Order Summary */}
//                         <div className="pdp-order-summary">
//                             <img
//                                 src={product.images[0]}
//                                 alt={product.brand}
//                                 className="pdp-summary-image"
//                             />
//                             <div className="pdp-summary-details">
//                                 <h4 className="pdp-summary-title">{product.brand.length > 50 ? product.brand.substring(0, 50) + "..." : product.brand}</h4>
//                                 <p className="pdp-summary-meta">
//                                     {selectedSize} • Qty: {quantity}
//                                 </p>
//                                 <div className="pdp-summary-price">
//                                     <span className="pdp-summary-total">{calculateTotal()}</span>
//                                     <span className="pdp-summary-label">Total</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Checkout Form */}
//                         <form onSubmit={handleCheckoutSubmit} className="pdp-checkout-form">
//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-full-width">
//                                     <label htmlFor="fullName" className="pdp-form-label">Full Name *</label>
//                                     <input
//                                         type="text"
//                                         id="fullName"
//                                         className="pdp-form-input"
//                                         placeholder="Enter your full name"
//                                         value={checkoutForm.fullName}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })}
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-full-width">
//                                     <label htmlFor="phoneNumber" className="pdp-form-label">Phone Number *</label>
//                                     <input
//                                         type="tel"
//                                         id="phoneNumber"
//                                         className="pdp-form-input"
//                                         placeholder="10-digit mobile number"
//                                         value={checkoutForm.phoneNumber}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, phoneNumber: e.target.value })}
//                                         maxLength="10"
//                                         pattern="[0-9]{10}"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-full-width">
//                                     <label htmlFor="addressLine1" className="pdp-form-label">Address Line 1 *</label>
//                                     <input
//                                         type="text"
//                                         id="addressLine1"
//                                         className="pdp-form-input"
//                                         placeholder="House number, street name"
//                                         value={checkoutForm.addressLine1}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine1: e.target.value })}
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-full-width">
//                                     <label htmlFor="addressLine2" className="pdp-form-label">Address Line 2 (Optional)</label>
//                                     <input
//                                         type="text"
//                                         id="addressLine2"
//                                         className="pdp-form-input"
//                                         placeholder="Apartment, suite, unit"
//                                         value={checkoutForm.addressLine2}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine2: e.target.value })}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-half-width">
//                                     <label htmlFor="city" className="pdp-form-label">City *</label>
//                                     <input
//                                         type="text"
//                                         id="city"
//                                         className="pdp-form-input"
//                                         placeholder="City"
//                                         value={checkoutForm.city}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group pdp-half-width">
//                                     <label htmlFor="pincode" className="pdp-form-label">Pincode *</label>
//                                     <input
//                                         type="text"
//                                         id="pincode"
//                                         className="pdp-form-input"
//                                         placeholder="6-digit pincode"
//                                         value={checkoutForm.pincode}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
//                                         maxLength="6"
//                                         pattern="[0-9]{6}"
//                                         required
//                                     />
//                                 </div>
//                             </div>

//                             <div className="pdp-form-row">
//                                 <div className="pdp-form-group pdp-half-width">
//                                     <label htmlFor="state" className="pdp-form-label">State *</label>
//                                     <select
//                                         id="state"
//                                         className="pdp-form-select"
//                                         value={checkoutForm.state}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
//                                         required
//                                     >
//                                         <option value="Bihar">Bihar</option>
//                                         <option value="Jharkhand">Jharkhand</option>
//                                         <option value="Other">Other</option>
//                                     </select>
//                                 </div>

//                                 <div className="pdp-form-group pdp-half-width">
//                                     <label htmlFor="paymentMethod" className="pdp-form-label">Payment Method *</label>
//                                     <select
//                                         id="paymentMethod"
//                                         className="pdp-form-select"
//                                         value={checkoutForm.paymentMethod}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
//                                         required
//                                     >
//                                         <option value="COD">Cash on Delivery</option>
//                                         <option value="Online">Online Payment (UPI/Card)</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="pdp-form-actions">
//                                 <button type="submit" className="pdp-submit-button">
//                                     <FiCheck className="pdp-submit-icon" />
//                                     Place Order • {calculateTotal()}
//                                 </button>
//                                 <p className="pdp-form-note">
//                                     <FiCheck className="pdp-note-icon" />
//                                     You'll be redirected to WhatsApp to confirm your order
//                                 </p>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* Payment Modal */}
//             {showPaymentModal && (
//                 <div className="pdp-modal-overlay" onClick={() => setShowPaymentModal(false)}>
//                     <div className="pdp-modal-container pdp-payment-modal" onClick={(e) => e.stopPropagation()}>
//                         <button
//                             className="pdp-modal-close"
//                             onClick={() => setShowPaymentModal(false)}
//                             aria-label="Close modal"
//                         >
//                             ×
//                         </button>

//                         <div className="pdp-payment-header">
//                             <h3 className="pdp-payment-title">Scan to Pay</h3>
//                             <p className="pdp-payment-subtitle">Complete your payment via UPI</p>
//                         </div>

//                         <div className="pdp-qr-wrapper">
//                             <img src={qrImage} alt="Payment QR Code" className="pdp-qr-image" />
//                         </div>

//                         <div className="pdp-payment-details">
//                             <p className="pdp-payment-amount">
//                                 <span className="pdp-amount-label">Amount to pay:</span>
//                                 <span className="pdp-amount-value">{calculateTotal()}</span>
//                             </p>
//                             <p className="pdp-payment-instruction">
//                                 Scan this QR code with any UPI app (Google Pay, PhonePe, Paytm)
//                             </p>
//                         </div>

//                         <button className="pdp-payment-confirm" onClick={confirmPayment}>
//                             <FiCheck className="pdp-confirm-icon" />
//                             I've Completed the Payment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }




// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProductDetailPage.css";
// import {
//     FiHeart,
//     FiShoppingCart,
//     FiShare2,
//     FiArrowLeft,
//     FiChevronDown,
//     FiChevronUp,
//     FiCheck,
//     FiTruck,
//     FiShield,
//     FiRefreshCw,
//     FiPlus,
//     FiMinus,
//     FiX,
//     FiMapPin,
//     FiPhone,
//     FiUser,
//     FiHome,
//     FiSend
// } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";
// import { MdVerified } from "react-icons/md";
// import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
// import qrImage from "./vendorimage/qr1.jpeg";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// export default function ProductDetailPage() {
//     const { productId } = useParams();
//     const navigate = useNavigate();

//     const [product, setProduct] = useState(null);
//     const [allProducts, setAllProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeImage, setActiveImage] = useState(0);
//     const [selectedSize, setSelectedSize] = useState("");
//     const [wishlist, setWishlist] = useState([]);
//     const [cartPanelOpen, setCartPanelOpen] = useState(false);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const [expandedSections, setExpandedSections] = useState({
//         description: true,
//         story: false,
//         details: false
//     });
//     const [quantity, setQuantity] = useState(1);
//     const [checkoutForm, setCheckoutForm] = useState({
//         fullName: "",
//         phoneNumber: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         pincode: "",
//         state: "Bihar",
//         paymentMethod: "COD",
//     });
//     const [cartItems, setCartItems] = useState([]);

//     // Fetch all products
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const data = await response.json();

//                 const transformedProducts = data.map(item => ({
//                     id: item.id,
//                     sku: item.sku,
//                     name: item.name,
//                     brand: extractBrand(item.name),
//                     artist: extractArtist(item.description) || "Traditional Artist",
//                     currentPrice: item.sell_price,
//                     originalPrice: item.original_price,
//                     discount: item.original_price ?
//                         Math.round(((item.original_price - item.sell_price) / item.original_price) * 100) : null,
//                     images: item.images?.map(img => img.url) || [],
//                     category: item.category?.name || "Others",
//                     subcategory: item.sub_category?.name || "Uncategorized",
//                     rating: 4.5,
//                     reviews: Math.floor(Math.random() * 50) + 10,
//                     size: item.size || ["Standard"],
//                     description: item.description || "No description available",
//                     story: extractStory(item.description),
//                     inStock: true,
//                     material: extractMaterial(item.description) || "Traditional Handicraft",
//                     origin: "India",
//                     deliveryTime: "5-7 business days",
//                     returnPolicy: "7 days return",
//                     careInstructions: extractCareInstructions(item.description)
//                 }));

//                 setAllProducts(transformedProducts);

//                 const currentProduct = transformedProducts.find(p => p.id === parseInt(productId));
//                 if (currentProduct) {
//                     setProduct(currentProduct);
//                     setSelectedSize(currentProduct.size?.[0] || "");
//                 } else {
//                     setError('Product not found');
//                 }

//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching products:', err);
//                 setError('Failed to load product. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [productId]);

//     // Helper functions
//     const extractBrand = (name) => {
//         if (!name) return "Handcrafted Item";
//         const brandName = name.split('|')[0].trim();
//         return brandName.length > 60 ? brandName.substring(0, 60) + "..." : brandName;
//     };

//     const extractArtist = (description) => {
//         if (!description) return "Traditional Artist";
//         const artistMatch = description.match(/artist\s+([^.!?\n]+)/i) ||
//             description.match(/by\s+([^.!?\n]+)/i);
//         return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
//     };

//     const extractStory = (description) => {
//         if (!description) return [];
//         const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 30);
//         return sentences.slice(0, 3).map(s => s.trim());
//     };

//     const extractMaterial = (description) => {
//         if (!description) return "Cotton Blend";
//         if (description.toLowerCase().includes('cotton')) return "Cotton";
//         if (description.toLowerCase().includes('silk')) return "Silk";
//         return "Traditional Handicraft";
//     };

//     const extractCareInstructions = (description) => {
//         if (!description) return "Gentle hand wash recommended";
//         const careMatch = description.match(/care\s*:?\s*([^.!?\n]+)/i);
//         return careMatch ? careMatch[1].trim() : "Gentle hand wash recommended";
//     };

//     const getSimilarProducts = () => {
//         if (!product || !allProducts.length) return [];
//         return allProducts
//             .filter(p =>
//                 p.id !== product.id &&
//                 (p.category === product.category || p.subcategory === product.subcategory)
//             )
//             .slice(0, 4);
//     };

//     const formatPrice = (price) => {
//         return `₹${price?.toLocaleString() || 0}`;
//     };

//     const calculateTotal = () => {
//         return (product?.currentPrice || 0) * quantity;
//     };

//     const generateOrderId = () => {
//         return "ORD" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
//     };

//     const openWhatsApp = (product, selectedSize, checkoutForm) => {
//         const orderId = generateOrderId();
//         const size = selectedSize || product.size?.[0] || "Standard";
//         const image = product.images?.[0] || "";
//         const total = calculateTotal();

//         const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;

//         const msg = `🧾 *NEW ORDER RECEIVED*
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${product.brand}
// Artist: ${product.artist}
// Price: ${formatPrice(product.currentPrice)}
// Size: ${size}
// Quantity: ${quantity}
// Subtotal: ${formatPrice(total)}
// Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}
// Category: ${product.category} → ${product.subcategory}

// ━━━━━━━━━━━━━━━━━━━━━
// 🖼️ Product Image:
// ${image}

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order and delivery details.`;

//         window.open(
//             `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//             "_blank"
//         );
//     };

//     const handleAddToCart = () => {
//         if (!selectedSize && product?.size?.length > 1) {
//             alert("Please select a size");
//             return;
//         }

//         const existingItem = cartItems.find(item => item.id === product.id && item.size === selectedSize);
        
//         if (existingItem) {
//             setCartItems(cartItems.map(item =>
//                 item.id === product.id && item.size === selectedSize
//                     ? { ...item, quantity: item.quantity + quantity }
//                     : item
//             ));
//         } else {
//             setCartItems([...cartItems, {
//                 ...product,
//                 selectedSize: selectedSize,
//                 quantity: quantity,
//                 totalPrice: product.currentPrice * quantity
//             }]);
//         }
        
//         setCartPanelOpen(true);
//     };

//     const handleBuyNow = () => {
//         if (!selectedSize && product?.size?.length > 1) {
//             alert("Please select a size");
//             return;
//         }
        
//         // Clear cart and add current item
//         setCartItems([{
//             ...product,
//             selectedSize: selectedSize,
//             quantity: quantity,
//             totalPrice: product.currentPrice * quantity
//         }]);
//         setCartPanelOpen(true);
//     };

//     const handleCheckoutSubmit = (e) => {
//         e.preventDefault();

//         if (!checkoutForm.fullName || !checkoutForm.phoneNumber || !checkoutForm.addressLine1 || !checkoutForm.city || !checkoutForm.pincode) {
//             alert("Please fill in all required fields");
//             return;
//         }

//         if (checkoutForm.phoneNumber.length !== 10 || isNaN(checkoutForm.phoneNumber)) {
//             alert("Please enter a valid 10-digit phone number");
//             return;
//         }

//         if (checkoutForm.pincode.length !== 6 || isNaN(checkoutForm.pincode)) {
//             alert("Please enter a valid 6-digit pincode");
//             return;
//         }

//         if (checkoutForm.paymentMethod === "Online") {
//             setShowPaymentModal(true);
//         } else {
//             // Send order for all cart items
//             cartItems.forEach(item => {
//                 const orderId = generateOrderId();
//                 const size = item.selectedSize || item.size?.[0] || "Standard";
//                 const total = item.currentPrice * item.quantity;
                
//                 const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;
                
//                 const msg = `🧾 *NEW ORDER RECEIVED*
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${item.brand}
// Artist: ${item.artist}
// Price: ${formatPrice(item.currentPrice)}
// Size: ${size}
// Quantity: ${item.quantity}
// Subtotal: ${formatPrice(total)}
// Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order.`;

//                 window.open(
//                     `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//                     "_blank"
//                 );
//             });
            
//             setCartPanelOpen(false);
//             setCartItems([]);
//             resetCheckoutForm();
//         }
//     };

//     const resetCheckoutForm = () => {
//         setCheckoutForm({
//             fullName: "",
//             phoneNumber: "",
//             addressLine1: "",
//             addressLine2: "",
//             city: "",
//             pincode: "",
//             state: "Bihar",
//             paymentMethod: "COD",
//         });
//     };

//     const confirmPayment = () => {
//         alert("✅ Payment Successful!");
//         // Send order for all cart items
//         cartItems.forEach(item => {
//             const orderId = generateOrderId();
//             const size = item.selectedSize || item.size?.[0] || "Standard";
//             const total = item.currentPrice * item.quantity;
            
//             const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;
            
//             const msg = `🧾 *NEW ORDER RECEIVED* (PAID ONLINE)
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${item.brand}
// Artist: ${item.artist}
// Price: ${formatPrice(item.currentPrice)}
// Size: ${size}
// Quantity: ${item.quantity}
// Subtotal: ${formatPrice(total)}
// Payment: Online Payment

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order.`;

//             window.open(
//                 `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//                 "_blank"
//             );
//         });
        
//         setShowPaymentModal(false);
//         setCartPanelOpen(false);
//         setCartItems([]);
//         resetCheckoutForm();
//     };

//     const updateCartItemQuantity = (itemId, size, newQuantity) => {
//         if (newQuantity < 1) {
//             removeCartItem(itemId, size);
//             return;
//         }
//         setCartItems(cartItems.map(item =>
//             item.id === itemId && item.selectedSize === size
//                 ? { ...item, quantity: newQuantity, totalPrice: item.currentPrice * newQuantity }
//                 : item
//         ));
//     };

//     const removeCartItem = (itemId, size) => {
//         setCartItems(cartItems.filter(item => !(item.id === itemId && item.selectedSize === size)));
//     };

//     const getCartTotal = () => {
//         return cartItems.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
//     };

//     const toggleWishlist = (productId) => {
//         setWishlist(prev =>
//             prev.includes(productId)
//                 ? prev.filter(id => id !== productId)
//                 : [...prev, productId]
//         );
//     };

//     const toggleSection = (section) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [section]: !prev[section]
//         }));
//     };

//     const handleShareProduct = () => {
//         const productUrl = `${window.location.origin}/product/${product.id}`;
//         const shareText = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts\n\n💰 Price: ${formatPrice(product.currentPrice)}\n🎨 Artist: ${product.artist}\n\n🔗 ${productUrl}`;

//         if (navigator.share) {
//             navigator.share({
//                 title: product.brand,
//                 text: shareText,
//                 url: productUrl,
//             });
//         } else {
//             navigator.clipboard.writeText(productUrl);
//             alert('✅ Link copied to clipboard!');
//         }
//     };

//     const renderStars = (rating) => {
//         const stars = [];
//         const fullStars = Math.floor(rating);
//         const hasHalfStar = rating % 1 !== 0;

//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<FaStar key={`star-${i}`} className="pdp-star-filled" />);
//         }
//         if (hasHalfStar) {
//             stars.push(<FaStarHalfAlt key="half-star" className="pdp-star-filled" />);
//         }
//         while (stars.length < 5) {
//             stars.push(<FaRegStar key={`star-empty-${stars.length}`} className="pdp-star-empty" />);
//         }
//         return stars;
//     };

//     const similarProducts = getSimilarProducts();

//     if (loading) {
//         return (
//             <div className="pdp-loading-container">
//                 <div className="pdp-loader"></div>
//                 <p className="pdp-loading-text">Loading exquisite handcrafted details...</p>
//             </div>
//         );
//     }

//     if (error || !product) {
//         return (
//             <div className="pdp-error-container">
//                 <div className="pdp-error-content">
//                     <h3 className="pdp-error-title">Oops! Something went wrong</h3>
//                     <p className="pdp-error-message">{error || 'Product not found'}</p>
//                     <button className="pdp-error-button" onClick={() => navigate('/what-we-offer-bihar')}>
//                         Back to Products
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="pdp-wrapper">
//             {/* Header */}
//             <header className="pdp-header">
//                 <div className="pdp-container">
//                     <div className="pdp-header-content">
//                         <button
//                             className="pdp-back-button"
//                             onClick={() => navigate('/what-we-offer-bihar')}
//                             aria-label="Go back"
//                         >
//                             <FiArrowLeft />
//                         </button>

//                         <div className="pdp-logo">
//                             <h1>Handicrafts Items</h1>
//                         </div>

//                         <div className="pdp-header-actions">
//                             <button
//                                 className="pdp-icon-button"
//                                 onClick={() => setCartPanelOpen(true)}
//                                 aria-label="Cart"
//                             >
//                                 <FiShoppingCart />
//                                 {cartItems.length > 0 && <span className="pdp-badge">{cartItems.length}</span>}
//                             </button>
//                             <button
//                                 className="pdp-icon-button"
//                                 onClick={() => alert(`${wishlist.length} items in wishlist`)}
//                                 aria-label="Wishlist"
//                             >
//                                 <FiHeart />
//                                 {wishlist.length > 0 && <span className="pdp-badge">{wishlist.length}</span>}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="pdp-main">
//                 <div className="pdp-container">
//                     <div className="pdp-grid">
//                         {/* Left Column - Gallery */}
//                         <div className="pdp-gallery-column">
//                             <div className="pdp-gallery-sticky">
//                                 <div className="pdp-main-image-wrapper">
//                                     <img
//                                         src={product.images[activeImage]}
//                                         alt={product.brand}
//                                         className="pdp-main-image"
//                                         onError={(e) => {
//                                             e.target.src = 'https://via.placeholder.com/600x700?text=Image+Not+Available';
//                                         }}
//                                     />
//                                     {product.discount && (
//                                         <div className="pdp-discount-badge">
//                                             -{product.discount}% OFF
//                                         </div>
//                                     )}
//                                     {product.inStock && (
//                                         <div className="pdp-stock-badge">
//                                             <MdVerified /> In Stock
//                                         </div>
//                                     )}
//                                 </div>

//                                 {product.images.length > 1 && (
//                                     <div className="pdp-thumbnail-strip">
//                                         {product.images.map((img, index) => (
//                                             <button
//                                                 key={index}
//                                                 className={`pdp-thumbnail-button ${activeImage === index ? 'pdp-thumbnail-active' : ''}`}
//                                                 onClick={() => setActiveImage(index)}
//                                             >
//                                                 <img src={img} alt={`Thumbnail ${index + 1}`} />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Right Column - Details */}
//                         <div className="pdp-details-column">
//                             <nav className="pdp-breadcrumb">
//                                 <span onClick={() => navigate('/')}>Home</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span onClick={() => navigate('/what-we-offer-bihar')}>Products</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span className="pdp-breadcrumb-current">{product.category}</span>
//                             </nav>

//                             <h1 className="pdp-product-title">{product.brand}</h1>
//                             <div className="pdp-artist-info">
//                                 <span className="pdp-artist-label">Created by</span>
//                                 <span className="pdp-artist-name">{product.artist}</span>
//                             </div>

//                             <div className="pdp-meta-info">
//                                 <div className="pdp-rating-container">
//                                     <div className="pdp-stars">{renderStars(product.rating)}</div>
//                                     <span className="pdp-rating-score">{product.rating}</span>
//                                     <span className="pdp-review-count">({product.reviews} reviews)</span>
//                                 </div>
//                             </div>

//                             {/* Accordion Sections */}
//                             <div className="pdp-accordion-container">
//                                 <div className="pdp-accordion-item">
//                                     <button className="pdp-accordion-header" onClick={() => toggleSection('description')}>
//                                         <span className="pdp-accordion-title">Description</span>
//                                         {expandedSections.description ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.description && (
//                                         <div className="pdp-accordion-content">
//                                             <p className="pdp-description-text">{product.description}</p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="pdp-accordion-item">
//                                     <button className="pdp-accordion-header" onClick={() => toggleSection('details')}>
//                                         <span className="pdp-accordion-title">Product Details</span>
//                                         {expandedSections.details ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.details && (
//                                         <div className="pdp-accordion-content">
//                                             <table className="pdp-details-table">
//                                                 <tbody>
//                                                     <tr><td className="pdp-details-label">Artist</td><td className="pdp-details-value">{product.artist}</td></tr>
//                                                     <tr><td className="pdp-details-label">Category</td><td className="pdp-details-value">{product.category}</td></tr>
//                                                     <tr><td className="pdp-details-label">Subcategory</td><td className="pdp-details-value">{product.subcategory}</td></tr>
//                                                     <tr><td className="pdp-details-label">Available Sizes</td><td className="pdp-details-value">{product.size.join(', ')}</td></tr>
//                                                     <tr><td className="pdp-details-label">Material</td><td className="pdp-details-value">{product.material}</td></tr>
//                                                     <tr><td className="pdp-details-label">Care Instructions</td><td className="pdp-details-value">{product.careInstructions}</td></tr>
//                                                     <tr><td className="pdp-details-label">Delivery Time</td><td className="pdp-details-value">{product.deliveryTime}</td></tr>
//                                                     <tr><td className="pdp-details-label">Return Policy</td><td className="pdp-details-value">{product.returnPolicy}</td></tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="pdp-delivery-grid">
//                                 <div className="pdp-delivery-card">
//                                     <FiTruck className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Free Delivery</strong>
//                                         <span>on orders above ₹999</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiShield className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Secure Payment</strong>
//                                         <span>100% protection</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiRefreshCw className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Easy Returns</strong>
//                                         <span>7 days policy</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="pdp-price-container">
//                                 <div className="pdp-price-wrapper">
//                                     <span className="pdp-current-price">{formatPrice(product.currentPrice)}</span>
//                                     {product.originalPrice && (
//                                         <span className="pdp-original-price">{formatPrice(product.originalPrice)}</span>
//                                     )}
//                                 </div>
//                             </div>

//                             {product.size && product.size.length > 0 && (
//                                 <div className="pdp-size-section">
//                                     <div className="pdp-size-header">
//                                         <h4 className="pdp-size-title">Select Size</h4>
//                                     </div>
//                                     <div className="pdp-size-options">
//                                         {product.size.map((size) => (
//                                             <button
//                                                 key={size}
//                                                 className={`pdp-size-option ${selectedSize === size ? 'pdp-size-selected' : ''}`}
//                                                 onClick={() => setSelectedSize(size)}
//                                             >
//                                                 {size}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="pdp-action-group">
//                                 <button className="pdp-add-to-cart-btn" onClick={handleAddToCart}>
//                                     <FiShoppingCart />
//                                     Add to Cart
//                                 </button>
                                
//                                 <button className="pdp-buy-button" onClick={handleBuyNow}>
//                                     <BsCart />
//                                     Buy Now
//                                 </button>

//                                 <div className="pdp-quantity-controls">
//                                     <button className="pdp-quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
//                                         <FiMinus />
//                                     </button>
//                                     <span className="pdp-quantity-value">{quantity}</span>
//                                     <button className="pdp-quantity-button" onClick={() => setQuantity(quantity + 1)}>
//                                         <FiPlus />
//                                     </button>
//                                 </div>

//                                 <button className={`pdp-wishlist-button ${wishlist.includes(product.id) ? 'pdp-wishlist-active' : ''}`} onClick={() => toggleWishlist(product.id)}>
//                                     <FiHeart />
//                                 </button>

//                                 <button className="pdp-share-button" onClick={handleShareProduct}>
//                                     <FiShare2 />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {similarProducts.length > 0 && (
//                         <section className="pdp-similar-section">
//                             <h2 className="pdp-section-title">You might also like</h2>
//                             <div className="pdp-similar-grid">
//                                 {similarProducts.map((item) => (
//                                     <div key={item.id} className="pdp-similar-card" onClick={() => navigate(`/product/${item.id}`)}>
//                                         <div className="pdp-similar-image-wrapper">
//                                             <img src={item.images[0]} alt={item.brand} className="pdp-similar-image" />
//                                             {item.discount && <span className="pdp-similar-discount">-{item.discount}%</span>}
//                                         </div>
//                                         <div className="pdp-similar-content">
//                                             <h3 className="pdp-similar-title">{item.brand}</h3>
//                                             <p className="pdp-similar-artist">{item.artist}</p>
//                                             <div className="pdp-similar-price">
//                                                 <span className="pdp-similar-current">{formatPrice(item.currentPrice)}</span>
//                                                 {item.originalPrice && <span className="pdp-similar-original">{formatPrice(item.originalPrice)}</span>}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//                 </div>
//             </main>

//             {/* Right Side Cart Panel */}
//             <div className={`pdp-cart-panel ${cartPanelOpen ? 'pdp-cart-panel-open' : ''}`}>
//                 <div className="pdp-cart-panel-header">
//                     <h3>
//                         <FiShoppingCart />
//                         Your Cart ({cartItems.length} items)
//                     </h3>
//                     <button className="pdp-cart-close" onClick={() => setCartPanelOpen(false)}>
//                         <FiX />
//                     </button>
//                 </div>

//                 <div className="pdp-cart-panel-content">
//                     {cartItems.length === 0 ? (
//                         <div className="pdp-empty-cart">
//                             <FiShoppingCart />
//                             <p>Your cart is empty</p>
//                             <button onClick={() => setCartPanelOpen(false)}>Continue Shopping</button>
//                         </div>
//                     ) : (
//                         <>
//                             <div className="pdp-cart-items">
//                                 {cartItems.map((item, index) => (
//                                     <div key={index} className="pdp-cart-item">
//                                         <img src={item.images[0]} alt={item.brand} className="pdp-cart-item-image" />
//                                         <div className="pdp-cart-item-details">
//                                             <h4>{item.brand.length > 40 ? item.brand.substring(0, 40) + "..." : item.brand}</h4>
//                                             <p className="pdp-cart-item-artist">{item.artist}</p>
//                                             <p className="pdp-cart-item-size">Size: {item.selectedSize}</p>
//                                             <div className="pdp-cart-item-price">
//                                                 <span className="pdp-cart-item-current">{formatPrice(item.currentPrice)}</span>
//                                             </div>
//                                             <div className="pdp-cart-item-quantity">
//                                                 <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity - 1)}>
//                                                     <FiMinus />
//                                                 </button>
//                                                 <span>{item.quantity}</span>
//                                                 <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity + 1)}>
//                                                     <FiPlus />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <button className="pdp-cart-item-remove" onClick={() => removeCartItem(item.id, item.selectedSize)}>
//                                             <FiX />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="pdp-cart-summary">
//                                 <div className="pdp-cart-total">
//                                     <span>Subtotal</span>
//                                     <span>{formatPrice(getCartTotal())}</span>
//                                 </div>
//                                 <div className="pdp-cart-total">
//                                     <span>Shipping</span>
//                                     <span>Free</span>
//                                 </div>
//                                 <div className="pdp-cart-grand-total">
//                                     <span>Total</span>
//                                     <span>{formatPrice(getCartTotal())}</span>
//                                 </div>
//                             </div>

//                             {/* Checkout Form in Cart Panel */}
//                             <form onSubmit={handleCheckoutSubmit} className="pdp-cart-checkout-form">
//                                 <h4>Delivery Details</h4>
                                
//                                 <div className="pdp-form-group">
//                                     <FiUser className="pdp-form-icon" />
//                                     <input
//                                         type="text"
//                                         placeholder="Full Name *"
//                                         value={checkoutForm.fullName}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiPhone className="pdp-form-icon" />
//                                     <input
//                                         type="tel"
//                                         placeholder="Phone Number *"
//                                         value={checkoutForm.phoneNumber}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, phoneNumber: e.target.value })}
//                                         maxLength="10"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiHome className="pdp-form-icon" />
//                                     <input
//                                         type="text"
//                                         placeholder="Address Line 1 *"
//                                         value={checkoutForm.addressLine1}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine1: e.target.value })}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <input
//                                         type="text"
//                                         placeholder="Address Line 2 (Optional)"
//                                         value={checkoutForm.addressLine2}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine2: e.target.value })}
//                                     />
//                                 </div>

//                                 <div className="pdp-form-row-cart">
//                                     <input
//                                         type="text"
//                                         placeholder="City *"
//                                         value={checkoutForm.city}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Pincode *"
//                                         value={checkoutForm.pincode}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
//                                         maxLength="6"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiMapPin className="pdp-form-icon" />
//                                     <select
//                                         value={checkoutForm.state}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
//                                     >
//                                         <option value="Bihar">Bihar</option>
//                                         <option value="Jharkhand">Jharkhand</option>
//                                         <option value="Other">Other</option>
//                                     </select>
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <select
//                                         value={checkoutForm.paymentMethod}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
//                                     >
//                                         <option value="COD">Cash on Delivery</option>
//                                         <option value="Online">Online Payment (UPI/Card)</option>
//                                     </select>
//                                 </div>

//                                 <button type="submit" className="pdp-checkout-button">
//                                     <FiSend />
//                                     Place Order • {formatPrice(getCartTotal())}
//                                 </button>
//                             </form>
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* Overlay */}
//             {cartPanelOpen && <div className="pdp-cart-overlay" onClick={() => setCartPanelOpen(false)}></div>}

//             {/* Payment Modal */}
//             {showPaymentModal && (
//                 <div className="pdp-modal-overlay" onClick={() => setShowPaymentModal(false)}>
//                     <div className="pdp-modal-container pdp-payment-modal" onClick={(e) => e.stopPropagation()}>
//                         <button className="pdp-modal-close" onClick={() => setShowPaymentModal(false)}>×</button>
//                         <div className="pdp-payment-header">
//                             <h3 className="pdp-payment-title">Scan to Pay</h3>
//                             <p className="pdp-payment-subtitle">Complete your payment via UPI</p>
//                         </div>
//                         <div className="pdp-qr-wrapper">
//                             <img src={qrImage} alt="Payment QR Code" className="pdp-qr-image" />
//                         </div>
//                         <div className="pdp-payment-details">
//                             <p className="pdp-payment-amount">
//                                 <span className="pdp-amount-label">Amount to pay:</span>
//                                 <span className="pdp-amount-value">{formatPrice(getCartTotal())}</span>
//                             </p>
//                             <p className="pdp-payment-instruction">Scan this QR code with any UPI app</p>
//                         </div>
//                         <button className="pdp-payment-confirm" onClick={confirmPayment}>
//                             <FiCheck /> I've Completed the Payment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./ProductDetailPage.css";
// import {
//     FiHeart,
//     FiShoppingCart,
//     FiShare2,
//     FiArrowLeft,
//     FiChevronDown,
//     FiChevronUp,
//     FiCheck,
//     FiTruck,
//     FiShield,
//     FiRefreshCw,
//     FiPlus,
//     FiMinus,
//     FiX,
//     FiMapPin,
//     FiPhone,
//     FiUser,
//     FiHome,
//     FiSend
// } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";
// import { MdVerified } from "react-icons/md";
// import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
// import qrImage from "./vendorimage/qr1.jpeg";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// export default function ProductDetailPage() {
//     const { productId } = useParams();
//     const navigate = useNavigate();

//     const [product, setProduct] = useState(null);
//     const [allProducts, setAllProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [activeImage, setActiveImage] = useState(0);
//     const [selectedSize, setSelectedSize] = useState("");
//     const [wishlist, setWishlist] = useState([]);
//     const [cartPanelOpen, setCartPanelOpen] = useState(false);
//     const [showPaymentModal, setShowPaymentModal] = useState(false);
//     const metroCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata"];
//     const [expandedSections, setExpandedSections] = useState({
//         description: true,
//         story: false,
//         details: false
//     });
//     const [quantity, setQuantity] = useState(1);
    
//     const [checkoutForm, setCheckoutForm] = useState({
//         fullName: "",
//         phoneNumber: "",
//         addressLine1: "",
//         addressLine2: "",
//         city: "",
//         pincode: "",
//         state: "Bihar",
//         paymentMethod: "COD",
//     });
//     const [cartItems, setCartItems] = useState([]);

//     const statesList = [
//     "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh",
//     "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka",
//     "Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
//     "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu",
//     "Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
//     "Delhi"
// ];

//     // Fetch all products
//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(API_URL);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch products');
//                 }
//                 const data = await response.json();

//                 const transformedProducts = data.map(item => ({
//                     id: item.id,
//                     sku: item.sku,
//                     name: item.name,
//                     brand: extractBrand(item.name),
//                     artist: extractArtist(item.description) || "Traditional Artist",
//                     currentPrice: item.sell_price,
//                     originalPrice: item.original_price,
//                     discount: item.original_price ?
//                         Math.round(((item.original_price - item.sell_price) / item.original_price) * 100) : null,
//                     images: item.images?.map(img => img.url) || [],
//                     category: item.category?.name || "Others",
//                     subcategory: item.sub_category?.name || "Uncategorized",
//                     rating: 4.5,
//                     reviews: Math.floor(Math.random() * 50) + 10,
//                     size: item.size || ["Standard"],
//                     description: item.description || "No description available",
//                     story: extractStory(item.description),
//                     inStock: true,
//                     material: extractMaterial(item.description) || "Traditional Handicraft",
//                     origin: "India",
//                     deliveryTime: "5-7 business days",
//                     returnPolicy: "7 days return",
//                     careInstructions: extractCareInstructions(item.description)
//                 }));

//                 setAllProducts(transformedProducts);

//                 const currentProduct = transformedProducts.find(p => p.id === parseInt(productId));
//                 if (currentProduct) {
//                     setProduct(currentProduct);
//                     setSelectedSize(currentProduct.size?.[0] || "");
//                 } else {
//                     setError('Product not found');
//                 }

//                 setLoading(false);
//             } catch (err) {
//                 console.error('Error fetching products:', err);
//                 setError('Failed to load product. Please try again later.');
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, [productId]);

//     // Helper functions
//     const extractBrand = (name) => {
//         if (!name) return "Handcrafted Item";
//         const brandName = name.split('|')[0].trim();
//         return brandName.length > 60 ? brandName.substring(0, 60) + "..." : brandName;
//     };

//     const extractArtist = (description) => {
//         if (!description) return "Traditional Artist";
//         const artistMatch = description.match(/artist\s+([^.!?\n]+)/i) ||
//             description.match(/by\s+([^.!?\n]+)/i);
//         return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
//     };

//     const extractStory = (description) => {
//         if (!description) return [];
//         const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 30);
//         return sentences.slice(0, 3).map(s => s.trim());
//     };

//     const extractMaterial = (description) => {
//         if (!description) return "Cotton Blend";
//         if (description.toLowerCase().includes('cotton')) return "Cotton";
//         if (description.toLowerCase().includes('silk')) return "Silk";
//         return "Traditional Handicraft";
//     };

//     const extractCareInstructions = (description) => {
//         if (!description) return "Gentle hand wash recommended";
//         const careMatch = description.match(/care\s*:?\s*([^.!?\n]+)/i);
//         return careMatch ? careMatch[1].trim() : "Gentle hand wash recommended";
//     };

//     const getSimilarProducts = () => {
//         if (!product || !allProducts.length) return [];
//         return allProducts
//             .filter(p =>
//                 p.id !== product.id &&
//                 (p.category === product.category || p.subcategory === product.subcategory)
//             )
//             .slice(0, 4);
//     };

//     const formatPrice = (price) => {
//         return `₹${price?.toLocaleString() || 0}`;
//     };

//     const calculateTotal = () => {
//         return (product?.currentPrice || 0) * quantity;
//     };

//     const generateOrderId = () => {
//         return "ORD" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);
//     };

//     const openWhatsApp = (product, selectedSize, checkoutForm) => {
//         const orderId = generateOrderId();
//         const size = selectedSize || product.size?.[0] || "Standard";
//         const image = product.images?.[0] || "";
//         const total = calculateTotal();

//         const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;

//         const msg = `🧾 *NEW ORDER RECEIVED*
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${product.brand}
// Artist: ${product.artist}
// Price: ${formatPrice(product.currentPrice)}
// Size: ${size}
// Quantity: ${quantity}
// Subtotal: ${formatPrice(total)}
// Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}
// Category: ${product.category} → ${product.subcategory}

// ━━━━━━━━━━━━━━━━━━━━━
// 🖼️ Product Image:
// ${image}

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order and delivery details.`;

//         window.open(
//             `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//             "_blank"
//         );
//     };

//     const handleAddToCart = () => {
//         if (!selectedSize && product?.size?.length > 1) {
//             alert("Please select a size");
//             return;
//         }

//         const existingItem = cartItems.find(item => item.id === product.id && item.selectedSize === selectedSize);
        
//         if (existingItem) {
//             setCartItems(cartItems.map(item =>
//                 item.id === product.id && item.selectedSize === selectedSize
//                     ? { ...item, quantity: item.quantity + quantity }
//                     : item
//             ));
//         } else {
//             setCartItems([...cartItems, {
//                 ...product,
//                 selectedSize: selectedSize,
//                 quantity: quantity,
//                 totalPrice: product.currentPrice * quantity
//             }]);
//         }
        
//         setCartPanelOpen(true);
//     };

//     const handleBuyNow = () => {
//         if (!selectedSize && product?.size?.length > 1) {
//             alert("Please select a size");
//             return;
//         }
        
//         // Clear cart and add current item
//         setCartItems([{
//             ...product,
//             selectedSize: selectedSize,
//             quantity: quantity,
//             totalPrice: product.currentPrice * quantity
//         }]);
//         setCartPanelOpen(true);
//     };

//     const handleCheckoutSubmit = (e) => {
//         e.preventDefault();

//         if (!checkoutForm.fullName || !checkoutForm.phoneNumber || !checkoutForm.addressLine1 || !checkoutForm.city || !checkoutForm.pincode) {
//             alert("Please fill in all required fields");
//             return;
//         }

//         if (checkoutForm.phoneNumber.length !== 10 || isNaN(checkoutForm.phoneNumber)) {
//             alert("Please enter a valid 10-digit phone number");
//             return;
//         }

//         if (checkoutForm.pincode.length !== 6 || isNaN(checkoutForm.pincode)) {
//             alert("Please enter a valid 6-digit pincode");
//             return;
//         }

//         if (checkoutForm.paymentMethod === "Online") {
//             setShowPaymentModal(true);
//         } else {
//             // Send order for all cart items
//             cartItems.forEach(item => {
//                 const orderId = generateOrderId();
//                 const size = item.selectedSize || item.size?.[0] || "Standard";
//                 const total = item.currentPrice * item.quantity;
//                 const image = product.images?.[0] || "";
//                 const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;
                
//                 const msg = `🧾 *NEW ORDER RECEIVED*
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${item.brand}
// Artist: ${item.artist}
// Price: ${formatPrice(item.currentPrice)}
// Size: ${size}
// Quantity: ${item.quantity}
// Subtotal: ${formatPrice(total)}
// Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}

// ━━━━━━━━━━━━━━━━━━━━━
// 🖼️ Product Image:
// ${image}

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order.`;

//                 window.open(
//                     `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//                     "_blank"
//                 );
//             });
            
//             setCartPanelOpen(false);
//             setCartItems([]);
//             resetCheckoutForm();
//         }
//     };

//     const resetCheckoutForm = () => {
//         setCheckoutForm({
//             fullName: "",
//             phoneNumber: "",
//             addressLine1: "",
//             addressLine2: "",
//             city: "",
//             pincode: "",
//             state: "Bihar",
//             paymentMethod: "COD",
//         });
//     };

//     const confirmPayment = () => {
//         alert("✅ Payment Successful!");
//         // Send order for all cart items
//         cartItems.forEach(item => {
//             const orderId = generateOrderId();
//             const size = item.selectedSize || item.size?.[0] || "Standard";
//             const total = item.currentPrice * item.quantity;
            
//             const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;
            
//             const msg = `🧾 *NEW ORDER RECEIVED* (PAID ONLINE)
// ━━━━━━━━━━━━━━━━━━━━━
// 📋 *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━━━━━━━━

// 👤 *CUSTOMER DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Name: ${checkoutForm.fullName}
// Phone: ${checkoutForm.phoneNumber}
// Address: ${address}

// ━━━━━━━━━━━━━━━━━━━━━
// 🛍️ *PRODUCT DETAILS*
// ━━━━━━━━━━━━━━━━━━━━━
// Product: ${item.brand}
// Artist: ${item.artist}
// Price: ${formatPrice(item.currentPrice)}
// Size: ${size}
// Quantity: ${item.quantity}
// Subtotal: ${formatPrice(total)}
// Payment: Online Payment

// ━━━━━━━━━━━━━━━━━━━━━
// Please confirm the order.`;

//             window.open(
//                 `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//                 "_blank"
//             );
//         });
        
//         setShowPaymentModal(false);
//         setCartPanelOpen(false);
//         setCartItems([]);
//         resetCheckoutForm();
//     };

//     const updateCartItemQuantity = (itemId, size, newQuantity) => {
//         if (newQuantity < 1) {
//             removeCartItem(itemId, size);
//             return;
//         }
//         setCartItems(cartItems.map(item =>
//             item.id === itemId && item.selectedSize === size
//                 ? { ...item, quantity: newQuantity, totalPrice: item.currentPrice * newQuantity }
//                 : item
//         ));
//     };

//     const removeCartItem = (itemId, size) => {
//         setCartItems(cartItems.filter(item => !(item.id === itemId && item.selectedSize === size)));
//     };

//     const getCartTotal = () => {
//         return cartItems.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
//     };

//     const toggleWishlist = (productId) => {
//         setWishlist(prev =>
//             prev.includes(productId)
//                 ? prev.filter(id => id !== productId)
//                 : [...prev, productId]
//         );
//     };

//     const toggleSection = (section) => {
//         setExpandedSections(prev => ({
//             ...prev,
//             [section]: !prev[section]
//         }));
//     };

//     const handleShareProduct = () => {
//         const productUrl = `${window.location.origin}/product/${product.id}`;
//         const shareText = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts\n\n💰 Price: ${formatPrice(product.currentPrice)}\n🎨 Artist: ${product.artist}\n\n🔗 ${productUrl}`;

//         if (navigator.share) {
//             navigator.share({
//                 title: product.brand,
//                 text: shareText,
//                 url: productUrl,
//             });
//         } else {
//             navigator.clipboard.writeText(productUrl);
//             alert('✅ Link copied to clipboard!');
//         }
//     };

//     const renderStars = (rating) => {
//         const stars = [];
//         const fullStars = Math.floor(rating);
//         const hasHalfStar = rating % 1 !== 0;

//         for (let i = 0; i < fullStars; i++) {
//             stars.push(<FaStar key={`star-${i}`} className="pdp-star-filled" />);
//         }
//         if (hasHalfStar) {
//             stars.push(<FaStarHalfAlt key="half-star" className="pdp-star-filled" />);
//         }
//         while (stars.length < 5) {
//             stars.push(<FaRegStar key={`star-empty-${stars.length}`} className="pdp-star-empty" />);
//         }
//         return stars;
//     };

//     const similarProducts = getSimilarProducts();

//     if (loading) {
//         return (
//             <div className="pdp-loading-container">
//                 <div className="pdp-loader"></div>
//                 <p className="pdp-loading-text">Loading exquisite handcrafted details...</p>
//             </div>
//         );
//     }

//     if (error || !product) {
//         return (
//             <div className="pdp-error-container">
//                 <div className="pdp-error-content">
//                     <h3 className="pdp-error-title">Oops! Something went wrong</h3>
//                     <p className="pdp-error-message">{error || 'Product not found'}</p>
//                     <button className="pdp-error-button" onClick={() => navigate('/what-we-offer-bihar')}>
//                         Back to Products
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="pdp-wrapper">
//             {/* Header */}
//             <header className="pdp-header">
//                 <div className="pdp-container">
//                     <div className="pdp-header-content">
//                         <button
//                             className="pdp-back-button"
//                             onClick={() => navigate('/what-we-offer-bihar')}
//                             aria-label="Go back"
//                         >
//                             <FiArrowLeft />
//                         </button>

//                         <div className="pdp-logo">
//                             <h1>Handicrafts Items</h1>
//                         </div>

//                         <div className="pdp-header-actions">
//                             <button
//                                 className="pdp-icon-button"
//                                 onClick={() => setCartPanelOpen(true)}
//                                 aria-label="Cart"
//                             >
//                                 <FiShoppingCart />
//                                 {cartItems.length > 0 && <span className="pdp-badge">{cartItems.length}</span>}
//                             </button>
//                             <button
//                                 className="pdp-icon-button"
//                                 onClick={() => alert(`${wishlist.length} items in wishlist`)}
//                                 aria-label="Wishlist"
//                             >
//                                 <FiHeart />
//                                 {wishlist.length > 0 && <span className="pdp-badge">{wishlist.length}</span>}
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content */}
//             <main className="pdp-main">
//                 <div className="pdp-container">
//                     <div className="pdp-grid">
//                         {/* Left Column - Gallery */}
//                         <div className="pdp-gallery-column">
//                             <div className="pdp-gallery-sticky">
//                                 <div className="pdp-main-image-wrapper">
//                                     <img
//                                         src={product.images[activeImage]}
//                                         alt={product.brand}
//                                         className="pdp-main-image"
//                                         onError={(e) => {
//                                             e.target.src = 'https://via.placeholder.com/600x700?text=Image+Not+Available';
//                                         }}
//                                     />
//                                     {product.discount && (
//                                         <div className="pdp-discount-badge">
//                                             -{product.discount}% OFF
//                                         </div>
//                                     )}
//                                     {product.inStock && (
//                                         <div className="pdp-stock-badge">
//                                             <MdVerified /> In Stock
//                                         </div>
//                                     )}
//                                 </div>

//                                 {product.images.length > 1 && (
//                                     <div className="pdp-thumbnail-strip">
//                                         {product.images.map((img, index) => (
//                                             <button
//                                                 key={index}
//                                                 className={`pdp-thumbnail-button ${activeImage === index ? 'pdp-thumbnail-active' : ''}`}
//                                                 onClick={() => setActiveImage(index)}
//                                             >
//                                                 <img src={img} alt={`Thumbnail ${index + 1}`} />
//                                             </button>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Right Column - Details */}
//                         <div className="pdp-details-column">
//                             <nav className="pdp-breadcrumb">
//                                 <span onClick={() => navigate('/')}>Home</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span onClick={() => navigate('/what-we-offer-bihar')}>Products</span>
//                                 <span className="pdp-breadcrumb-separator">/</span>
//                                 <span className="pdp-breadcrumb-current">{product.category}</span>
//                             </nav>

//                             <h1 className="pdp-product-title">{product.brand}</h1>
//                             <div className="pdp-artist-info">
//                                 <span className="pdp-artist-label">Created by</span>
//                                 <span className="pdp-artist-name">{product.artist}</span>
//                             </div>

//                             <div className="pdp-meta-info">
//                                 <div className="pdp-rating-container">
//                                     <div className="pdp-stars">{renderStars(product.rating)}</div>
//                                     <span className="pdp-rating-score">{product.rating}</span>
//                                     <span className="pdp-review-count">({product.reviews} reviews)</span>
//                                 </div>
//                             </div>

//                             {/* Accordion Sections */}
//                             <div className="pdp-accordion-container">
//                                 <div className="pdp-accordion-item">
//                                     <button className="pdp-accordion-header" onClick={() => toggleSection('description')}>
//                                         <span className="pdp-accordion-title">Description</span>
//                                         {expandedSections.description ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.description && (
//                                         <div className="pdp-accordion-content">
//                                             <p className="pdp-description-text">{product.description}</p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="pdp-accordion-item">
//                                     <button className="pdp-accordion-header" onClick={() => toggleSection('details')}>
//                                         <span className="pdp-accordion-title">Product Details</span>
//                                         {expandedSections.details ? <FiChevronUp /> : <FiChevronDown />}
//                                     </button>
//                                     {expandedSections.details && (
//                                         <div className="pdp-accordion-content">
//                                             <table className="pdp-details-table">
//                                                 <tbody>
//                                                     <tr><td className="pdp-details-label">Artist</td><td className="pdp-details-value">{product.artist}</td></tr>
//                                                     <tr><td className="pdp-details-label">Category</td><td className="pdp-details-value">{product.category}</td></tr>
//                                                     <tr><td className="pdp-details-label">Subcategory</td><td className="pdp-details-value">{product.subcategory}</td></tr>
//                                                     <tr><td className="pdp-details-label">Available Sizes</td><td className="pdp-details-value">{product.size.join(', ')}</td></tr>
//                                                     <tr><td className="pdp-details-label">Material</td><td className="pdp-details-value">{product.material}</td></tr>
//                                                     <tr><td className="pdp-details-label">Care Instructions</td><td className="pdp-details-value">{product.careInstructions}</td></tr>
//                                                     <tr><td className="pdp-details-label">Delivery Time</td><td className="pdp-details-value">{product.deliveryTime}</td></tr>
//                                                     <tr><td className="pdp-details-label">Return Policy</td><td className="pdp-details-value">{product.returnPolicy}</td></tr>
//                                                 </tbody>
//                                             </table>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="pdp-delivery-grid">
//                                 <div className="pdp-delivery-card">
//                                     <FiTruck className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Free Delivery</strong>
//                                         <span>on orders above ₹999</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiShield className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Secure Payment</strong>
//                                         <span>100% protection</span>
//                                     </div>
//                                 </div>
//                                 <div className="pdp-delivery-card">
//                                     <FiRefreshCw className="pdp-delivery-icon" />
//                                     <div className="pdp-delivery-text">
//                                         <strong>Easy Returns</strong>
//                                         <span>7 days policy</span>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="pdp-price-container">
//                                 <div className="pdp-price-wrapper">
//                                     <span className="pdp-current-price">{formatPrice(product.currentPrice)}</span>
//                                     {product.originalPrice && (
//                                         <span className="pdp-original-price">{formatPrice(product.originalPrice)}</span>
//                                     )}
//                                 </div>
//                             </div>

//                             {product.size && product.size.length > 0 && (
//                                 <div className="pdp-size-section">
//                                     <div className="pdp-size-header">
//                                         <h4 className="pdp-size-title">Select Size</h4>
//                                     </div>
//                                     <div className="pdp-size-options">
//                                         {product.size.map((size) => (
//                                             <button
//                                                 key={size}
//                                                 className={`pdp-size-option ${selectedSize === size ? 'pdp-size-selected' : ''}`}
//                                                 onClick={() => setSelectedSize(size)}
//                                             >
//                                                 {size}
//                                             </button>
//                                         ))}
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="pdp-action-group">
//                                 <button className="pdp-add-to-cart-btn" onClick={handleAddToCart}>
//                                     <FiShoppingCart />
//                                     Add to Cart
//                                 </button>
                                
//                                 <button className="pdp-buy-button" onClick={handleBuyNow}>
//                                     <BsCart />
//                                     Buy Now
//                                 </button>

//                                 <div className="pdp-quantity-controls">
//                                     <button className="pdp-quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
//                                         <FiMinus />
//                                     </button>
//                                     <span className="pdp-quantity-value">{quantity}</span>
//                                     <button className="pdp-quantity-button" onClick={() => setQuantity(quantity + 1)}>
//                                         <FiPlus />
//                                     </button>
//                                 </div>

//                                 <button className={`pdp-wishlist-button ${wishlist.includes(product.id) ? 'pdp-wishlist-active' : ''}`} onClick={() => toggleWishlist(product.id)}>
//                                     <FiHeart />
//                                 </button>

//                                 <button className="pdp-share-button" onClick={handleShareProduct}>
//                                     <FiShare2 />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {similarProducts.length > 0 && (
//                         <section className="pdp-similar-section">
//                             <h2 className="pdp-section-title">You might also like</h2>
//                             <div className="pdp-similar-grid">
//                                 {similarProducts.map((item) => (
//                                     <div key={item.id} className="pdp-similar-card" onClick={() => navigate(`/product/${item.id}`)}>
//                                         <div className="pdp-similar-image-wrapper">
//                                             <img src={item.images[0]} alt={item.brand} className="pdp-similar-image" />
//                                             {item.discount && <span className="pdp-similar-discount">-{item.discount}%</span>}
//                                         </div>
//                                         <div className="pdp-similar-content">
//                                             <h3 className="pdp-similar-title">{item.brand}</h3>
//                                             <p className="pdp-similar-artist">{item.artist}</p>
//                                             <div className="pdp-similar-price">
//                                                 <span className="pdp-similar-current">{formatPrice(item.currentPrice)}</span>
//                                                 {item.originalPrice && <span className="pdp-similar-original">{formatPrice(item.originalPrice)}</span>}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//                 </div>
//             </main>

//             {/* Right Side Cart Panel - FULLY RESPONSIVE WITH MOBILE FIX */}
//             <div className={`pdp-cart-panel ${cartPanelOpen ? 'pdp-cart-panel-open' : ''}`}>
//                 <div className="pdp-cart-panel-header">
//                     <h3>
//                         <FiShoppingCart />
//                         Your Cart ({cartItems.length} items)
//                     </h3>
//                     <button className="pdp-cart-close" onClick={() => setCartPanelOpen(false)}>
//                         <FiX />
//                     </button>
//                 </div>

//                 <div className="pdp-cart-panel-content">
//                     {cartItems.length === 0 ? (
//                         <div className="pdp-empty-cart">
//                             <FiShoppingCart />
//                             <p>Your cart is empty</p>
//                             <button onClick={() => setCartPanelOpen(false)}>Continue Shopping</button>
//                         </div>
//                     ) : (
//                         <>
//                             <div className="pdp-cart-items">
//                                 {cartItems.map((item, index) => (
//                                     <div key={index} className="pdp-cart-item">
//                                         <img src={item.images[0]} alt={item.brand} className="pdp-cart-item-image" />
//                                         <div className="pdp-cart-item-details">
//                                             <h4>{item.brand.length > 40 ? item.brand.substring(0, 40) + "..." : item.brand}</h4>
//                                             <p className="pdp-cart-item-artist">{item.artist}</p>
//                                             <p className="pdp-cart-item-size">Size: {item.selectedSize}</p>
//                                             <div className="pdp-cart-item-price">
//                                                 <span className="pdp-cart-item-current">{formatPrice(item.currentPrice)}</span>
//                                             </div>
//                                             <div className="pdp-cart-item-quantity">
//                                                 <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity - 1)}>
//                                                     <FiMinus />
//                                                 </button>
//                                                 <span>{item.quantity}</span>
//                                                 <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity + 1)}>
//                                                     <FiPlus />
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <button className="pdp-cart-item-remove" onClick={() => removeCartItem(item.id, item.selectedSize)}>
//                                             <FiX />
//                                         </button>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="pdp-cart-summary">
//                                 <div className="pdp-cart-total">
//                                     <span>Subtotal</span>
//                                     <span>{formatPrice(getCartTotal())}</span>
//                                 </div>
//                                 <div className="pdp-cart-total">
//                                     <span>Shipping</span>
//                                     <span>Free</span>
//                                 </div>
//                                 <div className="pdp-cart-grand-total">
//                                     <span>Total</span>
//                                     <span>{formatPrice(getCartTotal())}</span>
//                                 </div>
//                             </div>

//                             {/* Checkout Form in Cart Panel */}
//                             <form onSubmit={handleCheckoutSubmit} className="pdp-cart-checkout-form">
//                                 <h4>Delivery Details</h4>
                                
//                                 <div className="pdp-form-group">
//                                     <FiUser className="pdp-form-icon" />
//                                     <input
//                                         type="text"
//                                         placeholder="Full Name *"
//                                         value={checkoutForm.fullName}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiPhone className="pdp-form-icon" />
//                                     <input
//                                         type="tel"
//                                         placeholder="Phone Number *"
//                                         value={checkoutForm.phoneNumber}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, phoneNumber: e.target.value })}
//                                         maxLength="10"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiHome className="pdp-form-icon" />
//                                     <input
//                                         type="text"
//                                         placeholder="Address Line 1 *"
//                                         value={checkoutForm.addressLine1}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine1: e.target.value })}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <input
//                                         type="text"
//                                         placeholder="Address Line 2 (Optional)"
//                                         value={checkoutForm.addressLine2}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine2: e.target.value })}
//                                     />
//                                 </div>

//                                 <div className="pdp-form-row-cart">
//                                     <input
//                                         type="text"
//                                         placeholder="City *"
//                                         value={checkoutForm.city}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
//                                         required
//                                     />
//                                     <input
//                                         type="text"
//                                         placeholder="Pincode *"
//                                         value={checkoutForm.pincode}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
//                                         maxLength="6"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <FiMapPin className="pdp-form-icon" />
//                                     <select
//     value={checkoutForm.state}
//     onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
// >
//     {statesList.map((state) => (
//         <option key={state} value={state}>
//             {state}
//         </option>
//     ))}
// </select>
//                                 </div>

//                                 <div className="pdp-form-group">
//                                     <select
//                                         value={checkoutForm.paymentMethod}
//                                         onChange={(e) => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
//                                     >
//                                         <option value="COD">Cash on Delivery</option>
//                                         <option value="Online">Online Payment (UPI/Card)</option>
//                                     </select>
//                                 </div>

//                                 <button type="submit" className="pdp-checkout-button">
//                                     <FiSend />
//                                     Place Order • {formatPrice(getCartTotal())}
//                                 </button>
//                             </form>
//                         </>
//                     )}
//                 </div>
//             </div>

//             {/* Overlay */}
//             {cartPanelOpen && <div className="pdp-cart-overlay" onClick={() => setCartPanelOpen(false)}></div>}

//             {/* Payment Modal */}
//             {showPaymentModal && (
//                 <div className="pdp-modal-overlay" onClick={() => setShowPaymentModal(false)}>
//                     <div className="pdp-modal-container pdp-payment-modal" onClick={(e) => e.stopPropagation()}>
//                         <button className="pdp-modal-close" onClick={() => setShowPaymentModal(false)}>×</button>
//                         <div className="pdp-payment-header">
//                             <h3 className="pdp-payment-title">Scan to Pay</h3>
//                             <p className="pdp-payment-subtitle">Complete your payment via UPI</p>
//                         </div>
//                         <div className="pdp-qr-wrapper">
//                             <img src={qrImage} alt="Payment QR Code" className="pdp-qr-image" />
//                         </div>
//                         <div className="pdp-payment-details">
//                             <p className="pdp-payment-amount">
//                                 <span className="pdp-amount-label">Amount to pay:</span>
//                                 <span className="pdp-amount-value">{formatPrice(getCartTotal())}</span>
//                             </p>
//                             <p className="pdp-payment-instruction">Scan this QR code with any UPI app</p>
//                         </div>
//                         <button className="pdp-payment-confirm" onClick={confirmPayment}>
//                             <FiCheck /> I've Completed the Payment
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }



import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetailPage.css";
import {
    FiHeart,
    FiShoppingCart,
    FiShare2,
    FiArrowLeft,
    FiChevronDown,
    FiChevronUp,
    FiCheck,
    FiTruck,
    FiShield,
    FiRefreshCw,
    FiPlus,
    FiMinus,
    FiX,
    FiMapPin,
    FiPhone,
    FiUser,
    FiHome,
    FiSend
} from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import qrImage from "./vendorimage/qr1.jpeg";

const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// ─── All Indian States & UTs ───────────────────────────────────────────────
const ALL_INDIAN_STATES = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
];

// ─── Metro States (states that contain major metro cities) ─────────────────
// Orders going to these states will have ₹300 added as metro delivery charge
const METRO_STATES = [
    "Maharashtra",   // Mumbai
    "Delhi",         // New Delhi
    "Karnataka",     // Bengaluru
    "Tamil Nadu",    // Chennai
    "West Bengal",   // Kolkata
    "Telangana",     // Hyderabad
    "Gujarat",       // Ahmedabad
    "Punjab",        // Chandigarh / Ludhiana
    "Chandigarh",
];

const METRO_SURCHARGE = 300;

const isMetroState = (state) => METRO_STATES.includes(state);

export default function ProductDetailPage() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [cartPanelOpen, setCartPanelOpen] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [expandedSections, setExpandedSections] = useState({
        description: true,
        story: false,
        details: false
    });
    const [quantity, setQuantity] = useState(1);
    const [checkoutForm, setCheckoutForm] = useState({
        fullName: "",
        phoneNumber: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        pincode: "",
        state: "Bihar",
        paymentMethod: "COD",
    });
    const [cartItems, setCartItems] = useState([]);

    // ─── Fetch all products ──────────────────────────────────────────────────
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error('Failed to fetch products');
                const data = await response.json();

                const transformedProducts = data.map(item => ({
                    id: item.id,
                    sku: item.sku,
                    name: item.name,
                    brand: extractBrand(item.name),
                    artist: extractArtist(item.description) || "Traditional Artist",
                    currentPrice: item.sell_price,
                    originalPrice: item.original_price,
                    discount: item.original_price
                        ? Math.round(((item.original_price - item.sell_price) / item.original_price) * 100)
                        : null,
                    images: item.images?.map(img => img.url) || [],
                    category: item.category?.name || "Others",
                    subcategory: item.sub_category?.name || "Uncategorized",
                    rating: 4.5,
                    reviews: Math.floor(Math.random() * 50) + 10,
                    size: item.size || ["Standard"],
                    description: item.description || "No description available",
                    story: extractStory(item.description),
                    inStock: true,
                    material: extractMaterial(item.description) || "Traditional Handicraft",
                    origin: "India",
                    deliveryTime: "5-7 business days",
                    returnPolicy: "7 days return",
                    careInstructions: extractCareInstructions(item.description)
                }));

                setAllProducts(transformedProducts);

                const currentProduct = transformedProducts.find(p => p.id === parseInt(productId));
                if (currentProduct) {
                    setProduct(currentProduct);
                    setSelectedSize(currentProduct.size?.[0] || "");
                } else {
                    setError('Product not found');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError('Failed to load product. Please try again later.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, [productId]);

    // ─── Helper functions ────────────────────────────────────────────────────
    const extractBrand = (name) => {
        if (!name) return "Handcrafted Item";
        const brandName = name.split('|')[0].trim();
        return brandName.length > 60 ? brandName.substring(0, 60) + "..." : brandName;
    };

    const extractArtist = (description) => {
        if (!description) return "Traditional Artist";
        const artistMatch =
            description.match(/artist\s+([^.!?\n]+)/i) ||
            description.match(/by\s+([^.!?\n]+)/i);
        return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
    };

    const extractStory = (description) => {
        if (!description) return [];
        const sentences = description.split(/[.!?]+/).filter(s => s.trim().length > 30);
        return sentences.slice(0, 3).map(s => s.trim());
    };

    const extractMaterial = (description) => {
        if (!description) return "Cotton Blend";
        if (description.toLowerCase().includes('cotton')) return "Cotton";
        if (description.toLowerCase().includes('silk')) return "Silk";
        return "Traditional Handicraft";
    };

    const extractCareInstructions = (description) => {
        if (!description) return "Gentle hand wash recommended";
        const careMatch = description.match(/care\s*:?\s*([^.!?\n]+)/i);
        return careMatch ? careMatch[1].trim() : "Gentle hand wash recommended";
    };

    const getSimilarProducts = () => {
        if (!product || !allProducts.length) return [];
        return allProducts
            .filter(p =>
                p.id !== product.id &&
                (p.category === product.category || p.subcategory === product.subcategory)
            )
            .slice(0, 4);
    };

    const formatPrice = (price) => `₹${price?.toLocaleString() || 0}`;

    // ─── Pricing with metro surcharge ────────────────────────────────────────
    const getShippingCharge = () =>
        isMetroState(checkoutForm.state) ? METRO_SURCHARGE : 0;

    const calculateTotal = () =>
        (product?.currentPrice || 0) * quantity;

    const getCartTotal = () =>
        cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

    // Grand total = cart subtotal + metro surcharge (if applicable)
    const getGrandTotal = () => getCartTotal() + getShippingCharge();

    const generateOrderId = () =>
        "ORD" + Date.now().toString().slice(-8) + Math.floor(Math.random() * 1000);

    // ─── WhatsApp message builder ────────────────────────────────────────────
    const buildOrderMessage = (item, orderId, address, isPaid = false) => {
        const size = item.selectedSize || item.size?.[0] || "Standard";
        const total = item.currentPrice * item.quantity;
        const image = item.images?.[0] || "";
        const shipping = getShippingCharge();
        const shippingLine = shipping > 0
            ? `Metro Delivery Charge: ₹${shipping}\n`
            : "Shipping: Free\n";

        return `🧾 *NEW ORDER RECEIVED*${isPaid ? " (PAID ONLINE)" : ""}
━━━━━━━━━━━━━━━━━━━━━
📋 *Order ID:* ${orderId}
━━━━━━━━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Name: ${checkoutForm.fullName}
Phone: ${checkoutForm.phoneNumber}
Address: ${address}

━━━━━━━━━━━━━━━━━━━━━
🛍️ *PRODUCT DETAILS*
━━━━━━━━━━━━━━━━━━━━━
Product: ${item.brand}
Artist: ${item.artist}
Price: ${formatPrice(item.currentPrice)}
Size: ${size}
Quantity: ${item.quantity}
Subtotal: ${formatPrice(total)}
${shippingLine}Grand Total: ${formatPrice(total + shipping)}
Payment: ${checkoutForm.paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}

━━━━━━━━━━━━━━━━━━━━━
🖼️ Product Image:
${image}

━━━━━━━━━━━━━━━━━━━━━
Please confirm the order.`;
    };

    const openWhatsApp = (item, isPaid = false) => {
        const orderId = generateOrderId();
        const address = `${checkoutForm.addressLine1}, ${checkoutForm.addressLine2 ? checkoutForm.addressLine2 + ', ' : ''}${checkoutForm.city}, ${checkoutForm.state} - ${checkoutForm.pincode}`;
        const msg = buildOrderMessage(item, orderId, address, isPaid);
        window.open(`https://wa.me/919288404060?text=${encodeURIComponent(msg)}`, "_blank");
    };

    // ─── Cart actions ────────────────────────────────────────────────────────
    const handleAddToCart = () => {
        if (!selectedSize && product?.size?.length > 1) {
            alert("Please select a size");
            return;
        }
        const existingItem = cartItems.find(
            item => item.id === product.id && item.selectedSize === selectedSize
        );
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id && item.selectedSize === selectedSize
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
            ));
        } else {
            setCartItems([...cartItems, {
                ...product,
                selectedSize,
                quantity,
                totalPrice: product.currentPrice * quantity
            }]);
        }
        setCartPanelOpen(true);
    };

    const handleBuyNow = () => {
        if (!selectedSize && product?.size?.length > 1) {
            alert("Please select a size");
            return;
        }
        setCartItems([{
            ...product,
            selectedSize,
            quantity,
            totalPrice: product.currentPrice * quantity
        }]);
        setCartPanelOpen(true);
    };

    const handleCheckoutSubmit = (e) => {
        e.preventDefault();

        if (!checkoutForm.fullName || !checkoutForm.phoneNumber ||
            !checkoutForm.addressLine1 || !checkoutForm.city || !checkoutForm.pincode) {
            alert("Please fill in all required fields");
            return;
        }
        if (checkoutForm.phoneNumber.length !== 10 || isNaN(checkoutForm.phoneNumber)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }
        if (checkoutForm.pincode.length !== 6 || isNaN(checkoutForm.pincode)) {
            alert("Please enter a valid 6-digit pincode");
            return;
        }

        if (checkoutForm.paymentMethod === "Online") {
            setShowPaymentModal(true);
        } else {
            cartItems.forEach(item => openWhatsApp(item, false));
            setCartPanelOpen(false);
            setCartItems([]);
            resetCheckoutForm();
        }
    };

    const resetCheckoutForm = () => {
        setCheckoutForm({
            fullName: "",
            phoneNumber: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            pincode: "",
            state: "Bihar",
            paymentMethod: "COD",
        });
    };

    const confirmPayment = () => {
        alert("✅ Payment Successful!");
        cartItems.forEach(item => openWhatsApp(item, true));
        setShowPaymentModal(false);
        setCartPanelOpen(false);
        setCartItems([]);
        resetCheckoutForm();
    };

    const updateCartItemQuantity = (itemId, size, newQuantity) => {
        if (newQuantity < 1) { removeCartItem(itemId, size); return; }
        setCartItems(cartItems.map(item =>
            item.id === itemId && item.selectedSize === size
                ? { ...item, quantity: newQuantity, totalPrice: item.currentPrice * newQuantity }
                : item
        ));
    };

    const removeCartItem = (itemId, size) => {
        setCartItems(cartItems.filter(item => !(item.id === itemId && item.selectedSize === size)));
    };

    const toggleWishlist = (productId) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const toggleSection = (section) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleShareProduct = () => {
        const productUrl = `${window.location.origin}/product/${product.id}`;
        const shareText = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts\n\n💰 Price: ${formatPrice(product.currentPrice)}\n🎨 Artist: ${product.artist}\n\n🔗 ${productUrl}`;
        if (navigator.share) {
            navigator.share({ title: product.brand, text: shareText, url: productUrl });
        } else {
            navigator.clipboard.writeText(productUrl);
            alert('✅ Link copied to clipboard!');
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`star-${i}`} className="pdp-star-filled" />);
        if (hasHalfStar) stars.push(<FaStarHalfAlt key="half-star" className="pdp-star-filled" />);
        while (stars.length < 5) stars.push(<FaRegStar key={`star-empty-${stars.length}`} className="pdp-star-empty" />);
        return stars;
    };

    const similarProducts = getSimilarProducts();
    const metroActive = isMetroState(checkoutForm.state);

    if (loading) {
        return (
            <div className="pdp-loading-container">
                <div className="pdp-loader"></div>
                <p className="pdp-loading-text">Loading exquisite handcrafted details...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="pdp-error-container">
                <div className="pdp-error-content">
                    <h3 className="pdp-error-title">Oops! Something went wrong</h3>
                    <p className="pdp-error-message">{error || 'Product not found'}</p>
                    <button className="pdp-error-button" onClick={() => navigate('/what-we-offer-bihar')}>
                        Back to Products
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pdp-wrapper">
            {/* Header */}
            <header className="pdp-header">
                <div className="pdp-container">
                    <div className="pdp-header-content">
                        <button className="pdp-back-button" onClick={() => navigate('/what-we-offer-bihar')} aria-label="Go back">
                            <FiArrowLeft />
                        </button>
                        <div className="pdp-logo"><h1>Handicrafts Items</h1></div>
                        <div className="pdp-header-actions">
                            <button className="pdp-icon-button" onClick={() => setCartPanelOpen(true)} aria-label="Cart">
                                <FiShoppingCart />
                                {cartItems.length > 0 && <span className="pdp-badge">{cartItems.length}</span>}
                            </button>
                            <button className="pdp-icon-button" onClick={() => alert(`${wishlist.length} items in wishlist`)} aria-label="Wishlist">
                                <FiHeart />
                                {wishlist.length > 0 && <span className="pdp-badge">{wishlist.length}</span>}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pdp-main">
                <div className="pdp-container">
                    <div className="pdp-grid">
                        {/* Left Column - Gallery */}
                        <div className="pdp-gallery-column">
                            <div className="pdp-gallery-sticky">
                                <div className="pdp-main-image-wrapper">
                                    <img
                                        src={product.images[activeImage]}
                                        alt={product.brand}
                                        className="pdp-main-image"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/600x700?text=Image+Not+Available'; }}
                                    />
                                    {product.discount && <div className="pdp-discount-badge">-{product.discount}% OFF</div>}
                                    {product.inStock && <div className="pdp-stock-badge"><MdVerified /> In Stock</div>}
                                </div>
                                {product.images.length > 1 && (
                                    <div className="pdp-thumbnail-strip">
                                        {product.images.map((img, index) => (
                                            <button
                                                key={index}
                                                className={`pdp-thumbnail-button ${activeImage === index ? 'pdp-thumbnail-active' : ''}`}
                                                onClick={() => setActiveImage(index)}
                                            >
                                                <img src={img} alt={`Thumbnail ${index + 1}`} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Details */}
                        <div className="pdp-details-column">
                            <nav className="pdp-breadcrumb">
                                <span onClick={() => navigate('/')}>Home</span>
                                <span className="pdp-breadcrumb-separator">/</span>
                                <span onClick={() => navigate('/what-we-offer-bihar')}>Products</span>
                                <span className="pdp-breadcrumb-separator">/</span>
                                <span className="pdp-breadcrumb-current">{product.category}</span>
                            </nav>

                            <h1 className="pdp-product-title">{product.brand}</h1>
                            <div className="pdp-artist-info">
                                <span className="pdp-artist-label">Created by</span>
                                <span className="pdp-artist-name">{product.artist}</span>
                            </div>

                            <div className="pdp-meta-info">
                                <div className="pdp-rating-container">
                                    <div className="pdp-stars">{renderStars(product.rating)}</div>
                                    <span className="pdp-rating-score">{product.rating}</span>
                                    <span className="pdp-review-count">({product.reviews} reviews)</span>
                                </div>
                            </div>

                            {/* Accordion */}
                            <div className="pdp-accordion-container">
                                <div className="pdp-accordion-item">
                                    <button className="pdp-accordion-header" onClick={() => toggleSection('description')}>
                                        <span className="pdp-accordion-title">Description</span>
                                        {expandedSections.description ? <FiChevronUp /> : <FiChevronDown />}
                                    </button>
                                    {expandedSections.description && (
                                        <div className="pdp-accordion-content">
                                            <p className="pdp-description-text">{product.description}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="pdp-accordion-item">
                                    <button className="pdp-accordion-header" onClick={() => toggleSection('details')}>
                                        <span className="pdp-accordion-title">Product Details</span>
                                        {expandedSections.details ? <FiChevronUp /> : <FiChevronDown />}
                                    </button>
                                    {expandedSections.details && (
                                        <div className="pdp-accordion-content">
                                            <table className="pdp-details-table">
                                                <tbody>
                                                    <tr><td className="pdp-details-label">Artist</td><td className="pdp-details-value">{product.artist}</td></tr>
                                                    <tr><td className="pdp-details-label">Category</td><td className="pdp-details-value">{product.category}</td></tr>
                                                    <tr><td className="pdp-details-label">Subcategory</td><td className="pdp-details-value">{product.subcategory}</td></tr>
                                                    <tr><td className="pdp-details-label">Available Sizes</td><td className="pdp-details-value">{product.size.join(', ')}</td></tr>
                                                    <tr><td className="pdp-details-label">Material</td><td className="pdp-details-value">{product.material}</td></tr>
                                                    <tr><td className="pdp-details-label">Care Instructions</td><td className="pdp-details-value">{product.careInstructions}</td></tr>
                                                    <tr><td className="pdp-details-label">Delivery Time</td><td className="pdp-details-value">{product.deliveryTime}</td></tr>
                                                    <tr><td className="pdp-details-label">Return Policy</td><td className="pdp-details-value">{product.returnPolicy}</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pdp-delivery-grid">
                                <div className="pdp-delivery-card">
                                    <FiTruck className="pdp-delivery-icon" />
                                    <div className="pdp-delivery-text">
                                        <strong>Free Delivery</strong>
                                        <span>on orders above ₹999</span>
                                    </div>
                                </div>
                                <div className="pdp-delivery-card">
                                    <FiShield className="pdp-delivery-icon" />
                                    <div className="pdp-delivery-text">
                                        <strong>Secure Payment</strong>
                                        <span>100% protection</span>
                                    </div>
                                </div>
                                <div className="pdp-delivery-card">
                                    <FiRefreshCw className="pdp-delivery-icon" />
                                    <div className="pdp-delivery-text">
                                        <strong>Easy Returns</strong>
                                        <span>7 days policy</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pdp-price-container">
                                <div className="pdp-price-wrapper">
                                    <span className="pdp-current-price">{formatPrice(product.currentPrice)}</span>
                                    {product.originalPrice && (
                                        <span className="pdp-original-price">{formatPrice(product.originalPrice)}</span>
                                    )}
                                </div>
                            </div>

                            {product.size && product.size.length > 0 && (
                                <div className="pdp-size-section">
                                    <div className="pdp-size-header">
                                        <h4 className="pdp-size-title">Select Size</h4>
                                    </div>
                                    <div className="pdp-size-options">
                                        {product.size.map((size) => (
                                            <button
                                                key={size}
                                                className={`pdp-size-option ${selectedSize === size ? 'pdp-size-selected' : ''}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pdp-action-group">
                                <button className="pdp-add-to-cart-btn" onClick={handleAddToCart}>
                                    <FiShoppingCart /> Add to Cart
                                </button>
                                <button className="pdp-buy-button" onClick={handleBuyNow}>
                                    <BsCart /> Buy Now
                                </button>
                                <div className="pdp-quantity-controls">
                                    <button className="pdp-quantity-button" onClick={() => setQuantity(Math.max(1, quantity - 1))} disabled={quantity <= 1}>
                                        <FiMinus />
                                    </button>
                                    <span className="pdp-quantity-value">{quantity}</span>
                                    <button className="pdp-quantity-button" onClick={() => setQuantity(quantity + 1)}>
                                        <FiPlus />
                                    </button>
                                </div>
                                <button className={`pdp-wishlist-button ${wishlist.includes(product.id) ? 'pdp-wishlist-active' : ''}`} onClick={() => toggleWishlist(product.id)}>
                                    <FiHeart />
                                </button>
                                <button className="pdp-share-button" onClick={handleShareProduct}>
                                    <FiShare2 />
                                </button>
                            </div>
                        </div>
                    </div>

                    {similarProducts.length > 0 && (
                        <section className="pdp-similar-section">
                            <h2 className="pdp-section-title">You might also like</h2>
                            <div className="pdp-similar-grid">
                                {similarProducts.map((item) => (
                                    <div key={item.id} className="pdp-similar-card" onClick={() => navigate(`/product/${item.id}`)}>
                                        <div className="pdp-similar-image-wrapper">
                                            <img src={item.images[0]} alt={item.brand} className="pdp-similar-image" />
                                            {item.discount && <span className="pdp-similar-discount">-{item.discount}%</span>}
                                        </div>
                                        <div className="pdp-similar-content">
                                            <h3 className="pdp-similar-title">{item.brand}</h3>
                                            <p className="pdp-similar-artist">{item.artist}</p>
                                            <div className="pdp-similar-price">
                                                <span className="pdp-similar-current">{formatPrice(item.currentPrice)}</span>
                                                {item.originalPrice && <span className="pdp-similar-original">{formatPrice(item.originalPrice)}</span>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            {/* ─── Cart Panel ──────────────────────────────────────────────────── */}
            <div className={`pdp-cart-panel ${cartPanelOpen ? 'pdp-cart-panel-open' : ''}`}>
                <div className="pdp-cart-panel-header">
                    <h3><FiShoppingCart /> Your Cart ({cartItems.length} items)</h3>
                    <button className="pdp-cart-close" onClick={() => setCartPanelOpen(false)}><FiX /></button>
                </div>

                <div className="pdp-cart-panel-content">
                    {cartItems.length === 0 ? (
                        <div className="pdp-empty-cart">
                            <FiShoppingCart />
                            <p>Your cart is empty</p>
                            <button onClick={() => setCartPanelOpen(false)}>Continue Shopping</button>
                        </div>
                    ) : (
                        <>
                            <div className="pdp-cart-items">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="pdp-cart-item">
                                        <img src={item.images[0]} alt={item.brand} className="pdp-cart-item-image" />
                                        <div className="pdp-cart-item-details">
                                            <h4>{item.brand.length > 40 ? item.brand.substring(0, 40) + "..." : item.brand}</h4>
                                            <p className="pdp-cart-item-artist">{item.artist}</p>
                                            <p className="pdp-cart-item-size">Size: {item.selectedSize}</p>
                                            <div className="pdp-cart-item-price">
                                                <span className="pdp-cart-item-current">{formatPrice(item.currentPrice)}</span>
                                            </div>
                                            <div className="pdp-cart-item-quantity">
                                                <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity - 1)}><FiMinus /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateCartItemQuantity(item.id, item.selectedSize, item.quantity + 1)}><FiPlus /></button>
                                            </div>
                                        </div>
                                        <button className="pdp-cart-item-remove" onClick={() => removeCartItem(item.id, item.selectedSize)}><FiX /></button>
                                    </div>
                                ))}
                            </div>

                            {/* ─── Price Summary ─── */}
                            <div className="pdp-cart-summary">
                                <div className="pdp-cart-total">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(getCartTotal())}</span>
                                </div>
                                <div className="pdp-cart-total">
                                    <span>
                                        Shipping
                                        {metroActive && (
                                            <span style={{ fontSize: "0.75rem", color: "#e67e22", marginLeft: 4 }}>
                                                (Metro +₹{METRO_SURCHARGE})
                                            </span>
                                        )}
                                    </span>
                                    <span>{metroActive ? formatPrice(METRO_SURCHARGE) : "Free"}</span>
                                </div>
                                <div className="pdp-cart-grand-total">
                                    <span>Total</span>
                                    <span>{formatPrice(getGrandTotal())}</span>
                                </div>
                            </div>

                            {/* ─── Checkout Form ─── */}
                            <form onSubmit={handleCheckoutSubmit} className="pdp-cart-checkout-form">
                                <h4>Delivery Details</h4>

                                <div className="pdp-form-group">
                                    <FiUser className="pdp-form-icon" />
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        value={checkoutForm.fullName}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="pdp-form-group">
                                    <FiPhone className="pdp-form-icon" />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number *"
                                        value={checkoutForm.phoneNumber}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, phoneNumber: e.target.value })}
                                        maxLength="10"
                                        required
                                    />
                                </div>

                                <div className="pdp-form-group">
                                    <FiHome className="pdp-form-icon" />
                                    <input
                                        type="text"
                                        placeholder="Address Line 1 *"
                                        value={checkoutForm.addressLine1}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine1: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="pdp-form-group">
                                    <input
                                        type="text"
                                        placeholder="Address Line 2 (Optional)"
                                        value={checkoutForm.addressLine2}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, addressLine2: e.target.value })}
                                    />
                                </div>

                                <div className="pdp-form-row-cart">
                                    <input
                                        type="text"
                                        placeholder="City *"
                                        value={checkoutForm.city}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Pincode *"
                                        value={checkoutForm.pincode}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                                        maxLength="6"
                                        required
                                    />
                                </div>

                                {/* ─── ALL INDIAN STATES DROPDOWN ─── */}
                                <div className="pdp-form-group">
                                    <FiMapPin className="pdp-form-icon" />
                                    <select
                                        value={checkoutForm.state}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
                                    >
                                        {ALL_INDIAN_STATES.map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Metro surcharge notice */}
                                {metroActive && (
                                    <div style={{
                                        background: "#fff8f0",
                                        border: "1px solid #f0a500",
                                        borderRadius: "8px",
                                        padding: "8px 12px",
                                        fontSize: "0.82rem",
                                        color: "#b45309",
                                        marginBottom: "8px"
                                    }}>
                                        🏙️ Metro city delivery charge of <strong>₹{METRO_SURCHARGE}</strong> has been added for{" "}
                                        <strong>{checkoutForm.state}</strong>.
                                    </div>
                                )}

                                <div className="pdp-form-group">
                                    <select
                                        value={checkoutForm.paymentMethod}
                                        onChange={(e) => setCheckoutForm({ ...checkoutForm, paymentMethod: e.target.value })}
                                    >
                                        <option value="COD">Cash on Delivery</option>
                                        <option value="Online">Online Payment (UPI/Card)</option>
                                    </select>
                                </div>

                                <button type="submit" className="pdp-checkout-button">
                                    <FiSend />
                                    Place Order • {formatPrice(getGrandTotal())}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>

            {/* Overlay */}
            {cartPanelOpen && <div className="pdp-cart-overlay" onClick={() => setCartPanelOpen(false)}></div>}

            {/* Payment Modal */}
            {showPaymentModal && (
                <div className="pdp-modal-overlay" onClick={() => setShowPaymentModal(false)}>
                    <div className="pdp-modal-container pdp-payment-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="pdp-modal-close" onClick={() => setShowPaymentModal(false)}>×</button>
                        <div className="pdp-payment-header">
                            <h3 className="pdp-payment-title">Scan to Pay</h3>
                            <p className="pdp-payment-subtitle">Complete your payment via UPI</p>
                        </div>
                        <div className="pdp-qr-wrapper">
                            <img src={qrImage} alt="Payment QR Code" className="pdp-qr-image" />
                        </div>
                        <div className="pdp-payment-details">
                            <p className="pdp-payment-amount">
                                <span className="pdp-amount-label">Amount to pay:</span>
                                <span className="pdp-amount-value">{formatPrice(getGrandTotal())}</span>
                            </p>
                            <p className="pdp-payment-instruction">Scan this QR code with any UPI app</p>
                        </div>
                        <button className="pdp-payment-confirm" onClick={confirmPayment}>
                            <FiCheck /> I've Completed the Payment
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}