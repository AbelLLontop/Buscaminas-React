import { useContext } from 'react'
import { ModalActionKind } from '../../context/ModalContext';
import { ModalContext } from '../../context/ModalProvider';
import {AiFillSetting} from 'react-icons/ai'
import styles from './OpenModalConfig.module.scss'

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
        <div onClick={openModal} className={styles.button}>
    <AiFillSetting/>Settings
        </div>
  )
}

export default OpenModalConfig