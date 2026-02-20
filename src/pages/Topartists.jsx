// import React, { useEffect, useRef, useState } from "react";
// import { FaLinkedinIn } from "react-icons/fa";

// import team1 from "./Teamimage/sidtha.jpeg";
// import team2 from "./Teamimage/mukeshkumar.jpeg";
// import team3 from "./vendorimage/douli.jpeg";
// import team4 from "./vendorimage/sujatajhaa.jpeg";

 

// const leadershipTeamData = [
//   {
//     id: 1,
//     name: "Siddhita Mishra",
//     role: "Folk & Fashion Curator – BIZHAR Heritage",
//     desc:
//       "Siddhita Mishra is a passionate folk artist and creative leader who proudly supports BIZHAR Heritage. Deeply connected to Bihar’s cultural roots, she creates custom folk art and hand-painted wearables that turn tradition into modern style. Through her creativity and support, she actively helps BIZHAR Heritage in preserving, promoting, and reimagining regional art for today’s generation.",
//     image: team1,
//   },
//   {
//     id: 2,
//     name: "Dauli Kumari",
//     role: "Madhubani Artist",
//     desc:
//       "Dauli Kumari is a talented Madhubani artist whose vibrant and detailed paintings celebrate the rich cultural heritage of Bihar. Through her art, she brings traditional stories to life, preserving and promoting the legacy of Indian folk art with BIZHAR Heritage.",
//     image: team3,
//   },
//   {
//     id: 3,
//     name: "Mukesh Kumar",
//     role: "Captain Artisan – Jharkhand",
//     desc:
//       "Mukesh Kumar plays a key role in connecting creation with promotion at BIZHAR Heritage. He leads North Jharkhand artisans, curates campaign media, and ensures every ad reflects the true spirit of our art. He also supports over 100 women Sohrai painters, helping them preserve tradition while enabling sustainable livelihoods through production and sales.",
//     image: team2,
//   },
//   {
//     id: 4,
//     name: "Sujata Jhaa",
//     role: "Madhubani Artist",
//     desc:
//       "Sujata Jhaa is a dedicated Madhubani artist, bringing Bihar’s traditional art to life through her intricate patterns and soulful storytelling. Her work reflects cultural depth, creativity, and a strong commitment to preserving heritage while inspiring modern expression.",
//     image: team4,
//   },
 

// ];




// const MeetOurLeadership = () => {
//   const leadershipRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (leadershipRef.current) observer.observe(leadershipRef.current);
//   }, []);

//   return (
//     <>
//       {/* ===== Internal CSS : UNIQUE CLASS NAMES ===== */}
//       <style>{`
//         .leadership-section-unique {
//           padding: 10px 10px;
//         }

//         .leadership-header-unique {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .leadership-header-unique h2 {
//           font-size: 36px;
//           color: #8b0000;
//           font-weight: 700;
//         }

//         .leadership-list-unique {
//           max-width: 1200px;
//           margin: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 25px;
//         }

//         .leadership-card-unique {
//           display: flex;
//           align-items: center;
//           background: #fefaf0;
//           border-radius: 14px;
//           padding: 20px;
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
//           opacity: 0;
//           transform: translateX(-60px);
//           transition: all 0.8s ease;
//         }

//         .leadership-card-unique.show {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .leadership-card-unique:nth-child(even) {
//           flex-direction: row-reverse;
//         }

//         .leadership-card-unique:nth-child(even) .leadership-content-unique {
//           transform: translateX(60px);
//         }

//         .leadership-card-unique.show:nth-child(even) .leadership-content-unique {
//           transform: translateX(0);
//         }

//         .leadership-image-unique img {
//           width: 220px;
//           height: 280px;
//           background-color: goldenrod;
//           object-fit: cover;
//           border: 4px solid #8b0000;
//         }

//         .leadership-content-unique {
//           padding: 0 20px;
//           transition: transform 0.8s ease;
//         }

//         .leadership-content-unique h3 {
//           font-size: 22px;
//           color: #8b0000;
//           margin-bottom: 4px;
//         }

//         .leadership-content-unique h4 {
//           font-size: 14px;
//           color: #777;
//           margin-bottom: 10px;
//         }

//         .leadership-content-unique p {
//           font-size: 14px;
//           color: #555;
//           line-height: 1.6;
//         }

