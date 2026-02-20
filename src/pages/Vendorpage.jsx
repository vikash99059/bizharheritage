// import React, { useState } from "react";
// import "./vendor.css";

// const CraftMarketplace = () => {
//   const categories = [
//     { name: "All", icon: "🏠" },
//     { name: "Madhubani Art", icon: "🎨" },
//     { name: "Tikuli Art", icon: "✨" },
//     { name: "Sikki Grass Crafts", icon: "🌾" },
//     { name: "Nalanda Bawan Buti", icon: "🧵" },
//     { name: "Sujani Embroidery", icon: "🪡" },
//     { name: "Katarni Rice", icon: "🍚" },
//     { name: "Black Stone Craft", icon: "🪨" },
//   ];

//   const vendorsData = [
//     {
//       id: 1,
//       storeName: "Madhubani Textile Store",
//       category: "Madhubani Art",
//       rating: 4.8,
//       description: "Authentic Madhubani paintings on textiles, handmade by local artists. Specializing in traditional designs and modern adaptations.",
//       address: {
//         village: "Ranti",
//         district: "Madhubani",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop",
//       contact: "+91 9876543210",
//       established: "2015"
//     },
//     {
//       id: 2,
//       storeName: "Tikuli Handcrafts",
//       category: "Tikuli Art",
//       rating: 4.6,
//       description: "Traditional Tikuli art with glass paintings, jewelry, and decorative items. Each piece tells a story from Bihar's rich heritage.",
//       address: {
//         village: "Patna City",
//         district: "Patna",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=250&fit=crop",
//       contact: "+91 8765432109",
//       established: "2018"
//     },
//     {
//       id: 3,
//       storeName: "Sikki Grass Creations",
//       category: "Sikki Grass Crafts",
//       rating: 4.7,
//       description: "Eco-friendly crafts made from sikki grass. Specializing in baskets, decorative items, and traditional wedding accessories.",
//       address: {
//         village: "Saraiya",
//         district: "Muzaffarpur",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=400&h=250&fit=crop",
//       contact: "+91 7654321098",
//       established: "2012"
//     },
//     {
//       id: 4,
//       storeName: "Nalanda Weaving Hub",
//       category: "Nalanda Bawan Buti",
//       rating: 4.9,
//       description: "Traditional Nalanda handloom products featuring Bawan Buti designs. Pure cotton sarees and fabrics with intricate patterns.",
//       address: {
//         village: "Rajgir",
//         district: "Nalanda",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
//       contact: "+91 6543210987",
//       established: "2010"
//     },
//     {
//       id: 5,
//       storeName: "Sujani Craft House",
//       category: "Sujani Embroidery",
//       rating: 4.5,
//       description: "Traditional Sujani embroidery on quilts, bed covers, and clothing. Each stitch preserves Bihar's quilting heritage.",
//       address: {
//         village: "Bodh Gaya",
//         district: "Gaya",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop",
//       contact: "+91 9432123456",
//       established: "2019"
//     },
//     {
//       id: 6,
//       storeName: "Katarni Rice Store",
//       category: "Katarni Rice",
//       rating: 4.8,
//       description: "Authentic Katarni rice directly from farmers. Known for its aroma and nutritional value. 100% organic farming.",
//       address: {
//         village: "Bhagalpur",
//         district: "Bhagalpur",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=250&fit=crop",
//       contact: "+91 9123456789",
//       established: "2008"
//     },
//     {
//       id: 7,
//       storeName: "Black Stone Art",
//       category: "Black Stone Craft",
//       rating: 4.7,
//       description: "Traditional black stone carving from Gaya. Creating beautiful statues, sculptures, and home decor items.",
//       address: {
//         village: "Vishnupad",
//         district: "Gaya",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=250&fit=crop",
//       contact: "+91 9876123450",
//       established: "2016"
//     },
//     {
//       id: 8,
//       storeName: "Bhojpuri Quote Gifts",
//       category: "Bhojpuri & Maithili Merchandise",
//       rating: 4.6,
//       description: "Funny Bhojpuri and Maithili quotes on t-shirts, mugs, and accessories. Celebrating Bihar's linguistic heritage.",
//       address: {
//         village: "Chhapra",
//         district: "Saran",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
//       contact: "+91 8765493210",
//       established: "2020"
//     },
//     {
//       id: 9,
//       storeName: "Manjusha Art Gallery",
//       category: "Manjusha Art",
//       rating: 4.7,
//       description: "Traditional Manjusha paintings depicting folktales. Colorful and vibrant art pieces for home decor.",
//       address: {
//         village: "Anga",
//         district: "Bhagalpur",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
//       contact: "+91 9876541230",
//       established: "2014"
//     },
//     {
//       id: 10,
//       storeName: "Bihar Sattu Corner",
//       category: "Sattu",
//       rating: 4.9,
//       description: "Traditional Bihar sattu powder and recipes. Energy-packed food supplement made from roasted gram flour.",
//       address: {
//         village: "Mohanpur",
//         district: "Patna",
//         state: "Bihar"
//       },
//       image: "https://images.unsplash.com/photo-1596040033221-a6f2d8c6a83a?w=400&h=250&fit=crop",
//       contact: "+91 8765123490",
//       established: "2011"
//     }
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedVendor, setSelectedVendor] = useState(null);

