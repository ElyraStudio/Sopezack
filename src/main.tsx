import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Cria o roteador usando a árvore de rotas gerada automaticamente
const router = createRouter({ routeTree })

// Conecta o React à <div id="root"> do seu index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)