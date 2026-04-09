
// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom"; // ADD THIS
// import "./Whatweofferbihar.css";
// import { FiMenu, FiX, FiShoppingCart, FiHeart, FiChevronRight, FiShare2 } from "react-icons/fi";
// import { BsWhatsapp } from "react-icons/bs";
// import { BsCart } from "react-icons/bs";



// import kurti1 from "./Productimage/silkkurti.jpeg";
// import kurti2 from "./Productimage/kurtismall.jpeg";
// import kurti3 from "./Productimage/kurti3.jpeg";
// import suite from './Productimage/mithlasuite1.jpeg';
// import suite1 from './Productimage/Mithlasuite.jpeg'
// import shorai from './Productimage/shorai.jpeg';
// import shorai1 from './Productimage/shorai1.jpeg';
// import madhubani from "./Productimage/madhubani.jpeg"
// import madhubani1 from "./Productimage/madhubani1.jpeg"
// import mathliblue from './Productimage/mathliblue.jpeg'
// import mathliblue1 from './Productimage/mathliblue1.jpeg';
// import mithilapaint from './Productimage/mithlapaint.jpeg';
// import mithilapaint1 from './Productimage/mithlapaint1.jpeg';
// import wall from './Productimage/madhubaniwall.jpeg';
// import wall1 from './Productimage/madubaniwallhangi1.jpeg';
// import wall2 from './Productimage/madhubaniwalhanging2.jpeg';
// import kurta from './Productimage/menskurta.jpeg';
// import kurta1 from './Productimage/menkurta1.jpeg';
// import kidscraft from './Productimage/kidscraft.jpeg';
// import kidscraft1 from './Productimage/kidscraft1.jpeg';
// import kurtawhite from './Productimage/menkurta2.jpeg';
// import kurtawhite1 from './Productimage/menkurta3.jpeg';
// import kurtacream from './Productimage/menkurta4.jpeg';
// import kurtacream1 from './Productimage/menkurta5.jpeg';
// import dupata from './Productimage/dupata1.jpeg';
// import dupata1 from './Productimage/dupata.jpeg';
// import menkurtas from './Productimage/menkurta7.jpeg'
// import menkurta1 from './Productimage/menkurta6.jpeg';
// import mithlarthang from './Productimage/mitharthang.jpeg'
// import mithlarthang1 from './Productimage/mithlaart.jpeg'
// import loutsart from './Productimage/loutsart1.jpeg'
// import loutsart1 from './Productimage/loutsart.jpeg'
// import radhapaint from '../pages/Productimage/radapaint.jpeg'
// import radhapaint1 from './Productimage/radhapaint1.jpeg'
// import madubanifish from './Productimage/madubanifish1.jpeg'
// import madhubanifish1 from './Productimage/madhubanifish.jpeg'
// import cover from './Productimage/cover.jpeg';
// import cover1 from './Productimage/cover1.jpeg';
// import madhubani3 from './Productimage/madhubani3.jpeg';
// import madhubani4 from './Productimage/madhubani4.jpeg';
// import madhubani5 from './Productimage/madhubani5.jpeg';
// import madhubani6 from './Productimage/madhubani6.jpeg';
// import madhubani7 from './Productimage/madhubani7.jpeg';
// import madhubani8 from './Productimage/madhubani8.jpeg';
// import budh from './Productimage/budhpainting.jpeg';
// import budh1 from './Productimage/budhpainting1.jpeg';
// import madhubani9 from './Productimage/madhubani9.jpeg';
// import madhubani10 from './Productimage/madhubani10.jpeg';
// import madhubani11 from './Productimage/madhubani11.jpeg';
// import madhubani12 from './Productimage/madhubani11.jpeg';
// import shorahi from './Productimage/shorahitraditional.jpeg';
// import shorahi1 from './Productimage/shorahitraditional1.jpeg';
// import kohabr from './Productimage/kohabr1.jpeg';
// import kohabr1 from './Productimage/kohabr.jpeg';
// import madhubani13 from './Productimage/madhubani13.jpeg';
// import madhubani14 from './Productimage/madhubani14.jpeg';
// import mithla2 from './Productimage/mithla2.jpeg';
// import mithla3 from './Productimage/mithla3.jpeg';
// import madhubanifish from './Productimage/madhubani15.jpeg';
// import madhubanifishnew from './Productimage/madhubani15.jpeg';
// import madhubnai17 from './Productimage/madhubani17.jpeg';
// import madhubani18 from './Productimage/madhubani18.jpeg';
// import madhubani19 from './Productimage/madhubani19.jpeg';
// import madhubani20 from './Productimage/madhubani20.jpeg';
// import madhubani21 from './Productimage/madhubani21.jpeg';
// import madhubani22 from './Productimage/madhubani22.jpeg';
// import madhubani23 from './Productimage/madhubani23.jpeg';
// import madhubani24 from './Productimage/madhubani24.jpeg';
// import madhubani25 from './Productimage/madhubani25.jpeg';
// import madhubani26 from './Productimage/madhubani25.jpeg';
// import madhubani27 from './Productimage/madhubani27.jpeg';
// import madhubani28 from './Productimage/madhubani28.jpeg';
// import lahnga from './Productimage/lahanga.jpeg';
// import lahnga1 from './Productimage/lahnga1.jpeg';
// import lahnga2 from './Productimage/lahanga3.jpeg';
// import setlagnga from './Productimage/mithilalahnga.jpeg';
// import setlagnnga1 from './Productimage/mithilalanngha1.jpeg';
// import bedshit from './Productimage/bedshit.jpeg';
// import bedshit1 from './Productimage/bedshit1.jpeg';
// import suitemithila from './Productimage/mithilashute.jpeg';
// import sutemithila1 from './Productimage/mithilasute1.jpeg';
// import qrImage from "./vendorimage/qr1.jpeg";
// import madhubaninew from './Productimage/madhubaninew.jpeg';
// import madhubaninew1 from './Productimage/madhubaninew1.jpeg';




// const products = [
//   {
//     id: 1,
//     brand: "Girls Kurti",
//     artist: "Ved Prabha",
//     currentPrice: "Rs. 1,999",
//     originalPrice: "Rs. 2,499",
//     discount: "20%",
//     images: [
//       kurti1,
//       kurti2,
//       kurti3
//     ],
//     category: "Textile",
//     subcategory: "Girls Kurti",
//     rating: 4.3,
//     reviews: 127,
//     size: ["M", "L", "XL"],
//     color: ["White-Cream"],
//     material: "Silk",
//     description:
//       "Celebrate Indian heritage with this exclusive Maithili Painting Silk Kurti. Handcrafted by skilled artisan Ved Prabha, each piece features authentic hand-painted artwork that reflects the rich cultural traditions of Mithila. Designed for comfort and elegance, this kurti is perfect for festive occasions, ethnic days, or casual traditional wear. A unique blend of art and fashion, made to stand out in any wardrobe.",
//     story: [
//       "Fabric: Silk",
//       "Art Work: Hand-painted Maithili Painting",
//       "Sizes Available: M, L, XL",
//       "Fit: Comfortable & Elegant",
//       "Occasion: Festive Wear / Ethnic Day / Casual Traditional",
//       "Limited stock available"
//     ]
//   },
//   {
//     id: 2,
//     brand: "Khadi Cotton Mithila Suit Set",
//     artist: "Ved Prabha",
//     currentPrice: "₹3,500",
//     originalPrice: "₹4,200",
//     discount: "15%",
//     images: [
//       suite,
//       suite1,

//     ],
//     category: "Textile",
//     subcategory: "Girls Kurti",
//     rating: 4.7,
//     reviews: 86,
//     size: ["M", "L", "XL"],
//     color: ["Cream", "Natural"],
//     description:
//       "This elegant suit set is crafted from pure Khadi cotton and features authentic Mithila hand painting, completely hand-worked by artist Ved Prabha. Comfortable, breathable, and rich in traditional artistry, each piece is truly unique.",
//     material: "Khadi Cotton",
//     story: [
//       "Fabric: Khadi Cotton",
//       "Art: Mithila Hand Painting",
//       "Work: Hand Painted",
//       "Artist: Ved Prabha",
//       "Weight: 300 g",
//       "Price: ₹3,500",
//       "Comfortable and breathable for all-day wear",
//       "Perfect for festive, ethnic, and casual occasions"
//     ]
//   },

//   {
//     id: 3,
//     brand: "Handmade Sohrai Tribal Painting",
//     artist: "Local Tribal Artist",
//     currentPrice: "₹499",
//     originalPrice: "₹699",
//     discount: "28%",
//     images: [
//       shorai,
//       shorai1,

//     ],
//     category: "Painting",
//     subcategory: "Sohrai Jharkhand Painting",
//     rating: 4.5,
//     reviews: 42,
//     size: ["A4"],
//     color: ["Multicolor"],
//     description:
//       "This Sohrai Tribal Painting is a beautiful piece of handmade traditional Indian folk art, created with care and fine detailing. Sohrai art reflects rich cultural heritage and is known for its natural patterns, symbolic motifs, and earthy colors. Each painting is hand-painted, making every piece unique. The artwork comes with a sturdy decorative frame, ready to enhance the look of your home, office, or creative space. It also makes a meaningful and artistic gift option.",
//     material: "Hand-painted on traditional base with frame",
//     story: [
//       "100% Handmade Sohrai Painting",
//       "Authentic Traditional Tribal Folk Art",
//       "Comes with a decorative frame",
//       "Ideal for home décor, office décor, and gifting",
//       "Each piece is unique and artist-made"
//     ]
//   },

//   {
//     id: 4,
//     brand: " Mithila (Madhubani) Painting",
//     artist: "Douli Kumari",
//     currentPrice: "₹799",
//     originalPrice: "₹999",
//     discount: "20%",
//     images: [
//       madhubani,
//       madhubani1,

//     ],
//     category: "Painting",
//     subcategory: "Mithila Painting",
//     rating: 4.6,
//     reviews: 58,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "This beautiful handmade Mithila painting showcases the vibrant style of traditional folk art combined with fine hand craftsmanship. Created by artist Douli Kumari, the artwork features natural colors and traditional patterns that reflect the rich cultural heritage of India. It is a perfect decorative piece for homes, offices, or galleries, and also a valuable collectible for art lovers.",
//     material: "Traditional hand-painted artwork",
//     story: [
//       "Art Form: Hand-made Mithila (Madhubani) Painting",
//       "Artist: Douli Kumari",
//       "Size: A3",
//       "Medium: Traditional hand-painted artwork",
//       "Ideal for home décor, gifting, and art collection",
//       "Each painting is uniquely handmade"
//     ]
//   },


//   {
//     id: 5,
//     brand: "Maithili Painting – Handcrafted Folk Art",
//     artist: "Dauli Kumari",
//     currentPrice: "₹799",
//     originalPrice: "₹999",
//     discount: "20%",
//     images: [
//       mathliblue,
//       mathliblue1,
//     ],
//     category: "Painting",
//     subcategory: "Mithila Painting",
//     rating: 4.5,
//     reviews: 36,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "This authentic Maithili painting is a beautiful example of traditional Indian folk art, handmade by artist Dauli Kumari. The artwork features intricate patterns and vibrant colors that reflect the cultural richness of the Mithila tradition. Perfect for home décor, office spaces, or as a meaningful gift, this painting adds a touch of heritage and elegance to any wall.",
//     material: "Hand-painted on paper",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Style: Maithili Folk Art",
//       "Size: A3 (11.7 × 16.5 inches)",
//       "Medium: Hand-painted on paper",
//       "Frame: As shown (optional/customizable)",
//       "Ideal for home décor, office spaces, or gifting",
//       "Traditional artwork reflecting Mithila heritage"
//     ]
//   },
//   {
//     id: 6,
//     brand: "Authentic Handcrafted Maithili Painting",
//     artist: "Vidya Jha",
//     currentPrice: "₹1299",
//     originalPrice: "₹1599",
//     discount: "19%",
//     images: [
//       mithilapaint,
//       mithilapaint1
//     ],
//     category: "Painting",
//     subcategory: "Mithila Painting",
//     rating: 4.7,
//     reviews: 24,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "This beautiful Maithili folk art painting showcases the rich heritage and cultural depth of traditional Indian art. Completely handcrafted by skilled artist Vidya Jha, the artwork reflects intricate detailing, expressive lines, and authentic folk motifs. Created using traditional techniques and vibrant colors, this painting brings warmth, elegance, and cultural charm to any space.",
//     material: "Hand-painted artwork",
//     story: [
//       "Artist: Vidya Jha",
//       "Art Style: Maithili Folk Art",
//       "Type: Handcrafted Painting",
//       "Medium: Traditional hand-painted artwork",
//       "Ideal for home décor, office interiors, or gifting",
//       "Authentic folk motifs and vibrant colors",
//       "Reflects traditional Indian cultural heritage"
//     ]
//   },
//   {
//     id: 7,
//     brand: "Hand-Painted Madhubani Wall Hanging",
//     artist: "Vidhi Jha",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [

//       wall,
//       wall1,
//       wall2,
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Wall Hanging",
//     rating: 4.6,
//     reviews: 18,
//     size: ["A4"],
//     color: ["Multicolor"],
//     description:
//       "This hand-painted Madhubani wall hanging is a beautiful representation of traditional Indian folk art. Carefully crafted by artist Vidhi Jha, the artwork reflects intricate detailing, cultural motifs, and authentic Madhubani style. Painted using traditional techniques and vibrant colors, it adds a touch of heritage and elegance to any space.",
//     material: "Hand-painted artwork",
//     story: [
//       "Artist: Vidhi Jha",
//       "Art Style: Madhubani (Maithili Folk Art)",
//       "Type: Hand-Painted Wall Hanging",
//       "Size: A4",
//       "Traditional techniques with vibrant colors",
//       "Ideal for home décor, office interiors, or gifting",
//       "Authentic handcrafted folk artwork"
//     ]
//   },
//   {
//     id: 8,
//     brand: "Hand-Painted Mithila Cotton Kurta with Silk Dupatta",
//     artist: "Ved Prabha",
//     currentPrice: "₹2298",
//     originalPrice: "₹2598",
//     discount: "12%",
//     images: [
//       kurta,
//       kurta1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Kurta",
//     rating: 4.7,
//     reviews: 22,
//     size: ["S", "M", "L", "XL"],
//     color: ["Multicolor"],
//     description:
//       "This hand-painted Mithila cotton kurta showcases authentic Maithili artwork, carefully crafted by artist Ved Prabha. Made from soft cotton, it offers comfort with a touch of tradition. Paired with an elegant silk dupatta featuring hand work, this set is perfect for festive and cultural wear.",
//     material: "Cotton Kurta with Silk Dupatta",
//     story: [
//       "Artist: Ved Prabha",
//       "Craft: Authentic Mithila Hand Painting",
//       "Kurta Fabric: Pure Cotton",
//       "Kurta Work: Hand-painted Mithila Design",
//       "Kurta Price: ₹1499",
//       "Dupatta Fabric: Silk",
//       "Dupatta Work: Hand Work",
//       "Dupatta Price: ₹799",
//       "Ideal for festive and cultural occasions"
//     ]
//   },
//   {
//     id: 9,
//     brand: " Hand Work Cotton Kurti Suit Set with Pajama & Dupatta",
//     artist: "Ved Prabha",
//     currentPrice: "₹2499",
//     originalPrice: "₹2999",
//     discount: "17%",
//     images: [

