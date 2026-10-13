import React from "react";
import { Container } from "react-bootstrap";
import "./Sponsors.css";

import Sponser1 from "../assets/images/Group 11 (3).png"
import Sponser2 from "../assets/images/Easyparts (3).png"

const partnersList = [
  {
    id: 1,
    name: "EasyParts",
    logo: Sponser2,
    tier: "Event Partner",
  },
  {
    id: 2,
    name: "Zoctr",
    logo: Sponser1,
    tier: "Associate Partner",
  },
];

const Sponsors = () => {
  const repeatedPartners = [...partnersList, ...partnersList, ...partnersList, ...partnersList];

  return (
    <section id="sponsors" className="sponsors-section py-5">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-center mb-5">
          <div className="sponsorship-banner-title golden-border">
            <span className="sparkle-icon">✨</span>
            <h2 className="mb-0 fw-bold golden-text">OUR VALUED PARTNERS</h2>
            <span className="sparkle-icon">✨</span>
          </div>
        </div>

        <div className="slider-container">
          <div className="slider-track">
            {repeatedPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="slider-item">
                <div className="sponsor-golden-card golden-border text-center p-3 h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="partner-logo-wrapper mb-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo-img"
                    />
                  </div>
                  <h5 className="partner-name golden-text mb-1">{partner.name}</h5>
                  <span className="partner-tier-badge">{partner.tier}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;