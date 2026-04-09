import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cartpage.css";
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import qrImage from "./vendorimage/qr1.jpeg";

export default function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: ""
  });

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Update cart in localStorage
  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  // Update quantity
  const updateQuantity = (id, size, change) => {
    const newCart = cartItems.map(item => {
      if (item.id === id && item.size === size) {
        const newQty = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    updateCart(newCart);
  };

  // Remove item
  const removeItem = (id, size) => {
    const newCart = cartItems.filter(item => !(item.id === id && item.size === size));
    updateCart(newCart);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal > 999 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  const formatPrice = (price) => {
    return `₹${price?.toLocaleString() || 0}`;
  };

  const generateOrderId = () => {
    return "ORD" + Date.now().toString().slice(-8);
  };

  // Send to WhatsApp
  const sendToWhatsApp = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details");
      return;
    }

    const orderId = generateOrderId();
    
    let message = `🧾 *NEW ORDER*\n`;
    message += `━━━━━━━━━━━━━━\n`;
    message += `Order ID: ${orderId}\n`;
    message += `━━━━━━━━━━━━━━\n\n`;
    
    message += `👤 *CUSTOMER*\n`;
    message += `Name: ${customer.name}\n`;
    message += `Phone: ${customer.phone}\n`;
    message += `Address: ${customer.address}\n\n`;
    
    message += `🛍️ *ITEMS*\n`;
    cartItems.forEach((item, i) => {
      message += `${i+1}. ${item.name.substring(0, 30)}...\n`;
      message += `   Size: ${item.size} | Qty: ${item.quantity}\n`;
      message += `   Price: ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n━━━━━━━━━━━━━━\n`;
    message += `Subtotal: ${formatPrice(subtotal)}\n`;
    if (deliveryCharge > 0) {
      message += `Delivery: ${formatPrice(deliveryCharge)}\n`;
    } else {
      message += `Delivery: FREE\n`;
    }
    message += `*TOTAL: ${formatPrice(total)}*\n`;
    message += `━━━━━━━━━━━━━━\n\n`;
    
    message += `💳 Payment: Online Payment\n`;
    message += `📍 Delivery Location: ${customer.address}\n\n`;
    
    message += `Please confirm the order.`;

    window.open(
      `https://wa.me/919288404060?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    
    // Clear cart after order
    localStorage.removeItem('cart');
    setCartItems([]);
    setShowForm(false);
  };

  const handlePayment = () => {
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all details");
      return;
    }
    setShowPayment(true);
  };

  const confirmPayment = () => {
    alert("✅ Payment Successful!");
    sendToWhatsApp();
    setShowPayment(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <FiShoppingBag size={60} />
        <h3>Your cart is empty</h3>
        <p>Add some items to your cart</p>
        <button className="cart-shop-btn" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* Header */}
      <header className="cart-header">
        <div className="cart-container">
          <div className="cart-header-content">
            <button className="cart-back-btn" onClick={() => navigate(-1)}>
              <FiArrowLeft /> Back
            </button>
            <h2>My Cart ({cartItems.length})</h2>
            <div></div>
          </div>
        </div>
      </header>

      <div className="cart-container">
        <div className="cart-layout">
          {/* Left - Cart Items */}
          <div className="cart-items-section">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="cart-item-image"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/100x100?text=No+Image'}
                />
                
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-artist">{item.artist}</p>
                  <p className="cart-item-size">Size: {item.size}</p>
                  <div className="cart-item-price">
                    <span className="cart-current-price">{formatPrice(item.price)}</span>
                    <span className="cart-item-total">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <div className="cart-quantity">
                    <button 
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, item.size, -1)}
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="cart-qty-btn"
                      onClick={() => updateQuantity(item.id, item.size, 1)}
                    >
                      <FiPlus />
                    </button>
                  </div>
                  
                  <button 
                    className="cart-remove-btn"
                    onClick={() => removeItem(item.id, item.size)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Order Summary */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery</span>
              {deliveryCharge > 0 ? (
                <span>{formatPrice(deliveryCharge)}</span>
              ) : (
                <span className="free-delivery">FREE</span>
              )}
            </div>

            {deliveryCharge > 0 && (
              <div className="delivery-note">
                Add items worth ₹{999 - subtotal} more for FREE delivery
              </div>
            )}

            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>

            <button 
              className="checkout-btn"
              onClick={() => setShowForm(true)}
            >
              Proceed to Checkout
            </button>

            <p className="secure-note">🔒 Secure Checkout</p>
          </div>
        </div>
      </div>

      {/* Customer Form Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Delivery Details</h3>
            
            <div className="modal-form">
              <input
                type="text"
                placeholder="Full Name *"
                value={customer.name}
                onChange={(e) => setCustomer({...customer, name: e.target.value})}
              />
              
              <input
                type="tel"
                placeholder="Phone Number *"
                value={customer.phone}
                onChange={(e) => setCustomer({...customer, phone: e.target.value})}
              />
              
              <textarea
                placeholder="Full Address *"
                value={customer.address}
                onChange={(e) => setCustomer({...customer, address: e.target.value})}
                rows="3"
              />

              <div className="modal-actions">
                <button 
                  className="modal-btn modal-btn-primary"
                  onClick={handlePayment}
                >
                  Pay Online • {formatPrice(total)}
                </button>
                <button 
                  className="modal-btn modal-btn-secondary"
                  onClick={sendToWhatsApp}
                >
                  <BsWhatsapp /> COD on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="modal-overlay" onClick={() => setShowPayment(false)}>
          <div className="modal-content payment-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPayment(false)}>×</button>
            <h3>Scan to Pay</h3>
            
            <div className="payment-qr">
              <img src={qrImage} alt="Payment QR" />
            </div>
            
            <p className="payment-amount">Amount: {formatPrice(total)}</p>
            
            <button 
              className="payment-confirm-btn"
              onClick={confirmPayment}
            >
              I've Completed Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}