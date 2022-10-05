import styles from "./App.module.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Modal from "./components/modals/Modal";
import ModalConfig from "./components/modals/ModalConfig";
import CellProvider from "./context/CellProvider";
import GridProvider from "./context/GridProvider";
import ModalProvider from "./context/ModalProvider";

const App = () => {
  return (
    <div className={styles.container}>
      <GridProvider>
        <CellProvider>
          <ModalProvider>
            <>
            <Modal />
            <ModalConfig/>
            <Header />
            <Grid />
            </>
          </ModalProvider>
        </CellProvider>
      </GridProvider>
    </div>
  );
};

export default App;
