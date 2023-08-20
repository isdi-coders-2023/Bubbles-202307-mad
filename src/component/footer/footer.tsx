import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.phrase}>Around the World</span>
      <img
        className={styles.logo}
        src="../../globe.webp"
        alt="logo color explosion"
      />
    </footer>
  );
}