//   // Filter vendors based on selected category
//   const filteredVendors = selectedCategory === "All" 
//     ? vendorsData 
//     : vendorsData.filter(vendor => vendor.category === selectedCategory);

//   // Handle card click
//   const handleCardClick = (vendor) => {
//     setSelectedVendor(vendor);
//   };

//   // Close vendor details
//   const handleCloseDetails = () => {
//     setSelectedVendor(null);
//   };

//   return (
//     <div className="app-container">
//       {/* Header */}


//       {/* Categories Row */}
//       <div className="categories-row">
//         <div className="categories-container">
//           {categories.map((category) => (
//             <button
//               key={category.name}
//               className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
//               onClick={() => setSelectedCategory(category.name)}
//             >
//               <span className="category-icon">{category.icon}</span>
//               <span className="category-name">{category.name}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="content-header">
//           <h2>
//             {selectedCategory === "All" 
//               ? "All Vendors" 
//               : `${selectedCategory} Vendors`
//             }
//             <span className="count-badge">{filteredVendors.length} stores</span>
//           </h2>
//         </div>

//         {/* Vendors Grid */}
//         <div className="vendors-grid">
//           {filteredVendors.map((vendor) => (
//             <div 
//               key={vendor.id} 
//               className="vendor-card"
//               onClick={() => handleCardClick(vendor)}
//             >
//               <div className="card-image">
//                 <img src={vendor.image} alt={vendor.storeName} />
//               </div>

//               <div className="card-content">
//                 <div className="store-header">
//                   <h3 className="store-name">{vendor.storeName}</h3>
//                   <div className="store-rating">
//                     <span className="stars">{"★".repeat(Math.floor(vendor.rating))}</span>
//                     <span className="rating-number">{vendor.rating}</span>
//                   </div>
//                 </div>

//                 <p className="store-description">{vendor.description}</p>

//                 <div className="store-address">
//                   <div className="address-line">
//                     <span className="address-icon">📍</span>
//                     <span>{vendor.address.village}, {vendor.address.district}</span>
//                   </div>
//                   <div className="state-badge">
//                     <span className="state-icon">🏛️</span>
//                     <span>{vendor.address.state}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Vendor Details Modal */}
//       {selectedVendor && (
//         <div className="vendor-modal-overlay" onClick={handleCloseDetails}>
//           <div className="vendor-modal" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={handleCloseDetails}>×</button>

//             <div className="modal-image">
//               <img src={selectedVendor.image} alt={selectedVendor.storeName} />
//             </div>

//             <div className="modal-content">
//               <div className="modal-header">
//                 <h2>{selectedVendor.storeName}</h2>
//                 <div className="modal-rating">
//                   <span className="stars">{"★".repeat(Math.floor(selectedVendor.rating))}</span>
//                   <span className="rating-number">{selectedVendor.rating}/5</span>
//                 </div>
//               </div>

//               <div className="modal-category">
//                 <span className="category-badge">{selectedVendor.category}</span>
//                 <span className="established">Est. {selectedVendor.established}</span>
//               </div>

//               <p className="modal-description">{selectedVendor.description}</p>

//               <div className="modal-details">
//                 <div className="detail-section">
//                   <h3>📌 Address</h3>
//                   <p>{selectedVendor.address.village}</p>
//                   <p>{selectedVendor.address.district} District</p>
//                   <p>{selectedVendor.address.state}</p>
//                 </div>

//                 <div className="detail-section">
//                   <h3>📞 Contact</h3>
//                   <p>{selectedVendor.contact}</p>
//                 </div>

//                 <div className="detail-section">
//                   <h3>⏰ Store Hours</h3>
//                   <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
//                   <p>Sunday: 10:00 AM - 6:00 PM</p>
//                 </div>
//               </div>

//               <div className="modal-actions">
//                 <button className="action-btn call-btn">
//                   <span>📞 Call Now</span>
//                 </button>
//                 <button className="action-btn whatsapp-btn">
//                   <span>💬 WhatsApp</span>
//                 </button>
//                 <button className="action-btn direction-btn">
//                   <span>🗺️ Get Directions</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="app-footer">
//         <p>© 2024 Bihar Craft Marketplace. All rights reserved.</p>
//         <p>Supporting local artisans and preserving Bihar's cultural heritage</p>
//       </footer>
//     </div>
//   );
// };

// export default CraftMarketplace;



// import React, { useState } from "react";
// import "./vendor.css";

