import React from "react";
import styles from './ItemList.module.css';
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items }) => {
  return (
    <div className={styles.ItemList}>
        {items.map((element) => {
          return <ItemCard key={element.id} item={element} />;
        })}
    </div>
  );
};

export default ItemList;
