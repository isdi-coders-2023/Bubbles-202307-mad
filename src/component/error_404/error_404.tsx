import styles from './error_404.module.scss';
const Error404 = () => {
  return (
    <section className={styles.page}>
      <div className={styles.errorContainer}>
        <h2 className={styles.error}>
          4
          <img
            className={styles.emoti}
            src="../../../emoti.png"
            alt="World emoticon"
          />
          4
        </h2>
        <h2 className={styles.notFound}>Page not found</h2>
      </div>
      <button className={styles.back}>Back to home</button>
      {/* <Link to={}></Link> */}
    </section>
  );
};
export default Error404;
