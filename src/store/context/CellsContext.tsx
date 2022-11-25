import { CellMap } from "../../interfaces/game/ICell";
import { STATUS_GAME } from "../../interfaces/game/IGame";
import { Nivel } from "../../interfaces/game/INivel";

export enum CellActionKind {
  OPEN_CELL,
  MARK_CELL,
  RESET_CELLS,
}
export interface cellAction {
  type: CellActionKind; 
  payload: any;
}
export interface CellState {
  cells: CellMap;
  firstClick: boolean;
  level: Nivel;
  stateGame:STATUS_GAME;
}