// const CraftMarketplace = () => {
//   // Categories with subcategories
//   const categories = [
//     {
//       name: "Art & Craft",
//       icon: "🎨",
//       color: "#667eea",
//       subcategories: [
//         { name: "Madhubani (Mithila) Art", items: "Textiles, bags, cushions & accessories" },
//         { name: "Tikuli Art", items: "Trays, coasters & jewelry boxes" },
//         { name: "Manjusha Art", items: "Silk fabrics & home décor" },
//         { name: "Sikki Grass Crafts", items: "Baskets, toys & wall hangings" }
//       ]
//     },
//     {
//       name: "Handloom & Textiles",
//       icon: "🧵",
//       color: "#764ba2",
//       subcategories: [
//         { name: "Nalanda Bawan Buti", items: "Curtains & décor textiles" },
//         { name: "Sujani Embroidery", items: "Quilts, jackets & furnishings" }
//       ]
//     },
//     {
//       name: "Traditional Foods",
//       icon: "🍜",
//       color: "#f093fb",
//       subcategories: [
//         { name: "Sattu", items: "Natural plant protein" },
//         { name: "Makhana", items: "Roasted & flavored" },
//         { name: "Traditional Sweets", items: "Silao Khaja, Tilkut & Anarsa" },
//         { name: "Katarni Rice", items: "Distinctive aroma rice" }
//       ]
//     },
//     {
//       name: "Home & Gifts",
//       icon: "🏠",
//       color: "#4facfe",
//       subcategories: [
//         { name: "Black Stone Craft", items: "From Gaya" },
//         { name: "Bhojpuri & Maithili", items: "Mugs, T-shirts & gifts" }
//       ]
//     }
//   ];

//   // Vendors data
//   const vendorsData = [
//     // Art & Craft
//     {
//       id: 1,
//       storeName: "Madhubani Masters",
//       category: "Art & Craft",
//       subcategory: "Madhubani (Mithila) Art",
//       rating: 4.8,
//       description: "Authentic Madhubani paintings on textiles, handmade by local artists. Specializing in traditional designs and modern adaptations.",
//       address: "Ranti, Madhubani, Bihar",
//       image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop",
//       contact: "+91 9876543210",
//       established: "2015",
//       featured: true
//     },
//     {
//       id: 2,
//       storeName: "Tikuli Treasures",
//       category: "Art & Craft",
//       subcategory: "Tikuli Art",
//       rating: 4.6,
//       description: "Traditional Tikuli art with glass paintings, jewelry boxes, and decorative items. Each piece tells a story from Bihar's rich heritage.",
//       address: "Patna City, Patna, Bihar",
//       image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=250&fit=crop",
//       contact: "+91 8765432109",
//       established: "2018",
//       featured: false
//     },
//     {
//       id: 3,
//       storeName: "Manjusha Art Gallery",
//       category: "Art & Craft",
//       subcategory: "Manjusha Art",
//       rating: 4.7,
//       description: "Traditional Manjusha paintings depicting folktales. Colorful and vibrant art pieces for home decor.",
//       address: "Bhagalpur, Bihar",
//       image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
//       contact: "+91 9876541230",
//       established: "2014",
//       featured: true
//     },
//     {
//       id: 4,
//       storeName: "Sikki Grass Creations",
//       category: "Art & Craft",
//       subcategory: "Sikki Grass Crafts",
//       rating: 4.5,
//       description: "Eco-friendly crafts made from sikki grass. Specializing in baskets, toys, and traditional wall hangings.",
//       address: "Muzaffarpur, Bihar",
//       image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=400&h=250&fit=crop",
//       contact: "+91 7654321098",
//       established: "2012",
//       featured: false
//     },
//     // Handloom & Textiles
//     {
//       id: 5,
//       storeName: "Nalanda Weaving Hub",
//       category: "Handloom & Textiles",
//       subcategory: "Nalanda Bawan Buti",
//       rating: 4.9,
//       description: "Traditional Nalanda handloom products featuring Bawan Buti designs. Pure cotton sarees, curtains, and décor textiles.",
//       address: "Rajgir, Nalanda, Bihar",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
//       contact: "+91 6543210987",
//       established: "2010",
//       featured: true
//     },
//     {
//       id: 6,
//       storeName: "Sujani Craft House",
//       category: "Handloom & Textiles",
//       subcategory: "Sujani Embroidery",
//       rating: 4.7,
//       description: "Traditional Sujani embroidery on quilts, jackets, and furnishings. Each stitch preserves Bihar's quilting heritage.",
//       address: "Bodh Gaya, Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop",
//       contact: "+91 9432123456",
//       established: "2019",
//       featured: false
//     },
//     // Traditional Foods
//     {
//       id: 7,
//       storeName: "Bihar Sattu Corner",
//       category: "Traditional Foods",
//       subcategory: "Sattu",
//       rating: 4.8,
//       description: "Traditional Bihar sattu powder and recipes. Energy-packed natural plant protein made from roasted gram flour.",
//       address: "Patna, Bihar",
//       image: "https://images.unsplash.com/photo-1596040033221-a6f2d8c6a83a?w=400&h=250&fit=crop",
//       contact: "+91 8765123490",
//       established: "2011",
//       featured: true
//     },
//     {
//       id: 8,
//       storeName: "Makhana Delights",
//       category: "Traditional Foods",
//       subcategory: "Makhana",
//       rating: 4.6,
//       description: "Premium quality roasted and flavored makhana. Healthy snack option with traditional Bihar recipes.",
//       address: "Darbhanga, Bihar",
//       image: "https://images.unsplash.com/photo-1625943553855-3628f6f25782?w=400&h=250&fit=crop",
//       contact: "+91 9871234560",
//       established: "2017",
//       featured: false
//     },
//     {
//       id: 9,
//       storeName: "Katarni Rice Store",
//       category: "Traditional Foods",
//       subcategory: "Katarni Rice",
//       rating: 4.9,
//       description: "Authentic Katarni rice directly from farmers. Known for its distinctive aroma and nutritional value.",
//       address: "Bhagalpur, Bihar",
//       image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=250&fit=crop",
//       contact: "+91 9123456789",
//       established: "2008",
//       featured: true
//     },
//     {
//       id: 10,
//       storeName: "Bihar Sweets Paradise",
//       category: "Traditional Foods",
//       subcategory: "Traditional Sweets",
//       rating: 4.7,
//       description: "Authentic Bihar sweets like Silao Khaja, Tilkut & Anarsa. Made using traditional methods and recipes.",
//       address: "Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=250&fit=crop",
//       contact: "+91 8765432190",
//       established: "2013",
//       featured: false
//     },
//     // Home & Gifts
//     {
//       id: 11,
//       storeName: "Black Stone Artisans",
//       category: "Home & Gifts",
//       subcategory: "Black Stone Craft",
//       rating: 4.8,
//       description: "Traditional black stone carving from Gaya. Creating beautiful statues, sculptures, and home decor items.",
//       address: "Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=250&fit=crop",
//       contact: "+91 9876123450",
//       established: "2016",
//       featured: true
//     },
//     {
//       id: 12,
//       storeName: "Bhojpuri Quote Gifts",
//       category: "Home & Gifts",
//       subcategory: "Bhojpuri & Maithili",
//       rating: 4.5,
//       description: "Funny Bhojpuri and Maithili quotes on t-shirts, mugs, and accessories. Celebrating Bihar's linguistic heritage.",
//       address: "Chhapra, Bihar",
//       image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
//       contact: "+91 8765493210",
//       established: "2020",
//       featured: false
//     }
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [selectedVendor, setSelectedVendor] = useState(null);

