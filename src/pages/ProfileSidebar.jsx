// import React from "react";

// const Sidebar = ({ active, setActive }) => {
//   const menu = [
//      { id: "profile", label: "Profile" },
//     { id: "orders", label: "Orders" },
//     { id: "favourites", label: "Favourites" },
//     { id: "payments", label: "Payments" },
//     { id: "addresses", label: "Addresses" },
//     { id: "settings", label: "Settings" },
//   ];

//   return (
//     <div className="sidebar">
//       {menu.map((item) => (
//         <div
//           key={item.id}
//           className={`sidebar-item ${active === item.id ? "active" : ""}`}
//           onClick={() => setActive(item.id)}
//         >
//           {item.label}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
// Ensure you are importing your CSS

const Sidebar = ({ active, setActive }) => {
  const menu = [
    { id: "profile", label: "Profile" },
    { id: "orders", label: "Orders" },
    { id: "favourites", label: "Favourites" },
    { id: "payments", label: "Payments" },
    { id: "addresses", label: "Addresses" },
    { id: "settings", label: "Settings" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for mobile */}
      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${mobileOpen ? "open" : ""}`}>
        {menu.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${active === item.id ? "active" : ""}`}
            onClick={() => {
              setActive(item.id);
              setMobileOpen(false); // close sidebar on mobile after click
            }}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Overlay for mobile */}
      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
