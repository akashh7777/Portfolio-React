// ProjectCard — new design matching reference screenshot
// Props: icon, iconGradient, category, title, tagline, summary, featureTags, techStack, note, githubUrl, liveUrl

function ProjectCard({ icon, iconGradient, category, title, tagline, summary, featureTags, techStack, note, githubUrl, liveUrl }) {
  return (
    <div className="project-card-new glass-card">

      {/* ── Header: icon + category + title + tagline ── */}
      <div className="pcn-header">
        {/* Coloured icon box */}
        <div className="pcn-icon" style={{ background: iconGradient }}>
          <span>{icon}</span>
        </div>

        {/* Meta */}
        <div className="pcn-meta">
          <span className="pcn-category">{category}</span>
          <h2 className="pcn-title">{title}</h2>
          <span className="pcn-tagline">{tagline}</span>
        </div>
      </div>

      {/* ── Summary ── */}
      <p className="pcn-summary">{summary}</p>

      {/* ── Feature tags (with emoji icons) ── */}
      <div className="pcn-feature-tags">
        {featureTags.map((f) => (
          <span key={f.label} className="pcn-feature-tag">
            <span className="pcn-tag-icon">{f.icon}</span>
            {f.label}
          </span>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="pcn-divider"></div>

      {/* ── Tech stack ── */}
      <div className="pcn-tech-stack">
        {techStack.map((tech) => (
          <span key={tech} className="pcn-tech-pill">{tech}</span>
        ))}
      </div>

      {/* ── Optional note ── */}
      {note && (
        <div className="pcn-note">
          <strong>Note: </strong>{note}
        </div>
      )}

      {/* ── Links row (GitHub + Live Demo) ── */}
      {(githubUrl || liveUrl) && (
        <div className="pcn-links">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pcn-github-link"
              id={`github-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span>🐙</span> GitHub ↗
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="pcn-live-link"
              id={`live-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <span>🚀</span> Live Demo ↗
            </a>
          )}
        </div>
      )}

    </div>
  )
}

export default ProjectCard
