import React from "react";

const SimpleFreeDelivery = () => {
  const styles = {
    container: {
      background: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
      padding: "48px 24px",
      textAlign: "center",
      borderRadius: "16px",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    title: {
      fontSize: "clamp(36px, 8vw, 64px)",
      fontWeight: "800",
      color: "#fff",
      marginBottom: "16px",
      letterSpacing: "-1px",
    },
    subtitle: {
      fontSize: "18px",
      color: "rgba(255,255,255,0.9)",
      marginBottom: "24px",
    },
    button: {
      background: "#fff",
      border: "none",
      padding: "14px 32px",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#ee5a24",
      cursor: "pointer",
    },
    footer: {
      marginTop: "24px",
      fontSize: "14px",
      color: "rgba(255,255,255,0.7)",
      wordBreak: "break-word",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚚</div>
      <h1 style={styles.title}>FREE DELIVERY</h1>
      <h2 style={{ ...styles.title, fontSize: "28px" }}>FREE DELIVERY</h2>
      <p style={styles.subtitle}>
        Order now & get free product delivered free
      </p>
      <button
        style={styles.button}
        onClick={() => alert("Free delivery applied!")}
      >
        Shop Now →
      </button>
      <div style={styles.footer}>
        FREEDELIVERY • FREEDELIVERY • FREEDELIVERY
      </div>
    </div>
  );
};

export default SimpleFreeDelivery;