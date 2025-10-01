import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.scss";

/**
 * Layout component that provides a consistent page structure
 * with a header, main content area, and footer.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to be rendered inside the main area.
 * @returns {JSX.Element} The page layout wrapper.
 */
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
