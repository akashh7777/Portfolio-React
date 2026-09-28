import { useState } from 'react'
import SkillCard from '../components/SkillCard'

// Skills page
// useState controls which category is selected

// All skills organized by category
// Each skill has: name and emoji icon
const skillCategories = {
  programming: {
    label: 'Programming',
    icon: '🖥️',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'C', icon: '©️' },
      { name: 'Java', icon: '☕' },
    ],
  },
  frontend: {
    label: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '✨' },
      { name: 'React.js', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '💨' },
    ],
  },
  backend: {
    label: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', icon: '🐘' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'Supabase', icon: '⚡' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  aiml: {
    label: 'AI / ML',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'Artificial Intelligence', icon: '🤖' },
      { name: 'TensorFlow/Keras', icon: '🔬' },
      { name: 'OpenCV', icon: '👁️' },
      { name: 'LLMs', icon: '💬' },
      { name: 'RAG', icon: '📚' },
      { name: 'Ollama', icon: '🦙' },
    ],
  },
  tools: {
    label: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: '🔀' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Linux CLI', icon: '🐧' },
    ],
  },
}

function Skills() {
  // activeCategory: which skill category tab is selected
  const [activeCategory, setActiveCategory] = useState('programming')

  // The skills to display based on activeCategory
  const currentSkills = skillCategories[activeCategory].skills

  return (
    <div className="skills-page">
      <div className="container">

        {/* Page heading */}
        <div className="page-hero">
          <h1 className="section-title">My Skills</h1>
          <div className="divider"></div>
          <p className="section-subtitle">
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skills section */}
        <section className="skills-section">

          {/* Category filter buttons */}
          <div className="skills-category-btns">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
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
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>

        </section>
      </div>
    </div>
  )
}

export default Skills
