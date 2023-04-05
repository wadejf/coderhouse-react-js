import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.AppContainer}>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />

            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />

            <Route path="/cart" element={<Cart />} />

            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
