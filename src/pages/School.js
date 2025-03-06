import React from 'react';
import './School.css';
import BJ from '../portfolio/School/bj.png';
import Type from '../portfolio/School/type.png';
import BJ2 from '../portfolio/School/bj2.png';
import Sand from '../portfolio/School/sand.png';
import Tea1 from '../portfolio/School/tea1.png';
import Tea2 from '../portfolio/School/tea2.png';
import Tea3 from '../portfolio/School/tea3.png';
import Tea4 from '../portfolio/School/tea4.png';
import Tea6 from '../portfolio/School/tea6.png';
import Arches from '../portfolio/School/arches.png';
import Church from '../portfolio/School/church.png';




function School() {
  return (
    <>
    <div className="s_title">
      <h1>| School Projects |</h1>
    </div>
    <div className="s_text">
        <p>
        During my undergraduate studies, I completed a variety of graphic design assignments that strengthened my skills in visual communication, layout design, typography, and branding. These projects range from conceptual designs to practical applications, demonstrating my ability to create compelling visuals across different mediums. Through these assignments, I developed a strong foundation in design principles and software, refining my creative problem-solving abilities.
        </p>
    </div>
    <div className="s_container">
        <img src={BJ} alt="Rolling Stones Spread" className="bj" />
        <img src={Type} alt="Typography" className="type" />
        <img src={BJ2} alt="Gig Poster" className="bj2" />
        <img src={Sand} alt="the Price of Sand" className="sand" />
        <img src={Tea1} alt="color logo" className="tea1" />
        <img src={Tea2} alt="reverse logo" className="tea2" />
        <img src={Tea3} alt="Black and white logo" className="tea3" />
        <img src={Tea4} alt="package" className="tea4" />
        <img src={Tea6} alt="tall bottle" className="tea6" />
        <img src={Arches} alt="Arcdhes NP" className="arches" />
        <img src={Church} alt="church" className="church" />
    </div>
    </>
 )
 
}

export default School
