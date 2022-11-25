import styles from "./App.module.css";
import Game from "./components/Game";
import Grid from "./components/Game/Grid";
import Header from "./components/Header";
import Modal from "./components/modals/Modal";
import ModalConfig from "./components/modals/ModalConfig";

const App = () => {
  return (
    <div className={styles.container}>
            <Modal />
            <ModalConfig/>
            <Header />
            <Game/> 
    </div>
  );
};

export default App;
