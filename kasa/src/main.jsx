import './SASS/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Accueil from './pages/Accueil.jsx'
import Propos from './pages/Propos.jsx'
import Error from './pages/Error.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Logement from './pages/Logement.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil />,
  },
  {
    path: '/a-propos_kasa',
    element: <Propos />,
  },
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/logement/:id',
    element: <Logement />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
