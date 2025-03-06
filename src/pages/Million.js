import React from 'react'
import './Million.css';
import MVideo from '../portfolio/Million/Million2.mov';



function Million() {
  return (
    <><div className="m_title">
          <h1>| A Million Dreams |</h1>
      </div>
      <div className="m_text">
            <p>
            During the height of COVID-19, Viterbo Universitys musical theater students came together virtually to perform A Million Dreams. I edited this video to bring their voices and performances to life, seamlessly weaving together individual recordings into a cohesive and moving final piece. This project not only highlighted the resilience and creativity of the performers but also captured the spirit of connection and hope during a challenging time.
            </p>
        </div>
            <div class="m-container">
                <video className="style-video" controls>
                    <source src={MVideo} type="video/mov" />
                </video>
          </div></>
  )
}

export default Million