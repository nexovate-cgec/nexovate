import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; 
import { useTheme } from "../contexts/ThemeContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Team.css";
import { teamData } from "../data/team";

const Team = () => {
  const { isDark } = useTheme();

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";

  return (
    <section 
      id="team" 
      className="py-5"
      style={{
        backgroundColor: sectionBg,
        color: textColor
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5" style={{ color: goldenColor }}>
          Meet Our <span style={{ color: textColor }}>Team</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active-gold'
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          style={{
            "--swiper-pagination-color": goldenColor,
            "--swiper-pagination-bullet-inactive-color": isDark ? "#666" : "#ccc",
            "--swiper-pagination-bullet-inactive-opacity": "0.6",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-color": goldenColor
          }}
        >
          {teamData.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="team-card text-center p-4 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-between h-100 transition-card"
                style={{
                  backgroundColor: cardBg,
                  color: textColor,
                  border: `2px solid ${goldenColor}`,
                  borderRadius: "15px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = isDark 
                    ? "0 10px 25px rgba(0, 0, 0, 0.4)" 
                    : "0 10px 25px rgba(189, 159, 103, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="team-img-wrapper mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-circle team-img"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      border: `3px solid ${goldenColor}`
                    }}
                  />
                </div>
                <h5 className="fw-bold mb-1" style={{ color: textColor }}>
                  {member.name}
                </h5>
                <p 
                  className="fw-semibold mb-1"
                  style={{ 
                    color: goldenColor,
                    fontSize: "0.95rem"
                  }}
                >
                  {member.designation}
                </p>
                <p 
                  className="mb-2" 
                  style={{ 
                    fontSize: "0.9rem",
                    color: secondaryTextColor,
                    opacity: "0.8"
                  }}
                >
                  {member.role}
                </p>
                <small 
                  className="fst-italic mb-3"
                  style={{
                    color: secondaryTextColor,
                    opacity: "0.7"
                  }}
                >
                  {member.year} year, {member.dept} Dept, CGEC
                </small>

                <div className="d-flex justify-content-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                      color: goldenColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      border: `2px solid ${goldenColor}`,
                      textDecoration: "none"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = goldenColor;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                      e.currentTarget.style.color = goldenColor;
                    }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                      color: goldenColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      border: `2px solid ${goldenColor}`,
                      textDecoration: "none"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = goldenColor;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                      e.currentTarget.style.color = goldenColor;
                    }}
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="contact-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: isDark ? "var(--dark-card-bg, #1a1a1a)" : "white",
                      color: goldenColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      border: `2px solid ${goldenColor}`,
                      textDecoration: "none"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = goldenColor;
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
                      e.currentTarget.style.color = goldenColor;
                    }}
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Team;