//       kidscraft1, kidscraft,
//     ],
//     category: "Textile",
//     subcategory: "Kids Cloth",
//     rating: 4.8,
//     reviews: 18,
//     size: ["5 Year", "8 Year", "10 Year", "S"],
//     color: ["Multicolor"],
//     description:
//       "This elegant Mithila painting kids kurti suit set is handcrafted by artist Ved Prabha. Made from pure cotton, the set features authentic Maithili hand-painted artwork. It includes a kurti, pajama, and dupatta, making it a perfect choice for festive, cultural, and ethnic wear for children.",
//     material: "Pure Cotton",
//     story: [
//       "Brand: Ved Prabha",
//       "Artist: Ved Prabha",
//       "Art Form: Mithila / Maithili Painting",
//       "Fabric: Pure Cotton",
//       "Work: Hand Work / Hand Painted",
//       "Set Includes: Kurti, Pajama & Dupatta",
//       "Quantity: 1 Complete Set",
//       "Occasion: Festive, Cultural, Casual, Ethnic Wear",
//       "Suitable for Kids"
//     ]
//   },
//   {
//     id: 10,
//     brand: " Men Mithila Painting Hand Work Cotton Kurta",
//     artist: "Ved Prabha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       kurtawhite,
//       kurtawhite1,
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Kurta",
//     rating: 4.6,
//     reviews: 22,
//     size: ["S", "M", "L", "XL", "XXL"],
//     color: ["White"],
//     description:
//       "Celebrate the beauty of Mithila art with this Ved Prabha cotton kurta, featuring authentic hand-worked Maithili painting. Made from premium cotton fabric, it offers comfort, breathability, and a refined ethnic look. Ideal for festive, cultural, and traditional wear, each kurta is uniquely hand-painted, showcasing timeless craftsmanship and heritage.",
//     material: "Pure Cotton",
//     story: [
//       "Brand: Ved Prabha",
//       "Product Type: Men’s Kurta (Only Kurta)",
//       "Art Form: Mithila / Maithili Painting",
//       "Fabric: Pure Cotton",
//       "Work: Hand Work / Hand Painted",
//       "Color: White",
//       "Fit: Regular Fit",
//       "Occasion: Festive, Cultural, Ethnic Wear",
//       "Authentic handcrafted Maithili design"
//     ]
//   },
//   {
//     id: 11,
//     brand: " Men Mithila Painting Hand Work Cotton Kurta",
//     artist: "Ved Prabha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       kurtacream,
//       kurtacream1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Kurta",
//     rating: 4.6,
//     reviews: 22,
//     size: ["S", "M", "L", "XL", "XXL"],
//     color: ["White-cream"],
//     description:
//       "Celebrate the beauty of Mithila art with this Ved Prabha cotton kurta, featuring authentic hand-worked Maithili painting. Made from premium cotton fabric, it offers comfort, breathability, and a refined ethnic look. Ideal for festive, cultural, and traditional wear, each kurta is uniquely hand-painted, showcasing timeless craftsmanship and heritage.",
//     material: "Pure Cotton",
//     story: [
//       "Brand: Ved Prabha",
//       "Product Type: Men’s Kurta (Only Kurta)",
//       "Art Form: Mithila / Maithili Painting",
//       "Fabric: Pure Cotton",
//       "Work: Hand Work / Hand Painted",
//       "Color: White",
//       "Fit: Regular Fit",
//       "Occasion: Festive, Cultural, Ethnic Wear",
//       "Authentic handcrafted Maithili design"
//     ]
//   },
//   {
//     id: 12,
//     brand: "Mithila Hand-Painted Silk Dupatta",
//     artist: "Ved Prabha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       dupata,
//       dupata1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Dupatta",
//     rating: 4.6,
//     reviews: 24,
//     size: ["Free Size"],
//     color: ["Multicolor"],
//     description:
//       "This Mithila hand-painted silk dupatta is crafted on premium silk fabric and features authentic Madhubani artwork. Created by artist Ved Prabha, each piece is carefully hand-painted, making it unique and rich in traditional heritage. The soft, lightweight texture and elegant drape make it perfect for festive wear, cultural events, and gifting.",
//     material: "Pure Silk",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila (Madhubani) Painting",
//       "Fabric: Premium Silk",
//       "Craft: 100% Hand-painted & Hand work",
//       "Texture: Soft, smooth & elegant drape",
//       "Use: Festive wear, ethnic styling, gifting",
//       "Each piece is unique and handcrafted"
//     ]
//   },
//   {
//     id: 13,
//     brand: "Mithila Hand-Painted Cotton Kurta",
//     artist: "Ved Prabha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       menkurtas,
//       menkurta1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Kurta",
//     rating: 4.5,
//     reviews: 32,
//     size: ["S", "M", "L", "XL"],
//     color: ["Multicolor"],
//     description:
//       "This elegant cotton kurta features authentic Mithila (Madhubani) hand painting, meticulously created by artisan Ved Prabha. The artwork reflects traditional folk motifs, birds, and cultural patterns, making each piece truly one of a kind. Crafted from premium cotton, the kurta is lightweight, breathable, and ideal for festive wear, cultural events, and everyday ethnic styling.",
//     material: "Pure Cotton",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila Painting",
//       "Fabric: Soft & breathable Cotton",
//       "Craft: 100% Hand-painted / Hand work",
//       "Fit: Comfortable & elegant",
//       "Occasion: Festive, cultural, casual ethnic wear",
//       "Each piece is unique and handcrafted"
//     ]
//   },
//   {
//     id: 14,
//     brand: "Madhubani Hand-Painted Wall Art – Peacock Fish Motif",
//     artist: "Vidhi Jha",
//     currentPrice: "₹799",
//     originalPrice: "₹999",
//     discount: "20%",
//     images: [
//       mithlarthang,
//       mithlarthang1
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Wall Art",
//     rating: 4.6,
//     reviews: 28,
//     size: ["A4"],
//     color: ["Multicolor"],
//     description:
//       "This authentic Madhubani (Mithila) hand-painted artwork by artist Vidhi Jha showcases a graceful peacock-inspired fish motif, symbolizing prosperity and harmony. Created with intricate handwork and vibrant colors, it adds rich cultural charm to both modern and traditional interiors, making it perfect for home décor, office spaces, and gifting.",
//     material: "Hand-painted on paper",
//     story: [
//       "Artist: Vidhi Jha",
//       "Art Form: Authentic Madhubani (Mithila) Painting",
//       "Technique: 100% Hand-painted",
//       "Theme: Peacock Fish & Traditional Motifs",
//       "Style: Folk & Ethnic Wall Art",
//       "Ideal for home décor, office décor, and gifting",
//       "Traditional artwork symbolizing prosperity and harmony"
//     ]
//   },
//   {
//     id: 15,
//     brand: "Hand-Painted Madhubani Lotus Art",
//     artist: "Vidhi Jha",
//     currentPrice: "₹999",
//     originalPrice: "₹1,199",
//     discount: "17%",
//     images: [
//       loutsart,
//       loutsart1
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.7,
//     reviews: 18,
//     size: ["1/4"],
//     color: ["Multicolor"],
//     description:
//       "This authentic Madhubani (Mithila) painting is hand-crafted by artist Vidhi Jha, featuring a vibrant lotus motif that symbolizes purity, positivity, and prosperity. With rich traditional patterns, bold colors, and fine detailing, this artwork beautifully blends culture and elegance. Perfect for home décor, office spaces, or as a thoughtful artistic gift.",
//     material: "Hand-painted on paper",
//     story: [
//       "Artist: Vidhi Jha",
//       "Art Style: Madhubani / Mithila",
//       "Size: 1/4",
//       "Technique: 100% Hand-painted",
//       "Theme: Lotus – symbol of purity and prosperity",
//       "Ideal for home décor, offices, and gifting",
//       "Traditional artwork reflecting Mithila heritage"
//     ]
//   },
//   {
//     id: 16,
//     brand: "Handmade Maithili Painting – Radha Krishna Theme",
//     artist: "Ved Prabha",
//     currentPrice: "₹4,000",
//     originalPrice: "₹4,800",
//     discount: "17%",
//     images: [
//       radhapaint,
//       radhapaint1
//     ],
//     category: "Painting",
//     subcategory: "Mithila Painting",
//     rating: 4.9,
//     reviews: 12,
//     size: ["31 x 21 inches"],
//     color: ["Multicolor"],
//     description:
//       "Bring home the beauty of Indian folk art with this stunning hand-painted Maithili artwork, created by renowned artist Ved Prabha. This Radha Krishna themed painting features vibrant colors, intricate detailing, and traditional motifs inspired by Mithila culture. Every line and pattern is drawn by hand, making each piece unique and authentic. Perfect for living rooms, offices, galleries, or as a thoughtful gift for art lovers.",
//     material: "Hand-painted traditional artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Style: Traditional Maithili (Madhubani) Painting",
//       "Work Type: 100% Hand Work | Completely Handmade",
//       "Theme: Radha Krishna",
//       "Size: 31 x 21 inches (Full Size)",
//       "Original handmade artwork with natural colors",
//       "Premium decorative piece with cultural value"
//     ]
//   },
//   {
//     id: 17,
//     brand: "Handmade Madhubani Fish Painting",
//     artist: "Vidya Jha",
//     currentPrice: "₹599",
//     originalPrice: "₹799",
//     discount: "25%",
//     images: [
//       madubanifish,
//       madhubanifish1
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.6,
//     reviews: 22,
//     size: ["1/4"],
//     color: ["Multicolor"],
//     description:
//       "This beautiful handmade Madhubani painting is created by artist Vidya Jha in a traditional Mithila style. The four-fish motif symbolizes prosperity, harmony, and positive energy. Featuring vibrant colors, fine hand detailing, and a premium black frame, this artwork is perfect for enhancing your home or office décor and makes a thoughtful gift for art lovers.",
//     material: "Hand-painted artwork with premium frame",
//     story: [
//       "Artist: Vidya Jha",
//       "Art Style: Traditional Madhubani / Mithila",
//       "Work: 100% Handmade",
//       "Theme: Four Fish – symbol of prosperity and harmony",
//       "Size: 1/4",
//       "Frame: Premium Black Frame Included",
//       "Ideal for home décor, office décor, and gifting",
//       "Original handmade traditional artwork"
//     ]
//   },
//   {
//     id: 18,
//     brand: "Hand-Painted Maithili Art Mobile Cover",
//     artist: "Bhavna Jha",
//     currentPrice: "₹299",
//     originalPrice: "₹399",
//     discount: "25%",
//     images: [
//       cover,
//       cover1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Mobile Cover",
//     rating: 4.4,
//     reviews: 18,
//     size: ["Standard"],
//     color: ["Multicolor"],
//     description:
//       "Enhance your phone with this hand-painted mobile cover featuring an authentic Maithili painting design. Crafted by artist Bhavna Jha, this cover blends traditional Indian folk art with everyday utility, making each piece truly unique and stylish.",
//     material: "Hand-painted protective mobile cover",
//     story: [
//       "Artist: Bhavna Jha",
//       "Art Style: Maithili / Mithila Folk Art",
//       "Work: 100% Hand-painted",
//       "Type: Decorative mobile cover",
//       "Unique handmade design on each piece",
//       "Perfect for daily use and gifting",
//       "Blends traditional art with modern utility"
//     ]
//   },
//   {
//     id: 19,
//     brand: "Authentic Madhubani Painting (A2 Size) – Framed Wall Art",
//     artist: "Sujata Jha",
//     currentPrice: "₹1299",
//     originalPrice: "₹1599",
//     discount: "20%",
//     images: [
//       madhubani3,
//       madhubani4
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.7,
//     reviews: 31,
//     size: ["A2"],
//     color: ["Multicolor"],
//     description:
//       "Enhance your home décor with this beautifully handcrafted Madhubani painting created by artist Sujata Jha. The artwork features traditional Maithili motifs, vibrant natural colors, and intricate detailing that reflect the rich cultural heritage of Mithila. Framed and ready to hang, it adds elegance and tradition to any space.",
//     material: "Handmade painting with decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Style: Traditional Madhubani / Maithili",
//       "Work: 100% Handmade",
//       "Size: A2",
//       "Framed: Ready to hang wall art",
//       "Features vibrant natural colors and intricate motifs",
//       "Ideal for living rooms, offices, and gifting",
//       "Traditional artwork reflecting Mithila heritage"
//     ]
//   },
//   {
//     id: 20,
//     brand: "Madhubani Surya Painting (A3 Size) – Traditional Framed Wall Art",
//     artist: "Sujata Jha",
//     currentPrice: "₹1199",
//     originalPrice: "₹1399",
//     discount: "15%",
//     images: [
//       madhubani5,
//       madhubani6
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.6,
//     reviews: 24,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "Bring positive energy and traditional charm into your space with this beautiful Madhubani Surya (Sun) painting, hand-painted by artist Sujata Jha. The vibrant yellow and red rays with intricate Maithili detailing represent strength, positivity, and prosperity. Framed and ready to hang, this artwork adds warmth and heritage to any interior.",
//     material: "Handmade painting with decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Style: Traditional Madhubani / Mithila",
//       "Theme: Surya (Sun) – symbol of strength and prosperity",
//       "Work: 100% Handmade",
//       "Size: A3",
//       "Framed: Ready to hang",
//       "Ideal for home décor, office spaces, and gifting",
//       "Authentic artwork reflecting Mithila heritage"
//     ]
//   },
//   {
//     id: 21,
//     brand: "Handmade A2 Maithili Madhubani Painting (Traditional Art)",
//     artist: "Sujata Jha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       madhubani7,
//       madhubani8
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.7,
//     reviews: 31,
//     size: ["A2"],
//     color: ["Multicolor"],
//     description:
//       "Bring home the elegance of traditional Indian art with this authentic handmade Maithili Madhubani painting crafted by artist Sujata Jha. Designed with intricate detailing and vibrant natural colors, this artwork reflects cultural heritage and fine craftsmanship. Perfect for enhancing your wall décor, this painting adds a classic artistic touch to any interior space.",
//     material: "Handmade painting with decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Form: Traditional Maithili / Madhubani Painting",
//       "Style: Folk Art",
//       "Size: A2",
//       "Type: Handmade Artwork",
//       "Colors: Vibrant natural tone palette",
//       "Frame: Included (as shown)",
//       "Orientation: Horizontal",
//       "Ideal for home décor, office décor, and gifting"
//     ]
//   },
//   {
//     id: 22,
//     brand: "Handmade Madhubani Buddha Wall Painting with Frame",
//     artist: "Sujata Jha",
//     currentPrice: "₹1499",
//     originalPrice: "₹1799",
//     discount: "17%",
//     images: [
//       budh,
//       budh1
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.8,
//     reviews: 19,
//     size: ["A2"],
//     color: ["Multicolor"],
//     description:
//       "Bring peace, culture, and elegance to your space with this beautiful handmade Madhubani painting crafted by artist Sujata Jha. Depicting Lord Buddha in a calm meditation pose beneath the sacred Bodhi tree, this artwork showcases authentic Maithili folk art through intricate detailing, vibrant colors, and traditional patterns. Framed and ready to hang, it is ideal for homes, offices, meditation rooms, or gifting.",
//     material: "Handmade painting with premium decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Form: Traditional Madhubani / Maithili Painting",
//       "Theme: Lord Buddha under Bodhi Tree",
//       "Work: 100% Handmade",
//       "Size: A2",
//       "Frame: Included (Wall Hanging Ready)",
//       "Ideal for home décor, spiritual spaces, and gifting",
//       "Authentic artwork reflecting Mithila heritage"
//     ]
//   },
//   {
//     id: 23,
//     brand: "Handmade Madhubani Radha Krishna Wall Hanging Painting",
//     artist: "Sujata Jha",
//     currentPrice: "₹1199",
//     originalPrice: "₹1499",
//     discount: "20%",
//     images: [
//       madhubani9,
//       madhubani10
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.7,
//     reviews: 14,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "This beautiful handmade Madhubani painting by artist Sujata Jha depicts Radha and Krishna surrounded by vibrant traditional motifs and fine detailing. Crafted in authentic Maithili style and framed for easy wall hanging, this artwork adds a spiritual and cultural charm to any space.",
//     material: "Handmade painting with decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Form: Traditional Madhubani / Maithili Painting",
//       "Theme: Radha Krishna with Nature Motifs",
//       "Work: 100% Handmade",
//       "Size: A3",
//       "Frame: Included (Wall Hanging Ready)",
//       "Perfect for home décor, gifting, and cultural interiors",
//       "Authentic artwork representing Mithila heritage"
//     ]
//   },
//   {
//     id: 24,
//     brand: "Handmade Madhubani Traditional Wall Hanging Painting",
//     artist: "Sujata Jha",
//     currentPrice: "₹899",
//     originalPrice: "₹1199",
//     discount: "25%",
//     images: [
//       madhubani11,
//       madhubani12
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.6,
//     reviews: 10,
//     size: ["A3"],
//     color: ["Multicolor"],
//     description:
//       "Add a touch of Indian tradition to your space with this beautiful handmade Madhubani painting crafted by artist Sujata Jha. Designed with intricate patterns, vibrant colors, and authentic Maithili folk style, this framed artwork is perfect for wall décor, gifting, or cultural interiors.",
//     material: "Handmade painting with decorative frame",
//     story: [
//       "Artist: Sujata Jha",
//       "Art Form: Traditional Madhubani Painting",
//       "Size: A3",
//       "Type: Handcrafted Artwork",
//       "Frame: Included (Wall Hanging Ready)",
//       "Traditional Maithili folk design",
//       "Ideal for home décor and gifting",
//       "Authentic handmade cultural artwork"
//     ]
//   },
//   {
//     id: 25,
//     brand: "Sohari Traditional Folk Painting",
//     artist: "Local Tribal Artist",
//     currentPrice: "₹1299",
//     originalPrice: "₹1599",
//     discount: "19%",
//     images: [
//       shorahi,
//       shorahi1
//     ],
//     category: "Painting",
//     subcategory: "Sohrai Jharkhand Painting",
//     rating: 4.5,
//     reviews: 8,
//     size: ["A2"],
//     color: ["Multicolor"],
//     description:
//       "Authentic Sohari painting inspired by traditional tribal art, featuring vibrant colors and cultural motifs. This framed artwork brings ethnic charm and heritage to any home or office décor.",
//     material: "Handmade painting with premium frame",
//     story: [
//       "Art Form: Sohari Traditional Folk Painting",
//       "Size: A2",
//       "Type: Handcrafted Artwork",
//       "Frame: Included (Wall Hanging Ready)",
//       "Inspired by tribal cultural motifs",
//       "Vibrant traditional color palette",
//       "Ideal for home, office décor, and gifting",
//       "Authentic ethnic wall art"
//     ]
//   },
//   {
//     id: 26,
//     brand: "Kohar Handmade Painting",
//     artist: "Bhavna Jha",
//     currentPrice: "₹1799",
//     originalPrice: "₹2199",
//     discount: "18%",
//     images: [
//       kohabr,
//       kohabr1
//     ],
//     category: "Painting",
//     subcategory: "Sohrai Jharkhand Painting",
//     rating: 4.7,
//     reviews: 12,
//     size: ["21 x 15 Inch"],
//     color: ["Multicolor"],
//     description:
//       "Authentic Kohar painting handcrafted by artist Bhavna Jha, featuring intricate detailing, divine motifs, and traditional Madhubani elements. A culturally rich artwork perfect for modern and traditional interiors.",
//     material: "Handmade painting",
//     story: [
//       "Art Form: Kohar / Madhubani Folk Painting",
//       "Artist: Bhavna Jha",
//       "Size: 21 x 15 Inches (Half Size)",
//       "100% Handmade Artwork",
//       "Origin: Bihar, India",
//       "Traditional cultural motifs",
//       "Ideal for living room, bedroom, office, or gallery",
//       "Perfect for housewarming, wedding, and cultural gifting"
//     ]
//   },
//   {
//     id: 27,
//     brand: "Madhubani Handmade Painting",
//     artist: "Ved Prabha",
//     currentPrice: "₹1999",
//     originalPrice: "₹2499",
//     discount: "20%",
//     images: [
//       madhubani13,
//       madhubani14
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.8,
//     reviews: 9,
//     size: ["21 x 15 Inch (Half Size)"],
//     color: ["Multicolor"],
//     description:
//       "Authentic handmade Madhubani painting created by artist Ved Prabha using traditional techniques on a high-quality handmade sheet. This artwork features vibrant colors, intricate detailing, and rich cultural storytelling.",
//     material: "Handmade sheet with hand-painted artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Traditional Madhubani / Mithila Painting",
//       "Size: 21 x 15 Inches (Half Size)",
//       "100% Handmade & Hand-painted",
//       "Material: Handmade Sheet",
//       "Rich cultural and traditional motifs",
//       "Perfect for home décor, office, gallery, or gifting",
//       "Original artwork with unique detailing"
//     ]
//   },
//   {
//     id: 28,
//     brand: "Maithili Handmade Painting",
//     artist: "Ved Prabha",
//     currentPrice: "₹1999",
//     originalPrice: "₹2499",
//     discount: "20%",
//     images: [
//       mithla2,
//       mithla3,
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.7,
//     reviews: 11,
//     size: ["21 x 15 Inch (Half Size)"],
//     color: ["Multicolor"],
//     description:
//       "Beautiful handmade Maithili (Madhubani) painting crafted by artist Ved Prabha on a high-quality handmade sheet. This artwork reflects traditional folk motifs, vibrant colors, and the rich cultural heritage of Bihar.",
//     material: "Handmade sheet with hand-painted artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Traditional Maithili / Madhubani Painting",
//       "Size: 21 x 15 Inches (Half Size)",
//       "100% Handmade and Handcrafted",
//       "Material: Handmade Sheet",
//       "Authentic cultural and traditional design",
//       "Represents the heritage of Mithila art",
//       "Ideal for home décor, office, or gifting",
//       "Unique and original handmade artwork"
//     ]
//   },
//   {
//     id: 29,
//     brand: "Madhubani Fish Painting",
//     artist: "Dauli Kumari",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [
//       madhubanifish,
//       madhubanifishnew
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.6,
//     reviews: 8,
//     size: ["A3 Size"],
//     color: ["Orange", "Multicolor"],
//     theme: "Fish (Symbol of Prosperity & Good Luck)",
//     description:
//       "Beautiful handmade Madhubani Fish Painting created by folk artist Dauli Kumari. This original artwork features a traditional circular mandala design with two fish symbolizing prosperity, harmony, and good fortune. The vibrant orange background and intricate detailing make it a perfect ethnic wall décor piece.",
//     material: "Hand-painted on quality art sheet",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Style: Traditional Madhubani",
//       "Size: A3",
//       "Theme: Fish – Symbol of Prosperity & Good Luck",
//       "100% Handmade and Original Artwork",
//       "Intricate mandala-inspired circular design",
//       "Bright and vibrant traditional color combination",
//       "Perfect for Home Decor, Office Decor, Café, or Gift Purpose",
//       "Authentic Indian folk art"
//     ]
//   },
//   {
//     id: 30,
//     brand: "Maithili Motivational Painting",
//     artist: "Dauli Kumari",
//     title: "Satisfy Your Soul Not the Society – Handmade Madhubani Art",
//     currentPrice: "₹899",
//     originalPrice: "₹1199",
//     discount: "25%",
//     images: [
//       madhubnai17,
//       madhubani18
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.8,
//     reviews: 6,
//     size: ["A3 Size"],
//     color: ["Multicolor"],
//     theme: "Motivational Quote with Traditional Folk Patterns",
//     description:
//       "Handmade Maithili (Madhubani) painting created by artist Dauli Kumari featuring the inspiring quote 'Satisfy Your Soul Not the Society.' This original artwork blends vibrant folk patterns, floral motifs, and intricate detailing that beautifully represent the heritage of Mithila art.",
//     material: "Hand-painted on quality art sheet",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Form: Traditional Maithili / Madhubani Painting",
//       "Size: A3",
//       "100% Handmade Original Artwork",
//       "Features motivational quote for daily inspiration",
//       "Decorated with traditional floral and folk motifs",
//       "Represents the rich cultural heritage of Mithila",
//       "Perfect for Home, Office, Studio, Study Room, Café or Gifting",
//       "Unique handcrafted wall décor piece"
//     ]
//   },
//   {
//     id: 31,
//     brand: "Madhubani Tree of Life Painting",
//     artist: "Dauli Kumari",
//     title: "Handmade Madhubani Tree of Life Painting (A3) – Black Framed Wall Art",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [
//       madhubani19,
//       madhubani20
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.9,
//     reviews: 5,
//     size: ["A3 Size"],
//     color: ["Green", "Black", "Multicolor"],
//     theme: "Tree of Life – Symbol of Growth & Harmony",
//     description:
//       "Handmade Madhubani Tree of Life painting created by artist Dauli Kumari. This original artwork features intricate folk patterns and a symmetrical tree design symbolizing growth, positivity, and harmony. The elegant black frame enhances its visual appeal, making it perfect for modern and traditional interiors.",
//     material: "Hand-painted on art sheet with black frame",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Form: Traditional Madhubani / Maithili Painting",
//       "Size: A3",
//       "Framing: Elegant black frame included",
//       "100% Handmade original artwork",
//       "Features symbolic Tree of Life design",
//       "Intricate hand-drawn folk patterns",
//       "Represents growth, positivity, and harmony",
//       "Perfect for Home, Office, Resort, Café, or Gifting",
//       "Unique handcrafted wall décor piece"
//     ]
//   },
//   {
//     id: 32,
//     brand: "Madhubani Peacock Painting",
//     artist: "Dauli Kumari",
//     title: "Handmade Madhubani Peacock Painting (A3) – Black Framed Wall Art",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [
//       madhubani21,
//       madhubani22
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.8,
//     reviews: 4,
//     size: ["A3 Size"],
//     color: ["Yellow", "Green", "Blue", "Multicolor"],
//     theme: "Peacock – Symbol of Beauty & Positivity",
//     description:
//       "Handmade Madhubani Peacock painting created by artist Dauli Kumari. This original artwork features a vibrant peacock in traditional Maithili style, symbolizing beauty, grace, and positivity. The bright yellow background and intricate hand-drawn patterns make it a striking wall décor piece.",
//     material: "Hand-painted on art sheet with black frame",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Form: Traditional Madhubani / Maithili Painting",
//       "Size: A3",
//       "Framing: Elegant black frame included",
//       "100% Handmade original artwork",
//       "Features vibrant peacock motif",
//       "Intricate hand-drawn folk detailing",
//       "Symbolizes beauty, grace, and positivity",
//       "Perfect for Home, Hotel, Resort, Office, or Gifting",
//       "Premium handcrafted wall décor piece"
//     ]
//   },
//   {
//     id: 33,
//     brand: "Madhubani Fish Painting",
//     artist: "Dauli Kumari",
//     title: "Handmade Madhubani Fish Painting (A3) – Premium Black Framed Wall Art",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [
//       madhubani23,
//       madhubani24
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.9,
//     reviews: 6,
//     size: ["A3 Size"],
//     color: ["Yellow", "Orange", "Multicolor"],
//     theme: "Fish – Symbol of Prosperity & Abundance",
//     description:
//       "Handmade Madhubani Fish painting created by artist Dauli Kumari. This original artwork features a vibrant fish motif, symbolizing prosperity, positivity, and abundance in traditional Mithila art. The bright yellow background and intricate hand-drawn patterns make it a striking wall décor piece.",
//     material: "Hand-painted on art sheet with premium black frame",
//     story: [
//       "Artist: Dauli Kumari",
//       "Art Form: Traditional Madhubani / Mithila Painting",
//       "Size: A3",
//       "Framing: Premium black frame included",
//       "100% Handmade original artwork",
//       "Features vibrant fish motif",
//       "Symbolizes prosperity, positivity, and abundance",
//       "Intricate hand-drawn folk detailing",
//       "Perfect for Home, Hotel, Resort, Office, Café, or Gifting",
//       "Premium handcrafted wall décor piece"
//     ]
//   },
//   {
//     id: 34,
//     brand: "Madhubani Sun Painting",
//     artist: "Sapna Kumari",
//     title: "Handmade Madhubani Sun Wall Painting (A3) – Traditional Framed Art",
//     currentPrice: "₹999",
//     originalPrice: "₹1299",
//     discount: "23%",
//     images: [
//       madhubani25,
//       madhubani26
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.8,
//     reviews: 4,
//     size: ["A3 Size"],
//     color: ["Yellow", "Orange", "Multicolor"],
//     theme: "Surya (Sun) – Symbol of Energy & Prosperity",
//     description:
//       "Handmade Madhubani Sun painting created by artist Sapna Kumari. This traditional artwork features a vibrant Surya design symbolizing energy, prosperity, and positive vibes. The bright yellow, orange, and earthy tones with intricate hand detailing make it a striking wall décor piece.",
//     material: "Hand-painted on art sheet with frame",
//     story: [
//       "Artist: Sapna Kumari",
//       "Art Form: Authentic Handmade Madhubani Painting",
//       "Size: A3",
//       "100% Handmade original artwork",
//       "Features Surya (Sun) motif",
//       "Symbolizes energy, prosperity, and positivity",
//       "Vibrant traditional color palette",
//       "Perfect for Living Room, Pooja Room, or Office",
//       "Ideal for Housewarming, Festive, and Wedding Gifts",
//       "Elegant traditional wall décor piece"
//     ]
//   },
//   {
//     id: 35,
//     brand: "Premium Maithili Tree of Life Painting",
//     artist: "Sapna Kumari",
//     title: "Premium Handmade Maithili (Madhubani) Tree of Life Painting – A6 Size",
//     currentPrice: "₹1099",
//     originalPrice: "₹1499",
//     discount: "20%",
//     images: [
//       madhubani27,
//       madhubani28
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.9,
//     reviews: 3,
//     size: ["A6 Size"],
//     color: ["Multicolor"],
//     theme: "Tree of Life – Symbol of Growth, Prosperity & Harmony",
//     description:
//       "Premium handmade Maithili (Madhubani) Tree of Life painting created by artist Sapna Kumari. This compact A6 artwork features intricate traditional patterns and vibrant colors, symbolizing prosperity, growth, and harmony. Each piece is carefully handcrafted, making it unique and one of a kind.",
//     material: "Hand-painted on premium handmade art sheet",
//     story: [
//       "Artist: Sapna Kumari",
//       "Art Form: Authentic Maithili / Madhubani Hand Painting",
//       "Size: A6 (Compact & Elegant)",
//       "100% Handmade and original artwork",
//       "Features symbolic Tree of Life design",
//       "Intricate traditional detailing",
//       "Represents prosperity, growth, and harmony",
//       "Perfect for small walls, shelves, office desks, and gifting",
//       "Premium collectible handcrafted artwork",
//       "Unique one-of-a-kind piece"
//     ]
//   },
//   {
//     id: 36,
//     brand: "Mithila Painting Lehenga Set",
//     artist: "Ved Prabha",
//     title: "Handcrafted Mithila Painting Lehenga Set – Pure Cotton Fabric | Hand Work by Ved Prabha",
//     currentPrice: "₹15,999",
//     originalPrice: "₹18,999",
//     discount: "16%",
//     images: [
//       lahnga,
//       lahnga1,
//       lahnga2
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Saree",
//     rating: 4.9,
//     reviews: 2,
//     size: ["Free Size"],
//     color: ["Multicolor"],
//     theme: "Traditional Mithila Folk Art",
//     description:
//       "Elegant handcrafted Mithila painting lehenga set made from premium cotton fabric. This complete set features authentic hand-painted artwork by artist Ved Prabha, reflecting rich cultural heritage and traditional craftsmanship. Each piece is uniquely created with intricate handwork.",
//     material: "Premium Cotton Fabric with Hand-Painted Artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila (Madhubani) Painting",
//       "Fabric: Premium Cotton",
//       "Work: 100% Handcrafted and Hand-Painted",
//       "Set Includes: Complete Lehenga Set",
//       "Traditional cultural motifs and patterns",
//       "Unique one-of-a-kind handmade piece",
//       "Comfortable and breathable fabric",
//       "Perfect for festive and cultural occasions",
//       "Premium ethnic handcrafted attire"
//     ]
//   },
//   {
//     id: 37,
//     brand: "Lehenga Set – Handcrafted Cotton",
//     artist: "Ved Prabha",
//     title: "Mithila Painting Lehenga Set – Handcrafted Cotton",
//     currentPrice: "₹15,999",
//     originalPrice: "₹18,999",
//     discount: "16%",
//     images: [
//       setlagnga,
//       setlagnnga1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Saree",
//     rating: 4.9,
//     reviews: 1,
//     size: ["Free Size"],
//     color: ["Multicolor"],
//     theme: "Traditional Mithila Folk Art",
//     quantity: "1 Set",
//     description:
//       "Elegant Mithila painting lehenga set made from premium cotton fabric, featuring authentic hand-painted artwork by renowned artist Ved Prabha. Each piece is carefully handcrafted, making every set unique and rich in traditional artistry. Perfect for cultural events, festive occasions, and heritage fashion lovers.",
//     material: "Premium Cotton with Hand-Painted Artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila (Madhubani) Painting",
//       "Fabric: Premium Cotton",
//       "Work: 100% Handcrafted & Hand-Painted",
//       "Set Includes: 1 Complete Lehenga Set",
//       "Traditional motifs with cultural detailing",
//       "Unique handmade ethnic attire",
//       "Comfortable and breathable fabric",
//       "Perfect for festive and cultural occasions"
//     ]
//   },
//   {
//     id: 38,
//     brand: "Mithila Painting Cotton Bedsheet",
//     artist: "Ved Prabha",
//     title: "Mithila Painting Cotton Bedsheet – Handcrafted Art",
//     currentPrice: "₹3,999",
//     originalPrice: "₹4,999",
//     discount: "20%",
//     images: [
//       bedshit,
//       bedshit1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Bedsheet",
//     rating: 4.8,
//     reviews: 3,
//     size: ["Double Bed"],
//     color: ["Multicolor"],
//     theme: "Traditional Mithila Folk Art",
//     description:
//       "Premium cotton bedsheet featuring authentic hand-painted Mithila artwork by artist Ved Prabha. Carefully handcrafted with intricate traditional motifs, this unique piece brings cultural elegance and artistic charm to your bedroom décor.",
//     material: "Premium Cotton with Hand-Painted Artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila (Madhubani) Painting",
//       "Fabric: Premium Cotton",
//       "100% Handcrafted & Hand-Painted",
//       "Features traditional cultural motifs",
//       "Intricate detailing and vibrant colors",
//       "Perfect for heritage-inspired interiors",
//       "Ideal for art lovers and premium home décor",
//       "Unique handmade collectible piece"
//     ]
//   },
//   {
//     id: 39,
//     brand: "Cotton Suit Set – Kurti, Pajama & Dupatta",
//     artist: "Ved Prabha",
//     title: "Hand-Painted Mithila Art Cotton Suit Set – Kurti, Pajama & Dupatta",
//     currentPrice: "₹2,699",
//     originalPrice: "₹3,499",
//     discount: "23%",
//     images: [
//       suitemithila,
//       sutemithila1
//     ],
//     category: "Handcraft & Textile",
//     subcategory: "Saree",
//     rating: 4.8,
//     reviews: 4,
//     size: ["S", "M", "L", "XL"],
//     color: ["Multicolor"],
//     theme: "Traditional Mithila Folk Art",
//     setIncludes: ["Kurti", "Pajama", "Dupatta"],
//     description:
//       "Elegant hand-painted Mithila art cotton suit set created by artist Ved Prabha. This 3-piece set includes a kurti, pajama, and dupatta, all beautifully adorned with intricate traditional artwork. Made from soft and breathable cotton fabric, each piece is handmade and unique.",
//     material: "Premium Cotton with Hand-Painted Mithila Artwork",
//     story: [
//       "Artist: Ved Prabha",
//       "Art Form: Authentic Mithila (Madhubani) Painting",
//       "Fabric: Soft & Breathable Cotton",
//       "Work: 100% Hand-Painted & Handmade",
//       "Set Includes: Kurti + Pajama + Dupatta",
//       "Intricate traditional motifs and detailing",
//       "Comfortable for festive and daily wear",
//       "Perfect for cultural events and special occasions",
//       "Unique handcrafted ethnic attire"
//     ]
//   },
//   {
//     id: 40,
//     brand: "Handmade Madhubani Tree Wall Painting ",
//     artist: "Puja Kumari",
//     title: "Handmade Madhubani Tree Wall Painting (20.5 x 6.5 Inches)",
//     currentPrice: "₹499",
//     originalPrice: "₹699",
//     discount: "29%",
//     images: [
//       madhubaninew,
//       madhubaninew1
//     ],
//     category: "Painting",
//     subcategory: "Madhubani Painting",
//     rating: 4.4,
//     reviews: 6,
//     size: ["20.5 x 6.5 inches"],
//     color: ["Multicolor"],
//     theme: "Tree of Life",
//     description:
//       "Elegant handmade Madhubani tree wall painting crafted by artist Puja Kumari. Featuring intricate detailing and vibrant natural colors, this artwork reflects the charm of traditional Indian folk art. Its slim vertical size makes it ideal for small walls, entryways, or side panels.",
//     material: "Hand-painted artwork with black frame",
//     story: [
//       "Artist: Puja Kumari",
//       "Art Form: Traditional Madhubani Painting",
//       "Theme: Tree Design",
//       "Size: 20.5 x 6.5 inches",
//       "Type: 100% Handmade Artwork",
//       "Frame: Black frame included",
//       "Ready to hang wall décor",
//       "Perfect for small walls and entryways",
//       "Budget-friendly traditional artwork"
//     ]
//   },
//   {
//   id: 41,
//   brand: "Handmade",
//   artist: "Pooja Kumari",
//   title: "Traditional Madhubani Wall Art Painting (15x20 Inches)",
//   currentPrice: "₹599",
//   originalPrice: "₹899",
//   discount: "33%",
//   images: [
//     "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1580136601263-3d3c1d3f1d5f?w=800&auto=format&fit=crop"
//   ],
//   category: "Painting",
//   subcategory: "Madhubani Painting",
//   rating: 4.5,
//   reviews: 9,
//   size: ["15 x 20 inches"],
//   color: ["Multicolor"],
//   theme: "Traditional Folk Motifs",
//   description:
//     "Bring home the timeless beauty of authentic Madhubani art with this handcrafted painting by artist Pooja Kumari. Designed with intricate detailing and vibrant traditional colors, this artwork beautifully reflects Indian culture and heritage. Perfect for enhancing living rooms, bedrooms, offices, or gifting, the premium black frame adds a refined ethnic touch to any interior.",
//   material: "Hand-painted artwork with premium black frame",
//   story: [
//     "Artist: Pooja Kumari",
//     "Art Form: Authentic Madhubani Painting",
//     "Size: 15 x 20 inches",
//     "Type: 100% Handmade Artwork",
//     "Frame: Premium black frame included",
//     "Ideal for home décor, office décor, and gifting",
//     "Traditional artwork reflecting Indian heritage",
//     "Ready-to-hang ethnic wall décor"
//   ]
// },
// {
//   id: 42,
//   brand: "Ved Prabha",
//   artist: "Ved Prabha",
//   title: "Handcrafted Mithila Painting Cotton T-Shirt",
//   currentPrice: "₹899",
//   originalPrice: "₹1199",
//   discount: "25%",
//   images: [
//     "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&auto=format&fit=crop"
//   ],
//   category: "Clothing",
//   subcategory: "Ethnic T-Shirt",
//   rating: 4.6,
//   reviews: 14,
//   size: ["S", "M", "L", "XL"],
//   color: ["Multicolor"],
//   fit: "Comfortable & breathable",
//   description:
//     "This premium cotton T-shirt features an authentic hand-painted Mithila (Madhubani) artwork, lovingly created by traditional artist Ved Prabha. Each piece reflects the rich cultural heritage of Mithila art, known for its intricate patterns and vibrant storytelling. Made from soft and breathable cotton, this T-shirt is perfect for daily wear while making a bold artistic statement. Since the artwork is 100% handmade, every T-shirt is unique and carries the soul of traditional Indian craftsmanship.",
//   material: "100% Cotton",
//   care: "Gentle hand wash recommended",
//   story: [
//     "Artist: Ved Prabha",
//     "Art Style: Hand-painted Mithila (Madhubani) Art",
//     "Material: 100% Cotton",
//     "Type: Handmade / Hand Work",
//     "Fit: Comfortable & breathable",
//     "Each piece is unique and artist-made",
//     "Perfect for daily wear, cultural styling, and gifting",
//     "Wear culture. Support artisans. Celebrate handmade."
//   ]
// },
// {
//   id: 43,
//   brand: "Pooja Kumari",
//   artist: "Pooja Kumari",
//   title: "Traditional Madhubani Wall Art Painting (15x20 Inches)",
//   currentPrice: "₹599",
//   originalPrice: "₹799",
//   discount: "25%",
//   images: [
//     "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1580136601263-3d3c1d3f1d5f?w=800&auto=format&fit=crop"
//   ],
//   category: "Painting",
//   subcategory: "Madhubani Painting",
//   rating: 4.5,
//   reviews: 22,
//   size: ["15 x 20 Inches"],
//   color: ["Multicolor"],
//   description:
//     "Bring home the timeless beauty of authentic Madhubani art, handcrafted with intricate detailing and vibrant traditional colors. This stunning artwork by artist Pooja Kumari beautifully showcases Indian culture and heritage through elegant patterns and symbolic design. Perfect for enhancing your living room, bedroom, office space, or gifting on special occasions, this framed Madhubani painting adds warmth and tradition to any interior.",
//   material: "Hand-painted on paper with premium black frame",
//   frame: "Premium Black Frame Included",
//   story: [
//     "Artist: Pooja Kumari",
//     "Art Style: Traditional Madhubani Painting",
//     "Type: Authentic Handmade Artwork",
//     "Size: 15 x 20 Inches",
//     "Frame: Premium Quality Black Frame Included",
//     "Ideal for home décor, office décor, and gifting",
//     "Showcases rich Indian cultural heritage",
//     "Elegant ethnic wall décor piece"
//   ]
// },
// {
//   id: 44,
//   brand: "Jharkhand Sohrai Tribal Art",
//   artist: "Tribal Artisan",
//   title: "Jharkhand Sohrai Tribal Art Painting – A3 Size (Handmade Wall Decor)",
//   currentPrice: "₹499",
//   originalPrice: "₹699",
//   discount: "29%",
//   images: [
//     "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1580136601263-3d3c1d3f1d5f?w=800&auto=format&fit=crop"
//   ],
//   category: "Painting",
//   subcategory: "Sohrai Painting",
//   rating: 4.4,
//   reviews: 18,
//   size: ["A3 (11.7 x 16.5 inches approx.)"],
//   color: ["Earthy Multicolor"],
//   description:
//     "Give your wall a traditional and elegant touch with this Jharkhand Sohrai Tribal Art Painting. This beautiful artwork reflects tribal culture and the beauty of nature through fine handmade patterns and natural earthy tones. Each piece carries the essence of rural tradition and authentic folk craftsmanship, making it perfect for living rooms, bedrooms, offices, or gifting.",
//   material: "Hand-painted traditional artwork",
//   frame: "Optional / As shown",
//   story: [
//     "Art Form: Traditional Sohrai Tribal Painting",
//     "Region: Jharkhand Folk Art",
//     "Type: 100% Handmade Artwork",
//     "Size: A3 (11.7 x 16.5 inches approx.)",
//     "Theme: Nature & Tribal Motifs",
//     "Perfect for living room, bedroom, office décor",
//     "Great option for cultural gifting",
//     "Reflects earthy rural heritage"
//   ]
// },
// {
//   id: 45,
//   brand: "Madhubani Painting – Traditional Mithila Folk Art",
//   artist: "Sujata Jha",
//   title: "Handmade Madhubani Painting – Traditional Mithila Folk Art",
//   currentPrice: "₹799",
//   originalPrice: "₹999",
//   discount: "20%",
//   images: [
//     "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1580136601263-3d3c1d3f1d5f?w=800&auto=format&fit=crop"
//   ],
//   category: "Painting",
//   subcategory: "Madhubani Painting",
//   rating: 4.6,
//   reviews: 22,
//   size: ["Standard"],
//   color: ["Multicolor"],
//   description:
//     "This beautiful handmade Madhubani painting is a fine representation of traditional Mithila folk art, carefully hand-painted by artist Sujata Jha. Created with intricate patterns and vibrant natural colors, this artwork reflects Indian culture, devotion, and heritage. Perfect for wall décor, home interiors, offices, or as a meaningful gift, this painting adds a touch of tradition and elegance to any space.",
//   material: "Hand-painted artwork",
//   frame: "Optional / As shown",
//   story: [
//     "100% Handmade Madhubani Painting",
//     "Authentic Mithila Folk Art",
//     "Intricate traditional detailing",
//     "Vibrant natural colors used",
//     "Ideal for home & office wall décor",
//     "Perfect for gifting",
//     "Handcrafted by artist Sujata Jha"
//   ]
// },
// {
//   id: 46,
//   brand: "Handpainted Madhubani Sun Diary",
//   artist: "Siddhita Mishra",
//   title: "Handpainted Madhubani Sun Diary – A5 Size",
//   currentPrice: "₹499",
//   originalPrice: "₹699",
//   discount: "29%",
//   images: [
//     "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop"
//   ],
//   category: "Stationery",
//   subcategory: "Handpainted Diary",
//   rating: 4.7,
//   reviews: 14,
//   size: ["A5"],
//   color: ["Multicolor"],
//   description:
//     "Bring tradition and creativity together with this beautiful handpainted Madhubani Sun Diary, meticulously handcrafted by artist Siddhita Mishra. Each diary is a unique piece of art, featuring a vibrant sun motif inspired by traditional Indian folk art. With plain pages inside, it is perfect for writing, sketching, journaling, and creative expression. Ideal for art lovers, stationery collectors, and those who appreciate handmade heritage products.",
//   material: "Paper & hand-painted cover",
//   pages: "Plain pages",
//   story: [
//     "100% handpainted Madhubani artwork",
//     "Artist: Siddhita Mishra",
//     "Size: A5 – easy to carry",
//     "Plain pages for writing & sketching",
//     "Perfect for journaling, office & travel",
//     "Each diary is unique and handmade",
//     "Great gifting option for art lovers"
//   ]
// },
// {
//   id: 47,
//   brand: "Handcrafted Lippan Art Wall Plate",
//   artist: "Navya Kumari",
//   title: "Handcrafted Lippan Art Wall Plate – Festive Special Edition",
//   currentPrice: "₹1499",
//   originalPrice: "₹1999",
//   discount: "25%",
//   images: [
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop"
//   ],
//   category: "Home Decor",
//   subcategory: "Lippan Art",
//   rating: 4.8,
//   reviews: 11,
//   size: ["Round"],
//   color: ["Multicolor"],
//   description:
//     "Bring home the elegance of traditional Indian craftsmanship with this beautifully handcrafted Lippan Art Wall Plate. Inspired by Gujarat’s famous mud and mirror art, this festive special piece reflects devotion, culture, and fine artistic detailing. Every element is carefully handmade by artist Navya Kumari, making each plate unique and full of character. Perfect for festive décor, pooja rooms, living rooms, offices, or as a thoughtful gift.",
//   material: "Mud & mirror work on decorative base",
//   story: [
//     "Art Form: Traditional Lippan (Mud & Mirror Style)",
//     "Handcrafted by: Navya Kumari",
//     "Shape: Round decorative plate",
//     "Perfect for wall décor & pooja room",
//     "Great for Diwali, housewarming & wedding gifts",
//     "Limited festive edition piece",
//     "Shipping available across India"
//   ]
// },
// {
//   id: 48,
//   brand: "Har Har Mahadev Lippan Art Wall Décor",
//   artist: "Navya Jaitwal",
//   title: "Har Har Mahadev Lippan Art Wall Décor | Handcrafted Spiritual Om Wall Hanging",
//   currentPrice: "₹699",
//   originalPrice: "₹899",
//   discount: "22%",
//   images: [
//     "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&auto=format&fit=crop",
//     "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&auto=format&fit=crop"
//   ],
//   category: "Home Decor",
//   subcategory: "Lippan Art",
//   rating: 4.7,
//   reviews: 9,
//   size: ["Standard"],
//   color: ["Multicolor"],
//   description:
//     "Bring divine positivity and traditional elegance to your space with this handcrafted Lippan Art Wall Décor. Featuring the sacred Om symbol and Shiva-inspired elements, this spiritual artwork reflects fine craftsmanship and cultural beauty. Carefully handmade by artist Navya Jaitwal, it adds a calm and auspicious vibe to pooja rooms, living spaces, or gifting occasions.",
//   material: "Mud & mirror work on decorative base",
//   story: [
//     "Artist: Navya Jaitwal",
//     "Art Form: Traditional Lippan Art",
//     "Theme: Om & Shiva spiritual motif",
//     "Type: Handcrafted wall hanging",
//     "Ideal for pooja room & home décor",
//     "Perfect for spiritual gifting",
//     "Limited handmade piece"
//   ]
// }












