import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getFirestore, getDoc } from 'firebase/firestore';

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  /*
  const filterProducts = (products) => {
    if (!categoryName)
      return products.filter(
        (p) => new Date(p.publishedDate) > new Date().setDate(1)
      );

    if (categoryName === "todos") return products.slice(0, 10);

    if (categoryName === "promociones")
      return products.filter((p) => p.discount);

    return products;
  };*/

  useEffect(() => {
    const db = getFirestore();

    const p = doc(db, 'products', 'pa6HUvtoIn0ay5Vfan1g');

    const docSnap = getDoc(p);

    docSnap.then(s => {
      setProducts([s.data()]);
    }).catch(e => console.log(e));

  }, [categoryName]);

  return (
    <div className={styles.ItemListContainer}>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
