import { createRoutes } from '../lib'

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  catalog: '/catalog',

  profile: createRoutes('/profile', {
    cart: '/cart',
    like: '/likes',

    shops: createRoutes('/shops', {
      create: '/create',
      reviews: '/reviews',
      statistics: '/statistics',
      products: '/products',
      settings: '/settings',
      colors: '/colors',
      categories: '/categories',
    }),

    settings: '/settings',
    orders: '/orders',
  }),
} as const
