import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";

const PRIMARY_COLOR = "#215E61";

const GraduateRouteCountdown = () => {
  const targetDate = new Date("2027-12-11T23:59:59");
  const startDate = new Date("2025-12-11T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    let difference = targetDate - now;
    if (difference <= 0) return null;

    let remaining = difference;

    const years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365));
    remaining -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30));
    remaining -= months * (1000 * 60 * 60 * 24 * 30);

    const weeks = Math.floor(remaining / (1000 * 60 * 60 * 24 * 7));
    remaining -= weeks * (1000 * 60 * 60 * 24 * 7);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    remaining -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(remaining / (1000 * 60 * 60));
    remaining -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(remaining / (1000 * 60));
    remaining -= minutes * (1000 * 60);

    const seconds = Math.floor(remaining / 1000);

    return { years, months, weeks, days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const totalDuration = targetDate - startDate;
  const remainingDuration = targetDate - new Date();
  const progress = Math.max(
    0,
    Math.min(100, ((totalDuration - remainingDuration) / totalDuration) * 100)
  );

  // Calculate days spent
  const daysSpent = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f6",
        margin: 0,
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
        <Card className="shadow-sm border-0" style={{ borderRadius: "14px" }}>
          <Card.Body className="p-4">
            <h3
              className="text-center mb-4"
              style={{ color: PRIMARY_COLOR, fontWeight: "600" }}
            >
              Graduate Route Visa Countdown
            </h3>

            <Row className="mb-4 text-center text-md-start">
              <Col xs={12} md={6}>
                <p><strong>Name:</strong> Thayalan Odniel</p>
                <p><strong>Date of Birth:</strong> 28 February 2000</p>
                <p><strong>Nationality:</strong> LKA</p>
              </Col>
              <Col xs={12} md={6}>
                <p><strong>Status:</strong> Graduate Route</p>
                <p><strong>Valid From:</strong> 11 December 2025</p>
                <p><strong>Valid Until:</strong> 11 December 2027</p>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "nowrap",
                overflowX: "auto",
                marginBottom: "25px",
              }}
            >
              {timeLeft &&
                Object.entries(timeLeft).map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "8px",
                      border: `2px solid ${PRIMARY_COLOR}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: PRIMARY_COLOR,
                      }}
                    >
                      {value}
                    </div>
                    <small
                      style={{
                        fontSize: "9px",
                        color: "#555",
                        textTransform: "uppercase",
                      }}
                    >
                      {label}
                    </small>
                  </div>
                ))}
            </div>

            <div
              className="mb-2"
              style={{ fontWeight: "600", color: PRIMARY_COLOR }}
            >
              Time Used: {daysSpent} {daysSpent === 1 ? "day" : "days"}
            </div>

            <ProgressBar style={{ height: "6px" }}>
              <ProgressBar
                now={progress}
                style={{ backgroundColor: PRIMARY_COLOR }}
              />
            </ProgressBar>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default GraduateRouteCountdown;