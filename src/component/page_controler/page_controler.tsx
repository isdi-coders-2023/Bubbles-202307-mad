import { useContext } from 'react';
import { AppContext } from '../../context/app_context';
import styles from './page_controler.module.scss';
export function PageControler() {
  const {
    countriesContext: { nextPage, currentPage, totalPages, previousPage },
  } = useContext(AppContext);

  return (
    <div className={styles.buttonBox}>
      <button onClick={previousPage} className={styles.previousButton}>
        PREVIOUS
      </button>
      <span className={styles.span}>
        Page:{currentPage}/{totalPages}
      </span>
      <button onClick={nextPage} className={styles.nextButton}>
        NEXT
      </button>
    </div>
  );
}
//review
