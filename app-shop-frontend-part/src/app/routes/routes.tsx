import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@/shared/config'
import { FallBack } from '@/shared/ui/fallback'

import { MainLayout } from '@/app/layout'
import { CartPage } from '@/pages/cartPage/ui/cartPage'
import { CatalogPage } from '@/pages/catalogPage'
import { HomePage } from '@/pages/homePage'
import { LoginPage } from '@/pages/loginPage'
import { SignupPage } from '@/pages/signupPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <FallBack />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.login,
        element: <LoginPage />,
      },
      {
        path: ROUTES.signup,
        element: <SignupPage />,
      },
      {
        path: ROUTES.catalog,
        element: <CatalogPage />,
      },
      {
        path: ROUTES.cart,
        element: <CartPage />,
      },
    ],
  },
])
