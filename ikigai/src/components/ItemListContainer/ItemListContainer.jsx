import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
  collection,
  getFirestore,
  getDocs,
  where,
  limit,
  query
} from 'firebase/firestore';

const ItemListContainer = () => {
  const {categoryName} = useParams();
  const [products, setProducts] = useState([]);

  const getQueryConstraint = () => {
    if (categoryName === "todos")
      return limit(10);

    if (categoryName === "promociones")
      return where('discount', '==', true);

    return where('publishedDate', '>=', new Date().setDate(1));
  };

  useEffect(() => {
    const db = getFirestore();

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

  }, [categoryName]);

  return (
      <div className={styles.ItemListContainer}>
        <ItemList items={products}/>
      </div>
  );
};

export default ItemListContainer;
