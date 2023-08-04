import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

const currentName = "Ivan"

root.render(
  <React.StrictMode>
     <App name={currentName} showRed={true} />
  </React.StrictMode>
);



