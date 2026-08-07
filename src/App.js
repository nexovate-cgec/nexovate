import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import LoginPage from "./components/LoginPage";
import ComingSoon from "./components/ComingSoon";

import Events from "./components/Events";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";

import AllEvents from "./pages/AllEvents";
import EventDetail from "./pages/EventDetail";
import EventApply from "./pages/EventApply";
import AllBlogs from "./pages/AllBlogs";
import BlogDetails from "./pages/BlogDetails";
import GalleryPage from "./pages/GalleryPage";
import VerifyCertificate from "./pages/VerifyCertificate";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Initiatives />
                    <Events />
                    <Gallery />
                    <Blog />
                    <Team />
                    <Testimonials />
                    <Footer />
                  </>
                }
              />

              <Route path="/events" element={<AllEvents />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/apply/:id" element={<EventApply />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/blogs" element={<AllBlogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="/eureka-2026" element={<ComingSoon />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/join" element={<JoinUs />} />
              <Route
                path="/verify-certificate"
                element={<VerifyCertificate />}
              />
            </Routes>
          </main>

          <FloatingJoinButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;