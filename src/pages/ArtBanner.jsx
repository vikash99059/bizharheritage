import React, { useEffect, useRef } from "react";
import bannerImg from "./Biharimage/selfcreaft.jpeg";

const ArtBanner = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.4 }
    );

    if (textRef.current) observer.observe(textRef.current);
  }, []);

  return (
    <section
      className="art-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div ref={textRef} className="art-banner-content">
        <h1 className="art-title">
          Meet Our <span>Artisans</span>
        </h1>
        <p className="art-subtitle">
          Celebrating the hands that preserve heritage and culture
        </p>
      </div>

      <style>{`
        .art-banner {
          width: 100%;
          min-height: 650px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .art-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }

        .art-banner-content {
          position: relative;
          text-align: center;
          color: #fff;
          opacity: 0;
          transform: translateY(60px);
          transition: 1s ease;
        }

        .art-banner-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .art-title {
          font-size: 64px;
          font-weight: 800;
        }

        .art-title span {
          color: #f5c400;
        }

        .art-subtitle {
          margin-top: 16px;
          font-size: 22px;
        }

        @media (max-width: 768px) {
          .art-banner {
            background-attachment: scroll;
          }
          .art-title {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
};

export default ArtBanner;
