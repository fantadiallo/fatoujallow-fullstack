import React from "react";
import About from "../../components/About/About.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Skills from "../../components/skills/Skills.jsx";
import Resume from "../../components/resume/Resume.jsx";

/**
 * HomePage component representing the main landing page of the portfolio.
 * Displays the Hero section, About, Skills, and Resume in sequence.
 *
 * @component
 * @returns {JSX.Element} The homepage structure with key portfolio sections.
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Resume />
    </main>
  );
}
