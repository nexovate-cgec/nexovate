// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Initiatives from "./components/Initiatives";
import Events from "./components/Events";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

// Pages
import AllEvents from "./pages/AllEvents";
import EventDetail from "./pages/EventDetail";
import AllBlogs from "./pages/AllBlogs";
import BlogDetails from "./pages/BlogDetails";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              {/* Home Page Route */}
              <Route path="/" element={
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
              } />
              
              {/* Events Routes */}
              <Route path="/events" element={<AllEvents />} />
              <Route path="/events/:id" element={<EventDetail />} />
              
              {/* Blog Routes */}
              <Route path="/blogs" element={<AllBlogs />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              
              {/* Gallery Route */}
              <Route path="/gallery" element={<GalleryPage />} />
              
              {/* Join Us Route */}
              <Route path="/join" element={<JoinUs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;