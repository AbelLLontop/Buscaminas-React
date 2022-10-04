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
  modo:modos.panal
};


const GridProvider = ({ children }: { children: JSX.Element }) => {
  const [{modo}, dispatch] = useReducer(GridReducer, initialGrids);
  const { Provider } = GridContext;
  

  return <Provider value={{ modo, dispatch }}>{children}</Provider>;
};

export default GridProvider;
