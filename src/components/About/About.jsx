import { useI18n } from '../../i18n/I18nProvider';
import styles from './About.module.scss';

export default function About() {
  const { t } = useI18n();

  return (
    <div className={styles.about}>
      <p>{t.about}</p>
      <p>Contact: +47 94464132</p>
      <p>
        Email:{' '}
        <a className={styles.link} href="mailto:fatmbo0003@outlook.com">
          fatmbo0003@outlook.com
        </a>
      </p>
    </div>
  );
}
