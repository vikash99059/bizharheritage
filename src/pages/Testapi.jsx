import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import "./Testapi.css";

import member1 from "./vendorimage/rahul.jpeg";
 import member2 from "./vendorimage/deepeak.jpeg";  

const salesTeamData = [
  {
    id: 1,
    name: "Rahul Jaiswal",
    role: "Head Sales Advisor – BiZhar Heritage",
    desc: "Driving strategic sales growth, building strong client relationships, and expanding the reach of Indian art through BiZhar Heritage.",
    image: member1,
    social: {
      linkedin: "https://www.linkedin.com/in/rahul-jaiswal-3229011bb/",
    },
  },
  {
    id: 2,
    name: "Deepak Kumar",
    role: "Head of Operations & Finance",
    desc: "Leads business growth, operations, and financial planning at BiZhar Heritage with a focus on scalable systems and efficiency.",
    image: member2,
    social: {
      linkedin: "https://www.linkedin.com/in/deepak-kumar-5418973a9/",
    },
  },
];

const SalesTeamSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="sales-team-section">
      <div className="sales-team-container">
        <header className="sales-team-header">
          <h2>
          Business Growth  <span className="sales-highlight">Squad </span>
          </h2>
        </header>

        <div className="sales-team-list">
          {salesTeamData.map((member, index) => (
            <article
              key={member.id}
              className={`sales-card ${visible ? "sales-show" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="sales-image-wrap">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="sales-content">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.desc}</p>

                <div className="sales-social">
                  <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesTeamSection;
