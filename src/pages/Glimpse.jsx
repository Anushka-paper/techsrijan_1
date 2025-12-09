import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import image01 from "../assets/Glimpse/IMG.01.jpg";
import image02 from "../assets/Glimpse/IMG.02.jpg";
import image03 from "../assets/Glimpse/IMG.03.jpg";
import image04 from "../assets/Glimpse/IMG.04.jpg";
import image05 from "../assets/Glimpse/IMG.05.jpg";
import image06 from "../assets/Glimpse/IMG.06.jpg";
import image07 from "../assets/Glimpse/IMG.07.jpg";
import image08 from "../assets/Glimpse/IMG.08.jpg";
import image09 from "../assets/Glimpse/IMG.09.jpg";
import image10 from "../assets/Glimpse/IMG.10.jpg";
import image11 from "../assets/Glimpse/IMG.11.jpg";
import image12 from "../assets/Glimpse/IMG.12.jpg";
import image13 from "../assets/Glimpse/IMG.13.jpg";
import image14 from "../assets/Glimpse/IMG.14.jpg";

const styles = `
  /* Main Page and Layout */
  .glimpses-page {
  min-height: 100vh;
  position: relative;
  color: #FFFFFF;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
  text-shadow: none;
  background: #0E0C15;
}

.glimpses-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 30%, rgba(172, 106, 255, 0.15) 0%, transparent 50%), 
              radial-gradient(circle at 80% 80%, rgba(88, 141, 255, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, rgba(255, 119, 111, 0.05) 0%, transparent 40%);
  z-index: 0; 
  pointer-events: none;
}
.glimpses-page::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(14, 12, 21, 0.3); 
  z-index: 0;
  pointer-events: none; 
}
  .main-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 64px 24px;
  }
  @media (min-width: 768px) {
    .main-container {
      padding: 96px 32px;
    }
  }
  .two-column-layout {
    display: grid;
    gap: 40px;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .two-column-layout {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 80px;
    }
  }
  /* Image Grid Section */
  .image-grid-container {
    width: 110%; 
    margin: 0 auto; 
    padding: 32px 48px;
    background: linear-gradient(135deg, rgba(172, 106, 255, 0.12) 0%, rgba(88, 141, 255, 0.08) 100%);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(172, 106, 255, 0.3);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(172, 106, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .masonry-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: minmax(0, 1fr);
    grid-auto-flow: dense;
    gap: 16px;
  }
  .image-item {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: linear-gradient(135deg, #15131D 0%, #252134 100%);
    border: 1px solid rgba(172, 106, 255, 0.25);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(172, 106, 255, 0.1);
  }
  .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease-out, box-shadow 0.5s ease-out;
  }
  .image-item img:hover {
    transform: scale(1.08);
    filter: brightness(1.15) drop-shadow(0 0 24px rgba(172, 106, 255, 0.6));
    box-shadow: 0 12px 48px rgba(172, 106, 255, 0.5);
  }
  .col-span-1 { grid-column: span 1 / span 1; }
  .col-span-2 { grid-column: span 2 / span 2; }
  .row-span-1 { grid-row: span 1 / span 1; }
  .row-span-2 { grid-row: span 2 / span 2; }

  /* Text Content Section */
  .text-content {
    order: 2;
  }
  @media (min-width: 1024px) {
    .text-content {
      padding-left: 32px;
    }
  }
  .content-spacing {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .heading-container {
    margin-bottom: 16px;
  }
  .heading-text {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -0.025em;
    line-height: 1.1;
    color: #FFFFFF;
  }
  @media (min-width: 1024px) {
    .heading-text {
      font-size: 60px;
    }
  }
  .divider {
    width: 64px;
    height: 2px;
    background: linear-gradient(to right, #AC6AFF, #858DFF);
  }
  .description-text {
    font-size: 20px;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 1.625;
  }
  .sub-description-text {
    font-size: 18px;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 1.625;
  }
  .small-text {
    font-size: 16px;
    color: #B8B4D0;
    line-height: 1.625;
  }
  .accent-element {
    padding-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #757185;
  }
  .accent-line {
    width: 32px;
    height: 1px;
    background: linear-gradient(to right, #AC6AFF, transparent);
  }
  /* Glowing Stars Header */
  .glowing-stars {
    text-align: center;
    margin-bottom: 40px;
  }
  .star-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
  }
  .star {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    text-shadow: 0 0 20px #AC6AFF, 0 0 40px #AC6AFF, 0 0 60px rgba(172, 106, 255, 0.8), 0 0 80px rgba(172, 106, 255, 0.4);
    color: #AC6AFF;
    filter: drop-shadow(0 0 12px #AC6AFF) brightness(1.3);
  }
  .star-1 { font-size: 24px; }
  .star-2 { font-size: 32px; animation-delay: 0.3s; color: #858DFF; text-shadow: 0 0 20px #858DFF, 0 0 40px #858DFF, 0 0 60px rgba(133, 141, 255, 0.8); filter: drop-shadow(0 0 12px #858DFF) brightness(1.3); }
  .star-3 { font-size: 24px; animation-delay: 0.6s; }

  .star-divider {
    width: 96px;
    height: 2px;
    background: linear-gradient(to right, transparent, #AC6AFF, #858DFF, transparent);
    opacity: 1;
    box-shadow: 0 0 16px rgba(172, 106, 255, 0.6);
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; filter: drop-shadow(0 0 12px #AC6AFF) brightness(1.3); }
    50% { opacity: 0.7; filter: drop-shadow(0 0 20px #858DFF) brightness(1.1); }
  }
  /* Centered Section */
  .centered-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
    padding:120px 32px;
  }
  .center-text {
    width: 25%;
    color: #ADA8C3;
    font-size: 16px;
    line-height: 1.625;
  }
  .center-image-grid {
    width: 90%;
    padding: 24px;
    background: linear-gradient(135deg, rgba(172, 106, 255, 0.12) 0%, rgba(88, 141, 255, 0.08) 100%);
    border: 1px solid rgba(172, 106, 255, 0.3);
    border-radius: 20px;
    backdrop-filter: blur(8px);
    display: grid;
    gap: 16px;
    box-shadow: 0 8px 32px rgba(172, 106, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }
  .center-image-grid img {
    border-radius: 16px;
    object-fit: cover;
    width: 100%;
    height: 220px;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease-out, box-shadow 0.4s ease-out;
    cursor: pointer;
    border: 1px solid rgba(172, 106, 255, 0.2);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }  
  .center-image-grid img:hover {
    transform: scale(1.06);
    filter: brightness(1.2) drop-shadow(0 0 20px rgba(172, 106, 255, 0.6));
    box-shadow: 0 12px 48px rgba(172, 106, 255, 0.5);
    border-color: rgba(172, 106, 255, 0.5);
  }
  .center-row-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  /* Styling for WebKit-based browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 8px;
  background-color: transparent; /* Makes the scrollbar track transparent */
}

::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2); /* A semi-transparent white thumb */
  border-radius: 4px; /* Rounded corners for a sleek look */
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.4); /* Brighter on hover */
}

/* Styling for Firefox */
html {
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent; /* thumb color track color */
}
`;

