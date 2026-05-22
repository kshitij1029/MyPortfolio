import React, { useState } from 'react';
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';
import qskipban from '../assets/qskipban.png'
import qskiplogo from '../assets/qskiplogo.png'

// Internship data store with synchronized color themes
const internshipData = [
    {
      id: "qskip",
      role: "Graphic Designer",
      logo: qskiplogo,
      company: "Qskip",
      link: "https://qskip.in/",
      description: "Spearheaded promotional asset creation and brand design for Qskip, translating the startup's core product concepts into high-impact marketing posters, minimal digital visuals, and cohesive identity assets to drive brand awareness.",
      duration: "Present",
      status: "ACTIVE",
      badgeColor: "#000000",
      themeColor: "var(--orange, #ff6b00)",
      contrastColor: "#ffffff",
      image: qskipban, // Example image placeholder
      technologies: ["Figma", "Canva", "Brand Strategy"],
      deliverables: ["Brand Style Guide", "Marketing Creatives", "UI Vector Assets"],
      time: "March 2026 - Present"
    },
];

const InternshipsPage = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState(internshipData[0]);
  const [animateKey, setAnimateKey] = useState(0);

  const handleTabChange = (work) => {
    setActiveTab(work);
    setAnimateKey(prev => prev + 1);
  };

  if (!activeTab) return null;

  return (
    <>
      <CheckerBackground />
      <section className="section fade-in">
        <div className="section-label">MY EXPERIENCE</div>
        <h2 className="section-title brutalist-reveal-text" style={{ fontSize: 68 }}>
          WORK <span style={{ color: "var(--orange)", fontSize: 68 }}>HISTORY</span>
        </h2>

        <div className="internship-workspace">
          
          {/* Left Column: Selector Cards */}
          <div className="internship-sidebar">
            {internshipData.map((work) => {
              const isActive = activeTab.id === work.id;
              const isCurrentRole = work.status === "ACTIVE";

              return (
                <div 
                  key={work.id}
                  className={`internship-selector-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleTabChange(work)}
                  style={isActive ? { 
                    borderLeft: `8px solid ${work.themeColor}`, 
                    backgroundColor: 'var(--card)' 
                  } : { backgroundColor: 'var(--card)' }}
                >
                  <div className="selector-header">
                    {/* Timeline Node Container */}
                    <div className="timeline-node-container">
                      <span 
                        className={`timeline-status-dot ${isCurrentRole ? 'is-active' : ''}`}
                        style={{ backgroundColor: isCurrentRole ? 'var(--orange, #ff6b00)' : '#888888' }}
                      ></span>
                      <span className="mono-text label-muted" style={{ fontSize: "0.8rem", opacity: 1, color: 'var(--change3)' }}>
                        {work.duration}
                      </span>
                    </div>

                    <span 
                      className="status-badge" 
                      style={{ 
                        backgroundColor: isActive ? work.themeColor : '#000000', 
                        color: isActive ? work.contrastColor : '#ffffff' 
                      }}
                    >
                      {work.status}
                    </span>
                  </div>
                  <h3 className="selector-title">{work.role}</h3>
                  <div className="selector-company" style={{ opacity: 1, color: 'var(--change3)' }}>@ {work.company}</div>
                </div>
              );
            })}

            <div className="accent-block-dark interactive-cta" style={{ marginTop: 'auto', padding: 16, backgroundColor: 'var(--card)' }}>
              <div className="mono-text" style={{ fontSize: "0.8rem", marginBottom: 15, color: 'var(--text)' }}>HAVE A PROJECT?</div>
              <button className="btn-primary" style={{ width: '100%', padding: '8px' }} onClick={() => navigate("Contact")}>HIRE ME</button>
            </div>
          </div>

          {/* Right Column: Dynamic Canvas Display */}
          <div className="internship-display-canvas">
            <div className="canvas-header-bar" style={{ backgroundColor: activeTab.themeColor }}>
              <div className="window-dots">
                <span 
                  className="dot loading-dot" 
                  style={{ backgroundColor: activeTab.contrastColor, animationDelay: '0s' }}
                ></span>
                <span 
                  className="dot loading-dot" 
                  style={{ backgroundColor: activeTab.contrastColor, animationDelay: '0.15s' }}
                ></span>
                <span 
                  className="dot loading-dot" 
                  style={{ backgroundColor: activeTab.contrastColor, animationDelay: '0.3s' }}
                ></span>
              </div>
              <span className="mono-text window-title" style={{ color: activeTab.contrastColor }}>
                WORK_LOG // {activeTab.company ? activeTab.company.toUpperCase() : ''}
              </span>
            </div>

            {/* Position relative context container wrapper */}
            <div className="canvas-relative-wrapper">
              
              {/* SLIDING HOVER OVERLAY LAYER */}
              {activeTab.image && (
                <div className="canvas-hover-overlay">
                  <img src={activeTab.image} alt={activeTab.role} className="hover-overlay-img" />
                </div>
              )}

              {/* Standard Default Layout Area */}
              <div 
                className="canvas-content dynamic-reveal" 
                key={animateKey}
                style={{
                  '--current-theme': activeTab.themeColor,
                  '--current-contrast': activeTab.contrastColor
                }}
              >
                <div className="canvas-title-group">
                  <div style={{display:'flex',alignItems:'center'}}>
                    <h1 className="canvas-role">{activeTab.role}</h1>
                  </div>
                  <div className="canvas-company-row">
                    <h2 className="canvas-company" style={{ color: 'var(--current-theme)' }}>
                      Organization: {activeTab.company}
                    </h2>
                    <p style={{fontSize:13.5, fontStyle:'italic'}}>{activeTab.time}</p>
                  </div>
                </div>

                <hr className="brutalist-divider" />
                <p className="canvas-description" style={{color:'var(--change3)'}}>{activeTab.description}</p>

                <div className="data-section">
                  <h4 className="section-sub-label" style={{ color: 'var(--current-theme)' }}>STACK_USED</h4>
                  <div className="chip-container">
                    {activeTab.technologies?.map((tech, idx) => (
                      <span key={idx} className="tech-chip" style={{ animationDelay: `${idx * 0.05}s`, backgroundColor:'var(--bg)' }}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="data-section" style={{position:'relative'}}>
                  <img src={activeTab.logo} style={{height:200, width:226, marginRight: 10, position:'absolute', right:0, bottom:40, opacity:0.3}}></img>
                  <h4 className="section-sub-label" style={{ color: 'var(--current-theme)' }}>KEY_DELIVERABLES</h4>
                  <div className="proof-grid">
                    {activeTab.deliverables?.map((item, idx) => (
                      <div key={idx} className="proof-box" style={{ animationDelay: `${idx * 0.08}s` , backgroundColor:'var(--bg)'}}>
                        <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--current-theme)', fontWeight: 'bold' }}>
                          #0{idx+1}
                        </div>
                        <div className="proof-text">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default InternshipsPage;