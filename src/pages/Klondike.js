import React from 'react';
import './Klondike.css';
import Husky2 from '../portfolio/Klondike/husky2.png';




function Klondike() {
  return (
    <>
    <div className="k_title">
      <h1>| Lake Minnetonka Klondike Dog Derby |</h1>
    </div>
    <div className="k_text">
        <p>
        I created a custom design submission for the Lake Minnetonka Klondike Dog Derby, a thrilling winter dog sled race celebrating the spirit of adventure and tradition. My design captures the energy, resilience, and beauty of both the sled dogs and the icy landscapes of Lake Minnetonka.
        The illustration features dynamic composition, bold winter tones, and intricate details that bring the excitement of the race to life. Whether for event branding, merchandise, or promotional materials, this piece reflects the heritage and excitement of this annual event.
        This project highlights my skills in digital illustration, event branding, and storytelling through design, blending artistry with the heart of Minnesota’s winter culture.
        </p>
    </div>
    <div className="k_container">
        <img src={Husky2} alt="Klondike poster" className="husky2" />
    </div>
    </>
 )
 
}

export default Klondike
