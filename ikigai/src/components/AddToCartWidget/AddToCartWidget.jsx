import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import styles from "./AddToCartWidget.module.css";

const AddToCartWidget = ({ item }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { setProduct, getQuantityById } = useContext(CartContext);

  return item.stock > 0 ? (
    isAddingToCart ? (
      <span className={styles.ModifyQuantityContainer}>
        <button
          className={styles.ModifyQuantityButton}
          onClick={() => setProduct(item, getQuantityById(item.id) - 1)}
        >
          <HiMinusSm size={30} />
        </button>

        <span>{getQuantityById(item.id)}</span>

        <button
          className={styles.ModifyQuantityButton}
          onClick={() => setProduct(item, getQuantityById(item.id) + 1)}
        >
          <HiPlusSm size={30} />
        </button>
      </span>
    ) : (
      <button
        className={styles.AddToCartWidgetButton}
        onClick={() => {
          setIsAddingToCart(true);
          setProduct(item, getQuantityById(item.id));
        }}
      >
        <MdOutlineShoppingCart />
        <span>AGREGAR AL CARRITO</span>
      </button>
    )
  ) : (
    <span className={styles.AddToCartWithoutStock}>SIN STOCK</span>
  );
};

export default AddToCartWidget;