//   // Filter vendors based on selections
//   const filteredVendors = vendorsData.filter(vendor => {
//     // Category filter
//     if (selectedCategory !== "All" && vendor.category !== selectedCategory) {
//       return false;
//     }

//     // Subcategory filter
//     if (selectedSubcategory !== "All" && vendor.subcategory !== selectedSubcategory) {
//       return false;
//     }

//     // Search filter
//     if (searchQuery.trim() !== "") {
//       const query = searchQuery.toLowerCase();
//       return (
//         vendor.storeName.toLowerCase().includes(query) ||
//         vendor.description.toLowerCase().includes(query) ||
//         vendor.address.toLowerCase().includes(query) ||
//         vendor.category.toLowerCase().includes(query) ||
//         vendor.subcategory.toLowerCase().includes(query)
//       );
//     }

//     return true;
//   });

//   // Handle category selection
//   const handleCategorySelect = (categoryName) => {
//     setSelectedCategory(categoryName);
//     setSelectedSubcategory("All");
//     setDropdownOpen(null);
//   };

//   // Handle subcategory selection
//   const handleSubcategorySelect = (subcategoryName) => {
//     setSelectedSubcategory(subcategoryName);
//     setDropdownOpen(null);
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setSelectedCategory("All");
//     setSelectedSubcategory("All");
//     setSearchQuery("");
//     setDropdownOpen(null);
//   };

//   // Toggle dropdown
//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   // Handle card click
//   const handleCardClick = (vendor) => {
//     setSelectedVendor(vendor);
//   };

//   // Close vendor details
//   const handleCloseDetails = () => {
//     setSelectedVendor(null);
//   };

//   // Get all subcategories for selected category
//   const getSubcategories = () => {
//     if (selectedCategory === "All") return [];
//     const category = categories.find(c => c.name === selectedCategory);
//     return category ? category.subcategories : [];
//   };

//   return (
//     <div className="app-container">
//       {/* Header */}


//       {/* Search Bar */}
//       <div className="search-container">
//         <div className="search-box">
//           <span className="search-icon">🔍</span>
//           <input
//             type="text"
//             placeholder="Search stores, products, or categories..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="search-input"
//           />
//           {searchQuery && (
//             <button className="clear-search" onClick={() => setSearchQuery("")}>
//               ✕
//             </button>
//           )}
//         </div>
//         <div className="results-count">
//           {filteredVendors.length} stores found
//         </div>
//       </div>

//       {/* Categories Row with Dropdowns */}
//       <div className="categories-row">
//         <div className="categories-container">
//           {/* All Categories Button */}
//           <div className="category-item">
//             <button
//               className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
//               onClick={() => handleCategorySelect("All")}
//               style={{ background: selectedCategory === "All" ? "#667eea" : "" }}
//             >
//               <span className="category-icon">🏠</span>
//               <span className="category-name">All Stores</span>
//             </button>
//           </div>

