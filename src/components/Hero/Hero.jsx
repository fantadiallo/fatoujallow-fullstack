import styles from "./Hero.module.scss";
import { useI18n } from "../../i18n/I18nProvider";

/**
 * Hero component displaying the introduction section of the portfolio.
 * Includes profile card, social links, greeting, role, location, tagline, and core skills.
 *
 * @component
 * @returns {JSX.Element} Hero section with profile and core information.
 */
export default function Hero() {
  const { t } = useI18n();

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.profileCard}>
            <img className={styles.photo} src="./fatouPhoto.jpg" alt={t.name} />
            <h1 id="hero-heading" className={styles.name}>{t.name}</h1>

            <div className={styles.socials}>
              <a
                className={`${styles.socialBtn} ${styles.github}`}
                href="https://github.com/fantadiallo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58l-.01-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.8.42-1.32.77-1.62-2.67-.31-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.69.24 2.94.12 3.25.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.94.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z"/>
                </svg>
              </a>
              <a
                className={`${styles.socialBtn} ${styles.linkedin}`}
                href="https://www.linkedin.com/in/fatou-jallow-540303377"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h4v1.8h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.06 2.81 5.06 6.46V21h-4v-5.38c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21H9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.greeting}>{t.greeting}</p>
          <p className={styles.role}>{t.role}</p>
          <p className={styles.meta}>{t.location}</p>
          <p className={styles.tagline}>{t.tagline}</p>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Core skills</h2>
            <ul className={styles.badges} aria-label="Core skills">
              {t.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
