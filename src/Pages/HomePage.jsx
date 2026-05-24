import React from 'react'
import ProjectCard from '../Components/ProjectCard';
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';
import sarthi_ai from "../assets/SARTHI_AI.png"
import pizza_town from "../assets/PIZZA_TOWN.png"
import beyond_travel from "../assets/BEYOND_TRAVEL.png"
import img1 from "../assets/Myself2.jpeg"
import img2 from "../assets/Myself3.jpeg"
import img3 from "../assets/Myself4.jpeg"
import img4 from "../assets/Myself5.jpeg"
import interview_sarthi from "../assets/INTERVIEW_SARTHI.png"
import blogscape from "../assets/blogscape.png"
import rankpilot from "../assets/RANK_PILOT.png"
import AnimatedStat from '../Components/AnimatedStat';

const MARQUEE_ITEMS = [
  "REACT.JS", "NODE.JS", "MONGODB", "MERN STACK", "FIGMA",
  "TAILWIND CSS", "JAVA", "PYTHON", "GRAPHIC DESIGN", "UI/UX",
  "REST APIs", "FULL STACK", "NEXT.JS", "GIT", "OPEN TO WORK",
  "REACT.JS", "NODE.JS", "MONGODB", "MERN STACK", "FIGMA",
  "TAILWIND CSS", "JAVA", "PYTHON", "GRAPHIC DESIGN", "UI/UX",
  "REST APIs", "FULL STACK", "NEXT.JS", "GIT", "OPEN TO WORK",
];

const PROJECTS = [
  {
    emoji: interview_sarthi,
    category: "MERN STACK",
    title: "resumeCO.",
    desc: "An AI-powered platform that analyzes your resume against specific job requirements to map out a personalized preparation roadmap",
    tags: ["REACT", "CSS", "JAVASCRIPT", "NODE", "EXPRESS", "MONGODB", "REST API'S", "RENDER", "VERCEL"],
    bg: "#2a1a0a",
    verLink: "https://resume-co-lake.vercel.app/",
    gitLink: "https://github.com/kshitij1029/resumeCo"
  },
  {
    emoji: blogscape,
    category: "Backend",
    title: "BlogScape",
    desc: "An elegant, responsive platform built to seamlessly create, update, and showcase engaging articles and stories.",
    tags: ["NODE", "EXPRESS", "JAVASCRIPT", "CSS", "EJS", "RENDER"],
    bg: "#2a1a0a",
    verLink: "https://blogscape-mjlb.onrender.com",
    gitLink: "https://github.com/kshitij1029/BlogScape"
  },
  {
    emoji: rankpilot,
    category: "MERN STACK",
    title: "RankPilot",
    desc: "An instant AI-powered SAAS website  which provides SEO audits for any websit, Uncovers hidden issues and optimizes performance.",
    tags: ["REACT", "TAILWIND", "JS/TS", "NODE", "EXPRESS", "MONGODB", "REST API'S", "BROWSER BASE", "VERCEL"],
    bg: "#2a1a0a",
    verLink: "https://seo-rank-tracker-teal.vercel.app/",
    gitLink: "https://github.com/kshitij1029/SEO-Rank-Tracker"
  },
];

