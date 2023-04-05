import React from "react";
import styles from "./ItemCard.module.css";
import AddToCartWidget from "../AddToCartWidget/AddToCartWidget";
import ItemPrice from "../ItemPrice/ItemPrice";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className={styles.ItemCardContainer}>
      <Link to={`/item/${item.id}`}>
        <img
          alt="item"
          src={item.img}
          className={
            item.stock > 0
              ? styles.ItemCardImage
              : styles.ItemCardImageWithoutStock
          }
        />
      </Link>
      <span className={styles.ItemCardTitle}>{item.title}</span>
      <ItemPrice item={item} />
      <AddToCartWidget item={item} />
    </div>
  );
};

export default ItemCard;