// ]

// const mainCategories = [
//   {
//     name: "Handcraft & Textile",
//     icon: "👕",
//     subcategories: ["Saree", "Dupatta", "Kurta", "Girls Kurti", "Kids Cloth", "Mobile Cover"]
//   },
//   {
//     name: "Painting",
//     icon: "🎨",
//     subcategories: ["Mithila Painting", "Madhubani Painting", "Sohrai Jharkhand Painting",]
//   },
// ];

// const filters = {
//   price: [
//     { label: "Under Rs. 1,000", value: "0-1000" },
//     { label: "Rs. 1,000 - Rs. 2,000", value: "1000-2000" },
//     { label: "Rs. 2,000 - Rs. 4,000", value: "2000-4000" },
//     { label: "Above Rs. 4,000", value: "4000-9999" },
//   ],
//   rating: [
//     { label: "4★ & above", value: "4" },
//     { label: "3★ & above", value: "3" },
//     { label: "2★ & above", value: "2" },
//   ],
//   discount: [
//     { label: "10% and above", value: "10" },
//     { label: "20% and above", value: "20" },
//     { label: "30% and above", value: "30" },
//     { label: "40% and above", value: "40" },
//   ],
// };

// export default function ProductPage() {
//   const navigate = useNavigate(); // ADD THIS
//   const { productId } = useParams(); // ADD THIS

