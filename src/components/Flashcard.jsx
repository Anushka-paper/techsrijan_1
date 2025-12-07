import React, { useState } from 'react';
import '../Flashcard.css';

const Flashcard = () => {
  const [isConnecting, setIsConnecting] = useState(true);
  
  const handleAddMember = () => {
    alert('Adding member functionality would go here!');
    // You can replace this with actual logic
  };
  
  return (
    <div className="flashcard">
      <div className="flashcard-header">
        <div className="profile-section">
          <div className="profile-image">
            <div className="profile-image-placeholder">
              <span className="profile-initial">S</span>
            </div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">Sienna Brooks</h2>
            <div className="profile-status">
              <span 
                className={`status-indicator ${isConnecting ? 'connecting' : 'connected'}`}
                title={isConnecting ? "Connecting..." : "Connected"}
              ></span>
              <span className="status-text">
                {isConnecting ? 'Connecting' : 'Connected'}
              </span>
            </div>
          </div>
        </div>
        <div className="profile-handle">@sienna32</div>
      </div>
      
      <div className="flashcard-actions">
        <button 
          className="add-member-btn"
          onClick={handleAddMember}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span className="btn-icon">+</span>
          <span className="btn-text">Add member</span>
        </button>
      </div>
    </div>
  );
};

export default Flashcard;