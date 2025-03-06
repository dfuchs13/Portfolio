import React from 'react';
import './Fox.css';
import Fox from '../portfolio/Fox/fox.png';
import Label1 from '../portfolio/Fox/CherryRiesling.png';
import Label2 from '../portfolio/Fox/Cherry.png';
import Label3 from '../portfolio/Fox/CherryPeach.jpg';
import Label4 from '../portfolio/Fox/RazPeach.jpg';
import Label5 from '../portfolio/Fox/cab.jpg';
import Label6 from '../portfolio/Fox/CM.png';
import Label7 from '../portfolio/Fox/ries.png';
import Label8 from '../portfolio/Fox/Zin.png';



    function Klondike() {
        return (
           <>
           <div className="f_title">
                <h1>| Fox Burrow Winery |</h1>
           </div>
           <div className="f_text">
               <p>
               The Fox Burrow Winery logo combines elegance and creativity, featuring a stylized fox silhouette seamlessly integrated into a wine glass. The fluid lines forming the fox mimic wine being poured, symbolizing the blend of nature and craftsmanship behind the brand. The black-and-white color scheme ensures versatility across various platforms while maintaining a sophisticated aesthetic. This design reflects the winerys artisanal approach and attention to detail.
               </p>
           </div>
           <div className="f_container">
               <img src={Fox} alt="Fox Burrow Winery" className="fox" />
           </div>
           <div className="f_container2">
               <img src={Label1} alt="Cherry Riesling" className="cr" />
               <img src={Label2} alt="Cherry" className="cherry" />
               <img src={Label3} alt="Cherry Peach" className="cp" />
               <img src={Label4} alt="Raz Peach" className="rp" />
               <img src={Label5} alt="Cabernet" className="cab" />
               <img src={Label6} alt="Cherry Merlot" className="cm" />
               <img src={Label7} alt="Riesling" className="ries" />
               <img src={Label8} alt="Zinfandel" className="zin" />
           </div>
           </>
        )
        
       }


export default Klondike
