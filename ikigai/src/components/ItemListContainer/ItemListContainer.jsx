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
  startAfter  ,
  getCountFromServer,
} from "firebase/firestore";
import { Pagination } from "@mui/material";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pageSize = 12;

  useEffect(() => {
    const db = getFirestore();

    const c = collection(db, "products");

    const getQueryConstraint = () => {
      if (categoryName === "todos") return;

      if (categoryName === "promociones") return where("discount", "==", true);

      return where("publishedDate", ">=", new Date(new Date().setDate(1)));
    };

    const getTotalPages = async (c) => {
      const q = query(c, getQueryConstraint());

      return getCountFromServer(q).then((r) => {
        setTotalPages(Math.ceil(r.data().count / pageSize));
      });
    };

    const getProducts = async (c) => {
      let lastItem = null;
      let q = query(c, getQueryConstraint(), orderBy("publishedDate"), limit(pageSize));

      if(page > 1) {
        const snapshot = await getDocs(q);

        lastItem = snapshot.docs[snapshot.docs.length-1];

        q = query(c, getQueryConstraint(), orderBy("publishedDate"), startAfter(lastItem), limit(pageSize));
      }

      const p = getDocs(q);

      p.then((res) => {
        let products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

        setProducts(products);
      });
    };

    getTotalPages(c).then(() => {
      getProducts(c);
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
