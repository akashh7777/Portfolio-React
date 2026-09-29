import aboutImage from "../assets/aboutimage.jpeg";
import "../pages/about.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Section header */}
        <div className="about-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            A closer look at who I am, what I do, and what drives me.
          </p>
          <div className="divider"></div>
        </div>

        {/* ═══ BENTO GRID ═══ */}
        <div className="bento-grid">
          {/* ── Card 1: Photo + Bio (large, spans 2 cols) ── */}
          <div className="bento-card bento-bio glass-card" id="bento-bio">
            <div className="bio-photo-wrap">
              <img src={aboutImage} alt="Akash H" className="bio-photo" />
              <div className="bio-photo-glow"></div>
            </div>
            <div className="bio-text">
              <div className="bio-badge">
                <span className="bio-dot"></span>
                Available for Opportunities
              </div>
              <h2 className="bio-name">Akash H</h2>
              <p className="bio-role">
                Full Stack Developer &amp; AI Enthusiast
              </p>
              <p className="bio-desc">
                Computer Science Engineering graduate with a passion for
                building intelligent, user-focused software. I specialize in
                full-stack web development, AI-powered applications, and modern
                cloud technologies. I love turning ideas into real, working
                products.
              </p>
              <div className="bio-links">
                <a
                  href="mailto:akashalpha7777@gmail.com"
                  className="bio-link"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/akash-h-/"
                  target="_blank"
                  rel="noreferrer"
                  className="bio-link"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="bio-link"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ── Card 2: Stats ── */}
          <div className="bento-card bento-stats glass-card" id="bento-stats">
            <div className="bento-card-label">Numbers</div>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">4+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Tech Stacks</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">4+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2+</span>
                <span className="stat-label">Leadership Roles</span>
              </div>
            </div>
          </div>

          {/* ── Card 3: Tech Stack / Skills ── */}
          <div className="bento-card bento-skills glass-card" id="bento-skills">
            <div className="bento-card-label">Tech Stack</div>
            <div className="skill-clusters">
              <div className="skill-cluster">
                <span className="cluster-label cluster-label--blue">
                  Frontend
                </span>
                <div className="cluster-pills">
                  <span className="cluster-pill">React</span>
                  <span className="cluster-pill">Next.js</span>
                  <span className="cluster-pill">JavaScript</span>
                  <span className="cluster-pill">HTML5</span>
                  <span className="cluster-pill">CSS3</span>
                </div>
              </div>
              <div className="skill-cluster">
                <span className="cluster-label cluster-label--purple">
                  Backend
                </span>
                <div className="cluster-pills">
                  <span className="cluster-pill">Node.js</span>
                  <span className="cluster-pill">Supabase</span>
                  <span className="cluster-pill">Firebase</span>
                  <span className="cluster-pill">REST APIs</span>
                  <span className="cluster-pill">SQL</span>
                </div>
              </div>
              <div className="skill-cluster">
                <span className="cluster-label cluster-label--cyan">
                  AI / ML
                </span>
                <div className="cluster-pills">
                  <span className="cluster-pill">Python</span>
                  <span className="cluster-pill">TensorFlow</span>
                  <span className="cluster-pill">Ollama</span>
                  <span className="cluster-pill">OpenCV</span>
                  <span className="cluster-pill">LLMs</span>
                </div>
              </div>
              <div className="skill-cluster">
                <span className="cluster-label cluster-label--green">
                  Tools
                </span>
                <div className="cluster-pills">
                  <span className="cluster-pill">Git</span>
                  <span className="cluster-pill">GitHub</span>
                  <span className="cluster-pill">Vercel</span>
                  <span className="cluster-pill">Linux CLI</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 4: Interests / Passions ── */}
          <div
            className="bento-card bento-interests glass-card"
            id="bento-interests"
          >
            <div className="bento-card-label">Interests</div>
            <div className="interest-items">
              <div className="interest-item">
                <div className="interest-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <span>Full Stack Development</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <span>Artificial Intelligence</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <span>Machine Learning</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <span>UI / UX Design</span>
              </div>
              <div className="interest-item">
                <div className="interest-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <span>Building Products</span>
              </div>
            </div>
          </div>

          {/* ── Card 5: Education ── */}
          <div
            className="bento-card bento-education glass-card"
            id="bento-education"
          >
            <div className="bento-card-label">Education</div>
            <div className="edu-timeline">
              <div className="edu-item edu-item--active">
                <div className="edu-marker"></div>
                <div className="edu-content">
                  <span className="edu-year">2022 — 2026</span>
                  <h4>B.Tech — Computer Science &amp; Engineering</h4>
                  <p>
                    John Cox Memorial CSI Institute of Technology, Trivandrum
                  </p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-marker"></div>
                <div className="edu-content">
                  <span className="edu-year">2022 · </span>
                  <h4>Higher Secondary — Computer Science</h4>
                  <p>B.N.V Vocational &amp; Higher Secondary School</p>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-marker"></div>
                <div className="edu-content">
                  <span className="edu-year">2020 ·</span>
                  <h4>Secondary Education </h4>
                  <p>Christ Nagar Senior Secondary School</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Card 6: Quote / Philosophy ── */}
          <div className="bento-card bento-quote glass-card" id="bento-quote">
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="quote-text">
              I don&apos;t just write code — I build software that solves real
              problems and creates meaningful impact.
            </p>
            <span className="quote-author">— Akash H</span>
          </div>

          {/* ── Card 7: Location ── */}
          <div
            className="bento-card bento-location glass-card"
            id="bento-location"
          >
            <div className="location-pin">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p className="location-city">Thiruvananthapuram</p>
            <p className="location-state">Kerala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
