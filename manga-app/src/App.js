import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Container } from "@mui/material";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
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
      </Container>
    </BrowserRouter>
  );
}

export default App;
