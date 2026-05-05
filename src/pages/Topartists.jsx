


// import React from "react";

// import team1 from "./vendorimage/lahanga3.jpeg";
// import team2 from "./Teamimage/mukeshkumar.jpeg";
// import team3 from "./vendorimage/douli.jpeg";
// import team4 from "./vendorimage/sujatajhaa.jpeg";
// import team5 from './vendorimage/bhawanjha.jpeg';
// import team6 from './vendorimage/spanaM.jpeg';
// import team7 from './vendorimage/vidyajhaa.jpeg';
// import team8 from './vendorimage/pujaji.jpeg';
// import team9 from './vendorimage/priyanka.jpeg';
// import team10 from './vendorimage/anupama.jpeg'

// const leadershipTeamData = [
//   {
//     id: 1,
//     name: "Ved Prabha ",
//     role: "Maithili Painting Artist",
//     desc:
//       "Ved Prabha is a talented Maithili artist at BiZhar Heritage, known for her beautiful hand-painted designs on kurtas, sarees, lehengas, and more. Her work shows traditional folk patterns, bright colors, and true cultural art, making each piece special and unique.",
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
// {
//     id: 10,
//     name: "Anupam Jha",
//     role: " Maithili Painting Artist",
//     desc:
//       "Anupam Jha is a talented Maithili painting artist and a proud member of BiZhar Heritage. Inspired by traditional Madhubani art, her artworks reflect vibrant colors, fine detailing, and rich cultural heritage",
//     image: team10,
//   },

//   {
//     id: 5,
//     name: "Bhavna Jha ",
//     role: "Mithila & Kohbar Artist",
//     desc:
//       "Bhavna Jha is a talented Mithila & Kohbar Artist and a proud member of BiZhar Heritage. She creates beautiful handmade Mithila paintings and designs on items like dupattas, phone covers, and home décor. Her work reflects traditional folk art, bright colors, and cultural beauty, making each piece unique and special.",
//     image: team5,
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
//     id: 6,
//     name: "Sapna Kumari",
//     role: "Maithili Painting Artist",
//     desc:
//       "Sapna Kumari is a talented Maithili painting artist and a valued member of BiZhar Heritage. She creates beautiful hand-painted artworks with traditional designs, fine detailing, and vibrant colors. Her work reflects true Maithili culture and the charm of authentic folk art, making every piece unique and attractive.",
//     image: team6,
//   },
//   {
//     id: 4,
//     name: "Sujata Jhaa",
//     role: "Madhubani Artist",
//     desc:
//       "Sujata Jhaa is a dedicated Madhubani artist, bringing Bihar’s traditional art to life through her intricate patterns and soulful storytelling. Her work reflects cultural depth, creativity, and a strong commitment to preserving heritage while inspiring modern expression.",
//     image: team4,
//   },
//   {
//     id: 7,
//     name: "Vidya Jha ",
//     role: "Mithila Artist ",
//     desc:
//       "Vidya Jha is a talented artist and a proud member of BiZhar Heritage. She creates beautiful Mithila and Kohbar paintings with fine detailing, traditional patterns, and vibrant colors. Her artwork reflects true Maithili culture and shows the beauty of authentic folk art, making each piece special and eye-catching",
//     image: team7,
//   },
//   {
//     id: 8,
//     name: "Puja Kumari ",
//     role: "Maithili panting Artist ",
//     desc:
//       "Puja Kumari is a talented Maithili Painting artist and a proud member of BiZhar Heritage. She creates beautiful hand-painted artworks featuring traditional motifs, fine detailing, and vibrant colors.",
//     image: team8,
//   },
//   {
//     id: 9,
//     name: "PRIYANKA PANDEY ",
//     role: " AIPAN ARTIST ",
//     desc:
//       "Priyanka Pandey is a talented Aipan artist from Uttarakhand, dedicated to preserving this traditional folk art. Aipan is created on शुभ अवसरों using rice paste on a red base, symbolizing purity and positivity.She handcrafts each design with creativity and devotion, blending traditional patterns with modern touches. For her, Aipan is not just art—it is her culture and identity.Through BiZhar Heritage, she continues to promote the beauty of Uttarakhand’s heritage with pride.",
//     image: team9,
//   },
// ];

// const MeetOurLeadership = () => {
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

//       <section className="leadership-section">
//         <div className="leadership-title">
//           <h2>
//             MEET OUR <span style={{ color: "#000" }}>LEADERSHIP</span>
//           </h2>
//         </div>

//         <div className="leadership-list">
//           {leadershipTeamData.map((member) => (
//             <div key={member.id} className="leadership-card">
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






// import React from "react";

