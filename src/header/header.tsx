import { Menu } from '../menu/Menu';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.tittle}>countries of the world</h1>
        <img
          className={styles.world}
          src="../../mundo.png"
          alt="Image of the world"
        />
        <Menu></Menu>
      </header>
    </>
  );
};
