import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import "./NewAbout.css";

import team1 from "./Teamimage/ompathak.png";
import team2 from "./Teamimage/Koushlsingh.png";
import team3 from "./vendorimage/founder.jpeg";
import team4 from "./vendorimage/deepeak.jpeg";   

const teamData = [

{
    id: 3,
    name: "Rashmi Gahlot",
    role: "Co-founder, BiZhar Heritage",
    desc: "Rashmi Gahlot supports the vision of BiZhar Heritage by helping in coordination and strengthening the mission of connecting and promoting traditional artists and handicrafts across India.",
    image: team3,
    social: {
      linkedin: "https://www.linkedin.com/in/prachi-mishra-5418973a9/",
    },
  },

  {
    id: 1,
    name: "Om Pathak",
    role: "Founder, BiZhar Heritage",
    desc: "A social entrepreneur at heart, he created this venture to connect local artisans with commercial markets.",
    image: team1,
    social: {
      linkedin: "https://www.linkedin.com/in/om-pathak-813b3816b/",
    },
  },
  {
    id: 2,
    name: "Kaushal Singh",
    role: "Founder, BiZhar Heritage",
    desc: "An engineering graduate with over 8 years of leadership experience, he is the visionary behind BiZhar Heritage. He aims to bring forward hidden local talents and empower underprivileged communities.",
    image: team2,
    social: {
      linkedin: "https://www.linkedin.com/in/kaushal-kumar-singh-5562b91a0/",
    },
  },
  
  {
    id: 4,
    name: "Deepak Kumar",
    role: "Head of Operations & Finance",
    desc: "Head of Business Development, Operations & FinanceDeepak Kumar leads business growth, operations, and financial planning at BiZhar Heritage ",
    image: team4,
    social: {
      linkedin: "https://www.linkedin.com/in/prachi-mishra-5418973a9/",
    },
  },
];

const MeetTheTeam = () => {
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
    <section ref={sectionRef} className="team-section" aria-label="Meet Our Team">
      <div className="team-container">
        <header className="team-header">
          <h2>
            Meet our <span className="highlight">Founders</span>
          </h2>
          {/* <p className="subtitle">The visionaries behind BiZhar Heritage</p> */}
        </header>

        <div className="team-list">
          {teamData.map((member, index) => (
            <article
              key={member.id}
              className={`team-card ${visible ? "show" : ""}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="team-image">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                />
              </div>

              <div className="team-content">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.desc}</p>

                <div className="team-social">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .team-section {
          width: 100%;
          padding: 20px 20px;
          background: linear-gradient(135deg, #fef9f0 0%, #fff5e8 100%);
          overflow-x: hidden;
        }

        .team-container {
          max-width: 1450px;
          margin: 0 auto;
        }

        .team-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .team-header h2 {
          font-size: 42px;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: #333;
          font-family: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
        }

        .highlight {
          color: #eaae5e;
          position: relative;
          display: inline-block;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 3px;
          background: #eaae5e;
          border-radius: 2px;
        }

        .subtitle {
          font-size: 18px;
          color: #666;
          margin-top: 20px;
          font-weight: 400;
        }

        .team-list {
          display: flex;
          justify-content: center;
          gap: 26px;
          flex-wrap: wrap;
        }

        .team-card {
          flex: 1;
          min-width: 280px;
          max-width: 350px;
          flex-direction: column; 
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
          cursor: pointer;
          text-align: center;
          padding: 30px 25px 35px 25px;
        }

        .team-card.show {
          opacity: 1;
          transform: translateY(0);
          flex-direction: column; 
        }

        .team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .team-image {
          position: relative;
          width: 180px;
          height: 180px;
          margin: 0 auto 20px auto;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #eaae5e, #d4943e);
          padding: 3px;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          transition: transform 0.5s ease;
          background: white;
        }

        .team-card:hover .team-image img {
          transform: scale(1.05);
        }

        .team-content {
          text-align: center;
        }

        .team-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #222;
        }

        .team-content h4 {
          font-size: 14px;
          font-weight: 600;
          color: #eaae5e;
          margin: 0 0 15px 0;
          letter-spacing: 0.5px;
        }

        .team-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin: 0 0 20px 0;
        }

        .team-social {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f5f5f5;
          color: #333;
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 18px;
        }

        .social-link:hover {
          background: #eaae5e;
          color: white;
          transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .team-list {
            gap: 30px;
          }
          
          .team-card {
            min-width: 280px;
            padding: 25px 20px 30px 20px;
          }
          
          .team-image {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 900px) {
          .team-list {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .team-card {
            flex: 0 0 calc(50% - 20px);
            max-width: 320px;
          }
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 50px 15px;
          }

          .team-header h2 {
            font-size: 32px;
          }

          .subtitle {
            font-size: 16px;
          }

          .team-list {
            gap: 25px;
          }

          .team-card {
            flex: 0 0 100%;
            max-width: 350px;
            padding: 25px 20px 30px 20px;
          }

          .team-image {
            width: 150px;
            height: 150px;
          }

          .team-content h3 {
            font-size: 20px;
          }

          .team-content h4 {
            font-size: 13px;
          }

          .team-content p {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding: 40px 12px;
          }

          .team-header h2 {
            font-size: 28px;
          }

          .team-header {
            margin-bottom: 40px;
          }

          .team-image {
            width: 130px;
            height: 130px;
          }

          .team-content {
            padding: 0;
          }

          .team-content h3 {
            font-size: 18px;
          }
          
          .team-content h4 {
            font-size: 12px;
          }
          
          .team-content p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default MeetTheTeam;