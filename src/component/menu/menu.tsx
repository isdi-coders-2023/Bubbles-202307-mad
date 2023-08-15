import { Link } from 'react-router-dom';
import { menuOptions } from '../../config';
import style from './menu.module.scss';
export function Menu() {
  return (
    <>
      <nav className={style.nav}>
        <ol className={style.ol}>
          {menuOptions.map((item) => (
            <Link to={item.path}>
              <li key={item.label} className={style.li}>
                {/* <a href="#" className={style.a}>
                  {item.label}
                </a> */}
                {/* <Link to={item.path}>{item.label}</Link> */}
              </li>
            </Link>
          ))}
        </ol>
      </nav>
    </>
  );
}
