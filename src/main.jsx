import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <ThemeProvider>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={routes} />
      <Toaster/>
    </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
