import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';
import { testimonialsData } from '../data/testimonial';

const Testimonials = () => {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";

  return (
    <section 
      id="testimonials" 
      className="py-5"
      style={{
        backgroundColor: sectionBg,
        color: textColor
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: goldenColor }}>
          Hear from <span style={{ color: textColor }}>Our Members</span>
        </h2>

        <Carousel 
          indicators={false} 
          controls={true} 
          interval={6000}  
          fade
          nextIcon={
            <span 
              aria-hidden="true" 
              style={{
                color: goldenColor,
                fontSize: "2rem",
                fontWeight: "bold"
              }}
            >
              ›
            </span>
          }
          prevIcon={
            <span 
              aria-hidden="true" 
              style={{
                color: goldenColor,
                fontSize: "2rem",
                fontWeight: "bold"
              }}
            >
              ‹
            </span>
          }
        >
          {testimonialsData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <div
                  className="rounded-4 shadow p-4 p-md-5 position-relative text-center"
                  style={{
                    maxWidth: "700px",
                    width: "100%",
                    borderTop: `5px solid ${goldenColor}`,
                    backgroundColor: cardBg,
                    color: textColor,
                    border: `2px solid ${goldenColor}`,
                    borderRadius: "15px"
                  }}
                >
                  <div className="mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded-circle shadow"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        border: `3px solid ${goldenColor}`,
                      }}
                    />
                  </div>

                  <p
                    className="fs-5 fst-italic mb-4"
                    style={{ 
                      lineHeight: "1.75",
                      color: textColor,
                      opacity: "0.9"
                    }}
                  >
                    “{item.quote}”
                  </p>

                  <div 
                    className="border-top pt-3"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"
                    }}
                  >
                    <h5 
                      className="fw-semibold mb-0"
                      style={{ color: textColor }}
                    >
                      {item.name}
                    </h5>
                    <small 
                      style={{ 
                        color: secondaryTextColor,
                        opacity: "0.7"
                      }}
                    >
                      {item.position}
                    </small>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;