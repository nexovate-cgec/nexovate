



import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Team.css";

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

// Example team data (with designation added)
const team = [
  {
    name: "Arya Ghosh",
    designation: "Team Lead",
    role: "Research, Content",
    year: "3rd",
    dept: "ECE",
    image: member1,
    email: "arya@gmail.com",
    linkedin: "https://linkedin.com/in/arya",
  },
  {
    name: "Adripta Ghosh",
    designation: "Team Management Head",
    role: "Skill development",
    year: "3rd",
    dept: "ECE",
    image: member2,
    email: "adripta@gmail.com",
    linkedin: "https://linkedin.com/in/adripta",
  },
  {
    name: "Satyajit Roy",
    designation: "Tech Coordinator",
    role: "Graphics, Marketing promotions",
    year: "2nd",
    dept: "CSE",
    image: member3,
    email: "satyajit@gmail.com",
    linkedin: "https://linkedin.com/in/satyajit",
  },
  {
    name: "Ayan Roy",
    designation: "Social Media Coordinator",
    role: "Graphics, Social media handling",
    year: "2nd",
    dept: "CSE",
    image: member4,
    email: "ayan@gmail.com",
    linkedin: "https://linkedin.com/in/ayan",
  },
  {
    name: "Debojit Sarkar",
    designation: "Event & Media Coordinator",
    role: "Graphics, Video Editing, Event Coordination, Research",
    year: "2nd",
    dept: "CSE",
    image: member5,
    email: "debojit@gmail.com",
    linkedin: "https://linkedin.com/in/debojit",
  },
  {
    name: "Yasashree Paul",
    designation: "Content & Media Coordinator",
    role: "Graphics, Video Editing, Research, Content",
    year: "2nd",
    dept: "CE",
    image: member6,
    email: "yasashree@gmail.com",
    linkedin: "https://linkedin.com/in/yasashree",
  },
  {
    name: "Adityava Gangopadhyay",
    designation: "Research & Event Coordinator",
    role: "Research, Content, Event Coordination",
    year: "2nd",
    dept: "CSE",
    image: member7,
    email: "adityava@gmail.com",
    linkedin: "https://linkedin.com/in/adityava",
  },
  {
    name: "Anushka Roy",
    designation: "Event Coordinator",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member8,
    email: "anushka@gmail.com",
    linkedin: "https://linkedin.com/in/anushka",
  },
  {
    name: "Sk Sahil Akhtar",
    designation: "Marketing & Research",
    role: "Graphics, Research, Marketing promotions",
    year: "2nd",
    dept: "ECE",
    image: member9,
    email: "sahil@gmail.com",
    linkedin: "https://linkedin.com/in/sahil",
  },
  {
    name: "Sumouli Banerjee",
    designation: "Content Creator",
    role: "Graphics and Content",
    year: "2nd",
    dept: "ECE",
    image: member10,
    email: "sumouli@gmail.com",
    linkedin: "https://linkedin.com/in/sumouli",
  },
  {
    name: "Trishan Banik",
    designation: "Marketing & Content",
    role: "Research, Marketing promotions, Content",
    year: "2nd",
    dept: "ECE",
    image: member11,
    email: "trishan@gmail.com",
    linkedin: "https://linkedin.com/in/trishan",
  },
  {
    name: "Pranay Hazra",
    designation: "Media & Research",
    role: "Graphics, Video Editing, Research",
    year: "2nd",
    dept: "CE",
    image: member12,
    email: "pranay@gmail.com",
    linkedin: "https://linkedin.com/in/pranay",
  },
  {
    name: "Chiradeep Mukherjee",
    designation: "Social Media & Marketing",
    role: "Social Media handling and marketing promotions",
    year: "2nd",
    dept: "ECE",
    image: member13,
    email: "chiradeep@gmail.com",
    linkedin: "https://linkedin.com/in/chiradeep",
  },
  {
    name: "Anupam Dutta",
    designation: "Event Coordinator",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member14,
    email: "anupam@gmail.com",
    linkedin: "https://linkedin.com/in/anupam",
  },
  {
    name: "Swastik Bal",
    designation: "Team Management & Skill development",
    role: "",
    year: "3rd",
    dept: "ECE",
    image: member15,
    email: "swastik@gmail.com",
    linkedin: "https://linkedin.com/in/swastik",
  },
  {
    name: "Md Ayub",
    designation: "Graphics & Social Media",
    role: "Graphics, Social Media handling",
    year: "2nd",
    dept: "EE",
    image: member16,
    email: "ayub@gmail.com",
    linkedin: "https://linkedin.com/in/ayub",
  },
];


const Team = () => (
  <section id="team" className="py-5 bg-light">
    <Container>
      <h2 className="text-center fw-bold mb-5">
        Meet Our <span className="text-warning">Team</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div
              className="team-card text-center bg-white p-4 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-between h-100"
            >
              <div className="team-img-wrapper mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle team-img"
                />
              </div>
              <h5 className="fw-bold mb-1">{member.name}</h5>
              <p className="text-warning fw-semibold mb-1">{member.designation}</p>
              <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                {member.role}
              </p>
              <small className="fst-italic text-muted mb-3">
                {member.year} year, {member.dept} Dept, CGEC
              </small>

              <div className="d-flex justify-content-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                >
                  <FaLinkedin />
                </a>
                <a href={`mailto:${member.email}`} className="contact-icon">
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

export default Team;
