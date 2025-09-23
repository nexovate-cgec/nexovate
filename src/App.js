import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails"; // নতুন কম্পোনেন্ট
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* হোম পেজ রাউট */}
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Initiatives />
            <Events />
            <Gallery />
            <Blog/>
            <Team />
            <Testimonials />
            <JoinUs />
            <Contact />
            <Footer />
          </>
        } />
        
        {/* ইভেন্ট ডিটেইলস পেজ রাউট */}
        <Route path="/events/:eventId" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;