const GlowingStarsHeader = () => (
  <div className="glowing-stars">
    <div className="star-row">
      <span className="star star-1">★</span>
      <div className="star-divider"></div>
      <span className="star star-2">★</span>
      <div className="star-divider"></div>
      <span className="star star-3">★</span>
    </div>
  </div>
);

export default function Glimpses() {
  const images = [
    { src: image01, className: "col-span-2 row-span-2" },
    { src: image02, className: "col-span-2 row-span-1" },
    { src: image03, className: "col-span-1 row-span-2" },
    { src: image04, className: "col-span-2 row-span-1" },
    { src: image05, className: "col-span-1 row-span-1" },
    { src: image06, className: "col-span-1 row-span-1" },
  ];
  
  return (
    <>
      <style>{styles}</style>
      <div className="glimpses-page">
        <Header />
        
        {/* Back Button */}
        <div className="pt-28 px-6 max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white/80 hover:text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          >
            <span className="text-xl">←</span>
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>

        <GlowingStarsHeader />

        <div className="main-container">
          {/* First Section */}
          <div className="two-column-layout">
            <div className="image-grid-container">
              <div className="masonry-grid">
                {images.map((image, index) => (
                  <div key={index} className={`image-item ${image.className}`}>
                    <img src={image.src} alt={`Glimpse ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-content">
              <div className="content-spacing">
                <div className="heading-container">
                  <h1 className="heading-text">Glimpses</h1>
                  <div className="divider"></div>
                </div>
                <div className="content-spacing">
                  <p className="description-text">
                    A curated collection of moments that define our journey—captured
                    in fleeting glimpses of beauty, innovation, and human connection.
                  </p>
                  <p className="sub-description-text">
                    Each frame tells a story of discovery, where light meets purpose
                    and vision transforms into reality. These glimpses represent more
                    than images—they are windows into experiences that shape our
                    understanding of the world around us.
                  </p>
                  <p className="small-text">
                    Explore the intersection of artistry and authenticity, where every
                    detail has been thoughtfully considered and every moment carefully preserved.
                  </p>
                </div>
                <div className="accent-element">
                  <span>Collection</span>
                  <div className="accent-line"></div>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* New Centered Section */}
          <div className="centered-section">
            <div className="center-text">
              <h2 className="heading-text">Moments of Creation</h2>
              <div className="divider"></div><br/>
              <p>
               "Captures the raw energy of creation—where ideas take shape, hands build dreams, and challenges spark innovation. 
               These glimpses showcase curiosity in action, teamwork in progress, and the determination to transform imagination into reality."
              </p>
            </div>

            <div className="center-image-grid">
              <img src={image07} alt="img1" />
              <div className="center-row-2">
                <img src={image08} alt="img2" />
                <img src={image09} alt="img3" />
              </div>
              <img src={image10} alt="img4" />
            </div>

            <div className="center-text">
              <h2 className="heading-text">Spirit of Togetherness</h2>
              <div className="divider"></div><br/>
              <p>
                "The story unfolds through bonds of friendship, shared laughter, and collective spirit. 
                These moments go beyond activities—they reflect the strength of unity, the joy of collaboration, and the memories that stay long after the day is over".</p>
            </div>
          </div>

          {/* ===== Section 3: Images Right + Text Left ===== */}
          <div className="section-wrapper my-32">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Text Left */}
              <div className="order-1 lg:pr-16 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
                    Our Story in Frames
                  </h1>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-white to-gray-400"></div>
                </div>
                <div className="space-y-6"><br/>
                  <p className="text-xl lg:text-2xl font-light text-gray-200 leading-relaxed">
                    Moments captured with care, preserving the beauty of
                    experiences.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed font-light">
                    Through these glimpses, we celebrate creativity, purpose,
                    and the endless pursuit of discovery.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    A journey etched in frames—each image narrating its own
                    chapter.
                  </p>
                </div>
                <div className="pt-6">
                  <div className="inline-flex items-center space-x-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    <span>Highlights</span>
                    <div className="w-8 h-px bg-gray-600"></div>
                    <span>2024</span>
                  </div>
                </div>
              </div>

              {/* Images Right */}
              <div className="order-2">
                <div className="center-image-grid">
                  <img src={image14} alt="img1" />
                  <div className="center-row-2">
                    <img src={image11} alt="img2" />
                    <img src={image12} alt="img3" />
                  </div>
                  <img src={image13} alt="img4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
