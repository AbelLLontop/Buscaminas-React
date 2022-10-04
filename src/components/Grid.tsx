import React, { useCallback, useContext, useEffect } from "react";
import styles from "./Grid.module.css";
import Cell from "./Cell";
import { CellContext } from "../context/CellProvider";
import { cellAction } from "../context/CellsContext";
import { GridContext } from "../context/GridProvider";
import { modos } from "../constans/modos";
import { GridActionKind } from "../context/GridContext";

const Grid = () => {
  const { cells,level, dispatch} = useContext(CellContext);
  const myDispatch = useCallback((action: cellAction) => {
    dispatch(action);
    }, []);

  
  
  return ( 

    <div
    onContextMenu={(e)=>e.preventDefault()}
      style={{
        gridTemplateColumns: `repeat(${level.columns}, 3rem)`,
        gridTemplateRows: `repeat(${level.rows}, 3rem)`,
      }}
      className={styles.grid}
    >
      {[...cells.values()].map((cell) => ( 
        <Cell key={cell.id} cell={cell} dispatch={myDispatch}/>
      ))}
    </div>

  );
};

export default Grid;
