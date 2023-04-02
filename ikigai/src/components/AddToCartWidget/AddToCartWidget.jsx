import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import styles from './AddToCartWidget.module.css';

const AddToCartWidget = () => {
  return (
      <button className={styles.AddToCartWidgetButton}>
        <MdOutlineShoppingCart />
        <span>AGREGAR AL CARRITO</span>
      </button>
  )
}

export default AddToCartWidget;