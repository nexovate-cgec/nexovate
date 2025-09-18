import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; 
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
import member17 from "../assets/member/17.jpg";
import member18 from "../assets/member/18.jpg";
import member19 from "../assets/member/19.jpg";

const team = [
  {
    name: "Arya Ghosh",
    designation: "Team Lead",
    role: "Research, Content",
    year: "3rd",
    dept: "ECE",
    image: member1,
    email: "ghosharya28@gmail.com",
    insta:"https://www.instagram.com/mytharya/",
    linkedin: "https://www.linkedin.com/in/arya-ghosh",
  },
  {
    name: "Adripta Ghosh",
    designation: "Team Management Head",
    role: "Skill development",
    year: "3rd",
    dept: "ECE",
    image: member2,
    email: "adriptaghosh122@gmail.com",
    insta:"https://www.instagram.com/adripta.ghosh/",
    linkedin: "https://www.linkedin.com/in/adripta-ghosh",
  },
  {
    name: "Satyajit Roy",
    designation: "Tech Head",
    role: "Graphics, Marketing promotions",
    year: "2nd",
    dept: "CSE",
    image: member3,
    email: "satyajit41cse@gmail.com",
    insta:"https://www.instagram.com/satyajitan21.official/",
    linkedin: "https://www.linkedin.com/in/satyajit--roy",
  },
  {
    name: "Ayan Roy",
    designation: "Social Media Coordinator",
    role: "Graphics, Social media handling",
    year: "2nd",
    dept: "CSE",
    image: member4,
    email: "ayan76cse@gmail.com",
    insta:"https://www.instagram.com/_____ayan__roy____/",
    linkedin: "https://www.linkedin.com/in/ayan-roy-0853b831b/",
  },
  {
    name: "Debojit Sarkar",
    designation: "Graphics Head",
    role: "Graphics, Video Editing",
    year: "2nd",
    dept: "CSE",
    image: member5,
    email: "debojit64cse@gmail.com",
    insta:"https://www.instagram.com/__dev432__/",
    linkedin: "https://www.linkedin.com/in/debojit-sarkar",
  },
  {
    name: "Adityava Gangopadhyay",
    designation: "Research & Event Coordinator",
    role: "Research, Content, Event Coordination",
    year: "2nd",
    dept: "CSE",
    image: member7,
    email: "adityava49cse@gmail.com",
    insta:"https://www.instagram.com/ganguly_71/",
    linkedin: "https://www.linkedin.com/in/adityava-gangopadhyay",
  },
  {
    name: "Anushka Roy",
    designation: "Event Coordinator",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member8,
    email: "anushkaaroy34@gmail.com",
    insta:"https://www.instagram.com/_anushh.kaaa/",
    linkedin: "https://linkedin.com/in/anushka-roy34",
  },
  {
    name: "Sk Sahil Akhtar",
    designation: "Marketing & Research",
    role: "Research, Marketing promotions",
    year: "2nd",
    dept: "ECE",
    image: member9,
    email: "sksahil38ece@gmail.com",
    insta:"https://www.instagram.com/sksahilakhtar1/",
    linkedin: "https://www.linkedin.com/in/s-k-sahil-akhtar-69528724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Sumouli Banerjee",
    designation: "Content Creator",
    role: "Graphics and Content",
    year: "2nd",
    dept: "ECE",
    image: member10,
    email: "sumouli05ece@gmail.com",
    insta:"https://www.instagram.com/Sumouli_07/",
    linkedin: "https://www.linkedin.com/in/sumouli-banerjee",
  },
  {
    name: "Trishan Banik",
    designation: "Marketing & Content",
    role: " Marketing promotions, Content",
    year: "2nd",
    dept: "ECE",
    image: member11,
    email: "trishanbanik691@gmail.com",
    insta:"https://www.instagram.com/trishan.banik/",
    linkedin: "https://www.linkedin.com/in/trishan-banik-84a685303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Pranay Hazra",
    designation: "Media & Research",
    role: "Graphics, Video Editing, Research",
    year: "2nd",
    dept: "CE",
    image: member12,
    email: "hazrapranaycgec2024@gmail.com",
    insta:"https://www.instagram.com/_pranayyy_.0/",
    linkedin: "https://www.linkedin.com/in/pranay-hazra-308913333",
  },
  {
    name: "Chiradeep Mukherjee",
    designation: "Social Media & Marketing",
    role: "Social Media handling",
    year: "2nd",
    dept: "ECE",
    image: member13,
    email: "chiradeep88ece@gmail.com",
    insta:"https://www.instagram.com/_carpediem_here_/",
    linkedin: "https://www.linkedin.com/in/chiradeep-mukherjee",
  },
  {
    name: "Anupam Dutta",
    designation: "Event Coordinator",
    role: "Skill development, Event Coordination",
    year: "3rd",
    dept: "ECE",
    image: member14,
    email: "ad4887269@gmail.com",
    insta:"https://www.instagram.com/anupam_dutta275/",
    linkedin: "https://www.linkedin.com/in/anupam-dutta-508ba6325",
  },
  {
    name: "Swastik Bal",
    designation: "Team Management & Skill development",
    role: "",
    year: "3rd",
    dept: "ECE",
    image: member15,
    email: "sumitaparuanokia2@gmail.com",
    insta:"https://www.instagram.com/sbstikbl/",
    linkedin: "https://www.linkedin.com/in/swastik-bal-32981632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Md Ayub",
    designation: "Graphics & Social Media",
    role: "Graphics, Social Media handling",
    year: "2nd",
    dept: "EE",
    image: member16,
    email: "mdayub742136@gmail.com",
    insta:"https://www.instagram.com/md_ayub_70/",
    linkedin: "https://www.linkedin.com/in/md-ayub-26617434a",
  },
  {
    name: "Rishav Prasad ",
    designation: "Content &  Media",
    
    role: "marketing, media and outreach wing",
    year: "2nd",
    dept: "CSE",
    image: member17,
    email: "mdayub742136@gmail.com",
    insta:"https://www.instagram.com/____.rishav/",
    linkedin: "https://www.linkedin.com/in/rishav-prasad-",
  },
  {
    name: "Arayan Prasad",
    designation: "Content Writer  ",
    role: "Content Writer ",
    year: "2nd",
    dept: "ME",
    image: member18,
    email: "aryanprasad2406@gmail.com",
    insta:"https://www.instagram.com/tecboy_0604/",
    linkedin: "https://www.linkedin.com/in/arayan-prasad-1bba73237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Aditya Dey ",
    designation: "Graphics ",
    
    role: "Graphics Wing, Video Editing ",
    year: "2nd",
    dept: "ME",
    image: member19,
    email: "mdayub742136@gmail.com",
    insta:"https://www.instagram.com/Adityax141/",
    linkedin: "https://www.linkedin.com/in/aditya-dey7",
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
              className="team-card text-center bg-white p-4 rounded-4 shadow-sm d-flex flex-column align-items-center justify-content-between h-100 transition-card"
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
                  className="contact-icon linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon instagram"
                >
                  <FaInstagram />
                </a>
                <a href={`mailto:${member.email}`} className="contact-icon email">
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
