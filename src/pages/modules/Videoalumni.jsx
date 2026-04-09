import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
import {
  FaUsers,
  FaStore,
  FaBoxOpen,
  FaShoppingCart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ================= COUNTER COMPONENT ================= */
const CounterItem = ({ icon, value, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.max(Math.floor(duration / value), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === value) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <div className="counter-icon">{icon}</div>
      <h2 className="counter-number">
        {count}
        <span className="plus">+</span>
      </h2>
      <p>{text}</p>
    </div>
  );
};

/* ================= BANNER CAROUSEL COMPONENT ================= */
const BannerCarousel = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const videoRefs = useRef([]);

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

        // Transform API data into slide format with title and description
        if (Array.isArray(data) && data.length > 0) {
          const formattedSlides = data
            .sort((a, b) => (a.index || 0) - (b.index || 0))
            .map((item) => ({
              type: "image",
              src: item.image_url,
              title: item.title || "Special Offer",
              description: item.description || "Discover amazing deals just for you",
              id: item.id,
            }));
          setSlides(formattedSlides);
        } else {
          console.warn("No banners from API");
          setSlides([]);
        }
      } catch (err) {
        console.error("Failed to fetch banner images:", err);
        setError(err.message);
        setSlides([]);
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
    if (slides.length === 0) return;
    const newIndex = (index + 1) % slides.length;
    setIndex(newIndex);
    playActiveVideo(newIndex);
  };

  const prevSlide = () => {
    if (slides.length === 0) return;
    const newIndex = (index - 1 + slides.length) % slides.length;
    setIndex(newIndex);
    playActiveVideo(newIndex);
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [index, slides.length]);

  // Reset index if slides change
  useEffect(() => {
    setIndex(0);
  }, [slides.length]);

  const counters = [
    { icon: <FaUsers />, value: 200, text: "Active Users" },
    { icon: <FaStore />, value: 5, text: "Verified Vendors" },
    { icon: <FaBoxOpen />, value: 200, text: "Products Listed" },
    { icon: <FaShoppingCart />, value: 230, text: "Total Orders" },
  ];

  // Show loading state
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <div className="loading-spinner"></div>
        <Typography>Loading banners...</Typography>
        <style>{`
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #e0e0e0;
            border-top-color: #8b0000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
        <Typography>Error loading banners: {error}</Typography>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography>No banners available</Typography>
      </div>
    );
  }

  return (
    <>
      <div style={{ textAlign: "center", margin: "50px 0" }}>
        <Typography
          variant="h5"
          fontWeight={700}
          mb={0}
          textAlign="center"
        >
          Where Tradition Meets Trend – Discover Your Next{" "}
          <span style={{ color: "#eaae5e" }}>
            Favorite Piece,
          </span>
        </Typography>
      </div>

      <div style={{ fontFamily: "Poppins, sans-serif", display: "flex", justifyContent: "center" }}>
        {/* ================= BANNER CAROUSEL ================= */}
        <div 
          style={{ 
            position: "relative", 
            width: "100%",
             maxWidth: "1450px",
            height: "400px",
            overflow: "hidden", 
            marginBottom: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              transform: `translateX(-${index * 100}%)`,
              transition: "0.8s ease-in-out",
              height: "100%",
            }}
          >
            {slides.map((item, i) => (
              <div key={item.id || i} style={{ minWidth: "100%", height: "100%", position: "relative", backgroundColor: "#f5f5f5" }}>
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    backgroundColor: "#f5f5f5",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/1200x400?text=Image+Not+Found";
                  }}
                />
                {/* Overlay for text readability */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                  padding: "40px 20px 20px",
                  zIndex: 2,
                }}>
                  <div style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    textAlign: "center",
                  }}>
                    {/* <h2 style={{
                      color: "#fff",
                      fontSize: "clamp(18px, 3vw, 28px)",
                      fontWeight: 700,
                      marginBottom: "8px",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                    }}>
                      {item.title}
                    </h2> */}
                    {/* <p style={{
                      color: "#f0f0f0",
                      fontSize: "clamp(12px, 2vw, 14px)",
                      marginBottom: "0",
                      textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
                    }}>
                      {item.description}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button onClick={prevSlide} style={arrowStyle("left")}>
                <FaChevronLeft />
              </button>
              <button onClick={nextSlide} style={arrowStyle("right")}>
                <FaChevronRight />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {slides.length > 1 && (
            <div style={{
              position: "absolute",
              bottom: "15px",
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              zIndex: 5,
            }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIndex(i);
                    playActiveVideo(i);
                  }}
                  style={{
                    width: i === index ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Counter Section (Optional) */}
        {/* <div
          style={{
            marginTop: "-90px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div className="counter-box">
            {counters.map((c, i) => (
              <CounterItem key={i} {...c} />
            ))}
          </div>
        </div> */}

        {/* Styles */}
        <style>
          {`
            .counter-box {
              background: #8b0000;
              width: 100%;
               max-width: 1500px;
              border-radius: 18px;
              box-shadow: 0 20px 50px rgba(0,0,0,0.35);
              padding: 40px 25px;
              border: 2px solid #d3bf0a;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              text-align: center;
              gap: 20px;
            }
            .counter-icon {
              font-size: 36px;
              color: #fff;
            }
            .counter-number {
              font-size: 36px;
              font-weight: 800;
              color: #fff;
            }
            .counter-item p {
              color: #ffeaea;
            }
            
            /* Responsive Styles */
            @media (max-width: 768px) {
              .counter-box {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (max-width: 600px) {
              .counter-box {
                grid-template-columns: repeat(2, 1fr);
                padding: 30px 15px;
                gap: 15px;
              }
              .counter-number {
                font-size: 28px;
              }
              .counter-icon {
                font-size: 28px;
              }
            }
            
            /* Arrow hover effect */
            button:hover {
              opacity: 0.9;
            }
          `}
        </style>
      </div>
    </>
  );
};

const arrowStyle = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: "16px",
  transform: "translateY(-50%)",
  zIndex: 5,
  background: "rgba(0,0,0,0.6)",
  border: "none",
  color: "#fff",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  fontSize: "18px",
});

export default BannerCarousel;