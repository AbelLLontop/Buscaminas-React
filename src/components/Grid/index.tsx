import React, { useContext,  } from "react";
import { CellContext } from "../../context/CellProvider";
import Cell from "../Cell";
import styles from "./index.module.scss";


const Grid = () => {
  const { cells,level} = useContext(CellContext);
  return (
    <div
    onContextMenu={(e)=>e.preventDefault()}
      style={{
        gridTemplateColumns: `repeat(${level.columns}, ${level.size}rem)`,
        gridTemplateRows: `repeat(${level.rows}, ${level.size}rem)`,
      }}
      className={styles.grid}
    >
      {[...cells.values()].map((cell) => ( 
        <Cell key={cell.id} cell={cell} />
      ))}
    </div>

  );
};

export default Grid;
