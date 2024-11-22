import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OverlayColorProvider } from './Context/overlayColorContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <OverlayColorProvider>
        <App />
    </OverlayColorProvider>
)
