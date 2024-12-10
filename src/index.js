import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

ReactDOM.render(
  <BrowserRouter> {/* Wrap the App component in BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
