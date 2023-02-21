import NavBar from "./components/NavBar/NavBar";
import {Container} from "@mui/material";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
      <Container maxWidth="md">
        <NavBar/>
        <ItemListContainer greeting={'Facundo'}>

        </ItemListContainer>
      </Container>
  );
}

export default App;
