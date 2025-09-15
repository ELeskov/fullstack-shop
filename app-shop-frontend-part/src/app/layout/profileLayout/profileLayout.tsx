import { Outlet } from 'react-router'
import clsx from 'clsx'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export function ProfileLayout() {
  return (
    <div className={clsx('layout', 'page-wrapper--profile')}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
