import React, {createContext, useReducer } from "react";
import { Modo, modos } from "../constans/modos";
import {
  GridAction,
  GridReducer,
  GridState,
} from "./GridContext"; 

interface MyContext {
  modo: Modo; 
  dispatch: React.Dispatch<GridAction>
}
export const GridContext = createContext<MyContext>({
  modo: modos.panal,
  dispatch: () => null,
});


const initialGrids: GridState = { 
  modo:modos.panal,
  stateModal:false
};


const GridProvider = ({ children }: { children: JSX.Element }) => {
  const [{modo}, dispatch] = useReducer(GridReducer, initialGrids);
  console.log(modo)

  return <GridContext.Provider value={{ modo, dispatch }}>{children}</GridContext.Provider>;
};

export default GridProvider;
