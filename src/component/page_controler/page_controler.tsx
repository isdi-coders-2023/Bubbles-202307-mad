import { useContext } from 'react';
import { AppContext } from '../../context/app_context';
import styles from './page_controler.module.scss';
export function PageControler() {
  const {
    countriesContext: { nextPage },
  } = useContext(AppContext);
  return (
    <div className={styles.buttonBox}>
      <button className={styles.previousButton}>PREVIOUS</button>
      <span className={styles.span}>20/50</span>
      <button onClick={nextPage} className={styles.nextButton}>
        NEXT
      </button>
    </div>
  );
}
//review