// import team1 from "./vendorimage/lahanga3.jpeg";
// import team2 from "./Teamimage/mukeshkumar.jpeg";
// import team3 from "./vendorimage/douli.jpeg";
// import team4 from "./vendorimage/sujatajhaa.jpeg";
// import team5 from './vendorimage/bhawanjha.jpeg';
// import team6 from './vendorimage/spanaM.jpeg';
// import team7 from './vendorimage/vidyajhaa.jpeg';
// import team8 from './vendorimage/pujaji.jpeg';
// import team9 from './vendorimage/priyanka.jpeg';
// import team10 from './vendorimage/anupama.jpeg'

// const testimonials = [
//   {
//     id: 1,
//     name: "Ved Prabha ",
//     role: "Maithili Painting Artist",
//     desc:
//       "Ved Prabha is a talented Maithili artist at BiZhar Heritage, known for her beautiful hand-painted designs on kurtas, sarees, lehengas, and more. Her work shows traditional folk patterns, bright colors, and true cultural art, making each piece special and unique.",
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
//     id: 10,
//     name: "Anupam Jha",
//     role: " Maithili Painting Artist",
//     desc:
//       "Anupam Jha is a talented Maithili painting artist and a proud member of BiZhar Heritage. Inspired by traditional Madhubani art, her artworks reflect vibrant colors, fine detailing, and rich cultural heritage",
//     image: team10,
//   },

//   {
//     id: 5,
//     name: "Bhavna Jha ",
//     role: "Mithila & Kohbar Artist",
//     desc:
//       "Bhavna Jha is a talented Mithila & Kohbar Artist and a proud member of BiZhar Heritage. She creates beautiful handmade Mithila paintings and designs on items like dupattas, phone covers, and home décor. Her work reflects traditional folk art, bright colors, and cultural beauty, making each piece unique and special.",
//     image: team5,
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
//     id: 6,
//     name: "Sapna Kumari",
//     role: "Maithili Painting Artist",
//     desc:
//       "Sapna Kumari is a talented Maithili painting artist and a valued member of BiZhar Heritage. She creates beautiful hand-painted artworks with traditional designs, fine detailing, and vibrant colors. Her work reflects true Maithili culture and the charm of authentic folk art, making every piece unique and attractive.",
//     image: team6,
//   },
//   {
//     id: 4,
//     name: "Sujata Jhaa",
//     role: "Madhubani Artist",
//     desc:
//       "Sujata Jhaa is a dedicated Madhubani artist, bringing Bihar’s traditional art to life through her intricate patterns and soulful storytelling. Her work reflects cultural depth, creativity, and a strong commitment to preserving heritage while inspiring modern expression.",
//     image: team4,
//   },
//   {
//     id: 7,
//     name: "Vidya Jha ",
//     role: "Mithila Artist ",
//     desc:
//       "Vidya Jha is a talented artist and a proud member of BiZhar Heritage. She creates beautiful Mithila and Kohbar paintings with fine detailing, traditional patterns, and vibrant colors. Her artwork reflects true Maithili culture and shows the beauty of authentic folk art, making each piece special and eye-catching",
//     image: team7,
//   },
//   {
//     id: 8,
//     name: "Puja Kumari ",
//     role: "Maithili panting Artist ",
//     desc:
//       "Puja Kumari is a talented Maithili Painting artist and a proud member of BiZhar Heritage. She creates beautiful hand-painted artworks featuring traditional motifs, fine detailing, and vibrant colors.",
//     image: team8,
//   },
  
// ];

// export default function TestimonialSection() {
//   return (
//     <>
//       <section
//         className="testimonial-section"
//         style={{
//           // backgroundImage: `url(${waveBg})`,
//         }}
//       >
//         <div className="testimonial-container">
//           <h2 className="testimonial-title">
//   <span style={{ color: "#333" }}>Meet our </span>
//   <span style={{ color: "#eaae5e" }}>Leadership</span>
// </h2>

//           <div className="testimonial-grid">
//             {testimonials.map((item) => (
//               <div key={item.id} className="testimonial-card">
//                 <div className="testimonial-header">
//                   <img src={item.image} alt={item.name} />
//                   <div>
//                     <h4>{item.name}</h4>
//                     <p>{item.role}</p>
//                   </div>
//                 </div>

//                 <p className="testimonial-text">{item.desc}</p>
//                 {/* <div className="stars">★★★★★</div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>



//       {/* INTERNAL CSS */}
//       <style>{`
//         .testimonial-section {
//           width: 100%;
//           padding: 10px 20px;
//           background-color: #f7f7f7;
//           background-repeat: no-repeat;
//           background-position: bottom;
//           background-attachment: fixed;
//           background-size: cover;
//         }

//         .testimonial-container {
//            max-width: 1350px;
//           margin: auto;
//           text-align: center;
//         }

