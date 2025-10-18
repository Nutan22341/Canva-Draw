import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import headerImage from "../assets/header-image.png"; // adjust path as needed

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = document.cookie.includes("connect.sid");

  return (
    <div className="home">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Draw. Collaborate. <span className="highlight">Create.</span>
          </h1>
          <p className="hero-subtitle">
            A simple yet powerful whiteboard tool to bring your ideas to life —
            inspired by <b>Excalidraw</b>.
          </p>
          <button
            className="hero-btn"
            onClick={() => navigate(isLoggedIn ? "/dashboard" : "/login")}
          >
            {isLoggedIn ? "Go to Dashboard →" : "Login to Start Drawing →"}
          </button>
        </div>

        <div className="hero-image">
          <img src={headerImage} alt="Whiteboard" />
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="features">
        <h2 className="section-title">✨ Why You’ll Love It</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <span className="emoji">✍️</span>
            <h3>Real-Time Drawing</h3>
            <p>
              Draw freely with shapes, arrows, and text — all rendered smoothly
              in your browser.
            </p>
          </div>

          <div className="feature-card">
            <span className="emoji">👥</span>
            <h3>Collaborate Instantly</h3>
            <p>
              Invite friends or teammates and sketch ideas together in real
              time.
            </p>
          </div>

          <div className="feature-card">
            <span className="emoji">☁️</span>
            <h3>Cloud Sync</h3>
            <p>
              Save and access your drawings anywhere — securely stored in the
              cloud.
            </p>
          </div>

          <div className="feature-card">
            <span className="emoji">🔐</span>
            <h3>Google Login</h3>
            <p>
              One-click sign-in using your Google account. Fast, safe, and
              secure.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Whiteboard by <b>Nikhil Kumar</b>. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
