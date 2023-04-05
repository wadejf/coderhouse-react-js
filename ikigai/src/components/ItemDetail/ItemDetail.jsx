import React from "react";
import styles from "./ItemDetail.module.css";
import ItemPrice from "../ItemPrice/ItemPrice";
import AddToCartWidget from "../AddToCartWidget/AddToCartWidget";

const ItemDetail = ({ item }) => {
  return (
    <div className={styles.ItemDetailContainer}>
      <div className={styles.ItemDetailImageContainer}>
        <img src={item.img} alt={item.title} className={styles.ItemDetailImg} />
      </div>
      <div className={styles.ItemDetailContentContainer}>
        <div className={styles.ItemDetailTitleContainer}>
          <span className={styles.ItemDetailTitle}>{item.title}</span>
        </div>
        <div className={styles.ItemDetailDescriptionContainer}>
          <span className={styles.ItemDetailDescription}>
            {item.description}
          </span>
        </div>
        <div className={styles.ItemDetailPriceContainer}>
          <ItemPrice item={item} />
        </div>
        <div className={styles.ItemDetailAddToCartContainer}>
          <AddToCartWidget item={item} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
