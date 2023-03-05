import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Button,
  CardActionArea,
  CardActions,
  createTheme,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Item = ({ element }) => {
  return (
    <Card sx={{ width: 250, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          sx={{ maxWidth: 250, height: 300, backgroundColor: "whitesmoke" }}
          image={element.img}
          title="green iguana"
        />
        <CardContent sx={{ height: 60 }}>
          <Typography
            sx={{ fontSize: 16 }}
            gutterBottom
            fontWeight="bold"
            component="div"
          >
            {element.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${element.price}
          </Typography>
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
