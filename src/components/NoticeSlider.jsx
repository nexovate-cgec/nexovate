import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NoticeSlider.css";

const notices = [
  {
    title: "🚀 Upcoming Event",
    message: "NEC 2026.",
    linkText: "Register Now",
    linkUrl: "/coming-soon",
  },
];

const NoticeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (notices.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className="notice-slider-wrapper">
      <div className="notice-viewport">
        <div
          className="notice-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {notices.map((notice, i) => (
            <div className="notice-slide" key={i}>
              <div className="notice-card">
                <div className="notice-icon">
                  <FaBullhorn />
                </div>

                <div className="notice-content">
                  <h6>{notice.title}</h6>
                  <p>{notice.message}</p>
                </div>

                <div className="notice-action">
                  <Link to={notice.linkUrl}>{notice.linkText}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default NoticeSlider;