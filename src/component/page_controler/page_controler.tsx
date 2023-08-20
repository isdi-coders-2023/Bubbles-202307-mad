import { useContext } from 'react';
import { AppContext } from '../../context/app_context';
import styles from './page_controler.module.scss';
export function PageControler() {
  const {
    countriesContext: { nextPage, currentPage, totalPages, previousPage },
  } = useContext(AppContext);

  return (
    <div className={styles.buttonBox}>
      {currentPage !== 1 && (
        <button onClick={previousPage} className={styles.previousButton}>
          PREVIOUS
        </button>
      )}
      <span className={styles.span}>
        Page:{currentPage}/{totalPages}
      </span>
      {currentPage !== totalPages && (
        <button onClick={nextPage} className={styles.nextButton}>
          NEXT
        </button>
      )}
    </div>
  );
}
//review
