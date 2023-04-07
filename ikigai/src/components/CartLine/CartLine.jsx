import React from "react";
import styles from "./CartLine.module.css";

const CartLine = ({ item, quantity, totalPrice }) => {
  const formatPrice = (price) => {
    return `$ ${new Intl.NumberFormat("es-AR").format(price)}`;
  };

  return (
    <div className={styles.CartLineContainer}>
      <div className={styles.CartLineImageContainer}>
        <img src={item.img} alt="img" className={styles.CartLineImage} />
      </div>
      <div className={styles.CartLineTitleContainer}>{item.title}</div>
      { item.discount ? (
        <div className={styles.CartLineUnitaryPriceContainer}>
          {formatPrice(item.discountedPrice)}
        </div>
      ) : (
        <div className={styles.CartLineUnitaryPriceContainer}>
          {formatPrice(item.price)}
        </div>
      ) }
      <div className={styles.CartLineQuantityContainer}>{quantity}</div>
      <div className={styles.CartLineTotalPriceContainer}>{formatPrice(totalPrice)}</div>
    </div>
  );
};

export default CartLine;
