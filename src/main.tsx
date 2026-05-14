import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'

// 1. Criamos o QueryClient (necessário para o contexto que o root pede)
const queryClient = new QueryClient()

// 2. Criamos o roteador passando o context exigido pelo seu projeto
const router = createRouter({ 
  routeTree,
  context: {
    queryClient,
  },
})

// 3. Renderizamos com o Provider do Query e do Router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)