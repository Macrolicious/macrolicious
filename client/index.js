import React from 'react';
import App from './App';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './stylesheets/styles.css';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <App />
  </Provider>  
);
