import React from 'react'
import './Illustrations.css';
import Poster1 from '../portfolio/Illustrations/AHS.png';
import Poster2 from '../portfolio/Illustrations/bane.png';
import Poster3 from '../portfolio/Illustrations/mermaid.png';
import Poster4 from '../portfolio/Illustrations/land.png';

function Illustrations() {
  return (
    <><div className="Ill_title">
          <h1>| Illustrations |</h1>
      </div>
      <div className="Ill_text">
            <p>
                 In my free time, I love creating fun and expressive illustrations that explore different styles, themes, and ideas. Whether experimenting with color, character design, or storytelling through visuals, these pieces reflect my passion for creativity outside of structured projects. Some are playful, some are experimental, and others are just for the joy of drawing. This collection showcases my artistic exploration and love for illustration beyond academic and professional work.
            </p>
        </div>
            <div class="poster-container">
              <img src={Poster1} alt="American Horror Story" className="AHS" />
              <img src={Poster2} alt="bane" className="Bane" />
              <img src={Poster3} alt="mermaid" className="Mermaid" />
              <img src={Poster4} alt="Land" className="Land" />
          </div></>
  )
}

export default Illustrations
