import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ContextUsersProvider from './context/ContextUsers'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <ContextUsersProvider>
      <App />
    // </ContextUsersProvider>
  // </StrictMode>,
)
