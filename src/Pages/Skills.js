import { portfolioData } from "./portfolioData";
import './Skills.css'

export default function Skills() {
  return (
   <section id="skills" className="skills">

      <h2>Skills</h2>

      <div className="skills-grid">
        {portfolioData.skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>

    </section>
  );
}