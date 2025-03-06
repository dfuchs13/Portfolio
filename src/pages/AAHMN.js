import React from 'react';
import './AAHMN.css';
import Husky1 from '../portfolio/AAHMN/husky1.png';
import Phone1 from '../portfolio/AAHMN/phone1.png';
import Phone2 from '../portfolio/AAHMN/phone2.png';
import Shirt from '../portfolio/AAHMN/tshirt.png';
import Howl from '../portfolio/AAHMN/howl.png';
import Screen from '../portfolio/AAHMN/screen.PNG';
import Woof from '../portfolio/AAHMN/woof.png';




function Snowdrop() {
  return (
    <>
    <div className="sd_title">
      <h1>| Adopt A Husky MN |</h1>
    </div>
    <div className="AA_text">
        <p>
        Adopt A Husky MN, a nonprofit dedicated to rescuing and rehoming Siberian Huskies, needed engaging marketing materials to raise awareness and support for their mission. I designed a range of promotional items, including event banners, social media graphics, flyers, and merchandise, all crafted to capture the spirit and energy of these incredible dogs.
        The designs incorporate bold visuals, heartfelt messaging, and a consistent brand identity, ensuring a strong connection with potential adopters, volunteers, and donors. By blending eye-catching imagery with compelling calls to action, these materials help drive engagement and increase adoption rates.
        This project showcases my ability to create impactful, mission-driven design work that not only informs but also inspires action.
        </p>
    </div>
    <div className="AA_container">
        <img src={Husky1} alt="WWP Logo" className="wwp" />
        <img src={Phone1} alt="logo on phone" className="phone1" />
        <img src={Phone2} alt="social post on phone" className="phone2" />
        <img src={Shirt} alt="logo on shirt" className="shirt" />
        <img src={Howl} alt="Happy HowlOWeen" className="howl" />
        <img src={Screen} alt="Howloween on screen" className="screen" />
        <img src={Woof} alt="Raise the Woof" className="woof" />
    </div>
    </>
 )
 
}

export default Snowdrop
