import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*This does not work on production mode just on dev mode*/}
    <App />
  </StrictMode>,
)