//         .testimonial-title {
//           font-size: 32px;
//           font-weight: 700;
//           color: #333;
//           margin-bottom: 50px;
//         }

//         .testimonial-title span {
//           color: #eaae5e;
//           border-bottom: 3px solid #eaae5e;
//         }

//         .testimonial-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 25px;
//         }

//         .testimonial-card {
//           background: #fff;
//           padding: 25px;
//           border-radius: 12px;
//           box-shadow: 0 10px 25px rgba(0,0,0,0.08);
//           text-align: left;
//           transition: 0.3s ease;
//         }

//         .testimonial-card:hover {
//           transform: translateY(-6px);
//         }

//         .testimonial-header {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           margin-bottom: 15px;
//         }

//         .testimonial-header img {
//           width: 55px;
//           height: 55px;
//           border-radius: 50%;
//           object-fit: cover;
//         }

//         .testimonial-header h4 {
//           margin: 0;
//           font-size: 16px;
//           font-weight: 600;
//         }

//         .testimonial-header p {
//           margin: 0;
//           font-size: 13px;
//           color: #777;
//         }

//         .testimonial-text {
//           font-size: 14px;
//           color: #666;
//           line-height: 1.6;
//           margin-bottom: 15px;
//         }

//         .stars {
//           color: #ffc107;
//           font-size: 16px;
//         }

//         @media (max-width: 992px) {
//           .testimonial-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 576px) {
//           .testimonial-title {
//             font-size: 24px;
//           }

//           .testimonial-grid {
//             grid-template-columns: 1fr;
//           }

//           .testimonial-section {
//             padding: 60px 15px;
//             background-attachment: scroll;
//           }
//         }
//       `}</style>
//     </>
//   );
// }



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
import team10 from './vendorimage/anupama.jpeg';

const testimonials = [
  
  {
    id: 11,
    name: "Anjali Singh",
    role: "Maithili Painting Artist",
    desc: "Anjali Singh is a skilled Maithili painting artist known for her elegant designs and traditional artwork. Her creations reflect cultural heritage, vibrant colors, and fine detailing.",
   
  },
  {
    id: 12,
    name: "Anjali Thakur",
    role: "Folk Art Artist",
    desc: "Anjali Thakur is a passionate folk artist who creates beautiful handmade artworks inspired by Indian traditions and culture.",
  
  },
  {
    id: 13,
    name: "Anshu Jha",
    role: "Mithila Artist",
    desc: "Anshu Jha is a talented Mithila artist who expresses traditional stories through detailed patterns and vibrant colors.",
   
  },
  {
    id: 14,
    name: "Anupma Jha",
    role: "Maithili Artist",
    desc: "Anupma Jha is a dedicated Maithili artist known for her creative artwork and traditional painting style.",
    
  },
  {
    id: 15,
    name: "Divya Jha",
    role: "Madhubani Artist",
    desc: "Divya Jha creates beautiful Madhubani paintings that showcase Bihar’s rich cultural heritage and artistic traditions.",
   
  },
  {
    id: 16,
    name: "Dolly",
    role: "Handcraft Artist",
    desc: "Dolly is a creative handcraft artist who designs unique handmade items with artistic skills and cultural touch.",
   
  },
  {
    id: 17,
    name: "Kunjika",
    role: "Folk Art Artist",
    desc: "Kunjika is a passionate folk artist who brings traditional Indian art to life through her creative handmade designs.",
   
  },
  {
    id: 18,
    name: "Navya Jaitwal",
    role: "Folk Artist – Uttarakhand",
    desc: "Navya Jaitwal is a talented artist from Uttarakhand known for her traditional artwork inspired by regional culture and heritage.",
   
  },
  {
    id: 19,
    name: "Nidhi Jha",
    role: "Maithili Artist",
    desc: "Nidhi Jha is a skilled Maithili artist creating vibrant and detailed paintings inspired by traditional themes.",
    
  },
  {
    id: 20,
    name: "Pallavi Singh",
    role: "Folk Art Artist",
    desc: "Pallavi Singh is a creative artist known for her unique handmade artwork and dedication to traditional art forms.",
   
  },
  {
    id: 21,
    name: "Priya Jha",
    role: "Mithila Artist",
    desc: "Priya Jha is a talented Mithila artist who creates detailed paintings reflecting cultural heritage and artistic excellence.",
   
  },
  {
    id: 22,
    name: "Rishu Thakur",
    role: "Folk Artist",
    desc: "Rishu Thakur is a passionate artist who creates beautiful handmade artworks inspired by Indian traditions.",
   
  },
  {
    id: 23,
    name: "Sandhya Pathak",
    role: "Traditional Artist",
    desc: "Sandhya Pathak is known for her traditional art skills and creative designs that reflect Indian culture.",
  
  },
  {
    id: 24,
    name: "Sanjana Jha",
    role: "Maithili Artist",
    desc: "Sanjana Jha is a talented Maithili artist who creates colorful and detailed traditional paintings.",
   
  },
  {
    id: 25,
    name: "Shana Khatun",
    role: "Handcraft Artist",
    desc: "Shana Khatun is a skilled handcraft artist known for her unique handmade creations and artistic designs.",
   
  },
  {
    id: 26,
    name: "Siddhita Mishra",
    role: "Madhubani Artist",
    desc: "Siddhita Mishra is a creative Madhubani artist who expresses culture and tradition through her detailed paintings.",
  
  },
  {
    id: 27,
    name: "Sneha Jha",
    role: "Mithila Artist",
    desc: "Sneha Jha is a passionate Mithila artist creating vibrant artworks with traditional patterns and cultural themes.",
    
  },
  {
    id: 28,
    name: "Pari Kumari",
    role: "Folk Artist",
    desc: "Pari Kumari is a talented artist known for her creative handmade artwork and dedication to traditional art.",
   
  },
  {
    id: 29,
    name: "Shreshta Acharya",
    role: "Traditional Artist",
    desc: "Shreshta Acharya is a creative artist who focuses on traditional Indian art styles and cultural expressions.",
    
  },
];