//         .leadership-social-unique {
//           display: flex;
//           gap: 12px;
//           margin-top: 12px;
//         }

//         .leadership-social-unique a {
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           background: #f2f2f2;
//           color: #333;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 16px;
//           transition: all 0.3s ease;
//         }

//         .leadership-social-unique a:hover {
//           background: #cfa44a;
//           color: #fff;
//           transform: translateY(-3px);
//         }

//         /* ===== Mobile Responsive ===== */
//         @media (max-width: 768px) {
//           .leadership-card-unique,
//           .leadership-card-unique:nth-child(even) {
//             flex-direction: column;
//             text-align: center;
//           }

//           .leadership-content-unique {
//             padding: 15px 0 0;
//           }

//           .leadership-card-unique {
//             transform: translateY(40px);
//           }

//           .leadership-card-unique.show {
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       {/* ===== JSX ===== */}
//       <section ref={leadershipRef} className="leadership-section-unique">
//         <header className="leadership-header-unique">
//           <h2>
//             MEET OUR <span style={{ color: "#000000" }}>LEADERSHIP</span>
//           </h2>
//         </header>

//         <div className="leadership-list-unique">
//           {leadershipTeamData.map((member, index) => (
//             <article
//               key={member.id}
//               className={`leadership-card-unique ${
//                 isVisible ? "show" : ""
//               }`}
//               style={{ transitionDelay: `${index * 0.15}s` }}
//             >
//               <div className="leadership-image-unique">
//                 <img src={member.image} alt={member.name} />
//               </div>

//               <div className="leadership-content-unique">
//                 <h3>{member.name}</h3>
//                 <h4>{member.role}</h4>
//                 <p>{member.desc}</p>

//                 {/* <div className="leadership-social-unique">
//                   <a
//                     href={member.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedinIn />
//                   </a>
//                 </div> */}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default MeetOurLeadership;


// import React, { useEffect, useRef, useState } from "react";

// import team1 from "./Teamimage/sidtha.jpeg";
// import team2 from "./Teamimage/mukeshkumar.jpeg";
// import team3 from "./vendorimage/douli.jpeg";
// import team4 from "./vendorimage/sujatajhaa.jpeg";

// const leadershipTeamData = [
//   {
//     id: 1,
//     name: "Siddhita Mishra",
//     role: "Folk & Fashion Curator – BIZHAR Heritage",
//     desc:
//       "Siddhita Mishra is a passionate folk artist and creative leader who proudly supports BIZHAR Heritage. Deeply connected to Bihar’s cultural roots, she creates custom folk art and hand-painted wearables that turn tradition into modern style. Through her creativity and support, she actively helps BIZHAR Heritage in preserving, promoting, and reimagining regional art for today’s generation.",
//     image: team1,
//   },
//   {
//     id: 2,
//     name: "Dauli Kumari",
//     role: "Madhubani Artist",
//     desc:
//       "Dauli Kumari is a talented Madhubani artist whose vibrant and detailed paintings celebrate the rich cultural heritage of Bihar. Through her art, she brings traditional stories to life, preserving and promoting the legacy of Indian folk art with BIZHAR Heritage.",
//     image: team3,
//   },
//   {
//     id: 3,
//     name: "Mukesh Kumar",
//     role: "Captain Artisan – Jharkhand",
//     desc:
//       "Mukesh Kumar plays a key role in connecting creation with promotion at BIZHAR Heritage. He leads North Jharkhand artisans, curates campaign media, and ensures every ad reflects the true spirit of our art. He also supports over 100 women Sohrai painters, helping them preserve tradition while enabling sustainable livelihoods through production and sales.",
//     image: team2,
//   },
//   {
//     id: 4,
//     name: "Sujata Jhaa",
//     role: "Madhubani Artist",
//     desc:
//       "Sujata Jhaa is a dedicated Madhubani artist, bringing Bihar’s traditional art to life through her intricate patterns and soulful storytelling. Her work reflects cultural depth, creativity, and a strong commitment to preserving heritage while inspiring modern expression.",
//     image: team4,
//   },
// ];

// const MeetOurLeadership = () => {
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
//     <>
//       <style>{`
//         .leadership-section {
//           padding: 20px;
//         }

//         .leadership-title {
//           text-align: center;
//           margin-bottom: 40px;
//         }

