
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/HomePage'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <App />
  </BrowserRouter>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )