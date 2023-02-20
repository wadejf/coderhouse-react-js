import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from './CartWidget.module.css';

const CartWidget = () => {
  return (
      <div className={styles.CartIcon}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCartIcon/>
        </Badge>
      </div>
  );
};

export default CartWidget;
