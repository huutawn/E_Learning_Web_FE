import React from 'react';
import ReactDOM from 'react-dom/client';
// import homePage from 'pages/user/homePage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustum from './router';
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
<RouterCustum/>
</BrowserRouter>
);


