// Footer component — appears on every page
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-logo">Akash H</div>

        {/* Copyright */}
        <p className="footer-copy">
          © {currentYear} Akash H. Built with React.js
        </p>

        {/* Quick links */}
        <div className="footer-links">
          {/* Replace these href values with your actual links */}
          <a href="https://github.com/akashh7777" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/akash-h-" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:akashh.dev.work@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
