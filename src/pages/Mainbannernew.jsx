import React, { useState, useEffect } from "react";


/* ========== IMPORT ALL LEFT SIDE IMAGES ========== */
import kurti1 from "./Productimage/silkkurti.jpeg";
import kurti2 from "./Productimage/kurtismall.jpeg";
import kurti3 from "./Productimage/kurti3.jpeg";
import suite from "./Productimage/mithlasuite1.jpeg";
import suite1 from "./Productimage/Mithlasuite.jpeg";
import shorai from "./Productimage/shorai.jpeg";
import shorai1 from "./Productimage/shorai1.jpeg";
import madhubani from "./Productimage/madhubani.jpeg";
import madhubani1 from "./Productimage/madhubani1.jpeg";
import mathliblue from "./Productimage/mathliblue.jpeg";
import mathliblue1 from "./Productimage/mathliblue1.jpeg";
import mithilapaint from "./Productimage/mithlapaint.jpeg";
import mithilapaint1 from "./Productimage/mithlapaint1.jpeg";
import wall from "./Productimage/madhubaniwall.jpeg";
import wall1 from "./Productimage/madubaniwallhangi1.jpeg";
import wall2 from "./Productimage/madhubaniwalhanging2.jpeg";
import kurta from "./Productimage/menskurta.jpeg";
import kurta1 from "./Productimage/menkurta1.jpeg";
import kidscraft from "./Productimage/kidscraft.jpeg";

/* RIGHT SIDE BACKGROUND IMAGE */
import rightBgImage from "./Productimage/mithlasuite1.jpeg";
import { useNavigate } from "react-router-dom"; 

const Banner = () => {
   const navigate = useNavigate();
  const allImages = [
    { id: 1, src: kurti1, name: "Silk Kurti", price: "₹1,299", link: "/what-we-offer-bihar" },
    { id: 2, src: kurti2, name: "Cotton Kurti", price: "₹999", link: "/what-we-offer-bihar" },
    { id: 3, src: kurti3, name: "Designer Kurti", price: "₹1,599", link: "/what-we-offer-bihar" },
    { id: 4, src: suite, name: "Mithila Suite", price: "₹2,499", link: "/what-we-offer-bihar" },
    { id: 5, src: suite1, name: "Traditional Suite", price: "₹2,999", link: "/what-we-offer-bihar" },
    { id: 6, src: shorai, name: "Shorai Art", price: "₹899", link: "/what-we-offer-bihar" },
    { id: 7, src: shorai1, name: "Shorai Painting", price: "₹1,199", link: "/what-we-offer-bihar" },
    { id: 8, src: madhubani, name: "Madhubani Art", price: "₹1,599", link: "/what-we-offer-bihar" },
    { id: 9, src: madhubani1, name: "Madhubani Painting", price: "₹1,899", link: "/what-we-offer-bihar" },
    { id: 10, src: mathliblue, name: "Mathil Blue", price: "₹2,199", link: "/what-we-offer-bihar" },
    { id: 11, src: mathliblue1, name: "Blue Art", price: "₹2,499", link: "/what-we-offer-bihar" },
    { id: 12, src: mithilapaint, name: "Mithila Painting", price: "₹1,799", link: "/what-we-offer-bihar" },
    { id: 13, src: mithilapaint1, name: "Mithila Art", price: "₹2,099", link: "/what-we-offer-bihar" },
    { id: 14, src: wall, name: "Wall Art", price: "₹3,499", link: "/what-we-offer-bihar" },
    { id: 15, src: wall1, name: "Wall Hanging", price: "₹2,999", link: "/what-we-offer-bihar" },
    { id: 16, src: wall2, name: "Madhubani Wall", price: "₹3,999", link: "/what-we-offer-bihar" },
    { id: 17, src: kurta, name: "Men Kurta", price: "₹1,499", link: "/what-we-offer-bihar" },
    { id: 18, src: kurta1, name: "Designer Kurta", price: "₹1,899", link: "/what-we-offer-bihar" },
    { id: 19, src: kidscraft, name: "Kids Craft", price: "₹799", link: "/what-we-offer-bihar" },
  ];

  const [currentImages, setCurrentImages] = useState([
    allImages[0],
    allImages[1],
    allImages[2],
    allImages[3],
  ]);

  const [currentOverlays, setCurrentOverlays] = useState([
    { name: "Handwoven Silk", price: "Limited Edition" },
    { name: "Festival Special", price: "20% Off" },
    { name: "Boutique Series", price: "New Arrival" },
    { name: "Eco Natural Dyes", price: "Bestseller" },
  ]);

  const [fade, setFade] = useState(true);

  const overlayTextSets = [
    [
      { name: "Handwoven Silk", price: "Limited Edition" },
      { name: "Festival Special", price: "20% Off" },
      { name: "Boutique Series", price: "New Arrival" },
      { name: "Eco Natural Dyes", price: "Bestseller" },
    ],
    [
      { name: "Bihar Heritage", price: "Pure Tussar" },
      { name: "Jharkhand Craft", price: "Handblock Print" },
      { name: "Sujani Art", price: "Traditional" },
      { name: "Mithila Painting", price: "Certified" },
    ],
  ];

  const getRandomImages = () => {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const getRandomOverlays = () => {
    const randomIndex = Math.floor(Math.random() * overlayTextSets.length);
    return overlayTextSets[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImages(getRandomImages());
        setCurrentOverlays(getRandomOverlays());
        setFade(true);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (link) => {
    navigate(link); // navigate to the product page
  };

  const rightSideStyle = {
    backgroundImage: `url(${rightBgImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundColor: "#8b0000",
  };

  return (
    <div className="banner">
      {/* LEFT SIDE GRID */}
      <div className="banner-left">
        <div className="grid-container">
          {currentImages.map((item, index) => (
            <div
              key={item.id}
              className="grid-item"
              onClick={() => handleClick(item.link)} // <- clickable
              style={{ cursor: "pointer" }}
            >
              <img src={item.src} alt={item.name} className={fade ? "fade-in" : "fade-out"} />
              <div className="image-overlay">
                <p>{currentOverlays[index]?.name || item.name}</p>
                <span>{currentOverlays[index]?.price || item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="banner-right" style={rightSideStyle}>
        <div className="overlay">
          <h1>Bihar & Jharkhand Heritage</h1>
          <p>Authentic Handicrafts • Traditional Wear • Madhubani Art</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;