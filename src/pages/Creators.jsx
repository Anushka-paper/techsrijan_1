import React from 'react';
import Section from '../components/Section';
import Heading from '../components/Heading';
import Button from '../components/Button';
import ButtonGradient from '../assets/svg/ButtonGradient';
import Header from '../components/Header';
import niliImage from '../assets/Creators/nili.jpeg';
import anushaImage from '../assets/Creators/anushka.jpeg';
import './Creators.css';

// Flashcard component for creators
const CreatorCard = ({ creator, index }) => {
  const [isConnecting, setIsConnecting] = React.useState(index % 2 === 0);

  const handleGitHub = () => {
    if (creator.github) {
      window.open(creator.github, '_blank');
    }
  };

  const handleLinkedIn = () => {
    if (creator.linkedin) {
      window.open(creator.linkedin, '_blank');
    }
  };

  const handleInstagram = () => {
    if (creator.instagram) {
      window.open(creator.instagram, '_blank');
    }
  };

  return (
    <div className="creator-card">
      <div className="creator-header">
        <div className="profile-section">
          <div className="profile-image">
            <div className="profile-image-placeholder" style={{ background: creator.gradient }}>
              <span className="profile-initial">{creator.initial}</span>
            </div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{creator.name}</h2>
            <div className="profile-status">
              <span 
                className={`status-indicator ${isConnecting ? 'connecting' : 'connected'}`}
                title={isConnecting ? "Active" : "Offline"}
              ></span>
              <span className="status-text">
                {creator.role}
              </span>
            </div>
          </div>
        </div>
        <button 
          className="profile-handle-link"
          onClick={handleGitHub}
          title="Visit GitHub Profile"
        >
          {creator.handle}
        </button>
      </div>
      
      <div className="creator-description">
        {creator.image && (
          <img 
            src={creator.image} 
            alt={creator.name}
            className="creator-image"
          />
        )}
      </div>

      

      <div className="creator-actions">
        <button 
          className="social-btn linkedin-btn"
          onClick={handleLinkedIn}
          title="LinkedIn"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span className="btn-text">LinkedIn</span>
        </button>
        <button 
          className="social-btn instagram-btn"
          onClick={handleInstagram}
          title="Instagram"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span className="btn-text">Instagram</span>
        </button>
      </div>
    </div>
  );
};

const Creators = () => {
  const creators = [
    {
      name: "Nili",
      initial: "N",
      handle: "@nili",
      role: "Creator",
      image: niliImage,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      github: "https://github.com/nili",
      linkedin: "https://linkedin.com/in/nili",
      instagram: "https://instagram.com/nili"
    },
    {
      name: "Anushka",
      initial: "A",
      handle: "@anushka",
      role: "Creator",
      image: anushaImage,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      github: "https://github.com/anushka",
      linkedin: "https://linkedin.com/in/anushka",
      instagram: "https://instagram.com/anushka"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Shooting Stars */}
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      <Section
        className="pt-[20rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="creators"
      >
        <div className="container relative">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
            <Heading
              className="md:max-w-md lg:max-w-2xl mx-auto mb-12"
              title="Meet Our Creators"
              text="The talented minds behind Techsrijan Website"
            />
          </div>

          {/* Creators Grid */}
          <div className="creators-grid">
            {creators.map((creator, index) => (
              <CreatorCard key={index} creator={creator} index={index} />
            ))}
          </div>
          
        </div>

        <ButtonGradient />
      </Section>
    </>
  );
};

export default Creators;
