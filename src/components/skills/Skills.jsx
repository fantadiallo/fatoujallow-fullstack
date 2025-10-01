import styles from './Skills.module.scss'
import { useI18n } from '../../i18n/I18nProvider';

/**
 * Skills component for displaying categorized technical skills.
 * Uses i18n translations for dynamic rendering of skill lists.
 *
 * Expected translation object structure:
 * t.skillsgeneral = {
 *   frontend: string[],
 *   backend: string[],
 *   testing: string[],
 *   tools: string[],
 *   platforms: string[]
 * }
 *
 * @component
 * @returns {JSX.Element} A section with categorized skills displayed in cards.
 */
export default function Skills() {
  const { t } = useI18n();

  return (
    <section className={styles.skills} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.sectionTitle}>Skills</h2>

      <div className={styles.skillsgeneralGrid}>
        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Frontend</h3>
          <ul className={styles.badges}>
            {t.skillsgeneral.frontend.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Backend</h3>
          <ul className={styles.badges}>
            {t.skillsgeneral.backend.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Testing</h3>
          <ul className={styles.badges}>
            {t.skillsgeneral.testing.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Tools</h3>
          <ul className={styles.badges}>
            {t.skillsgeneral.tools.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>

        <article className={styles.card}>
          <h3 className={styles.cardTitle}>Platforms</h3>
          <ul className={styles.badges}>
            {t.skillsgeneral.platforms.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
