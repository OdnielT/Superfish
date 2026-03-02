import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Odniel from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Odniel />
  </StrictMode>,
)
