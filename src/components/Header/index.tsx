import OpenModalConfig from "../Buttons/OpenModalConfig";
import style from "./index.module.scss";
import { useSelector } from 'react-redux';
import { RootState } from "../../redux/store";
const Header = () => {
  const modo = useSelector((state:RootState)=>state.grid.modo);
  return (
    <header className={style.container}>
      <div className={style.header}>
        <div></div>
        <h1 className={style.title}>Game Minas Search</h1>
        <div><OpenModalConfig/></div>
      </div>
      <span className={style.modeGame}>{modo.titulo}</span>
    </header>
  );
};

export default Header;
