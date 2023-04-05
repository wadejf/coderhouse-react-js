import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const setProduct = ({ id, title, price, img, stock, discountedPrice }, quantity) => {
    if (quantity < 1 || quantity > stock) return;

    setCart({
      ...cart,
      [id]: {
        id,
        title,
        img,
        price,
        discountedPrice,
        quantity,
      },
    });
  };

  const clear = () => setCart([]);

  const getTotalQuantity = () => {
    return Object.values(cart).reduce((acc, p) => {
      return acc + p.quantity;
    }, 0);
  };

  const getTotalPrice = () => {
    let totalPrice = Object.values(cart).reduce((acc, p) => {
      return acc + p.quantity * p.price;
    }, 0);

    return totalPrice;
  };

  const deleteProductById = (id) => {
    delete cart[id];

    setCart({ ...cart });
  };

  const getQuantityById = (id) => {
    return cart[id]?.quantity ?? 1;
  };

  const getTotalPriceById = (id) => {
    return cart[id].price * cart[id].quantity;
  };

  let data = {
    cart,
    setProduct,
    clear,
    getTotalQuantity,
    getTotalPrice,
    getTotalPriceById,
    deleteProductById,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
