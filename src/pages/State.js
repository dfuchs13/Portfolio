import React from 'react'
import './State.css';
import WI1 from '../portfolio/State/wi1.png';
import MN1 from '../portfolio/State/mn1.png';
import WI2 from '../portfolio/State/wi2.png';
import MN2 from '../portfolio/State/mn2.png';

function State() {
  return (
    <><div className="state_title">
          <h1>| State Illustrations |</h1>
      </div>
      <div className="state_text">
            <p>
            I designed a series of digitally illustrated landscapes capturing the unique beauty of multiple U.S. states, created specifically for souvenir merchandise. These computer-generated artworks showcase iconic landmarks, natural scenery, and cultural highlights, offering travelers and locals a visually stunning way to celebrate their favorite places.
            Each illustration is crafted with bold colors, crisp details, and a modern artistic approach, making them perfect for prints, postcards, apparel, and other keepsakes. By blending creativity with regional charm, these designs transform beloved destinations into memorable, collectible artwork.
            This project showcases my skills in digital illustration, branding, and merchandise design, bringing the essence of different states to life through engaging visuals.
            </p>
        </div>
            <div class="state-container">
              <img src={WI1} alt="Rock Island" className="wi1" />
              <img src={MN1} alt="Duluth" className="mn1" />
              <img src={WI2} alt="La Crosse" className="wi2" />
              <img src={MN2} alt="Winona" className="mn2" />
          </div></>
  )
}

export default State
