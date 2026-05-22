import React from 'react'
import {useState} from 'react'
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';
import SlideshowImage from '../Components/SlideshowImage'
import college1 from "../assets/college1.jpeg"
import college2 from "../assets/college2.jpeg"
import school2 from "../assets/school2.jpeg"
import school3 from "../assets/school3.jpeg"
import iitm1 from "../assets/iitm1.jpeg"

const EDU = [
  {
    id: "ggsipu",
    year: "2024 – Present",
    degree: "B.Tech in Computer Science Engineering",
    inst: "Guru Gobind Singh Indraprastha University, Delhi",
    detail: "Computer Science Core",
    accent: "var(--orange)",
    fullDetails1: "Grade: 1st Year : 9.043 CGPA",
    fullDetails2: "Activities and societies: ACM Social Media Club member || IETE Club: Graphic Designer || Tech Enthusiast", 
    fullDetails3: "College plays a significant role in shaping an individual's life, and it has certainly been pivotal in shaping my own. The clubs within our college exhibit remarkable productivity and serve as a profound source of inspiration. ", 
    conclude: "Currently, I am an active member of the ACM club at our college, where a dedicated focus is placed on all aspects related to coding and other technical domains.In addition to my enthusiastic involvement in ACM and IETE clubs, I have a strong inclination towards playing badminton.",
    images: [college1, college2], 
    link: "http://www.ipu.ac.in/"
  },
  {
    id: "crpf",
    year: "2020 – 2022",
    degree: "Class X-XII — CBSE Science (PCM + CS)",
    inst: "CRPF Public School, Dwarka, New Delhi",
    detail: "Physics · Chemistry · Mathematics · Computer Science",
    accent: "var(--teal)",
    fullDetails1: "Grade: 10th : 97% ||  12th : 92.7%",
    fullDetails2: "Activities and societies: House Competitions || Debates || Prefects Duty || Old Age Home Volunteering", 
    fullDetails3: "I'm an alumni of CRPF Public School Dwarka, where I received a well-rounded education that emphasized both academic excellence and personal growth. My dedicated teachers at CRPF Public School Dwarka fostered a supportive learning environment. I actively participated in various extracurricular activities, including debates, House competitions and Olympiads, which helped me develop valuable skills like teamwork, leadership, and time management.", 
    conclude: "My time at CRPF Public School Dwarka laid a strong foundation for my academic and professional pursuits.",
    images: [school2, school3],
    link: "https://www.crpfpsdwarka.in/" 
  },
  {
    id: "iitm",
    year: "2024 - Present",
    degree: "IIT Madras Certification",
    inst: "Indian Institute of Technology, Madras",
    detail: "Data Science & Programming Track",
    accent: "var(--yellow)",
    fullDetails1: "",
    fullDetails2: "Activities and societies: Pichavaram House member", 
    fullDetails3: "In concurrent to my B-tech degree from GGSIPU I am also pursuing a BS degree in data science from IIT Madras through their esteemed online program. The field of data science is experiencing notable growth in the contemporary era, and I have taken a keen interest in acquiring knowledge from this prestigious institution.", 
    conclude: "I am currently a part of Pichavaram House and actively participate in various activities, including the literary club, which serves to enhance my skills effectively.",
    images: [iitm1],
    link: "https://study.iitm.ac.in/ds/" 
  },
];
 
