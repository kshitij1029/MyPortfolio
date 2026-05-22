import React from 'react'

function ProjectCard({ project, delay = 0 }) {
  return (
    <div className="brutalist-card project-card" style={{ animationDelay: `${delay}ms` }}>
      <img src={project.emoji} style={{ width: '100%', height: 'auto', display: 'block' }}/>
      <div className="project-body">
        <div className="project-category">{project.category}</div>
        <div className="project-title">{project.title}</div>
        <div className="project-desc">{project.desc}</div>
        <div className="project-tags">
          {project.tags.map(t => <span key={t} className="tag" style={{ fontSize: "0.69rem", padding: "3px 8px" }}>{t}</span>)}
        </div>
        <div style={{ marginTop: 16 }}>
          <a href={project.verLink} target="_main" className="arrow-btn" style={{ marginRight: 16 }}>{project.category=='GRAPHICS' ? "VIEW COMPLETE DESIGN" : "VIEW PROJECT"}</a>
          {project.category=='GRAPHICS' ?
          null : 
          (<a href={project.gitLink} target="_main" className="arrow-btn">GITHUB REPO</a>)  
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCard