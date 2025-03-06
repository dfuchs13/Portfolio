import React from 'react'
import './IIT.css'
import Phish from '../portfolio/IIT/Phishing.png';
import Heart from '../portfolio/IIT/Heart.png';
import Cyber from '../portfolio/IIT/Cyber.png';
import Highway from '../portfolio/IIT/Highway.png';
import Birthdates from '../portfolio/IIT/Birthdates.png';
import Easter from '../portfolio/IIT/Easter.png';
import Patty from '../portfolio/IIT/Patty.png';
import CTRL from '../portfolio/IIT/CTRL.png';
import Beware from '../portfolio/IIT/Beware.png';
import Chalk from '../portfolio/IIT/Chalk.png';
import Halloween from '../portfolio/IIT/Halloween.png';


function Logo() {
  return (
   <>
       <div className="IIT_title">
         <h1>| IIT Posters |</h1>
       </div>
       <div className="IIT_text">
           <p>
            I designed a series of informative and visually engaging posters for the Viterbo University IIT Department, aimed at providing students with quick access to essential tips and FAQs. These posters were strategically designed to be clear, concise, and visually appealing, ensuring students could easily find the information they needed at a glance.
            Each poster incorporates bold typography, intuitive layouts, and university branding, making complex information more digestible. Covering topics such as academic resources, tech support, lab guidelines, and common student inquiries, these designs serve as both functional and aesthetic additions to the department.
            This project showcases my expertise in graphic design, information hierarchy, and educational communication, transforming essential student resources into engaging visual materials.           </p>
       </div>
       <div className="IIT_container1">
            <img src={Phish} alt="Phishing" className="phish" />
       </div>
       <div className="IIT_container2">
           <img src={Heart} alt="heart" className="heart" />
           <img src={Cyber} alt="Cyber" className="cyber" />
           <img src={Highway} alt="Toe pic" className="high" />
           <img src={Birthdates} alt="Birthday" className="birth" />
           <img src={Easter} alt="Easter" className="easter" />
           <img src={Patty} alt="St Patty" className="patty" />
           <img src={CTRL} alt="ctrl alt delete" className="ctrl" />
           <img src={Beware} alt="Beware" className="beware" />
           <img src={Chalk} alt="chalk" className="chalk" />
           <img src={Halloween} alt="halloween" className="halloween" />
       </div>
       </>
  )
}

export default Logo
