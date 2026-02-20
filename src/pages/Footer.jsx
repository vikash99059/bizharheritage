// import React, { useState, useEffect } from "react";

// // import images
// import footerBg from "./Biharimage/farming.jpg";
// import logo from "./Biharimage/biharlogo.png";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import { MdLocationOn, MdPhone, MdEmail, MdMessage, MdClose } from "react-icons/md";
// import { BsClock } from "react-icons/bs";
// import { IoCall } from "react-icons/io5";
// import { IoSend } from "react-icons/io5";
// const HeritageFooter = () => {


//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     { id: 1, sender: "bot", text: "Hello! Welcome to Envision Support. How can I help you today?", time: "10:00 AM" }
//   ]);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSmallMobile, setIsSmallMobile] = useState(false);

//   // Check screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       setIsSmallMobile(window.innerWidth <= 480);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Chat Functions
//   const toggleChat = () => setIsChatOpen(!isChatOpen);

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     const userMessage = {
//       id: chatMessages.length + 1,
//       sender: "user",
//       text: message,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setChatMessages([...chatMessages, userMessage]);
//     setMessage("");

//     // Auto reply
//     setTimeout(() => {
//       const botMessage = {
//         id: chatMessages.length + 2,
//         sender: "bot",
//         text: "Thank you for your message! Our team will get back to you shortly.",
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setChatMessages(prev => [...prev, botMessage]);
//     }, 1000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   return (
//     <div style={styles.wrapper}>


//       <button
//         onClick={toggleChat}
//         style={{
//           position: "fixed",
//           bottom: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
//           right: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
//           width: isSmallMobile ? "45px" : isMobile ? "50px" : "60px",
//           height: isSmallMobile ? "45px" : isMobile ? "50px" : "60px",
//           borderRadius: "50%",
//           background: "linear-gradient(135deg, #25D366, #128C7E)",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//           boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: isSmallMobile ? "18px" : isMobile ? "20px" : "24px",
//           zIndex: "999",
//           transition: "all 0.3s ease"
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.1)";
//           e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 0, 0, 0.4)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
//         }}
//       >
//         {isChatOpen ? <MdClose /> : <FaWhatsapp />}
//       </button>

