import React from "react";

import styles from "./ItemPrice.module.css";

import { Typography } from "@mui/material";

const ItemPrice = ({ item }) => {
  return item.discount ? (
    <>
      <Typography gutterBottom variant="h6" component="span">
        <span className={styles.ItemOldPrice}>${item.price}</span>
      </Typography>
      <Typography gutterBottom variant="h5" component="span">
        <span className={styles.ItemDiscountedPrice}>
          ${item.discountedPrice}
        </span>
      </Typography>
    </>
  ) : (
    <Typography gutterBottom variant="h5" component="span">
      <span className={styles.ItemPrice}>${item.price}</span>
    </Typography>
  );
};

export default ItemPrice;
