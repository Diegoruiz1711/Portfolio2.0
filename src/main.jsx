import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import WebProvider from './WebContext/WebContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <WebProvider>
        <App />
      </WebProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
