import React from "react";
import styles from './ItemList.module.css';
import Item from "../Item/Item";

const ItemList = ({ items, totalPages }) => {
  return (
    <div className={styles.ItemList}>
        {items.map((element) => {
          return <Item key={element.id} element={element} />;
        })}
    </div>
  );
};

export default ItemList;
