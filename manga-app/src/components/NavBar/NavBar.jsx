import styles from './NavBar.module.css';
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const NavBar = () => {
  return (
      <div className={styles.NavBar}>
        <Logo/>

        <ul className={styles.NavBarList}>
          <li>Nuevos Lanzamientos</li>
          <li>Categorías</li>
          <li>Promociones</li>
        </ul>
        <CartWidget/>
      </div>
  );
};

export default NavBar;
