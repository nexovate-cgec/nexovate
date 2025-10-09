import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails"; 
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
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
            <Footer />
          </>
        } />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
