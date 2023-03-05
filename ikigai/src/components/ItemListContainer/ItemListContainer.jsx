import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const filterProducts = (products) => {
    if (!categoryName)
      return products.filter(
        (p) => new Date(p.publishedDate) > new Date().setDate(1)
      );

    if (categoryName === "todos") return products.slice(0, 10);

    if (categoryName === "promociones")
      return products.filter((p) => p.discount);

    return products;
  };

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProducts(filterProducts(res.data));
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div className={styles.ItemListContainer}>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
