import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App as London, Hello as Odniel} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <London />
    <Odniel/>
  </StrictMode>,
)
