import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstComp from './FirstComp';


const root = ReactDOM.createRoot(document.getElementById('root'));

const currentName = "Ivan"

root.render(
  <React.StrictMode>
     <FirstComp/>
     <App name={currentName} />
  </React.StrictMode>
);



