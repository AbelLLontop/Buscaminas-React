import{configureStore} from '@reduxjs/toolkit';
import gameReducer from './features/game/gameSlice';
import gridReducer from './features/grid/gridSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        game:gameReducer,
        grid:gridReducer,
        modal:modalReducer
    },  
    devTools:false
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