//         .leadership-title h2 {
//           font-size: 36px;
//           color: #8b0000;
//         }

//         .leadership-list {
//           max-width: 1200px;
//           margin: auto;
//           display: flex;
//           flex-direction: column;
//           gap: 25px;
//         }

//         .leadership-card {
//           display: flex;
//           align-items: center;
//           background: #fefaf0;
//           border-radius: 14px;
//           padding: 20px;
//           box-shadow: 0 8px 25px rgba(0,0,0,0.08);
//           opacity: 0;
//           transform: translateX(-60px);
//           transition: all 0.8s ease;
//         }

//         .leadership-card.show {
//           opacity: 1;
//           transform: translateX(0);
//         }

//         .leadership-card:nth-child(even) {
//           flex-direction: row-reverse;
//         }

//         .leadership-image img {
//           width: 220px;
//           height: 280px;
//           object-fit: cover;
//           border: 4px solid #8b0000;
//         }

//         .leadership-content {
//           padding: 0 20px;
//         }

//         .leadership-content h3 {
//           color: #8b0000;
//           margin-bottom: 5px;
//         }

//         .leadership-content h4 {
//           color: #777;
//           font-size: 14px;
//           margin-bottom: 10px;
//         }

//         .leadership-content p {
//           font-size: 14px;
//           line-height: 1.6;
//           color: #555;
//         }

//         @media (max-width: 768px) {
//           .leadership-card,
//           .leadership-card:nth-child(even) {
//             flex-direction: column;
//             text-align: center;
//           }

//           .leadership-content {
//             padding: 15px 0 0;
//           }
//         }
//       `}</style>

//       <section ref={sectionRef} className="leadership-section">
//         <div className="leadership-title">
//           <h2>
//             MEET OUR <span style={{ color: "#000" }}>LEADERSHIP</span>
//           </h2>
//         </div>

//         <div className="leadership-list">
//           {leadershipTeamData.map((member, index) => (
//             <div
//               key={member.id}
//               className={`leadership-card ${visible ? "show" : ""}`}
//               style={{ transitionDelay: `${index * 0.15}s` }}
//             >
//               <div className="leadership-image">
//                 <img src={member.image} alt={member.name} />
//               </div>

//               <div className="leadership-content">
//                 <h3>{member.name}</h3>
//                 <h4>{member.role}</h4>
//                 <p>{member.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default MeetOurLeadership;


import React from "react";

import team1 from "./vendorimage/lahanga3.jpeg";
import team2 from "./Teamimage/mukeshkumar.jpeg";
import team3 from "./vendorimage/douli.jpeg";
import team4 from "./vendorimage/sujatajhaa.jpeg";
import team5 from './vendorimage/bhawanjha.jpeg';
import team6 from './vendorimage/spanaM.jpeg';
import team7 from './vendorimage/vidyajhaa.jpeg';
import team8 from './vendorimage/pujaji.jpeg';
import team9 from './vendorimage/priyanka.jpeg';
import team10 from './vendorimage/anupama.jpeg'

