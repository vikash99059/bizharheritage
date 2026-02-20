import React, { useState, useEffect, useRef } from "react";

// ✅ IMPORT IMAGES
import foodImg from "./Biharimage/Litti-chokha.webp";
import festivalImg from "./Biharimage/chat.webp";
import placeImg from "./Biharimage/budh.jpg";
import heritageImg from "./Biharimage/heritagebihra.webp";

const BiharSegments = () => {
  const [active, setActive] = useState(1);
  const [animateCards, setAnimateCards] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      id: 1,
      title: "Famous Food",
      image: foodImg,
      description:
        "Bihar is known for its rich and soulful cuisine such as Litti Chokha, Sattu Paratha, Thekua, and Khaja. These dishes reflect the simplicity, nutrition, and cultural depth of the region.",
    },
    {
      id: 2,
      title: "Festivals",
      image: festivalImg,
      description:
        "Chhath Puja, Sama Chakeva, Sonepur Mela, and Jitiya are the heart of Bihar’s cultural identity. These festivals celebrate nature, devotion, and community bonding.",
    },
    {
      id: 3,
      title: "Best Places",
      image: placeImg,
      description:
        "From the spiritual land of Bodh Gaya to the ancient ruins of Nalanda, Rajgir hills, and Valmiki National Park, Bihar offers a blend of spirituality, history, and nature.",
    },
    {
      id: 4,
      title: "Heritage & History",
      image: heritageImg,
      description:
        "Bihar has been the cradle of civilizations, empires, and religions. It is home to Nalanda University, Vikramshila, Ashokan pillars, and sacred Buddhist and Jain heritage sites.",
    },
  ];

  const handleClick = (id) => {
    setActive(id);
  };

  // ✅ Animate cards when visible
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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section style={styles.page} ref={sectionRef}>
      <div style={styles.container}>
        {/* HEADING */}
        <div style={styles.textSection}>
          <h2 style={styles.heading}>
            <span style={styles.ourText}>Explore</span>{" "}
            <span style={styles.companyText}>Bihar</span>
          </h2>
          <p style={styles.subHeading}>
            Bihar is a land of timeless heritage, spiritual depth, vibrant
            festivals, flavorful cuisine, and historically rich destinations.
            Explore the soul of India through Bihar’s living legacy.
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
                flex:
                  active === item.id ? (isMobile ? 1 : 1.8) : 1,
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

      {/* ANIMATIONS */}
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

export default BiharSegments;
