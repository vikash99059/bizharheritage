import React, { useState, useEffect, useRef } from "react";

// ✅ IMPORT IMAGES (Jharkhand related)
import foodImg from "./Biharimage/duska.webp";
import festivalImg from "./Biharimage/OIP.webp";
import placeImg from "./Biharimage/hundru.jpg";
import heritageImg from "./Biharimage/tribal.jpg";

const JharkhandSegments = () => {
  const [active, setActive] = useState(1);
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Jharkhand Data
  const data = [
    {
      id: 1,
      title: "Traditional Food",
      image: foodImg,
      description:
        "Jharkhand’s cuisine reflects its tribal roots and simplicity. Famous dishes include Dhuska, Chilka Roti, Rugra, Bamboo Shoot curry, and Handia, which are deeply connected to nature and local traditions.",
    },
    {
      id: 2,
      title: "Festivals & Culture",
      image: festivalImg,
      description:
        "Sarhul, Karma, Sohrai, Tusu, and Mage Parab are major festivals of Jharkhand. These celebrations honor nature, harvest, and tribal deities, showcasing vibrant dances, music, and rituals.",
    },
    {
      id: 3,
      title: "Natural Places",
      image: placeImg,
      description:
        "Jharkhand is blessed with stunning natural beauty such as Hundru Falls, Dassam Falls, Netarhat, Betla National Park, and Parasnath Hill, offering a perfect blend of hills, forests, and waterfalls.",
    },
    {
      id: 4,
      title: "Tribal Heritage",
      image: heritageImg,
      description:
        "Known as the heartland of tribal India, Jharkhand is home to rich indigenous cultures including Santhal, Munda, Oraon, and Ho tribes, preserving ancient traditions, art forms, and community values.",
    },
  ];

  const handleClick = (id) => {
    setActive(id);
  };

  // ✅ Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimateCards(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section style={styles.page} ref={sectionRef}>
      <div style={styles.container}>
        {/* HEADING */}
        <div style={styles.textSection}>
          <h2 style={styles.heading}>
            <span style={styles.ourText}>Explore</span>{" "}
            <span style={styles.companyText}>Jharkhand</span>
          </h2>
          <p style={styles.subHeading}>
            Jharkhand is a land of dense forests, majestic waterfalls, vibrant
            tribal culture, and spiritual landscapes. Experience nature,
            heritage, and tradition in their purest form.
          </p>
        </div>

        {/* CARDS */}
        <div style={styles.cardContainer(isMobile)}>
          {data.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              style={{
                ...styles.card,
                flex: active === item.id ? (isMobile ? 1 : 1.8) : 1,
                backgroundImage: `url(${item.image})`,
                animation: animateCards
                  ? `slideUp 0.6s ease forwards ${index * 0.2}s`
                  : "none",
              }}
            >
              <div
                style={{
                  ...styles.overlay,
                  background:
                    active === item.id
                      ? "rgba(0,0,0,0.75)"
                      : "rgba(0,0,0,0.45)",
                }}
              >
                <h3 style={styles.cardTitle}>{item.title}</h3>
                {active === item.id && (
                  <p style={styles.description}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

const styles = {
  page: {
    width: "100%",
    background: "#fefaf0",
    padding: "45px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "auto",
  },
  textSection: {
    textAlign: "center",
    marginBottom: "40px",
  },
  heading: {
    fontSize: "clamp(28px, 5vw, 36px)",
    fontWeight: "700",
  },
  ourText: {
    color: "#8b0000",
  },
  companyText: {
    color: "black",
  },
  subHeading: {
    maxWidth: "900px",
    margin: "15px auto",
    fontSize: "clamp(15px, 3vw, 18px)",
    lineHeight: "1.7",
    color: "#333",
  },
  cardContainer: (isMobile) => ({
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    flexDirection: isMobile ? "column" : "row",
  }),
  card: {
    height: "420px",
    borderRadius: "14px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    overflow: "hidden",
    transition: "flex 0.6s ease",
    display: "flex",
  },
  overlay: {
    width: "100%",
    padding: "25px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transition: "all 0.5s ease",
  },
  cardTitle: {
    fontSize: "clamp(18px, 4vw, 24px)",
    fontWeight: "700",
    marginBottom: "12px",
  },
  description: {
    fontSize: "clamp(14px, 3vw, 16px)",
    lineHeight: "1.6",
    animation: "slideUp 0.4s ease",
    textAlign: "justify",
  },
};

export default JharkhandSegments;
