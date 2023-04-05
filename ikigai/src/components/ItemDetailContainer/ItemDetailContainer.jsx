import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getFirestore,
  getDoc,
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState();

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc(db, "products", id);

    const product = getDoc(docRef);

    product.then(p =>{
      setItem({
        ...p.data(),
        id: p.id
      });
    }).catch(e => {
      console.log(e);
    })
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
      {item && <ItemDetail key={id} item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
