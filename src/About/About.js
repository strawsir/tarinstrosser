import React from 'react';
import './About.css'
import Me from '../Assets/me.jpg'
function About() {
  return (
    <div className="aboutcontainer">
    <div className="About">
     <div className="aboutImage"><img src={Me} alt=""/></div>

     <div className="aboutText">
       <div className="aboutme">

      <h1>About Me:</h1>
     Hey there, I'm Tarin! I'm a self-taught web developer, who loves front-end development. When I'm not glued to my computer you can find me out hiking with my dogs or doodling with my sketchbook. I am passionate about graphic design, great food, and wildlife conservation!
       </div>
     <div className="skills">
       <h1>Skills:</h1>
       PhotoShop
       Illustrator
       JavaScript
       React
       Node.js
       GitCommand Line
       
     </div>
     </div>

    </div>
    </div>
  );
}

export default About;
