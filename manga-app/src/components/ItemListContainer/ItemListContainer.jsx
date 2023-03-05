import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = axios
      .get("products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));

    if (!data) return;

    const products = data.filter((p) => p.category === categoryName);

    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryName]);

  return (
    <div className={styles.ItemListContainer}>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
