// // import React from "react";
// // import banner from "./jharkhsndbackground.jpg";

// // const TeamSection = () => {
// //   const teamMembers = [
// //     {
// //       name: "Aubrey Grace",
// //       role: "Head Marketing",
// //       desc: "A strategic marketing leader with a strong focus on brand positioning, growth strategies, and customer engagement across digital platforms.",
// //       animation: "slide-left",
// //     },
// //     {
// //       name: "Daniel Smith",
// //       role: "Co-Founder",
// //       desc: "An experienced entrepreneur driving innovation, partnerships, and long-term vision to scale the organization sustainably.",
// //       animation: "slide-center",
// //     },
// //     {
// //       name: "Liza Brian",
// //       role: "CEO & Founder",
// //       desc: "Visionary leader with expertise in business development, operations, and building impactful, purpose-driven organizations.",
// //       animation: "slide-right",
// //     },
// //   ];

// //   return (
// //     <>
// //       <style>{`
// //         .team-section {
// //           font-family: 'Poppins', sans-serif;
// //         //   max-width: 1200px;
// //           margin: 0 auto;
// //         }

// //         .team-banner {
// //           background-image: linear-gradient(
// //               rgba(0, 0, 0, 0.65),
// //               rgba(0, 0, 0, 0.65)
// //             ),
// //             url(${banner});
// //           background-size: cover;
// //           background-position: center;
// //           color: #fff;
// //           padding: 100px 20px 70px;
// //           text-align: center;
// //           clip-path: ellipse(100% 85% at 50% 0%);
// //         }

// //         .team-banner h2 {
// //           font-size: 2.6rem;
// //           margin-bottom: 15px;
// //         }

// //         .team-banner p {
// //           max-width: 420px;
// //           margin: auto;
// //           font-size: 1rem;
// //           opacity: 0.9;
// //         }

// //         .team-container {
// //           display: flex;
// //           gap: 30px;
// //           padding: 1px 20px 90px;
// //         }

// //         .team-box {
// //           flex: 1;
// //           background: #ffffff;
// //           padding: 30px 35px;
// //           border-radius: 14px;
// //           box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
// //           border-left: 6px solid #d84b37;
// //           opacity: 0;
// //           animation: fadeUp 0.9s ease forwards;
// //         }

// //         .team-box h4 {
// //           margin-bottom: 6px;
// //         }

// //         .team-box span {
// //           display: block;
// //           font-size: 0.9rem;
// //           font-weight: 500;
// //           color: #d84b37;
// //           margin-bottom: 12px;
// //         }

// //         /* Animations */
// //         .slide-left {
// //           transform: translateX(-80px);
// //         }

// //         .slide-center {
// //           transform: translateY(40px);
// //         }

// //         .slide-right {
// //           transform: translateX(80px);
// //         }

// //         @keyframes fadeUp {
// //           to {
// //             opacity: 1;
// //             transform: translate(0, 0);
// //           }
// //         }

// //         /* Tablet */
// //         @media (max-width: 900px) {
// //           .team-container {
// //             flex-wrap: wrap;
// //           }
// //           .team-box {
// //             flex: 1 1 100%;
// //           }
// //         }

// //         /* Mobile */
// //         @media (max-width: 600px) {
// //           .team-container {
// //             flex-direction: column;
// //             padding: 50px 15px 70px;
// //           }
// //           .team-banner h2 {
// //             font-size: 2.1rem;
// //           }
// //         }
// //       `}</style>

// //       <section className="team-section">
// //         <div className="team-banner">
// //           <h2>Our Leadership Team</h2>
// //           <p>
// //             A dedicated group of professionals driving innovation, strategy,
// //             and sustainable growth with strong leadership and vision.
// //           </p>
// //         </div>

// //         <div className="team-container">
// //           {teamMembers.map((member, index) => (
// //             <div
// //               key={index}
// //               className={`team-box ${member.animation}`}
// //             >
// //               <h4>{member.name}</h4>
// //               <span>{member.role}</span>
// //               <p>{member.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default TeamSection;


