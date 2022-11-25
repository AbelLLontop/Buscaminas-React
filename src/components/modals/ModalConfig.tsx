import styles from "./ModalConfig.module.css";
import { createPortal } from "react-dom";
import { Modo, modos } from "../../constans/modos";
import { nivels } from "../../constans/nivels";
import { Nivel } from "../../interfaces/game/INivel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeModeGrid } from "../../redux/features/grid/gridSlice";
import { resetCell } from "../../redux/features/game/gameSlice";
import { closedModal } from "../../redux/features/modal/modalSlice";
const portal = document.getElementById("root-portal2")!!;

const ModalConfig = () => {
  const dispatch = useDispatch();
  const stateModal = useSelector((state: RootState) => state.modal.stateModal);

  const handleResetCells = (modo: Modo) => {
    dispatch(changeModeGrid(modo));
  };

  const handleResetNivel = (nivel: Nivel) => {
    dispatch(resetCell(nivel));
  };

  const handlecloseModal = () => {
    dispatch(closedModal());
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
          {Object.values(modos).map((modo: Modo) => (
            <button key={modo.titulo} onClick={() => handleResetCells(modo)}>
              {modo.titulo}
            </button>
          ))}
        </div>
        <p>¡Cambiar Nivel!</p>
        <div className={styles.container_btn}>
          <button onClick={() => handleResetNivel(nivels.normal)}>
            Principiante
          </button>
          <button onClick={() => handleResetNivel(nivels.intermedio)}>
            Intermedio
          </button>
          <button onClick={() => handleResetNivel(nivels.avanzado)}>
            Avanzado
          </button>
        </div>
        <button className={styles.closed} onClick={handlecloseModal}>
          Cerrar
        </button>
      </section>
    </div>,
    portal
  );
};

export default ModalConfig;
