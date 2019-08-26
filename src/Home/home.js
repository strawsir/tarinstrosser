import React from '../../node_modules/react'
import './home.css'
import TSLogo from '../Assets/tslogo';
import Planet from '../Assets/shipandplanet';
import Ship from '../Assets/planetandship';



function Home() {
  
  return (
    <div className="Home">
      <div className="backgroundcontainer">
        
<div className="planet">

      <Planet/>
      <Ship/>
</div>
      <div className="arrows" onClick={()=>{
        console.log("I'm Scrolling")
      }}>
      <svg id="a2ea2a1f-6078-4f89-827f-e44c020d51e9" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.15 194.65">
  <title>arrows</title>
  <polyline id='singlearrow' points="224.01 21.14 122.58 97.51 21.14 21.14" fill="none" stroke="#372744" strokeLinecap="round" strokeLinejoin="round" strokeWidth="42.28"/>
  <polyline id='singlearrow' points="224.01 97.14 122.58 173.51 21.14 97.14" fill="none" stroke="#372744" strokeLinecap="round" strokeLinejoin="round" strokeWidth="42.28"/>
</svg>

      </div>
      

      </div>
        
        
      
    </div>
  );
}

export default Home;
