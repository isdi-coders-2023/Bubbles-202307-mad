import { Link } from 'react-router-dom';
import { menuOptions } from '../config';

export function Menu() {
  return (
    <>
      <nav>
        <ol>
          {menuOptions.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
