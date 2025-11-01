import React, { useEffect, useState } from "react";
import "./certificates.scss";
import coursera from "../../Images/coursera.svg";
import certificate from "../../Images/certificate.png";
import certificates from "./data";

const Certificates = () => {
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    updateTouchState(); // Initial check
    window.addEventListener("resize", updateTouchState);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateTouchState);
    };
  }, []);

  const updateTouchState = () => {
    if (window.innerWidth <= 456) {
      setTouch(true);
    } else {
      setTouch(false);
    }
  };

  return (
    <div className="Certificates">
      <div className="container">
        <div className="top">
          <h1>Certifications</h1>
          <h2>Achieve, Share, Repeat! Mine Digital Accolades. 📜🎉</h2>
        </div>

        <div className="certificates-grid">
          {certificates.map((item) => {
            return (
              <div key={item.id} className="certificate-card">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  <div className="card-header">
                    <div className="provider-logo">
                      <img src={item.logo} alt={`${item.span} logo`} />
                    </div>
                    <div className="issuer-badge">
                      <span>Verified</span>
                    </div>
                  </div>

                  <div className="card-image">
                    <img src={item.certificate} alt="Certificate" />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <svg
                          className="view-icon"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span className="overlay-text">
                          {touch ? "Tap to View" : "Click to View Certificate"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <h3 className="certificate-title">
                      {item.tagline}{" "}
                      <span className="highlight">{item.span}</span>
                    </h3>
                    <div className="card-footer">
                      <span className="verify-link">View Credential →</span>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
