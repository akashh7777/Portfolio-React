import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  icon,
  iconGradient,
  number,
  category,
  title,
  tagline,
  summary,
  featureTags,
  techStack,
  note,
  githubUrl,
  liveUrl,
}) {
  return (
    <div className="project-card-new glass-card">
      {/* ── Project number badge ── */}
      <span className="pcn-number">{number}</span>

      {/* ── Header: icon + category + title + tagline ── */}
      <div className="pcn-header">
        {/* Coloured icon box */}
        <div className="pcn-icon" style={{ background: iconGradient }}>
          {icon}
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

      {/* ── Feature tags (with SVG icons) ── */}
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
          <span key={tech} className="pcn-tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* ── Optional note ── */}
      {note && (
        <div className="pcn-note">
          <strong>Note: </strong>
          {note}
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
              id={`github-link-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <FaGithub /> GitHub <FaExternalLinkAlt size={10} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="pcn-live-link"
              id={`live-link-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
