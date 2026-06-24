import { Helmet } from "react-helmet-async";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./SearchBar.css";

const SearchBar = ({ isMobile = false, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        setAllProducts(products);
        console.log("Products loaded:", products.length);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Search products
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    setIsSearching(true);
    
    const timer = setTimeout(() => {
      const searchLower = searchTerm.toLowerCase().trim();
      
      const filtered = allProducts.filter((product) => {
        return (
          product.name?.toLowerCase().includes(searchLower) ||
          product.category?.name?.toLowerCase().includes(searchLower) ||
        //   product.sub_category?.name?.toLowerCase().includes(searchLower) ||
          product.sku?.toLowerCase().includes(searchLower)
        );
      });

      setSearchResults(filtered.slice(0, 24));
      setShowDropdown(true);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, allProducts]);

  const handleProductClick = (productId) => {
    setShowDropdown(false);
    setSearchTerm("");
    setSearchResults([]);
    if (onClose) onClose();
    navigate(`/product/${productId}`);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowDropdown(false);
    setSearchResults([]);
  };

  return (
    <div className={`search-container ${isMobile ? "mobile-search" : "desktop-search"}`} ref={searchRef}>
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder={isMobile ? "Search products..." : "Search for products, categories, artists..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => {
            if (searchTerm && searchResults.length > 0) {
              setShowDropdown(true);
            }
          }}
          className="search-input"
          autoComplete="off"
        />
        {searchTerm && (
          <button className="search-clear-btn" onClick={clearSearch}>
            <IoClose />
          </button>
        )}
      </div>

      {/* Desktop Premium Dropdown */}
      {!isMobile && showDropdown && (
        <>
          <div className="premium-overlay" onClick={() => setShowDropdown(false)}></div>
          <div className="premium-dropdown">
            <div className="premium-dropdown-container">
              {/* Header */}
              {/* <div className="premium-header">
                <div className="premium-header-left">
                  <h3>Discover Products</h3>
                  <span className="result-count">{searchResults.length} results found</span>
                </div>
                <button className="premium-close" onClick={() => setShowDropdown(false)}>
                  <IoClose />
                </button>
              </div> */}

              {/* Content */}
              {isSearching ? (
                <div className="premium-loading">
                  <div className="premium-spinner"></div>
                  <p>Searching amazing products...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <>
                  <div className="premium-grid">
                    {searchResults.map((product, index) => (
                      <div
                        key={product.id}
                        className="premium-card"
                        onClick={() => handleProductClick(product.id)}
                        style={{ animationDelay: `${index * 0.02}s` }}
                      >
                        <div className="premium-card-image">
                          {product.images && product.images[0] ? (
                            <img
                              src={product.images[0].url}
                              alt={product.name}
                              loading="lazy"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/200x200?text=Product";
                              }}
                            />
                          ) : (
                            <div className="premium-no-image">
                              <span>🎨</span>
                            </div>
                          )}
                          {/* <div className="premium-card-overlay">
                            <span>View Details <FaArrowRight /></span>
                          </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  {/* {searchResults.length === 24 && (
                    <div className="premium-footer">
                      <button 
                        className="premium-view-all"
                        onClick={() => {
                          navigate(`/all-products`);
                          setShowDropdown(false);
                        }}
                      >
                        Explore All {searchResults.length}+ Products
                        <FaArrowRight />
                      </button>
                    </div>
                  )} */}
                </>
              ) : (
                <div className="premium-empty">
                  <div className="premium-empty-icon">🔍</div>
                  <h4>No products found</h4>
                  <p>Try searching with different keywords</p>
                  <button onClick={clearSearch} className="premium-empty-btn">
                    Clear Search
                  </button>
                </div>
        
              )}
            </div>
          </div>
        </>
      )}

      {/* Mobile Premium Overlay */}
      {isMobile && searchTerm && searchResults.length > 0 && (
        <div className="mobile-premium-overlay">
          {/* <div className="mobile-premium-header">
            <h3>Search Results</h3>
            <button className="mobile-premium-close" onClick={clearSearch}>
              <IoClose />
            </button>
          </div> */}
          <div className="mobile-premium-grid">
            {searchResults.map((product) => (
              <div
                key={product.id}
                className="mobile-premium-card"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="mobile-premium-image">
                  {product.images && product.images[0] ? (
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150x150?text=Product";
                      }}
                    />
                  ) : (
                    <div className="mobile-premium-no-image">
                      <span>🎨</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* {searchResults.length === 24 && (
            <div className="mobile-premium-footer">
              <button 
                className="mobile-premium-view-all"
                onClick={() => {
                  navigate(`/all-products`);
                  if (onClose) onClose();
                }}
              >
                View All Results
                <FaArrowRight />
              </button>
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
