import './App.css';
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { introdata } from "./content_option";


function App() {
  return (
    <div className="App">
      <header>
        <div className="container header__container">
          <h5>{introdata.title}</h5>
          <h1>
            <Typewriter
              options={{
                strings: [introdata.animated.first],
                autoStart: true,
                loop: true,
                deleteSpeed: 10
              }}
            />
          </h1>
          <h5 className="text-light">Developer</h5>
          <div className="header__socials">
            <a href="https://www.instagram.com/alimertbostan/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/AliMertBOSTAN" target="_blank">
              <FaGithub />
            </a>
          </div>  
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
      <div className="Div1"> 
        <a>Inside the div1</a>
      </div>
      <div className="somethingFunny"> I think i will put there somethingFunny</div>
      <div className="about"> This will be about</div>
      <div className="portfolio"> This div will be portfolio</div>
      <div className="#contact" id='#contact'>End the last one will be contact</div>
    </div>
  );
}

export default App;
