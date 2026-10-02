import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Sponsors.css";
import { useNavigate } from "react-router-dom";
const sponsorshipTiers = [
  {
    id: 1,
    title: "EVENT PARTNER",
    amount: "₹10,000+",
    icon: "🏆",
    benefits: [
      "Prominent sponsor recognition",
      "Logo on selected event branding",
      "Social-media acknowledgement",
      "Formal acknowledgement during the event",
      "Post-event appreciation",
    ],
    isCustom: false,
  },
  {
    id: 2,
    title: "ASSOCIATE PARTNER",
    amount: "₹5,000",
    icon: "⭐",
    benefits: [
      "Logo on selected event materials",
      "Social-media acknowledgement",
      "Event acknowledgement",
      "Post-event recognition",
    ],
    isCustom: false,
  },
  {
    id: 3,
    title: "SUPPORTING PARTNER",
    amount: "₹2,500",
    icon: "🤝",
    benefits: [
      "Logo placement on selected promotional material",
      "Event acknowledgement",
      "Post-event recognition",
    ],
    isCustom: false,
  },
  {
    id: 4,
    title: "IN-KIND PARTNER",
    amount: "Services",
    icon: "🎁",
    description:
      "Support can also be provided through goods or services such as:",
    tags: [
      { name: "Food", icon: "🍽️" },
      { name: "Travel", icon: "✈️" },
      { name: "Accommodation", icon: "🏨" },
      { name: "Printing", icon: "🖨️️" },
      { name: "Merchandise", icon: "👕" },
      { name: "Event Materials", icon: "📦" },
    ],
    note: "Recognition will be provided according to the nature and value of the contribution.",
    isCustom: true,
  },
];

const Sponsors = () => {
  const navigate = useNavigate();

  const handleCollabClick = (tierTitle) => {
    // নতুন পেজে রিডাইরেক্ট করবে এবং Tier details পাঠাবে
    navigate("/sponsorship-collab", { state: { tierTitle } });
  };

  return (
    <section id="sponsors" className="sponsors-section py-5">
      <Container>
        {/* Golden Banner Header */}
        <div className="d-flex justify-content-center mb-5">
          <div className="sponsorship-banner-title golden-border">
            <span className="sparkle-icon">✨</span>
            <h2 className="mb-0 fw-bold golden-text">SPONSORSHIP OPPORTUNITIES</h2>
            <span className="sparkle-icon">✨</span>
          </div>
        </div>

        {/* Cards Row */}
        <Row className="g-4 justify-content-center">
          {sponsorshipTiers.map((tier) => (
            <Col key={tier.id} xs={12} sm={6} lg={3}>
              <Card className="h-100 sponsor-golden-card d-flex flex-column golden-border">
                {/* Header with Icon Circle */}
                <div className="card-header-wrapper">
                  <div className="tier-icon-circle golden-border">{tier.icon}</div>
                  <div className="header-text-container">
                    <h5 className="tier-title golden-text">{tier.title}</h5>
                    <div className="price-pill">{tier.amount}</div>
                  </div>
                </div>

                {/* Body Content */}
                <Card.Body className="card-body-content d-flex flex-column justify-content-between p-3">
                  <div>
                    {!tier.isCustom ? (
                      <>
                        <p className="benefits-heading golden-text">Potential benefits:</p>
                        <ul className="list-unstyled benefits-list">
                          {tier.benefits.map((benefit, index) => (
                            <li key={index} className="d-flex align-items-start mb-2">
                              <span className="check-icon">✔</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="in-kind-desc">{tier.description}</p>
                        <div className="d-flex flex-wrap gap-1 mb-3">
                          {tier.tags.map((tag, idx) => (
                            <span key={idx} className="in-kind-pill golden-border">
                              {tag.icon} {tag.name}
                            </span>
                          ))}
                        </div>
                        <p className="in-kind-note">{tier.note}</p>
                      </>
                    )}
                  </div>

                  {/* Collab Button */}
                  <div className="mt-3">
                    <Button
                      className="collab-btn w-100 fw-bold golden-border"
                      onClick={() => handleCollabClick(tier.title)}
                    >
                      Click to Collab 🤝
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Sponsors;