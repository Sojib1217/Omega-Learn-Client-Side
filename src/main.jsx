import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RootLayout from './Layout/RootLayout.jsx'
import Home from './page/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router=createBrowserRouter([
  {
    path:'/',
    element:<RootLayout></RootLayout>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
