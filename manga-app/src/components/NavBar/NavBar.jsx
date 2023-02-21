import styles from './NavBar.module.css';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
      <div className={styles.NavBar}>
        <Logo/>

        <ul className={styles.NavBarList}>
          <li className={styles.NavBarListItem}>Nuevos Lanzamientos</li>
          <li className={styles.NavBarListItem}>Categorías</li>
          <li className={styles.NavBarListItem}>Promociones</li>
        </ul>
        <CartWidget/>
      </div>
  );
};

export default NavBar;
