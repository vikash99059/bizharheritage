// import React from 'react';
// import './Teamcomponanat.css';
// import dedication from './Teamimage/nporu.png'

// const TeamComponent = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Om Kumar Pathak",
//       role: "Founder, Bizhar Heritage",
//       description: "I stand at the intersection of commerce and culture. At BiZhar Heritage, we connect rural artisans to modern India—empowering craftsmen today to fund the education of underprivileged children tomorrow.",
//       image: "om.jpg",
//       smallImage: "om-small.jpg",
//       icon: "fas fa-lightbulb"
//     },
//     {
//       id: 2,
//       name: "Kaushal Kumar Singh",
//       role: "Founder, Bizhar Heritage",
//       description: "Kaushal Kumar Singh, an engineering graduate with over 8 years of leadership experience, is the visionary behind Bizhar Heritage. He aims to bring forward hidden local talents and empower underprivileged communities. His vision also includes opening orphanages to support and educate children in need.",
//       image: "kaushal.jpg",
//       smallImage: "kaushal-small.jpg",
//       icon: "fas fa-rocket"
//     },
//     {
//       id: 3,
//       name: "Vikash Kumar",
//       role: "Developer",
//      description: "A user-friendly and creative web developer with 2 years of experience, contributing to the development and technical implementation of the Bizharheritage website.",

//       image: "vikash.jpg",
//       smallImage: "vikash-small.jpg",
//       icon: "fas fa-code"
//     },
//     {
//       id: 4,
//       name: "Ranjan Mishra",
//       role: "Java Expert",
//       description: "Java expert with 5+ years of experience, building and maintaining Bizhar Heritage robust backend to ensure smooth and reliable website performance.",
//       image: "ranjan.jpg",
//       smallImage: "ranjan-small.jpg",
//       icon: "fas fa-cogs"
//     },
//     {
//       id: 4,
//       name: "Pankaj Kumar",
//       role: "Java Full-Stack",
//       description: "Java expert with 5+ years of experience, building and maintaining Bizhar Heritage robust backend to ensure smooth and reliable website performance.",
//       image: "ranjan.jpg",
//       smallImage: "ranjan-small.jpg",
//       icon: "fas fa-cogs"
//     }
//   ];

//   return (
//     <div className="team-container-2024">
//       {/* Dedication Section */}
//       <div className="dedication-section-2024">
//         <div className="dedication-content-2024">
//           <h2 className="dedication-title-2024">Dedication</h2>
//           <div className="dedication-text-2024">
//             <p className="dedication-name-2024">Dedicated to Noopur Mishra</p>
//             <p className="dedication-message-2024">
//               With love and gratitude to my little sister, whose passion for culture has helped shape
//               the very essence of Bizhar Heritage and made this journey truly special.
//             </p>
//           </div>
//         </div>

//         {/* Optional dedication image on right side */}
//         <div className="dedication-image-2024">
//           <div className="image-placeholder-2024">
//             <img
//               src={dedication}
//               alt="Dedication"
//               className="dedication-image"
//             />
//           </div>

//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="team-section-2024">
//         <h2 className="team-title-2024">Team Behind  <span style={{ color: "#8b0000" }}>the Vision</span></h2>

//         {teamMembers.map((member) => (
//           <div className="team-member-card-2024" key={member.id}>
//             {/* Mobile Header - Circle image at top-left for mobile/tablet */}
//             <div className="member-header-mobile-2024">
//               <div className="circle-image-mobile-2024">
//                 {/* <i className={member.icon}></i> */}
//                 {/* In real app: <img src={member.smallImage} alt={member.name} /> */}
//               </div>
//               <div className="member-title-mobile-2024">
//                 <h3 className="member-name-mobile-2024">{member.name}</h3>
//                 <p className="member-role-mobile-2024">{member.role}</p>
//               </div>
//             </div>

//             {/* Desktop Header - Circle image on left for desktop */}
//             <div className="member-header-desktop-2024">
//               <div className="circle-image-desktop-2024">
//                 {/* <i className={member.icon}></i> */}
//                 {/* In real app: <img src={member.smallImage} alt={member.name} /> */}
//               </div>
//             </div>

//             {/* Main content */}
//             <div className="member-content-mobile-2024">
//               {/* Desktop titles (only shown on desktop) */}
//               <div className="member-title-desktop-2024">
//                 <h3 className="member-name-desktop-2024">{member.name}</h3>
//                 <p className="member-role-desktop-2024">{member.role}</p>
//               </div>

//               <p className="member-description-mobile-2024">{member.description}</p>

//               <div className="member-large-image-mobile-2024">

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamComponent;


// import React, { useEffect, useRef, useState } from "react";
// import "./NewAbout.css";

