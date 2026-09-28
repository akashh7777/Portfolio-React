import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/Hero image.png'


const introMessages = {
  builder: {
    label: '🏗️ Builder',
    text: 'Building modern, responsive and intelligent web applications with a focus on clean interfaces, practical solutions and emerging technologies.',
  },
  developer: {
    label: '💻 Developer',
    text: 'Crafting full-stack solutions using React, JavaScript, Python and modern web technologies to turn ideas into real, working software.',
  },
  learner: {
    label: '🚀 Explorer',
    text: 'Constantly exploring AI, Machine Learning and new frameworks to stay at the cutting edge of web and software development.',
  },
}

function Home() {

  const [activeMode, setActiveMode] = useState('builder')


  const featuredSkills = [
    'React.js', 'JavaScript', 'Python', 'Next.js',
    'AI / ML', 'Supabase', 'REST APIs', 'Git',
  ]

  return (
    <div className="home-page">

      {/* ── HERO SECTION ── */}
      <section className="hero-section section">
        <div className="container">
          <div className="hero-content">

            {/* Left: Text content */}
            <div className="hero-left">

              {/* Status badge */}
              <div className="hero-badge">
                <span className="dot"></span>
                <span>Open to Opportunities</span>
              </div>

              {/* Name */}
              <h1 className="hero-name">
                <span className="name-gradient">Akash H</span>
              </h1>

              {/* Role */}
              <p className="hero-role">
                &lt; <span className="role-highlight">Full Stack Developer</span> /&gt;
              </p>

              {/* Interactive description — changes based on activeMode */}
              <p className="hero-description">
                {introMessages[activeMode].text}
              </p>

              {/* Toggle buttons — clicking changes the description */}
              <div className="hero-toggle">
                {Object.entries(introMessages).map(([key, value]) => (
                  <button
                    key={key}
                    className={`hero-toggle-btn ${activeMode === key ? 'active' : ''}`}
                    onClick={() => setActiveMode(key)}
                    id={`toggle-${key}`}
                  >
                    {value.label}
                  </button>
                ))}
              </div>

              {/* CTA buttons — use Link for React Router navigation */}
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary" id="hero-view-projects">
                  View Projects ↗
                </Link>
                <Link to="/contact" className="btn btn-secondary" id="hero-contact">
                  Contact Me
                </Link>
              </div>

            </div>

            {/* Right: Hero image */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                {/* Decorative rotating rings behind the image */}
                <div className="hero-img-ring hero-img-ring--1"></div>
                <div className="hero-img-ring hero-img-ring--2"></div>

                {/* Orbit dots */}
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>
                <div className="orbit-dot"></div>

                {/* The actual hero photo */}
                <img
                  src={heroImage}
                  alt="Akash H — Full Stack Developer"
                  className="hero-photo"
                  id="hero-photo"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURED SKILLS BAR ── */}
      <section className="featured-skills">
        <div className="container">
          <div className="skills-bar">
            <span className="skills-bar-label">tech stack →</span>
            {featuredSkills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="home-projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A glimpse into what I have built.</p>

          <div className="home-projects-grid">

            {/* Project 1 card */}
            <div className="glass-card home-project-card">
              <div className="project-number">01</div>
              <h3>AI Chatbot Supporting Mental Health</h3>
              <p>
                An AI-powered mental health support chatbot with mood tracking,
                breathing exercises, voice input, music recommendations and
                a personalized dashboard. Powered by a locally hosted Ollama LLM.
              </p>
              <div className="tags">
                <span className="tag">React / Next.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Ollama</span>
                <span className="tag">AI/LLM</span>
              </div>
            </div>

            {/* Project 2 card */}
            <div className="glass-card home-project-card">
              <div className="project-number">02</div>
              <h3>AI-Powered Personal Health Predictor Dashboard</h3>
              <p>
                An AI-powered dashboard that analyzes user data to predict
                focus levels and lifestyle-related health risks using
                Machine Learning models with interactive visual results.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">Random Forest</span>
                <span className="tag">Dashboard</span>
              </div>
            </div>

          </div>

          
          <div className="home-section-cta">
            <Link to="/projects" className="btn btn-secondary" id="home-all-projects">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
