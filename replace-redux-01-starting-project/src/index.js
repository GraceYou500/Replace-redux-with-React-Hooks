import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ProductsProvider from './context-api/products-context';
import configureProductsStore from './hooks-store/products-store';
import './index.css';
import App from './App';

configureProductsStore(); // Don't need to wrap <App />

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
