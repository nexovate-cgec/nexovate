
import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Team.css';

import member1 from "../assets/member/1.jpg";
import member2 from "../assets/member/2.jpg";
import member3 from "../assets/member/3.jpg";
import member4 from "../assets/member/4.jpeg";
import member5 from "../assets/member/5.jpg";
import member6 from "../assets/member/6.png";
import member7 from "../assets/member/7.jpg";
import member8 from "../assets/member/8.jpg";
import member9 from "../assets/member/9.jpg";
import member10 from "../assets/member/10.jpg";
import member11 from "../assets/member/11.jpg";
import member12 from "../assets/member/12.webp";
import member13 from "../assets/member/13.jpg";
import member14 from "../assets/member/14.jpg";
import member15 from "../assets/member/15.jpg";
import member16 from "../assets/member/16.jpg";

const team = [
  {
    name: "Arya Ghosh",
    role: "Team Lead, Research, Content ",
    year: "3rd",
    dept: "ECE",
    image: member1,
  },
  {
    name: "Adripta Ghosh",
    role: " Team Management, Skill development",
    year: "3rd",
    dept: "ECE",
    image: member2,
  },
  {
    name: "Satyajit Roy",
    role: "Graphics, Marketing promotions, Tech Coordinator",
    year: "2nd",
    dept: "CSE",
    image: member3,
  },
  {
    name: "Ayan Roy",
    role: " Graphics, Social media handling",
    year: "2nd",
    dept: "CSE",
    image: member4,
  },
  {
    name: "Debojit Sarkar",
    role: " Graphics, Video Editing, Event Coordination, Research",
    year: "2nd",
    dept: "CSE",
    image: member5,
  },
  {
    name: "Yasashree Paul",
    role: "Graphics, Video Editing, Research, Content",
    year: "2nd",
    dept: "CE",
    image: member6,
  },
  {
    name: "Adityava Gangopadhyay",
    role: " Research, Content, Event Coordination",
    year: "2nd",
    dept: "CSE",
    image: member7,
  },
  {
    name: "Anushka Roy",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member8,
  },
  {
    name: "Sk Sahil Akhtar ",
    role: "Graphics, Research, Marketing promotions",
    year: "2nd",
    dept: "ECE",
    image: member9,
  },
  {
    name: "Sumouli Banerjee ",
    role: "Graphics and Content",
    year: "2nd",
    dept: "ECE",
    image: member10,
  },
  {
    name: "Trishan Banik ",
    role: "Research, Marketing promotions, Content",
    year: "2nd",
    dept: "ECE",
    image: member11,
  },
  {
    name: "Pranay Hazra ",
    role: "Graphics, Video Editing, Research",
    year: "2nd",
    dept: "CE",
    image: member12,
  },
  {
    name: "Chiradeep Mukherjee ",
    role: "Social Media handling and marketing promotions",
    year: "2nd",
    dept: "ECE",
    image: member13,
  },
  {
    name: "Anupam Dutta",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member14,
  },
  {
    name: "Swastik Bal",
    role: "Team Management, Skill development",
    year: "3rd",
    dept: "ECE",
    image: member15,
  },
  {
    name: "Md Ayub ",
    role: "Graphics, Social Media handling",
    year: "2nd",
    dept: "EE",
    image: member16,
  },
];

const Team = () => (
  <section id="team" className="py-5 bg-light">
      <Container>
      <h2 className="text-center fw-bold mb-4">
        Our <span className="text-warning">Team</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              className="text-center bg-white p-4 rounded-4 shadow-sm h-100 d-flex flex-column align-items-center justify-content-between transition"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 0.5rem 1rem rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 .125rem .25rem rgba(0,0,0,.075)";
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="rounded-circle mb-3"
                style={{
                  height: "140px",
                  width: "140px",
                  objectFit: "cover",
                  border: "4px solid #ffc107",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              />
              <div>
                <h5 className="fw-semibold mb-1">{member.name}</h5>
                <p className="mb-1">
                  <span className="badge text-bg-warning text-dark">
                    {member.role}
                  </span>
                </p>
                <small className="fst-italic text-muted d-block">
                  Hello, I am {member.name}, {member.year} year, {member.dept}{" "}
                  Dept, CGEC
                </small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default Team;
