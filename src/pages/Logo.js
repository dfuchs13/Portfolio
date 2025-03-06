import React from 'react'
import './Logo.css'
import rugby from '../portfolio/Logo/rugby.png';
import Farm1 from '../portfolio/Logo/bgff_v.png';
import Farm2 from '../portfolio/Logo/bgff_h.png';
import Skate1 from '../portfolio/Logo/skate1.png';
import Skate2 from '../portfolio/Logo/skate2.png';
import Bee from '../portfolio/Logo/bee.png';
import Errand from '../portfolio/Logo/errand.png';

function Logo() {
  return (
   <>
       <div className="l_title">
         <h1>| Logo |</h1>
       </div>
       <div className="l_text">
           <p>
           Over the years, I have designed a variety of logos for individuals, small businesses, and personal projects. Each logo is crafted with a focus on visual identity, meaning, and versatility. From sleek and modern to hand-drawn and expressive, my designs reflect the unique vision of each client. This collection showcases my ability to adapt to different styles and branding needs, ensuring every logo makes a lasting impression.
           </p>
       </div>
       <div className="l_container1">
            <img src={rugby} alt="Lax Rugby FC" className="rugby1" />
       </div>
       <div className="l_container2">
           <img src={Farm1} alt="Boomgardens Vertical" className="farm1" />
           <img src={Farm2} alt="Boomgardens Horizontal" className="farm2" />
           <img src={Skate1} alt="Toe picks 1" className="skate1" />
           <img src={Skate2} alt="Toe picks 2" className="skate2" />
           <img src={Bee} alt="Curious B" className="bee" />
           <img src={Errand} alt="Errand Boys" className="errand" />
       </div>
       </>
  )
}

export default Logo
