import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists for your styles
import App from './App'; // Ensure the path to App is correct

// Mount the React app to the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

