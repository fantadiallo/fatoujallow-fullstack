import { useEffect, useState } from "react";
import styles from "./Resume.module.scss";
import { useI18n } from "../../i18n/I18nProvider";

/**
 * Resume component with tabbed sections for work/projects and education.
 * Includes a slider-style interface and project cards with expandable details.
 * @returns {JSX.Element}
 */
export default function Resume() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);

  const tabs = [
    { id: "work", label: "Work / Projects (CV)" },
    { id: "education", label: "Education" },
  ];

  return (
    <section className={styles.resume} aria-labelledby="resume-heading">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="resume-heading" className={styles.title}>Resume</h2>

          <div className={styles.tabs} role="tablist" aria-label="Resume sections">
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={index === i}
                aria-controls={`panel-${tab.id}`}
                className={`${styles.tab} ${index === i ? styles.active : ""}`}
                onClick={() => setIndex(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
            <div
              id="panel-work"
              role="tabpanel"
              aria-labelledby="tab-work"
              className={styles.slide}
              tabIndex={0}
            >
              <div className={styles.grid}>
                <ProjectCard
                  featured
                  collapseOnMobile
                  title={t.resume?.work?.title || "Yafato — Work (CV)"}
                  summary={t.resume?.work?.summary}
                  stack={t.resume?.work?.stack}
                  liveHref={t.resume?.work?.live}
                  repoHref={t.resume?.work?.repo}
                  details={t.resume?.work?.details}
                />

                <ProjectCard
                  collapseOnMobile
                  title={t.resume?.project2?.title || "Project 2"}
                  summary={t.resume?.project2?.summary}
                  stack={t.resume?.project2?.stack}
                  repoHref={t.resume?.project2?.repo}
                  details={t.resume?.project2?.details}
                />

                <article className={styles.cvCard}>
                  <h3 className={styles.cardHeading}>Curriculum Vitae</h3>
                  <a
                    className={`${styles.btn} ${styles.primary}`}
                    href="/assets/Fatou-Jallow-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open CV (PDF)
                  </a>
                </article>
              </div>
            </div>

            <div
              id="panel-education"
              role="tabpanel"
              aria-labelledby="tab-education"
              className={styles.slide}
              tabIndex={0}
            >
              <div className={styles.timelineWrap}>
                <ul className={styles.timeline}>
                  {(t.resume?.education?.items ?? [
                    {
                      school: t.resume?.education?.school || "Noroff School of Technology and Digital Media",
                      degree: t.resume?.education?.degree,
                      focus: t.resume?.education?.focus,
                      period: t.resume?.education?.period || "2023 – 2025",
                    },
                  ]).map((ed, i) => (
                    <li key={`${ed.school}-${i}`}>
                      <div className={styles.dot} />
                      <div>
                        <strong>{ed.school}</strong>
                        {ed.period && <span className={styles.dim}> {ed.period}</span>}
                        {ed.degree && <div className={styles.sub}>{ed.degree}</div>}
                        {ed.focus && <p className={styles.muted}>{ed.focus}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dots}>
          {tabs.map((_, i) => (
            <button
              key={i}
              className={`${styles.dotBtn} ${index === i ? styles.dotActive : ""}`}
              aria-label={`Go to ${tabs[i].label}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Project card component used in Resume.
 * Displays project information with optional repo and live links.
 * @param {Object} props
 * @param {string} props.title - Project title
 * @param {string} [props.summary] - Short project summary
 * @param {string[]} [props.stack] - Tech stack used
 * @param {string[]} [props.details] - Additional project details
 * @param {string} [props.liveHref] - Link to live demo
 * @param {string} [props.repoHref] - Link to repository
 * @param {boolean} [props.featured=false] - Whether the card is featured
 * @param {boolean} [props.collapseOnMobile=false] - Collapse details on mobile
 * @returns {JSX.Element}
 */
function ProjectCard({
  title,
  summary,
  stack = [],
  details = [],
  liveHref,
  repoHref,
  featured = false,
  collapseOnMobile = false,
}) {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 779px)");
    const update = () => setIsNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (featured && !isNarrow) setOpen(true);
    if (collapseOnMobile && isNarrow) setOpen(false);
  }, [featured, collapseOnMobile, isNarrow]);

  const isCollapsedMobile = collapseOnMobile && isNarrow && !open;
  const visibleStack = (!open && isCollapsedMobile) ? stack.slice(0, 6) : stack;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.cardHeading}>{title}</h3>

        <div className={styles.actions}>
          {repoHref && (
            <a
              className={`${styles.btn} ${styles.outline}`}
              href={repoHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
          )}
          {liveHref && (
            <a
              className={`${styles.btn} ${styles.primary}`}
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site
            </a>
          )}
        </div>
      </div>

      {summary && (
        <p className={`${styles.summary} ${!open && isCollapsedMobile ? styles.summaryClamp : ""}`}>
          {summary}
        </p>
      )}

      {visibleStack?.length > 0 && (
        <ul className={styles.stack}>
          {visibleStack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}

      {details?.length > 0 && (
        <>
          <button
            className={styles.readMore}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Read less" : "Read more"}
          </button>

          {open && (
            <ul className={styles.details}>
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </article>
  );
}
