import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root");
if (!container) throw new Error("No se encontró el contenedor raíz");

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
