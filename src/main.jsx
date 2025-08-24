import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/1-JSX/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Root />
  </StrictMode>,
)
