import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setItem(res.data.find((p) => p.id == id));
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "60vh",
        justifyContent: "space-evenly",
      }}
    >
      {item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
