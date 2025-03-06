import React from 'react'
import './Video.css';
import Vid1 from '../portfolio/Video/safe.mp4';
import Vid2 from '../portfolio/Video/commercial.mp4';
import Vid3 from '../portfolio/Video/vid2.mp4';


function Video() {
  return (
    <><div className="v_title">
          <h1>| Videography |</h1>
      </div>
      <div className="v_text">
            <p>
            As part of my undergraduate studies, I created a series of short videos that explore various themes through storytelling, cinematography, and editing techniques. These projects allowed me to develop skills in visual storytelling, production, and post-production, showcasing my ability to communicate ideas creatively. Each video reflects my passion for crafting engaging narratives and experimenting with different styles and formats.          
            </p>
        </div>
            <div class="v-container">
                <video className="styled-v" controls>
                    <source src={Vid1} type="video/mp4" />
                </video>
                <video className="styled-v" controls>
                    <source src={Vid2} type="video/mp4" />
                </video>
                <video className="styled-v" controls>
                    <source src={Vid3} type="video/mp4" />
                </video>
          </div></>
  )
}

export default Video