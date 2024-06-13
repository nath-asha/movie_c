import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can create this file for custom styles
import App from './App';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