const HomePage = ({navigate}) => {
  return (
    <>
      <CheckerBackground />
      {/* HERO */}
      <section className="hero-container fade-in">
        {/* Left Side: Content */}
        <div className="hero-content-wrapper">
          <div style={{ marginBottom: 20 }} className='tag ping-c'>
            <i className="fa-solid fa-circle ping"></i>
            <span className="stagger-1 fade-in">LOOKING FOR NEW OPPORTUNITIES</span>
          </div>
          <h1 className="hero-title stagger-2 fade-in">
            KSHI<span className="orange" style={{ marginBottom: 20 }}>TIJ</span><br />  
          </h1>
          <span className="teal hero-title" id="jha">JHA</span>
          <p className="hero-sub stagger-3 fade-in">
            MERN Stack Developer & Graphic Designer at Qskip. Architecting digital experiences where raw code meets bold design — built for the brave and the bold.
          </p>
          <div className="hero-btns stagger-4 fade-in">
            <button className="btn-primary" onClick={() => navigate("Projects")}>EXPLORE MY WORK</button>
            <button className="btn-secondary" onClick={() => navigate("About")}>KNOW ME MORE</button>
          </div>
        </div>
        <div className="vertical">
          <div className="hero-visual-container">
            {/* Vertical Text with Animation */}
            <div className="vertical-text-wrapper">
              <span className="vertical-text">DEVELOPER</span>
              <div className="vertical-line"></div>
              <span className="vertical-text">DESIGNER</span>
            </div>
          </div>

          {/* Right Side: Funky Image Grid */}
          <div className="hero-image-grid stagger-2 fade-in">
            <img src={img1} alt="Kshitij 2" className="funky-img img-1" />
            <img src={img2} alt="Kshitij 3" className="funky-img img-2" />
            <img src={img3} alt="Kshitij 4" className="funky-img img-3" />
            <img src={img4} alt="Kshitij 5" className="funky-img img-4" />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div>
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="marquee-item">✦ {item}</span>
            ))}
          </div>
        </div>
        {/* MARQUEE */}
        <div className="marquee-wrap wrapy1">
          <div className="marquee-inner inner-1">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className="marquee-item item-1">✦ {item}</span>
            ))}
          </div>
        </div>
      </div>
 
      {/* PHILOSOPHY */}
      <section className="section" style={{ background: "var(--bg2)" }}>
        {/* Extracted rigid inline configurations into responsive CSS selectors */}
        <div className="philosophy-container">
          <div className="philosophy-text-block">
            <div className="section-label">MY PHILOSOPHY</div>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              A PROGRAM IS <span style={{ color: "var(--orange)" }}>NEVER</span> FINISHED...
            </h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
              I view software as a living entity that can always be refined, optimized, or expanded; there is always one more edge case to handle or a cleaner abstraction to implement.
            </p>
            <div className="tags-container">
              {[ "MERN", "REACT", "FIGMA", "TAILWIND"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          
          <div className="philosophy-cards-block">
            <div className="brutalist-card" style={{ padding: 24 }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>⌨️</div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", marginBottom: 8, textTransform: "uppercase" }}>Tactile Logic</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.6 }}>Raw structures paired with sophisticated typography. I design for clarity that doesn't sacrifice character.</p>
            </div>
            <div className="brutalist-card accent-block-yellow" style={{ padding: 24, borderColor: "var(--border)" }}>
              <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>⚡</div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "1.3rem", marginBottom: 8, textTransform: "uppercase", color: "#000" }}>High Energy</h3>
              <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: 1.6 }}>Performance-first codebases that deliver silky smooth interactions and instant responsiveness.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* SELECTED WORKS PREVIEW */}
      <section className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 12 }}>
          <div>
            <div className="section-label">FEATURED</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>SELECTED <span style={{ color: "var(--orange)" }}>WORKS</span></h2>
          </div>
          <button className="btn-secondary" style={{ fontSize: "0.95rem", padding: "10px 20px" }} onClick={() => navigate("Projects")}>
            VIEW ALL →
          </button>
        </div>
        <div className="grid-3">
          {PROJECTS.slice(0, 3).map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 100} />
          ))}
        </div>
      </section>
 
      {/* STATS */}
      <section style={{ background: "var(--border)", padding: "60px 5vw" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 40, textAlign: "center" }}>
          {[
            { stat: "9.12", label: "CGPA at GGSIPU" },
            { stat: "5+", label: "Projects Built" },
            { stat: "17+", label: "Tech Stack Tools" },
            { stat: "6+", label: "Designs Crafted" },
          ].map((s, i) => (
            <div key={i}>
              <div className="big-stat" style={{ color: i % 2 === 0 ? "var(--orange)" : "var(--teal)" }}>
                <AnimatedStat target={s.stat} />
              </div>
              <div className="big-stat-label" style={{ color: "var(--change)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage