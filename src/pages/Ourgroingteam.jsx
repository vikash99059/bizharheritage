import React, { useEffect, useState } from "react";
import "./Ourgroingteam.css";
import bgImage from "./Biharimage/clutureexprience.jpeg";

const teamData = [
  {
    name: "Piyush Mishra",
    role: "Youth Icon - BiZhar Heritage",
    rating: 5,
    desc: "Engaged in mango farming and owns a mango orchard with an annual production of around 1 lakh mangoes, representing rural entrepreneurship and youth involvement in agriculture."
  },
  {
    name: "Divya Prakash Pathak",
    role: "Brand Promotion - BiZhar Heritage",
    rating: 4,
    desc: "Working on brand promotion and outreach activities to increase brand visibility and spread the cultural identity of Bihar and Jharkhand."
  },
  {
    name: "Deepak Kumar",
    role: "Brand Promotion - BiZhar Heritage",
    rating: 4,
    desc: "Handles order management for T-shirt and clothing printing, ensuring smooth coordination, timely processing, and quality delivery."
  },
  {
    name: "Sumit Saxena",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 5,
    desc: "Responsible for ground-level marketing activities, focusing on on-field promotion and local outreach."
  },
  {
    name: "Abhishek Kumar",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 4,
    desc: "Handles social media outreach by sharing links and information to increase awareness and reach for BiZhar Heritage."
  },
  {
    name: "Aparna Aacharya",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 3,
    desc: "Aparna Aacharya will create videos and reels for BiZhar Heritage. She is also a model herself, bringing creativity and style to all content she produces for the platform."
  },
  {
    name: "Himanshu Mishra",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 3,
    desc: "Himanshu Mishra actively supports BiZhar Heritage by promoting Indian culture and craft, connecting with artisans, and spreading awareness about traditional art and heritage."
  },
  {
    name: "Sukriti Singh Rajput ",
    role: "Ground-Level Marketing - BiZhar Heritage",
    rating: 5,
    desc: "Sukriti Singh Rajput will engage with artists creating Maithili paintings and coordinate with them, ensuring smooth communication and collaboration with everyone involved.."
  }
];


export default function OurGrowingTeam() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className="team-wrapper"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url(${bgImage})
    `
  }}
>

      <h2 className="team-heading">Our Growing Team</h2>

      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {teamData.map((member, i) => (
            <div className="slider-card" key={i}>
              <h3>{member.name}</h3>
              <span className="role">{member.role}</span>

              <div className="rating">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className={j < member.rating ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="dots">
        {teamData.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
