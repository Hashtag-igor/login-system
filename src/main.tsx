import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./global.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import PrivatePage from './pages/PrivatePage.tsx'
import { AuthProvider } from './contexts/AuthProvider.tsx'
import { RequireAuth } from './contexts/RequireAuth.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/private",
        element: <RequireAuth><PrivatePage /></RequireAuth>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
