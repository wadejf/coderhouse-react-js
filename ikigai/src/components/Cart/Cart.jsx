import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";
import CartLine from "../CartLine/CartLine";

const Cart = () => {
  const {
    cart,
    getTotalPrice,
    getTotalQuantity,
    getTotalPriceById,
    getQuantityById,
  } = useContext(CartContext);

  return getTotalQuantity() > 0 ? (
    <div className={styles.CartContainer}>
      <div className={styles.CartLineHeaderContainer}>
        <div className={styles.CartLineImageHeaderContainer}></div>
        <div className={styles.CartLineTitleHeaderContainer}>Descripcion</div>
        <div className={styles.CartLineUnitaryPriceHeaderContainer}>
          Precio Unitario
        </div>
        <div className={styles.CartLineQuantityHeaderContainer}>Cantidad</div>
        <div className={styles.CartLineTotalPriceHeaderContainer}>
          Precio Total
        </div>
      </div>
      {Object.values(cart).map((element) => {
        return (
          <CartLine
            key={element.id}
            item={element}
            quantity={getQuantityById(element.id)}
            totalPrice={getTotalPriceById(element.id)}
          />
        );
      })}
      <div className={styles.CartLineFooterContainer}>
        <div className={styles.CartLineImageFooterContainer}></div>
        <div className={styles.CartLineTitleFooterContainer}>SUBTOTAL</div>
        <div className={styles.CartLineUnitaryPriceFooterContainer}></div>
        <div className={styles.CartLineQuantityFooterContainer}>
          {getTotalQuantity()}
        </div>
        <div className={styles.CartLineTotalPriceFooterContainer}>
          $ {getTotalPrice()}
        </div>
      </div>
      <button className={styles.CheckoutButton}>
        FINALIZAR COMPRA
      </button>
    </div>
  ): (
    <span className={styles.EmptyCartMessage}> El carrito está vacío</span>
  );
};

export default Cart;
