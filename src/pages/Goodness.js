import React from 'react'
import './Goodness.css';
import Video1 from '../portfolio/Goodness/Rev1.mp4';
import Video2 from '../portfolio/Goodness/Rev2.mp4';
import Video3 from '../portfolio/Goodness/Rev3.mp4';


function Goodness() {
  return (
    <><div className="g_title">
          <h1>| A Revolution of Goodness |</h1>
      </div>
      <div className="g_text">
            <p>
            As part of my video work, I created a piece for the Franciscan Sisters of Perpetual Adoration’s Revolution of Goodness gathering, an event focused on fostering kindness, justice, and positive change. The convention brings together people committed to making the world better through service, faith, and action. My video highlighted the sisters’ dedication to these values, weaving together interviews, event footage, and inspiring moments to showcase their ongoing mission of spreading goodness.
            </p>
        </div>
            <div class="video-container">
                <video className="styled-video" controls>
                    <source src={Video1} type="video/mp4" />
                </video>
                <video className="styled-video" controls>
                    <source src={Video2} type="video/mp4" />
                </video>
                <video className="styled-video" controls>
                    <source src={Video3} type="video/mp4" />
                </video>
          </div></>
  )
}

export default Goodness