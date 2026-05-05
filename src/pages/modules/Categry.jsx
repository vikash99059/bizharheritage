// import React from "react";
// import "./Categry.css";

// const categories = [
//   {
//     name: "Clothing",
//     image: "https://images.unsplash.com/photo-1521334884684-d80222895322",
//   },
//   {
//     name: "Paintings",
//     image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
//   },
//   {
//     name: "Handcrafted Paintings",
//     image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
//   },
//   {
//     name: "Handcrafted Items",
//     image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108",
//   },
//   {
//     name: "Accessories",
//     image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
//   },
// ];

// const CategorySection = () => {
//   return (
//     <div className="category-section">
//       <h2 className="category-title">Shop By Category</h2>

//       <div className="category-container">
//         {categories.map((cat, index) => (
//           <div className="category-card" key={index}>
//             <div className="category-image">
//               <img src={cat.image} alt={cat.name} />
//             </div>

//             <p className="category-name">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategorySection;


import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  IconButton,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

const CategorySection = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = React.useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Fetch products and extract unique categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();

        // Extract unique categories from products
        const categoryMap = new Map();
        products.forEach((product) => {
          if (product.category && product.category.id && !categoryMap.has(product.category.id)) {
            let representativeImage = "";
            if (product.images && product.images.length > 0) {
              representativeImage = product.images[0].url;
            }
            categoryMap.set(product.category.id, {
              id: product.category.id,
              name: product.category.name,
              slug: product.category.slug,
              image: representativeImage,
            });
          }
        });

        const uniqueCategories = Array.from(categoryMap.values());
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle category click
  const handleCategoryClick = (category) => {
  if (onCategorySelect) {
    onCategorySelect(category);
  } else {
    // Navigate to all-products page with category slug as query parameter
    window.location.href = `/all-products?category=${category.slug}`;
  }
};

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 200 : 300;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft - scrollAmount);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 200 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(scrollContainerRef.current.scrollLeft + scrollAmount);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  // Check if scroll buttons should be shown
  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = scrollContainerRef.current ? 
    scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth - scrollPosition > 10 : 
    true;

  if (loading) {
    return (
      <Box sx={{ py: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
          Shop By Category
        </Typography>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading categories...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
         Curated Collections” or “Explore Premium Categories
        </Typography>
        <Alert 
          severity="error" 
          action={
            <Button color="inherit" size="small" onClick={() => window.location.reload()}>
              Retry
            </Button>
          }
        >
          Unable to load categories: {error}
        </Alert>
      </Box>
    );
  }

  if (categories.length === 0) {
    return (
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
          Curated Collections” or “Explore Premium Categories
        </Typography>
        <Alert severity="info">No categories found.</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 4, position: 'relative' }}>
      <Typography
  variant="h5"
  gutterBottom
  sx={{
    mb: 3,
    fontWeight: 700,
    textAlign: 'center',
    letterSpacing: '1.2px',
    fontSize: {
      xs: '16px',   // mobile small
      sm: '18px',
      md: '22px',
    },
  }}
>
  <span style={{ color: '#000' }}>
    Curated Collections
  </span>{' '}

  <span
    style={{
      color: '#eaae5e', fontWeight:"bold" // premium gold
    }}
  >
    | Explore Premium
  </span>{' '}

  <span style={{ color: '#000' }}>
    Categories
  </span>
</Typography>

      <Box sx={{ position: 'relative' }}>
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <IconButton
            onClick={scrollLeft}
            sx={{
              position: 'absolute',
              left: -10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: 3,
              '&:hover': { bgcolor: 'white', transform: 'translateY(-50%) scale(1.1)' },
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}

        {/* Right Scroll Button */}
        {canScrollRight && categories.length > 6 && (
          <IconButton
            onClick={scrollRight}
            sx={{
              position: 'absolute',
              right: -10,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              bgcolor: 'white',
              boxShadow: 3,
              '&:hover': { bgcolor: 'white', transform: 'translateY(-50%) scale(1.1)' },
              display: { xs: 'none', sm: 'flex' }
            }}
          >
            <ChevronRight />
          </IconButton>
        )}

        {/* Horizontal Scroll Container */}
        <Box
          ref={scrollContainerRef}
          onScroll={handleScroll}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3,
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            pb: 2,
            px: 1,
            '&::-webkit-scrollbar': {
              height: 8,
            },
            '&::-webkit-scrollbar-track': {
              bgcolor: '#f1f1f1',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: '#c1c1c1',
              borderRadius: 4,
              '&:hover': {
                bgcolor: '#a8a8a8',
              },
            },
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat.id}
              onClick={() => handleCategoryClick(cat)}
              sx={{
                flex: '0 0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  width: { xs: 80, sm: 100, md: 120 },
                  height: { xs: 80, sm: 100, md: 120 },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#f5f5f5',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="font-size: 40px;">🎨</div>';
                    }}
                  />
                ) : (
                  <Box sx={{ fontSize: { xs: 40, sm: 50 } }}>🎨</Box>
                )}
              </Paper>
              <Typography
                variant="body1"
                sx={{
                  mt: 1.5,
                  textAlign: 'center',
                  fontWeight: 'medium',
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  maxWidth: { xs: 100, sm: 120 },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Mobile scroll hint */}
      {categories.length > 4 && isMobile && (
        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            textAlign: 'center', 
            mt: 2,
            color: 'text.secondary'
          }}
        >
          ← Swipe to see more categories →
        </Typography>
      )}
    </Box>
  );
};

export default CategorySection;