import { createContext, useContext, useEffect, useState } from "react";

const ThemeCtx = createContext();

/**
 * ThemeProvider component for managing light/dark theme state.
 * Uses React Context to provide the current theme and a setter function.
 * Persists theme in localStorage and applies it to the <html> element
 * via `data-theme` attribute for CSS-based theming.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components that will consume the theme context.
 * @returns {JSX.Element} Context provider wrapping children with theme state.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  );
}

/**
 * Hook to access the theme context.
 * Provides current theme ("light" or "dark") and setter function.
 *
 * @returns {{ theme: string, setTheme: Function }}
 */
export function useTheme() {
  return useContext(ThemeCtx);
}
