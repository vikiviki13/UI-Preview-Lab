import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".reveal");
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add("revealed");
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #0D0D0D;
          color: #F5F0EB;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Ambient blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .blob-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(185,74,56,0.35) 0%, transparent 70%);
          top: -100px; right: -80px;
        }
        .blob-2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(212,164,130,0.18) 0%, transparent 70%);
          bottom: 100px; left: -60px;
        }

        /* Subtle grid texture */
        .hero-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        /* NAV */
        .hero-nav {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 60px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          letter-spacing: 0.02em;
          color: #F5F0EB;
        }
        .nav-logo span { color: #C95B44; }
        .nav-links {
          display: flex; gap: 36px;
          list-style: none;
        }
        .nav-links a {
          color: rgba(245,240,235,0.55);
          text-decoration: none;
          font-size: 0.875rem;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #F5F0EB; }
        .nav-cta {
          background: transparent;
          border: 1px solid rgba(201,91,68,0.5);
          color: #C95B44;
          padding: 10px 22px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.875rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .nav-cta:hover { background: #C95B44; color: #fff; }

        /* MAIN */
        .hero-main {
          position: relative; z-index: 10;
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          padding: 60px 60px 0;
          align-items: end;
        }

        /* LEFT */
        .hero-left { padding-bottom: 80px; }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(201,91,68,0.12);
          border: 1px solid rgba(201,91,68,0.25);
          color: #E07A65;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          margin-bottom: 32px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          background: #C95B44;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.5; transform:scale(1.4); }
        }

        .hero-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 4.5vw, 4.2rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          color: #F5F0EB;
        }
        .hero-heading .accent {
          color: #C95B44;
          font-style: italic;
        }

        .hero-sub {
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(245,240,235,0.55);
          max-width: 440px;
          margin-bottom: 44px;
          font-weight: 300;
        }

        .hero-actions { display: flex; gap: 14px; align-items: center; margin-bottom: 60px; }

        .btn-primary {
          background: #C95B44;
          color: #fff;
          border: none;
          padding: 15px 30px;
          border-radius: 100px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover { background: #a8402c; transform: translateY(-1px); }

        .btn-ghost {
          background: transparent;
          color: rgba(245,240,235,0.7);
          border: none;
          padding: 15px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          transition: color 0.2s;
        }
        .btn-ghost:hover { color: #F5F0EB; }
        .btn-ghost svg { transition: transform 0.2s; }
        .btn-ghost:hover svg { transform: translateX(3px); }

        /* Stats row */
        .stats-row {
          display: flex; gap: 40px;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 36px;
        }
        .stat-item {}
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #F5F0EB;
          line-height: 1;
        }
        .stat-number span { color: #C95B44; }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(245,240,235,0.45);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        /* RIGHT */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
        }

        .image-frame {
          position: relative;
          width: 360px;
        }

        /* Decorative corner lines */
        .image-frame::before, .image-frame::after {
          content: '';
          position: absolute;
          width: 50px; height: 50px;
          z-index: 2;
        }
        .image-frame::before {
          top: -12px; left: -12px;
          border-top: 2px solid #C95B44;
          border-left: 2px solid #C95B44;
        }
        .image-frame::after {
          bottom: 80px; right: -12px;
          border-bottom: 2px solid #C95B44;
          border-right: 2px solid #C95B44;
        }

        .doctor-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          object-position: top;
          border-radius: 20px 20px 0 0;
          display: block;
          filter: grayscale(15%);
        }

        /* Experience chip */
        .exp-chip {
          position: absolute;
          top: 40px; left: -55px;
          background: rgba(13,13,13,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 16px 20px;
          z-index: 5;
        }
        .exp-chip .num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          color: #C95B44;
          line-height: 1;
        }
        .exp-chip .label {
          font-size: 0.72rem;
          color: rgba(245,240,235,0.5);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-top: 4px;
        }

        /* Rating chip */
        .rating-chip {
          position: absolute;
          bottom: 120px; right: -50px;
          background: rgba(13,13,13,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 14px 18px;
          z-index: 5;
          display: flex; align-items: center; gap: 10px;
        }
        .rating-stars { color: #E8A87C; font-size: 0.8rem; letter-spacing: 2px; }
        .rating-text .score {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem; font-weight: 700; color: #F5F0EB;
        }
        .rating-text .count {
          font-size: 0.72rem; color: rgba(245,240,235,0.45);
        }

        /* BOOKING BAR */
        .booking-bar {
          position: relative; z-index: 10;
          margin: 0 60px;
          transform: translateY(50%);
        }
        .booking-inner {
          background: rgba(22,22,22,0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 20px 28px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .field-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-right: 1px solid rgba(255,255,255,0.07);
          padding-right: 20px;
        }
        .field-group:last-of-type { border-right: none; }

        .field-label {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245,240,235,0.35);
        }
        .field-select, .field-input {
          background: transparent;
          border: none;
          outline: none;
          color: #F5F0EB;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          padding: 0;
          width: 100%;
          cursor: pointer;
        }
        .field-select option { background: #1a1a1a; }

        .book-btn {
          background: #C95B44;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .book-btn:hover { background: #a8402c; transform: translateY(-1px); }

        /* Reveal animation */
        .reveal { opacity: 0; transform: translateY(20px); }
        .revealed {
          animation: revealUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .hero-nav { padding: 20px 24px; }
          .nav-links { display: none; }
          .hero-main { grid-template-columns: 1fr; padding: 40px 24px 0; }
          .hero-right { display: none; }
          .booking-bar { margin: 0 24px; }
          .booking-inner { flex-direction: column; align-items: stretch; }
          .field-group { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); padding-bottom: 12px; }
          .field-group:last-of-type { border-bottom: none; }
        }
      `}</style>

      <div className="hero-root" ref={containerRef}>
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        {/* NAV */}
        <nav className="hero-nav reveal">
          <div className="nav-logo">Dr. Arjun<span>.</span></div>
          <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="nav-cta">Consult Now</button>
        </nav>

        {/* HERO MAIN */}
        <div className="hero-main">
          <div className="hero-left">
            <div className="badge reveal">
              <span className="badge-dot" />
              Specialist in Endocrine Surgery
            </div>

            <h1 className="hero-heading reveal">
              Complex Endocrine<br />
              Surgery &amp; <span className="accent">Advanced<br />Laparoscopic</span> Care
            </h1>

            <p className="hero-sub reveal">
              Clinically proven treatments delivered with precision and care.
              Combining decades of surgical expertise with advanced medical technology.
            </p>

            <div className="hero-actions reveal">
              <button className="btn-primary">Book Appointment</button>
              <button className="btn-ghost">
                View Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="stats-row reveal">
              <div className="stat-item">
                <div className="stat-number">45<span>+</span></div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12k<span>+</span></div>
                <div className="stat-label">Surgeries Done</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98<span>%</span></div>
                <div className="stat-label">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="hero-right reveal">
            <div className="image-frame">
              <div className="exp-chip">
                <div className="num">45+</div>
                <div className="label">Yrs Experience</div>
              </div>
              <img src="/doctor.png" alt="Doctor" className="doctor-img" />
              <div className="rating-chip">
                <div className="rating-stars">★★★★★</div>
                <div className="rating-text">
                  <div className="score">4.9</div>
                  <div className="count">2,400+ reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOOKING BAR */}
        <div className="booking-bar reveal">
          <div className="booking-inner">
            <div className="field-group">
              <label className="field-label">Service</label>
              <select className="field-select">
                <option>Select a Service</option>
                <option>Parathyroid Surgery</option>
                <option>Thyroid Surgery</option>
                <option>Adrenal Surgery</option>
                <option>Laparoscopic Procedure</option>
              </select>
            </div>
            <div className="field-group">
              <label className="field-label">Date</label>
              <input type="date" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">Time</label>
              <input type="time" className="field-input" />
            </div>
            <button className="book-btn">Book Appointment →</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;