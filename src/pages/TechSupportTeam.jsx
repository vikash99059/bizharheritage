import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
// Create a new CSS file for this component: TechSupportTeam.css
import "./TechSupportTeam.css";

// Import your three team member images here
import tech1 from "./Teamimage/bawendrapng.png";   // Replace with your actual image path
import tech2 from "./Teamimage/vikash.png";   // Replace with your actual image path
import tech3 from "./Teamimage/pankaj.png";   // Replace with your actual image path

const techSupportData = [

    {
    id: 3,
    name: "Mr. Bawendra Yandra",
    role: "Chief Technical Officer (CTO)",
    desc: "Bawendra plays a key role in providing technical assistance and maintaining system stability. He focuses on troubleshooting issues, ensuring smooth platform operations, and supporting users with reliable and timely solutions.",
    image: tech1,
    social: {
      linkedin: "https://www.linkedin.com/in/bawendra-yandra/",
    },
  },
  {
    id: 1,
    name: "Pankaj Kumar",
    role: "Java Full-Stack Developer",
    desc: "A highly skilled Java expert with 5+ years of experience, Pankaj specializes in building and maintaining robust backend systems. At BiZhar Heritage, he ensures smooth, secure, and scalable website performance through efficient API development and system architecture.",
    image: tech3,
    social: {
      linkedin: "https://www.linkedin.com/in/pankaj-kumar/",
    },
  },
  {
    id: 2,
    name: "Vikash Kumar",
    role: "Developer & Technical Support – BiZhar Heritage",
    desc: "A creative and user-focused web developer with 2 years of experience, Vikash contributes to frontend development, UI/UX improvements, and technical support. He ensures seamless user experience and assists in resolving real-time platform issues.",
    image: tech2,
    social: {
      linkedin: "https://www.linkedin.com/in/vikash-kumar/",
    },
  },
  
];

const TechSupportTeam = () => {
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
    <section ref={sectionRef} className="tech-support-section" aria-label="Tech & Support Team">
      <div className="tech-support-container">
        <header className="tech-support-header">
          <h2>
            Tech & <span className="tech-highlight">Support Team</span>
          </h2>
          <p className="tech-subtitle">Powering BiZhar Heritage with innovation and care</p>
        </header>

        <div className="tech-support-list">
          {techSupportData.map((member, index) => (
            <article
              key={member.id}
              className={`tech-support-card ${visible ? "tech-show" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="tech-support-image">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
              </div>

              <div className="tech-support-content">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.desc}</p>

                <div className="tech-support-social">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-social-link"
                  >
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

export default TechSupportTeam;