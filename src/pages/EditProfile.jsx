// ProfilePage.jsx
import React from "react";
import profilePic from "./Biharimage/pngq.png"; // Apni image yahan import karein

const ProfilePage = () => {
  return (
    <div style={styles.container}>
      {/* Top Buttons */}
      <div style={styles.topButtons}>
        <button style={{ ...styles.button, ...styles.edit }}>Edit Profile</button>
        <button style={{ ...styles.button, ...styles.save }}>Save</button>
        <button style={{ ...styles.button, ...styles.delete }}>Delete Profile</button>
      </div>

      {/* Profile Info */}
      <div style={styles.profileSection}>
        {/* Profile Image */}
        <div style={styles.imageContainer}>
          <img src={profilePic} alt="Profile" style={styles.profileImage} />
        </div>

        {/* Info */}
        <div style={styles.infoContainer}>
          <h2 style={styles.name}>Vikash Kumar Singh</h2>
          <p style={styles.info}><strong>Email:</strong> vikash@example.com</p>
          <p style={styles.info}><strong>Mobile:</strong> +91 9876543210</p>
        </div>
      </div>

      {/* Address Section */}
      <div style={styles.addressSection}>
        <h3 style={styles.addressHeading}>Delivery Address</h3>
        <p style={styles.addressText}>House No. 123, Street Name, City Name, Bihar, India - 800001</p>
      </div>
    </div>
  );
};

// Internal CSS styles
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  topButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
  },
  edit: {
    backgroundColor: "#3498db",
    color: "#fff",
  },
  save: {
    backgroundColor: "#2ecc71",
    color: "#fff",
  },
  delete: {
    backgroundColor: "#e74c3c",
    color: "#fff",
  },
  profileSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageContainer: {
    flex: "0 0 200px",
    textAlign: "center",
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid #3498db",
  },
  infoContainer: {
    flex: "1",
    minWidth: "250px",
  },
  name: {
    fontSize: "28px",
    margin: "0 0 10px 0",
    color: "#2c3e50",
  },
  info: {
    fontSize: "18px",
    margin: "5px 0",
    color: "#34495e",
  },
  addressSection: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
  },
  addressHeading: {
    margin: "0 0 10px 0",
    fontSize: "22px",
    color: "#2c3e50",
  },
  addressText: {
    fontSize: "18px",
    color: "#34495e",
  },

  // Responsive
  "@media (max-width: 768px)": {
    profileSection: {
      flexDirection: "column",
      alignItems: "center",
    },
    imageContainer: {
      flex: "0 0 auto",
    },
    infoContainer: {
      textAlign: "center",
    },
  },
};

export default ProfilePage;
