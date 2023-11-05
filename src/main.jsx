import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