const leadershipTeamData = [
  {
    id: 1,
    name: "Ved Prabha ",
    role: "Maithili Painting Artist",
    desc:
      "Ved Prabha is a talented Maithili artist at BiZhar Heritage, known for her beautiful hand-painted designs on kurtas, sarees, lehengas, and more. Her work shows traditional folk patterns, bright colors, and true cultural art, making each piece special and unique.",
    image: team1,
  },
  {
    id: 2,
    name: "Dauli Kumari",
    role: "Madhubani Artist",
    desc:
      "Dauli Kumari is a talented Madhubani artist whose vibrant and detailed paintings celebrate the rich cultural heritage of Bihar. Through her art, she brings traditional stories to life, preserving and promoting the legacy of Indian folk art with BIZHAR Heritage.",
    image: team3,
  },
{
    id: 10,
    name: "Anupam Jha",
    role: " Maithili Painting Artist",
    desc:
      "Anupam Jha is a talented Maithili painting artist and a proud member of BiZhar Heritage. Inspired by traditional Madhubani art, her artworks reflect vibrant colors, fine detailing, and rich cultural heritage",
    image: team10,
  },

  {
    id: 5,
    name: "Bhavna Jha ",
    role: "Mithila & Kohbar Artist",
    desc:
      "Bhavna Jha is a talented Mithila & Kohbar Artist and a proud member of BiZhar Heritage. She creates beautiful handmade Mithila paintings and designs on items like dupattas, phone covers, and home décor. Her work reflects traditional folk art, bright colors, and cultural beauty, making each piece unique and special.",
    image: team5,
  },
  {
    id: 3,
    name: "Mukesh Kumar",
    role: "Captain Artisan – Jharkhand",
    desc:
      "Mukesh Kumar plays a key role in connecting creation with promotion at BIZHAR Heritage. He leads North Jharkhand artisans, curates campaign media, and ensures every ad reflects the true spirit of our art. He also supports over 100 women Sohrai painters, helping them preserve tradition while enabling sustainable livelihoods through production and sales.",
    image: team2,
  },
  {
    id: 6,
    name: "Sapna Kumari",
    role: "Maithili Painting Artist",
    desc:
      "Sapna Kumari is a talented Maithili painting artist and a valued member of BiZhar Heritage. She creates beautiful hand-painted artworks with traditional designs, fine detailing, and vibrant colors. Her work reflects true Maithili culture and the charm of authentic folk art, making every piece unique and attractive.",
    image: team6,
  },
  {
    id: 4,
    name: "Sujata Jhaa",
    role: "Madhubani Artist",
    desc:
      "Sujata Jhaa is a dedicated Madhubani artist, bringing Bihar’s traditional art to life through her intricate patterns and soulful storytelling. Her work reflects cultural depth, creativity, and a strong commitment to preserving heritage while inspiring modern expression.",
    image: team4,
  },
  {
    id: 7,
    name: "Vidya Jha ",
    role: "Mithila Artist ",
    desc:
      "Vidya Jha is a talented artist and a proud member of BiZhar Heritage. She creates beautiful Mithila and Kohbar paintings with fine detailing, traditional patterns, and vibrant colors. Her artwork reflects true Maithili culture and shows the beauty of authentic folk art, making each piece special and eye-catching",
    image: team7,
  },
  {
    id: 8,
    name: "Puja Kumari ",
    role: "Maithili panting Artist ",
    desc:
      "Puja Kumari is a talented Maithili Painting artist and a proud member of BiZhar Heritage. She creates beautiful hand-painted artworks featuring traditional motifs, fine detailing, and vibrant colors.",
    image: team8,
  },
  {
    id: 9,
    name: "PRIYANKA PANDEY ",
    role: " AIPAN ARTIST ",
    desc:
      "Priyanka Pandey is a talented Aipan artist from Uttarakhand, dedicated to preserving this traditional folk art. Aipan is created on शुभ अवसरों using rice paste on a red base, symbolizing purity and positivity.She handcrafts each design with creativity and devotion, blending traditional patterns with modern touches. For her, Aipan is not just art—it is her culture and identity.Through BiZhar Heritage, she continues to promote the beauty of Uttarakhand’s heritage with pride.",
    image: team9,
  },
];

const MeetOurLeadership = () => {
  return (
    <>
      <style>{`
        .leadership-section {
          padding: 20px;
        }

        .leadership-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .leadership-title h2 {
          font-size: 36px;
          color: #8b0000;
        }

        .leadership-list {
          max-width: 1200px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .leadership-card {
          display: flex;
          align-items: center;
          background: #fefaf0;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
        }

        .leadership-card:nth-child(even) {
          flex-direction: row-reverse;
        }

        .leadership-image img {
          width: 220px;
          height: 280px;
          object-fit: cover;
          border: 4px solid #8b0000;
        }

        .leadership-content {
          padding: 0 20px;
        }

        .leadership-content h3 {
          color: #8b0000;
          margin-bottom: 5px;
        }

        .leadership-content h4 {
          color: #777;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .leadership-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
        }

        @media (max-width: 768px) {
          .leadership-card,
          .leadership-card:nth-child(even) {
            flex-direction: column;
            text-align: center;
          }

          .leadership-content {
            padding: 15px 0 0;
          }
        }
      `}</style>

      <section className="leadership-section">
        <div className="leadership-title">
          <h2>
            MEET OUR <span style={{ color: "#000" }}>LEADERSHIP</span>
          </h2>
        </div>

        <div className="leadership-list">
          {leadershipTeamData.map((member) => (
            <div key={member.id} className="leadership-card">
              <div className="leadership-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="leadership-content">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MeetOurLeadership;



