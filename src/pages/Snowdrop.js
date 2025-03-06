import React from 'react';
import './Snowdrop.css';
import horz from '../portfolio/Snowdrop/sdh_blue.png';
import logos from '../portfolio/Snowdrop/sd_colors.png';
import label from '../portfolio/Snowdrop/logjam.png';
import bottle from '../portfolio/Snowdrop/IMG_18212.png';
import brochure from '../portfolio/Snowdrop/sd_brochure.png';
import cork from '../portfolio/Snowdrop/IMG_1725.JPG';
import jacket from '../portfolio/Snowdrop/IMG_1726.JPG';
import glass from '../portfolio/Snowdrop/IMG_1724.JPG';



function Snowdrop() {
  return (
    <>
    <div className="sd_title">
      <h1>| Snowdrop Winery |</h1>
    </div>
    <div className="sd_text">
        <p>Snowdrop Winery needed a refined and elegant brand identity that reflected its artisanal craftsmanship and dedication to quality winemaking. I developed a cohesive visual identity, including a custom logo, product labels, and marketing materials, that captures the winery’s sophisticated yet approachable essence.
            The logo design draws inspiration from the delicate snowdrop flower, symbolizing purity and renewal, while the labels blend timeless typography with rich, earthy tones to evoke a sense of tradition and warmth. From bottle labels to promotional materials, every element was carefully crafted to ensure a seamless and memorable brand experience.
            This project highlights my expertise in branding, logo design, typography, and print design, bringing a unique and compelling visual story to life. <br/>
            https://snowdropwinery.com/
        </p>
    </div>
    <div className="sd_container">
        <img src={horz} alt="horizontal logo" className="hor_logo" />
        <img src={logos} alt="all other color logos" className="sd_logos" />
        <img src={label} alt="label" className="label" />
        <img src={bottle} alt="wine bottle" className="bottle" />
        <img src={brochure} alt="founders club" className="brochure" />
        <img src={cork} alt="opening bottle" className="cork" />
        <img src={jacket} alt="jacket" className="jacket" />
        <img src={glass} alt="pouring" className="pouring" />
    </div>
    </>
 )
 
}

export default Snowdrop
