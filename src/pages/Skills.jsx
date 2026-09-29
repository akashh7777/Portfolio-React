import { useState } from "react";
import SkillCard from "../components/SkillCard";

// react-icons — realistic brand & technology icons
import {
  SiJavascript,
  SiPython,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiSupabase,
  SiFirebase,
  SiTensorflow,
  SiOpencv,
  SiOllama,
  SiGit,
  SiGithub,
  SiVercel,
  SiLinux,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaComments,
  FaBookOpen,
  FaPlug,
  FaCode,
  FaPalette,
  FaCogs,
  FaMicrochip,
  FaWrench,
  FaRocket,
  FaLightbulb,
  FaLayerGroup,
  FaCubes,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

const skillCategories = {
  programming: {
    label: "Programming",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "Python", icon: <SiPython color="#3776AB" /> },
      { name: "C", icon: <SiC color="#A8B9CC" /> },
      { name: "Java", icon: <FaJava color="#ED8B00" /> },
    ],
  },
  frontend: {
    label: "Frontend",
    icon: <FaPalette />,
    skills: [
      { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <SiCss color="#1572B6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "React.js", icon: <SiReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    ],
  },
  backend: {
    label: "Backend",
    icon: <FaCogs />,
    skills: [
      { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      { name: "REST APIs", icon: <FaPlug color="#4FC08D" /> },
      { name: "SQL", icon: <FaDatabase color="#336791" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
  aiml: {
    label: "AI / ML",
    icon: <FaMicrochip />,
    skills: [
      { name: "Machine Learning", icon: <FaBrain color="#FF6F61" /> },
      { name: "Artificial Intelligence", icon: <FaRobot color="#A78BFA" /> },
      { name: "TensorFlow/Keras", icon: <SiTensorflow color="#FF6F00" /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
      { name: "LLMs", icon: <FaComments color="#10B981" /> },
      { name: "RAG", icon: <FaBookOpen color="#F59E0B" /> },
      { name: "Ollama", icon: <SiOllama /> },
    ],
  },
  tools: {
    label: "Tools",
    icon: <FaWrench />,
    skills: [
      { name: "Git", icon: <SiGit color="#F05032" /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Linux CLI", icon: <SiLinux color="#FCC624" /> },
    ],
  },
};

// Currently exploring / learning topics
const exploringTopics = [
  {
    icon: <FaRobot color="#A78BFA" />,
    label: "AI Agents & Autonomous Systems",
  },
  { icon: <SiNextdotjs />, label: "Advanced Next.js Patterns" },
  {
    icon: <FaBrain color="#FF6F61" />,
    label: "Deep Learning & Neural Networks",
  },
  {
    icon: <FaProjectDiagram color="#22d3ee" />,
    label: "System Design & Architecture",
  },
  { icon: <SiTensorflow color="#FF6F00" />, label: "MLOps & Model Deployment" },
  { icon: <FaCubes color="#4FC08D" />, label: "Microservices & Docker" },
];

// My Approach — philosophy cards
const approachCards = [
  {
    icon: <FaLightbulb />,
    title: "Learn by Building",
    description:
      "I believe the best way to learn any technology is to build real projects with it. Every project teaches something new.",
    gradient: "linear-gradient(135deg, #f97316, #eab308)",
  },
  {
    icon: <FaLayerGroup />,
    title: "Full Stack Mindset",
    description:
      "From designing user interfaces to building APIs and databases — I enjoy working across the entire stack.",
    gradient: "linear-gradient(135deg, #4f8ef7, #8b5cf6)",
  },
  {
    icon: <FaRocket />,
    title: "Stay Ahead of the Curve",
    description:
      "Technology evolves fast. I actively explore AI, LLMs and emerging tools to stay relevant and deliver modern solutions.",
    gradient: "linear-gradient(135deg, #22d3ee, #06b6d4)",
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const currentSkills = skillCategories[activeCategory].skills;

  const totalSkills = new Set(
    Object.values(skillCategories).flatMap((cat) =>
      cat.skills.map((s) => s.name),
    ),
  ).size;

  return (
    <div className="skills-page">
      <div className="container">
        {/* Page heading */}
        <div className="page-hero">
          <h1 className="section-title">My Skills</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            <br />
            Technologies and tools I work with.
          </p>
        </div>

        {/* ── Stats bar ── */}
        <div className="skills-stats-bar">
          <div className="skills-stat">
            <span className="stat-number">{totalSkills}+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stats-divider"></div>
          <div className="skills-stat">
            <span className="stat-number">
              {Object.keys(skillCategories).length}
            </span>
            <span className="stat-label">Categories</span>
          </div>
          <div className="stats-divider"></div>
          <div className="skills-stat">
            <span className="stat-number">4+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stats-divider"></div>
          <div className="skills-stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">Curiosity</span>
          </div>
        </div>

        {/* Skills section */}
        <section className="skills-section">
          {/* Category filter buttons */}
          <div className="skills-category-btns">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? "active" : ""}`}
                onClick={() => setActiveCategory(key)}
                id={`category-${key}`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Skills grid — renders the skills for the selected category */}
          <div className="skills-grid">
            {currentSkills.map((skill) => (
              // SkillCard receives icon and name as props
              <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </section>

        {/* ── Currently Exploring ── */}
        <section className="exploring-section">
          <h2 className="section-title-sm">
            <FaGraduationCap /> Currently Exploring
          </h2>
          <p className="exploring-subtitle">
            Technologies and concepts I am actively learning and experimenting
            with.
          </p>
          <div className="exploring-grid">
            {exploringTopics.map((topic) => (
              <div key={topic.label} className="glass-card exploring-card">
                <span className="exploring-icon">{topic.icon}</span>
                <span className="exploring-label">{topic.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── My Approach ── */}
        <section className="approach-section">
          <h2 className="section-title-sm">
            <FaLightbulb /> My Approach
          </h2>
          <p className="approach-subtitle">
            How I think about learning and building software.
          </p>
          <div className="approach-grid">
            {approachCards.map((card) => (
              <div key={card.title} className="glass-card approach-card">
                <div
                  className="approach-icon-box"
                  style={{ background: card.gradient }}
                >
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
