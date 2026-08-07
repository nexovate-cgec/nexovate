import React, { useState, useEffect } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaLinkedin, FaEnvelope, FaInstagram, FaFilePdf, FaPlus, FaTrash, FaEdit } from "react-icons/fa"; 
import { useTheme } from "../contexts/ThemeContext";
import { supabase } from "../supabase"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Team.css";

const Team = () => {
  const { isDark } = useTheme();
  const [teamMembers, setTeamMembers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editMemberId, setEditMemberId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    role: "",
    year: "",
    dept: "",
    image: "",
    linkedin: "",
    insta: "",
    email: "",
    resume: ""
  });

  const sectionBg = isDark ? "var(--dark-bg, #121212)" : "white";
  const cardBg = isDark ? "var(--dark-card-bg, #1a1a1a)" : "white";
  const textColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const secondaryTextColor = isDark ? "var(--light-text, #ffffff)" : "#2c3e50";
  const goldenColor = "rgb(189, 159, 103)";

  const iconStyle = {
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
  };

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    const { data, error } = await supabase.from("team").select("*").order("id", { ascending: true });
    if (error) console.error("Error fetching team data:", error);
    else setTeamMembers(data);
  };

  const handleOpenModal = (member = null) => {
    if (member) {
      setEditMemberId(member.id);
      setFormData(member);
    } else {
      setEditMemberId(null);
      setFormData({
        name: "", designation: "", role: "", year: "", dept: "",
        image: "", linkedin: "", insta: "", email: "", resume: ""
      });
    }
    setShowModal(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (editMemberId) {
      const { error } = await supabase.from("team").update(formData).eq("id", editMemberId);
      if (error) alert("Error updating member");
    } else {
      const { error } = await supabase.from("team").insert([formData]);
      if (error) alert("Error adding member");
    }
    setShowModal(false);
    fetchTeamData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      const { error } = await supabase.from("team").delete().eq("id", id);
      if (error) alert("Error deleting member");
      else fetchTeamData();
    }
  };

  return (
    <section id="team" className="py-5" style={{ backgroundColor: sectionBg, color: textColor }}>
      <Container>
<div className="position-relative mb-5 text-center">
  <h2 className="fw-bold m-0" style={{ color: goldenColor }}>
    Meet Our <span style={{ color: textColor }}>Team</span>
  </h2>
  
  {isAdmin && (
    <Button 
      variant="warning" 
      onClick={() => handleOpenModal()} 
      className="fw-bold d-flex align-items-center gap-2 position-absolute end-0 top-50 translate-middle-y"
    >
      <FaPlus /> Add Member
    </Button>
  )}
</div>

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
          style={{
            "--swiper-pagination-color": goldenColor,
            "--swiper-navigation-color": goldenColor
          }}
        >
          {teamMembers.map((member) => {
            const hasSocialLinks = member.linkedin || member.insta || member.email;

            return (
              <SwiperSlide key={member.id} className="h-auto">
                <div
                  className="team-card text-center p-4 rounded-4 shadow-sm d-flex flex-column h-100 transition-card position-relative"
                  style={{
                    backgroundColor: cardBg,
                    color: textColor,
                    border: `2px solid ${goldenColor}`,
                    borderRadius: "15px"
                  }}
                >
                  {isAdmin && (
                    <div className="position-absolute top-0 end-0 p-2 d-flex gap-2" style={{ zIndex: 10 }}>
                      <Button size="sm" variant="info" onClick={() => handleOpenModal(member)}>
                        <FaEdit />
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(member.id)}>
                        <FaTrash />
                      </Button>
                    </div>
                  )}

                  <div className="team-img-wrapper mb-3">
                    <img
                      src={member.image || "https://via.placeholder.com/120"}
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

                  <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-1" style={{ color: textColor }}>{member.name}</h5>
                      <p className="fw-semibold mb-1" style={{ color: goldenColor, fontSize: "0.95rem" }}>
                        {member.designation}
                      </p>
                      {member.role && (
                        <p className="mb-2" style={{ fontSize: "0.9rem", color: secondaryTextColor, opacity: "0.8" }}>
                          {member.role}
                        </p>
                      )}
                      {(member.year || member.dept) && (
                        <small className="fst-italic d-block mb-3" style={{ color: secondaryTextColor, opacity: "0.7" }}>
                          {member.year ? `${member.year} year, ` : ""}{member.dept ? `${member.dept} Dept, ` : ""}CGEC
                        </small>
                      )}
                    </div>

                    <div className="mt-auto">
                      {hasSocialLinks && (
                        <div className="d-flex justify-content-center gap-3 mb-3">
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                              <FaLinkedin />
                            </a>
                          )}
                          {member.insta && (
                            <a href={member.insta} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                              <FaInstagram />
                            </a>
                          )}
                          {member.email && (
                            <a href={`mailto:${member.email}`} style={iconStyle}>
                              <FaEnvelope />
                            </a>
                          )}
                        </div>
                      )}

                      {member.resume && (
                        <a
                          href={member.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn w-100 d-flex align-items-center justify-content-center"
                          style={{
                            border: `2px solid ${goldenColor}`,
                            color: goldenColor,
                            borderRadius: '25px',
                            padding: '8px 16px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            textDecoration: 'none'
                          }}
                        >
                          <FaFilePdf className="me-2" /> View Resume
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editMemberId ? "Edit Member" : "Add Member"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSave}>
          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" value={formData.designation} onChange={(e) => setFormData({...formData, designation: e.target.value})} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Year (e.g. 3rd)</Form.Label>
              <Form.Control type="text" value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Department</Form.Label>
              <Form.Control type="text" value={formData.dept} onChange={(e) => setFormData({...formData, dept: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>LinkedIn URL</Form.Label>
              <Form.Control type="text" value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Instagram URL</Form.Label>
              <Form.Control type="text" value={formData.insta} onChange={(e) => setFormData({...formData, insta: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Resume Link (PDF)</Form.Label>
              <Form.Control type="text" value={formData.resume} onChange={(e) => setFormData({...formData, resume: e.target.value})} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="warning" type="submit">Save Changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </section>
  );
};

export default Team;