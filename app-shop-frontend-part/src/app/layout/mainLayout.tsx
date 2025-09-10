import { Outlet } from 'react-router'
import clsx from 'clsx'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import s from './mainLayout.module.scss'

export function MainLayout() {
  return (
    <div className={clsx(s.layout, 'page-wrapper')}>
      <Header />

      <main className="my-[50px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
