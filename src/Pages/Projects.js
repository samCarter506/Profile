import "./Projects.css";
import { portfolioData } from "./portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>

      <div className="project-grid">
        {portfolioData.projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
              )}
          {project.API !== "#" && (
                <a
                  href={project.API}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  API
                </a>
              )}
              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-btn"
                >
                Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}