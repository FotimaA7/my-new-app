import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.render(
  <BrowserRouter> {/* Wrap the App component in BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
