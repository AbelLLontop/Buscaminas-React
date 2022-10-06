import { useContext} from "react";
import styles from "./ModalConfig.module.css";
import { createPortal } from "react-dom";
import { CellContextDispatch } from "../../context/CellProvider";
import { GridContext } from "../../context/GridProvider";
import { Modo, modos } from "../../constans/modos";
import { Nivel, nivels } from "../../constans/nivels";
import { GridActionKind } from "../../context/GridContext";
import { CellActionKind } from "../../context/CellsContext";
import { ModalContext } from "../../context/ModalProvider";
import { ModalActionKind } from "../../context/ModalContext";
const portal = document.getElementById("root-portal2")!!;

const ModalConfig = () => {
  const dispatch = useContext(CellContextDispatch);
  const { dispatch: gridDispatch } = useContext(GridContext);
  const { dispatch: modalDispatch, stateModal } = useContext(ModalContext);

  const resetCells = (modo: Modo) => {
    gridDispatch({
      type: GridActionKind.CHANGE_MODE,
      payload: {
        modo: modo,
      },
    });
  };

  const resetNivel = (nivel: Nivel) => {
    dispatch({
      type: CellActionKind.RESET_CELLS,
      payload: {
        level: nivel,
      },
    });
  };

  const closeModal = () => {
    modalDispatch({
      type: ModalActionKind.CHANGE_STATE_MODAL,
      payload: {
        stateModal: false,
      },
    });
  };

  return createPortal(
    <div
      style={{
        top: stateModal ? "0" : "-100%",
        opacity: stateModal ? "1" : "0",
      }}
      className={styles.modal}
    >
      <section className={styles.container}>
        <h4>SETTINGS</h4>
        <p>¡Modos!</p>
        <div className={styles.container_btn}>
          {Object.values(modos).map((modo:Modo) => (<button key={modo.titulo} onClick={() => resetCells(modo)}>{modo.titulo}</button>))}
        </div>
        <p>¡Cambiar Nivel!</p>
        <div className={styles.container_btn}>
          <button onClick={() => resetNivel(nivels.normal)}>
            Principiante
          </button>
          <button onClick={() => resetNivel(nivels.intermedio)}>
            Intermedio
          </button>
          <button onClick={() => resetNivel(nivels.avanzado)}>Avanzado</button>
        </div>
        <button className={styles.closed} onClick={closeModal}>
          Cerrar
        </button>
      </section>
    </div>,
    portal
  );
};

export default ModalConfig;
