import { useState, useEffect, useRef } from "react";
import './App.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import EducationPage from "./Pages/EducationPage";
import ProjectsPage from "./Pages/ProjectsPage";
import InternshipsPage from "./Pages/InternshipsPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";

const PAGES = ["Home", "About", "Projects", "Internships", "Education", "Contact"];

export default function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("Home");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks mobile menu state
  
  const topRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const navigate = (p) => {
    setPage(p);
    setIsMenuOpen(false); // Closes the mobile menu when a link is clicked
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={topRef} />

      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo" onClick={() => navigate("Home")} style={{ cursor: "pointer" }}>
          KSHITIJ.DEV
        </span>
        
        {/* Container for controls to keep them grouped nicely on mobile */}
        <div className="nav-controls">
          <button
            className="theme-btn"
            onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <i className="fa-solid fa-moon moon"></i> : <i className="fa-solid fa-sun sun"></i>}
          </button>

          {/* Hamburger Menu Button - Placed right beside the theme button */}
          <button 
            className="hamburger-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {PAGES.map((p) => (
            <button
              key={p}
              className={`nav-link-custom ${page === p ? "active" : ""}`}
              onClick={() => navigate(p)}
            >
              {p}
            </button>
          ))}
        </div>
      </nav>

      {/* PAGES */}
      {page === "Home" && <HomePage navigate={navigate} />}
      {page === "About" && <AboutPage navigate={navigate}/>}
      {page === "Projects" && <ProjectsPage />}
      {page === "Internships" && <InternshipsPage navigate={navigate}/>}
      {page === "Education" && <EducationPage />}
      {page === "Contact" && (
        <ContactPage form={form} setForm={setForm} />
      )}
       
      <Footer navigate={navigate}/>
    </>
  );
}