import { Helmet } from "react-helmet-async";




import React, { useState, useRef, useEffect } from "react";

// Local fallback banners (only if API fails or returns empty)
import Banner1 from "../modules/image/bannernew2.avif";
import Banner2 from "../modules/image/bannernew3.avif";
import Banner13 from "../modules/image/banner1new.avif";
import banner from "../modules/bannernew5.avif";

/* ================= BANNER FETCHING & CAROUSEL ================= */
const BannerCarousel = () => {
  // State for dynamic banners from Supabase
  const [dynamicSlides, setDynamicSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Local fallback slides (only used when API fails or no data)
  const fallbackSlides = [
    {
      type: "image",
      src: Banner1,
      title: "Welcome to Our Store",
      description: "Discover amazing products at unbeatable prices",
      ctaText: "Shop Now",
      ctaLink: "/all-products",
    },
    {
      type: "image",
      src: Banner2,
      title: "Summer Sale",
      description: "Get up to 50% off on selected items",
      ctaText: "View Offers",
      ctaLink: "/all-products",
    },
    {
      type: "image",
      src: Banner13,
      title: "New Arrivals",
      description: "Check out our latest collection",
      ctaText: "Explore Now",
      ctaLink: "/all-products",
    },
    {
      type: "image",
      src: banner,
      title: "Premium Quality",
      description: "Experience the best quality products",
      ctaText: "Learn More",
      ctaLink: "/all-products",
    },
  ];

  // Use API data if available, otherwise use fallback
  const slides = dynamicSlides.length > 0 ? dynamicSlides : fallbackSlides;

  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);
  const autoPlayRef = useRef(null);

  // Fetch banners from Supabase Edge Function
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/get-banner-images"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform API data into slide format
        if (Array.isArray(data) && data.length > 0) {
          const formattedSlides = data
            .sort((a, b) => (a.index || 0) - (b.index || 0))
            .map((item) => ({
              type: "image",
              src: item.image_url,
              title: item.title || "Special Offer",
              description: item.description || "Discover amazing deals just for you",
              ctaText: "Shop Now",
              ctaLink: "/all-products",
              id: item.id,
            }));
          setDynamicSlides(formattedSlides);
        } else {
          console.warn("No banners from API, using fallback");
          setDynamicSlides([]);
        }
      } catch (err) {
        console.error("Failed to fetch banner images:", err);
        setError(err.message);
        setDynamicSlides([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

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

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (slides.length === 0) return;
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [index, slides.length]);

  // Reset index if slides change and current index is out of bounds
  useEffect(() => {
    if (index >= slides.length && slides.length > 0) {
      setIndex(0);
    }
  }, [slides.length, index]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Handle CTA button click
  const handleCtaClick = (ctaLink) => {
    if (ctaLink) {
      window.location.href = ctaLink;
    }
  };

  // Show loading state
  if (loading && slides.length === 0) {
    return (
      <div className="banner-loading">
        <div className="loading-spinner"></div>
        <p>Loading banners...</p>
        <style>{`
          .banner-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 500px;
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            margin-top: 30px;
          }
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          .banner-loading p {
            color: white;
            margin-top: 20px;
            font-size: 16px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", width: "100%", overflowX: "hidden" }}>
      {/* ================= BANNER CAROUSEL ================= */}
      <div 
        className="banner-carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: "0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {slides.map((item, i) => (
              <div key={item.id || i} className="carousel-slide">
                {item.type === "image" ? (
                  <>
                    <img
                      src={item.src}
                      alt={item.title || `Banner ${i + 1}`}
                      className="carousel-image"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="banner-overlay">
                      <div className="banner-content">
                        <h2 className="banner-title">{item.title}</h2>
                        <p className="banner-description">{item.description}</p>
                        <button 
                          className="banner-cta-button"
                          onClick={() => handleCtaClick(item.ctaLink)}
                        >
                          {item.ctaText}
                          <span className="button-arrow">→</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={item.src}
                      muted
                      playsInline
                      loop
                      className="carousel-video"
                    />
                    <div className="banner-overlay">
                      <div className="banner-content">
                        <h2 className="banner-title">{item.title}</h2>
                        <p className="banner-description">{item.description}</p>
                        <button 
                          className="banner-cta-button"
                          onClick={() => handleCtaClick(item.ctaLink)}
                        >
                          {item.ctaText}
                          <span className="button-arrow">→</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {slides.length > 1 && (
          <div className="carousel-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === index ? "active" : ""}`}
                onClick={() => {
                  setIndex(i);
                  playActiveVideo(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ================= GLOBAL STYLES (Fully Responsive) ================= */}
      <style>
        {`
          /* Banner Carousel Styles */
          .banner-carousel-container {
            position: relative;
            height: 500px;
            overflow: hidden;
            width: 100%;
            max-width: 1350px;
            margin: 30px auto 0;
            border-radius: 20px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }

          .carousel-track-wrapper {
            height: 100%;
            width: 100%;
            overflow: hidden;
          }

          .carousel-track {
            display: flex;
            height: 100%;
            will-change: transform;
          }

          .carousel-slide {
            min-width: 100%;
            height: 100%;
            flex-shrink: 0;
            position: relative;
          }

          .carousel-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            display: block;
          }

          .carousel-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          /* Overlay Styles */
          .banner-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              90deg,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.4) 50%,
              rgba(0,0,0,0.1) 100%
            );
            display: flex;
            align-items: center;
            z-index: 2;
          }

          .banner-content {
            max-width: 600px;
            padding: 0 60px;
            color: white;
            animation: fadeInUp 0.8s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .banner-title {
            font-size: 34px;
            font-weight: 700;
            margin-bottom: 16px;
            line-height: 1.2;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .banner-description {
            font-size: 18px;
            margin-bottom: 28px;
            line-height: 1.5;
            opacity: 0.95;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }

          .banner-cta-button {
            background: linear-gradient(135deg, #8b0000 0%, #a52a2a 100%);
            color: white;
            border: none;
            padding: 14px 32px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          }

          .banner-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            background: linear-gradient(135deg, #a52a2a 0%, #8b0000 100%);
          }

          .button-arrow {
            transition: transform 0.3s ease;
          }

          .banner-cta-button:hover .button-arrow {
            transform: translateX(5px);
          }

          /* Dots Styles */
          .carousel-dots {
            position: absolute;
            bottom: 24px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 12px;
            z-index: 10;
          }

          .carousel-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            border: none;
            cursor: pointer;
            padding: 0;
            transition: all 0.3s ease;
          }

          .carousel-dot.active {
            background: #8b0000;
            width: 28px;
            border-radius: 10px;
          }

          /* ========== RESPONSIVE DESIGN ========== */
          @media (max-width: 1024px) {
            .banner-carousel-container {
              height: 500px;
            }
            .banner-title {
              font-size: 40px;
            }
            .banner-description {
              font-size: 16px;
            }
            .banner-content {
              padding: 0 40px;
            }
          }

          @media (max-width: 768px) {
            .banner-carousel-container {
              height: 450px;
            }
            .banner-title {
              font-size: 32px;
            }
            .banner-description {
              font-size: 14px;
              margin-bottom: 20px;
            }
            .banner-content {
              padding: 0 30px;
              max-width: 90%;
            }
            .banner-cta-button {
              padding: 10px 24px;
              font-size: 14px;
            }
            .carousel-dots {
              bottom: 16px;
              gap: 10px;
            }
          }

          @media (max-width: 640px) {
            .banner-carousel-container {
              height: 400px;
            }
            .banner-title {
              font-size: 28px;
              margin-bottom: 10px;
            }
            .banner-description {
              font-size: 13px;
              margin-bottom: 16px;
            }
            .banner-content {
              padding: 0 20px;
            }
            .banner-cta-button {
              padding: 8px 20px;
              font-size: 13px;
            }
          }

          @media (max-width: 480px) {
            .banner-carousel-container {
              height: 350px;
              margin-top: 15px;
              border-radius: 0px;
              margin: 0;
              max-width: 100%;
            }
            
            .carousel-track-wrapper {
              width: 100%;
            }
            
            .carousel-slide {
              min-width: 100%;
              width: 100%;
            }
            
            .carousel-image {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            
            .banner-content {
              padding: 0 10px !important;
              max-width: 100%;
            }
            
            .banner-title {
              font-size: 22px;
              margin-bottom: 8px;
            }
            
            .banner-description {
              font-size: 11px;
              margin-bottom: 12px;
            }
            
            .banner-cta-button {
              padding: 6px 14px;
              font-size: 11px;
            }
            
            .carousel-dots {
              bottom: 10px;
              gap: 6px;
            }
            
            .carousel-dot {
              width: 6px;
              height: 6px;
            }
            
            .carousel-dot.active {
              width: 18px;
            }
          }

          @media (max-width: 380px) {
            .banner-carousel-container {
              height: 300px;
            }
            
            .banner-title {
              font-size: 18px;
            }
            
            .banner-description {
              font-size: 10px;
              margin-bottom: 10px;
            }
            
            .banner-cta-button {
              padding: 5px 12px;
              font-size: 10px;
            }
            
            .banner-content {
              padding: 0 8px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerCarousel;




