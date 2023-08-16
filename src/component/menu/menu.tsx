import { Link } from 'react-router-dom';
import { menuOptions } from '../../config';
import style from './menu.module.scss';
export function Menu() {
  return (
    <>
      <nav className={style.nav}>
        <ol className={style.ol}>
          {menuOptions.map((item) => (
            <li key={item.label} className={style.li}>
              <Link className={style.link} to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
