import React from "react";
import Item from "../Item/Item";
import { Pagination } from "@mui/material";

const ItemList = ({ items, totalPages }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "10vh",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {items.map((element) => {
          return <Item key={element.id} element={element} />;
        })}
      </div>

    </div>
  );
};

export default ItemList;
