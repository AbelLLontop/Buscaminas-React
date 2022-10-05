import { useContext } from 'react'
import { ModalActionKind } from '../../context/ModalContext';
import { ModalContext } from '../../context/ModalProvider';

const OpenModalConfig = () => {
    const {dispatch} = useContext(ModalContext);
  
    const openModal = ()=>{
        console.log("clickeando");
        dispatch({
            type:ModalActionKind.CHANGE_STATE_MODAL,
            payload:{
                stateModal:true
            }
        })
    }
  
    return (
    <button onClick={openModal}>OpenModalConfig</button>
  )
}

export default OpenModalConfig