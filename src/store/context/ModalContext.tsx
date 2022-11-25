

export enum ModalActionKind {
  CHANGE_STATE_MODAL
} 
export interface ModalAction {
  type: ModalActionKind;
  payload: any ;
}
export interface ModalState {
  stateModal:boolean
}




export const ModalReducer = (state: ModalState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionKind.CHANGE_STATE_MODAL:
            return {...state,stateModal:action.payload.stateModal}
        default:
        return state;
    }
 
};
 