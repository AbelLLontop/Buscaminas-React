import React from "react";
import OpenModalConfig from "../Buttons/OpenModalConfig";
import style from "./index.module.scss";
const Header = () => {

  return (
    <header className={style.container}>
      <div className={style.header}>
        <div></div>
        <h1 className={style.title}>Game Minas Search</h1>
        <div><OpenModalConfig/></div>
      </div>
      <span className={style.modeGame}>Modo Panal🐝</span>
    </header>
  );
};

export default Header;
