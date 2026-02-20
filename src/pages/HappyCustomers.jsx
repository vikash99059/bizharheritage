import React, { useState, useEffect } from "react";

// ✅ Import images
import customer1 from "./Biharimage/pngq.png";
import customer2 from "./Biharimage/pngq.png";
import customer3 from "./Biharimage/pngq.png";

const HappyCustomers = () => {
  const reviews = [
    {
      quote:
        "This platform beautifully showcases the heritage of Bihar. I discovered places I never knew existed.",
      name: "Amit Verma",
      place: "Patna, Bihar",
      img: customer1,
    },
    {
      quote:
        "Jharkhand’s culture and traditions are explained so well. Very informative and visually rich website.",
      name: "Sunita Devi",
      place: "Ranchi, Jharkhand",
      img: customer2,
    },
    {
      quote:
        "A perfect digital effort to preserve Bihar–Jharkhand heritage. Loved the storytelling approach.",
      name: "Rohit Singh",
      place: "Gaya, Bihar",
      img: customer3,
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // auto slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  // screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      {/* ===== Heading Section ===== */}
      <div style={styles.headingWrap}>
        <h2 style={styles.heading}>
          What Our <span style={styles.highlight}>Happy Customers</span> Say
        </h2>
        <p style={styles.subHeading}>
          Real stories from people who experienced our heritage platform
        </p>
      </div>

      {/* ===== Slider ===== */}
      <div style={styles.sliderWrapper}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {reviews.map((item, i) => (
            <div
              key={i}
              style={{
                ...styles.slide,
                flexDirection: isMobile ? "column-reverse" : "row",
                textAlign: isMobile ? "center" : "left",
                padding: isMobile ? "20px" : "40px",
              }}
            >
              <div style={styles.textBox}>
                <div style={styles.rating}>★★★★★</div>
                <div style={styles.quoteIcon}>❝</div>

                <p
                  style={{
                    ...styles.quote,
                    fontSize: isMobile ? "14px" : "22px",
                  }}
                >
                  {item.quote}
                </p>

                <p
                  style={{
                    ...styles.name,
                    fontSize: isMobile ? "16px" : "20px",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    ...styles.place,
                    fontSize: isMobile ? "13px" : "16px",
                  }}
                >
                  {item.place}
                </p>
              </div>

              <div style={styles.imageBox}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    ...styles.img,
                    width: isMobile ? "140px" : "240px",
                    height: isMobile ? "140px" : "240px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Controls ===== */}
      <div style={styles.controls}>
        <button onClick={prev} style={styles.btn}>
          ←
        </button>
        <button onClick={next} style={styles.btn}>
          →
        </button>
      </div>
    </div>
  );
};

export default HappyCustomers;



/* ================= STYLES ================= */

const styles = {
  container: {
    width: "100%",
    padding: "40px 12px",
    boxSizing: "border-box",
    overflow: "hidden",
  },

  /* Heading Center */
  headingWrap: {
    textAlign: "center",
    marginBottom: "35px",
  },

  heading: {
    fontSize: "clamp(26px, 4vw, 42px)",
    fontWeight: "800",
    color: "#1a1a1a",
    marginBottom: "8px",
  },

  highlight: {
    background: "linear-gradient(90deg, #860000, #a60000)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subHeading: {
    fontSize: "clamp(15px, 2vw, 18px)",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
  },

  sliderWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    overflow: "hidden",
    borderRadius: "12px",
    backgroundImage: "url('/image/OURPEOPLE.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  slider: {
    display: "flex",
    transition: "transform 0.8s ease-in-out",
  },

  slide: {
    minWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    background: "#8b0000",
    boxSizing: "border-box",
  },

  textBox: {
    flex: 1,
  },

  rating: {
    color: "#FACC15",
    fontSize: "18px",
    letterSpacing: "2px",
    marginBottom: "6px",
  },

  quoteIcon: {
    fontSize: "42px",
    color: "#FACC15",
    marginBottom: "8px",
  },

  quote: {
    color: "white",
    lineHeight: "1.6",
    marginBottom: "15px",
  },

  name: {
    fontWeight: "700",
    color: "white",
  },

  place: {
    color: "white",
  },

  imageBox: {
    display: "flex",
    justifyContent: "center",
  },

  img: {
    objectFit: "cover",
    borderRadius: "0px 20px 0px 20px",
    border: "2px solid #FACC15",
  },

  controls: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  btn: {
    background: "transparent",
    border: "2px solid #8b0000",
    color: "#8b0000",
    fontSize: "18px",
    padding: "6px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
