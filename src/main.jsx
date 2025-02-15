import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ConstructionPage from './construction/ConstructionPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConstructionPage />
  </StrictMode>,
)
