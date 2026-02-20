import React, { useState, useEffect } from "react";

/* ===== IMAGES ===== */
import img1 from "./jharkhandimage/ariproduct.jpeg";
import img2 from "./jharkhandimage/aetproduct1.jpeg";
import img3 from "./jharkhandimage/artproduct3.jpeg";
import img4 from "./jharkhandimage/artproduct4.jpeg";
import img5 from "./jharkhandimage/MITHILAART.jpg";
import img6 from "./Biharimage/madubaniart.jpg";

import img8 from "./jharkhandimage/art5.jpeg";
import img9 from "./jharkhandimage/artproduct5.jpeg";

const PremiumArtGallery = () => {
  const images = [
    img1, img2, img3, img4, img5,
    img6,  img8, img9
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closePopup = () => setActiveIndex(null);

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIndex !== null) {
        if (e.key === 'ArrowRight') {
          nextSlide(e);
        } else if (e.key === 'ArrowLeft') {
          prevSlide(e);
        } else if (e.key === 'Escape') {
          closePopup();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="premium-gallery">   
      <h2 className="gallery-heading">
        OUR ART  <span className="highlight">GALLERY</span>
      </h2>
      <p className="gallery-subtitle">
        Click on any artwork to view larger version
      </p>

      {/* ===== GRID ===== */}
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => setActiveIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(index)}
          >
            <div className="image-container">
              <img 
                src={img} 
                alt={`Artwork ${index + 1}`}
                loading="lazy"
              />
              <div className="image-overlay">
                <span className="view-text">View Full Size</span>
              </div>
            </div>
            <div className="image-number">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* ===== POPUP SLIDER ===== */}
      {activeIndex !== null && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-header">
              <div className="image-counter">
                {activeIndex + 1} / {images.length}
              </div>
              <button 
                className="close-btn" 
                onClick={closePopup}
                aria-label="Close gallery"
              >
                ✕
              </button>
            </div>

            <div className="popup-content">
              <button 
                className="nav-btn prev-btn" 
                onClick={prevSlide}
                aria-label="Previous image"
              >
                ❮
              </button>

              <div className="popup-image-wrapper">
                <img
                  src={images[activeIndex]}
                  alt={`Artwork ${activeIndex + 1}`}
                  className="popup-image"
                />
                <div className="image-navigation-hint">
                  {!isMobile && "Use ← → arrow keys to navigate"}
                </div>
              </div>

              <button 
                className="nav-btn next-btn" 
                onClick={nextSlide}
                aria-label="Next image"
              >
                ❯
              </button>
            </div>

            <div className="popup-footer">
              <div className="thumbnail-scroll">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== INTERNAL CSS ===== */}
      <style>{`
        .premium-gallery {
          padding: 20px 15px;
          background: linear-gradient(180deg, #fff9f1, #f5e6d8);
          min-height: 100vh;
        }

        .gallery-heading {
          text-align: center;
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 15px;
          color: #8b0000;
          line-height: 1.2;
        }

        .gallery-heading .highlight {
          color: black;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .gallery-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 40px;
          font-weight: 500;
        }

        /* GRID STYLES */
        .gallery-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
          padding: 10px;
        }

        .gallery-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 300px;
          background: white;
        }

        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.08);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.2) 50%,
            transparent 70%
          );
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 25px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-card:hover .image-overlay {
          opacity: 1;
        }

        .view-text {
          color: white;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          padding: 8px 20px;
          background: rgba(197, 155, 45, 0.9);
          border-radius: 20px;
          backdrop-filter: blur(5px);
        }

        .image-number {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(0,0,0,0.7);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          z-index: 2;
        }

        /* POPUP STYLES */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .popup-container {
          background: #1a1a1a;
          border-radius: 20px;
          width: 100%;
          max-width: 1200px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #2a2a2a;
          border-bottom: 1px solid #444;
        }

        .image-counter {
          color: white;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .close-btn {
          background: rgba(255,255,255,0.1);
          border: none;
          color: white;
          font-size: 28px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.2);
          transform: scale(1.1);
        }

        .popup-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px;
          position: relative;
          min-height: 60vh;
        }

        .popup-image-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-height: 70vh;
        }

        .popup-image {
          max-width: 100%;
          max-height: 65vh;
          object-fit: contain;
          border-radius: 10px;
          animation: zoomIn 0.4s ease;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        @keyframes zoomIn {
          from { 
            transform: scale(0.9);
            opacity: 0;
          }
          to { 
            transform: scale(1);
            opacity: 1;
          }
        }

        .nav-btn {
          background: rgba(197, 155, 45, 0.9);
          border: none;
          color: white;
          font-size: 32px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 15px;
          flex-shrink: 0;
        }

        .nav-btn:hover {
          background: #c59b2d;
          transform: scale(1.1);
          box-shadow: 0 10px 20px rgba(197, 155, 45, 0.3);
        }

        .image-navigation-hint {
          color: #888;
          font-size: 14px;
          margin-top: 15px;
          text-align: center;
          font-style: italic;
        }

        .popup-footer {
          padding: 20px 30px;
          background: #2a2a2a;
          border-top: 1px solid #444;
        }

        .thumbnail-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 10px 0;
          scrollbar-width: thin;
          scrollbar-color: #c59b2d #444;
        }

        .thumbnail-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .thumbnail-scroll::-webkit-scrollbar-track {
          background: #444;
          border-radius: 3px;
        }

        .thumbnail-scroll::-webkit-scrollbar-thumb {
          background: #c59b2d;
          border-radius: 3px;
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          flex-shrink: 0;
          border: 2px solid transparent;
        }

        .thumbnail:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }

        .thumbnail.active {
          opacity: 1;
          border-color: #c59b2d;
          transform: scale(1.05);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* RESPONSIVE STYLES */
        /* Large Desktop */
        @media (min-width: 1600px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
          
          .gallery-card {
            height: 350px;
          }
        }

        /* Desktop */
        @media (max-width: 1200px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 20px;
          }
          
          .gallery-heading {
            font-size: 2.5rem;
          }
        }

        /* Tablet */
        @media (max-width: 992px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 18px;
          }
          
          .gallery-card {
            height: 280px;
          }
          
          .gallery-heading {
            font-size: 2.2rem;
          }
          
          .popup-content {
            padding: 20px;
          }
          
          .nav-btn {
            width: 50px;
            height: 50px;
            font-size: 28px;
            margin: 0 10px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .premium-gallery {
            padding: 15px 10px;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 15px;
          }
          
          .gallery-card {
            height: 240px;
          }
          
          .gallery-heading {
            font-size: 1.8rem;
            margin-bottom: 10px;
          }
          
          .gallery-subtitle {
            font-size: 1rem;
            margin-bottom: 25px;
          }
          
          .popup-container {
            max-height: 95vh;
          }
          
          .popup-header {
            padding: 15px 20px;
          }
          
          .popup-content {
            padding: 15px;
            flex-direction: column;
            min-height: 50vh;
          }
          
          .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            margin: 0;
            width: 45px;
            height: 45px;
            font-size: 24px;
          }
          
          .prev-btn {
            left: 10px;
          }
          
          .next-btn {
            right: 10px;
          }
          
          .popup-image {
            max-height: 55vh;
          }
          
          .popup-footer {
            padding: 15px 20px;
          }
          
          .thumbnail {
            width: 60px;
            height: 60px;
          }
          
          .image-navigation-hint {
            display: none;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            max-width: 400px;
          }
          
          .gallery-card {
            height: 220px;
          }
          
          .gallery-heading {
            font-size: 1.6rem;
          }
          
          .view-text {
            font-size: 14px;
            padding: 6px 15px;
          }
          
          .popup-overlay {
            padding: 10px;
          }
          
          .popup-header {
            padding: 12px 15px;
          }
          
          .image-counter {
            font-size: 16px;
          }
          
          .close-btn {
            width: 40px;
            height: 40px;
            font-size: 24px;
          }
          
          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
          
          .thumbnail {
            width: 50px;
            height: 50px;
          }
        }

        /* Extra Small Mobile */
        @media (max-width: 360px) {
          .gallery-card {
            height: 200px;
          }
          
          .gallery-heading {
            font-size: 1.4rem;
          }
          
          .popup-content {
            padding: 10px;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .popup-container {
            max-height: 98vh;
          }
          
          .popup-image {
            max-height: 50vh;
          }
          
          .thumbnail {
            width: 50px;
            height: 50px;
          }
        }

        /* High Resolution Screens */
        @media (min-resolution: 192dpi) {
          .gallery-card img,
          .popup-image,
          .thumbnail img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumArtGallery;