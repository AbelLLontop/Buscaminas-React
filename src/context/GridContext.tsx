import { Modo } from "../constans/modos";


export enum GridActionKind {
  CHANGE_MODE
} 
export interface GridAction {
  type: GridActionKind;
  payload: any ;
}
export interface GridState {
  modo:Modo
}




export const GridReducer = (state: GridState, action: GridAction) => {
    switch (action.type) {
        case GridActionKind.CHANGE_MODE:
            return {...state,modo:action.payload.modo}
        default:
        return state;
    }
 
};
