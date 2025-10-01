import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Resume from "../../components/Resume/Resume";
import Skills from "../../components/skills/Skills";

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