//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [priceFilter, setPriceFilter] = useState("");
//   const [ratingFilter, setRatingFilter] = useState("");
//   const [discountFilter, setDiscountFilter] = useState("");
//   const sidebarRef = useRef(null);
//   const [showForm, setShowForm] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     quantity: 1,
//     payment: "COD",
//   });

//   // ========== ADD THIS - AUTO OPEN PRODUCT FROM URL ==========
//   useEffect(() => {
//     if (productId) {
//       const product = products.find(p => p.id === parseInt(productId));
//       if (product) {
//         setSelectedProduct(product);
//         setActiveImage(0);
//         setSelectedSize(""); // Reset size
//       } else {
//         // Product not found - redirect to main page
//         navigate('/what-we-offer-bihar', { replace: true });
//       }
//     }
//   }, [productId, navigate]);

//   // ========== ADD THIS - HANDLE OPEN/CLOSE MODAL WITH URL ==========
//   const handleOpenProduct = (product) => {
//     setSelectedProduct(product);
//     setActiveImage(0);
//     setSelectedSize(""); // Reset size
//     navigate(`/what-we-offer-bihar/${product.id}`, { replace: true });
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setSelectedSize(""); // Reset size
//     navigate('/what-we-offer-bihar', { replace: true });
//   };

//   const filteredProducts = products.filter(product => {
//     if (selectedCategory !== "All Products" && product.category !== selectedCategory && product.subcategory !== selectedCategory) {
//       return false;
//     }

