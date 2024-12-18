    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import RouterCustom from './router';
    import './style/style.scss';
    import { Provider } from 'react-redux';
    import {store, persistor} from '../src/utils/redux/store';
    import 'nprogress/nprogress.css';
    import { PersistGate } from 'redux-persist/integration/react';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
    <BrowserRouter>
    <RouterCustom/>
    </BrowserRouter>
    </PersistGate>
    </Provider>
    );


