import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './assets/fonts/fonts.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
