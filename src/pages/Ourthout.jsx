import React, { useEffect, useRef, useState } from "react";
import "./Ourthout.css";


const OurThought = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const thoughts = [
    {
      icon: "🌱",
      text:
        "Many local people create excellent products, but they do not get proper recognition, fair markets, or the right income.",
    },
    {
      icon: "🚜",
      text:
        "We work directly on the ground to help local producers reach the right platforms and customers.",
    },
    {
      icon: "⚖️",
      text:
        "Our aim is to give them fair value, fair prices, and respectful opportunities to grow.",
    },
    {
      icon: "💪",
      text:
        "When local people become strong and self-reliant, the nation grows stronger with them.",
    },
    {
      icon: "🌏",
      text:
        "With the right support, local and regional products from India can succeed in global markets.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`our-thought-wrapper ${visible ? "show" : ""}`}
    >
      {/* OVERLAY */}
      <div className="bg-overlay"></div>

      <div className="thought-inner">
        {/* HEADER */}
        <div className="thought-headernew">
          <h3>Our  <sap style={{color: "#f0c040"}}>Thought</sap></h3>
          <div className="divider">
            <span className="line"></span>
            <span className="icon">🪔</span>
            <span className="line"></span>
          </div>
        </div>

        {/* CARDS */}
        <div className="thought-cards">
          {thoughts.map((item, index) => (
            <div
              className="thought-card"
              style={{ transitionDelay: `${index * 0.12}s` }}
              key={index}
            >
              <div className="thought-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="thought-footer">
          <p className="quote">“The World is One Family”</p>
          <span>— Vasudhaiva Kutumbakam</span>
        </div>
      </div>
    </section>
  );
};

export default OurThought;