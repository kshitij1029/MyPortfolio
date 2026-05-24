import React from 'react'
import {useState} from 'react';
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';
import ProjectCard from '../Components/ProjectCard';
import sarthi_ai from "../assets/SARTHI_AI.png"
import pizza_town from "../assets/PIZZA_TOWN.png"
import beyond_travel from "../assets/BEYOND_TRAVEL.png"
import interview_sarthi from "../assets/INTERVIEW_SARTHI.png"
import blogscape from "../assets/blogscape.png"
import qskip from "../assets/qskip.png"

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
    emoji: rankpilot,
    category: "MERN STACK",
    title: "RankPilot",
    desc: "An instant AI-powered SAAS website  which provides SEO audits for any websit, Uncovers hidden issues and optimizes performance.",
    tags: ["REACT", "TAILWIND", "JS/TS", "NODE", "EXPRESS", "MONGODB", "REST API'S", "BROWSER BASE", "VERCEL"],
    bg: "#2a1a0a",
    verLink: "https://seo-rank-tracker-teal.vercel.app/",
    gitLink: "https://github.com/kshitij1029/SEO-Rank-Tracker"
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
    emoji: beyond_travel,
    category: "Frontend",
    title: "Beyond Travels",
    desc: "A seamless & ultimate trip planning companion website, providing details of places to visit to plan your trip",
    tags: ["REACT", "TAILWIND", "JAVASCRIPT", "API", "WEB3 FORMS", "VERCEL"],
    bg: "#2a1a0a",
    verLink: "https://beyond-travels-project.vercel.app/",
    gitLink: "https://github.com/kshitij1029/BeyondTravels-Project"
  },
  {
    emoji: pizza_town,
    category: "Frontend",
    title: "Pizza Town",
    desc: "A fully responsive pizza ordering UI with animated cart, custom builder, and smooth checkout experience. It clearly defines hte responsiveness property.",
    tags: ["REACT", "TAILWIND", "JAVASCRIPT", "FIGMA", "CANVA", "VERCEL"],
    bg: "#2a1a0a",
    verLink: "https://pizzeria-project-eight.vercel.app/",
    gitLink: "https://github.com/kshitij1029/Pizzeria-Project"
  },
  {
    emoji: sarthi_ai,
    category: "Frontend",
    title: "Sarthi-AI",
    desc: "A Customized AI Response Agent, CyberSecurity themed which delivers exact and up to date responses",
    tags: ["REACT", "TAILWIND", "GOOGLE APIs", "FIGMA", "VERCEL"],
    bg: "#1a2a1a",
    verLink: "https://sarthi-ai-nine.vercel.app",
    gitLink: "https://github.com/kshitij1029/Sarthi-AI"
  },
  {
    emoji: qskip,
    category: "GRAPHICS",
    title: "QSKIP A3 Poster",
    desc: "This electric orange and dark blue design themed A3 poster highlights QSKIP's efficient four-step mobile ordering process.",
    tags: ["CANVA", "FIGMA"],
    bg: "#2a1a0a",
    verLink: "https://drive.google.com/file/d/1urvcBCxHUrSCXgauwJy0QNVM0qU7EhZ7/view?usp=sharing",
  },
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "MERN Stack", "Frontend", "Backend / Security", "Backend", "Graphics"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p =>
    p.category.toLowerCase().includes(filter.toLowerCase()) ||
    filter.toLowerCase().includes(p.category.toLowerCase())
  );
 
  return (
    <>
      <CheckerBackground />
      <section className="section fade-in">
        <div className="section-label">PORTFOLIO</div>
        <h2 className="section-title" style={{fontSize: 68}}>SELECTED <span style={{ color: "var(--orange)", fontSize: 68 }}>WORKS</span></h2>
  
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          {["All", "MERN Stack", "Frontend", "Backend", "Graphics"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "0.85rem", letterSpacing: 2, padding: "8px 18px",
                border: "2px solid var(--border)", cursor: "pointer", textTransform: "uppercase",
                background: filter === cat ? "var(--orange)" : "transparent",
                color: filter === cat ? "#fff" : "var(--text)",
                boxShadow: filter === cat ? "3px 3px 0 var(--border)" : "none",
                transition: "all 0.15s",
              }}
            >{cat}</button>
          ))}
        </div>
  
        <div className="grid-3">
          {filtered.map((p, i) => <ProjectCard key={i} project={p} delay={i * 80} />)}
        </div>
      </section>
    </>
    
  );
}

export default ProjectsPage