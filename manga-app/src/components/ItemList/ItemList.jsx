import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "10px",
        padding: "5px 0",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
