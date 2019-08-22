import React from 'react';

import NavBar from './Navigation/navbar';
// import Home from './Home/home';
import './App.css'
import Home from './Home/home';
// import Home from './home/home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio.js'
import Contact from './Contact/Contact';
import PageBottom from './Footer/Footer';
// import Drips from './Accents/drips';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <Home/>

      <About/>
      <Portfolio/>
      <Contact/>
      <PageBottom/>
    </div>
  );
}

export default App;
