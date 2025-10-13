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
  const featuredEvent = getFeaturedEvents(1)[0];
  const allEvents = getAllEvents();

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const captionBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "#f8f9fa";
  const captionText = isDark ? "var(--light-text, #ffffff)" : "#333";
  const goldenColor = "rgb(189, 159, 103)";

  return (
    <section id="gallery" className="py-5" style={{
      backgroundColor: sectionBg,
      color: textColor
    }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: goldenColor }}>
            Our <span style={{ color: textColor }}>Event Gallery</span>
          </h2>
          <p className="lead mb-4" style={{ color: textColor, opacity: "0.8" }}>
            Explore our event memories and moments
          </p>
          
          <Link to="/gallery" className="text-decoration-none">
            <Button
              style={{
                backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                borderColor: goldenColor,
                color: goldenColor,
                borderRadius: "25px",
                padding: "8px 20px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              size="sm"
              className="rounded-pill px-4"
              onMouseOver={(e) => {
                e.target.style.backgroundColor = goldenColor;
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                e.target.style.color = goldenColor;
              }}
            >
              View All Gallery ({allEvents.length} Events)
            </Button>
          </Link>
        </div>

        {featuredEvent && (
          <div>
            <h3 className="text-center fw-bold mb-4 gallery-heading" style={{ color: textColor }}>
              <span style={{ color: goldenColor }}>
                <u>{featuredEvent.name}</u>
              </span>
              <small className="ms-2" style={{ 
                fontSize: "0.8rem",
                color: textColor,
                opacity: "0.7"
              }}>
                ({featuredEvent.totalImages} photos)
              </small>
            </h3>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ 
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active-gold'
              }}
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
                  <div 
                    className="gallery-card"
                    style={{
                      backgroundColor: cardBg,
                      border: `2px solid ${goldenColor}`,
                      borderRadius: "15px",
                      overflow: "hidden",
                      textAlign: "center",
                      boxShadow: isDark 
                        ? "0 4px 12px rgba(0, 0, 0, 0.3)" 
                        : "0 4px 12px rgba(189, 159, 103, 0.2)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow = isDark 
                        ? "0 8px 25px rgba(0, 0, 0, 0.4)" 
                        : "0 8px 25px rgba(189, 159, 103, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = isDark 
                        ? "0 4px 12px rgba(0, 0, 0, 0.3)" 
                        : "0 4px 12px rgba(189, 159, 103, 0.2)";
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="gallery-img"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                    <p 
                      className="caption"
                      style={{
                        padding: "12px",
                        fontSize: "0.9rem",
                        color: captionText,
                        fontWeight: "500",
                        backgroundColor: captionBg,
                        margin: "0"
                      }}
                    >
                      {image.caption}
                    </p>
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