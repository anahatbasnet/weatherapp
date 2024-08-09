import { createBrowserRouter } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'

import Dashboard from './layout/Dashboard'
import Card from './layout/Card'
import Weather from './layout/Weather'
import Users from './layout/Users'

const routerrrr = createBrowserRouter([
  {
    path: '/',
    element: <Weather />,
    children: [
      {
        path: 'weather',
        element: <Weather />,
      },
    ],
  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: ':id',
        element: <Card />,
      },
    ],
  },
])
export default routerrrr
