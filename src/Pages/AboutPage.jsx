import React from 'react'
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';

const AboutPage = ({navigate}) => {
  return (
    <>
      <CheckerBackground />
      <section className="section fade-in about-section-wrapper">
        <div className="section-label">WHO I AM</div>
        {/* Added a responsive title class to dynamically scale font-size */}
        <h2 className="section-title about-main-title">
          ABOUT <span style={{ color: "var(--orange)" }}>ME</span>
        </h2>
   
        {/* Replaced strict inline grid configurations with a responsive class */}
        <div className="about-grid-container">
          <div className="about-text-column">
            <p style={{ fontSize: "1.16rem", lineHeight: 1.8, marginBottom: 24, color: "#767575" }}>
              I'm <strong style={{ color: "var(--text)" }}>Kshitij Jha</strong> — a B.Tech CSE student at GGSIPU Delhi, Graphic Designer at Qskip, and a MERN Stack developer who believes great software should feel like art.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, marginBottom: 24, color: "#767575" }}>
              My journey started at CRPF Public School, Dwarka — where I first discovered that code and creativity aren't opposites. They're complements. Today, I build full-stack web experiences that are as technically rigorous as they are visually striking.
            </p>
            <p style={{ fontSize: "1.08rem", lineHeight: 1.8, color: "#767575" }}>
              I reject the "just make it work" mentality. Every interface I ship is designed with intention — bold typography, raw structure, and interactions that feel alive.
            </p>
   
            <div className="about-action-btns">
              <a href="https://drive.google.com/file/d/1NjPPrsPngfjPvyW1_35ynV4yYhuF2hbu/view?usp=sharing" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: "1rem", padding: "12px 24px" }}>RESUME</a>
              <a className="btn-secondary" style={{ fontSize: "0.95rem", padding: "12px 24px" }} onClick={() => navigate("Internships")}>MY INTERNSHIPS</a>
            </div>
          </div>
   
          <div className="about-cards-column">
            <div className="brutalist-card" style={{ padding: 24, background: "var(--orange)" }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "3.1rem", color: "#fff" }}>9.04</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", letterSpacing: 2 }}>CGPA — GGSIPU</div>
            </div>
   
            <div className="brutalist-card" style={{ padding: 24 }}>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1rem", textTransform: "uppercase", marginBottom: 12 }}>Currently</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "🎨 Graphic Designer at Qskip",
                  "💻 MERN Stack Developer",
                  "🎓 B.Tech CSE — GGSIPU (2022–2026)",
                  "📚 IIT Madras — Data Science",
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: "1rem", color: "#767575", fontFamily: "var(--font-mono)" }}>{item}</li>
                ))}
              </ul>
            </div>
   
            <div className="brutalist-card accent-block" style={{ padding: 20, borderColor: "var(--border)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: 2, marginBottom: 8, color: "#000" }}>CURRENT FOCUS</div>
              <div style={{ fontFamily: "var(--font-head)", fontSize: "1.2rem", color: "#000", textTransform: "uppercase" }}>Open to Freelance & Full-Time Roles</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;