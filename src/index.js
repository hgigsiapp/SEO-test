import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { actions } from './store/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/SEO-test">
      <App />
    </BrowserRouter>
);
