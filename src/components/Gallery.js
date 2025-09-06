import { Container } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./Gallery.css";
import "react-image-lightbox/style.css";

import gallery1 from "../assets/Events/eureka25/1.jpeg";
import gallery2 from "../assets/Events/eureka25/2.jpeg";
import gallery3 from "../assets/Events/eureka25/3.jpeg";
import gallery4 from "../assets/Events/eureka25/4.jpeg";
import gallery5 from "../assets/Events/eureka25/15.jpeg";
import gallery6 from "../assets/Events/eureka25/6.jpeg";
import gallery7 from "../assets/Events/eureka25/7.jpeg";
import gallery8 from "../assets/Events/eureka25/8.jpeg";
import gallery9 from "../assets/Events/eureka25/9.jpeg";
import gallery10 from "../assets/Events/eureka25/10.jpeg";
import gallery11 from "../assets/Events/eureka25/11.jpeg";
import gallery12 from "../assets/Events/eureka25/12.jpeg";
import gallery13 from "../assets/Events/eureka25/13.jpeg";
import gallery14 from "../assets/Events/eureka25/14.jpeg";
// import gallery15 from "../assets/Events/eureka25/5.jpeg";
import gallery16 from "../assets/Events/eureka25/16.jpeg";
import gallery17 from "../assets/Events/eureka25/17.jpeg";
import gallery18 from "../assets/Events/eureka25/18.jpeg";

const galleryImages = [
  { src: gallery2, caption: "Wining Team" },
  { src: gallery1, caption: "3rd position holder" },
  { src: gallery3, caption: "Prize Distribution" },
  { src: gallery4, caption: "Prize Distribution" },
  { src: gallery5, caption: "Lecture" },
  { src: gallery6, caption: "Lecture" },
  { src: gallery7, caption: "Lecture" },
  { src: gallery11, caption: "Judges" },
  { src: gallery18, caption: "Team 1" },
  { src: gallery17, caption: "Team 2" },
  { src: gallery16, caption: "Team 3" },
  //  { src: gallery15, caption: "Team 4" },
  { src: gallery14, caption: "Team 4" },
  { src: gallery13, caption: "Team 5 " },
  { src: gallery12, caption: "Team 6" },
  { src: gallery10, caption: "Team 7" },
  { src: gallery9, caption: "Team 8" },
  { src: gallery8, caption: "Team 9" },
];

const Gallery = () => (
  <section id="gallery" className="py-5">
    <Container>
      <h2 className="text-center fw-bold mb-5">
        Our <span className="text-primary ">Event gallery</span>
      </h2>
      <h2 className="text-center fw-bold mb-5 gallery-heading">
        <span className="text-warning">
          <u>EUREKA-2K25</u>
        </span>
      </h2>
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
        {galleryImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-card">
              <img
                src={img.src}
                alt={`Event ${index + 1}`}
                className="gallery-img"
              />
              <p className="caption">{img.caption}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default Gallery;
