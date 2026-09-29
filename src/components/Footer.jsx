import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaReact, FaArrowUp } from 'react-icons/fa'

// Footer component — appears on every page
function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">

      {/* Back to top button */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <FaArrowUp />
      </button>

      <div className="footer-container">

        {/* Top row */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">Akash H</span>
            <p className="footer-tagline">Full Stack Developer · AI Enthusiast</p>
          </div>

          {/* Quick navigation */}
          <div className="footer-nav">
            <span className="footer-nav-label">Quick Links</span>
            <div className="footer-nav-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Social icons */}
          <div className="footer-social">
            <span className="footer-nav-label">Connect</span>
            <div className="footer-social-icons">
              <a href="https://github.com/akashh7777" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akash-h-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:akashh.dev.work@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Akash H. All rights reserved.
          </p>
          <p className="footer-built">
            Built with <FaHeart className="footer-heart" /> using <FaReact className="footer-react" /> React.js
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
