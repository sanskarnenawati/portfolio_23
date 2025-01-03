import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure App.js is in the same directory
import '../css/styles.css'; // Your global CSS

// Rendering the main App component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure there's a div with id='root' in your index.html
);
