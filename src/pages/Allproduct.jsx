// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import './Allproduct.css';

// const API_URL = 'https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState(null);
//   const observerRef = useRef();
//   const lastProductRef = useCallback(node => {
//     if (loading) return;
//     if (observerRef.current) observerRef.current.disconnect();
//     observerRef.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && hasMore) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });
//     if (node) observerRef.current.observe(node);
//   }, [loading, hasMore]);

//   // Fetch products from API
//   const fetchProducts = async (pageNum) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error('Failed to fetch products');
//       const data = await response.json();
      
//       // Simulate pagination since API returns all products
//       // For infinite scroll, we'll show 8 products per "page"
//       const itemsPerPage = 8;
//       const start = (pageNum - 1) * itemsPerPage;
//       const end = start + itemsPerPage;
//       const paginatedData = data.slice(start, end);
      
//       if (pageNum === 1) {
//         setProducts(paginatedData);
//       } else {
//         setProducts(prev => [...prev, ...paginatedData]);
//       }
      
//       setHasMore(end < data.length);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts(page);
//   }, [page]);

//   // Navigate to product detail page
//   const handleProductClick = (productId) => {
//     window.location.href = `/product/${productId}`;
//   };

//   // Format price in Indian Rupees
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0,
//       maximumFractionDigits: 0,
//     }).format(price);
//   };

//   // Get the first image URL from product images array
//   const getProductImage = (product) => {
//     if (product.images && product.images.length > 0) {
//       return product.images[0].url;
//     }
//     return 'https://via.placeholder.com/400x400?text=No+Image';
//   };

//   // Calculate discount percentage
//   const getDiscountPercentage = (original, sell) => {
//     if (original && sell && original > sell) {
//       return Math.round(((original - sell) / original) * 100);
//     }
//     return 0;
//   };

//   return (
//     <div className="app">
//       {/* <header className="header">
//         <div className="header-container">
//           <h1 className="logo">Madhubani Heritage</h1>
//           <p className="tagline">Authentic Handcrafted Art & Clothing</p>
//         </div>
//       </header> */}

//       <main className="main">
//         <div className="container">
//           {error && (
//             <div className="error-message">
//               <p>⚠️ {error}</p>
//               <button onClick={() => window.location.reload()} className="retry-btn">
//                 Retry
//               </button>
//             </div>
//           )}

//           <div className="products-grid">
//             {products.map((product, index) => {
//               const discount = getDiscountPercentage(product.original_price, product.sell_price);
//               const isLast = index === products.length - 1;
//               return (
//                 <div
//                   key={product.id}
//                   className="product-card"
//                   onClick={() => handleProductClick(product.id)}
//                   ref={isLast ? lastProductRef : null}
//                 >
//                   <div className="card-image-wrapper">
//                     <img
//                       src={getProductImage(product)}
//                       alt={product.name}
//                       className="product-image"
//                       loading="lazy"
//                     />
//                     {discount > 0 && (
//                       <span className="discount-badge">-{discount}%</span>
//                     )}
//                   </div>
//                   <div className="card-content">
//                     <h3 className="product-name">{product.name}</h3>
//                     <div className="price-container">
//                       <span className="sell-price">{formatPrice(product.sell_price)}</span>
//                       {product.original_price > product.sell_price && (
//                         <>
//                           <span className="original-price">{formatPrice(product.original_price)}</span>
//                         </>
//                       )}
//                     </div>
//                     {product.sub_category && (
//                       <span className="category-tag">{product.sub_category.name}</span>
//                     )}
//                     <button className="view-details-btn">View Details →</button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {loading && (
//             <div className="loader-container">
//               <div className="loader"></div>
//               <p>Loading more beautiful products...</p>
//             </div>
//           )}

//           {!hasMore && products.length > 0 && (
//             <div className="end-message">
//               <p>✨ You've reached the end of our collection ✨</p>
//             </div>
//           )}

//           {!loading && products.length === 0 && !error && (
//             <div className="empty-state">
//               <p>No products available at the moment.</p>
//             </div>
//           )}
//         </div>
//       </main>

//       <footer className="footer">
//         <p>&copy; 2026 Madhubani Heritage | Celebrating Traditional Indian Art</p>
//       </footer>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Container, Box, Typography, Chip, Fade, Alert, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom'; // Import this
import './Allproduct.css';

const API_URL = 'https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products';