//       {/* Chat Box */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: isChatOpen 
//             ? (isSmallMobile ? "70px" : isMobile ? "80px" : "100px") 
//             : "-600px",
//           right: isMobile ? "5vw" : "30px",
//           left: isMobile ? "5vw" : "auto",
//           width: isSmallMobile ? "90vw" : isMobile ? "90vw" : "350px",
//           maxWidth: "350px",
//           height: isSmallMobile ? "350px" : isMobile ? "400px" : "450px",
//           background: "white",
//           borderRadius: "15px",
//           boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
//           overflow: "hidden",
//           transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//           zIndex: "998",
//           display: "flex",
//           flexDirection: "column"
//         }}
//       >
//         {/* Chat Header */}
//         <div style={{
//           background: "linear-gradient(135deg, #025261, #013a43)",
//           color: "white",
//           padding: isSmallMobile ? "12px 15px" : "15px 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between"
//         }}>
//           <div style={{ 
//             display: "flex", 
//             alignItems: "center", 
//             gap: "10px",
//             flex: 1 
//           }}>
//             <div style={{
//               width: isSmallMobile ? "32px" : "40px",
//               height: isSmallMobile ? "32px" : "40px",
//               borderRadius: "50%",
//               background: "rgb(235,195,101)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0
//             }}>
//               <MdMessage style={{ fontSize: isSmallMobile ? "14px" : "16px" }} />
//             </div>
//             <div style={{ overflow: "hidden" }}>
//               <div style={{ 
//                 margin: 0, 
//                 fontWeight: "bold",
//                 fontSize: isSmallMobile ? "14px" : "16px",
//                 whiteSpace: "nowrap",
//                 color:'white',
//                 overflow: "hidden",
//                 textOverflow: "ellipsis"
//               }}>
//                 Envision Support
//               </div>
//               <div style={{ 
//                 display: "flex", 
//                 alignItems: "center", 
//                 gap: "5px", 
//                 fontSize: isSmallMobile ? "10px" : "12px",
//                 whiteSpace: "nowrap"
//               }}>
//                 <BsClock style={{ fontSize: isSmallMobile ? "8px" : "10px" }} />
//                 <span>Typically replies in 5 mins</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Phone Call Section */}
//         <div style={{
//           background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
//           padding: isSmallMobile ? "10px 15px" : "12px 20px",
//           borderBottom: "1px solid #dee2e6"
//         }}>
//           <div style={{ 
//             display: "flex", 
//             alignItems: "center", 
//             justifyContent: "space-between",
//             flexWrap: isSmallMobile ? "wrap" : "nowrap",
//             gap: isSmallMobile ? "8px" : "0"
//           }}>
//             <div style={{ 
//               display: "flex", 
//               alignItems: "center", 
//               gap: "8px",
//               flex: 1,
//               minWidth: 0
//             }}>
//               <IoCall style={{ 
//                 color: "#25D366",
//                 fontSize: isSmallMobile ? "14px" : "16px"
//               }} />
//               <div style={{ minWidth: 0 }}>
//                 <div style={{ 
//                   fontSize: isSmallMobile ? "10px" : "12px", 
//                   color: "#666",
//                   whiteSpace: "nowrap"
//                 }}>
//                   Call us directly
//                 </div>
//                 <a 
//                   href="tel:+919063906314"
//                   style={{
//                     color: "#025261",
//                     fontWeight: "bold",
//                     textDecoration: "none",
//                     fontSize: isSmallMobile ? "12px" : "14px",
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     display: "block"
//                   }}
//                 >
//                   +91 9063906314
//                 </a>
//               </div>
//             </div>
//             <a 
//               href="tel:+919063906314"
//               style={{
//                 background: "#25D366",
//                 color: "white",
//                 padding: isSmallMobile ? "5px 12px" : "6px 15px",
//                 borderRadius: "20px",
//                 textDecoration: "none",
//                 fontSize: isSmallMobile ? "10px" : "12px",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//                 whiteSpace: "nowrap",
//                 flexShrink: 0
//               }}
//             >
//               <IoCall />
//               Call Now
//             </a>
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div style={{
//           flex: 1,
//           padding: isSmallMobile ? "10px" : "15px",
//           overflowY: "auto",
//           background: "#f8f9fa"
//         }}>
//           {chatMessages.map((msg) => (
//             <div
//               key={msg.id}
//               style={{
//                 marginBottom: "12px",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: msg.sender === "user" ? "flex-end" : "flex-start"
//               }}
//             >
//               <div
//                 style={{
//                   background: msg.sender === "user" ? "#025261" : "white",
//                   color: msg.sender === "user" ? "white" : "#333",
//                   padding: isSmallMobile ? "8px 12px" : "10px 15px",
//                   borderRadius: "18px",
//                   maxWidth: "85%",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   border: msg.sender === "bot" ? "1px solid #dee2e6" : "none",
//                   fontSize: isSmallMobile ? "12px" : "14px",
//                   lineHeight: "1.4",
//                   wordBreak: "break-word"
//                 }}
//               >
//                 {msg.text}
//               </div>
//               <span style={{
//                 fontSize: isSmallMobile ? "9px" : "10px",
//                 color: "#666",
//                 marginTop: "4px",
//                 marginLeft: msg.sender === "bot" ? "8px" : "0",
//                 marginRight: msg.sender === "user" ? "8px" : "0"
//               }}>
//                 {msg.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div style={{
//           padding: isSmallMobile ? "12px" : "15px",
//           borderTop: "1px solid #dee2e6",
//           background: "white"
//         }}>
//           <div style={{ 
//             display: "flex", 
//             gap: "8px",
//             alignItems: "flex-end"
//           }}>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Type your message here..."
//               style={{
//                 flex: 1,
//                 padding: isSmallMobile ? "8px 12px" : "10px 15px",
//                 border: "1px solid #dee2e6",
//                 borderRadius: "25px",
//                 resize: "none",
//                 fontFamily: "Arial, sans-serif",
//                 fontSize: isSmallMobile ? "13px" : "14px",
//                 minHeight: isSmallMobile ? "40px" : "45px",
//                 maxHeight: "100px",
//                 lineHeight: "1.4"
//               }}
//             />
//             <button
//               onClick={handleSendMessage}
//               disabled={!message.trim()}
//               style={{
//                 width: isSmallMobile ? "40px" : "45px",
//                 height: isSmallMobile ? "40px" : "45px",
//                 borderRadius: "50%",
//                 background: message.trim() ? "#025261" : "#ccc",
//                 color: "white",
//                 border: "none",
//                 cursor: message.trim() ? "pointer" : "not-allowed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.3s ease",
//                 flexShrink: 0
//               }}
//             >
//               <IoSend style={{ fontSize: isSmallMobile ? "14px" : "16px" }} />
//             </button>
//           </div>
//           <div style={{
//             fontSize: isSmallMobile ? "10px" : "11px",
//             color: "#666",
//             textAlign: "center",
//             marginTop: "8px",
//             padding: "0 5px"
//           }}>
//             Connect with us on{" "}
//             <a 
//               href="https://wa.me/919063906314" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               style={{ 
//                 color: "#25D366", 
//                 textDecoration: "none", 
//                 fontWeight: "bold",
//                 fontSize: isSmallMobile ? "10px" : "11px"
//               }}
//             >
//               WhatsApp
//             </a>{" "}
//             for faster response
//           </div>
//         </div>
//       </div>
//       {/* ===== Hanging Heritage Box ===== */}
//       <div style={styles.hangingBox}>
//         <div style={styles.hangingText}>
//           <h3 style={styles.hangingTitle}>
//             Bihar & Jharkhand Heritage
//           </h3>

//           <p style={styles.hangingQuote}>
//             “संस्कृति, परंपरा और इतिहास — हमारी पहचान”
//           </p>

//           <p style={styles.hangingDesc}>
//             Discover the timeless culture, sacred traditions, ancient stories
//             and living heritage of Bihar & Jharkhand — preserved with pride
//             for generations to come.
//           </p>
//         </div>
//       </div>

//       {/* ===== Footer ===== */}
//       <footer style={styles.footer}>
//         <div style={styles.footerGrid}>
//           {/* Column 1 */}
//           <div style={styles.col}>
//             <img src={logo} alt="Logo" style={styles.logo} />

//             <p style={styles.aboutText}>
//               We celebrate the soul of Bihar & Jharkhand by preserving
//               heritage, festivals, traditions and untold stories through
//               a modern digital platform.
//             </p>

//             <div style={styles.socials}>
//               <a href="#" style={styles.icon}>in</a>
//               <a href="#" style={styles.icon}>ig</a>
//               <a href="#" style={styles.icon}>fb</a>
//               <a href="#" style={styles.icon}>yt</a>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>What We Do</h4>
//             <ul style={styles.list}>
//               <li>Heritage Documentation</li>
//               <li>Cultural Awareness</li>
//               <li>Festival Highlights</li>
//               <li>Tourism Promotion</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>Our Address</h4>
//             <div style={styles.addressItem}>
//               <span style={styles.locationIcon}>📍</span>
//               <p style={styles.addressText}>
//                 Hariharganj, Palamu <br />
//                 Jharkhand – 822131 <br />
//                 India
//               </p>
//             </div>
//           </div>

//           {/* Column 4 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>Quick Links</h4>
//             <ul style={styles.list}>
//               <li>About Us</li>
//               <li>Our Culture</li>
//               <li>Events</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>

//         <div style={styles.bottom}>
//           © {new Date().getFullYear()} Bihar & Jharkhand Heritage. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HeritageFooter;

// /* ===================== STYLES ===================== */

// const styles = {
//   wrapper: {
//     position: "relative",
//     marginTop: "240px",
//   },

//   /* Hanging Box */
//   hangingBox: {
//     position: "absolute",
//     top: "-262px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "92%",
//     height: "329px",
//     maxWidth: "1000px",
//     padding: "40px 30px",
//     borderRadius: "22px",
//     textAlign: "center",
//     zIndex: 10,

//     backgroundImage: `
//       linear-gradient(
//         rgba(0,0,0,0.6),
//         rgba(0,0,0,0.6)
//       ),
//       url(${footerBg})
//     `,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     boxShadow: "0 25px 55px rgba(0,0,0,0.35)",
//   },

//   hangingText: {
//     maxWidth: "720px",
//     margin: "0 auto",
//   },

//   hangingTitle: {
//     margin: 0,
//     fontSize: "clamp(20px, 4vw, 28px)",
//     fontWeight: "800",
//     color: "#fff",
//     letterSpacing: "0.5px",
//   },

//   hangingQuote: {
//     margin: "12px 0",
//     color: "#FACC15",
//     fontSize: "15px",
//     fontStyle: "italic",
//   },

//   hangingDesc: {
//     fontSize: "15px",
//     lineHeight: "1.7",
//     color: "#f1f1f1",
//   },

//   /* Footer */
//   footer: {
//     background: "#8b0000",
//     color: "#ccc",
//     paddingTop: "120px",
//     paddingBottom: "30px",
//     position: "relative",
//   },

//   footerGrid: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
//     gap: "32px",
//     padding: "0 20px",
//   },

//   col: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   },

//   logo: {
//     width: "120px",
//   },

//   aboutText: {
//     fontSize: "14px",
//     fontWeight:"bold",
//     lineHeight: "1.6",
//     color: "#bbb",
//   },

//   socials: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "10px",
//   },

//   icon: {
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     background: "white",
//     color: "#8b0000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textDecoration: "none",
//     fontSize: "14px",
//     fontWeight: "600",
//   },

//   colHeading: {
//     color: "#FACC15",
//     fontSize: "16px",
//     marginBottom: "6px",
//   },

//   list: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     lineHeight: "2",
//     fontSize: "14px",
//   },

//   addressItem: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "flex-start",
//   },

//   locationIcon: {
//     fontSize: "18px",
//   },

//   addressText: {
//     fontSize: "14px",
//     lineHeight: "1.6",
//     color: "#bbb",
//   },

//   bottom: {
//     marginTop: "40px",
//     borderTop: "2px solid gold",
//     paddingTop: "15px",
//     textAlign: "center",
//     fontSize: "16px",
//     color: "white",
//   },
// };



// import React, { useState, useEffect } from "react";

// // import images
// import footerBg from "./Biharimage/farming.jpg";
// import logo from "./Biharimage/biharlogo.png";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
// import { MdLocationOn, MdPhone, MdEmail, MdMessage, MdClose } from "react-icons/md";
// import { BsClock } from "react-icons/bs";
// import { IoCall } from "react-icons/io5";
// import { IoSend } from "react-icons/io5";
// import { FaUser, FaHeadset } from "react-icons/fa";

// const HeritageFooter = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([
//     { id: 1, sender: "bot", text: "Namaste! Welcome to Bihar-Jharkhand Heritage Support. How can I help you explore our rich culture today?", time: "10:00 AM" }
//   ]);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isSmallMobile, setIsSmallMobile] = useState(false);

//   // Check screen size
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       setIsSmallMobile(window.innerWidth <= 480);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Chat Functions
//   const toggleChat = () => setIsChatOpen(!isChatOpen);

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     const userMessage = {
//       id: chatMessages.length + 1,
//       sender: "user",
//       text: message,
//       time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };

//     setChatMessages([...chatMessages, userMessage]);
//     setMessage("");

//     // Auto reply
//     setTimeout(() => {
//       const botMessage = {
//         id: chatMessages.length + 2,
//         sender: "bot",
//         text: "धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी। आप हमें WhatsApp पर भी संपर्क कर सकते हैं: +91 9288404060",
//         time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
//       setChatMessages(prev => [...prev, botMessage]);
//     }, 1000);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Heritage color palette
//   const heritageColors = {
//     primary: "#8b0000", // Dark Red
//     secondary: "#DAA520", // Golden
//     accent: "#013220", // Dark Green
//     lightBg: "#FFF8DC", // Cornsilk
//     darkBg: "#2F4F4F", // Dark Slate Gray
//     whatsapp: "#25D366",
//     customerChat: "#8b0000" // Red for customer chat icon
//   };

//   return (
//     <div style={styles.wrapper}>
//       {/* Chat Floating Button - RED for Customer Chat */}
//       <button
//         onClick={toggleChat}
//         style={{
//           position: "fixed",
//           bottom: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
//           right: isSmallMobile ? "15px" : isMobile ? "20px" : "30px",
//           width: isSmallMobile ? "45px" : isMobile ? "50px" : "60px",
//           height: isSmallMobile ? "45px" : isMobile ? "50px" : "60px",
//           borderRadius: "50%",
//           background: `linear-gradient(135deg, ${heritageColors.customerChat}, #B22222)`,
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//           boxShadow: "0 4px 20px rgba(139, 0, 0, 0.3)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontSize: isSmallMobile ? "18px" : isMobile ? "20px" : "24px",
//           zIndex: "999",
//           transition: "all 0.3s ease"
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.1)";
//           e.currentTarget.style.boxShadow = "0 6px 25px rgba(139, 0, 0, 0.4)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1)";
//           e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 0, 0, 0.3)";
//         }}
//       >
//         {isChatOpen ? <MdClose /> : <FaUser />}
//       </button>

//       {/* Chat Box */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: isChatOpen 
//             ? (isSmallMobile ? "70px" : isMobile ? "80px" : "100px") 
//             : "-600px",
//           right: isMobile ? "5vw" : "30px",
//           left: isMobile ? "5vw" : "auto",
//           width: isSmallMobile ? "90vw" : isMobile ? "90vw" : "350px",
//           maxWidth: "350px",
//           height: isSmallMobile ? "350px" : isMobile ? "400px" : "450px",
//           background: `linear-gradient(135deg, ${heritageColors.lightBg}, #FFFFFF)`,
//           borderRadius: "15px",
//           boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
//           overflow: "hidden",
//           transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//           zIndex: "998",
//           display: "flex",
//           flexDirection: "column",
//           border: `2px solid ${heritageColors.secondary}`
//         }}
//       >
//         {/* Chat Header */}
//         <div style={{
//           background: `linear-gradient(135deg, ${heritageColors.primary}, ${heritageColors.accent})`,
//           color: "white",
//           padding: isSmallMobile ? "12px 15px" : "15px 20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between"
//         }}>
//           <div style={{ 
//             display: "flex", 
//             alignItems: "center", 
//             gap: "10px",
//             flex: 1 
//           }}>
//             <div style={{
//               width: isSmallMobile ? "32px" : "40px",
//               height: isSmallMobile ? "32px" : "40px",
//               borderRadius: "50%",
//               background: heritageColors.secondary,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               flexShrink: 0,
//               border: `2px solid white`
//             }}>
//               <FaHeadset style={{ fontSize: isSmallMobile ? "14px" : "16px", color: heritageColors.primary }} />
//             </div>
//             <div style={{ overflow: "hidden" }}>
//               <div style={{ 
//                 margin: 0, 
//                 fontWeight: "bold",
//                 fontSize: isSmallMobile ? "14px" : "16px",
//                 whiteSpace: "nowrap",
//                 color: 'white',
//                 overflow: "hidden",
//                 textOverflow: "ellipsis"
//               }}>
//                 बिहार-झारखंड विरासत सहायता
//               </div>
//               <div style={{ 
//                 display: "flex", 
//                 alignItems: "center", 
//                 gap: "5px", 
//                 fontSize: isSmallMobile ? "10px" : "12px",
//                 whiteSpace: "nowrap"
//               }}>
//                 <BsClock style={{ fontSize: isSmallMobile ? "8px" : "10px" }} />
//                 <span>5 मिनट में उत्तर देंगे</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Options */}
//         <div style={{
//           background: `linear-gradient(135deg, #f8f9fa, #e9ecef)`,
//           padding: isSmallMobile ? "10px 15px" : "12px 20px",
//           borderBottom: `1px solid ${heritageColors.secondary}`
//         }}>
//           <div style={{ 
//             display: "grid", 
//             gridTemplateColumns: "1fr 1fr",
//             gap: "10px"
//           }}>
//             {/* Call Option */}
//             <a 
//               href="tel:+919288404060"
//               style={{
//                 background: heritageColors.primary,
//                 color: "white",
//                 padding: isSmallMobile ? "8px 10px" : "10px 12px",
//                 borderRadius: "8px",
//                 textDecoration: "none",
//                 fontSize: isSmallMobile ? "11px" : "12px",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 justifyContent: "center",
//                 transition: "all 0.3s ease"
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = heritageColors.accent;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = heritageColors.primary;
//               }}
//             >
//               <IoCall />
//               कॉल करें
//             </a>

//             {/* WhatsApp Option */}
//             <a 
//               href="https://wa.me/919288404060?text=नमस्ते!%20बिहार-झारखंड%20विरासत%20के%20बारे%20में%20जानकारी%20चाहिए"
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 background: heritageColors.whatsapp,
//                 color: "white",
//                 padding: isSmallMobile ? "8px 10px" : "10px 12px",
//                 borderRadius: "8px",
//                 textDecoration: "none",
//                 fontSize: isSmallMobile ? "11px" : "12px",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "6px",
//                 justifyContent: "center",
//                 transition: "all 0.3s ease"
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#128C7E";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = heritageColors.whatsapp;
//               }}
//             >
//               <FaWhatsapp />
//               WhatsApp
//             </a>
//           </div>
          
//           <div style={{ 
//             marginTop: "10px",
//             textAlign: "center",
//             fontSize: isSmallMobile ? "10px" : "11px",
//             color: heritageColors.primary,
//             fontWeight: "bold"
//           }}>
//             📞 +91 9288404060
//           </div>
//         </div>

//         {/* Chat Messages */}
//         <div style={{
//           flex: 1,
//           padding: isSmallMobile ? "10px" : "15px",
//           overflowY: "auto",
//           background: "#f8f9fa"
//         }}>
//           {chatMessages.map((msg) => (
//             <div
//               key={msg.id}
//               style={{
//                 marginBottom: "12px",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: msg.sender === "user" ? "flex-end" : "flex-start"
//               }}
//             >
//               <div
//                 style={{
//                   background: msg.sender === "user" ? heritageColors.primary : "white",
//                   color: msg.sender === "user" ? "white" : "#333",
//                   padding: isSmallMobile ? "8px 12px" : "10px 15px",
//                   borderRadius: "18px",
//                   maxWidth: "85%",
//                   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//                   border: msg.sender === "bot" ? `1px solid ${heritageColors.secondary}` : "none",
//                   fontSize: isSmallMobile ? "12px" : "14px",
//                   lineHeight: "1.4",
//                   wordBreak: "break-word"
//                 }}
//               >
//                 {msg.text}
//               </div>
//               <span style={{
//                 fontSize: isSmallMobile ? "9px" : "10px",
//                 color: "#666",
//                 marginTop: "4px",
//                 marginLeft: msg.sender === "bot" ? "8px" : "0",
//                 marginRight: msg.sender === "user" ? "8px" : "0"
//               }}>
//                 {msg.time}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Message Input */}
//         <div style={{
//           padding: isSmallMobile ? "12px" : "15px",
//           borderTop: `1px solid ${heritageColors.secondary}`,
//           background: "white"
//         }}>
//           <div style={{ 
//             display: "flex", 
//             gap: "8px",
//             alignItems: "flex-end"
//           }}>
//             <textarea
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="अपना संदेश यहाँ लिखें..."
//               style={{
//                 flex: 1,
//                 padding: isSmallMobile ? "8px 12px" : "10px 15px",
//                 border: `1px solid ${heritageColors.secondary}`,
//                 borderRadius: "25px",
//                 resize: "none",
//                 fontFamily: "Arial, sans-serif",
//                 fontSize: isSmallMobile ? "13px" : "14px",
//                 minHeight: isSmallMobile ? "40px" : "45px",
//                 maxHeight: "100px",
//                 lineHeight: "1.4",
//                 color: heritageColors.accent
//               }}
//             />
//             <button
//               onClick={handleSendMessage}
//               disabled={!message.trim()}
//               style={{
//                 width: isSmallMobile ? "40px" : "45px",
//                 height: isSmallMobile ? "40px" : "45px",
//                 borderRadius: "50%",
//                 background: message.trim() ? heritageColors.primary : "#ccc",
//                 color: "white",
//                 border: "none",
//                 cursor: message.trim() ? "pointer" : "not-allowed",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 transition: "all 0.3s ease",
//                 flexShrink: 0
//               }}
//               onMouseEnter={(e) => {
//                 if (message.trim()) {
//                   e.currentTarget.style.background = heritageColors.accent;
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (message.trim()) {
//                   e.currentTarget.style.background = heritageColors.primary;
//                 }
//               }}
//             >
//               <IoSend style={{ fontSize: isSmallMobile ? "14px" : "16px" }} />
//             </button>
//           </div>
//           <div style={{
//             fontSize: isSmallMobile ? "10px" : "11px",
//             color: heritageColors.primary,
//             textAlign: "center",
//             marginTop: "8px",
//             padding: "0 5px",
//             fontWeight: "bold"
//           }}>
//             त्वरित उत्तर के लिए WhatsApp पर संपर्क करें:{" "}
//             <a 
//               href="https://wa.me/919288404060" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               style={{ 
//                 color: heritageColors.whatsapp, 
//                 textDecoration: "none",
//                 fontSize: isSmallMobile ? "10px" : "11px"
//               }}
//             >
//               +91 9288404060
//             </a>
//           </div>
//         </div>
//       </div>
      
//       {/* ===== Hanging Heritage Box ===== */}
//       <div style={styles.hangingBox}>
//         <div style={styles.hangingText}>
//           <h3 style={styles.hangingTitle}>
//             Bihar & Jharkhand Heritage
//           </h3>

//           <p style={styles.hangingQuote}>
//             "संस्कृति, परंपरा और इतिहास — हमारी पहचान"
//           </p>

//           <p style={styles.hangingDesc}>
//             Discover the timeless culture, sacred traditions, ancient stories
//             and living heritage of Bihar & Jharkhand — preserved with pride
//             for generations to come.
//           </p>
//         </div>
//       </div>

//       {/* ===== Footer ===== */}
//       <footer style={styles.footer}>
//         <div style={styles.footerGrid}>
//           {/* Column 1 */}
//           <div style={styles.col}>
//             <img src={logo} alt="Logo" style={styles.logo} />

//             <p style={styles.aboutText}>
//               We celebrate the soul of Bihar & Jharkhand by preserving
//               heritage, festivals, traditions and untold stories through
//               a modern digital platform.
//             </p>

//             <div style={styles.socials}>
//               <a href="#" style={styles.icon}>in</a>
//               <a href="#" style={styles.icon}>ig</a>
//               <a href="#" style={styles.icon}>fb</a>
//               <a href="#" style={styles.icon}>yt</a>
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>What We Do</h4>
//             <ul style={styles.list}>
//               <li>Heritage Documentation</li>
//               <li>Cultural Awareness</li>
//               <li>Festival Highlights</li>
//               <li>Tourism Promotion</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>Our Address</h4>
//             <div style={styles.addressItem}>
//               <span style={styles.locationIcon}>📍</span>
//               <p style={styles.addressText}>
//                 Hariharganj, Palamu <br />
//                 Jharkhand – 822131 <br />
//                 India
//               </p>
//             </div>
//           </div>

//           {/* Column 4 */}
//           <div style={styles.col}>
//             <h4 style={styles.colHeading}>Quick Links</h4>
//             <ul style={styles.list}>
//               <li>About Us</li>
//               <li>Our Culture</li>
//               <li>Events</li>
//               <li>Contact Us</li>
//             </ul>
//           </div>
//         </div>

//         <div style={styles.bottom}>
//           © {new Date().getFullYear()} Bihar & Jharkhand Heritage. All Rights Reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HeritageFooter;

// /* ===================== STYLES ===================== */

// const styles = {
//   wrapper: {
//     position: "relative",
//     marginTop: "240px",
//   },

//   /* Hanging Box */
//   hangingBox: {
//     position: "absolute",
//     top: "-262px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "92%",
//     height: "329px",
//     maxWidth: "1000px",
//     padding: "40px 30px",
//     borderRadius: "22px",
//     textAlign: "center",
//     zIndex: 10,

//     backgroundImage: `
//       linear-gradient(
//         rgba(0,0,0,0.6),
//         rgba(0,0,0,0.6)
//       ),
//       url(${footerBg})
//     `,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     boxShadow: "0 25px 55px rgba(0,0,0,0.35)",
//   },

//   hangingText: {
//     maxWidth: "720px",
//     margin: "0 auto",
//   },

//   hangingTitle: {
//     margin: 0,
//     fontSize: "clamp(20px, 4vw, 28px)",
//     fontWeight: "800",
//     color: "#fff",
//     letterSpacing: "0.5px",
//   },

//   hangingQuote: {
//     margin: "12px 0",
//     color: "#FACC15",
//     fontSize: "15px",
//     fontStyle: "italic",
//   },

//   hangingDesc: {
//     fontSize: "15px",
//     lineHeight: "1.7",
//     color: "#f1f1f1",
//   },

//   /* Footer */
//   footer: {
//     background: "#8b0000",
//     color: "#ccc",
//     paddingTop: "120px",
//     paddingBottom: "30px",
//     position: "relative",
//   },

//   footerGrid: {
//     maxWidth: "1200px",
//     margin: "0 auto",
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
//     gap: "32px",
//     padding: "0 20px",
//   },

//   col: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "14px",
//   },

//   logo: {
//     width: "120px",
//   },

//   aboutText: {
//     fontSize: "14px",
//     fontWeight:"bold",
//     lineHeight: "1.6",
//     color: "#bbb",
//   },

//   socials: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "10px",
//   },

//   icon: {
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     background: "white",
//     color: "#8b0000",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textDecoration: "none",
//     fontSize: "14px",
//     fontWeight: "600",
//   },

//   colHeading: {
//     color: "#FACC15",
//     fontSize: "16px",
//     marginBottom: "6px",
//   },

//   list: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     lineHeight: "2",
//     fontSize: "14px",
//   },

//   addressItem: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "flex-start",
//   },

//   locationIcon: {
//     fontSize: "18px",
//   },

//   addressText: {
//     fontSize: "14px",
//     lineHeight: "1.6",
//     color: "#bbb",
//   },

//   bottom: {
//     marginTop: "40px",
//     borderTop: "2px solid gold",
//     paddingTop: "15px",
//     textAlign: "center",
//     fontSize: "16px",
//     color: "white",
//   },
// };




import React, { useState, useEffect, useRef } from "react";
import footerBg from "./Biharimage/farming.jpg";
import logo from "./Biharimage/biharlogo.png";
import heritageBg from "./Biharimage/farming.jpg"; // apna path set karo

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaUser,
  FaHeadset,
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdMessage,
  MdClose,
  MdOutlineTravelExplore
} from "react-icons/md";
import { BsClock, BsChatDots } from "react-icons/bs";
import { IoCall, IoSend, IoGlobeOutline } from "react-icons/io5";
import { TbBrandWhatsapp } from "react-icons/tb";
import {  FaXTwitter } from "react-icons/fa6";
import { BsHeadset } from "react-icons/bs";


const HeritageFooter = () => {
  // State management
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! Welcome to Bihar-Jharkhand Heritage Support. How can I help you explore our rich culture today?",
      time: "10:00 AM"
    }
  ]);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const chatEndRef = useRef(null);

  // Heritage color palette
  const heritageColors = {
    primary: "#8B0000", // Heritage Red
    secondary: "#D4AF37", // Heritage Gold
    accent: "#006400", // Deep Green
    light: "#FFF8DC", // Cornsilk
    dark: "#2F4F4F", // Dark Slate
    whatsapp: "#25D366",
    background: "#F5F5DC" // Beige background
  };

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current && isChatOpen) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatOpen]);

  // Chat Functions
  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, userMessage]);
    setMessage("");

    // Auto reply with cultural response
    setTimeout(() => {
      const responses = [
        "Thank you! Our heritage team will contact you shortly.",
        "We appreciate your message! We'll provide you with detailed information about Bihar-Jharkhand's rich cultural heritage.",
        "Cultural preservation is our mission. Our expert will contact you within 5 minutes."
      ];
      
      const botMessage = {
        id: chatMessages.length + 2,
        sender: "bot",
        text: responses[Math.floor(Math.random() * responses.length)] + " 📞 +91 9288404060",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages(prev => [...prev, botMessage]);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick responses
  const quickResponses = [
    "Information about tourist destinations",
    "Details about cultural events",
    "Want to purchase handicraft products",
    "Want to contribute to heritage preservation"
  ];

  return (
    <div style={styles.wrapper}>
     
      <div style={styles.hangingBox}>
  <div style={styles.hangingContent}>
    
    <div style={styles.heritageBadge}>
      <MdOutlineTravelExplore style={{ fontSize: "22px", color: "#FFD700" }} />
      <span style={styles.badgeText}>BIHAR & JHARKHAND HERITAGE</span>
    </div>

    <p style={styles.hangingQuote}>
      "संस्कृति, परंपरा और इतिहास — हमारी पहचान"
    </p>

    <h2 style={styles.hangingTitle}>
      The Legacy of Culture, The Heritage of Tradition
    </h2>

    <p style={styles.hangingQuote}>
      Bihar and Jharkhand carry a rich heritage shaped by culture, tradition, and history. From sacred places and historic landmarks to village crafts, festivals, and daily life, the spirit of these lands lives in their people. 
 
This heritage is simple, strong, and proudly passed on from one generation to the next 
.
    </p>

  </div>
</div>



      {/* Premium Chat Interface */}
      <div style={{
        ...styles.chatContainer,
        transform: isChatOpen ? 'translateY(0)' : 'translateY(100px)',
        opacity: isChatOpen ? 1 : 0,
        pointerEvents: isChatOpen ? 'all' : 'none'
      }}>
        {/* Chat Header */}
        <div style={styles.chatHeader}>
          <div style={styles.chatHeaderContent}>
            <div style={styles.botAvatar}>
              <FaHeadset style={{ fontSize: "20px", color: "white" }} />
            </div>
            <div style={styles.botInfo}>
              <h4 style={styles.botName}>Bihar-Jharkhand Heritage Support</h4>
              <div style={styles.statusIndicator}>
                <div style={styles.statusDot}></div>
                <span style={styles.statusText}>Available Now</span>
              </div>
            </div>
          </div>
          <button onClick={toggleChat} style={styles.closeButton}>
            <MdClose style={{ fontSize: "20px" }} />
          </button>
        </div>

        {/* Quick Responses */}
        <div style={styles.quickResponses}>
          {quickResponses.map((response, index) => (
            <button
              key={index}
              onClick={() => setMessage(response)}
              style={styles.quickResponseButton}
            >
              {response}
            </button>
          ))}
        </div>

        {/* Chat Messages */}
        <div style={styles.messagesContainer}>
          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.messageBubble,
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? heritageColors.primary : '#ffffff'
              }}
            >
              <div style={styles.messageContent}>
                <span style={{
                  color: msg.sender === 'user' ? 'white' : '#333',
                  fontSize: isSmallMobile ? '13px' : '14px'
                }}>
                  {msg.text}
                </span>
                <span style={styles.messageTime}>{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Message Input */}
        <div style={styles.inputContainer}>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              style={styles.messageInput}
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              style={{
                ...styles.sendButton,
                backgroundColor: message.trim() ? heritageColors.primary : '#cccccc'
              }}
            >
              <IoSend style={{ fontSize: "18px" }} />
            </button>
          </div>
          
          <div style={styles.contactOptions}>
            <a
              href="tel:+79709 04797"
              style={styles.contactOption}
            >
              <IoCall style={{ marginRight: "5px" }} />
              Call Now
            </a>
            <a
              href="https://wa.me/92884 04060 "
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...styles.contactOption, backgroundColor: heritageColors.whatsapp }}
            >
              <TbBrandWhatsapp style={{ marginRight: "5px", fontSize: "18px" }} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          ...styles.floatingButton,
          transform: isScrolled ? 'scale(1)' : 'scale(1.1)',
          boxShadow: isScrolled 
            ? '0 8px 25px rgba(139, 0, 0, 0.3)'
            : '0 12px 30px rgba(139, 0, 0, 0.4)'
        }}
      >
        {isChatOpen ? (
          <MdClose style={{ fontSize: "22px" }} />
        ) : (
        

<div style={styles.buttonContent}>
  <BsHeadset style={{ fontSize: "20px" }} />
  <span style={styles.buttonText}> Support</span>
</div>

        )}
      </button>

      {/* Premium Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          {/* Footer Grid */}
          <div style={styles.footerGrid}>
            
            {/* Brand Column */}
            <div style={styles.footerColumn}>
              <div style={styles.brandSection}>
                <img src={logo} alt="Bihar Jharkhand Heritage" style={styles.logo} />
                <h3 style={styles.brandName}>
                  Bihar & Jharkhand Heritage
                </h3>
                <p style={styles.brandTagline}>
                  Culture Preservation, Tradition Promotion, Heritage Development
                </p>
                <p style={styles.brandDescription}>
                  We are dedicated to preserving, promoting, and transmitting the rich cultural heritage 
                  of Bihar and Jharkhand through digital platforms for future generations.
                </p>
              </div>

              {/* Social Media */}
              <div style={styles.socialSection}>
                <h4 style={styles.socialTitle}>Connect With Us</h4>
                <div style={styles.socialIcons}>
  {[
    {
      icon: <FaFacebookF />,
      color: "#1877F2",
      label: "Facebook",
      link: "https://www.facebook.com/people/Bizhar-Heritag-E/pfbid02hQ38dBENWTK1zbrCVMHruVi61xQQMDid2fUZW5Nb2gtGaXJRfuq2HVThQm6w1tX6l/?rdid=0fTg97UQrTxpS5Qi&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HHudfdE4K%2F"
    },
    {
      icon: <FaInstagram />,
      color: "#E4405F",
      label: "Instagram",
      link: "https://www.instagram.com/bizharheritage/"
    },
    
    {
  icon: <FaXTwitter />,
  color: "#000000", // X (Twitter) black
  label: "X (Twitter)",
  link: "https://x.com/BiZharheritage" // Add your Twitter/X link here
},

    {
      icon: <FaLinkedinIn />,
      color: "#0A66C2",
      label: "LinkedIn",
      link: "https://www.linkedin.com/posts/bizhar-heritage_bizhar-heritage-linkedin-activity-7413789728078135297-MXd_/?utm_source=share&utm_medium=member_android&rcm=ACoAAC8H0tIBRGWvBhs6HcO4QK45eIIJ1FColds"
    }
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.socialIcon,
        backgroundColor: social.color
      }}
      aria-label={social.label}
    >
      {social.icon}
    </a>
  ))}