// import team1 from "./Teamimage/ompathak.png";
// import team2 from "./Teamimage/Koushlsingh.png";
// import team3 from "./Teamimage/prachipng.png";
// import team4 from "./Teamimage/vikash.png";
// import team5 from "./Teamimage/pankaj.png";

// const teamData = [
//   {
//     id: 1,
//     name: "Om Pathak",
//     role: "Founder, BiZhar Heritage",
//     desc: "A social entrepreneur at heart, he created this venture to connect local artisans with commercial markets.",
//     image: team1,
//   },
//   {
//     id: 2,
//     name: "Kaushal Singh",
//     role: "Founder, BiZhar Heritage",
//     desc: "An engineering graduate with over 8 years of leadership experience, he is the visionary behind BiZhar Heritage. He aims to bring forward hidden local talents and empower underprivileged communities, including opening orphanages to support children in need.",
//     image: team2,
//   },
//   {
//     id: 3,
//     name: "Prachi Mishra",
//     role: "Artist Outreach & Promotion – BiZhar Heritage",
//     desc: "Prachi personally visits artists across Jharkhand to connect with them and introduce them to BiZhar Heritage. A talented painter and craft artist herself, she brings creativity, experience, and a deep understanding of artists to the platform.",
//     image: team3,
//   },
//   {
//     id: 4,
//     name: "Vikash Kumar",
//     role: "Developer & Technical Support – BiZhar Heritage",
//     desc: "A user-friendly and creative web developer with 2 years of experience, contributing to the development and technical implementation of the BiZhar Heritage website.",
//     image: team4,
//   },
//   {
//     id: 5,
//     name: "Pankaj Kumar",
//     role: "Java Full-Stack Developer",
//     desc: "Java expert with 5+ years of experience, building and maintaining BiZhar Heritage’s robust backend to ensure smooth and reliable website performance.",
//     image: team5,
//   },
// ];

// const MeetTheTeam = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="team-section"
//       aria-label="Meet Our Team"
//     >
//       <header className="team-header">
//         <h2>Team Behind the <span style={{color:"black"}}>Vision</span> </h2>
//         <p>Our experienced professionals</p>
//       </header>

//       <div className="team-list">
//         {teamData.map((member, index) => (
//           <article
//             key={member.id}
//             className={`team-card ${visible ? "show" : ""}`}
//             style={{ transitionDelay: `${index * 0.15}s` }}
//           >
//             <div className="team-image">
//               <img
//                 src={member.image}
//                 alt={`${member.name} - ${member.role}`}
//                 loading="lazy"
//               />
//             </div>

//             <div className="team-content">
//               <h3>{member.name}</h3>
//               <h4>{member.role}</h4>
//               <p>{member.desc}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MeetTheTeam;


import React, { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import "./NewAbout.css";

import team1 from "./Teamimage/ompathak.png";
import team2 from "./Teamimage/Koushlsingh.png";
import team3 from "./Teamimage/pr.png";
import team4 from "./Teamimage/vikash.png";
import team5 from "./Teamimage/pankaj.png";


const teamData = [
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
    desc: "An engineering graduate with over 8 years of leadership experience, he is the visionary behind BiZhar Heritage. He aims to bring forward hidden local talents and empower underprivileged communities, including opening orphanages to support children in need",
    image: team2,
    social: {
      linkedin: "https://www.linkedin.com/in/kaushal-kumar-singh-5562b91a0/",
 
    },
  },
  {
    id: 3,
    name: "Prachi Mishra",
    role: "Artist Outreach & Promotion – BiZhar Heritage",
    desc: "Prachi personally visits artists across Jharkhand to connect with them and introduce them to BiZhar Heritage. A talented painter and craft artist herself, she brings creativity, experience, and a deep understanding of artists to the platform",
    image: team3,
    social: {
      linkedin: "https://www.linkedin.com/in/prachi-mishra-5418973a9/",
     
    },
  },
  {
    id: 4,
    name: "Vikash Kumar",
    role: "Developer & Technical Support – BiZhar Heritage",
    desc: "A user-friendly and creative web developer with 2 years of experience, contributing to the development and technical implementation of the BiZhar Heritage website",
    image: team4,
    social: {
      linkedin: "https://www.linkedin.com/in/vikash-kumar-5a7b40321/",
    
    },
  },
  {
    id: 5,
    name: "Pankaj Kumar",
    role: "Java Full-Stack Developer",
    desc: "Java expert with 5+ years of experience, building and maintaining BiZhar Heritage’s robust backend to ensure smooth and reliable website performance",
    image: team5,
    social: {
      linkedin: "https://www.linkedin.com/in/pankaj-kumar-50a958109/",
    
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
    <section
      ref={sectionRef}
      className="team-section"
      aria-label="Meet Our Team"
    >
      <header className="team-header">
        <h2>Team Behind the <span style={{color:"black"}}>Vision</span> </h2>
        <p>Our experienced professionals</p>
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
    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
  
  </div>
</div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
