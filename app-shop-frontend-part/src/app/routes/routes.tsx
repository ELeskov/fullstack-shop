import { createBrowserRouter } from 'react-router'

import { HomePage } from '@/pages/homePage'
import { ROUTES } from '@/shared/config'
import { MainLayout } from '@app/layout'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
    ],
  },
])
