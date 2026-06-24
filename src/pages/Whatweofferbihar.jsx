
import { Helmet } from "react-helmet-async";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Whatweofferbihar.css";
import { FiHeart, FiStar, FiMenu, FiChevronDown, FiChevronUp } from "react-icons/fi";


const API_URL =
  "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

export default function ProductPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.sell_price,
          originalPrice: item.original_price,
          discount: Math.round(((item.original_price - item.sell_price) / item.original_price) * 100),
          image: item.images?.[0]?.url,
          category: item.category?.name || "Others",
          subcategory: item.sub_category?.name || null,
          rating: 4.5,
        }));

        setProducts(formatted);

        // Build categories with subcategories from actual data
        const catMap = {};
        formatted.forEach((p) => {
          if (!catMap[p.category]) {
            catMap[p.category] = new Set();
          }
          if (p.subcategory) {
            catMap[p.category].add(p.subcategory);
          }
        });

        // Convert Set to Array
        const categoriesWithSub = {};
        Object.keys(catMap).forEach(cat => {
          categoriesWithSub[cat] = Array.from(catMap[cat]);
        });

        setCategories(categoriesWithSub);
        
        // Initialize open categories state
        const initialOpenState = {};
        Object.keys(categoriesWithSub).forEach(cat => {
          initialOpenState[cat] = false;
        });
        setOpenCategories(initialOpenState);
        
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleCategorySelect = (category, subcategory = null) => {
    if (subcategory) {
      setSelectedCategory(category);
      setSelectedSubcategory(subcategory);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
    setMobileMenuOpen(false);
  };

  const filteredProducts = () => {
    let filtered = selectedCategory === "All" 
      ? products 
      : products.filter(p => p.category === selectedCategory);
    
    if (selectedSubcategory) {
      filtered = filtered.filter(p => p.subcategory === selectedSubcategory);
    }
    
    return filtered;
  };

  const handleViewDetails = (product) => {
    navigate(`/product/${product.id}`);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar
          key={i}
          className={`product-star ${i <= rating ? "product-star-filled" : "product-star-empty"}`}
        />
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="product-loading">
        <div className="product-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
<>

    <Helmet>
            <title>
              Handmade Handicrafts & Home Decor | BiZhar Heritage
            </title>
    
            <meta
              name="description"
              content="Buy premium handmade handicrafts, home decor and artisan products online in India."
            />
    
            <meta
              name="keywords"
              content="handmade handicrafts India, home decor online, artisan products"
            />
          </Helmet>
    <div className="product-app">
      {/* Mobile Menu Button */}
      <button 
        className="product-mobile-menu-btn"
        onClick={() => setMobileMenuOpen(true)}
      >
        <FiMenu />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="product-mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar - Fixed */}
      <aside className={`product-sidebar ${mobileMenuOpen ? "product-sidebar-mobile-open" : ""}`}>
        <div className="product-sidebar-header">
          <h3>Categories</h3>
          <button 
            className="product-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="product-sidebar-menu">
          <div
            className={`product-cat-item ${selectedCategory === "All" && !selectedSubcategory ? "product-cat-active" : ""}`}
            onClick={() => handleCategorySelect("All")}
          >
            All Products
          </div>

          {Object.keys(categories).map((cat) => (
            <div key={cat} className="product-category-group">
              <div
                className={`product-cat-item product-cat-parent ${selectedCategory === cat && !selectedSubcategory ? "product-cat-active" : ""}`}
                onClick={() => {
                  toggleCategory(cat);
                  handleCategorySelect(cat);
                }}
              >
                <span>{cat}</span>
                {categories[cat] && categories[cat].length > 0 && (
                  <span className="product-cat-icon">
                    {openCategories[cat] ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                )}
              </div>
              
              {/* Subcategories */}
              {openCategories[cat] && categories[cat] && categories[cat].length > 0 && (
                <div className="product-subcategory-list">
                  {categories[cat].map((subcat) => (
                    <div
                      key={subcat}
                      className={`product-subcat-item ${selectedCategory === cat && selectedSubcategory === subcat ? "product-subcat-active" : ""}`}
                      onClick={() => handleCategorySelect(cat, subcat)}
                    >
                      {subcat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="product-main">
        {/* <div className="product-header">
          <h2>
            {selectedSubcategory 
              ? `${selectedCategory} - ${selectedSubcategory}`
              : selectedCategory === "All" 
                ? "All Products" 
                : selectedCategory}
          </h2>
          <p>{filteredProducts().length} items</p>
        </div> */}

        <div className="product-grid">
          {filteredProducts().map((product) => (
            <div
              key={product.id}
              className="product-card-simple"
              onClick={() => handleViewDetails(product)}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image-simple"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")
                  }
                />
                <button
                  className="product-wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                >
                  <FiHeart
                    className={wishlist.includes(product.id) ? "product-heart-active" : ""}
                  />
                </button>
                {product.discount > 0 && (
                  <div className="product-discount-tag">-{product.discount}%</div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  {renderStars(product.rating)}
                </div>
                
                <div className="product-pricing">
                  <span className="product-price-effective">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="product-price-original">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}
