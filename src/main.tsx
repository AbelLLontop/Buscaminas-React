import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import { Provider } from 'react-redux';
import { store } from './redux/store';

disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <App />
    </Provider>

)

