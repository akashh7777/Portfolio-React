// SkillCard — displays a single skill with an icon and name
// Props:
//   icon    — emoji icon for the skill
//   name    — name of the skill
function SkillCard({ icon, name }) {
  return (
    <div className="glass-card skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  )
}

export default SkillCard
