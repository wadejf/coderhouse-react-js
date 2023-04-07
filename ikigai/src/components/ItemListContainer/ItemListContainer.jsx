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
  orderBy,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { Pagination } from "@mui/material";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pageSize = 12;

  const getQueryConstraint = () => {
    if (categoryName === "todos") return;

    if (categoryName === "promociones") return where("discount", "==", true);

    return where("publishedDate", ">=", new Date(new Date().setDate(1)));
  };

  const getProducts = async (c, isFirstPage) => {
    let lastItem = null;

    let q = query(
      c,
      getQueryConstraint(),
      orderBy("publishedDate"),
      limit(pageSize)
    );

    if (!isFirstPage) {
      const snapshot = await getDocs(q);

      lastItem = snapshot.docs[snapshot.docs.length - 1];

      q = query(
        c,
        getQueryConstraint(),
        orderBy("publishedDate"),
        startAfter(lastItem),
        limit(pageSize)
      );
    }

    return getDocs(q);
  };

  useEffect(() => {
    setPage(1);

    const db = getFirestore();

    const c = collection(db, "products");

    let q = query(c, getQueryConstraint(), orderBy("publishedDate"));

    getCountFromServer(q).then((r) => {
      setTotalPages(Math.ceil(r.data().count / pageSize));

      getProducts(c, true).then((res) => {
        let p = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(p);
      });
    });
  }, [categoryName]);

  useEffect(() => {
    const db = getFirestore();

    const c = collection(db, "products");

    getProducts(c, page === 1).then((res) => {
      let p = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(p);
    });
  }, [page]);

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
