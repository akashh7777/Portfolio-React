import ProjectCard from '../components/ProjectCard'

// react-icons — realistic icons for project cards
import {
  FaRobot, FaComments, FaMicrophone, FaShieldAlt, FaBrain, FaMobileAlt,
  FaGlobeAmericas, FaSearch, FaBolt, FaGlobe, FaMapMarkedAlt,
  FaUsers, FaUserPlus, FaEdit, FaTrashAlt, FaSave, FaIdCard,
  FaRocket, FaPaintBrush, FaMoon, FaLayerGroup, FaStar,
} from 'react-icons/fa'

// Projects page — two-column card grid matching reference design

const projects = [
  {
    number: '01',
    icon: <FaRobot />,
    iconGradient: 'linear-gradient(135deg, #4f8ef7, #8b5cf6)',
    category: 'Full Stack AI Application · 2025',
    title: 'AI Chatbot Supporting Mental Health',
    tagline: 'AI Mental Health Support Chatbot',
    summary:
      'An AI-powered mental health support chatbot designed to provide supportive and empathetic interactions ' +
      'while helping users understand and track their mood. The project features a personalized dashboard, ' +
      'breathing exercises, music recommendations and voice interaction capabilities.',
    featureTags: [
      { icon: <FaComments />, label: 'Real-time AI chat' },
      { icon: <FaMicrophone />, label: 'Voice interaction' },
      { icon: <FaShieldAlt />, label: 'Secure auth' },
      { icon: <FaBrain />, label: 'LLM fine-tuning' },
      { icon: <FaMobileAlt />, label: 'Responsive UI' },
    ],
    techStack: ['Next.js', 'Node.js', 'TypeScript', 'Supabase', 'Ollama LLM', 'JavaScript'],
    note:
      'The chatbot was initially developed using the Gemini API and later integrated with a locally hosted ' +
      'Ollama-based LLM, customized to deliver supportive and empathetic AI responses.',
  },
  {
    number: '02',
    icon: <FaGlobeAmericas />,
    iconGradient: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
    category: 'Frontend Web Application · 2024',
    title: 'Country Explorer',
    tagline: 'Async/Await REST Countries API Explorer',
    summary:
      'An interactive web application that fetches and displays detailed information about countries ' +
      'around the world using the REST Countries API. Built with a focus on modern JavaScript async/await ' +
      'patterns, dynamic DOM manipulation and a clean, responsive user interface.',
    featureTags: [
      { icon: <FaSearch />, label: 'Country search' },
      { icon: <FaBolt />, label: 'Async / Await' },
      { icon: <FaGlobe />, label: 'REST Countries API' },
      { icon: <FaMapMarkedAlt />, label: 'Region filtering' },
      { icon: <FaMobileAlt />, label: 'Responsive UI' },
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Async/Await', 'DOM Manipulation'],
    githubUrl: 'https://github.com/akashh7777/Country-Explorer---AsyncAwait',
    liveUrl: 'https://akashh7777.github.io/Country-Explorer---AsyncAwait/',  
    note: null,
  },
  {
    number: '03',
    icon: <FaUsers />,
    iconGradient: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
    category: 'Frontend Web Application · 2024',
    title: 'TeamHub — Staff Directory',
    tagline: 'LocalStorage-Powered Employee Management System',
    summary:
      'A fully functional staff directory and employee profile manager built with vanilla JavaScript. ' +
      'Allows teams to add, view, edit and delete employee records — including name, staff code, email, ' +
      'contact number, department, job role, salary and joining date — all persisted via the browser\'s localStorage API.',
    featureTags: [
      { icon: <FaUserPlus />, label: 'Add team members' },
      { icon: <FaEdit />, label: 'Edit profiles' },
      { icon: <FaTrashAlt />, label: 'Delete records' },
      { icon: <FaSave />, label: 'localStorage persist' },
      { icon: <FaIdCard />, label: 'Employee profile cards' },
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'localStorage API', 'DOM Manipulation'],
    githubUrl: 'https://github.com/akashh7777/Local-Storage---CRUD',
    liveUrl: 'https://akashh7777.github.io/Local-Storage---CRUD/',
    note: null,
  },
  {
    number: '04',
    icon: <FaRocket />,
    iconGradient: 'linear-gradient(135deg, #f97316, #eab308)',
    category: 'Frontend · Animated Landing Page · 2024',
    title: 'PowerBite 24',
    tagline: 'Futuristic Energy Burger Product Showcase',
    summary:
      'A visually rich, fully animated product landing page for PowerBite 24 — a fictional futuristic energy burger ' +
      'engineered for 24 hours of sustained energy. Features a dark sci-fi aesthetic with glowing effects, ' +
      'CSS animations, feature cards, customer testimonials, a nutritional stats section and a fully responsive layout — built with pure HTML and CSS.',
    featureTags: [
      { icon: <FaPaintBrush />, label: 'CSS animations' },
      { icon: <FaMoon />, label: 'Dark futuristic theme' },
      { icon: <FaLayerGroup />, label: 'Feature cards' },
      { icon: <FaStar />, label: 'Testimonials' },
      { icon: <FaMobileAlt />, label: 'Fully responsive' },
    ],
    techStack: ['HTML', 'CSS', 'CSS Animations', 'Glassmorphism', 'Responsive Design'],
    githubUrl: 'https://github.com/akashh7777/PowerBite-24-HTML-CSS-Animation',
    liveUrl: 'https://akashh7777.github.io/PowerBite-24-HTML-CSS-Animation/',
    note: null,
  },
]

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">

        {/* Page heading */}
        <div className="page-hero">
          <h1 className="section-title">Featured Projects</h1>
          <div className="divider"></div>
          <p className="section-subtitle"><br />
            Practical software projects I have built — combining Full Stack Development and AI.
          </p>
        </div>

        {/* Projects grid */}
        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default Projects