export default function TestimonialSection() {
  // Split testimonials into two rows: first 5, next 5
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 10);

  // Duplicate arrays for seamless infinite scrolling
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-container">
          <h2 className="testimonial-title">
            <span style={{ color: "#333" }}>Meet our </span>
            <span style={{ color: "#eaae5e" }}>Leadership</span>
          </h2>

          {/* Row 1 - scrolls left to right */}
          <div className="marquee-row">
            <div className="marquee-wrapper scroll-left">
              <div className="marquee-content">
                {duplicatedFirstRow.map((item, idx) => (
                  <div key={`row1-${item.id}-${idx}`} className="marquee-card">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - scrolls right to left */}
          <div className="marquee-row">
            <div className="marquee-wrapper scroll-right">
              <div className="marquee-content">
                {duplicatedSecondRow.map((item, idx) => (
                  <div key={`row2-${item.id}-${idx}`} className="marquee-card">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .testimonial-section {
          width: 100%;
          padding: 10px 20px;
          // background-color: #f7f7f7;
          overflow-x: hidden;
        }

        .testimonial-container {
          max-width: 1450px;
          margin: auto;
          text-align: center;
        }

        .testimonial-title {
          font-size: 32px;
          font-weight: 700;
          color: #333;
          margin-bottom: 50px;
        }

        .testimonial-title span:last-child {
          border-bottom: 3px solid #eaae5e;
        }

        /* Marquee rows */
        .marquee-row {
          margin-bottom: 30px;
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
          padding: 10px 0;
          width: max-content;
        }

        /* Left to right animation (row 1) */
        .scroll-left .marquee-content {
          animation: scrollLeft 25s linear infinite;
        }

        /* Right to left animation (row 2) */
        .scroll-right .marquee-content {
          animation: scrollRight 25s linear infinite;
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

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Card styling - only name and designation */
        .marquee-card {
          background: #fff;
          padding: 20px 30px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          text-align: center;
          min-width: 200px;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .marquee-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          background: #fffaf5;
        }

        .marquee-card h4 {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
          color: #222;
        }

        .marquee-card p {
          margin: 0;
          font-size: 13px;
          color: #eaae5e;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .marquee-card {
            padding: 16px 24px;
            min-width: 180px;
          }
          .marquee-card h4 {
            font-size: 16px;
          }
          .marquee-card p {
            font-size: 12px;
          }
          .scroll-left .marquee-content,
          .scroll-right .marquee-content {
            animation-duration: 20s;
          }
        }

        @media (max-width: 768px) {
          .testimonial-section {
            padding: 40px 15px;
          }
          .testimonial-title {
            font-size: 28px;
            margin-bottom: 35px;
          }
          .marquee-card {
            padding: 14px 20px;
            min-width: 160px;
          }
          .marquee-card h4 {
            font-size: 14px;
          }
          .marquee-card p {
            font-size: 11px;
          }
          .scroll-left .marquee-content,
          .scroll-right .marquee-content {
            animation-duration: 18s;
          }
        }

        @media (max-width: 480px) {
          .testimonial-title {
            font-size: 24px;
          }
          .marquee-card {
            padding: 12px 16px;
            min-width: 140px;
          }
          .marquee-card h4 {
            font-size: 13px;
          }
          .marquee-card p {
            font-size: 10px;
          }
          .scroll-left .marquee-content,
          .scroll-right .marquee-content {
            animation-duration: 15s;
          }
          .marquee-row {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}
