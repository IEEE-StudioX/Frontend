import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline">Welcome To Studio-X</h1>
  </StrictMode>,
)
