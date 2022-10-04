import { Dispatch, memo, useCallback, useContext, useMemo} from "react";
import { CellContext } from "../context/CellProvider";
import { cellAction, CellActionKind } from "../context/CellsContext";
import { GridContext } from "../context/GridProvider";
import { ICell, STATUS_CELL, STATUS_MINE } from "../interfaces/ICell";
import styles from "./Cell.module.css";
 

const Cell = ({ cell,dispatch }: { cell: ICell,dispatch: React.Dispatch<cellAction> }) => {

  const { modo} = useContext(GridContext)!!;

  const switchColors = () => {
    if (cell.status == STATUS_CELL.OPEN) {
      if (cell.content == 0 && cell.mine == STATUS_MINE.INACTIVE) {
        return modo.empty;
      }
      return modo.open;
    } else {
      return modo.normal;
    }
  };

  const handleCLick = () => {
    if (cell.status == STATUS_CELL.CLOSED) {
      dispatch({ type: CellActionKind.OPEN_CELL, payload: cell });
    }
  };
  const handleAuxClick = () => {
    if (cell.status != STATUS_CELL.OPEN) {
      dispatch({ type: CellActionKind.MARK_CELL, payload: cell });
    }
  };

  return (
      <div
        style={switchColors()}
        className={styles.cell}
        onClick={handleCLick}
        onAuxClick={handleAuxClick}
      >
        {cell.status == STATUS_CELL.OPEN &&
          cell.mine == STATUS_MINE.INACTIVE &&
          cell.content != 0 &&
          cell.content}
        {cell.status == STATUS_CELL.OPEN &&
          cell.mine == STATUS_MINE.ACTIVE &&
          modo.icon.mine}
        {cell.status == STATUS_CELL.MARKED && modo.icon.flag}
        {cell.status == STATUS_CELL.CLOSED && ""}
      </div>
  );
};

export default memo(Cell);
