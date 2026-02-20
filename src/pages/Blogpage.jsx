



import React, { useState, useEffect } from "react";
import nalandaImage from "./Biharimage/nalanda.jpg";
import mahbodhiImage from "./Biharimage/mahabodi.webp";
import vikramshilaImage from "./Biharimage/vikramshilla.avif";
import patnaMuseumImage from "./Biharimage/patna-museum.jpg";
import rajgirImage from "./Biharimage/rajgir.jpg";
import barabarCavesImage from "./Biharimage/risibar.webp";
import tribalArtImage from "./Biharimage/madhubaniwallframe.jpeg";
import chhauDanceImage from "./Biharimage/chaiudance.jpg";
import salForestImage from "./Biharimage/salforest.jpg";
import netarhatImage from "./Biharimage/Netarhat-sunrise-point.jpg";
import ranchiLakeImage from "./Biharimage/lake.jpg";
import palamuFortImage from "./Biharimage/Palamu-Fort.jpg";


  // Initial Bihar and Jharkhand heritage blogs
  const initialBlogs = [
    // Bihar Blogs (6)
    {
      id: 1,
      title: "Nalanda University: Ancient Center of Learning",
      desc: "Founded in the 5th century CE, Nalanda was one of the world's first residential universities. At its peak, it attracted scholars from China, Korea, Japan, Tibet, Mongolia, Turkey, Sri Lanka, and Southeast Asia. The ruins showcase advanced architecture with meditation halls, classrooms, and libraries.",
      image: nalandaImage,
      category: "Bihar",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Mahabodhi Temple: Enlightenment Site",
      desc: "A UNESCO World Heritage Site in Bodh Gaya where Gautama Buddha attained enlightenment. The temple complex, built in the 3rd century BCE, features the sacred Bodhi Tree and the Diamond Throne (Vajrasana). The 50-meter tall pyramidal tower is an architectural marvel.",
      image: mahbodhiImage,
      category: "Bihar",
      date: "2024-01-20"
    },
    {
      id: 3,
      title: "Vikramshila University Ruins",
      desc: "Established by King Dharmapala in the late 8th century, Vikramshila was another premier center of Buddhist learning alongside Nalanda. Located near Bhagalpur, it specialized in Tantric Buddhism and had over 100 teachers imparting knowledge to thousands of students.",
      image: vikramshilaImage,
      category: "Bihar",
      date: "2024-02-01"
    },
    {
      id: 4,
      title: "Patna Museum: Cultural Treasury",
      desc: "Houses over 50,000 artifacts including the famous Didarganj Yakshi from the 3rd century BCE. The museum preserves relics from ancient Patliputra, Mauryan, Gupta, and Mughal periods. The natural history section displays rare fossils and geological specimens.",
      image: patnaMuseumImage,
      category: "Bihar",
      date: "2024-02-10"
    },
    {
      id: 5,
      title: "Rajgir: Ancient Capital City",
      desc: "The first capital of the Magadha kingdom, Rajgir was frequented by both Buddha and Mahavira. The Gridhakuta Hill (Vulture's Peak) is where Buddha delivered many sermons. The Japanese Peace Pagoda, Venuvana monastery, and ancient cyclopean walls are major attractions.",
      image: rajgirImage,
      category: "Bihar",
      date: "2024-02-15"
    },
    {
      id: 6,
      title: "Barabar Caves: Oldest Rock-cut Architecture",
      desc: "Dating back to the Mauryan Empire (322-185 BCE), these are India's oldest surviving rock-cut caves. The caves feature highly polished granite surfaces and inscriptions from Ashoka's reign. The Lomas Rishi Cave's elephant-shaped entrance is particularly famous.",
      image: barabarCavesImage,
      category: "Bihar",
      date: "2024-02-20"
    },
    // Jharkhand Blogs (6)
    {
      id: 7,
      title: "Jharkhand's Ancient Tribal Rock Art",
      desc: "The prehistoric rock shelters of Isko and Satpahar contain Mesolithic period paintings dating back 10,000 years. Created by indigenous tribes using natural pigments, these depict hunting scenes, rituals, animals, and daily life. They provide invaluable insights into early human civilization.",
      image: tribalArtImage,
      category: "Jharkhand",
      date: "2024-03-01"
    },
    {
      id: 8,
      title: "Chhau Dance: UNESCO Heritage Performance",
      desc: "A semi-classical Indian dance with martial, tribal, and folk origins. Recognized by UNESCO as Intangible Cultural Heritage, Chhau uses vibrant masks and elaborate costumes to depict episodes from epics. The Seraikella style from Jharkhand is particularly graceful and sophisticated.",
      image: chhauDanceImage,
      category: "Jharkhand",
      date: "2024-03-05"
    },
    {
      id: 9,
      title: "Sacred Sal Forests (Sarna)",
      desc: "The sacred groves preserved by tribal communities as abodes of deities. These biodiversity hotspots contain centuries-old Sal trees and represent the deep ecological wisdom of indigenous people. Rituals and community meetings held here maintain traditional knowledge systems.",
      image: salForestImage,
      category: "Jharkhand",
      date: "2024-03-10"
    },
    {
      id: 10,
      title: "Netarhat: Queen of Chotanagpur",
      desc: "Known for its colonial-era architecture and breathtaking sunrise views. The British established churches, bungalows, and schools here during the colonial period. Netarhat's plateau offers panoramic views and is surrounded by dense forests with rich biodiversity.",
      image: netarhatImage,
      category: "Jharkhand",
      date: "2024-03-15"
    },
    {
      id: 11,
      title: "Ranchi's Iconic Water Bodies",
      desc: "The twin lakes of Ranchi - Ranchi Lake and Kanke Dam - are surrounded by lush greenery and colonial-era structures. These water bodies were developed by the British and remain popular recreational spots. The nearby Jagannath Temple showcases traditional architecture.",
      image: ranchiLakeImage,
      category: "Jharkhand",
      date: "2024-03-20"
    },
    {
      id: 12,
      title: "Palamu Fort: Medieval Architecture",
      desc: "Built by the Chero dynasty in the 16th century, these twin forts showcase medieval military architecture. The forts feature intricate water management systems, secret passages, and defensive structures. They witnessed several battles during Mughal and British periods.",
      image: palamuFortImage,
      category: "Jharkhand",
      date: "2024-03-25"
    }
  ];

