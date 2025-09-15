import { createBrowserRouter } from 'react-router'

import { ROUTES } from '@/shared/config'
import { FallBack } from '@/shared/ui/fallback'

import { ProfileLayout } from '../layout/profileLayout'

import { MainLayout } from '@/app/layout/mainLayout'
import { CartPage } from '@/pages/cartPage/ui/cartPage'
import { CatalogPage } from '@/pages/catalogPage'
import { HomePage } from '@/pages/homePage'
import { LikePage } from '@/pages/likePage'
import { LoginPage } from '@/pages/loginPage'
import { ProfilePage } from '@/pages/profilePage'
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
        path: ROUTES.profile.like,
        element: <LikePage />,
      },
      {
        path: ROUTES.profile.cart,
        element: <CartPage />,
      },
    ],
  },
  {
    element: <ProfileLayout />,
    errorElement: <FallBack />,
    children: [
      {
        path: ROUTES.profile.root,
        element: <ProfilePage />,
      },
    ],
  },
])
