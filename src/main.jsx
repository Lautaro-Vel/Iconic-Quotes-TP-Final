import React, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import HomeContextProvider from './contextos/homeContext.jsx'
import CitaContextoProvider from './contextos/citaContexto.jsx'
import { BrowserRouter } from 'react-router'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <HomeContextProvider>
        <CitaContextoProvider>
          <App/>  
        </CitaContextoProvider>  
      </HomeContextProvider>
  </BrowserRouter>
)
