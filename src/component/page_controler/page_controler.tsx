import styles from './page_controler.module.scss';
export function PageControler() {
  return (
    <div className={styles.buttonBox}>
      <button className={styles.previousButton}>PREVIOUS</button>
      <span className={styles.span}>20/50</span>
      <button className={styles.nextButton}>NEXT</button>
    </div>
  );
}
//review
