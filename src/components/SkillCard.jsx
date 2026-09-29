function SkillCard({ icon, name }) {
  return (
    <div className="glass-card skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  );
}

export default SkillCard;
