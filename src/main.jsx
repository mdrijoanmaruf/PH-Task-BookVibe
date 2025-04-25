import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './Routes/router.jsx'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
