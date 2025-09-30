import React, { useState, useEffect } from "react";
import "./SplashScreen.css";
import freepalestineImg from "../../Images/freepalestine.png";

const SplashScreen = ({ onFinish }) => {
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show content after a short delay to allow for animation setup
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);

    // Start exit animation after showing all strips (12 * 0.8s + 2.5s = ~12s total)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 11000);

    // Actually remove splash screen after exit animation completes
    const removeTimer = setTimeout(() => {
      onFinish();
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  // Palestine flag colors
  const colors = ["#000000", "#FFFFFF", "#00FF00", "#FF0000"]; // Black, White, Green, Red

  return (
    <div className={`splash-screen ${isExiting ? "exiting" : ""}`}>
      {/* Animated color strips background */}
      <div className="color-strips">
        {Array.from({ length: 92 }, (_, i) => (
          <div
            key={i}
            className="color-strip"
            style={{
              backgroundColor: colors[i % colors.length],
              left: `${i * 8.33}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: "2.5s",
            }}
          />
        ))}
      </div>

      {/* Palestine flag */}
      <div className="palestine-flag">
        <div className="flag-stripe black"></div>
        <div className="flag-stripe white"></div>
        <div className="flag-stripe green"></div>
        <div className="flag-triangle"></div>
      </div>

      {/* Main content */}
      <div className={`splash-content ${showContent ? "show" : ""}`}>
        <div className="free-palestine-text">
          <h1 className="main-text">FREE</h1>
          <h1 className="main-text palestine">PALESTINE</h1>
        </div>

        <div className="palestine-image">
          <img src={freepalestineImg} alt="Free Palestine" />
        </div>

        <div className="solidarity-message">
          <p>✊ Stand with Palestine ✊</p>
        </div>

        {/* Progress indicator */}
        <div className="progress-container">
          <div className="progress-text">Solidarity in motion...</div>
          <div className="progress-dots">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="progress-dot"
                style={{ animationDelay: `${i * 1.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        className="skip-btn"
        onClick={() => {
          setIsExiting(true);
          setTimeout(onFinish, 1000);
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default SplashScreen;
