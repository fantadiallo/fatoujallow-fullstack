import { createContext, useContext, useMemo, useState, useEffect } from "react";
import en from "./en.json";
import no from "./no.json";

const I18nCtx = createContext();

/**
 * I18nProvider component for handling internationalization.
 * Provides current language, language switcher, and translation object
 * to the rest of the application via React Context.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components that will consume the i18n context.
 * @returns {JSX.Element} Context provider wrapping children with i18n state.
 */
export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => (lang === "no" ? no : en), [lang]);

  return (
    <I18nCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nCtx.Provider>
  );
}

/**
 * Hook to access the i18n context.
 * Provides current language, language setter, and translations.
 *
 * @returns {{ lang: string, setLang: Function, t: Object }}
 */
export function useI18n() {
  return useContext(I18nCtx);
}
