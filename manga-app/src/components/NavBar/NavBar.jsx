import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Link to="/">
        <Logo />
      </Link>

      <ul className={styles.NavBarList}>
        <Link to="/" className={styles.NavBarListItem}>
          Nuevos Lanzamientos
        </Link>
        <Link to="/category/todos" className={styles.NavBarListItem}>
          Todos
        </Link>
        <Link to="/category/promociones" className={styles.NavBarListItem}>
          Promociones
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
