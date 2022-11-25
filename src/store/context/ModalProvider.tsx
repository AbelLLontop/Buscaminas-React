import { createContext, useReducer } from "react";
import { ModalAction, ModalReducer, ModalState } from "./ModalContext";


interface MyContext {
  stateModal:boolean;
  dispatch: React.Dispatch<ModalAction>
}
export const ModalContext = createContext<MyContext>({
  stateModal:false, 
  dispatch: () => null,
});


const initialModal: ModalState = { 
  stateModal:false
};


const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [{stateModal}, dispatch] = useReducer(ModalReducer, initialModal);

  return <ModalContext.Provider value={{ stateModal, dispatch }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