const SKILLS = [
  { name: "React.js", bg: "#00B4D8", color: "#000" ,link: "https://react.dev/learn"},
  { name: "Node.js", bg: "#FFD60A", color: "#000" ,link: "https://nodejs.org/learn"},
  { name: "MongoDB", bg: "#FF5733", color: "#fff" ,link: "https://www.mongodb.com/docs/"},
  { name: "Express.js", bg: "#0a0a0a", color: "#fff" ,link: "https://expressjs.com/en/guide/routing.html"},
  { name: "Tailwind CSS", bg: "#00B4D8", color: "#000" ,link: "https://tailwindcss.com/docs/installation/using-vite"},
  { name: "JavaScript", bg: "#FFD60A", color: "#000" ,link: "https://www.w3schools.com/js/DEFAULT.asp"},
  { name: "Java", bg: "#FF5733", color: "#fff" ,link: "https://dev.java/"},
  { name: "Python", bg: "#00B4D8", color: "#000" ,link: "https://www.python.org/doc/"},
  { name: "Figma", bg: "#FFD60A", color: "#000" ,link: "https://www.figma.com"},
  { name: "REST APIs", bg: "#FF5733", color: "#fff" ,link: "https://www.geeksforgeeks.org/node-js/rest-api-introduction/"},
  { name: "Git & GitHub", bg: "#0a0a0a", color: "#fff" ,link: "https://github.com/"},
  { name: "BootStrap", bg: "#00B4D8", color: "#000" ,link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/"},
  { name: "Canva", bg: "#FFD60A", color: "#000" ,link: "https://www.canva.com/en_in/login/"}, 
  { name: "MySQL", bg: "#FF5733", color: "#fff" ,link: "https://dev.mysql.com/doc/"}, 
  { name: "Vercel", bg: "#0a0a0a", color: "#fff" ,link: "https://vercel-landing-page.vercel.app/"}, 
  { name: "Render", bg: "#FFD60A", color: "#000" ,link: "https://render.com/"}, 
  { name: "EJS Templating", bg: "#00B4D8", color: "#000" ,link: "https://ejs.co/#docs"}, 
];

const EducationPage = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <CheckerBackground />
      <section className="section fade-in edu-section-wrapper">
        <div className="section-label">ACADEMIC JOURNEY</div>
        {/* Replaced inline styles with class handles for dynamic mobile sizing */}
        <h2 className="section-title edu-main-title">
          EDUCATION <span style={{ color: "var(--teal)" }}>& SKILLS</span>
        </h2>

        <div className="edu-cards-stack">
          {EDU.map((e) => {
            const isExpanded = expandedId === e.id;
            return (
              <div 
                key={e.id} 
                className={`brutalist-card edu-card ${isExpanded ? 'expanded' : ''}`} 
                style={{ borderLeft: `6px solid ${e.accent}`, cursor: 'pointer' }}
                onClick={() => !isExpanded && toggleExpand(e.id)}
              >
                {/* Clean selector class for card header rows */}
                <div className="edu-card-header">
                  <div className="edu-header-left">
                    <div className="edu-year">{e.year}</div>
                    <div className="edu-degree">{e.degree}</div>
                    <div className="edu-inst">{e.inst}</div>
                  </div>
                  <span className="tag edu-detail-tag" style={{ background: e.accent, color: e.accent === "var(--yellow)" ? "#000" : "#fff", borderColor: "var(--border)" }}>
                    {e.detail}
                  </span>
                </div>

                {/* Expandable Section */}
                <div className="expandable-content">
                  <div className="expand-inner">
                    <div className="details-grid">
                      <div className="details-text">
                        <p style={{marginBottom: 5}}><b>{e.fullDetails1}</b></p>
                        <p style={{marginBottom: 5}}><b>{e.fullDetails2}</b></p>
                        <p style={{marginBottom: 5}}>{e.fullDetails3}</p>
                        <p>{e.conclude}</p>
                      </div>
                      <div className="details-image">
                        <SlideshowImage images={e.images} link={e.link} alt={e.degree} />
                      </div>
                    </div>
                    <button 
                      className="close-btn" 
                      onClick={(e) => { e.stopPropagation(); toggleExpand(null); }}
                      style={{ '--btn-accent': e.accent }}
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <hr className="divider" style={{ marginBottom: 60 }} />
        
        <div className="section-label">TOOLS WORKED WITH</div>
        <h2 className="section-title edu-main-title" style={{ marginBottom: 32 }}>
          TECH <span style={{ color: "var(--orange)" }}> STACK</span>
        </h2>
        
        {/* Swapped inline styles with responsive flex class wrapper */}
        <div className="skills-badge-grid">
          {SKILLS.map((s, i) => (
            <span
              key={i}
              className="skill-badge"
              style={{ background: s.bg, color: s.color, borderColor: "var(--border)" }}
            >
              <a href={s.link} style={{textDecoration : 0, color: s.color}} target='_main'>{s.name}</a>
            </span>
          ))}
        </div>
        
      </section>
    </>
  );
}

export default EducationPage;