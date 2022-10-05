import { Modo } from "./../../../constans/modos";
import { ICell, STATUS_CELL, STATUS_MINE } from "./../../../interfaces/ICell";
export const switchColors = (cell: ICell, modo: Modo) => {
  if (cell.status == STATUS_CELL.OPEN) {
    if (cell.content == 0 && cell.mine == STATUS_MINE.INACTIVE) {
      return modo.empty;
    }
    return modo.open;
  } else {
    return modo.normal;
  }
};
export const selectContent = (cell: ICell, modo: Modo): string => {
  if (
    cell.status == STATUS_CELL.OPEN &&
    cell.mine == STATUS_MINE.INACTIVE &&
    cell.content != 0
  ) {
    return cell.content.toString();
  }
  if (cell.status == STATUS_CELL.OPEN && cell.mine == STATUS_MINE.ACTIVE) {
    return modo.icon.mine;
  }

  if (cell.status == STATUS_CELL.MARKED) {
    return modo.icon.flag;
  }
  if (cell.status == STATUS_CELL.CLOSED) {
    return "";
  }
  return "";
};
