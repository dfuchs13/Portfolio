import React from 'react'
import './Biology.css'
import Page1 from '../portfolio/Biology/page1.png';
import Page2 from '../portfolio/Biology/page2.png';
import Acute from '../portfolio/Biology/Acute.png';
import Chronic from '../portfolio/Biology/Chronic.png';
import Article1 from '../portfolio/Biology/Article1.png';
import Article2 from '../portfolio/Biology/Article2.png';


function Logo() {
  return (
   <>
       <div className="b_title">
         <h1>| Frontiers in Immunology |</h1>
       </div>
       <div className="b_text">
           <p>
            In collaboration with researchers, I contributed to an article published in Frontiers in Immunology that explores the role of vitamins A and D in graft-versus-host disease (GVHD). Not only did I assist in writing the article, but I also designed the accompanying graphic figures to effectively illustrate complex data. This work was later highlighted in my university's newsletter, showcasing the impact of our research on the field of immunology and my ability to communicate scientific findings through visual design.
            Article:
            https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2018.02853/full           </p>
       </div>
       <div className="b_container">
           <img src={Page1} alt="Page1 Acute" className="page1" />
           <img src={Page2} alt=" Page2 Chronic" className="page2" />
           <img src={Acute} alt="Acute" className="acute" />
           <img src={Chronic} alt="Chronic" className="chronic" />
           <img src={Article1} alt="VH article page 1" className="article1" />
           <img src={Article2} alt="VH chronic page 2" className="article2" />
       </div>
       </>
  )
}

export default Logo