// import React from "react";
// import banner from "./Biharimage/madubaniart.jpg";

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       name: "Aubrey Grace",
//       role: "Head Marketing",
//       desc:
//         "A strategic marketing leader with a strong focus on brand positioning, growth strategies, and customer engagement across digital platforms.",
//     },
//     {
//       name: "Daniel Smith",
//       role: "Co-Founder",
//       desc:
//         "An experienced entrepreneur driving innovation, partnerships, and long-term vision to scale the organization sustainably.",
//     },
//     {
//       name: "Liza Brian",
//       role: "CEO & Founder",
//       desc:
//         "Visionary leader with expertise in business development, operations, and building impactful, purpose-driven organizations.",
//     },
//   ];

//   return (
//     <>
//       <style>{`
//         .team-section {
//           font-family: 'Poppins', sans-serif;
       
//         }

//         /* ===== Banner ===== */
//         .team-banner {
//           background-image: linear-gradient(
//             rgba(0,0,0,0.65),
//             rgba(0,0,0,0.65)
//           ), url(${banner});
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed; /* ✅ fixed background */
//           color: #fff;
//           padding: 100px 20px 80px;
//           text-align: center;
//            clip-path: ellipse(100% 85% at 50% 0%);
//         }

//         .team-banner h2 {
//           font-size: 2.6rem;
//           margin-bottom: 15px;
//         }

//         .team-banner p {
//           max-width: 720px;
//           margin: auto;
//           font-size: 1rem;
//           opacity: 0.9;
//         }

//         /* ===== Container ===== */
//         .team-container {
//           max-width: 1200px; /* ✅ width 1200 */
//           margin: auto;
//           padding: 1px 20px;
//           display: grid;
//           grid-template-columns: repeat(3, 1fr); /* ✅ single row */
//           gap: 30px;
//         }

//         .team-box {
          
//           padding: 32px;
//           border-radius: 14px;
//           box-shadow: 0 12px 30px rgba(0,0,0,0.08);
//           border-top: 5px solid #d84b37;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .team-box:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 18px 35px rgba(0,0,0,0.12);
//         }

//         .team-box h4 {
//           font-size: 1.4rem;
//           margin-bottom: 6px;
//           color: #222;
//         }

//         .team-box span {
//           display: block;
//           font-size: 0.95rem;
//           font-weight: 600;
//           color: #d84b37;
//           margin-bottom: 12px;
//         }

//         .team-box p {
//           font-size: 0.95rem;
//           color: #555;
//           line-height: 1.6;
//         }

//         /* ===== Tablet ===== */
//         @media (max-width: 992px) {
//           .team-container {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* ===== Mobile ===== */
//         @media (max-width: 600px) {
//           .team-banner {
//             padding: 80px 15px 60px;
//             background-attachment: scroll; /* mobile fix */
//           }

//           .team-banner h2 {
//             font-size: 2rem;
//           }

//           .team-container {
//             grid-template-columns: 1fr;
//             padding: 60px 15px;
//           }

//           .team-box {
//             padding: 26px 22px;
//           }
//         }
//       `}</style>

//       <section className="team-section">
//         <div className="team-banner">
//           <h2>Our Leadership Team</h2>
//           <p>
//             A dedicated group of professionals driving innovation, strategy,
//             and sustainable growth with strong leadership and vision.
//           </p>
//         </div>

//         <div className="team-container">
//           {teamMembers.map((member, index) => (
//             <div className="team-box" key={index}>
//               <h4>{member.name}</h4>
//               <span>{member.role}</span>
//               <p>{member.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default TeamSection;





// 👉 Product Images import karo


import React, { useEffect, useState } from "react";
import banner from "./Biharimage/madubaniart.jpg";
import { useNavigate } from "react-router-dom";
// Product Images
import p1 from "./Biharimage/handpaintcanvas.jpeg";
import p3 from "./Biharimage/madhubaniartsharee.jpeg";
import p2 from "./Biharimage/slider3.jpeg";
import p4 from "./Biharimage/mathli.jpeg";
import p5 from "./Biharimage/handpaintcanvas.jpeg";
import p6 from "./Biharimage/madhubaniwallframe.jpeg";
import p7 from "./Biharimage/wallhangining.jpeg";

import p9 from "./Biharimage/biharmakhana.jpeg";
import p10 from './jharkhandimage/shorahihandpainting.jpeg'
import p11 from './jharkhandimage/shorhing.webp'
import p12 from './jharkhandimage/handloomduppata.jpeg'
import p13 from './jharkhandimage/mahua.jpeg'
import p14 from './jharkhandimage/hurbaloiljharkhand.jpeg'
import p15 from './jharkhandimage/tshirtjh.jpeg'