//     if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
//       return false;
//     }

//     if (priceFilter) {
//       const [min, max] = priceFilter.split('-').map(Number);
//       const price = parseInt(product.currentPrice.replace(/\D/g, ''));
//       if (max && (price < min || price > max)) return false;
//       if (!max && price < min) return false;
//     }

//     if (ratingFilter && product.rating < parseFloat(ratingFilter)) {
//       return false;
//     }

//     if (discountFilter && parseInt(product.discount) < parseInt(discountFilter)) {
//       return false;
//     }

//     return true;
//   });

//   const generateOrderId = () => {
//     return "ORD" + Math.floor(100000 + Math.random() * 900000);
//   };

//   const openWhatsApp = (product, selectedSize, customer) => {
//     const orderId = generateOrderId();
//     const size = selectedSize || product.size?.[0] || "Standard";
//     const image = product.images?.[0] || "";

//     const msg = `🧾 *New Order Received*

// ━━━━━━━━━━━━━━
// *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━

// 👤 *Customer Details*
// Name: ${customer.name}
// Phone: ${customer.phone}
// Address: ${customer.address}

// ━━━━━━━━━━━━━━
// 🛍️ *Product Details*
// Product: ${product.brand}
// Artist: ${product.artist}
// Price: ${product.currentPrice}
// Size: ${size}
// Quantity: ${customer.quantity}
// Payment: ${customer.payment}
// Category: ${product.category} → ${product.subcategory}
// ━━━━━━━━━━━━━━

// 🖼️ Product Image:
// ${image}

// Please confirm order, payment, and delivery details.`;

//     window.open(
//       `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//       "_blank"
//     );
//   };

//   const handleOrderSubmit = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all details");
//       return;
//     }

//     if (!selectedSize && selectedProduct?.size?.length > 1) {
//       alert("Please select a size");
//       return;
//     }

//     if (customer.payment === "Online") {
//       setShowPayment(true);
//     } else {
//       openWhatsApp(selectedProduct, selectedSize, customer);
//       setShowForm(false);
//     }
//   };

//   const confirmPayment = () => {
//     alert("Payment Confirmed!");
//     openWhatsApp(selectedProduct, selectedSize, customer);
//     setShowPayment(false);
//     setShowForm(false);
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory("");
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const handleSubcategorySelect = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const clearFilters = () => {
//     setSelectedCategory("All Products");
//     setSelectedSubcategory("");
//     setPriceFilter("");
//     setRatingFilter("");
//     setDiscountFilter("");
//     setSelectedSize("");
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     };
//   }, [menuOpen]);

//   const formatPrice = (price) => {
//     return price.replace('Rs. ', '₹');
//   };


//   // WhatsApp par share karne ka function (updated)
// const shareOnWhatsApp = (product) => {
//   const productUrl = `${window.location.origin}/what-we-offer-bihar/${product.id}`;
//   const message = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts%0A%0A` +
//     `💰 Price: ${product.currentPrice}%0A` +
//     `🎨 Artist: ${product.artist}%0A` +
//     `⭐ Rating: ${product.rating}/5%0A%0A` +
//     `🔗 Click here to view: ${productUrl}`;

//   window.open(`https://wa.me/?text=${message}`, '_blank');
// };

// // Update handleShareProduct function
// const handleShareProduct = (product) => {
//   const productUrl = `${window.location.origin}/what-we-offer-bihar/${product.id}`;

//   // Better formatted message for sharing
//   const shareMessage = `🛍️ *${product.brand}*\n\n` +
//     `🎨 Artist: ${product.artist}\n` +
//     `💰 Price: ${product.currentPrice}\n` +
//     `📂 Category: ${product.category} - ${product.subcategory}\n` +
//     `⭐ Rating: ${product.rating}/5 (${product.reviews} reviews)\n\n` +
//     `📝 ${product.description.substring(0, 150)}...\n\n` +
//     `🔗 *Click to view product:*\n${productUrl}\n\n` +
//     `🖼️ Image will appear when you open the link`;

//   if (navigator.share) {
//     navigator.share({
//       title: product.brand,
//       text: `Check out this ${product.brand} from Bihar-Jharkhand Handicrafts`,
//       url: productUrl,
//     })
//     .catch((error) => {
//       console.log('Sharing cancelled or failed:', error);
//       copyToClipboard(shareMessage);
//     });
//   } else {
//     copyToClipboard(shareMessage);
//   }
// };

// // Update copyToClipboard function
// const copyToClipboard = (text) => {
//   navigator.clipboard.writeText(text).then(() => {
//     alert('✅ Product details copied to clipboard!\n\nPaste anywhere to share.\n\nThe recipient can click the link to view the product with images.');
//   }).catch(() => {
//     alert('📱 Share this product:\n\n' + text);
//   });
// };


//   return (
//     <div className="page">
//       {/* Header */}
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <button
//               className="menu-toggle"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <FiMenu className="menu-icon" />
//               <span className="menu-text">Filters</span>
//             </button>

//             <div className="logo" style={{ lineHeight: "1.2" }}>
//               <h1 className="site-title" style={{
//                 fontSize: "clamp(18px, 4vw, 28px)",
//                 fontWeight: "900",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "#8b0000",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Handicrafts-Items
//               </h1>
//               <p className="site-subtitle" style={{
//                 fontSize: "clamp(10px, 2.5vw, 14px)",
//                 fontWeight: "500",
//                 margin: "4px 0 0 0",
//                 color: "#25d366",
//                 letterSpacing: "0.5px",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Authentic Handicrafts & Craft Items
//               </p>
//             </div>

//             <div className="header-actions">
//               <button className="wishlist-btn" onClick={() => alert(`${wishlist.length} items in wishlist`)}>
//                 <FiHeart />
//                 {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//               </button>
//               <button className="cart-btn">
//                 <FiShoppingCart />
//                 <span className="cart-count">0</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filter Sidebar */}
//       <aside ref={sidebarRef} className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h3>Categories</h3>
//           <button
//             className="close-sidebar"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close sidebar"
//           >
//             <FiX />
//           </button>
//         </div>

//         <div className="sidebar-content">
//           {/* All Products */}
//           <div className="filter-section">
//             <button
//               className={`category-btn main-category-btn ${selectedCategory === "All Products" ? 'active' : ''}`}
//               onClick={() => handleCategorySelect("All Products")}
//             >
//               <span className="category-name">🛍️ All Products</span>
//               <span className="category-count">{products.length}</span>
//             </button>
//           </div>

//           {/* Main Categories */}
//           {mainCategories.map((mainCat) => (
//             <div key={mainCat.name} className="filter-section">
//               <h4 className="filter-title">
//                 <span className="filter-icon">{mainCat.icon}</span>
//                 {mainCat.name}
//               </h4>
//               <div className="subcategories-list">
//                 {mainCat.subcategories.map((subcat) => {
//                   const count = products.filter(p => p.subcategory === subcat).length;
//                   return (
//                     <button
//                       key={subcat}
//                       className={`subcategory-btn ${selectedSubcategory === subcat ? 'active' : ''}`}
//                       onClick={() => handleSubcategorySelect(subcat)}
//                     >
//                       <span className="subcategory-name">{subcat}</span>
//                       <span className="subcategory-count">{count}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Price Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">💰</span>
//               Price Range
//             </h4>
//             <div className="filter-options">
//               {filters.price.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="price"
//                     value={filter.value}
//                     checked={priceFilter === filter.value}
//                     onChange={(e) => setPriceFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Discount Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">🎯</span>
//               Discount
//             </h4>
//             <div className="filter-options">
//               {filters.discount.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="discount"
//                     value={filter.value}
//                     checked={discountFilter === filter.value}
//                     onChange={(e) => setDiscountFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-actions">
//             <button className="clear-filters" onClick={clearFilters}>
//               Clear All Filters
//             </button>
//           </div>
//         </div>
//       </aside>

