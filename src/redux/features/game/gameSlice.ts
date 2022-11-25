import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IGameState, STATUS_GAME } from '../../../interfaces/game/IGame';
import { nivels } from "../../../constans/nivels";
import {
  explotar,
  generateCells,
  generateCellWithMinesAndNumbers,
  validateWin,
} from "../../../services/generateCellsMap";
import { ICell, STATUS_CELL, STATUS_MINE } from "../../../interfaces/game/ICell";
import { Nivel } from "../../../interfaces/game/INivel";

const initialState: IGameState = {
  cells: [],
  firstClick: true,
  level: nivels.normal,
  stateGame: 0,
};



const logicOpenCell = (state:IGameState,action:PayloadAction<ICell>)=>{
  let stateCell:Map<string,ICell> = new Map();
  state.cells.forEach((cell)=>{
    stateCell.set(cell.id,cell);
  });
  let cells = new Map(stateCell);
  const cell: ICell = action.payload;
  const newState = { ...state };

  if (!newState.firstClick) {
    cells = generateCellWithMinesAndNumbers(
      stateCell,
      state.level.mines,
      action.payload
    );
    newState.firstClick = true;
  }

  if (newState.stateGame == STATUS_GAME.PLAYING) {
    if (cell.mine == STATUS_MINE.INACTIVE) {
      explotar(cells, cell);
      if (validateWin(cells, newState.level.mines)) {
        newState.stateGame = STATUS_GAME.WIN;
        for (let [key, value] of cells) {
          if (value.mine == STATUS_MINE.ACTIVE) {
            cells.set(key, { ...value, status: STATUS_CELL.INACTIVE });
          }
        }
      }
    } else {
      newState.stateGame = STATUS_GAME.LOSE;
      for (let [key, value] of cells) {
        if (value.mine == STATUS_MINE.ACTIVE) {
          cells.set(key, { ...value, status: STATUS_CELL.OPEN });
        }
      }
    }
  } else {
    console.log("TERMINADMOS LEL JUEGO");
  }
  
  newState.cells = Array.from(cells.values());
  state.cells = newState.cells;
  state.firstClick = newState.firstClick;
  state.stateGame = newState.stateGame;
  state.level = newState.level;

}
const logicMarkCell = (state:IGameState,action:PayloadAction<ICell>)=>{
  let stateCell:Map<string,ICell> = new Map();
  state.cells.forEach((cell)=>{
    stateCell.set(cell.id,cell);
  });
  let cells = new Map(stateCell);
  const cell: ICell = action.payload;
  if (cells.has(cell.id)) {
    let status = STATUS_CELL.MARKED;
    if (cell.status == STATUS_CELL.MARKED) {
      status = STATUS_CELL.CLOSED;
    }
    cells.set(cell.id, { ...cell, status });
  }

  state.cells = Array.from(cells.values());
}
const logicResetCell = (state:IGameState,action:PayloadAction<Nivel>)=>{
  const level  = action.payload;
  const cells = generateCells(level.rows, level.columns);

  state.cells = Array.from(cells.values());
  state.firstClick = false;
  state.level = level;
  state.stateGame = STATUS_GAME.PLAYING;
}


export const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    openCell: (state, action:PayloadAction<ICell>) => {
      logicOpenCell(state,action);
    },
    markCell: (state, action:PayloadAction<ICell>) => {
      logicMarkCell(state,action);
    },
    resetCell: (state, action:PayloadAction<Nivel>) => {
      logicResetCell(state,action);
    },
  },
});

export const { openCell, markCell, resetCell } = gameSlice.actions;
export default gameSlice.reducer;
