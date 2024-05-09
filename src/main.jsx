import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "./SCSS/Index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='osb'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