//       {menuOpen && <div className="overlay" />}

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="container">
//           {/* Products Grid */}
//           <div className="products-grid">
//             {filteredProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <div className="card-image-section">
//                   <div className="image-container">
//                     <img
//                       src={product.images[0]}
//                       alt={product.brand}
//                       className="product-image"
//                     />

//                     {/* Discount Badge */}
//                     {product.discount && (
//                       <div className="discount-badge">
//                         {product.discount} OFF
//                       </div>
//                     )}

//                     {/* Wishlist Button */}
//                     <button
//                       className="wishlist-icon-btn"
//                       onClick={() => toggleWishlist(product.id)}
//                     >
//                       <FiHeart className={wishlist.includes(product.id) ? "active" : ""} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="card-content">
//                   <h3 className="brand-name">{product.brand}</h3>

//                   <div className="price-display">
//                     <span className="current-price">{formatPrice(product.currentPrice)}</span>
//                     {product.originalPrice && (
//                       <span className="original-price">{formatPrice(product.originalPrice)}</span>
//                     )}
//                   </div>

//                   {/* ========== UPDATED - View Details Button ========== */}
//                   <button
//                     className="view-details-btn"
//                     onClick={() => handleOpenProduct(product)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* ========== UPDATED - Product Modal with URL sync ========== */}
//       {selectedProduct && (
//         <div className="modal-overlay" onClick={handleCloseModal}>
//           <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="modal-close"
//               onClick={handleCloseModal}
//               aria-label="Close modal"
//             >
//               <FiX />
//             </button>

//             <div className="modal-content">
//               <div className="modal-images">
//                 <div className="main-image-container">
//                   <img
//                     src={selectedProduct.images[activeImage]}
//                     alt={selectedProduct.brand}
//                     className="modal-main-image"
//                   />
//                 </div>

//                 <div className="thumbnail-container">
//                   {selectedProduct.images.map((img, index) => (
//                     <div
//                       key={index}
//                       className={`thumbnail ${activeImage === index ? 'active' : ''}`}
//                       onClick={() => setActiveImage(index)}
//                     >
//                       <img src={img} alt={`View ${index + 1}`} />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="modal-details">
//                 <div className="modal-header">
//                   <h2 className="modal-brand">
//                     {selectedProduct.brand} | Artist: {selectedProduct.artist}
//                   </h2>

//                   <div className="modal-category">
//                     {selectedProduct.category} • {selectedProduct.subcategory}
//                   </div>
//                 </div>

//                 <div className="modal-price-section">
//                   <div className="modal-price-display">
//                     <div className="modal-current-price">
//                       {formatPrice(selectedProduct.currentPrice)}
//                       {selectedProduct.discount && (
//                         <span className="modal-discount">{selectedProduct.discount} OFF</span>
//                       )}
//                     </div>
//                     {selectedProduct.originalPrice && (
//                       <div className="modal-original-price">
//                         M.R.P: <s>{formatPrice(selectedProduct.originalPrice)}</s>
//                       </div>
//                     )}
//                   </div>

//                   <div className="modal-rating">
//                     <div className="modal-stars">
//                       {[...Array(5)].map((_, i) => (
//                         <span key={i} className={`modal-star ${i < Math.floor(selectedProduct.rating) ? 'filled' : ''}`}>
//                           ★
//                         </span>
//                       ))}
//                       <span className="modal-rating-value">{selectedProduct.rating}/5</span>
//                     </div>
//                     <span className="modal-reviews">{selectedProduct.reviews} reviews</span>
//                   </div>
//                 </div>

//                 <div className="modal-description">
//                   <h4>Description</h4>
//                   <p>{selectedProduct.description}</p>

//                   {selectedProduct.story && (
//                     <ul className="storyList">
//                       {selectedProduct.story.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>

//                 <div className="modal-specs">
//                   {/* Size Selection */}
//                   <div className="spec-item">
//                     <span className="spec-label">Select Size</span>
//                     <div className="size-options">
//                       {selectedProduct.size.map((size) => (
//                         <button
//                           key={size}
//                           className={`size-option ${selectedSize === size ? 'selected' : ''}`}
//                           onClick={() => setSelectedSize(size)}
//                         >
//                           {size}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="modal-actions">
//                   <div className="action-buttons-row">
//                     {/* Buy Now Button */}
//                     <button
//                       className="modal-whatsapp-btn"
//                       onClick={() => setShowForm(true)}
//                     >
//                       <BsCart />
//                       Buy Now
//                     </button>

//                     {/* Share Dropdown */}
//                     <div className="share-dropdown">
//                       <button
//                         className="modal-share-btn"
//                         onClick={() => handleShareProduct(selectedProduct)}
//                         aria-label="Share product"
//                       >
//                         <FiShare2 />
//                         Share
//                       </button>

//                       {/* Share Options Dropdown */}
//                       <div className="share-options">
//                         <button
//                           className="share-option-wa"
//                           onClick={() => shareOnWhatsApp(selectedProduct)}
//                         >
//                           <BsWhatsapp /> WhatsApp
//                         </button>
//                         <button
//                           className="share-option-copy"
//                           onClick={() => {
//                             const productUrl = `${window.location.origin}/what-we-offer-bihar/${selectedProduct.id}`;
//                             navigator.clipboard.writeText(productUrl);
//                             alert('✅ Link copied to clipboard!');
//                           }}
//                         >
//                           🔗 Copy Link
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* FORM POPUP */}
//                   {showForm && (
//                     <div className="whatsapp-form-overlay">
//                       <div className="whatsapp-form-box">
//                         <h3>Enter Your Details</h3>

//                         <input
//                           type="text"
//                           placeholder="Your Name"
//                           value={customer.name}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, name: e.target.value })
//                           }
//                         />

//                         <input
//                           type="tel"
//                           placeholder="Mobile Number"
//                           value={customer.phone}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, phone: e.target.value })
//                           }
//                         />

//                         <textarea
//                           placeholder="Delivery Address"
//                           value={customer.address}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, address: e.target.value })
//                           }
//                         />

//                         <div className="form-group">
//                           <label>Quantity</label>
//                           <input
//                             type="number"
//                             min="1"
//                             value={customer.quantity}
//                             onChange={(e) =>
//                               setCustomer({ ...customer, quantity: e.target.value })
//                             }
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Payment Method</label>
//                           <select
//                             value={customer.payment}
//                             onChange={(e) =>
//                               setCustomer({ ...customer, payment: e.target.value })
//                             }
//                           >
//                             <option value="COD">Cash on Delivery</option>
//                             <option value="Online">Online Payment</option>
//                           </select>
//                         </div>

//                         <button className="submit-btn" onClick={handleOrderSubmit}>
//                           Submit Order
//                         </button>

//                         <button
//                           className="close-btn"
//                           onClick={() => setShowForm(false)}
//                         >
//                           ×
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* PAYMENT POPUP */}
//                   {showPayment && (
//                     <div className="payment-overlay">
//                       <div className="payment-box">
//                         <h3>Scan & Pay</h3>


//                         <img
//                           src={qrImage}
//                           alt="Payment QR"
//                           className="payment-qr"
//                         />


//                         <p>Scan this QR using any UPI app</p>

//                         <button className="confirm-btn" onClick={confirmPayment}>
//                           Payment Done
//                         </button>

//                         <button
//                           className="close-btn"
//                           onClick={() => setShowPayment(false)}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   <button
//                     className={`modal-wishlist-btn ${wishlist.includes(selectedProduct.id) ? 'active' : ''}`}
//                     onClick={() => toggleWishlist(selectedProduct.id)}
//                   >
//                     <FiHeart />
//                     {wishlist.includes(selectedProduct.id) ? 'In Wishlist' : 'Add to Wishlist'}
//                   </button>
//                 </div>

//                 {!selectedSize && selectedProduct.size.length > 1 && (
//                   <div className="size-warning">
//                     Please select a size before buying
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./Whatweofferbihar.css";
// import { FiMenu, FiX, FiShoppingCart, FiHeart, FiChevronRight, FiShare2 } from "react-icons/fi";
// import { BsWhatsapp } from "react-icons/bs";
// import { BsCart } from "react-icons/bs";
// import qrImage from "./vendorimage/qr1.jpeg";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const mainCategories = [
//   {
//     name: "Handcraft & Textile",
//     icon: "👕",
//     subcategories: ["Saree", "Dupatta", "Kurta", "Girls Kurti", "Kids Cloth", "Mobile Cover"]
//   },
//   {
//     name: "Painting",
//     icon: "🎨",
//     subcategories: ["Mithila Painting", "Madhubani Painting", "Sohrai Jharkhand Painting", "mandala dot art", "accessories"]
//   },
// ];

// const filters = {
//   price: [
//     { label: "Under Rs. 1,000", value: "0-1000" },
//     { label: "Rs. 1,000 - Rs. 2,000", value: "1000-2000" },
//     { label: "Rs. 2,000 - Rs. 4,000", value: "2000-4000" },
//     { label: "Above Rs. 4,000", value: "4000-99999" },
//   ],
//   rating: [
//     { label: "4★ & above", value: "4" },
//     { label: "3★ & above", value: "3" },
//     { label: "2★ & above", value: "2" },
//   ],
//   discount: [
//     { label: "10% and above", value: "10" },
//     { label: "20% and above", value: "20" },
//     { label: "30% and above", value: "30" },
//     { label: "40% and above", value: "40" },
//   ],
// };

// export default function ProductPage() {
//   const navigate = useNavigate();
//   const { productId } = useParams();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [activeImage, setActiveImage] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [priceFilter, setPriceFilter] = useState("");
//   const [ratingFilter, setRatingFilter] = useState("");
//   const [discountFilter, setDiscountFilter] = useState("");
//   const sidebarRef = useRef(null);
//   const [showForm, setShowForm] = useState(false);
//   const [showPayment, setShowPayment] = useState(false);
//   const [customer, setCustomer] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     quantity: 1,
//     payment: "COD",
//   });

//   // Fetch products from Supabase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
        
//         // Transform API data to match our product structure
//         const transformedProducts = data.map(product => ({
//           id: product.id,
//           brand: product.name.split('|')[0].trim() || product.name,
//           artist: extractArtist(product.description) || "Traditional Artist",
//           currentPrice: `Rs. ${product.sell_price?.toLocaleString() || product.sell_price}`,
//           originalPrice: product.original_price ? `Rs. ${product.original_price.toLocaleString()}` : null,
//           discount: product.original_price ? 
//             Math.round(((product.original_price - product.sell_price) / product.original_price) * 100) + '%' : null,
//           images: product.images?.map(img => img.url) || [],
//           category: getCategory(product.category),
//           subcategory: getSubcategory(product.category, product.name),
//           rating: 4.5, // Default rating since API doesn't provide
//           reviews: Math.floor(Math.random() * 50) + 10, // Random reviews count
//           size: product.size || ["Standard"],
//           color: ["Multicolor"], // Default color
//           material: extractMaterial(product.description) || "Handcrafted",
//           description: product.description,
//           story: extractStory(product.description)
//         }));
        
//         setProducts(transformedProducts);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Helper functions for data transformation
//   const extractArtist = (description) => {
//     const artistMatch = description?.match(/artist\s+([^.!?]+)/i) || 
//                        description?.match(/by\s+([^.!?]+)/i) ||
//                        description?.match(/crafted\s+by\s+([^.!?]+)/i);
//     return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
//   };

//   const extractMaterial = (description) => {
//     if (description?.toLowerCase().includes('cotton')) return "Cotton";
//     if (description?.toLowerCase().includes('silk')) return "Silk";
//     if (description?.toLowerCase().includes('paper')) return "Paper";
//     if (description?.toLowerCase().includes('acrylic')) return "Acrylic";
//     return "Handcrafted Material";
//   };

//   const extractStory = (description) => {
//     const sentences = description?.split('.') || [];
//     return sentences.slice(0, 5).map(s => s.trim()).filter(s => s.length > 0);
//   };

//   const getCategory = (apiCategory) => {
//     const categoryMap = {
//       'painting': 'Painting',
//       'mandala dot art': 'Painting',
//       'accessories': 'Handcraft & Textile'
//     };
//     return categoryMap[apiCategory] || 'Handcraft & Textile';
//   };

//   const getSubcategory = (apiCategory, productName) => {
//     if (apiCategory === 'mandala dot art') return 'Madhubani Painting';
//     if (apiCategory === 'accessories') {
//       if (productName?.toLowerCase().includes('diary')) return 'Stationery';
//       return 'Mobile Cover';
//     }
//     if (productName?.toLowerCase().includes('gamchha')) return 'Dupatta';
//     return 'Madhubani Painting';
//   };

//   // Auto-open product from URL
//   useEffect(() => {
//     if (productId && products.length > 0) {
//       const product = products.find(p => p.id === parseInt(productId));
//       if (product) {
//         setSelectedProduct(product);
//         setActiveImage(0);
//         setSelectedSize(product.size?.[0] || "");
//       } else {
//         navigate('/what-we-offer-bihar', { replace: true });
//       }
//     }
//   }, [productId, products, navigate]);

//   const handleOpenProduct = (product) => {
//     setSelectedProduct(product);
//     setActiveImage(0);
//     setSelectedSize(product.size?.[0] || "");
//     navigate(`/what-we-offer-bihar/${product.id}`, { replace: true });
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setSelectedSize("");
//     navigate('/what-we-offer-bihar', { replace: true });
//   };

//   const filteredProducts = products.filter(product => {
//     if (selectedCategory !== "All Products") {
//       const categoryMatch = product.category === selectedCategory || 
//                            product.subcategory === selectedCategory;
//       if (!categoryMatch) return false;
//     }

//     if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
//       return false;
//     }

//     if (priceFilter) {
//       const [min, max] = priceFilter.split('-').map(Number);
//       const price = parseInt(product.currentPrice.replace(/\D/g, ''));
//       if (max && max !== 99999) {
//         if (price < min || price > max) return false;
//       } else if (max === 99999) {
//         if (price < min) return false;
//       }
//     }

//     if (ratingFilter && product.rating < parseFloat(ratingFilter)) {
//       return false;
//     }

//     if (discountFilter && product.discount) {
//       const discountValue = parseInt(product.discount);
//       if (discountValue < parseInt(discountFilter)) return false;
//     }

//     return true;
//   });

//   const generateOrderId = () => {
//     return "ORD" + Math.floor(100000 + Math.random() * 900000);
//   };

//   const openWhatsApp = (product, selectedSize, customer) => {
//     const orderId = generateOrderId();
//     const size = selectedSize || product.size?.[0] || "Standard";
//     const image = product.images?.[0] || "";

