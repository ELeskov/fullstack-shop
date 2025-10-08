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
import { MyProductPage } from '@/pages/myProductPage'
import { ProfilePage } from '@/pages/profilePage'
import { SignupPage } from '@/pages/signupPage'
import { StatisticsPage } from '@/pages/statisticsPage'

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
      {
        path: ROUTES.profile.shops.statistics,
        element: <StatisticsPage />,
      },
      {
        path: ROUTES.profile.shops.colors,
        element: <div>Цвета</div>,
      },
      {
        path: ROUTES.profile.shops.products,
        element: <MyProductPage />,
      },
      {
        path: ROUTES.profile.shops.categories,
        element: <div>Категории</div>,
      },
      {
        path: ROUTES.profile.shops.categories,
        element: <div>Категории</div>,
      },
    ],
  },
])
