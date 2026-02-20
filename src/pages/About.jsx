// import React from "react";
// import leafImg1 from "./Biharimage/Thekua.jpg";
// import leafImg2 from "./Biharimage/Thekua.jpg";
// import bgLeaf from "./bgleaf.png"; // halka transparent leaf texture
// import Explorebihar from "./Explorebihar.jsx";

// const AboutBihar = () => {
//   return (
//     <>
//       <style>{`
//         .about-bihar {
//           width: 100%;
//           padding: 80px 20px;
//           background: 
//             linear-gradient(135deg, rgba(253,250,245,0.96), rgba(243,239,232,0.96)),
//             url(${bgLeaf});
//           background-size: cover;
//           background-position: center;
//         }

//         .about-container {
//           max-width: 1200px;
//           margin: auto;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 50px;
//         }

//         /* LEFT TEXT */
//         .about-text {
//           flex: 1;
//         }

//         .about-text h2 {
//           font-size: 42px;
//           color: #4b3a1f;
//           margin-bottom: 20px;
//           position: relative;
//         }

//         .about-text h2::after {
//           content: "";
//           width: 90px;
//           height: 4px;
//           background: linear-gradient(to right, #9c7c38, #d4af37);
//           display: block;
//           margin-top: 12px;
//           border-radius: 10px;
//         }

//         .about-text p {
//           font-size: 18px;
//           line-height: 1.9;
//           color: #444;
//           margin-top: 18px;
//         }

//         /* RIGHT IMAGES */
//         .about-images {
//           flex: 1;
//           position: relative;
//           height: 460px;
//         }

//         .leaf-img {
//           width: 260px;
//           height: 340px;
//           object-fit: cover;
//           position: absolute;
//           border-radius: 
//             55% 45% 60% 40% / 
//             60% 60% 40% 40%;
//           box-shadow:
//             inset 0 0 20px rgba(255,255,255,0.2),
//             0 20px 40px rgba(0,0,0,0.25);
//           transition: transform 0.5s ease, box-shadow 0.5s ease;
//           background-blend-mode: overlay;
//         }

//         .leaf-img:hover {
//           transform: scale(1.06) rotate(1deg);
//           box-shadow: 0 30px 60px rgba(0,0,0,0.35);
//         }

//         .leaf-1 {
//           top: 10px;
//           left: 30px;
//           transform: rotate(-10deg);
//         }

//         .leaf-2 {
//           bottom: 0;
//           right: 10px;
//           transform: rotate(12deg);
//         }

//         /* RESPONSIVE */
//         @media (max-width: 900px) {
//           .about-container {
//             flex-direction: column;
//             text-align: center;
//           }

//           .about-images {
//             height: auto;
//             margin-top: 40px;
//           }

//           .leaf-img {
//             position: relative;
//             margin: 0 auto 25px;
//             transform: rotate(0deg);
//           }
//         }

//         @media (max-width: 480px) {
//           .about-text h2 {
//             font-size: 30px;
//           }

//           .about-text p {
//             font-size: 16px;
//           }

//           .leaf-img {
//             width: 210px;
//             height: 280px;
//           }
//         }
//       `}</style>

//       <section className="about-bihar">
//         <div className="about-container">

//           {/* LEFT TEXT */}
//           <div className="about-text">
//             <h2>About Bihar</h2>
//             <p>
//               Bihar is a land where history breathes through every river,
//               monument, and tradition. From the sacred soil of Bodh Gaya to the
//               scholarly glory of Nalanda, Bihar represents wisdom, resilience,
//               and cultural depth.
//             </p>
//             <p>
//               Its folk arts, soulful festivals, and timeless heritage blend
//               seamlessly with nature, creating a living legacy that continues
//               to inspire generations.
//             </p>
//           </div>

//           {/* RIGHT LEAF IMAGES */}
//           <div className="about-images">
//             <img
//               src={leafImg1}
//               alt="Bihar Culture"
//               className="leaf-img leaf-1"
//             />
//             <img
//               src={leafImg2}
//               alt="Bihar Heritage"
//               className="leaf-img leaf-2"
//             />
//           </div>

//         </div>
//       </section>
//       <Explorebihar/>
//     </>
//   );
// };

// export default AboutBihar;



import React from "react";
import bgImage from "./Biharimage/b8.jpg";
import sideImage from "./Biharimage/budh1.png";
import Explorebihar from "./Explorebihar.jsx";
import Missionvision from "./Missionvision.jsx";
// import Ourmodel from "./Ourmodel.jsx";
import Biharidenty from './Biharidenty.jsx'
 import Ourteam from './Ourteam'
 import Biharnature from './Biharnature';
 import Ourmessage from './Ourmessage';
 import Teamcomponanat from './Teamcomponanat.jsx';

const AboutBihar = () => {
  return (
    <>
      <style>{`
        .about-bihar {
          width: 100%;
          min-height: 90vh;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          display: flex;
          align-items: center;
          padding: 80px 20px;
        }

        /* OVERLAY */
        .about-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        .about-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          gap: 60px;
          color: #fff;
        }

        /* LEFT TEXT */
        .about-text {
          flex: 1;
        }

        .about-text h2 {
          font-size: 44px;
          margin-bottom: 20px;
          color: #ffd700;
          position: relative;
        }

        .about-text h2::after {
          content: "";
          width: 90px;
          height: 4px;
          background: #ffd700;
          display: block;
          margin-top: 12px;
          border-radius: 10px;
        }

        .about-text p {
          font-size: 18px;
          line-height: 1.9;
          color: #f1f1f1;
          margin-top: 18px;
        }

        /* RIGHT IMAGE */
        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .about-image img {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 20px;
         
          transition: transform 0.4s ease;
        }

        .about-image img:hover {
          transform: scale(1.05);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-container {
            flex-direction: column;
            text-align: center;
          }

          .about-image img {
            height: 420px;
          }
        }

        @media (max-width: 480px) {
          .about-text h2 {
            font-size: 30px;
          }

          .about-text p {
            font-size: 16px;
          }

          .about-image img {
            height: 340px;
          }
        }
      `}</style>

      <section className="about-bihar">
        <div className="about-overlay"></div>

        <div className="about-container">
          {/* LEFT TEXT */}
          <div className="about-text">
            <h2>About Bihar</h2>
            <p>
              Bihar is a land of ancient wisdom, spiritual depth, and rich
              traditions. From the sacred grounds of Bodh Gaya to the scholarly
              legacy of Nalanda, Bihar stands as a cradle of civilization.
            </p>
            <p>
              Its festivals, folk arts, cuisine, and heritage sites reflect a
              timeless culture rooted in harmony with nature and history.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <img src={sideImage} alt="Bihar Heritage" />
          </div>
        </div>
      </section>
      <Biharnature/>
       <Explorebihar/>
       <Ourmessage/>
        {/* <Missionvision/> */}
        <Biharidenty/>
        {/* <Teamcomponanat/> */}
        <Ourteam/>
        {/* <Ourmodel/> */}
    </>
  );
};

export default AboutBihar;

