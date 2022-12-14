import { createPortal } from "react-dom";
import { STATUS_GAME } from "../../interfaces/game/IGame";
import { Nivel } from "../../interfaces/game/INivel";
import { nivels } from "../../constans/nivels";
import styles from "./ModalFinishGame.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { resetCell } from "../../redux/features/game/gameSlice";
const portal = document.getElementById("root-portal")!!;

const Modal = () => {
 const stateGame =  useSelector((state:RootState)=>state.game.stateGame);
  const dispatch = useDispatch();

  const resetNivel = (nivel: Nivel) => {
    dispatch( resetCell(nivel));
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
