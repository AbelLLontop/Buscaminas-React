import { Nivel } from "../constans/nivels";
import { ICell, STATUS_CELL, STATUS_MINE } from "../interfaces/ICell";
import {
  CellMap,
  explotar,
  generateCells,
  generateCellWithMinesAndNumbers,
} from "../utils/generateCellsMap";

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
  finalize: boolean;
}

const openCell = (state: CellState,action: cellAction,status: STATUS_CELL): CellState => {
  let cells = new Map(state.cells);
  const cell: ICell = action.payload;
  const newState = { ...state };

  if (!newState.firstClick) {
    cells = generateCellWithMinesAndNumbers(
      state.cells,
      state.level.mines,
      action.payload
    );
    newState.firstClick = true;
  }
  if (!newState.finalize) {
    if (cell.mine == STATUS_MINE.INACTIVE) {
      explotar(cells, cell);
    } else {
      newState.finalize = true;
      for (let [key, value] of cells) {
        if (value.mine == STATUS_MINE.ACTIVE) {
          cells.set(key, { ...value, status: STATUS_CELL.OPEN });
        }
      }
    }
  } else {
    console.log("TERMINADMOS LEL JUEGO");
  }

  const newCellState: CellState = { ...newState, cells: cells };

  return newCellState;
};
const markCell = (state: CellState, action: cellAction): CellState => {
  let cells = new Map(state.cells);
  const cell = action.payload;

  if (cells.has(cell.id)) {
    let status = STATUS_CELL.MARKED;
    if (cell.status == STATUS_CELL.MARKED) {
      status = STATUS_CELL.CLOSED;
    }
    cells.set(cell.id, { ...cell, status });
  }

  const newCellState: CellState = { ...state, cells: cells };
  return newCellState;
};

const resetCells = (action: cellAction): CellState => {
  const { level }: { level: Nivel } = action.payload;
  const cells = generateCells(level.rows, level.columns);
  return {
    firstClick: false,
    cells,
    level,
    finalize: false,
  };
};

export const cellReducer = (state: CellState, action: cellAction) => {
  switch (action.type) {
    case CellActionKind.OPEN_CELL:
      return openCell(state, action, STATUS_CELL.OPEN);
    case CellActionKind.MARK_CELL:
      return markCell(state, action);
    case CellActionKind.RESET_CELLS:
      return resetCells(action);
    default:
      return state;
  }
};
