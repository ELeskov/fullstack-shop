import { createBrowserRouter } from 'react-router'

import { Button } from '@/shared/ui/components/ui/button'

export const router = createBrowserRouter([
  {
    path: '',
    element: <Button>Click</Button>,
  },
])
