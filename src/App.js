// import { Routes, Route, useLocation } from "react-router-dom";

// import Home from "./pages/Home";
// import Telecast from "./pages/Telecast";
// import Donations from "./pages/Donations";
// import News from "./pages/News";
// import Login from "./pages/modules/Login.jsx";
// import Events from "./pages/Events";
// import Navbar from "./layouts/Navbar";
// import "./App.css";
// import About from "./pages/About";
// import { LoaderProvider } from "./Context/LoaderProvider.jsx";
// import Footer from "./pages/Footer.jsx";
// import Aboutjharkhand from "./pages/Aboutjharkhand.jsx";  
// import ScrollToTop from "./pages/ScrollToTop.jsx";
// import Vendorpage from "./pages/Vendorpage.jsx";
// import Secondnavbar from "./layouts/Secondnavbar.jsx";

// function Layout() {
//   const location = useLocation();

//   const showLayout =
//     location.pathname === "/" ||
//     location.pathname === "/telecast" ||
//     location.pathname === "/donations" ||
//     location.pathname === "/news" ||
//     location.pathname === "/events" ||
//     location.pathname === "/bookings"||
//     location.pathname === "/about-bihar"||
//     location.pathname === "/about-jharkhand";
//     // location.pathname === "/vendor-bihar";

//     const showLayout1 =

//     location.pathname === "/vendor-bihar";


//   return (
//     <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
//       {showLayout && <Navbar />}
//       {showLayout1 && <Secondnavbar />}
//        <ScrollToTop />

//       <div style={{ flexGrow: 1 }}>
//         <LoaderProvider>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/telecast" element={<Telecast />} />
//             <Route path="/donations" element={<Donations />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/contact" element={<Login />} />
//             <Route path="/about-bihar" element={<About />} />
//             <Route path="/about-jharkhand" element={<Aboutjharkhand />} />
//             <Route path="/vendor-bihar" element={<Vendorpage />} />
//           </Routes>
//            <Footer/>
//         </LoaderProvider>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return <Layout />;   // ✅ Router yahan nahi
// }

// export default App;


import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Telecast from "./pages/Telecast";
import Donations from "./pages/Donations";
import News from "./pages/News";
import Login from "./pages/modules/Login.jsx";
import Events from "./pages/Events";
import Navbar from "./layouts/Navbar";
import "./App.css";
import About from "./pages/About";
import { LoaderProvider } from "./Context/LoaderProvider.jsx";
import Footer from "./pages/Footer.jsx";
import Aboutjharkhand from "./pages/Aboutjharkhand.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Vendorpage from "./pages/Vendorpage.jsx";
import Secondnavbar from "./layouts/Secondnavbar.jsx";
import Jharkhandvendor from "./pages/modules/Jharkhandvendor.jsx";
import Profile from "./pages/Profile.jsx";
import Biharmarketpage from "./pages/Biharmarketpage.jsx";
import Whatweofferbihar from "./pages/Whatweofferbihar.jsx";
import Whatweofferjharkhand from "./pages/Whatweofferjharkhand.jsx";
import Blogpage from "./pages/Blogpage.jsx";
import SocialMediaFixed from './pages/SocialMediaFixed.jsx'
import NewAbout from './pages/NewAbout';
import Art from './pages/Art.jsx';
import GA4Tracker from "./pages/GA4Tracker.jsx";
import ProductDetailPage from './pages/ProductDetailPage.jsx';

import CartPage from './pages/Cartpage.jsx';
import Allproduct from './pages/Allproduct.jsx';

function Layout() {
  const location = useLocation();

  const showLayout =
    location.pathname === "/" ||
    location.pathname === "/telecast" ||
    location.pathname === "/donations" ||
    location.pathname === "/news" ||
    location.pathname === "/events" ||
    location.pathname === "/bookings" ||
    location.pathname === "/about-bihar" ||
    location.pathname === "/about-jharkhand";

  const showLayout1 =
    location.pathname === "/vendor-bihar"||
    location.pathname === "/vendor-jharkhand"||
    location.pathname === "/profile"||
  location.pathname === "/biharmarket"||
  location.pathname === "/what-we-offer-bihar"||
  location.pathname === "/what-we-offer-jharkhand"||
  location.pathname === "/blog"||
  location .pathname === "/contact"||
  location.pathname === "/NewAbout"||
  location.pathname === "/Art"||
  location.pathname === "/all-products";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column",backgroundColor:"white" }}>
      
      {/* NAVBARS */}
      {showLayout && <Navbar />}
      {showLayout1 && <Secondnavbar />}

      <ScrollToTop />
{/* <SocialMediaFixed/> */}
      {/* PAGE CONTENT */}
      <div style={{ flexGrow: 1 }}>
        {/* <LoaderProvider> */}
           <GA4Tracker/>
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/telecast" element={<Telecast />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Login />} />
            <Route path="/about-bihar" element={<About />} />
            <Route path="/about-jharkhand" element={<Aboutjharkhand />} />
            <Route path="/vendor-bihar" element={<Vendorpage />} />
            <Route path="/vendor-jharkhand" element={<Jharkhandvendor />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/biharmarket" element={<Biharmarketpage />} />
          <Route path="/what-we-offer-bihar" element={<Whatweofferbihar />} />
        <Route path="/what-we-offer-bihar/:productId" element={<Whatweofferbihar />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/what-we-offer-jharkhand" element={<Whatweofferjharkhand />} />
            <Route path="/blog" element={<Blogpage />} />
            <Route path="/NewAbout"element={<NewAbout/>}/>
            <Route path="/Art"element={<Art/>}/>

             <Route path="/cart" element={<CartPage />} />
              <Route path="/all-products" element={<Allproduct />} />
          </Routes>
        {/* </LoaderProvider> */}
      </div>
      {/* FOOTER — ❌ vendor-bihar par nahi */}
      {!showLayout1 && <Footer />}
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;
