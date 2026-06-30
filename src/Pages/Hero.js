import "./Hero.css";
import { portfolioData } from "./portfolioData";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I'm <span>{portfolioData.name}</span>
          </h1>

          <h2>{portfolioData.role}</h2>

          <p>{portfolioData.intro}</p>

          <a href="/Samuel_thamae.docx" download>
            <button>Download CV</button>
          </a>
        </div>

        <div className="hero-image">
          <img
            src="/Samuelt.png"
            alt="Samuel Thamae"
          />
        </div>
      </div>
    </section>
  );
}