import "./App.scss";
import React, { Component } from "react";

import ParticlesComp from "./Particles/Particles.jsx";
import Friend from "./Components/Friend/Friend.js";
import Welcome from "./Components/Welcome/Welcome.js";
import Footer from "./Components/Footer/Footer.js";
import Contact from "./Components/Contact/Contact.js";
import About from "./Components/About/About.js";
import Projects from "./Components/Projects/Projects";
import "animate.css";

class App extends Component {
  render() {

    return (
      <div className="App">
        
      <ParticlesComp/>
      
        <section id="top">
          <Welcome />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <footer>
            <Footer />
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
