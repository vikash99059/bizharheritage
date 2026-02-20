import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaFixed = () => {
  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .social-fixed-wrapper {
          position: fixed;
          top: 30%;
          right: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 9999;
          padding-right: 5px;
          transition: all 0.3s ease;
        }

        .social-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          border-radius: 50% 0 0 50%;
          cursor: pointer;
          transition: all 0.35s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .social-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }

        .social-icon:hover::before {
          left: 100%;
        }

        .social-icon:hover {
          transform: translateX(-8px);
          opacity: 0.95;
          border-radius: 50%;
          width: 52px;
        }

        /* Tooltip styles */
        .social-icon .tooltip {
          position: absolute;
          right: 60px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #333;
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .social-icon .tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -6px;
          transform: translateY(-50%);
          border-width: 6px 0 6px 6px;
          border-style: solid;
          border-color: transparent transparent transparent #333;
        }

        .social-icon:hover .tooltip {
          opacity: 1;
          visibility: visible;
          right: 65px;
        }

        /* Brand Colors */
        .linkedin {
          background-color: #0077b5;
        }

        .instagram {
          background: linear-gradient(
            45deg,
            #f58529,
            #dd2a7b,
            #8134af,
            #515bd4
          );
        }

        .facebook {
          background-color: #1877f2;
        }

        .x-twitter {
          background-color: black;
        }

        /* Pulse animation for attention */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 119, 181, 0.4);
          }
          70% {
            box-shadow: 0 0 0 8px rgba(0, 119, 181, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 119, 181, 0);
          }
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        /* For tablets and small desktops (768px to 1024px) */
        @media (max-width: 1024px) {
          .social-fixed-wrapper {
            top: 30%;
            gap: 8px;
          }
          
          .social-icon {
            width: 44px;
            height: 44px;
            font-size: 18px;
          }
          
          .social-icon:hover {
            width: 46px;
          }
        }

        /* For tablets in portrait (481px to 768px) */
        @media (max-width: 768px) {
          .social-fixed-wrapper {
            top: auto;
            bottom: 63%;
            flex-direction: column;
            gap: 6px;
          }
          
          .social-icon {
            width: 42px;
            height: 42px;
            font-size: 17px;
            border-radius: 50%;
          }
          
          .social-icon:hover {
            transform: translateY(-5px);
            width: 44px;
          }
          
          .social-icon .tooltip {
            display: none;
          }
        }

        /* For mobile devices (320px to 480px) */
        @media (max-width: 480px) {
          .social-fixed-wrapper {
            bottom: 20%;
            gap: 5px;
            padding-right: 3px;
          }
          
          .social-icon {
            width: 38px;
            height: 38px;
            font-size: 16px;
          }
          
          .social-icon:hover {
            width: 40px;
            transform: translateY(-3px);
          }
          
          /* Hide on very small screens if needed */
          @media (max-width: 350px) {
            .social-fixed-wrapper {
              transform: scale(0.9);
              transform-origin: right center;
            }
          }
        }

        /* For very large screens */
        @media (min-width: 1600px) {
          .social-fixed-wrapper {
            right: 20px;
          }
          
          .social-icon {
            width: 52px;
            height: 52px;
            font-size: 22px;
          }
          
          .social-icon:hover {
            width: 56px;
          }
        }

        /* Accessibility: Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .social-icon,
          .social-icon::before,
          .tooltip {
            transition: none;
          }
          
          .pulse-animation {
            animation: none;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .social-icon .tooltip {
            background-color: #222;
            color: #f0f0f0;
          }
          
          .social-icon .tooltip::after {
            border-color: transparent transparent transparent #222;
          }
        }
      `}</style>

      {/* ICONS */}
      <div className="social-fixed-wrapper">
        <a
          href="https://www.linkedin.com/company/bizhar-heritage/"
          target="_blank"
          rel="noreferrer noopener"
          className="social-icon linkedin pulse-animation"
          aria-label="Visit our LinkedIn page"
        >
          <FaLinkedinIn />
          <span className="tooltip">LinkedIn</span>
        </a>

        <a
          href="https://www.instagram.com/bizharheritage/"
          target="_blank"
          rel="noreferrer noopener"
          className="social-icon instagram"
          aria-label="Visit our Instagram page"
        >
          <FaInstagram />
          <span className="tooltip">Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/people/Bizhar-Heritag-E/61586597638647/"
          target="_blank"
          rel="noreferrer noopener"
          className="social-icon facebook"
          aria-label="Visit our Facebook page"
        >
          <FaFacebookF />
          <span className="tooltip">Facebook</span>
        </a>

        <a
  href="https://x.com/BiZharheritage"
  target="_blank"
  rel="noreferrer noopener"
  className="social-icon x-twitter"
  aria-label="Visit our X (Twitter) profile"
>
  <FaXTwitter />
  <span className="tooltip">X (Twitter)</span>
</a>

      </div>
    </>
  );
};

export default SocialMediaFixed;