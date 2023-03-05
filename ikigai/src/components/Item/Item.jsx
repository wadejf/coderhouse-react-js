import React from "react";

import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ItemPrice from "../ItemPrice/ItemPrice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 250, boxShadow: 3, padding: 1 }}>
      <CardActionArea component={RouterLink} to={`/item/${element.id}`}>
        <CardMedia
          sx={{ maxWidth: 250, height: 350, backgroundColor: "whitesmoke" }}
          image={element.img}
        />
        <CardContent sx={{ height: 70 }}>
          <Typography
            sx={{ fontSize: 16 }}
            gutterBottom
            fontWeight="bold"
            component="div"
          >
            {element.title}
          </Typography>
          <ItemPrice item={element} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            color: "#CD5C5C",
          }}
          size="small"
          color="primary"
        >
          <ShoppingCartIcon />
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
