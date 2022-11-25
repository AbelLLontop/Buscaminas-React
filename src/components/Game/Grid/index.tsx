import { FC } from "react";
import { ICell } from "../../../interfaces/game/ICell";
import { Nivel } from "../../../interfaces/game/INivel";
import Cell from "../Cell";
import styles from "./index.module.scss";

type Props = {
  cells: ICell[];
  level: Nivel;
};
const Grid: FC<Props> = ({ cells, level }) => {
  const stylesComponent = {
    gridTemplateColumns: `repeat(${level.columns}, ${level.size}rem)`,
    gridTemplateRows: `repeat(${level.rows}, ${level.size}rem)`,
  };

  return (
    <div onContextMenu={(e)=>e.preventDefault()} style={stylesComponent} className={styles.grid}>
      {cells.map((cell) => (
        <Cell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export default Grid;
