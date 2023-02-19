import styles from './NavBar.module.css';
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavBar}>
      <img
        src="../../assets/images/icon.png"
        alt=""
        style={{ width: "10%", objectFit: "cover" }}
      />


      <ul className={styles.containerList}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
        <CartWidget />
    </div>
  );
};

export default Navbar;
