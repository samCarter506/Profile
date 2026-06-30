import './Hero.css'
import { portfolioData } from "./portfolioData";

export default function Hero() {
  return (
    <section className="hero">

      <h1>
        Hi, I'm <span>{portfolioData.name}</span>
      </h1>

      <h2>{portfolioData.role}</h2>

      <p>{portfolioData.intro}</p>

      <button>Download CV</button>

    </section>
  );
}