//           {/* Main Categories with Dropdowns */}
//           {categories.map((category, index) => (
//             <div className="category-item" key={category.name}>
//               <button
//                 className={`category-btn ${selectedCategory === category.name ? "active" : ""}`}
//                 onClick={() => handleCategorySelect(category.name)}
//                 style={{ background: selectedCategory === category.name ? category.color : "" }}
//               >
//                 <span className="category-icon">{category.icon}</span>
//                 <span className="category-name">{category.name}</span>
//                 <span 
//                   className="dropdown-arrow"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleDropdown(index);
//                   }}
//                 >
//                   {dropdownOpen === index ? "▲" : "▼"}
//                 </span>
//               </button>

//               {/* Dropdown Menu */}
//               {dropdownOpen === index && (
//                 <div className="dropdown-menu" style={{ borderTopColor: category.color }}>
//                   {category.subcategories.map((sub) => (
//                     <div
//                       key={sub.name}
//                       className={`dropdown-item ${selectedSubcategory === sub.name ? "active" : ""}`}
//                       onClick={() => handleSubcategorySelect(sub.name)}
//                     >
//                       <div className="subcategory-info">
//                         <strong>{sub.name}</strong>
//                         <span className="subcategory-items">{sub.items}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Clear Filter Button */}
//           {(selectedCategory !== "All" || selectedSubcategory !== "All" || searchQuery) && (
//             <button className="clear-filter-btn" onClick={clearFilters}>
//               Clear Filters ✕
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Active Filters Display */}
//       {(selectedCategory !== "All" || selectedSubcategory !== "All") && (
//         <div className="active-filters">
//           <div className="filter-tags">
//             {selectedCategory !== "All" && (
//               <span className="filter-tag category-tag">
//                 {categories.find(c => c.name === selectedCategory)?.icon} {selectedCategory}
//                 <button onClick={() => handleCategorySelect("All")}>×</button>
//               </span>
//             )}
//             {selectedSubcategory !== "All" && (
//               <span className="filter-tag subcategory-tag">
//                 {selectedSubcategory}
//                 <button onClick={() => handleSubcategorySelect("All")}>×</button>
//               </span>
//             )}
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="content-header">
//           <h2>
//             {selectedCategory === "All" ? "All Stores" : selectedCategory}
//             {selectedSubcategory !== "All" && (
//               <span className="subcategory-title"> / {selectedSubcategory}</span>
//             )}
//           </h2>
//         </div>

//         {/* Vendors Grid */}
//         {filteredVendors.length === 0 ? (
//           <div className="no-results">
//             <div className="no-results-icon">😔</div>
//             <h3>No stores found</h3>
//             <p>Try adjusting your search or filter criteria</p>
//             <button className="reset-btn" onClick={clearFilters}>
//               Reset All Filters
//             </button>
//           </div>
//         ) : (
//           <div className="vendors-grid">
//             {filteredVendors.map((vendor) => (
//               <div 
//                 key={vendor.id} 
//                 className={`vendor-card ${vendor.featured ? "featured" : ""}`}
//                 onClick={() => handleCardClick(vendor)}
//               >
//                 {vendor.featured && (
//                   <div className="featured-badge">⭐ Featured</div>
//                 )}

//                 <div className="card-image">
//                   <img src={vendor.image} alt={vendor.storeName} />
//                 </div>

//                 <div className="card-content">
//                   <div className="store-header">
//                     <h3 className="store-name">{vendor.storeName}</h3>
//                     <div className="store-rating">
//                       <span className="stars">{"★".repeat(Math.floor(vendor.rating))}</span>
//                       <span className="rating-number">{vendor.rating}</span>
//                     </div>
//                   </div>

//                   <div className="store-category">
//                     <span className="category-badge">{vendor.category}</span>
//                     <span className="subcategory-label">{vendor.subcategory}</span>
//                   </div>

//                   <p className="store-description">{vendor.description}</p>

//                   <div className="store-address">
//                     <div className="address-line">
//                       <span className="address-icon">📍</span>
//                       <span>{vendor.address}</span>
//                     </div>
//                     <div className="store-meta">
//                       <span className="meta-item">📅 Est. {vendor.established}</span>
//                       <span className="meta-item">📞 {vendor.contact}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>

//     </div>
//   );
// };

// export default CraftMarketplace;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
//  import "./vendor.css";

// const CraftMarketplace = () => {
//   const navigate = useNavigate();

