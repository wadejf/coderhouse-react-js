import React from "react";

import styles from "./ItemDetail.module.css";
import ItemPrice from "../ItemPrice/ItemPrice";
import { Grid, Typography } from "@mui/material";

const ItemDetail = ({ item }) => {
  return (
    <Grid
      style={{
        display: "flex",
        width: "75%",
      }}
      container
      spacing={2}
    >
      <Grid item sm={6}>
        <img src={item.img} alt={item.title} className={styles.ItemDetailImg} />
      </Grid>
      <Grid item sm={6}>
        <Typography gutterBottom variant="h3">
          {item.title}
        </Typography>
        <br />
        <br />
        <span>{item.description}</span>
        <br />
        <br />
        <ItemPrice item={item} />
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
