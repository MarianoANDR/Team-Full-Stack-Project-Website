import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css'


const root = ReactDOM.createRoot(document.getElementById('root'));//creates root id element in the document
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
