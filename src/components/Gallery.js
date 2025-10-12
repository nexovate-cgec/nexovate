import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "yet-another-react-lightbox/styles.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Gallery.css";
import { getFeaturedEvents, getAllEvents } from "../data/gallery";

const Gallery = () => {
  const { isDark } = useTheme();
  const featuredEvent = getFeaturedEvents(1)[0]; // Show only 1 featured event
  const allEvents = getAllEvents();

  return (
    <section id="gallery" className="py-5" style={{
      backgroundColor: "var(--section-bg)",
      color: "var(--text-color)"
    }}>
      <Container>
        {/* Header Section - Middle Aligned */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: "var(--text-color)" }}>
            Our <span style={{ color: "var(--primary-color)" }}>Event Gallery</span>
          </h2>
          <p className="lead mb-4" style={{ color: "var(--secondary-color)" }}>
            Explore our event memories and moments
          </p>
          
          {/* View All Button - Also centered */}
          <Link to="/gallery" className="text-decoration-none">
            <Button
              variant={isDark ? "outline-light" : "outline-primary"}
              size="sm"
              className="rounded-pill px-4"
            >
              View All Gallery ({allEvents.length} Events)
            </Button>
          </Link>
        </div>

        {/* Single Event Swiper */}
        {featuredEvent && (
          <div>
            <h3 className="text-center fw-bold mb-4 gallery-heading">
              <span className="text-warning">
                <u>{featuredEvent.name}</u>
              </span>
              <small className="text-muted ms-2" style={{ fontSize: "0.8rem" }}>
                ({featuredEvent.totalImages} photos)
              </small>
            </h3>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              spaceBetween={20}
              breakpoints={{
                320: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 },
              }}
            >
              {featuredEvent.data.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="gallery-card">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="gallery-img"
                    />
                    <p className="caption">{image.caption}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;