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
  dispatch: React.Dispatch<cellAction>
}
export const CellContext = createContext<MyContext>({
  cells: new Map(),
  level: nivels.normal,
  dispatch: () => null,
});

const initialCells: CellState = {
  firstClick:false,
  finalize:false,
  cells: new Map(),
  level: nivels.normal
};


const CellProvider = ({ children }: { children: JSX.Element }) => {
  const [{cells,level}, dispatch] = useReducer(cellReducer, initialCells);
  const { Provider } = CellContext;
  useEffect(() => {
    dispatch({
      type: CellActionKind.RESET_CELLS,
      payload: {
        level: nivels.normal,
      },
    });
  }, []);

  return <Provider value={{ cells,level, dispatch }}>{children}</Provider>;
};

export default CellProvider;
