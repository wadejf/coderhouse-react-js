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
          Novedades
        </Link>
        <Link to="/category/todos" className={styles.NavBarListItem}>
          Todos
        </Link>
        <Link to="/category/promociones" className={styles.NavBarListItem}>
          Promociones
        </Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
