import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Authprovider from './authprovider/Authprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
     <Authprovider>  <App />
     </Authprovider>
  </React.StrictMode>
);

reportWebVitals();
