import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaMap, FaLinkedinIn } from "react-icons/fa";
import bannerImage from "../Biharimage/slider1.jpeg"; // path adjust karo

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    message: ""
  });

  const companyInfo = {
    name: "Bizhar Heritage",
    tagline: "Bihar & Jharkhand's Heritage Service",
    addresses: [
      {
        city: "Ranchi, Jharkhand",
        address: "Brajpur Ratu , Ranchi, Jharkhand 835222 ",
        phone: "+91 92884 04060",
        whatsapp: "+91 92884 04060"
      }
    ],
    email: "v4552099@gmail.com",
    supportEmail: "bizharheritage@gmail.com",
    socialMedia: {
      facebook: "https://facebook.com/bizharheritage",
      instagram: "https://www.instagram.com/bizharheritage/?igsh=MXM4MTY3MW5obm1raA%3D%3D&utm_source=ig_contact_invite#",
      youtube: "https://youtube.com/c/bizharheritage",
      linkedin: "https://www.linkedin.com/posts/bizhar-heritage_bizhar-heritage-linkedin-activity-7413789728078135297-MXd_/?utm_source=share&utm_medium=member_android&rcm=ACoAAC8H0tIBRGWvBhs6HcO4QK45eIIJ1FColds",
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `✨ *BIZHAR HERITAGE ENQUIRY* ✨\n\n` +
      `🙏 *Greetings from the land of culture & craftsmanship*\n\n` +
      `Bihar and Jharkhand are home to timeless traditions — from Madhubani art, stone and wood crafts, tribal creations, to age-old cultural heritage. ` +
      `We proudly showcase and support authentic heritage products crafted by skilled local artisans.\n\n` +
      `*Customer Details:*\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Company:* ${formData.company}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Mobile:* ${formData.mobile}\n\n` +
      `*Message:*\n${formData.message}\n\n` +
      `📍 *Location:* Bihar/Jharkhand\n` +
      `⏰ *Submitted:* ${new Date().toLocaleString()}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${companyInfo.addresses[0].whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    const emailSubject = `Enquiry - ${formData.name}`;
    const emailBody = `BIZHAR HERITAGE ENQUIRY\n\n` +
      `Bihar and Jharkhand represent a rich legacy of art, culture, and craftsmanship. ` +
      `This enquiry reflects an interest in preserving and promoting authentic heritage products created by local artisans.\n\n` +
      `Customer Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Mobile: ${formData.mobile}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Submitted: ${new Date().toLocaleString()}\n\n` +
      `---\n` +
      `This enquiry was submitted via Bizhar Heritage website.`;

    const mailtoLink = `mailto:${companyInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    alert(`Thank you ${formData.name}! Your enquiry has been sent. We'll contact you shortly.`);

    setFormData({
      name: "",
      company: "",
      email: "",
      mobile: "",
      message: ""
    });
  };

  const directCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const directWhatsApp = (whatsappNumber) => {
    const defaultMessage = `Hello Bizhar Heritage Team 🙏\n\n` +
      `I am interested in exploring authentic heritage products from Bihar and Jharkhand. ` +
      `I would love to know more about traditional handicrafts, local artisan products, cultural items, and available collections. ` +
      `Please share details and catalogue.\n\n` +
      `Thank you 🌿`;

    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  const openGoogleMaps = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <style>
        {`
          .bh-contact-root * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          .bh-contact-body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
           
            overflow-x: hidden;
          }
          
          .bh-contact-page {
            min-height: 100vh;
            width: 100%;
          }

          /* Hero Banner */
          .bh-hero-banner {
            height: 400px;
            background:
              linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${bannerImage});
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            margin-bottom: 50px;
            position: relative;
          }

          .bh-hero-content {
            max-width: 800px;
            padding: 20px;
            position: relative;
            z-index: 2;
          }

          .bh-hero-title {
            font-size:35px;
            font-weight: 800;
            margin-bottom: 15px;
            color: #ffd700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }

          .bh-hero-tagline {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 20px;
            color: #ffffff;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          }

          .bh-hero-subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
            color: #f0f0f0;
          }

          /* Contact Container */
          .bh-contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px 60px;
            width: 100%;
          }

          /* Two Column Layout */
          .bh-contact-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          @media (max-width: 1024px) {
            .bh-contact-layout {
              gap: 30px;
            }
          }

          @media (max-width: 768px) {
            .bh-contact-layout {
              grid-template-columns: 1fr;
              gap: 30px;
            }
          }

          /* Form Section */
          .bh-form-section {
            // background: white;
            padding: 30px;
            border-radius: 15px;
            // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            height: fit-content;
          }

          .bh-section-title {
            color: #1f2937;
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 3px solid #8b0000;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          @media (max-width: 480px) {
            .bh-section-title {
              font-size: 1.5rem;
            }
          }

          /* Form Styles */
          .bh-form-group {
            margin-bottom: 20px;
          }

          .bh-form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          @media (max-width: 576px) {
            .bh-form-row {
              grid-template-columns: 1fr;
              gap: 15px;
            }
          }

          .bh-form-label {
            display: block;
            margin-bottom: 8px;
            color: #374151;
            font-weight: 600;
            font-size: 0.95rem;
          }

          .bh-form-input, .bh-form-textarea {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #d1d5db;
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
            // background: #f9fafb;
            font-family: inherit;
          }

          .bh-form-input:focus, .bh-form-textarea:focus {
            outline: none;
            border-color: #8b0000;
            // background: white;
            // box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.1);
          }

          .bh-form-textarea {
            min-height: 120px;
            resize: vertical;
          }

          .bh-submit-btn {
            background: linear-gradient(135deg, #8b0000 0%, #a52a2a 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.1rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            margin-top: 10px;
          }

          .bh-submit-btn:hover {
            transform: translateY(-3px);
            // box-shadow: 0 10px 20px rgba(139, 0, 0, 0.3);
          }

          /* Address Section */
          .bh-address-section {
            // background: white;
            padding: 30px;
            border-radius: 15px;
            // box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            height: fit-content;
          }

          .bh-address-card {
            // background: #f8fafc;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 20px;
            border: 2px solid #e5e7eb;
          }

          .bh-address-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
          }

          .bh-address-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #8b0000;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
          }

          .bh-address-title h4 {
            color: #1f2937;
            margin: 0 0 5px 0;
            font-size: 1.2rem;
          }

          .bh-address-city {
            color: #6b7280;
            font-size: 0.9rem;
          }

          .bh-address-details p {
            color: #4b5563;
            margin: 8px 0;
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .bh-action-buttons {
            display: flex;
            gap: 10px;
            margin-top: 15px;
            flex-wrap: wrap;
          }

          .bh-action-btn {
            padding: 8px 16px;
            border-radius: 6px;
            border: none;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            flex: 1;
            min-width: 120px;
            justify-content: center;
          }

          @media (max-width: 480px) {
            .bh-action-btn {
              min-width: 100px;
              padding: 8px 12px;
              font-size: 0.85rem;
            }
          }

          .bh-call-btn {
            background: #10b981;
            color: white;
          }

          .bh-whatsapp-btn {
            background: #25D366;
            color: white;
          }

          .bh-action-btn:hover {
            transform: translateY(-2px);
            opacity: 0.9;
          }

          /* Social Media Links */
          .bh-links-section {
            margin-top: 30px;
          }

          .bh-links-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 15px;
          }

          @media (max-width: 576px) {
            .bh-links-grid {
              grid-template-columns: 1fr;
            }
          }

          .bh-link-card {
            // background: #f1f5f9;
            border-radius: 10px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            border: 2px solid transparent;
          }

          .bh-link-card:hover {
            border-color: #8b0000;
            transform: translateY(-3px);
            // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          .bh-link-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            flex-shrink: 0;
          }

          .bh-facebook-icon { background: #1877F2; }
          .bh-instagram-icon { background: #E4405F; }
          .bh-youtube-icon { background: #FF0000; }
          .bh-linkedin-icon { background: #0A66C2; }

          .bh-link-text h4 {
            color: #1f2937;
            margin: 0;
            font-size: 1rem;
          }

          .bh-link-text p {
            color: #6b7280;
            font-size: 0.85rem;
            margin: 3px 0 0 0;
          }

          // /* WhatsApp Float */
          // .bh-whatsapp-float {
          //   position: fixed;
          //   bottom: 30px;
          //   right: 30px;
          //   background: #25D366;
          //   color: white;
          //   width: 60px;
          //   height: 60px;
          //   border-radius: 50%;
          //   display: flex;
          //   align-items: center;
          //   justify-content: center;
          //   font-size: 28px;
          //   box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          //   z-index: 1000;
          //   cursor: pointer;
          //   transition: all 0.3s ease;
          //   border: 3px solid white;
          // }

          // .bh-whatsapp-float:hover {
          //   transform: scale(1.1);
          // }

          /* Map Section */
          .bh-map-section {
            // padding: 60px 20px;
            // background: #f8f9fa;
          }

          .bh-map-container {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
          }

          .bh-map-info {
            flex: 1;
            min-width: 280px;
           
            padding: 30px;
            border-radius: 16px;
            // box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }

          .bh-map-iframe {
            flex: 2;
            min-width: 300px;
            border-radius: 16px;
            overflow: hidden;
            // box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          }

          .bh-map-iframe iframe {
            width: 100%;
            height: 420px;
            border: 0;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .bh-hero-title {
              font-size: 3rem;
            }
            
            .bh-hero-tagline {
              font-size: 1.6rem;
            }
          }

          @media (max-width: 768px) {
            .bh-hero-banner {
              height: 350px;
              margin-bottom: 30px;
              background-attachment: scroll;
            }
            
            .bh-hero-title {
              font-size: 2.5rem;
            }
            
            .bh-hero-tagline {
              font-size: 1.4rem;
            }
            
            .bh-hero-subtitle {
              font-size: 1.1rem;
            }
            
            .bh-form-section,
            .bh-address-section {
              padding: 25px;
            }
            
            .bh-whatsapp-float {
              width: 50px;
              height: 50px;
              font-size: 24px;
              bottom: 20px;
              right: 20px;
            }
            
            .bh-map-section {
              padding: 40px 15px;
            }
          }

          @media (max-width: 480px) {
            .bh-hero-banner {
              height: 300px;
            }
            
            .bh-hero-title {
              font-size: 2rem;
            }
            
            .bh-hero-tagline {
              font-size: 1.2rem;
            }
            
            .bh-hero-subtitle {
              font-size: 1rem;
              padding: 0 10px;
            }
            
            .bh-contact-container {
              padding: 0 15px 40px;
            }
            
            .bh-form-section,
            .bh-address-section {
              padding: 20px;
            }
            
            .bh-section-title {
              font-size: 1.5rem;
            }
            
            .bh-whatsapp-float {
              width: 45px;
              height: 45px;
              font-size: 20px;
              bottom: 15px;
              right: 15px;
              border: 2px solid white;
            }
            
            .bh-map-info {
              padding: 20px;
            }
            
            .bh-map-iframe iframe {
              height: 350px;
            }
            
            .bh-action-buttons {
              flex-direction: column;
            }
            
            .bh-action-btn {
              width: 100%;
            }
          }

          @media (max-width: 360px) {
            .bh-hero-title {
              font-size: 1.8rem;
            }
            
            .bh-hero-tagline {
              font-size: 1.1rem;
            }
            
            .bh-form-section,
            .bh-address-section {
              padding: 15px;
            }
            
            .bh-section-title {
              font-size: 1.3rem;
            }
            
            .bh-form-input, .bh-form-textarea {
              padding: 10px 12px;
              font-size: 0.95rem;
            }
            
            .bh-submit-btn {
              padding: 12px 20px;
              font-size: 1rem;
            }
          }

          @media (max-width: 320px) {
            .bh-hero-title {
              font-size: 1.6rem;
            }
            
            .bh-link-card {
              padding: 12px;
              gap: 10px;
            }
            
            .bh-link-icon {
              width: 35px;
              height: 35px;
              font-size: 16px;
            }
            
            .bh-link-text h4 {
              font-size: 0.9rem;
            }
            
            .bh-link-text p {
              font-size: 0.8rem;
            }
          }
        `}
      </style>

      {/* WhatsApp Floating Button */}
      <div 
        className="bh-whatsapp-float" 
        onClick={() => directWhatsApp(companyInfo.addresses[0].whatsapp)}
        title="Chat on WhatsApp"
        aria-label="WhatsApp Contact"
      >
        <FaWhatsapp />
      </div>

      <div className="bh-contact-root">
        <div className="bh-contact-page">
          {/* Hero Banner */}
          <div className="bh-hero-banner">
            <div className="bh-hero-content">
              <h1 className="bh-hero-title">Welcome to Bihar & Jharkhand</h1>
              <div className="bh-hero-tagline">Heritage Service</div>
              <div className="bh-hero-subtitle">
               Premier promoter of Eastern India’s rich cultural heritage, offering authentic art, crafts, and traditional treasures
              </div>
            </div>
          </div>

          <div className="bh-contact-container">
            <div className="bh-contact-layout">
              {/* Form Section - Left Side */}
              <div className="bh-form-section">
                <h2 className="bh-section-title">
                  <FaEnvelope /> Get Free Quote
                </h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="bh-form-row">
                    <div className="bh-form-group">
                      <label className="bh-form-label" htmlFor="bh-name">Full Name *</label>
                      <input
                        type="text"
                        id="bh-name"
                        name="name"
                        className="bh-form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="bh-form-group">
                      <label className="bh-form-label" htmlFor="bh-company">Company Name</label>
                      <input
                        type="text"
                        id="bh-company"
                        name="company"
                        className="bh-form-input"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="bh-form-row">
                    <div className="bh-form-group">
                      <label className="bh-form-label" htmlFor="bh-email">Email Address *</label>
                      <input
                        type="email"
                        id="bh-email"
                        name="email"
                        className="bh-form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="bh-form-group">
                      <label className="bh-form-label" htmlFor="bh-mobile">Mobile Number *</label>
                      <input
                        type="tel"
                        id="bh-mobile"
                        name="mobile"
                        className="bh-form-input"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="bh-form-group">
                    <label className="bh-form-label" htmlFor="bh-message">Your Requirements</label>
                    <textarea
                      id="bh-message"
                      name="message"
                      className="bh-form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your  quantity needed, delivery location, etc."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="bh-submit-btn">
                    <FaWhatsapp /> Send Enquiry via WhatsApp
                  </button>
                </form>
              </div>

              {/* Address Section - Right Side */}
              <div className="bh-address-section">
                <h2 className="bh-section-title">
                  <FaMapMarkerAlt /> Our Locations
                </h2>
                
                {companyInfo.addresses.map((office, index) => (
                  <div key={index} className="bh-address-card">
                    <div className="bh-address-header">
                      <div className="bh-address-icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="bh-address-title">
                        <h4>Bizhar Heritage</h4>
                        <div className="bh-address-city">{office.city}</div>
                      </div>
                    </div>
                    
                    <div className="bh-address-details">
                      <p><strong>Address:</strong> {office.address}</p>
                      <p><strong>Phone:</strong> {office.phone}</p>
                      
                      <div className="bh-action-buttons">
                        <button 
                          className="bh-action-btn bh-call-btn"
                          onClick={() => directCall(office.phone)}
                          aria-label="Call Office"
                        >
                          <FaPhoneAlt /> Call
                        </button>
                        <button 
                          className="bh-action-btn bh-whatsapp-btn"
                          onClick={() => directWhatsApp(office.whatsapp)}
                          aria-label="WhatsApp Office"
                        >
                          <FaWhatsapp /> WhatsApp
                        </button>
                        <button 
                          className="bh-action-btn"
                          onClick={() => openGoogleMaps(office.address)}
                          style={{background: '#8b5cf6', color: 'white'}}
                          aria-label="View on Map"
                        >
                          <FaMap /> Map
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Media & Map Links */}
                <div className="bh-links-section">
                  <h3 style={{color: '#1f2937', marginBottom: '15px', fontSize: '1.3rem'}}>Connect With Us</h3>
                  <div className="bh-links-grid">
                    <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="bh-link-card">
                      <div className="bh-link-icon bh-facebook-icon">
                        <FaFacebook />
                      </div>
                      <div className="bh-link-text">
                        <h4>Facebook</h4>
                        <p>Follow for updates</p>
                      </div>
                    </a>
                    
                    <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="bh-link-card">
                      <div className="bh-link-icon bh-instagram-icon">
                        <FaInstagram />
                      </div>
                      <div className="bh-link-text">
                        <h4>Instagram</h4>
                        <p>See our projects</p>
                      </div>
                    </a>
                    
                    <a href={companyInfo.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="bh-link-card">
                      <div className="bh-link-icon bh-youtube-icon">
                        <FaYoutube />
                      </div>
                      <div className="bh-link-text">
                        <h4>YouTube</h4>
                        <p>Watch videos</p>
                      </div>
                    </a>
                    
                    <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="bh-link-card">
                      <div className="bh-link-icon bh-linkedin-icon">
                        <FaLinkedinIn />
                      </div>
                      <div className="bh-link-text">
                        <h4>LinkedIn</h4>
                        <p>Connect professionally</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bh-map-section">
              <h2 style={{
                textAlign: "center",
                fontSize: "28px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#1f2937",
              }}>
                📍 Our Location
              </h2>

              <p style={{
                textAlign: "center",
                fontSize: "16px",
                color: "#4b5563",
                marginBottom: "40px",
              }}>
                Visit us at our Ranchi office – we're happy to guide you!
              </p>

              <div className="bh-map-container">
                <div className="bh-map-info">
                  <h3 style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: "#111827",
                  }}>
                    Bizhar Heritage Builders
                  </h3>

                  <p style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    color: "#374151",
                    marginBottom: "20px",
                  }}>
                    Brajpur Ratu <br />
                    Jharkhand – <strong>835222 </strong><br />
                    India
                  </p>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Ratu+Road+Ranchi+Jharkhand"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "12px 24px",
                      background: "#8b0000",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "600",
                      borderRadius: "10px",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#a52a2a"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#8b0000"}
                  >
                    🚗 Get Directions
                  </a>
                </div>

                <div className="bh-map-iframe">
                  <iframe
                    src="https://www.google.com/maps?q=Bizhar%20Heritage%20Builders%2C%20Ratu%20Road%2C%20Ranchi%2C%20Jharkhand&output=embed"
                    title="Bizhar Heritage Location Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;