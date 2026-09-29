import { useState } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPaperPlane, FaEraser, FaCheckCircle, FaRedoAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

// Contact page
// useState manages: form field values + form submission state

function Contact() {
  // formData: stores the value of each input field
  // We use one object to hold all three fields together
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // isSubmitted: tracks whether the form has been submitted
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle input changes — updates the correct field in formData
  // 'e.target.name' tells us which field changed (name, email, or message)
  function handleChange(e) {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    // Spread the existing formData and only update the changed field
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault() // Prevents the page from reloading
    // Since there is no backend, we just show a thank you message
    setIsSubmitted(true)
  }

  // Reset the form back to its empty state
  function handleReset() {
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitted(false)
  }

  // Social/contact links — replace these with your real links
  const contactLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/akashh7777',
      href: 'https://github.com/akashh7777',
      gradient: 'linear-gradient(135deg, #333, #6e5494)',
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/akashh',
      href: 'https://www.linkedin.com/in/akash-h-',
      gradient: 'linear-gradient(135deg, #0077B5, #00a0dc)',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'akashh.dev.work@gmail.com',
      href: 'mailto:akashh.dev.work@gmail.com',
      gradient: 'linear-gradient(135deg, #ea4335, #fbbc04)',
    },
  ]

  return (
    <div className="contact-page">
      <div className="container">

        {/* Page heading */}
        <div className="page-hero">
          <h1 className="section-title">Get in Touch</h1>
          <div className="divider"></div>
          <p className="section-subtitle"><br />
            Open to opportunities, collaborations and conversations.
          </p>
        </div>

        {/* Contact section */}
        <section className="contact-section">
          <div className="contact-grid">

            {/* Left: Info and social links */}
            <div className="contact-info">
              <h2>Let&apos;s build something together.</h2>
              <p>
                I am open to opportunities where I can contribute, learn and
                build meaningful software products. Whether it is a full-time
                role, an internship or a project collaboration — feel free to
                reach out.
              </p>

              {/* Quick info badges */}
              <div className="contact-quick-info">
                <span className="contact-badge">
                  <FaMapMarkerAlt /> India
                </span>
                <span className="contact-badge">
                  <FaClock /> Available for work
                </span>
              </div>

              {/* Social / contact links */}
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noreferrer' : undefined}
                    className="glass-card contact-link-item"
                    id={`contact-${link.label.toLowerCase()}`}
                    onClick={(e) => {
                      if (link.label === 'Email') {
                        e.preventDefault()
                        window.location.href = link.href
                      }
                    }}
                  >
                    <span className="link-icon-box" style={{ background: link.gradient }}>
                      {link.icon}
                    </span>
                    <div className="link-info">
                      <span className="link-label">{link.label}</span>
                      <span className="link-value">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Contact form or success message */}
            {isSubmitted ? (
              /* Success state — shown after clicking Send Message */
              <div className="glass-card form-success">
                <div className="success-icon-box">
                  <FaCheckCircle />
                </div>
                <h3>Message Ready to Send!</h3>
                <p>
                  Thank you for reaching out, <strong>{formData.name}</strong>!
                  Your message is ready. Since this is a frontend demo,
                  the message hasn&apos;t been sent — but feel free to connect
                  via the links on the left.
                </p>
                {/* Reset button — clears the form so you can write again */}
                <button
                  className="btn btn-secondary"
                  onClick={handleReset}
                  id="form-reset-btn"
                >
                  <FaRedoAlt /> Send Another Message
                </button>
              </div>
            ) : (
              /* Default state — the form */
              <form
                className="glass-card contact-form"
                onSubmit={handleSubmit}
                id="contact-form"
              >
                <h3 className="form-heading">Send a Message</h3>

                {/* Name field */}
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Rahul Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message field */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hi Akash, I wanted to reach out about..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Form actions */}
                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="form-submit-btn"
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                    id="form-clear-btn"
                  >
                    <FaEraser /> Clear
                  </button>
                </div>

              </form>
            )}

          </div>
        </section>

      </div>
    </div>
  )
}

export default Contact
