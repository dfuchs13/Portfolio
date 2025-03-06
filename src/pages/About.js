import React from 'react'
import './About.css'
import Self from '../assets/Profile.png'

function About() {
    return (
        <div class="about">
            <div class="about-title">
                <h1>| About Me |</h1>
            </div>
            <div class="about-content">
                 <div class="self">
                    <img src={Self} alt="portrait" className="self"/>
                </div>
                <div class="about-text">
                    <p> 
                        Hi, I am Derek, a graphic designer with a strong passion for illustration, logo design, and visual storytelling. I have my Bachelor of Science Degree in Graphic Design and Digital Media with an emphasis in Film. I specialize in creating compelling brand identities and unique illustrations that bring ideas to life. In addition to design, I also have experience in videography and video editing, crafting engaging content for a variety of projects.
                        Recently, I earned my professional certification in front-end development, expanding my skill set to build interactive and visually stunning web experiences. I am excited to merge design and development to create impactful digital content!
                    </p>
               
                </div>
            </div>
        </div>
    );
};

export default About