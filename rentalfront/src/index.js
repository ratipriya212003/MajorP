import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import  StoreContextProvider  from './Context/StoreContext.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

