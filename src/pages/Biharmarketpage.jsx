import React, { useState } from "react";
import "./Biharmarketpage.css";
import { FaHeart, FaRegHeart, FaBars, FaTimes } from "react-icons/fa";

const categories = {
  "Madhubani Art": [
    "Hand-Painted Canvas",
    "Wall Frame",
    "Art Saree",
    "Printed Dupatta",
    "Cushion Cover",
    "Handcrafted Handbag",
    "Mobile Cover"
  ],
  "Tikuli Art": [
    "Coaster Set",
    "Jewellery Box",
    "Decorative Tray"
  ],
  "Manjusha Art": [
    "Silk Dupatta",
    "Wall Hanging"
  ]
};

const items = [
  {
    id: 1,
    category: "Madhubani Art",
    subCategory: "Hand-Painted Canvas",
    name: "मधुबनी हैंड पेंटेड कैनवास",
    price: 3500,
    offerPrice: 2800,
    image: "https://images.unsplash.com/photo-1582582621959-48d27397dc69",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    story: `
यह Madhubani Painting बिहार के Mithila region में पीढ़ियों से चली आ रही पारंपरिक कला है।
Natural colors जैसे neem, haldi, aur flowers से यह painting बनाई जाती है।

This artwork is hand-painted by rural women artisans.
Every line reflects culture, mythology, and Bihar’s living heritage.
`
  },

  {
    id: 2,
    category: "Madhubani Art",
    subCategory: "Art Saree",
    name: "मधुबनी आर्ट साड़ी",
    price: 6200,
    offerPrice: 5200,
    image: "https://images.unsplash.com/photo-1623091410901-00e2d268c644",
    video: "https://www.w3schools.com/html/movie.mp4",
    story: `
यह Madhubani Art Saree pure cotton / silk fabric पर hand-paint की जाती है।
Saree motifs देवी-देवताओं, प्रकृति और लोक कथाओं से inspired होते हैं।

Each saree is a wearable artwork, crafted slowly with patience and devotion.
`
  },

  {
    id: 3,
    category: "Tikuli Art",
    subCategory: "Jewellery Box",
    name: "टिकुली ज्वेलरी बॉक्स",
    price: 2400,
    offerPrice: 1900,
    image: "https://images.unsplash.com/photo-1616628182501-87c21e5c8d3b",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    story: `
Tikuli Art Bihar की ancient glass painting technique है।
Isme glass, golden foil aur fine handwork ka use hota hai।

This jewellery box is both decorative and functional,
perfect for heritage-loving homes.
`
  },

  {
    id: 4,
    category: "Manjusha Art",
    subCategory: "Silk Dupatta",
    name: "मंजूषा आर्ट सिल्क दुपट्टा",
    price: 4200,
    offerPrice: 3600,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    video: "https://www.w3schools.com/html/movie.mp4",
    story: `
Manjusha Art Bihar ke Bhagalpur region ki storytelling folk art hai।
Is art me mythological tales ko box-style panels me dikhaya jata hai।

This silk dupatta carries stories of wisdom, bravery, and tradition.
`
  },

  {
    id: 5,
    category: "Madhubani Art",
    subCategory: "Handcrafted Handbag",
    name: "मधुबनी हैंडक्राफ्टेड हैंडबैग",
    price: 2800,
    offerPrice: 2300,
    image: "https://images.unsplash.com/photo-1593032465171-8e3bff0d7eaa",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    story: `
यह Handcrafted Bag eco-friendly fabric और Madhubani motifs से बनाया जाता है।
Local women artisans इसे hand-paint और stitch करती हैं।

A perfect blend of utility, fashion, and Bihar’s cultural soul.
`
  }
];


const BiharMarketPage = () => {
  const [category, setCategory] = useState("Madhubani Art");
  const [subCat, setSubCat] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [fav, setFav] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleFav = (id) => {
    setFav((p) => (p.includes(id) ? p.filter((i) => i !== id) : [...p, id]));
  };

  const filtered = items.filter(
    (i) => i.category === category && (!subCat || i.subCategory === subCat)
  );

  return (
    <div className="bm-container">
      {/* MOBILE HEADER */}
      <div className="mobile-header">
        <button onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>
        <h3>Bihar Heritage Market</h3>
      </div>

      {/* SIDEBAR */}
      <aside className={`bm-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-head">
          <h2>Craft Categories</h2>
          <FaTimes onClick={() => setSidebarOpen(false)} />
        </div>

        {Object.keys(categories).map((cat) => (
          <div key={cat} className="cat-block">
            <button
              className={`cat-btn ${category === cat ? "active" : ""}`}
              onClick={() => {
                setCategory(cat);
                setSubCat(null);
                setSidebarOpen(false);
              }}
            >
              {cat}
            </button>

            {category === cat && (
              <div className="sub-list">
                {categories[cat].map((s) => (
                  <div
                    key={s}
                    className={`sub-item ${subCat === s ? "active" : ""}`}
                    onClick={() => {
                      setSubCat(s);
                      setSidebarOpen(false);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      {/* CONTENT */}
      <main className="bm-content">
        {filtered.map((item) => (
          <div key={item.id} className="heritage-card">
            {/* LEFT IMAGE */}
            <div className="heritage-img">
              <img src={item.image} alt={item.name} />
              <span className="fav" onClick={() => toggleFav(item.id)}>
                {fav.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
              </span>
            </div>

            {/* RIGHT CONTENT */}
            <div className="heritage-info">
              <h2>{item.name}</h2>

              <div className="price">
                <span className="old">₹{item.price}</span>
                <span className="new">₹{item.offerPrice}</span>
              </div>

              <button
                className="story-toggle"
                onClick={() =>
                  setExpanded(expanded === item.id ? null : item.id)
                }
              >
                {expanded === item.id ? "Hide Craft Story" : "View Craft Story"}
              </button>

              {expanded === item.id && (
                <div className="story-box">
                  <video src={item.video} controls muted />

                  <div className="story-text">
                    <h4>Craft Story</h4>
                    <p>{item.story}</p>

                    <ul>
                      <li>Material: Natural pigments & handmade brush</li>
                      <li>Origin: Mithila, Bihar</li>
                      <li>Artist: Rural women artisans</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BiharMarketPage;
