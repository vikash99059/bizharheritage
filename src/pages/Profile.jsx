import React, { useState } from "react";
import ProfileSidebar from "./ProfileSidebar";
import ProfileOrders from "./ProfileOrders";
import Favourites from "./Favourites";
import Payments from "./Payments";
import Addresses from "./Addresses";
import Settings from "./Settings";
import EditProfile from "./EditProfile";
import "./Profile.css";

const Profile = () => {
  const [active, setActive] = useState("Profile");

  const renderComponent = () => {
    switch (active) {
      case "Profile": return <EditProfile />;
      case "orders": return <ProfileOrders />;
      case "favourites": return <Favourites />;
      case "payments": return <Payments />;
      case "addresses": return <Addresses />;
      case "settings": return <Settings />;
     
      default: return <EditProfile />;
    }
  };

  return (
    <div className="profile-page">
      
      {/* BODY */}
      <div className="profile-body">
        <ProfileSidebar active={active} setActive={setActive} />
        <div className="profile-content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