const BlogComponent = () => {
 const [blogs] = useState(initialBlogs);


  return (
    <div className="blog-page">
      <div className="top-bar">
        <h2>
          Bihar & Jharkhand <span style={{ color: "black" }}>Heritage Blogs</span>
        </h2>
      </div>

      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-date">Date: {blog.date}</p>
              <p className="blog-desc">{blog.desc}</p>
            </div>
          </div>
        ))}
      </div>
 

      

      <style>{`
        .blog-page {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 60px auto 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .top-bar {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #0b3c49;
        }

        .top-bar h2 {
          color: #8b0000;
          font-size: 2.2rem;
          margin: 0;
          text-align: center;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .button-group button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .button-group button:not(.add-btn):not(.clear-btn) {
          background: #f0f0f0;
          color: #333;
        }

        .button-group button:not(.add-btn):not(.clear-btn):hover {
          background: #ddd;
        }

        .add-btn {
          background: #0b3c49 !important;
          color: white !important;
        }

        .clear-btn {
          background: #c0392b !important;
          color: white !important;
        }

        .blog-stats {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-bottom: 30px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          flex-wrap: wrap;
        }

        .blog-stats span {
          padding: 5px 15px;
          background: white;
          border-radius: 20px;
          font-weight: 600;
          color: #0b3c49;
          border: 1px solid #ddd;
        }

        .blog-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .blog-card {
          display: flex;
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
        }

        .blog-card img {
          width: 40%;
          object-fit: cover;
          min-height: 250px;
        }

        .blog-content {
          padding: 25px;
          flex: 1;
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .blog-header h3 {
          margin: 0;
          color: #0b3c49;
          font-size: 1.5rem;
          flex: 1;
        }

        .category-tag {
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
          font-weight: bold;
          margin-left: 10px;
        }

        .category-tag.bihar {
          background: #e8f4f8;
          color: #0b3c49;
          border: 1px solid #0b3c49;
        }

        .category-tag.jharkhand {
          background: #f0e8d8;
          color: #8b4513;
          border: 1px solid #8b4513;
        }

        .category-tag.custom {
          background: #e8f8e8;
          color: #2e8b57;
          border: 1px solid #2e8b57;
        }

        .blog-date {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }

        .blog-desc {
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .blog-actions {
          display: flex;
          gap: 15px;
        }

        .blog-actions button {
          padding: 8px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .view-btn {
          background: #0b3c49;
          color: white;
        }

        .view-btn:hover {
          background: #09414e;
        }

        .delete-btn {
          background: #f8f9fa;
          color: #c0392b;
          border: 1px solid #c0392b !important;
        }

        .delete-btn:hover {
          background: #c0392b;
          color: white;
        }

        .no-blogs {
          text-align: center;
          padding: 60px 20px;
          background: #f8f9fa;
          border-radius: 10px;
          color: #666;
        }

        /* Popup Styles */
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup {
          background: white;
          padding: 30px;
          border-radius: 10px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .popup h3 {
          color: #0b3c49;
          margin-top: 0;
          margin-bottom: 25px;
          text-align: center;
        }

        .popup input,
        .popup textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .popup textarea {
          resize: vertical;
        }

        .file-upload {
          margin-bottom: 20px;
        }

        .file-upload label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }

        .popup-actions {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }

        .popup-actions button {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .save-btn {
          background: #0b3c49;
          color: white;
        }

        .save-btn:hover {
          background: #09414e;
        }

        .cancel-btn {
          background: #f0f0f0;
          color: #333;
        }

        .cancel-btn:hover {
          background: #ddd;
        }

        .note {
          margin-top: 20px;
          font-size: 0.85rem;
          color: #666;
          text-align: center;
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-page {
            padding: 20px 15px;
            margin-top: 45px;
          }

          .top-bar h2 {
            font-size: 20px;
          }

          .button-group {
            flex-direction: column;
          }

          .button-group button {
            width: 100%;
          }

          .blog-stats {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          .blog-card {
            flex-direction: column;
          }

          .blog-card img {
            width: 100%;
            height: 200px;
          }

          .blog-header {
            flex-direction: column;
            gap: 10px;
          }

          .category-tag {
            align-self: flex-start;
          }

          .blog-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .popup {
            padding: 20px;
            margin: 20px;
          }

          .popup-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogComponent;

