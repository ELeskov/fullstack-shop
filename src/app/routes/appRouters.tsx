import { RouterProvider } from 'react-router'

import { router } from './routes'

export function AppRouters() {
  return <RouterProvider router={router}></RouterProvider>
}
