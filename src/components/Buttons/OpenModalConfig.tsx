import { AiFillSetting } from "react-icons/ai";
import styles from "./OpenModalConfig.module.scss";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/features/modal/modalSlice";

const OpenModalConfig = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <div onClick={handleOpenModal} className={styles.button}>
      <AiFillSetting />
      Settings
    </div>
  );
};

export default OpenModalConfig;
