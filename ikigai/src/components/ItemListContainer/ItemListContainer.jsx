import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  limit,
  query
} from 'firebase/firestore';
import axios from "axios";
import {Pagination} from "@mui/material";
import usePagination from "@mui/material/usePagination";

const ItemListContainer = () => {
  const {categoryName} = useParams();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  /*const getQueryConstraint = () => {
    if (categoryName === "todos")
      return limit(10);

    if (categoryName === "promociones")
      return where('discount', '==', true);

    return where('publishedDate', '>=', new Date().setDate(1));
  };*/

  const filterProducts = (products) => {
    if (!categoryName)
      return products.filter(
        (p) => new Date(p.publishedDate) > new Date().setDate(1)
      );

    if (categoryName === "promociones")
      return products.filter((p) => p.discount);

    return products;
  }

  const paginateProducts = (p) => {
    return p.slice((page - 1) * 10, page * 10);
  };

  useEffect(() => {
    /*const db = getFirestore();

    const c = collection(db, 'products');

    const q = query(c, getQueryConstraint());

    const products = getDocs(q);

    products.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(products);
      });
    */

    axios
        .get("/products.json")
        .then((res) => {
          const p = filterProducts(res.data);
          setTotalProducts(p.length);
          setTotalPages(Math.ceil(totalProducts / 10));
          setProducts(paginateProducts(p));

          if(page > totalPages) setPage(1);
        })
        .catch((err) => console.log(err));


  }, [categoryName, page, products]);

  return (
      <div className={styles.ItemListContainer}>
        <ItemList items={products}/>
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
        ><Pagination color="warning" page={page} count={totalPages} onChange={(e, p) => setPage(p)}/>
        </div>

      </div>
  );
};

export default ItemListContainer;
