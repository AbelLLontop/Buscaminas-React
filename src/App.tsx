import { useEffect } from "react";
import styles from "./App.module.css";
import Grid from "./components/Grid";
import CellProvider from "./context/CellProvider";
import GridProvider from "./context/GridProvider";

const App = () => {
  return (
    <div className={styles.container}>
      <GridProvider>
        <CellProvider>
          <Grid />
        </CellProvider>
      </GridProvider>
    </div>
  );
};

export default App;
