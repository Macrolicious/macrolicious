import React from 'react';
import App from './App';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { rootReducer } from './reducers/reducers.js'
import { createStore } from 'redux'
import './stylesheets/styles.css';

const store = createStore(rootReducer);

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Provider store={ store }>
    <App />
  </Provider>  
);
