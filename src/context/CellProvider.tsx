import React, { createContext, useEffect, useReducer } from "react";
import { Nivel, nivels } from "../constans/nivels";
import { CellMap } from "../utils/generateCellsMap";
import {
  cellAction,
  CellActionKind,
  cellReducer,
  CellState,
} from "./CellsContext";

interface MyContext {
  cells: CellMap;
  level: Nivel;
  finalize: boolean;
}

export const CellContext = createContext<MyContext>({
  cells: new Map(),
  level: nivels.normal,
  finalize: false,
});
export const CellContextDispatch = createContext<React.Dispatch<cellAction>>(
  () => null
);

const initialCells: CellState = {
  firstClick: false,
  finalize: false,
  cells: new Map(),
  level: nivels.normal,
};

const CellProvider = ({ children }: { children: JSX.Element }) => {
  const [{ cells, level, finalize }, dispatch] = useReducer(
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
      <CellContext.Provider value={{ cells, level, finalize }}>
        {children}
      </CellContext.Provider>
    </CellContextDispatch.Provider>
  );
};

export default CellProvider;
