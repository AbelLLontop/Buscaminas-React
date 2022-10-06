import { useContext } from "react";
import { createPortal } from "react-dom";
import { Nivel, nivels } from "../../constans/nivels";
import { CellContext, CellContextDispatch } from "../../context/CellProvider";
import { CellActionKind } from "../../context/CellsContext";
import { STATUS_GAME } from "../../interfaces/ICell";
import styles from "./ModalFinishGame.module.css";
const portal = document.getElementById("root-portal")!!;

const Modal = () => {
  const { stateGame } = useContext(CellContext);
  const dispatch = useContext(CellContextDispatch);

  const resetNivel = (nivel: Nivel) => {
    dispatch({
      type: CellActionKind.RESET_CELLS,
      payload: {
        level: nivel,
      },
    });
  };

  return createPortal(
    <div style={{ top: stateGame != STATUS_GAME.PLAYING ? "0" : "-100%",opacity:stateGame != STATUS_GAME.PLAYING ?"1":"0" }} className={styles.modal}>
      <section className={styles.container}>
        {stateGame == STATUS_GAME.LOSE && (<><h4>😭 GAME OVER 😢</h4>
        <p>¡Empecemos de nuevo!</p></>)}
        {stateGame == STATUS_GAME.WIN && (<><h4> WIN </h4>
        <p>¡Empecemos de nuevo!</p></>)}
        
        <div className={styles.container_btn}>
          <button onClick={() => resetNivel(nivels.normal)}>
            Principiante
          </button>
          <button onClick={() => resetNivel(nivels.intermedio)}>
            Intermedio
          </button>
          <button onClick={() => resetNivel(nivels.avanzado)}>Avanzado</button>
        </div>
      </section>
    </div>,
    portal
  );
};

export default Modal;
