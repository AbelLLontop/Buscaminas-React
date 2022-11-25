import {createSlice} from '@reduxjs/toolkit';
import { IModalState } from '../../../interfaces/modal/IModal';

const initialState:IModalState={
    stateModal:false
}


export const modalSlice = createSlice({
    name:'modal',
    initialState:initialState,
    reducers:{
        openModal:(state)=>{
            state.stateModal=true;
        },
        closedModal:(state)=>{ 
            state.stateModal = false;
        }
    }
})

export const {openModal,closedModal} = modalSlice.actions;
export default modalSlice.reducer;