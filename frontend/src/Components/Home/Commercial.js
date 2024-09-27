// components/MainSection.js

import React from 'react';
import './Commercial.css'
import { assets } from '../Assets/assets';
const Commercial = () => {
  return (
    <div className="main-section">
      <div className="image-container">
        <img src={assets.quangcao1} alt="Modern Living" />
        <div className="text-overlay">
          
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-item">
          <img src={assets.quangcao2} alt="Smart Cleaning" />
        </div>
        <div className="bottom-item">
          <img src={assets.quangcao3} alt="Dishwasher" />
        
        </div>
      </div>
    </div>
  );
}

export default Commercial;
