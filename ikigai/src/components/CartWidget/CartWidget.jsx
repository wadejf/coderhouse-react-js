import { MdOutlineShoppingCart } from 'react-icons/md';
import styles from './CartWidget.module.css';

const CartWidget = () => {
  return (
      <div className={styles.CartIcon}>
          <MdOutlineShoppingCart size={30}/>
      </div>
  );
};

export default CartWidget;
