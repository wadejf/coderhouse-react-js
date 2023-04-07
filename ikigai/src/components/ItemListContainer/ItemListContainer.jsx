import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  limit,
  query,
} from "firebase/firestore";
import { Pagination } from "@mui/material";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const db = getFirestore();

    const c = collection(db, "products");

    const getQueryConstraint = () => {
      if (categoryName === "todos") return limit(12);

      if (categoryName === "promociones") return where("discount", "==", true);

      return where("publishedDate", ">=", new Date().setDate(1));
    };

    const q = query(c, getQueryConstraint());

    const products = getDocs(q);

    products.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setTotalPages(Math.ceil(products.length / 10));
      setProducts(products);
    });
  }, [categoryName, page]);

  return (
    <div className={styles.ItemListContainer}>
      <ItemList items={products} />
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "10vh",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        <Pagination
          color="warning"
          page={page}
          count={totalPages}
          onChange={(e, p) => setPage(p)}
        />
      </div>
    </div>
  );
};

export default ItemListContainer;
