import React from "react";
import "./VideoHero.css";
import heroVideo from "../Biharimage/136922-765457800_small.mp4"; // apna video yahan rakho

const VideoHero = () => {
  return (
    <section className="video-hero-wrapper">
      <div className="video-hero-container">
        
        {/* Video */}
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay */}
        <div className="video-overlay"></div>

        {/* Heading Content */}
        <div className="hero-content">
          <h1>Bihar Sanskriti & Heritage</h1>
          <p>
            Experience the soul of Bihar through culture, history and traditions
          </p>
        </div>

      </div>
    </section>
  );
};

export default VideoHero;
