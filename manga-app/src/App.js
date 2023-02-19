import Navbar from "./components/NavBar/NavBar";
import {Container} from "@mui/material";
import styles from './index.css';

function App() {
  return (
    <Container className={styles.container}>
      <Navbar />
    </Container>
  );
}

export default App;