//     const msg = `🧾 *New Order Received*

// ━━━━━━━━━━━━━━
// *Order ID:* ${orderId}
// ━━━━━━━━━━━━━━

// 👤 *Customer Details*
// Name: ${customer.name}
// Phone: ${customer.phone}
// Address: ${customer.address}

// ━━━━━━━━━━━━━━
// 🛍️ *Product Details*
// Product: ${product.brand}
// Artist: ${product.artist}
// Price: ${product.currentPrice}
// Size: ${size}
// Quantity: ${customer.quantity}
// Payment: ${customer.payment}
// Category: ${product.category} → ${product.subcategory}
// ━━━━━━━━━━━━━━

// 🖼️ Product Image:
// ${image}

// Please confirm order, payment, and delivery details.`;

//     window.open(
//       `https://wa.me/919288404060?text=${encodeURIComponent(msg)}`,
//       "_blank"
//     );
//   };

//   const handleOrderSubmit = () => {
//     if (!customer.name || !customer.phone || !customer.address) {
//       alert("Please fill all details");
//       return;
//     }

//     if (!selectedSize && selectedProduct?.size?.length > 1) {
//       alert("Please select a size");
//       return;
//     }

//     if (customer.payment === "Online") {
//       setShowPayment(true);
//     } else {
//       openWhatsApp(selectedProduct, selectedSize, customer);
//       setShowForm(false);
//     }
//   };

//   const confirmPayment = () => {
//     alert("Payment Confirmed!");
//     openWhatsApp(selectedProduct, selectedSize, customer);
//     setShowPayment(false);
//     setShowForm(false);
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory("");
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const handleSubcategorySelect = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const clearFilters = () => {
//     setSelectedCategory("All Products");
//     setSelectedSubcategory("");
//     setPriceFilter("");
//     setRatingFilter("");
//     setDiscountFilter("");
//     setSelectedSize("");
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     };
//   }, [menuOpen]);

//   const formatPrice = (price) => {
//     if (!price) return '';
//     return price.replace('Rs. ', '₹');
//   };

//   const shareOnWhatsApp = (product) => {
//     const productUrl = `${window.location.origin}/what-we-offer-bihar/${product.id}`;
//     const message = `Check out this *${product.brand}* from Bihar-Jharkhand Handicrafts%0A%0A` +
//       `💰 Price: ${product.currentPrice}%0A` +
//       `🎨 Artist: ${product.artist}%0A` +
//       `⭐ Rating: ${product.rating}/5%0A%0A` +
//       `🔗 Click here to view: ${productUrl}`;

//     window.open(`https://wa.me/?text=${message}`, '_blank');
//   };

//   const handleShareProduct = (product) => {
//     const productUrl = `${window.location.origin}/what-we-offer-bihar/${product.id}`;

//     const shareMessage = `🛍️ *${product.brand}*\n\n` +
//       `🎨 Artist: ${product.artist}\n` +
//       `💰 Price: ${product.currentPrice}\n` +
//       `📂 Category: ${product.category} - ${product.subcategory}\n` +
//       `⭐ Rating: ${product.rating}/5 (${product.reviews} reviews)\n\n` +
//       `📝 ${product.description.substring(0, 150)}...\n\n` +
//       `🔗 *Click to view product:*\n${productUrl}\n\n`;

//     if (navigator.share) {
//       navigator.share({
//         title: product.brand,
//         text: `Check out this ${product.brand} from Bihar-Jharkhand Handicrafts`,
//         url: productUrl,
//       })
//       .catch(() => {
//         copyToClipboard(shareMessage);
//       });
//     } else {
//       copyToClipboard(shareMessage);
//     }
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text).then(() => {
//       alert('✅ Product details copied to clipboard!\n\nPaste anywhere to share.');
//     }).catch(() => {
//       alert('📱 Share this product:\n\n' + text);
//     });
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loader"></div>
//         <p>Loading authentic handicrafts...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <h3>Oops! Something went wrong</h3>
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="page">
//       {/* Header */}
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <button
//               className="menu-toggle"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <FiMenu className="menu-icon" />
//               <span className="menu-text">Filters</span>
//             </button>

//             <div className="logo" style={{ lineHeight: "1.2" }}>
//               <h1 className="site-title" style={{
//                 fontSize: "clamp(18px, 4vw, 28px)",
//                 fontWeight: "900",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "#8b0000",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Handicrafts-Items
//               </h1>
//               <p className="site-subtitle" style={{
//                 fontSize: "clamp(10px, 2.5vw, 14px)",
//                 fontWeight: "500",
//                 margin: "4px 0 0 0",
//                 color: "#25d366",
//                 letterSpacing: "0.5px",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Authentic Handicrafts & Craft Items
//               </p>
//             </div>

//             <div className="header-actions">
//               <button className="wishlist-btn" onClick={() => alert(`${wishlist.length} items in wishlist`)}>
//                 <FiHeart />
//                 {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//               </button>
//               <button className="cart-btn">
//                 <FiShoppingCart />
//                 <span className="cart-count">0</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filter Sidebar */}
//       <aside ref={sidebarRef} className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h3>Categories</h3>
//           <button
//             className="close-sidebar"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close sidebar"
//           >
//             <FiX />
//           </button>
//         </div>

//         <div className="sidebar-content">
//           {/* All Products */}
//           <div className="filter-section">
//             <button
//               className={`category-btn main-category-btn ${selectedCategory === "All Products" ? 'active' : ''}`}
//               onClick={() => handleCategorySelect("All Products")}
//             >
//               <span className="category-name">🛍️ All Products</span>
//               <span className="category-count">{products.length}</span>
//             </button>
//           </div>

//           {/* Main Categories */}
//           {mainCategories.map((mainCat) => (
//             <div key={mainCat.name} className="filter-section">
//               <h4 className="filter-title">
//                 <span className="filter-icon">{mainCat.icon}</span>
//                 {mainCat.name}
//               </h4>
//               <div className="subcategories-list">
//                 {mainCat.subcategories.map((subcat) => {
//                   const count = products.filter(p => p.subcategory === subcat).length;
//                   if (count === 0) return null;
//                   return (
//                     <button
//                       key={subcat}
//                       className={`subcategory-btn ${selectedSubcategory === subcat ? 'active' : ''}`}
//                       onClick={() => handleSubcategorySelect(subcat)}
//                     >
//                       <span className="subcategory-name">{subcat}</span>
//                       <span className="subcategory-count">{count}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Price Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">💰</span>
//               Price Range
//             </h4>
//             <div className="filter-options">
//               {filters.price.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="price"
//                     value={filter.value}
//                     checked={priceFilter === filter.value}
//                     onChange={(e) => setPriceFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Discount Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">🎯</span>
//               Discount
//             </h4>
//             <div className="filter-options">
//               {filters.discount.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="discount"
//                     value={filter.value}
//                     checked={discountFilter === filter.value}
//                     onChange={(e) => setDiscountFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-actions">
//             <button className="clear-filters" onClick={clearFilters}>
//               Clear All Filters
//             </button>
//           </div>
//         </div>
//       </aside>

//       {menuOpen && <div className="overlay" />}

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="container">
//           {/* Products Grid */}
//           <div className="products-grid">
//             {filteredProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <div className="card-image-section">
//                   <div className="image-container">
//                     <img
//                       src={product.images[0]}
//                       alt={product.brand}
//                       className="product-image"
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Available';
//                       }}
//                     />

//                     {/* Discount Badge */}
//                     {product.discount && (
//                       <div className="discount-badge">
//                         {product.discount} OFF
//                       </div>
//                     )}

//                     {/* Wishlist Button */}
//                     <button
//                       className="wishlist-icon-btn"
//                       onClick={() => toggleWishlist(product.id)}
//                     >
//                       <FiHeart className={wishlist.includes(product.id) ? "active" : ""} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="card-content">
//                   <h3 className="brand-name">{product.brand}</h3>

//                   <div className="price-display">
//                     <span className="current-price">{formatPrice(product.currentPrice)}</span>
//                     {product.originalPrice && (
//                       <span className="original-price">{formatPrice(product.originalPrice)}</span>
//                     )}
//                   </div>

//                   <button
//                     className="view-details-btn"
//                     onClick={() => handleOpenProduct(product)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="no-products">
//               <h3>No products found</h3>
//               <p>Try adjusting your filters</p>
//               <button onClick={clearFilters}>Clear Filters</button>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Product Modal */}
//       {selectedProduct && (
//         <div className="modal-overlay" onClick={handleCloseModal}>
//           <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="modal-close"
//               onClick={handleCloseModal}
//               aria-label="Close modal"
//             >
//               <FiX />
//             </button>

//             <div className="modal-content">
//               <div className="modal-images">
//                 <div className="main-image-container">
//                   <img
//                     src={selectedProduct.images[activeImage]}
//                     alt={selectedProduct.brand}
//                     className="modal-main-image"
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/500x600?text=Image+Not+Available';
//                     }}
//                   />
//                 </div>

//                 <div className="thumbnail-container">
//                   {selectedProduct.images.map((img, index) => (
//                     <div
//                       key={index}
//                       className={`thumbnail ${activeImage === index ? 'active' : ''}`}
//                       onClick={() => setActiveImage(index)}
//                     >
//                       <img 
//                         src={img} 
//                         alt={`View ${index + 1}`}
//                         onError={(e) => {
//                           e.target.src = 'https://via.placeholder.com/100x100?text=No+Image';
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="modal-details">
//                 <div className="modal-header">
//                   <h2 className="modal-brand">
//                     {selectedProduct.brand}
//                   </h2>
//                   <p className="modal-artist">Artist: {selectedProduct.artist}</p>

//                   <div className="modal-category">
//                     {selectedProduct.category} • {selectedProduct.subcategory}
//                   </div>
//                 </div>

//                 <div className="modal-price-section">
//                   <div className="modal-price-display">
//                     <div className="modal-current-price">
//                       {formatPrice(selectedProduct.currentPrice)}
//                       {selectedProduct.discount && (
//                         <span className="modal-discount">{selectedProduct.discount} OFF</span>
//                       )}
//                     </div>
//                     {selectedProduct.originalPrice && (
//                       <div className="modal-original-price">
//                         M.R.P: <s>{formatPrice(selectedProduct.originalPrice)}</s>
//                       </div>
//                     )}
//                   </div>

//                   <div className="modal-rating">
//                     <div className="modal-stars">
//                       {[...Array(5)].map((_, i) => (
//                         <span key={i} className={`modal-star ${i < Math.floor(selectedProduct.rating) ? 'filled' : ''}`}>
//                           ★
//                         </span>
//                       ))}
//                       <span className="modal-rating-value">{selectedProduct.rating}/5</span>
//                     </div>
//                     <span className="modal-reviews">{selectedProduct.reviews} reviews</span>
//                   </div>
//                 </div>

//                 <div className="modal-description">
//                   <h4>Description</h4>
//                   <p>{selectedProduct.description}</p>

//                   {selectedProduct.story && selectedProduct.story.length > 0 && (
//                     <ul className="storyList">
//                       {selectedProduct.story.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>

//                 <div className="modal-specs">
//                   {/* Size Selection */}
//                   <div className="spec-item">
//                     <span className="spec-label">Select Size</span>
//                     <div className="size-options">
//                       {selectedProduct.size.map((size) => (
//                         <button
//                           key={size}
//                           className={`size-option ${selectedSize === size ? 'selected' : ''}`}
//                           onClick={() => setSelectedSize(size)}
//                         >
//                           {size}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="modal-actions">
//                   <div className="action-buttons-row">
//                     {/* Buy Now Button */}
//                     <button
//                       className="modal-whatsapp-btn"
//                       onClick={() => setShowForm(true)}
//                     >
//                       <BsCart />
//                       Buy Now
//                     </button>

//                     {/* Share Dropdown */}
//                     <div className="share-dropdown">
//                       <button
//                         className="modal-share-btn"
//                         onClick={() => handleShareProduct(selectedProduct)}
//                         aria-label="Share product"
//                       >
//                         <FiShare2 />
//                         Share
//                       </button>

//                       <div className="share-options">
//                         <button
//                           className="share-option-wa"
//                           onClick={() => shareOnWhatsApp(selectedProduct)}
//                         >
//                           <BsWhatsapp /> WhatsApp
//                         </button>
//                         <button
//                           className="share-option-copy"
//                           onClick={() => {
//                             const productUrl = `${window.location.origin}/what-we-offer-bihar/${selectedProduct.id}`;
//                             navigator.clipboard.writeText(productUrl);
//                             alert('✅ Link copied to clipboard!');
//                           }}
//                         >
//                           🔗 Copy Link
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* FORM POPUP */}
//                   {showForm && (
//                     <div className="whatsapp-form-overlay">
//                       <div className="whatsapp-form-box">
//                         <h3>Enter Your Details</h3>

//                         <input
//                           type="text"
//                           placeholder="Your Name"
//                           value={customer.name}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, name: e.target.value })
//                           }
//                         />

//                         <input
//                           type="tel"
//                           placeholder="Mobile Number"
//                           value={customer.phone}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, phone: e.target.value })
//                           }
//                         />

//                         <textarea
//                           placeholder="Delivery Address"
//                           value={customer.address}
//                           onChange={(e) =>
//                             setCustomer({ ...customer, address: e.target.value })
//                           }
//                         />

//                         <div className="form-group">
//                           <label>Quantity</label>
//                           <input
//                             type="number"
//                             min="1"
//                             value={customer.quantity}
//                             onChange={(e) =>
//                               setCustomer({ ...customer, quantity: e.target.value })
//                             }
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Payment Method</label>
//                           <select
//                             value={customer.payment}
//                             onChange={(e) =>
//                               setCustomer({ ...customer, payment: e.target.value })
//                             }
//                           >
//                             <option value="COD">Cash on Delivery</option>
//                             <option value="Online">Online Payment</option>
//                           </select>
//                         </div>

//                         <button className="submit-btn" onClick={handleOrderSubmit}>
//                           Submit Order
//                         </button>

//                         <button
//                           className="close-btn"
//                           onClick={() => setShowForm(false)}
//                         >
//                           ×
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   {/* PAYMENT POPUP */}
//                   {showPayment && (
//                     <div className="payment-overlay">
//                       <div className="payment-box">
//                         <h3>Scan & Pay</h3>

//                         <img
//                           src={qrImage}
//                           alt="Payment QR"
//                           className="payment-qr"
//                         />

//                         <p>Scan this QR using any UPI app</p>

//                         <button className="confirm-btn" onClick={confirmPayment}>
//                           Payment Done
//                         </button>

//                         <button
//                           className="close-btn"
//                           onClick={() => setShowPayment(false)}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   )}

//                   <button
//                     className={`modal-wishlist-btn ${wishlist.includes(selectedProduct.id) ? 'active' : ''}`}
//                     onClick={() => toggleWishlist(selectedProduct.id)}
//                   >
//                     <FiHeart />
//                     {wishlist.includes(selectedProduct.id) ? 'In Wishlist' : 'Add to Wishlist'}
//                   </button>
//                 </div>

//                 {!selectedSize && selectedProduct.size.length > 1 && (
//                   <div className="size-warning">
//                     Please select a size before buying
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }





