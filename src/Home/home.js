import React from '../../node_modules/react'
import './home.css'
import Drips from '../Accents/drips';
import TSLogo from '../Assets/tslogo';



function Home() {
  scrollAbout=function (){
    console.log("I'm Scrolling!")
  }
  return (
    <div className="Home">
      <div className="backgroundcontainer">
        
<div className="logo">

      <TSLogo/>
</div>
      <div className="arrows" onClick={this.scrollAbout()}>
      <svg id="a2ea2a1f-6078-4f89-827f-e44c020d51e9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.15 194.65">
  <title>arrows</title>
  <polyline id='singlearrow' points="224.01 21.14 122.58 97.51 21.14 21.14" fill="none" stroke="#372744" stroke-linecap="round" stroke-linejoin="round" stroke-width="42.28"/>
  <polyline id='singlearrow' points="224.01 97.14 122.58 173.51 21.14 97.14" fill="none" stroke="#372744" stroke-linecap="round" stroke-linejoin="round" stroke-width="42.28"/>
</svg>

      </div>
      

      </div>
        <Drips/>
        
      
    </div>
  );
}

export default Home;
