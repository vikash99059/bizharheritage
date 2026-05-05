
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
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // or any arrow icons

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



    useEffect(() => {
    const savedCart = localStorage.getItem('handicraft_cart');
    if (savedCart) {
        try {
            const parsedCart = JSON.parse(savedCart);
            if (Array.isArray(parsedCart) && parsedCart.length > 0) {
                setCartItems(parsedCart);
            }
        } catch (error) {
            console.error('Error loading cart:', error);
        }
    }
}, []);

// Save cart to localStorage whenever it changes
useEffect(() => {
    if (cartItems.length > 0) {
        localStorage.setItem('handicraft_cart', JSON.stringify(cartItems));
    } else {
        localStorage.removeItem('handicraft_cart');
    }
}, [cartItems]);

// Load checkout form from localStorage on mount
useEffect(() => {
    const savedForm = localStorage.getItem('handicraft_checkout_form');
    if (savedForm) {
        try {
            const parsedForm = JSON.parse(savedForm);
            setCheckoutForm(prev => ({ ...prev, ...parsedForm }));
        } catch (error) {
            console.error('Error loading checkout form:', error);
        }
    }
}, []);

// Save checkout form to localStorage whenever it changes
useEffect(() => {
    // Only save if at least one field has value (avoid saving empty form)
    if (checkoutForm.fullName || checkoutForm.phoneNumber || checkoutForm.addressLine1) {
        localStorage.setItem('handicraft_checkout_form', JSON.stringify(checkoutForm));
    }
}, [checkoutForm]);

// Load wishlist from localStorage (optional)
useEffect(() => {
    const savedWishlist = localStorage.getItem('handicraft_wishlist');
    if (savedWishlist) {
        try {
            const parsedWishlist = JSON.parse(savedWishlist);
            if (Array.isArray(parsedWishlist)) {
                setWishlist(parsedWishlist);
            }
        } catch (error) {
            console.error('Error loading wishlist:', error);
        }
    }
}, []);

// Save wishlist to localStorage
useEffect(() => {
    if (wishlist.length > 0) {
        localStorage.setItem('handicraft_wishlist', JSON.stringify(wishlist));
    } else {
        localStorage.removeItem('handicraft_wishlist');
    }
}, [wishlist]);

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
        const shareText = `Check out this *${product.brand}* from Connecting Handicraft Artists Across India\n\n💰 Price: ${formatPrice(product.currentPrice)}\n🎨 Artist: ${product.artist}\n\n🔗 ${productUrl}`;
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



    

const nextImage = () => {
  setActiveImage((prev) => (prev + 1) % product.images.length);
};

const prevImage = () => {
  setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);
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
                                <div className="pdp-main-image-wrapper" style={{ position: 'relative' }}>
                                    <img
                                        src={product.images[activeImage]}
                                        alt={product.brand}
                                        className="pdp-main-image"
                                        onError={(e) => { e.target.src = 'https://via.placeholder.com/600x700?text=Image+Not+Available'; }}
                                    />

                                    {/* Left Arrow Button */}
                                    {product.images.length > 1 && (
                                        <button
                                            className="pdp-image-nav pdp-image-nav-left"
                                            onClick={prevImage}
                                            aria-label="Previous image"
                                        >
                                            <FaChevronLeft />
                                        </button>
                                    )}

                                    {/* Right Arrow Button */}
                                    {product.images.length > 1 && (
                                        <button
                                            className="pdp-image-nav pdp-image-nav-right"
                                            onClick={nextImage}
                                            aria-label="Next image"
                                        >
                                            <FaChevronRight />
                                        </button>
                                    )}

                                    {/* Image Counter (optional) */}
                                    {product.images.length > 1 && (
                                        <div className="pdp-image-counter">
                                            {activeImage + 1} / {product.images.length}
                                        </div>
                                    )}

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
                                <span className="pdp-artist-label">Art by</span>
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