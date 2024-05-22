import './SASS/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
  Navigate,
} from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Propos from './pages/Propos.jsx'
import Error from './pages/Error.jsx'
import Logement from './pages/Logement.jsx'
import logements from './../logements.json'

const isValidId = (id) => {
  return logements.some((logement) => logement.id === id)
}

// eslint-disable-next-line react-refresh/only-export-components
const LogementWrapper = () => {
  const { id } = useParams()

  if (!isValidId(id)) {
    return <Navigate to='/error' replace />
  }
  return <Logement />
}

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
    path: '/error',
    element: <Error />,
  },
  {
    path: '/logement/:id',
    element: <LogementWrapper />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
