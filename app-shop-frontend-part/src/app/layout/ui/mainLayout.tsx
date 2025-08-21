import { Outlet } from 'react-router'
import clsx from 'clsx'

import stl from './mainLayout.module.scss'

import { Header } from '@/widgets/header'

export function MainLayout() {
  return (
    <div className={clsx(stl.layout, 'page-wrapper', 'dark')}>
      <Header />

      <main>
        <Outlet />
      </main>

      {/* <Footer/> */}
    </div>
  )
}
