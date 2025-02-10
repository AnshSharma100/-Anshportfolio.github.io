import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router here

ReactDOM.render(
  <Router> {/* Wrap the entire app with the Router */}
    <App />
  </Router>,
  document.getElementById('root')
);
