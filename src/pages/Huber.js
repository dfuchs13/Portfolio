import React from 'react'
import './Huber.css'
import Hub1 from '../portfolio/Huber/Hub1.png';
import Hub2 from '../portfolio/Huber/Hub2.png';

function Huber() {
  return (
   <>
       <div className="hub_title">
         <h1>| Huber Home Services |</h1>
       </div>
       <div className="hub_text">
           <p>
           Huber Home Services, a trusted provider of compassionate home care, needed a strong yet welcoming brand identity to reflect their commitment to quality, reliability, and personalized care. I designed a custom logo and cohesive branding elements that convey warmth, professionalism, and trust.
           The logo features clean, modern typography paired with a subtle yet meaningful icon, symbolizing care, stability, and support. The color palette and design choices were carefully selected to create a sense of comfort and approachability while maintaining a professional appearance.
           From business cards to marketing materials, this brand identity establishes a strong visual presence that helps Huber Home Services stand out in the home care industry.
           </p>
       </div>
       <div className="hub_container">
           <img src={Hub1} alt="Reverse Vertical" className="hub1" />
           <img src={Hub2} alt="Horizontal color" className="hub2" />
       </div>
       </>
  )
}

export default Huber