function Allproduct() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [allCategories, setAllCategories] = useState([]); // Store all categories
  const observerRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams(); // Get URL parameters
  
  const lastProductRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observerRef.current.observe(node);
  }, [loading, hasMore]);

  // Fetch all products once
  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      
      // Store all products
      setProducts(data);
      
      // Extract unique categories from products
      const categoryMap = new Map();
      data.forEach((product) => {
        if (product.category && product.category.id && !categoryMap.has(product.category.id)) {
          categoryMap.set(product.category.id, {
            id: product.category.id,
            name: product.category.name,
            slug: product.category.slug,
          });
        }
      });
      const uniqueCategories = Array.from(categoryMap.values());
      setAllCategories(uniqueCategories);
      
      // Check URL for category parameter
      const categorySlug = searchParams.get('category');
      
      if (categorySlug) {
        // Find category by slug
        const categoryFromUrl = uniqueCategories.find(cat => cat.slug === categorySlug);
        if (categoryFromUrl) {
          setSelectedCategory(categoryFromUrl);
          // Filter products by this category
          const filtered = data.filter(product => 
            product.category && product.category.slug === categorySlug
          );
          
          // Apply pagination to filtered products
          const itemsPerPage = 8;
          const paginatedFiltered = filtered.slice(0, itemsPerPage);
          setFilteredProducts(paginatedFiltered);
          setHasMore(filtered.length > itemsPerPage);
        } else {
          // No category found, show all products
          const itemsPerPage = 8;
          const initialProducts = data.slice(0, itemsPerPage);
          setFilteredProducts(initialProducts);
          setHasMore(data.length > itemsPerPage);
        }
      } else {
        // No category in URL, show all products
        const itemsPerPage = 8;
        const initialProducts = data.slice(0, itemsPerPage);
        setFilteredProducts(initialProducts);
        setHasMore(data.length > itemsPerPage);
      }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load more products when page changes
  useEffect(() => {
    if (products.length > 0) {
      let productsToShow = products;
      
      // If a category is selected, filter products
      if (selectedCategory) {
        productsToShow = products.filter(product => 
          product.category && product.category.id === selectedCategory.id
        );
      }
      
      const itemsPerPage = 8;
      const end = page * itemsPerPage;
      const newProducts = productsToShow.slice(0, end);
      setFilteredProducts(newProducts);
      setHasMore(end < productsToShow.length);
    }
  }, [page, products, selectedCategory]);

  // Initial fetch
  useEffect(() => {
    fetchProducts();
  }, []); // Run only once on mount

  // Handle category selection (manual filter)
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setPage(1);
    
    // Update URL with category slug
    if (category) {
      setSearchParams({ category: category.slug });
    } else {
      setSearchParams({});
    }
    
    // Filter products by selected category
    if (category && products.length > 0) {
      const filtered = products.filter(product => 
        product.category && product.category.id === category.id
      );
      
      // Apply pagination to filtered products
      const itemsPerPage = 8;
      const paginatedFiltered = filtered.slice(0, itemsPerPage);
      setFilteredProducts(paginatedFiltered);
      setHasMore(filtered.length > itemsPerPage);
    }
  };

  // Clear category filter
  const clearCategoryFilter = () => {
    setSelectedCategory(null);
    setPage(1);
    setSearchParams({}); // Clear URL parameter
    
    const itemsPerPage = 8;
    const paginatedAll = products.slice(0, itemsPerPage);
    setFilteredProducts(paginatedAll);
    setHasMore(products.length > itemsPerPage);
  };

  // Navigate to product detail page
  const handleProductClick = (productId) => {
    window.location.href = `/product/${productId}`;
  };

  // Format price in Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get the first image URL from product images array
  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) {
      return product.images[0].url;
    }
    return 'https://via.placeholder.com/400x400?text=No+Image';
  };

  // Calculate discount percentage
  const getDiscountPercentage = (original, sell) => {
    if (original && sell && original > sell) {
      return Math.round(((original - sell) / original) * 100);
    }
    return 0;
  };

  return (
    <Box className="app">
      <main className="main">
        <Container maxWidth="xl">
          {/* Active Filter Display */}
          {selectedCategory && (
  <Fade in={true}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        // 👈 left side
        ml: 2, // 👈 left margin (adjust kar sakte ho)
        mt: 0, // 👈 top margin remove
        mb: 2  // 👈 bottom margin remove
      }}
    >
      <Chip
        label={`Category: ${selectedCategory.name}`}
        onDelete={clearCategoryFilter}
        color="#8b3c1c"
        size="medium"
        sx={{
          fontSize: '1rem',
          py: 1.5 // thoda compact
        }}
      />
    </Box>
  </Fade>
)}

          {error && (
            <Box sx={{ my: 3 }}>
              <Alert 
                severity="error" 
                action={
                  <Button color="inherit" size="small" onClick={() => window.location.reload()}>
                    Retry
                  </Button>
                }
              >
                ⚠️ {error}
              </Alert>
            </Box>
          )}

          <Box className="products-grid">
            {filteredProducts.map((product, index) => {
              const discount = getDiscountPercentage(product.original_price, product.sell_price);
              const isLast = index === filteredProducts.length - 1;
              return (
                <div
                  key={product.id}
                  className="product-card"
                  onClick={() => handleProductClick(product.id)}
                  ref={isLast ? lastProductRef : null}
                >
                  <div className="card-image-wrapper">
                    <img
                      src={getProductImage(product)}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    {discount > 0 && (
                      <span className="discount-badge">-{discount}%</span>
                    )}
                  </div>
                  <div className="card-content">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="price-container">
                      <span className="sell-price">{formatPrice(product.sell_price)}</span>
                      {product.original_price > product.sell_price && (
                        <>
                          <span className="original-price">{formatPrice(product.original_price)}</span>
                        </>
                      )}
                    </div>
                    {product.sub_category && (
                      <span className="category-tag">{product.sub_category.name}</span>
                    )}
                    <button className="view-details-btn">View Details →</button>
                  </div>
                </div>
              );
            })}
          </Box>

          {loading && (
            <Box className="loader-container">
              <div className="loader"></div>
              <p>Loading more beautiful products...</p>
            </Box>
          )}

          {!hasMore && filteredProducts.length > 0 && (
            <Box className="end-message">
              <p>✨ You've reached the end of our collection ✨</p>
            </Box>
          )}

          {!loading && filteredProducts.length === 0 && !error && (
            <Box className="empty-state">
              <p>No products available in this category.</p>
              {selectedCategory && (
                <button onClick={clearCategoryFilter} className="view-details-btn" style={{ marginTop: '1rem' }}>
                  View All Products
                </button>
              )}
            </Box>
          )}
        </Container>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Madhubani Heritage | Celebrating Traditional Indian Art</p>
      </footer>
    </Box>
  );
}

export default Allproduct;