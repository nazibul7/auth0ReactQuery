import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Auth0ProviderComponents from './components/Auth0ProviderComponents.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0ProviderComponents>
        <App />
      </Auth0ProviderComponents>
    </BrowserRouter>
  </StrictMode>,
)
