import { memo,useContext} from "react";
import { CellContextDispatch } from "../../context/CellProvider";
import { CellActionKind } from "../../context/CellsContext";
import { GridContext } from "../../context/GridProvider";
import { ICell, STATUS_CELL, STATUS_MINE } from "../../interfaces/ICell";
import { selectContent, switchColors } from "./utils/utilsCell";
import styles from "./index.module.scss";

 
const Cell = ({ cell }: { cell: ICell }) => {
   const { modo} = useContext(GridContext)!!;
   const dispatch = useContext(CellContextDispatch);
   const content =selectContent(cell,modo);

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
        style={switchColors(cell,modo)}
        className={ `${styles.cell} ${cell.status == STATUS_CELL.CLOSED?styles.hover:""} ${cell.status==STATUS_CELL.INACTIVE?styles.animWin:''} ${cell.status == STATUS_CELL.OPEN &&  cell.mine==STATUS_MINE.ACTIVE?styles.animRed:''}`}
        onClick={handleCLick}
        onAuxClick={handleAuxClick}
      >
        {content}
      </div>
  );
};

export default memo(Cell);
