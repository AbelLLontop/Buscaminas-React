import React, { useContext } from "react";
import { GridContext } from "../../context/GridProvider";
import OpenModalConfig from "../Buttons/OpenModalConfig";
import style from "./index.module.scss";
const Header = () => {
  const{modo}=useContext(GridContext);
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
