import React from 'react'

const Footer = ({navigate}) => {
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">KSHITIJ.DEV</span>
        <div className="footer-links">
          <a className="footer-link" href="https://www.linkedin.com/in/kshitij-jha-a1b19b327/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="footer-link" href="https://github.com/kshitij1029" target="_blank" rel="noreferrer">GitHub</a>
          <button className="footer-link" style={{ cursor: "pointer", background: "none", border: "none" }} onClick={() => navigate("Contact")}>Contact</button>
        </div>
        <span className="footer-copy">© 2026 KSHITIJ JHA — BUILT FOR THE BOLD</span>
      </footer>
    </>
  )
}

export default Footer