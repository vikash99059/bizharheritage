import { Helmet } from "react-helmet-async";
import { useState, useEffect, useRef, useCallback } from "react";

// ─── Inline Styles ─────────────────────────────────────────────────────────────
const styles = {
  wrapper: {
    width: "100%",
    maxWidth: 1400,
    margin: "0 auto",
    position: "relative",
    padding: "20px 16px",
    fontFamily: "'Nunito', sans-serif",
  },
  outer: {
    overflow: "hidden",
    borderRadius: 20,
    position: "relative",
  },
  track: (offset) => ({
    display: "flex",
    gap: 20,
    transform: `translateX(-${offset}px)`,
    transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  }),
  slide: (bgImage, isMobile) => ({
    flex: `0 0 calc(${isMobile ? "100%" : "calc(33.333% - 13.33px)"})`,
    minWidth: 0,
    background: bgImage ? `url(${bgImage})` : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    minHeight: isMobile ? 280 : 380,
    display: "flex",
    alignItems: "flex-end",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  }),
  overlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)",
    borderRadius: 20,
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: "24px 20px 28px",
    width: "100%",
    color: "#fff",
  },
  tag: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    background: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(8px)",
    padding: "4px 12px",
    borderRadius: 30,
    marginBottom: 12,
    color: "#fff",
  },
  title: (isMobile) => ({
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: isMobile ? 20 : "clamp(20px, 2.5vw, 28px)",
    fontWeight: 800,
    lineHeight: 1.25,
    color: "#fff",
    marginBottom: 8,
    textShadow: "0 1px 3px rgba(0,0,0,0.3)",
  }),
  desc: (isMobile) => ({
    fontSize: isMobile ? 12 : "clamp(12px, 1.2vw, 14px)",
    color: "rgba(255,255,255,0.9)",
    lineHeight: 1.5,
    marginBottom: 16,
    fontWeight: 500,
    textShadow: "0 1px 2px rgba(0,0,0,0.2)",
  }),
  btn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#fff",
    color: "#333",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.8px",
    textTransform: "uppercase",
    padding: "10px 20px",
    borderRadius: 40,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.25s ease",
    fontFamily: "inherit",
  },
  navBtn: (side, isMobile) => ({
    position: "absolute",
    top: "50%",
    [side]: isMobile ? -8 : -16,
    transform: "translateY(-50%)",
    width: isMobile ? 36 : 44,
    height: isMobile ? 36 : 44,
    borderRadius: "50%",
    background: "#fff",
    border: "none",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    fontSize: isMobile ? 18 : 24,
    color: "#333",
    lineHeight: 1,
    transition: "all 0.2s ease",
  }),
  dotsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginTop: 24,
  },
  dot: (active) => ({
    width: active ? 28 : 8,
    height: 8,
    borderRadius: active ? 4 : "50%",
    background: active ? "#667eea" : "#d0b88a",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
    padding: 0,
  }),
  loadingWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    flexDirection: "column",
    gap: 16,
  },
  errorWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,
    flexDirection: "column",
    gap: 16,
    textAlign: "center",
    padding: 20,
  },
  spinner: {
    width: 50,
    height: 50,
    border: "4px solid #f3f3f3",
    borderTop: "4px solid #667eea",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// ─── Slide Component ───────────────────────────────────────────────────────────
function BannerSlide({ slide, isMobile, onClick }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      style={{
        ...styles.slide(slide.src, isMobile),
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.25)" : "0 10px 30px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(slide)}
    >
      <div style={styles.overlay} />
      <div style={styles.content}>
        <span style={styles.tag}>✦ {slide.tag || "Special Offer"}</span>
        <h2 style={styles.title(isMobile)}>{slide.title}</h2>
        <p style={styles.desc(isMobile)}>{slide.description}</p>
        <button
          style={{
            ...styles.btn,
            background: hovered ? "#667eea" : "#fff",
            color: hovered ? "#fff" : "#333",
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {slide.ctaText || "Shop Now"}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Main Carousel Component ───────────────────────────────────────────────────
export default function BannerCarousel() {
  const [dynamicSlides, setDynamicSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideWidth, setSlideWidth] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const GAP = 20;
  const visibleCount = isMobile ? 1 : 3;
  const totalPages = Math.max(0, dynamicSlides.length - visibleCount + 1);

  const clamp = (n) => Math.max(0, Math.min(n, totalPages - 1));

  // Measure slide width after mount / resize
  const measureSlide = useCallback(() => {
    if (trackRef.current && trackRef.current.children[0]) {
      const firstSlide = trackRef.current.children[0];
      const slideWidthValue = firstSlide.getBoundingClientRect().width + GAP;
      setSlideWidth(slideWidthValue);
    }
  }, []);

  // Fetch banners from API
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/get-banner-images"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Transform API data into slide format with rich content
        if (Array.isArray(data) && data.length > 0) {
          const fallbackContent = [
            { tag: "✦ Wedding Special", title: "Wedding Magic in Every Gift", description: "Curated to celebrate happily-ever-afters", ctaText: "Order Now" },
            { tag: "🎂 Sweet Treats", title: "Gourmet Cakes for Your Celebration", description: "Find the sweetest delights for your sweetest moments", ctaText: "Order Now" },
            { tag: "🌸 Fresh Blooms", title: "Blooming Wrapped Bouquets", description: "Send handcrafted blooms to brighten their day", ctaText: "Order Now" },
            { tag: "🍫 Luxury", title: "Luxury Chocolate Hampers", description: "Indulge the ones you love with handpicked chocolates", ctaText: "Shop Now" },
          ];
          
          const formattedSlides = data
            .sort((a, b) => (a.index || 0) - (b.index || 0))
            .map((item, idx) => {
              const fallback = fallbackContent[idx % fallbackContent.length];
              return {
                type: "image",
                src: item.image_url,
                title: item.title || fallback.title,
                description: item.description || fallback.description,
                ctaText: item.ctaText || fallback.ctaText,
                ctaLink: item.ctaLink || "/all-products",
                tag: item.tag || fallback.tag,
                id: item.id || idx,
              };
            });
          setDynamicSlides(formattedSlides);
        } else {
          console.warn("No banners from API, using fallback slides");
          // Fallback slides with beautiful images
          setDynamicSlides([
            {
              id: 1,
              src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&auto=format",
              title: "Wedding Magic in Every Gift",
              description: "Curated to celebrate happily-ever-afters",
              ctaText: "Order Now",
              tag: "✦ Wedding Special",
            },
            {
              id: 2,
              src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format",
              title: "Gourmet Cakes for Your Celebration",
              description: "Find the sweetest delights for your sweetest moments",
              ctaText: "Order Now",
              tag: "🎂 Sweet Treats",
            },
            {
              id: 3,
              src: "https://images.unsplash.com/photo-1490750967868-88df5691cc3f?w=800&q=80&auto=format",
              title: "Blooming Wrapped Bouquets",
              description: "Send handcrafted blooms to brighten their day",
              ctaText: "Order Now",
              tag: "🌸 Fresh Blooms",
            },
            {
              id: 4,
              src: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80&auto=format",
              title: "Luxury Chocolate Hampers",
              description: "Indulge the ones you love with handpicked chocolates",
              ctaText: "Shop Now",
              tag: "🍫 Premium",
            },
          ]);
        }
      } catch (err) {
        console.error("Failed to fetch banner images:", err);
        setError(err.message);
        // Set fallback slides even on error
        setDynamicSlides([
          {
            id: 1,
            src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&auto=format",
            title: "Wedding Magic in Every Gift",
            description: "Curated to celebrate happily-ever-afters",
            ctaText: "Order Now",
            tag: "✦ Wedding Special",
          },
          {
            id: 2,
            src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format",
            title: "Gourmet Cakes for Your Celebration",
            description: "Find the sweetest delights for your sweetest moments",
            ctaText: "Order Now",
            tag: "🎂 Sweet Treats",
          },
          {
            id: 3,
            src: "https://images.unsplash.com/photo-1490750967868-88df5691cc3f?w=800&q=80&auto=format",
            title: "Blooming Wrapped Bouquets",
            description: "Send handcrafted blooms to brighten their day",
            ctaText: "Order Now",
            tag: "🌸 Fresh Blooms",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  // Measure slides after data loads
  useEffect(() => {
    if (dynamicSlides.length > 0) {
      setTimeout(measureSlide, 100);
    }
  }, [dynamicSlides, measureSlide]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setTimeout(measureSlide, 50);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [measureSlide]);

  // Clamp current on visible change
  useEffect(() => {
    if (totalPages > 0) {
      setCurrent((c) => clamp(c));
    } else {
      setCurrent(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, dynamicSlides.length]);

  const goTo = useCallback(
    (idx) => {
      if (totalPages > 0) {
        setCurrent(clamp(idx));
      }
    },
    [totalPages, clamp]
  );

  // Auto-play
  const resetAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (totalPages > 1) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => (c + 1 < totalPages ? c + 1 : 0));
      }, 5000);
    }
  }, [totalPages]);

  useEffect(() => {
    resetAuto();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAuto]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        goTo(current - 1);
        resetAuto();
      }
      if (e.key === "ArrowRight") {
        goTo(current + 1);
        resetAuto();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, resetAuto]);

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    // Only trigger horizontal swipe if horizontal movement is greater than vertical
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      if (dx > 0) {
        goTo(current + 1);
      } else {
        goTo(current - 1);
      }
      resetAuto();
    }
  };

  // Handle click on slide
  const handleSlideClick = (slide) => {
    if (slide.ctaLink) {
      window.location.href = slide.ctaLink;
    } else {
      alert(`✨ ${slide.title}\n${slide.description}`);
    }
  };

  const offset = current * slideWidth;

  // Loading state
  if (loading) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <div style={styles.loadingWrapper}>
          <div style={styles.spinner} />
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#666" }}>Loading magical gifts...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }

  // Error state but still show slides
  if (error && dynamicSlides.length === 0) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <div style={styles.errorWrapper}>
          <p style={{ color: "#d32f2f", fontFamily: "'Nunito', sans-serif" }}>⚠️ {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{ ...styles.btn, background: "#667eea", color: "#fff" }}
          >
            Retry
          </button>
        </div>
      </>
    );
  }

  if (dynamicSlides.length === 0) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" />
        <div style={styles.errorWrapper}>
          <p style={{ fontFamily: "'Nunito', sans-serif", color: "#666" }}>No banners available</p>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div style={styles.wrapper}>
        {/* Previous Button */}
        {totalPages > 1 && (
          <button
            style={styles.navBtn("left", isMobile)}
            onClick={() => {
              goTo(current - 1);
              resetAuto();
            }}
            aria-label="Previous slide"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#667eea";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#333";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ‹
          </button>
        )}

        {/* Track Container */}
        <div style={styles.outer}>
          <div
            ref={trackRef}
            style={styles.track(offset)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {dynamicSlides.map((slide, idx) => (
              <BannerSlide
                key={slide.id || idx}
                slide={slide}
                isMobile={isMobile}
                onClick={handleSlideClick}
              />
            ))}
          </div>
        </div>

        {/* Next Button */}
        {totalPages > 1 && (
          <button
            style={styles.navBtn("right", isMobile)}
            onClick={() => {
              goTo(current + 1);
              resetAuto();
            }}
            aria-label="Next slide"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#667eea";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#333";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ›
          </button>
        )}

        {/* Dots Navigation */}
        {totalPages > 1 && (
          <div style={styles.dotsWrapper}>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                style={styles.dot(i === current)}
                onClick={() => {
                  goTo(i);
                  resetAuto();
                }}
                aria-label={`Go to slide ${i + 1}`}
                onMouseEnter={(e) => {
                  if (i !== current) {
                    e.currentTarget.style.background = "#667eea";
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== current) {
                    e.currentTarget.style.background = "#d0b88a";
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
