import React, { useEffect, useState } from "react";
// import "./Ourgroingteam.css";

const teamData = [
  {
    name: "Piyush Mishra",
    role: "Youth Icon - BiZhar Heritage",
    rating: 5
  },
  {
    name: "Divya Prakash Pathak",
    role: "Brand Promotion - BiZhar Heritage",
    rating: 4
  },
  {
    name: "Deepak Kumar",
    role: "Brand Promotion - BiZhar Heritage",
    rating: 4
  },
  {
    name: "Sumit Saxena",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 5
  },
  {
    name: "Abhishek Kumar",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 4
  },
  {
    name: "Aparna Aacharya",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 3
  },
  {
    name: "Himanshu Mishra",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 3
  },
  {
    name: "Sukriti Singh Rajput",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 5
  }
];

export default function OurGrowingTeam() {
  // Duplicate array for seamless infinite scrolling
  const duplicatedTeam = [...teamData, ...teamData, ...teamData];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <div className="team-wrapper">
      <div className="team-container">
        <h2 className="team-heading">
          <span style={{ color: "#333" }}>Our </span>
          <span style={{ color: "#eaae5e" }}>Growing Team</span>
        </h2>

        {/* Single Row - Continuous Auto Scrolling like Train */}
        <div className="marquee-row">
          <div className="marquee-wrapper scroll-left">
            <div className="marquee-content">
              {duplicatedTeam.map((member, idx) => (
                <div key={`team-${idx}`} className="marquee-card">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <div className="rating">
                    {renderStars(member.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .team-wrapper {
          width: 100%;
          padding: 40px 20px;
          overflow-x: hidden;
          display: flex;
          justify-content: center;
        }

        .team-container {
          max-width: 1375px;
          width: 100%;
          margin: 0 auto;
        }

        .team-heading {
          text-align: center;
          font-size: 32px;
          font-weight: 700;
          // margin-bottom: 40px;
          font-family: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif';
        }

        /* Marquee Styles */
        .marquee-row {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          gap: 25px;
          width: max-content;
          padding: 10px;
        }

        /* Left to right continuous animation */
        .scroll-left .marquee-content {
          animation: scrollLeft 25s linear infinite;
        }

        /* Pause animation on hover */
        .marquee-wrapper:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        /* Card styling - only name and designation */
        .marquee-card {
          background: #fff;
          padding: 18px 28px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          text-align: center;
          min-width: 220px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .marquee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          background: #fffaf5;
        }

        .member-name {
          margin: 0 0 6px 0;
          font-size: 18px;
          font-weight: 600;
          color: #222;
        }

        .member-role {
          margin: 0 0 10px 0;
          font-size: 13px;
          color: #eaae5e;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Rating Stars */
        .rating {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-top: 8px;
        }

        .star {
          font-size: 16px;
          color: #ddd;
          transition: color 0.2s ease;
        }

        .star.filled {
          color: #ffc107;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .team-container {
            max-width: 1140px;
          }
        }

        @media (max-width: 992px) {
          .team-wrapper {
            padding: 35px 15px;
          }
          
          .team-heading {
            font-size: 28px;
            margin-bottom: 35px;
          }
          
          .marquee-card {
            padding: 14px 22px;
            min-width: 200px;
          }
          
          .member-name {
            font-size: 16px;
          }
          
          .member-role {
            font-size: 12px;
          }

          .star {
            font-size: 14px;
          }
          
          .scroll-left .marquee-content {
            animation-duration: 20s;
          }
        }

        @media (max-width: 768px) {
          .team-wrapper {
            padding: 30px 15px;
          }
          
          .team-heading {
            font-size: 24px;
            margin-bottom: 30px;
          }
          
          .marquee-card {
            padding: 12px 18px;
            min-width: 180px;
          }
          
          .member-name {
            font-size: 14px;
            margin-bottom: 5px;
          }
          
          .member-role {
            font-size: 11px;
            margin-bottom: 8px;
          }

          .star {
            font-size: 12px;
          }
          
          .scroll-left .marquee-content {
            animation-duration: 18s;
          }
        }

        @media (max-width: 480px) {
          .team-wrapper {
            padding: 25px 12px;
          }
          
          .team-heading {
            font-size: 22px;
            margin-bottom: 25px;
          }
          
          .marquee-card {
            padding: 10px 14px;
            min-width: 160px;
          }
          
          .member-name {
            font-size: 13px;
            margin-bottom: 4px;
          }
          
          .member-role {
            font-size: 10px;
            margin-bottom: 6px;
          }

          .star {
            font-size: 10px;
            gap: 2px;
          }
          
          .scroll-left .marquee-content {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  );
}