</div>

              </div>
            </div>

            {/* Quick Links */}
            <div style={styles.footerColumn}>
              <h4 style={styles.columnTitle}>Quick Links</h4>
              <ul style={styles.linkList}>
                {[
                  { text: "Home", url: "/" },
                  { text: "About-bihar", url: "/about-bihar" },
                  { text: "About-jharkhand", url: "/about-jharkhand" },
                  { text: "product", url: "/what-we-offer-bihar" },
                  // { text: "Jharkhand-product", url: "/what-we-offer-jharkhand" },
                  { text: "Blog", url: "/blog" },
                  { text: "our carft makers", url: "/Art" }
                ].map((link, index) => (
                  <li key={index} style={styles.linkItem}>
                    <a href={link.url} style={styles.footerLink}>
                      <span style={styles.linkIcon}>›</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div style={styles.footerColumn}>
              <h4 style={styles.columnTitle}>Our Services</h4>
              <ul style={styles.linkList}>
                {[
                  { text: "Heritage Conservation", },
                  { text: "Cultural Research",  },
                  { text: "Tourism Development", },
                  { text: "Art Promotion",  },
                  { text: "Digital Museum",  },
                  { text: "Educational Programs", url: "/educational-programs" }
                ].map((service, index) => (
                  <li key={index} style={styles.linkItem}>
                    <a href={service.url} style={styles.footerLink}>
                      <span style={styles.linkIcon}>›</span>
                      {service.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div style={styles.footerColumn}>
              <h4 style={styles.columnTitle}>Contact Us</h4>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p style={styles.contactLabel}>Head Office</p>
                    <p style={styles.contactText}>
                      Brajpur, Ratu, Ranchi<br />
                      Jharkhand - 835222, India
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p style={styles.contactLabel}>Helpline Numbers</p>
                    <p style={styles.contactText}>
                      
                      <a href="tel:+919288404060" style={styles.phoneLink}>
                        +91 92884 04060
                      </a>
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <p style={styles.contactLabel}>Email</p>
                    <p style={styles.contactText}>
                      <a href="mailto:info@bizharheritage.com" style={styles.emailLink}>
                        info@bizharheritage.com
                      </a>
                    </p>
                  </div>
                </div>

                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>
                    <IoGlobeOutline />
                  </div>
                  <div>
                    <p style={styles.contactLabel}>Working Hours</p>
                    <p style={styles.contactText}>
                      Mon-Sat: 10:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={styles.footerBottom}>
            <div style={styles.copyright}>
              © {new Date().getFullYear()} Bihar-Jharkhand Heritage Preservation Committee. All Rights Reserved.
            </div>
            {/* <div style={styles.legalLinks}>
              <a href="/privacy-policy" style={styles.legalLink}>Privacy Policy</a>
              <span style={styles.divider}>|</span>
              <a href="/terms" style={styles.legalLink}>Terms of Service</a>
              <span style={styles.divider}>|</span>
              <a href="/disclaimer" style={styles.legalLink}>Disclaimer</a>
            </div>
            <div style={styles.madeWithLove}>
              <FaHeart style={{ color: "#ff4757", marginRight: "5px" }} />
              Made in India
            </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

// Premium Styles (Same as before, just English text changed)
const styles = {
  wrapper: {
    position: "relative",
    marginTop: "400px",
    background: "#8b0000",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif"
  },

  // Hanging Box Styles
  hangingBox: {
  position: "absolute",
  top: "-300px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "90%",
  maxWidth: "1200px",

  backgroundImage: `
    linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.65)
    ),
    url(${heritageBg})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",   // 🔥 image fix rahegi

  borderRadius: "30px",
  padding: "50px 30px",
  boxShadow: "0 40px 80px rgba(0,0,0,0.35)",
  zIndex: 10,
  overflow: "hidden"
},


  hangingContent: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto"
  },

  heritageBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "10px 20px",
    borderRadius: "50px",
    backdropFilter: "blur(10px)",
    marginBottom: "30px",
    border: "1px solid rgba(212, 175, 55, 0.3)"
  },

  badgeText: {
    color: "#D4AF37",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "2px"
  },

  hangingTitle: {
  fontSize: "clamp(22px, 3vw, 32px)", // 🔽 small
  fontWeight: "600",
  color: "#FFFFFF",
  marginBottom: "16px",
  lineHeight: "1.3",
  textShadow: "0 2px 8px rgba(0,0,0,0.4)"
},

hangingQuote: {
  fontSize: "clamp(14px, 2vw, 16px)", // 🔽 small
  color: "rgba(255,255,255,0.9)",
  lineHeight: "1.7",
  maxWidth: "650px",
  margin: "0 auto"
},


  statsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap"
  },

  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  statNumber: {
    fontSize: "36px",
    fontWeight: "800",
    color: "#FFD700",
    lineHeight: "1"
  },

  statLabel: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
    marginTop: "8px",
    textAlign: "center"
  },

  statDivider: {
    width: "1px",
    height: "40px",
    background: "rgba(255, 255, 255, 0.2)"
  },

  scrollIndicator: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  scrollArrow: {
    width: "20px",
    height: "20px",
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
    borderRight: "2px solid rgba(255, 255, 255, 0.5)",
    transform: "rotate(45deg)",
    animation: "bounce 2s infinite"
  },

  // Chat Styles
  chatContainer: {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    width: "380px",
    maxWidth: "calc(100vw - 60px)",
    height: "550px",
    background: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },

  chatHeader: {
    background: "linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  },

  chatHeaderContent: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  botAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #D4AF37 0%, #FFD700 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid white"
  },

  botInfo: {
    color: "white"
  },

  botName: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600"
  },

  statusIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "4px"
  },

  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#4CAF50",
    animation: "pulse 2s infinite"
  },

  statusText: {
    fontSize: "12px",
    opacity: 0.9
  },

  closeButton: {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "5px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
    ":hover": {
      background: "rgba(255, 255, 255, 0.1)"
    }
  },

  quickResponses: {
    padding: "15px",
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    background: "#F8F9FA",
    borderBottom: "1px solid #E9ECEF"
  },

  quickResponseButton: {
    padding: "8px 16px",
    background: "white",
    border: "1px solid #DEE2E6",
    borderRadius: "20px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.3s",
    ":hover": {
      background: "#8B0000",
      color: "white",
      borderColor: "#8B0000"
    }
  },

  messagesContainer: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },

  messageBubble: {
    maxWidth: "80%",
    borderRadius: "20px",
    padding: "12px 18px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
  },

  messageContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px"
  },

  messageTime: {
    fontSize: "11px",
    opacity: 0.7,
    alignSelf: "flex-end"
  },

  inputContainer: {
    padding: "20px",
    borderTop: "1px solid #E9ECEF",
    background: "white"
  },

  inputWrapper: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px"
  },

  messageInput: {
    flex: 1,
    padding: "12px 18px",
    border: "1px solid #DEE2E6",
    borderRadius: "25px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.3s",
    ":focus": {
      borderColor: "#8B0000"
    }
  },

  sendButton: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s"
  },

  contactOptions: {
    display: "flex",
    gap: "10px"
  },

  contactOption: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    background: "#8B0000",
    color: "white",
    textDecoration: "none",
    fontSize: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
    }
  },

  // Floating Button
  floatingButton: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #47b91a 0%, #0fdb53 100%)",
    color: "white",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    ":hover": {
      transform: "scale(1.1)",
      boxShadow: "0 15px 35px rgba(139, 0, 0, 0.4)"
    }
  },

  buttonContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px"
  },

  buttonText: {
    fontSize: "11px",
    fontWeight: "600"
  },

  // Footer Styles
  footer: {
    background: "#8b0000",
    color: "#E0D6C9",
    paddingTop: "150px",
    position: "relative",
    overflow: "hidden"
  },

  footerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px"
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "50px",
    marginBottom: "60px"
  },

  footerColumn: {
    display: "flex",
    flexDirection: "column"
  },

  brandSection: {
    marginBottom: "30px"
  },

  logo: {
    width: "180px",
    marginBottom: "15px",
    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))"
  },

  brandName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#D4AF37",
    margin: "0 0 10px 0"
  },

  brandTagline: {
    fontSize: "14px",
    color: "#B8860B",
    marginBottom: "15px",
    fontStyle: "italic"
  },

  brandDescription: {
    fontSize: "14px",
    lineHeight: "1.8",
    color: "rgba(255, 255, 255, 0.7)",
    margin: 0
  },

  socialSection: {
    marginTop: "20px"
  },

  socialTitle: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#D4AF37",
    marginBottom: "15px"
  },

  socialIcons: {
    display: "flex",
    gap: "12px"
  },

  socialIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "16px",
    transition: "all 0.3s",
    ":hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
    }
  },

  columnTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#D4AF37",
    marginBottom: "25px",
    position: "relative",
    paddingBottom: "10px",
    "::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "40px",
      height: "2px",
      background: "#B8860B"
    }
  },

  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },

  linkItem: {
    marginBottom: "12px"
  },

  footerLink: {
    color: "rgba(255, 255, 255, 0.8)",
    textDecoration: "none",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s",
    ":hover": {
      color: "#D4AF37",
      transform: "translateX(5px)"
    }
  },

  linkIcon: {
    color: "#D4AF37",
    fontSize: "12px"
  },

  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  contactItem: {
    display: "flex",
    gap: "15px",
    alignItems: "flex-start"
  },

  contactIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: "rgba(212, 175, 55, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#D4AF37",
    fontSize: "16px",
    flexShrink: 0
  },

  contactLabel: {
    fontSize: "12px",
    color: "#B8860B",
    marginBottom: "4px",
    fontWeight: "600"
  },

  contactText: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0
  },

  phoneLink: {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    transition: "all 0.3s",
    ":hover": {
      color: "#D4AF37"
    }
  },

  emailLink: {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    transition: "all 0.3s",
    ":hover": {
      color: "#D4AF37",
      textDecoration: "underline"
    }
  },

  footerBottom: {
    borderTop: "1px solid rgba(212, 175, 55, 0.2)",
    padding: "30px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px"
  },

  copyright: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.6)",
    flex: 1,
    minWidth: "300px"
  },

  legalLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },

  legalLink: {
    color: "rgba(255, 255, 255, 0.6)",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.3s",
    ":hover": {
      color: "#D4AF37"
    }
  },

  divider: {
    color: "rgba(255, 255, 255, 0.3)"
  },

  madeWithLove: {
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.6)"
  }
};

// Add CSS animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0) rotate(45deg);}
    40% {transform: translateY(-10px) rotate(45deg);}
    60% {transform: translateY(-5px) rotate(45deg);}
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes pulse {
    0% {opacity: 1;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
  }
`, styleSheet.cssRules.length);

export default HeritageFooter;