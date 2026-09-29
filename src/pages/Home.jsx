import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/Hero image.png'
import {
  FaRobot, FaBrain, FaMicrophone, FaShieldAlt,
  FaGlobeAmericas, FaSearch, FaBolt, FaMobileAlt,
} from 'react-icons/fa'


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
              <div className="hp-card-header">
                <div className="hp-icon-box" style={{ background: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)' }}>
                  <FaRobot />
                </div>
                <div className="hp-card-meta">
                  <span className="hp-card-category">Full Stack AI · 2025</span>
                  <h3>AI Chatbot Supporting Mental Health</h3>
                </div>
              </div>
              <p className="hp-card-tagline">Empathetic AI support with mood tracking & voice interaction</p>
              <p>
                An AI-powered mental health support chatbot with mood tracking,
                breathing exercises, voice input, music recommendations and
                a personalized dashboard. Powered by a locally hosted Ollama LLM.
              </p>
              <div className="hp-card-highlights">
                <span className="hp-highlight"><FaBrain /> LLM-Powered</span>
                <span className="hp-highlight"><FaMicrophone /> Voice Input</span>
                <span className="hp-highlight"><FaShieldAlt /> Secure Auth</span>
              </div>
              <div className="tags">
                <span className="tag">React / Next.js</span>
                <span className="tag">Supabase</span>
                <span className="tag">Ollama</span>
                <span className="tag">AI/LLM</span>
              </div>
            </div>

            {/* Project 2 card */}
            <div className="glass-card home-project-card">
              <div className="hp-card-header">
                <div className="hp-icon-box" style={{ background: 'linear-gradient(135deg, #22d3ee, #06b6d4)' }}>
                  <FaGlobeAmericas />
                </div>
                <div className="hp-card-meta">
                  <span className="hp-card-category">Frontend Web Application · 2024</span>
                  <h3>Country Explorer</h3>
                </div>
              </div>
              <p className="hp-card-tagline">Async/Await REST Countries API Explorer</p>
              <p>
                An interactive web application that fetches and displays detailed information about countries
                around the world using the REST Countries API. Built with modern JavaScript async/await
                patterns, dynamic DOM manipulation and a clean, responsive user interface.
              </p>
              <div className="hp-card-highlights">
                <span className="hp-highlight"><FaSearch /> Country Search</span>
                <span className="hp-highlight"><FaBolt /> Async/Await</span>
                <span className="hp-highlight"><FaMobileAlt /> Responsive UI</span>
              </div>
              <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">REST API</span>
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
