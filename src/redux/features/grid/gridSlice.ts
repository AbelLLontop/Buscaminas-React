import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGridState } from '../../../interfaces/game/IGrid';
import { modos } from '../../../constans/modos';
import { Mode } from '../../../interfaces/game/IMode';

const initialState:IGridState={
    modo:modos.panal,
    stateModal:false
} 

export const gridSlice = createSlice({
    name:'grid',
    initialState:initialState,
    reducers:{
        changeModeGrid:(state,action:PayloadAction<Mode>)=>{
            state.modo = action.payload;
        }
    }
})

export const {changeModeGrid} = gridSlice.actions;

export default gridSlice.reducer;