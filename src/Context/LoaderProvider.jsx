// import React, { createContext, useState, useContext, useEffect } from "react";

// export const LoaderContext = createContext();

// export const LoaderProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <LoaderContext.Provider value={{}}>
//       {loading && (
//         <div style={{
//           position:"fixed", top:0, left:0, right:0, bottom:0,
//           backgroundColor:"#000",
//           display:"flex",
//           flexDirection:"column",
//           justifyContent:"center",
//           alignItems:"center",
//           zIndex:2000
//         }}>
//           <div style={{
//             fontSize:"3rem", fontWeight:"900", color:"gold", letterSpacing:"5px"
//           }}>
//             {"Envision".split("").map((letter, i) => (
//               <span key={i} style={{
//                 display:"inline-block",
//                 opacity:0,
//                 transform:"translateY(20px)",
//                 animation:`typeIn 0.5s forwards`,
//                 animationDelay:`${i*0.2}s`
//               }}>{letter}</span>
//             ))}
//           </div>
//           <div style={{display:"flex", gap:"5px", marginTop:"20px"}}>
//             <div style={{width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"gold", animation:"dotPulse 1s infinite", animationDelay:"0s"}}></div>
//             <div style={{width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"gold", animation:"dotPulse 1s infinite", animationDelay:"0.2s"}}></div>
//             <div style={{width:"10px", height:"10px", borderRadius:"50%", backgroundColor:"gold", animation:"dotPulse 1s infinite", animationDelay:"0.4s"}}></div>
//           </div>
//         </div>
//       )}
//       {children}
//       <style>{`
//         @keyframes typeIn { to { opacity:1; transform:translateY(0); } }
//         @keyframes dotPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
//       `}</style>
//     </LoaderContext.Provider>
//   );
// };

// export const useLoader = () => useContext(LoaderContext);



// import React, { createContext, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export const LoaderContext = createContext();

// export const LoaderProvider = ({ children }) => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   setLoading(true);
//   const timer = setTimeout(() => setLoading(false), 2000);
//   return () => clearTimeout(timer);
// }, [location]);

//   return (
//     <>
//       {loading && (
//         <div style={{
//           position: "fixed",
//           top: 0, left: 0, right: 0, bottom: 0,
//           backgroundColor: "#000",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 2000
//         }}>
//           <div style={{
//             fontSize: "3rem",
//             fontWeight: "900",
//             color: "gold",
//             letterSpacing: "5px"
//           }}>
//             {"Envision".split("").map((letter, i) => (
//               <span key={i} style={{
//                 display: "inline-block",
//                 opacity: 0,
//                 transform: "translateY(20px)",
//                 animation: `typeIn 0.5s forwards`,
//                 animationDelay: `${i*0.2}s`
//               }}>
//                 {letter}
//               </span>
//             ))}
//           </div>

//           <div style={{ display: "flex", gap: "5px", marginTop: "20px" }}>
//             {[0,1,2].map(i => (
//               <div key={i} style={{
//                 width:"10px", height:"10px", borderRadius:"50%",
//                 backgroundColor:"gold",
//                 animation:"dotPulse 1s infinite",
//                 animationDelay:`${i*0.2}s`
//               }}></div>
//             ))}
//           </div>
//         </div>
//       )}
//       {children}
//       <style>{`
//         @keyframes typeIn { to { opacity:1; transform:translateY(0); } }
//         @keyframes dotPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
//       `}</style>
//     </>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import "./Loader.css";

// export const LoaderContext = createContext();

// export const LoaderProvider = ({ children }) => {
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, [location]);

//   return (
//     <>
//       {loading && (
//         <div className="loader_container">
//           <div className="loader">
//             {Array.from({ length: 26 }).map((_, i) => (
//               <div key={i}></div>
//             ))}
//           </div>
//         </div>
//       )}
//       {children}
//     </>
//   );
// };


import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Loader.css";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600); // faster
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="loader_container">
          <div className="spinner"></div>
        </div>
      )}
      {children}
    </>
  );
};
