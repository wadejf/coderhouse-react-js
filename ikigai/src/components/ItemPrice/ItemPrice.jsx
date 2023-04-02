import React from "react";
import styles from "./ItemPrice.module.css";

const ItemPrice = ({ item }) => {
  const formatPrice = (price) => {
    return `$ ${new Intl.NumberFormat("es-AR").format(price)}`;
  };
  return item.discount ? (
    <div>
      <span className={styles.ItemOldPrice}>{formatPrice(item.price)}</span>
      <span className={styles.ItemDiscountedPrice}>
        {formatPrice(item.discountedPrice)}
      </span>
    </div>
  ) : (
    <span className={styles.ItemPrice}>{formatPrice(item.price)}</span>
  );
};

export default ItemPrice;
