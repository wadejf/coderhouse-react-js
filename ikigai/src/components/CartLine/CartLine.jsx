import React from "react";
import styles from "./CartLine.module.css";

const CartLine = ({ item, quantity, totalPrice }) => {
  return (
    <div className={styles.CartLineContainer}>
      <div className={styles.CartLineImageContainer}>
        <img src={item.img} alt="img" className={styles.CartLineImage} />
      </div>
      <div className={styles.CartLineTitleContainer}>{item.title}</div>
      <div className={styles.CartLineUnitaryPriceContainer}>$ {item.price}</div>
      <div className={styles.CartLineQuantityContainer}>{quantity}</div>
      <div className={styles.CartLineTotalPriceContainer}>$ {totalPrice}</div>
    </div>
  );
};

export default CartLine;
