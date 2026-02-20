import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Jharkhandvendor.css";

const CraftMarketplace = () => {
  const navigate = useNavigate();

  /* =======================
     JHARKHAND CATEGORIES
  ======================= */
  const categories = [
    { name: "Tribal Art & Paintings", icon: "🪶" },
    { name: "Tussar Silk", icon: "🧣" },
    { name: "Bamboo & Cane Crafts", icon: "🎋" },
    { name: "Dhokra Metal Art", icon: "🔔" },
    { name: "Forest & Organic Foods", icon: "🌿" }
  ];

  /* =======================
     JHARKHAND VENDORS ONLY
  ======================= */
  const vendorsData = [
    {
      id: 1,
      storeName: "Sohrai Tribal Arts",
      ownerName: "By Savita Hansda",
      category: "Tribal Art & Paintings",
      description:
        "Authentic Sohrai & Khovar tribal wall paintings by indigenous women artists.",
      rating: 4.8,
      address: "Hazaribagh, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1581091215367-59ab6b6df5a0?w=600"
    },
    {
      id: 2,
      storeName: "Khovar Heritage Studio",
      ownerName: "By Sunita Devi",
      category: "Tribal Art & Paintings",
      description:
        "Traditional Khovar paintings depicting tribal rituals and nature.",
      rating: 4.7,
      address: "Ranchi, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1593642532400-2682810df593?w=600"
    },
    {
      id: 3,
      storeName: "Kuchai Tussar Silks",
      ownerName: "By Mahadev Mahto",
      category: "Tussar Silk",
      description:
        "Premium Kuchai Tussar silk sarees woven using natural dyes.",
      rating: 4.9,
      address: "Khunti, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=600"
    },
    {
      id: 4,
      storeName: "Tribal Looms of Jharkhand",
      ownerName: "By Tribal Weavers Collective",
      category: "Tussar Silk",
      description:
        "Handwoven tussar silk stoles and sarees crafted by tribal artisans.",
      rating: 4.8,
      address: "Chaibasa, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600"
    },
    {
      id: 5,
      storeName: "VanDhan Bamboo Crafts",
      ownerName: "By SHG Bamboo Unit",
      category: "Bamboo & Cane Crafts",
      description:
        "Eco-friendly bamboo baskets, lamps, trays and home décor items.",
      rating: 4.7,
      address: "Simdega, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
    },
    {
      id: 6,
      storeName: "Saranda Cane Creations",
      ownerName: "By Birsa Munda Crafts",
      category: "Bamboo & Cane Crafts",
      description:
        "Handcrafted bamboo and cane utility products from forest communities.",
      rating: 4.6,
      address: "West Singhbhum, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600"
    },
    {
      id: 7,
      storeName: "Dhokra Heritage Metals",
      ownerName: "By Raghunath Karmakar",
      category: "Dhokra Metal Art",
      description:
        "Traditional lost-wax Dhokra metal figurines and tribal décor items.",
      rating: 4.8,
      address: "Chaibasa, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1582582429416-bf6f3a6c4f6c?w=600"
    },
    {
      id: 8,
      storeName: "Adivasi Metal Crafts",
      ownerName: "By Tribal Artisan Group",
      category: "Dhokra Metal Art",
      description:
        "Hand-cast tribal metal art inspired by folklore and nature.",
      rating: 4.7,
      address: "Dumka, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600"
    },
    {
      id: 9,
      storeName: "Mahua & Forest Foods",
      ownerName: "By Van Utpadak Samuh",
      category: "Forest & Organic Foods",
      description:
        "Mahua-based foods, forest honey, ragi flour and bamboo shoot products.",
      rating: 4.6,
      address: "Dumka, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1604908177522-937c27e21c92?w=600"
    },
    {
      id: 10,
      storeName: "Adivasi Organic Pantry",
      ownerName: "By Tribal Farmers Collective",
      category: "Forest & Organic Foods",
      description:
        "Naturally sourced organic honey, millets and forest produce.",
      rating: 4.5,
      address: "Latehar, Jharkhand",
      image:
        "https://images.unsplash.com/photo-1589927986089-35812386cbb0?w=600"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVendors = vendorsData.filter(
    (v) =>
      (selectedCategory === "All" || v.category === selectedCategory) &&
      v.storeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cm-page">
      {/* TOP BAR */}
      <div className="cm-topbar">
        <div className="cm-category-row">
          <button
            className={`cm-cat-btn ${
              selectedCategory === "All" ? "active" : ""
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`cm-cat-btn ${
                selectedCategory === cat.name ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <div className="cm-search-area">
          <input
            placeholder="Search Jharkhand vendors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CARD AREA */}
      <div className="cm-card-scroll">
        <div className="cm-card-grid">
          {filteredVendors.map((v) => (
            <div
              key={v.id}
              className="cm-card"
              onClick={() => navigate(`/vendor/${v.id}`)}
            >
              <div className="cm-card-img">
                <img src={v.image} alt={v.storeName} />
                <span className="cm-rating">⭐ {v.rating}</span>
              </div>

              <div className="cm-card-body">
                <h3>{v.storeName}</h3>
                <span className="cm-owner-name">{v.ownerName}</span>
                <p>{v.description}</p>
                <div className="cm-address">📍 {v.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftMarketplace;
