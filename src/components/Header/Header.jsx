import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import styles from "./Header.module.scss";

/**
 * Header component for the portfolio site.
 * Displays brand identity, theme toggle, and language switcher.
 *
 * Features:
 * - Theme toggle (dark/light) stored in localStorage and applied via `data-theme`.
 * - Language toggle using I18n context (`en` / `no`).
 *
 * @component
 * @returns {JSX.Element} Header with brand, theme switch, and language switch.
 */
function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const { lang, setLang } = useI18n();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>Fatou Jallow Mboge</span>
          <p className={styles.subtitle}>Software Developer</p>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.toggle}
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            className={styles.toggle}
            onClick={() => setLang((l) => (l === "en" ? "no" : "en"))}
          >
            {lang === "en" ? "NO" : "EN"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
