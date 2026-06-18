import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { rootRoute } from './routes/root'
import { routeDefinitions } from './routes/pages'
import './i18n/i18n'
import './index.css' 
import Globals from './globals'

const routeTree = rootRoute.addChildren(routeDefinitions)
const router = createRouter({ routeTree, basepath: Globals.BASE_PATH })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)