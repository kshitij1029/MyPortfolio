import React from 'react'
import {useState} from 'react'
import CheckerBackground from '../Components/CheckerBackground';
import '../Components/CheckerBackground.css';

const ContactPage = ({form, setForm, handleSubmit}) => {
  const [result, setResult] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "d34d394d-da41-4587-b9d0-26c2fc48532d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setSubmitted(true);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <>
      <CheckerBackground />
      <section className="section fade-in contactsection">
        {/* Extracted rigid inline configurations into a clean responsive layout class */}
        <div className="contact-grid-container">
          <div className="contact-info-block">
            <div className="section-label">LET'S CONNECT</div>
            <h2 className="contact-main-heading" style={{ fontFamily: "var(--font-head)", fontSize: "clamp(3rem, 8vw, 5.6rem)", lineHeight: 1, textTransform: "uppercase", marginBottom: 24 }}>
              <span style={{ color: "var(--orange)", fontSize: 81}}>REACH</span><br />ME
            </h2>
            <p className="contact-subtext" style={{ color: "#767575", lineHeight: 1.8, marginBottom: 32, fontSize: 17 }}>
              Got a vision that needs a digital heartbeat? I specialize in breaking grids and building interfaces that actually feel alive. Whether you have a fully-baked project or just a chaotic idea on a napkin, let’s sync up and turn the volume up on your web presence.
            </p>
            <div className="contact-social-links">
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzghzGHRCzDvcBdzbrbCBDtTdnfLtQpmvMDNkkpFQfqhxcRkPzTFbPjrhfZpNfJsGbZ" className="arrow-btn" title="Email" style={{ fontSize: "1.4rem", width:96, height: 40 }}>✉</a>
              <a href="https://www.linkedin.com/in/kshitij-jha-a1b19b327/" className="arrow-btn" title="LinkedIn" target="_blank" rel="noreferrer" style={{ fontSize: "1.4rem", width:96, height: 40  }}>in</a>
              <a href="https://github.com/kshitij1029" className="arrow-btn" title="GitHub" target="_blank" rel="noreferrer" style={{ fontSize: "1.34rem", width:96, height: 40  }}><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
  
          <div className="brutalist-card contact-card-block" style={{ padding: 32 }}>
            {submitted ? (
              <div className="success-container">
                {/* Animated Checkmark Wrapper */}
                <div className="checkmark-wrapper">
                  <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                  </svg>
                </div>

                <div className="success-text-content">
                  <h3 className="success-title">MESSAGE RECEIVED</h3>
                  <p className="success-subtitle">I'LL REACH OUT TO YOU, IN 24H</p>
                </div>
                
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn-primary" 
                  style={{ marginTop: "24px", fontSize: "0.9rem" }}
                >
                  GO BACK
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div>
                  <label className="form-label">WHO AM I CONNECTING WITH?</label>
                  <input
                    className="form-input"
                    name='name'
                    placeholder="ENTER YOUR NAME"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">EMAIL ADDRESS PLEASE</label>
                  <input
                    className="form-input"
                    name='email'
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">ANYTHING FOR ME?</label>
                  <textarea
                    className="form-input form-textarea"
                    name='message'
                    placeholder="ENTER YOUR MESSAGE..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", fontFamily: "var(--font-head)", fontSize: "1.3rem" }}>
                  INITIATE CONTACT
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;