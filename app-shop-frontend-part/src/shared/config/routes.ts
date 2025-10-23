import { createRoutes } from '../lib'

export const ROUTES = {
  home: '/',
  login: '/login',
  signup: '/signup',
  catalog: '/catalog',

  profile: createRoutes('/profile', {
    cart: '/cart',
    like: '/likes',

    shops: {
      create: '/create',
      reviews: '/reviews',
      statistics: '/statistics',
      products: {
        create: '/create',
      },
      settings: '/settings',
      colors: '/colors',
      categories: '/categories',
    },

    settings: '/settings',
    orders: '/orders',
  }),
} as const
