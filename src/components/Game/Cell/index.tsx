import { memo, FC } from "react";
import {
  ICell,
  STATUS_CELL,
  STATUS_MINE,
} from "../../../interfaces/game/ICell";
import { selectContent, switchColors } from "./utils/utilsCell";
import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { markCell, openCell } from "../../../redux/features/game/gameSlice";

type Props = {
  cell: ICell;
};

const Cell: FC<Props> = ({ cell }) => {
  const modo = useSelector((state: RootState) => state.grid.modo);
  const dispatch = useDispatch();
  const content = selectContent(cell, modo);
  const handleCLick = () => {
    if (cell.status == STATUS_CELL.CLOSED) {
      dispatch(openCell(cell));
    }
  };
  const handleAuxClick = () => {
    if (cell.status != STATUS_CELL.OPEN) {
      dispatch(markCell(cell));
    }
  };

  return (
    <div
      style={switchColors(cell, modo)}
      className={`${styles.cell} ${
        cell.status == STATUS_CELL.CLOSED ? styles.hover : ""
      } ${cell.status == STATUS_CELL.INACTIVE ? styles.animWin : ""} ${
        cell.status == STATUS_CELL.OPEN && cell.mine == STATUS_MINE.ACTIVE
          ? styles.animRed
          : ""
      }`}
      onClick={handleCLick}
      onAuxClick={handleAuxClick}
    >
      {content}
    </div>
  );
};

export default memo(Cell);