const TeamSection = () => {
    const navigate = useNavigate();
  const products = [
    {
      img: p1,
      title: "Madhubani Handcrafted Art",
      desc:
        "This authentic Madhubani handcrafted art reflects Bihar’s rich cultural heritage. Hand-painted by skilled artisans using traditional techniques, it features vibrant colors, intricate patterns, and folk storytelling inspired by nature and mythology. Each piece is unique and eco-friendly, making it perfect for home décor, offices, or cultural spaces while supporting local artisans and preserving India’s traditional art forms.."
    },
    {
      img: p2,
      title: "Traditional Clay Pottery",
      desc:
        "Traditional clay pottery is handcrafted by rural artisans using natural clay and age-old methods. These eco-friendly products showcase earthy textures, rustic charm, and cultural authenticity. Ideal for daily use or décor, clay pottery reflects sustainability, tradition, and craftsmanship while supporting artisan livelihoods and promoting environmentally conscious living."
    },
    {
      img: p3,
      title: "Handloom Textile Collection",
      desc:
        "The Handloom Textile Collection is handwoven by skilled weavers using traditional looms. Featuring elegant patterns, rich textures, and lasting durability, these textiles offer comfort and cultural identity. Perfect for clothing and home décor, handloom fabrics represent sustainable fashion while preserving India’s textile heritage and supporting local artisans."
    },
    {
      img: p4,
      title: "Ethnic Decorative Crafts",
      desc:
        "Ethnic decorative crafts are handcrafted pieces inspired by India’s folk traditions. Created by skilled artisans, they feature intricate detailing and cultural motifs. Made with sustainable materials, these unique décor items add warmth, elegance, and tradition to any space while supporting artisan communities and preserving traditional craftsmanship."
    },
    {
    img: p5,
    title: "Madhubani Hand-Painted Canvas",
    desc: `This authentic Madhubani hand-painted canvas showcases Bihar’s traditional artistry. Each piece is meticulously crafted by skilled artisans using natural colors and folk patterns, reflecting nature, mythology, and cultural storytelling. Perfect for wall décor, offices, or cultural spaces, it preserves the legacy of Madhubani art while supporting local artisan communities.`
  },
  {
    img: p6,
    title: "Madhubani Manjusha Wall Hanging",
    desc: `The Madhubani Manjusha Wall Hanging is a handcrafted decorative piece inspired by Bihar’s folk traditions. Made by skilled artisans, it features intricate patterns and vivid storytelling through bold colors. Ideal for home décor, cultural exhibitions, or gifting, it preserves Bihar’s artistic heritage while empowering local craftsmen.`
  },
  {
    img: p7,
    title: "Madhubani Wall Frame",
    desc: `This Madhubani Wall Frame is a beautifully handcrafted frame designed to showcase traditional Madhubani paintings or artworks. Each frame is made with artisanal care, reflecting elegance, durability, and cultural authenticity. Perfect for gifting or enhancing your home décor.`
  },
  
  {
    img: p9,
    title: "Bihar Roasted Makhana",
    desc: `Bihar Roasted Makhana is a healthy, protein-rich snack carefully harvested and roasted by local artisans. Light, crunchy, and naturally nutritious, it is ideal for daily snacking. By choosing this product, you support rural livelihoods and preserve traditional preparation methods.`
  
  },
  {
    img: p10,
    title: "Sohrai Hand-Painted Canvas",
    desc: `This Sohrai Hand-Painted Canvas showcases the tribal artistry of Jharkhand. Crafted by skilled tribal artisans, it features traditional motifs inspired by nature and daily village life. Perfect for wall décor or gifting, it preserves the cultural heritage of Jharkhand and supports local artisan communities.`
  },
  {
    img: p11,
    title: "Sohrai Wall Hanging",
    desc: `The Sohrai Wall Hanging is a vibrant handcrafted piece reflecting Jharkhand’s folk traditions. Bold tribal patterns, natural dyes, and intricate detailing make it ideal for decorating homes, offices, or cultural spaces, while promoting tribal craftsmanship.`
  },
  {
    img: p12,
    title: " Jharkhand Handloom Dupatta",
    desc: `This Jharkhand Handloom Dupatta is handwoven using traditional looms, featuring intricate patterns and vibrant colors. Lightweight, elegant, and durable, it is perfect for ethnic wear, gifting, or festive occasions, while empowering local weavers and preserving Jharkhand’s textile heritage.`
  },
  {
    img: p13,
    title: "Mahua Flower",
    desc: `Pure Mahua Oil extracted from the flowers of the Mahua tree, a traditional Jharkhand herbal remedy. Rich in nutrients, it is ideal for cooking, hair care, and skin nourishment. Handmade using traditional methods, this oil supports local communities and preserves herbal knowledge.`
  },
  {
    img: p14,
    title: "Herbal Oil",
    desc: `Authentic Herbal Oil made from natural herbs sourced from Jharkhand. Used for wellness, massage, and therapeutic purposes, it is crafted using traditional herbal extraction techniques. Ideal for self-care and gifting, it promotes holistic health and supports local herbal artisans.`
  },
  {
    img: p15,
    title: "Tribal T-Shirt",
    desc: `This Jharkhand Tribal T-Shirt features vibrant tribal patterns inspired by local art and folklore. Made with comfortable fabric and hand-printed designs, it is perfect for casual wear or gifting. Each T-Shirt celebrates Jharkhand’s tribal culture while supporting local artisans and preserving traditional print techniques.`
  }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .team-section {
          font-family: 'Poppins', sans-serif;
        }

        /* ===== Banner ===== */
        .team-banner {
          background-image: linear-gradient(
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.65)
          ), url(${banner});
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* ✅ fixed background */
          color: #fff;
          padding: 100px 20px 80px;
          text-align: center;
           clip-path: ellipse(100% 85% at 50% 0%);
        }

        .team-banner h2 {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .team-banner p {
          max-width: 720px;
          margin: auto;
          opacity: 0.9;
        }

        /* ===== Product Section ===== */
        .product-section {
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        /* ===== Text Slider ===== */
        .product-content {
          overflow: hidden;
        }

        .text-slider-track {
          display: flex;
          transition: transform 0.8s ease-in-out;
          transform: translateX(-${index * 100}%);
        }

        .text-slide {
          min-width: 100%;
        }

        .text-slide h3 {
          font-size: 2rem;
          margin-bottom: 14px;
          color: #222;
        }

        .text-slide p {
          font-size: 1rem;
          line-height: 1.7;
          color: #555;
        }

        /* ===== Button ===== */
        .view-all-btn {
          margin-top: 22px;
          padding: 12px 28px;
          font-size: 0.95rem;
          color: #fff;
          background: linear-gradient(135deg, #8b0000, #b22222);
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .view-all-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 18px rgba(139, 0, 0, 0.35);
        }

        /* ===== Image Slider ===== */
        .slider-wrapper {
          overflow: hidden;
          border-radius: 18px;
        }

        .slider-track {
          display: flex;
          transition: transform 0.8s ease-in-out;
          transform: translateX(-${index * 100}%);
        }

        .slide {
          min-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slide img {
          width: 100%;
          height: 360px;
          object-fit: contain;
          border-radius: 18px;
        }

        /* ===== MOBILE & TABLET ===== */
        @media (max-width: 900px) {
          .product-section {
            grid-template-columns: 1fr;
            text-align: center;
            margin: 40px auto;
          }

          .text-slider-track {
            transform: translateX(0); /* text no slide on mobile */
          }

          .text-slide h3 {
            font-size: 1.6rem;
          }

          .text-slide p {
            font-size: 0.95rem;
          }

          .view-all-btn {
            margin: 20px auto 0;
            display: block;
          }

          .slide img {
            height: 240px;
          }
        }

        @media (max-width: 480px) {
          .team-banner h2 {
            font-size: 2rem;
          }

          .team-banner p {
            font-size: 0.95rem;
          }

          .slide img {
            height: 200px;
          }
        }
      `}</style>

      <section className="team-section">
        <div className="team-banner">
          <h2>Top Selling Products</h2>
          <p>
            Discover the finest handcrafted products that celebrate tradition,
            culture, and skilled craftsmanship.
          </p>
        </div>

        <div className="product-section">
          {/* LEFT TEXT */}
          <div className="product-content">
            <div className="text-slider-track">
              {products.map((item, i) => (
                <div className="text-slide" key={i}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
           <button
      className="view-all-btn"
      onClick={() => navigate("/what-we-offer-bihar")}
    >
      View All Products
    </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="slider-wrapper">
            <div className="slider-track">
              {products.map((item, i) => (
                <div className="slide" key={i}>
                  <img src={item.img} alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
