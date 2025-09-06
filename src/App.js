import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Events from "./components/Events";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Initiatives />
      <Events />
      <Team />
      <Testimonials />
      <Gallery />
      <JoinUs />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