//   const categories = [
//     {
//       name: "Art & Craft",
//       icon: "🎨",
//       color: "#667eea",
//       subcategories: [
//         { name: "Madhubani (Mithila) Art", items: "Textiles, bags, cushions & accessories" },
//         { name: "Tikuli Art", items: "Trays, coasters & jewelry boxes" },
//         { name: "Manjusha Art", items: "Silk fabrics & home décor" },
//         { name: "Sikki Grass Crafts", items: "Baskets, toys & wall hangings" }
//       ]
//     },
//     {
//       name: "Handloom & Textiles",
//       icon: "🧵",
//       color: "#764ba2",
//       subcategories: [
//         { name: "Nalanda Bawan Buti", items: "Curtains & décor textiles" },
//         { name: "Sujani Embroidery", items: "Quilts, jackets & furnishings" }
//       ]
//     },
//     {
//       name: "Traditional Foods",
//       icon: "🍜",
//       color: "#f093fb",
//       subcategories: [
//         { name: "Sattu", items: "Natural plant protein" },
//         { name: "Makhana", items: "Roasted & flavored" },
//         { name: "Traditional Sweets", items: "Silao Khaja, Tilkut & Anarsa" },
//         { name: "Katarni Rice", items: "Distinctive aroma rice" }
//       ]
//     },
//     {
//       name: "Home & Gifts",
//       icon: "🏠",
//       color: "#4facfe",
//       subcategories: [
//         { name: "Black Stone Craft", items: "From Gaya" },
//         { name: "Bhojpuri & Maithili", items: "Mugs, T-shirts & gifts" }
//       ]
//     }
//   ];


