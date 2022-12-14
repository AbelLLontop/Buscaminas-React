import React, { createContext, useEffect, useReducer } from "react";
import { CellMap } from "../../interfaces/game/ICell";
import { STATUS_GAME } from "../../interfaces/game/IGame";
import { Nivel } from "../../interfaces/game/INivel";
import { nivels } from "../../constans/nivels";
import { cellReducer } from '../reducers/cellReducer';
import {
  cellAction,
  CellActionKind,
  CellState,
} from "./CellsContext";

interface MyContext {
  cells: CellMap;
  level: Nivel;
  stateGame:STATUS_GAME;
}

export const CellContext = createContext<MyContext>({
  cells: new Map(),
  level: nivels.normal,
  stateGame:STATUS_GAME.PLAYING
});
export const CellContextDispatch = createContext<React.Dispatch<cellAction>>(
  () => null
);

const initialCells: CellState = {
  firstClick: false,
  stateGame:STATUS_GAME.PLAYING,
  cells: new Map(),
  level: nivels.normal,
};

const CellProvider = ({ children }: { children: JSX.Element }) => {
  const [{ cells, level, stateGame }, dispatch] = useReducer(
    cellReducer,
    initialCells
  );
  useEffect(() => {
    dispatch({
      type: CellActionKind.RESET_CELLS,
      payload: {
        level: nivels.normal,
      },
    });
  }, []);

  return (
    <CellContextDispatch.Provider value={dispatch}>
      <CellContext.Provider value={{ cells, level, stateGame }}>
        {children}
      </CellContext.Provider>
    </CellContextDispatch.Provider>
  );
};

export default CellProvider;