// import React, { useState, useEffect, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import "./Whatweofferbihar.css";
// import { FiMenu, FiX, FiShoppingCart, FiHeart } from "react-icons/fi";
// import { BsCart } from "react-icons/bs";

// const API_URL = "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// const mainCategories = [
//   {
//     name: "Handcraft & Textile",
//     icon: "👕",
//     subcategories: ["Saree", "Dupatta", "Kurta", "Girls Kurti", "Kids Cloth", "Mobile Cover"]
//   },
//   {
//     name: "Painting",
//     icon: "🎨",
//     subcategories: ["Mithila Painting", "Madhubani Painting", "Sohrai Jharkhand Painting", "mandala dot art", "accessories"]
//   },
// ];

// const filters = {
//   price: [
//     { label: "Under Rs. 1,000", value: "0-1000" },
//     { label: "Rs. 1,000 - Rs. 2,000", value: "1000-2000" },
//     { label: "Rs. 2,000 - Rs. 4,000", value: "2000-4000" },
//     { label: "Above Rs. 4,000", value: "4000-99999" },
//   ],
//   discount: [
//     { label: "10% and above", value: "10" },
//     { label: "20% and above", value: "20" },
//     { label: "30% and above", value: "30" },
//     { label: "40% and above", value: "40" },
//   ],
// };

// export default function ProductPage() {
//   const navigate = useNavigate();
//   const { productId } = useParams();

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [selectedSubcategory, setSelectedSubcategory] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [priceFilter, setPriceFilter] = useState("");
//   const [discountFilter, setDiscountFilter] = useState("");
//   const sidebarRef = useRef(null);

//   // Fetch products from Supabase
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
        
//         // Transform API data
//         const transformedProducts = data.map(product => ({
//           id: product.id,
//           brand: product.name.split('|')[0].trim() || product.name,
//           artist: extractArtist(product.description) || "Traditional Artist",
//           currentPrice: `Rs. ${product.sell_price?.toLocaleString() || product.sell_price}`,
//           originalPrice: product.original_price ? `Rs. ${product.original_price.toLocaleString()}` : null,
//           discount: product.original_price ? 
//             Math.round(((product.original_price - product.sell_price) / product.original_price) * 100) + '%' : null,
//           images: product.images?.map(img => img.url) || [],
//           category: getCategory(product.category),
//           subcategory: getSubcategory(product.category, product.name),
//           rating: 4.5,
//           reviews: Math.floor(Math.random() * 50) + 10,
//           size: product.size || ["Standard"],
//           description: product.description,
//           story: extractStory(product.description)
//         }));
        
//         setProducts(transformedProducts);
//         setError(null);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Helper functions
//   const extractArtist = (description) => {
//     const artistMatch = description?.match(/artist\s+([^.!?]+)/i) || 
//                        description?.match(/by\s+([^.!?]+)/i);
//     return artistMatch ? artistMatch[1].trim() : "Traditional Artist";
//   };

//   const extractStory = (description) => {
//     const sentences = description?.split('.') || [];
//     return sentences.slice(0, 5).map(s => s.trim()).filter(s => s.length > 0);
//   };

//   const getCategory = (apiCategory) => {
//     const categoryMap = {
//       'painting': 'Painting',
//       'mandala dot art': 'Painting',
//       'accessories': 'Handcraft & Textile'
//     };
//     return categoryMap[apiCategory] || 'Handcraft & Textile';
//   };

//   const getSubcategory = (apiCategory, productName) => {
//     if (apiCategory === 'mandala dot art') return 'Madhubani Painting';
//     if (apiCategory === 'accessories') {
//       if (productName?.toLowerCase().includes('diary')) return 'Stationery';
//       return 'Mobile Cover';
//     }
//     if (productName?.toLowerCase().includes('gamchha')) return 'Dupatta';
//     return 'Madhubani Painting';
//   };

//   // Navigate to product detail page
//   const handleViewDetails = (product) => {
//     navigate(`/product/${product.id}`);
//   };

//   const filteredProducts = products.filter(product => {
//     if (selectedCategory !== "All Products") {
//       const categoryMatch = product.category === selectedCategory || 
//                            product.subcategory === selectedCategory;
//       if (!categoryMatch) return false;
//     }

//     if (selectedSubcategory && product.subcategory !== selectedSubcategory) {
//       return false;
//     }

//     if (priceFilter) {
//       const [min, max] = priceFilter.split('-').map(Number);
//       const price = parseInt(product.currentPrice.replace(/\D/g, ''));
//       if (max && max !== 99999) {
//         if (price < min || price > max) return false;
//       } else if (max === 99999) {
//         if (price < min) return false;
//       }
//     }

//     if (discountFilter && product.discount) {
//       const discountValue = parseInt(product.discount);
//       if (discountValue < parseInt(discountFilter)) return false;
//     }

//     return true;
//   });

//   const toggleWishlist = (productId) => {
//     setWishlist(prev =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setSelectedSubcategory("");
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const handleSubcategorySelect = (subcategory) => {
//     setSelectedSubcategory(subcategory);
//     if (window.innerWidth < 768) {
//       setMenuOpen(false);
//     }
//   };

//   const clearFilters = () => {
//     setSelectedCategory("All Products");
//     setSelectedSubcategory("");
//     setPriceFilter("");
//     setDiscountFilter("");
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };

//     if (menuOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.body.style.overflow = "auto";
//     };
//   }, [menuOpen]);

//   const formatPrice = (price) => {
//     if (!price) return '';
//     return price.replace('Rs. ', '₹');
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loader"></div>
//         <p>Loading authentic handicrafts...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <h3>Oops! Something went wrong</h3>
//         <p>{error}</p>
//         <button onClick={() => window.location.reload()}>Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="page">
//       {/* Header */}
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <button
//               className="menu-toggle"
//               onClick={() => setMenuOpen(!menuOpen)}
//               aria-label="Toggle menu"
//             >
//               <FiMenu className="menu-icon" />
//               <span className="menu-text">Filters</span>
//             </button>

//             <div className="logo" style={{ lineHeight: "1.2" }}>
//               <h1 className="site-title" style={{
//                 fontSize: "clamp(18px, 4vw, 28px)",
//                 fontWeight: "900",
//                 margin: "0",
//                 letterSpacing: "1px",
//                 color: "#8b0000",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Handicrafts-Items
//               </h1>
//               <p className="site-subtitle" style={{
//                 fontSize: "clamp(10px, 2.5vw, 14px)",
//                 fontWeight: "500",
//                 margin: "4px 0 0 0",
//                 color: "#25d366",
//                 letterSpacing: "0.5px",
//                 fontFamily: "Poppins, sans-serif",
//               }}>
//                 Authentic Handicrafts & Craft Items
//               </p>
//             </div>

//             <div className="header-actions">
//               <button className="wishlist-btn" onClick={() => alert(`${wishlist.length} items in wishlist`)}>
//                 <FiHeart />
//                 {wishlist.length > 0 && <span className="badge">{wishlist.length}</span>}
//               </button>
//               <button className="cart-btn">
//                 <FiShoppingCart />
//                 <span className="cart-count">0</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Filter Sidebar */}
//       <aside ref={sidebarRef} className={`sidebar ${menuOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <h3>Categories</h3>
//           <button
//             className="close-sidebar"
//             onClick={() => setMenuOpen(false)}
//             aria-label="Close sidebar"
//           >
//             <FiX />
//           </button>
//         </div>

//         <div className="sidebar-content">
//           {/* All Products */}
//           <div className="filter-section">
//             <button
//               className={`category-btn main-category-btn ${selectedCategory === "All Products" ? 'active' : ''}`}
//               onClick={() => handleCategorySelect("All Products")}
//             >
//               <span className="category-name">🛍️ All Products</span>
//               <span className="category-count">{products.length}</span>
//             </button>
//           </div>

//           {/* Main Categories */}
//           {mainCategories.map((mainCat) => (
//             <div key={mainCat.name} className="filter-section">
//               <h4 className="filter-title">
//                 <span className="filter-icon">{mainCat.icon}</span>
//                 {mainCat.name}
//               </h4>
//               <div className="subcategories-list">
//                 {mainCat.subcategories.map((subcat) => {
//                   const count = products.filter(p => p.subcategory === subcat).length;
//                   if (count === 0) return null;
//                   return (
//                     <button
//                       key={subcat}
//                       className={`subcategory-btn ${selectedSubcategory === subcat ? 'active' : ''}`}
//                       onClick={() => handleSubcategorySelect(subcat)}
//                     >
//                       <span className="subcategory-name">{subcat}</span>
//                       <span className="subcategory-count">{count}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}

//           {/* Price Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">💰</span>
//               Price Range
//             </h4>
//             <div className="filter-options">
//               {filters.price.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="price"
//                     value={filter.value}
//                     checked={priceFilter === filter.value}
//                     onChange={(e) => setPriceFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Discount Filter */}
//           <div className="filter-section">
//             <h4 className="filter-title">
//               <span className="filter-icon">🎯</span>
//               Discount
//             </h4>
//             <div className="filter-options">
//               {filters.discount.map((filter) => (
//                 <label key={filter.value} className="filter-option">
//                   <input
//                     type="radio"
//                     name="discount"
//                     value={filter.value}
//                     checked={discountFilter === filter.value}
//                     onChange={(e) => setDiscountFilter(e.target.value)}
//                   />
//                   <span className="filter-label">{filter.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="filter-actions">
//             <button className="clear-filters" onClick={clearFilters}>
//               Clear All Filters
//             </button>
//           </div>
//         </div>
//       </aside>

//       {menuOpen && <div className="overlay" />}

//       {/* Main Content */}
//       <main className="main-content">
//         <div className="container">
//           {/* Products Grid */}
//           <div className="products-grid">
//             {filteredProducts.map((product) => (
//               <div className="product-card" key={product.id}>
//                 <div className="card-image-section">
//                   <div className="image-container">
//                     <img
//                       src={product.images[0]}
//                       alt={product.brand}
//                       className="product-image"
//                       onError={(e) => {
//                         e.target.src = 'https://via.placeholder.com/300x400?text=Image+Not+Available';
//                       }}
//                     />

//                     {/* Discount Badge */}
//                     {product.discount && (
//                       <div className="discount-badge">
//                         {product.discount} OFF
//                       </div>
//                     )}

//                     {/* Wishlist Button */}
//                     <button
//                       className="wishlist-icon-btn"
//                       onClick={() => toggleWishlist(product.id)}
//                     >
//                       <FiHeart className={wishlist.includes(product.id) ? "active" : ""} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="card-content">
//                   <h3 className="brand-name">{product.brand}</h3>

//                   <div className="price-display">
//                     <span className="current-price">{formatPrice(product.currentPrice)}</span>
//                     {product.originalPrice && (
//                       <span className="original-price">{formatPrice(product.originalPrice)}</span>
//                     )}
//                   </div>

//                   <button
//                     className="view-details-btn"
//                     onClick={() => handleViewDetails(product)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="no-products">
//               <h3>No products found</h3>
//               <p>Try adjusting your filters</p>
//               <button onClick={clearFilters}>Clear Filters</button>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Whatweofferbihar.css";
// import { FiHeart, FiStar, FiMenu } from "react-icons/fi";

// const API_URL =
//   "https://yqtycmoqnkgdppjjukad.supabase.co/functions/v1/list-products";

// export default function ProductPage() {
//   const navigate = useNavigate();

//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         const formatted = data.map((item) => ({
//           id: item.id,
//           name: item.name,
//           price: item.sell_price,
//           originalPrice: item.original_price,
//           discount: Math.round(((item.original_price - item.sell_price) / item.original_price) * 100),
//           image: item.images?.[0]?.url,
//           category: item.category?.name || "Others",
//           rating: 4.5,
//         }));

//         setProducts(formatted);

//         const catMap = {};
//         formatted.forEach((p) => {
//           if (!catMap[p.category]) catMap[p.category] = [];
//         });

//         setCategories(catMap);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         setLoading(false);
//       });
//   }, []);

//   const toggleWishlist = (id) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   const handleViewDetails = (product) => {
//     navigate(`/product/${product.id}`);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     setMobileMenuOpen(false); // Close mobile menu after selection
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <FiStar
//           key={i}
//           className={`product-star ${i <= rating ? "product-star-filled" : "product-star-empty"}`}
//         />
//       );
//     }
//     return stars;
//   };

//   if (loading) {
//     return (
//       <div className="product-loading">
//         <div className="product-spinner"></div>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="product-app">
//       {/* Mobile Menu Button */}
//       <button 
//         className="product-mobile-menu-btn"
//         onClick={() => setMobileMenuOpen(true)}
//       >
//         <FiMenu />
//       </button>

//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div 
//           className="product-mobile-overlay"
//           onClick={() => setMobileMenuOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar - Fixed */}
//       <aside className={`product-sidebar ${mobileMenuOpen ? "product-sidebar-mobile-open" : ""}`}>
//         <div className="product-sidebar-header">
//           <h3>Categories</h3>
//           <button 
//             className="product-mobile-close-btn"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             ✕
//           </button>
//         </div>

//         <div className="product-sidebar-menu">
//           <div
//             className={`product-cat-item ${selectedCategory === "All" ? "product-cat-active" : ""}`}
//             onClick={() => handleCategorySelect("All")}
//           >
//             All Products
//           </div>

//           {Object.keys(categories).map((cat) => (
//             <div
//               key={cat}
//               className={`product-cat-item ${selectedCategory === cat ? "product-cat-active" : ""}`}
//               onClick={() => handleCategorySelect(cat)}
//             >
//               {cat}
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="product-main">
//         {/* <div className="product-header">
//           <h2>{selectedCategory === "All" ? "All Products" : selectedCategory}</h2>
//           <p>{filteredProducts.length} items</p>
//         </div> */}

//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="product-card-simple"
//               onClick={() => handleViewDetails(product)}
//             >
//               <div className="product-image-wrapper">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image-simple"
//                   onError={(e) =>
//                     (e.target.src = "https://via.placeholder.com/300x300?text=No+Image")
//                   }
//                 />
//                 <button
//                   className="product-wishlist-btn"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleWishlist(product.id);
//                   }}
//                 >
//                   <FiHeart
//                     className={wishlist.includes(product.id) ? "product-heart-active" : ""}
//                   />
//                 </button>
//                 {product.discount > 0 && (
//                   <div className="product-discount-tag">-{product.discount}%</div>
//                 )}
//               </div>

//               <div className="product-info">
//                 <h3 className="product-name">{product.name}</h3>
                
//                 <div className="product-rating">
//                   {renderStars(product.rating)}
//                 </div>
                
//                 <div className="product-pricing">
//                   <span className="product-price-effective">₹{product.price.toLocaleString()}</span>
//                   {product.originalPrice > product.price && (
//                     <span className="product-price-original">₹{product.originalPrice.toLocaleString()}</span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }




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
  );
}