//   const vendorsData = [
//     // Art & Craft
//     {
//       id: 1,
//       storeName: "Madhubani Masters",
//       category: "Art & Craft",
//       subcategory: "Madhubani (Mithila) Art",
//       rating: 4.8,
//       description: "Authentic Madhubani paintings on textiles, handmade by local artists. Specializing in traditional designs and modern adaptations.",
//       address: "Ranti, Madhubani, Bihar",
//       image: "https://images.unsplash.com/photo-1578632749014-ca77efd052eb?w=400&h=250&fit=crop",
//       contact: "+91 9876543210",
//       established: "2015",
//       featured: true
//     },
//     {
//       id: 2,
//       storeName: "Tikuli Treasures",
//       category: "Art & Craft",
//       subcategory: "Tikuli Art",
//       rating: 4.6,
//       description: "Traditional Tikuli art with glass paintings, jewelry boxes, and decorative items. Each piece tells a story from Bihar's rich heritage.",
//       address: "Patna City, Patna, Bihar",
//       image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=250&fit=crop",
//       contact: "+91 8765432109",
//       established: "2018",
//       featured: false
//     },
//     {
//       id: 3,
//       storeName: "Manjusha Art Gallery",
//       category: "Art & Craft",
//       subcategory: "Manjusha Art",
//       rating: 4.7,
//       description: "Traditional Manjusha paintings depicting folktales. Colorful and vibrant art pieces for home decor.",
//       address: "Bhagalpur, Bihar",
//       image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=250&fit=crop",
//       contact: "+91 9876541230",
//       established: "2014",
//       featured: true
//     },
//     {
//       id: 4,
//       storeName: "Sikki Grass Creations",
//       category: "Art & Craft",
//       subcategory: "Sikki Grass Crafts",
//       rating: 4.5,
//       description: "Eco-friendly crafts made from sikki grass. Specializing in baskets, toys, and traditional wall hangings.",
//       address: "Muzaffarpur, Bihar",
//       image: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?w=400&h=250&fit=crop",
//       contact: "+91 7654321098",
//       established: "2012",
//       featured: false
//     },
//     // Handloom & Textiles
//     {
//       id: 5,
//       storeName: "Nalanda Weaving Hub",
//       category: "Handloom & Textiles",
//       subcategory: "Nalanda Bawan Buti",
//       rating: 4.9,
//       description: "Traditional Nalanda handloom products featuring Bawan Buti designs. Pure cotton sarees, curtains, and décor textiles.",
//       address: "Rajgir, Nalanda, Bihar",
//       image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop",
//       contact: "+91 6543210987",
//       established: "2010",
//       featured: true
//     },
//     {
//       id: 6,
//       storeName: "Sujani Craft House",
//       category: "Handloom & Textiles",
//       subcategory: "Sujani Embroidery",
//       rating: 4.7,
//       description: "Traditional Sujani embroidery on quilts, jackets, and furnishings. Each stitch preserves Bihar's quilting heritage.",
//       address: "Bodh Gaya, Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=250&fit=crop",
//       contact: "+91 9432123456",
//       established: "2019",
//       featured: false
//     },
//     // Traditional Foods
//     {
//       id: 7,
//       storeName: "Bihar Sattu Corner",
//       category: "Traditional Foods",
//       subcategory: "Sattu",
//       rating: 4.8,
//       description: "Traditional Bihar sattu powder and recipes. Energy-packed natural plant protein made from roasted gram flour.",
//       address: "Patna, Bihar",
//       image: "https://images.unsplash.com/photo-1596040033221-a6f2d8c6a83a?w=400&h=250&fit=crop",
//       contact: "+91 8765123490",
//       established: "2011",
//       featured: true
//     },
//     {
//       id: 8,
//       storeName: "Makhana Delights",
//       category: "Traditional Foods",
//       subcategory: "Makhana",
//       rating: 4.6,
//       description: "Premium quality roasted and flavored makhana. Healthy snack option with traditional Bihar recipes.",
//       address: "Darbhanga, Bihar",
//       image: "https://images.unsplash.com/photo-1625943553855-3628f6f25782?w=400&h=250&fit=crop",
//       contact: "+91 9871234560",
//       established: "2017",
//       featured: false
//     },
//     {
//       id: 9,
//       storeName: "Katarni Rice Store",
//       category: "Traditional Foods",
//       subcategory: "Katarni Rice",
//       rating: 4.9,
//       description: "Authentic Katarni rice directly from farmers. Known for its distinctive aroma and nutritional value.",
//       address: "Bhagalpur, Bihar",
//       image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=250&fit=crop",
//       contact: "+91 9123456789",
//       established: "2008",
//       featured: true
//     },
//     {
//       id: 10,
//       storeName: "Bihar Sweets Paradise",
//       category: "Traditional Foods",
//       subcategory: "Traditional Sweets",
//       rating: 4.7,
//       description: "Authentic Bihar sweets like Silao Khaja, Tilkut & Anarsa. Made using traditional methods and recipes.",
//       address: "Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=250&fit=crop",
//       contact: "+91 8765432190",
//       established: "2013",
//       featured: false
//     },
//     // Home & Gifts
//     {
//       id: 11,
//       storeName: "Black Stone Artisans",
//       category: "Home & Gifts",
//       subcategory: "Black Stone Craft",
//       rating: 4.8,
//       description: "Traditional black stone carving from Gaya. Creating beautiful statues, sculptures, and home decor items.",
//       address: "Gaya, Bihar",
//       image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=250&fit=crop",
//       contact: "+91 9876123450",
//       established: "2016",
//       featured: true
//     },
//     {
//       id: 12,
//       storeName: "Bhojpuri Quote Gifts",
//       category: "Home & Gifts",
//       subcategory: "Bhojpuri & Maithili",
//       rating: 4.5,
//       description: "Funny Bhojpuri and Maithili quotes on t-shirts, mugs, and accessories. Celebrating Bihar's linguistic heritage.",
//       address: "Chhapra, Bihar",
//       image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop",
//       contact: "+91 8765493210",
//       established: "2020",
//       featured: false
//     }
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("All");
//   const [search, setSearch] = useState("");
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const filteredVendors = vendorsData.filter(v =>
//     (selectedCategory === "All" || v.category === selectedCategory) &&
//     (selectedSubcategory === "All" || v.subcategory === selectedSubcategory) &&
//     v.storeName.toLowerCase().includes(search.toLowerCase())
//   );

//   const clearFilters = () => {
//     setSelectedCategory("All");
//     setSelectedSubcategory("All");
//     setSearch("");
//   };

//   return (
//     <div className="cm-wrapper">

//       {/* CATEGORY + SEARCH ROW */}
//       <div className="cm-topbar">
//         <div className="cm-category-row">

//           <button
//             className={`cm-cat-btn ${selectedCategory === "All" ? "active" : ""}`}
//             onClick={() => {
//               setSelectedCategory("All");
//               setSelectedSubcategory("All");
//             }}
//           >
//             All
//           </button>

//           {categories.map((cat, i) => (
//             <div className="cm-cat-box" key={cat.name}>
//               <button
//                 className={`cm-cat-btn ${selectedCategory === cat.name ? "active" : ""}`}
//                 onClick={() => {
//                   setSelectedCategory(cat.name);
//                   setSelectedSubcategory("All");
//                 }}
//               >
//                 {cat.icon} {cat.name}
//                 <span
//                   className="cm-arrow"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setOpenDropdown(openDropdown === i ? null : i);
//                   }}
//                 >
//                   ▼
//                 </span>
//               </button>

//               {openDropdown === i && (
//                 <div className="cm-dropdown">
//                   {cat.subcategories.map(sub => (
//                     <div
//                       key={sub.name}
//                       className="cm-dropdown-item"
//                       onClick={() => {
//                         setSelectedCategory(cat.name);
//                         setSelectedSubcategory(sub.name);
//                         setOpenDropdown(null);
//                       }}
//                     >
//                       {sub.name}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* SEARCH + CLEAR (FIXED RIGHT) */}
//         <div className="cm-search-area">
//           <input
//             type="text"
//             placeholder="Search store..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button className="cm-clear-btn" onClick={clearFilters}>
//             Clear
//           </button>
//         </div>
//       </div>

//       {/* CARDS */}
//       <div className="cm-card-grid">
//         {filteredVendors.map(v => (
//           <div
//             key={v.id}
//             className="cm-card"
//             onClick={() => navigate(`/vendor/${v.id}`)}
//           >
//             <img src={v.image} alt={v.storeName} />
//             <div className="cm-card-body">
//               <h3>{v.storeName}</h3>
//               <p>{v.subcategory}</p>
//               <span>⭐ {v.rating}</span>
//               <div className="cm-address">📍 {v.address}</div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default CraftMarketplace;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vendor.css";

const CraftMarketplace = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Art & Craft", },
    { name: "Handloom & Textiles",  },
    { name: "Traditional Foods", },
    { name: "Home & Gifts",},
     { name: "Terracotta & Clay products", },
     { name: "Temple & Spiritual products", }
    
  ];

  const vendorsData = [
  /* ========= ART & CRAFT ========= */
  {
    id: 1,
    storeName: "Madhubani Masters",
    ownerName: "By Sita Devi",
    category: "Art & Craft",
    description: "Authentic Madhubani paintings handmade by local artists.",
    rating: 4.8,
    address: "Madhubani, Bihar",
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
  },
  {
    id: 2,
    storeName: "Tikuli Treasures",
    ownerName: "By Ramesh Kumar",
    category: "Art & Craft",
    description: "Traditional Tikuli art and handmade decor items.",
    rating: 4.6,
    address: "Patna, Bihar",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38"
  },
  {
    id: 3,
    storeName: "Manjusha Art Gallery",
    ownerName: "By Anil Chitrakar",
    category: "Art & Craft",
    description: "Colorful folk paintings inspired by Bihar legends.",
    rating: 4.7,
    address: "Bhagalpur, Bihar",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },

  /* ========= HANDLOOM & TEXTILES ========= */
  {
    id: 4,
    storeName: "Nalanda Weaving Hub",
    ownerName: "By Sunita Devi",
    category: "Handloom & Textiles",
    description: "Pure handloom cotton and silk fabrics.",
    rating: 4.9,
    address: "Nalanda, Bihar",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 5,
    storeName: "Sujani Craft House",
    ownerName: "By Meena Devi",
    category: "Handloom & Textiles",
    description: "Traditional Sujani embroidery quilts & textiles.",
    rating: 4.7,
    address: "Gaya, Bihar",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
  },

  /* ========= TRADITIONAL FOODS ========= */
  {
    id: 6,
    storeName: "Bihar Sattu Corner",
    ownerName: "By Rajesh Prasad",
    category: "Traditional Foods",
    description: "Natural sattu and traditional Bihar food items.",
    rating: 4.8,
    address: "Patna, Bihar",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40"
  },
  {
    id: 7,
    storeName: "Makhana Delights",
    ownerName: "By Anjali Singh",
    category: "Traditional Foods",
    description: "Premium fox nuts (makhana) directly from farmers.",
    rating: 4.6,
    address: "Darbhanga, Bihar",
    image: "https://images.unsplash.com/photo-1604908554161-6c3f7f2f15c8"
  },
  {
    id: 8,
    storeName: "Katarni Rice Store",
    ownerName: "By Shyam Verma",
    category: "Traditional Foods",
    description: "Authentic Katarni rice with rich aroma.",
    rating: 4.9,
    address: "Bhagalpur, Bihar",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c"
  },

  /* ========= HOME & GIFTS ========= */
  {
    id: 9,
    storeName: "Black Stone Artisans",
    ownerName: "By Raju Kumar",
    category: "Home & Gifts",
    description: "Hand-carved stone idols & decorative items.",
    rating: 4.8,
    address: "Gaya, Bihar",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    id: 10,
    storeName: "Bhojpuri Quote Gifts",
    ownerName: "By Pooja Mishra",
    category: "Home & Gifts",
    description: "Creative quote-based gifts & souvenirs.",
    rating: 4.5,
    address: "Chhapra, Bihar",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0"
  },

  /* ========= TERRACOTTA ========= */
  {
    id: 11,
    storeName: "Terracotta Tales",
    ownerName: "By Mahesh Prajapati",
    category: "Terracotta & Clay products",
    description: "Eco-friendly terracotta diyas & pots.",
    rating: 4.7,
    address: "Muzaffarpur, Bihar",
    image: "https://images.unsplash.com/photo-1598514982846-7c3a44a39c20"
  },

  /* ========= TEMPLE & SPIRITUAL ========= */
  {
    id: 12,
    storeName: "Spiritual Bihar Store",
    ownerName: "By Pankaj Pandit",
    category: "Temple & Spiritual products",
    description: "Puja samagri, idols & spiritual essentials.",
    rating: 4.8,
    address: "Bodh Gaya, Bihar",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada"
  }
];



  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredVendors = vendorsData.filter(v =>
    (selectedCategory === "All" || v.category === selectedCategory) &&
    v.storeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cm-page">

      {/* TOP BAR FULL WIDTH */}
      <div className="cm-topbar">
        <div className="cm-category-row">
          <button
            className={`cm-cat-btn ${selectedCategory === "All" ? "active" : ""}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>

          {categories.map(cat => (
            <button
              key={cat.name}
              className={`cm-cat-btn ${selectedCategory === cat.name ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="cm-search-area">
          <input
            placeholder="Search store..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CARD AREA 1200px */}
      <div className="cm-card-scroll">
        <div className="cm-card-grid">
          {filteredVendors.map(v => (
            <div
              key={v.id}
              className="cm-card"
              onClick={() => navigate(`/biharmarket`)}
            >
              <div className="cm-card-img">
                <img src={v.image} alt={v.storeName} />
                <span className="cm-rating">⭐ {v.rating}</span>
              </div>

              <div className="cm-card-body">
                <div className="cm-title-row">
                  <h3 className="cm-store-name">{v.storeName}</h3>
                  <span className="cm-owner-name">{v.ownerName}</span>
                </div>

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
