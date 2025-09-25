import { Outlet } from 'react-router'
import clsx from 'clsx'

import {
  SidebarInset,
  SidebarProvider,
} from '@/shared/ui/components/ui/sidebar'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { SidebarProfile } from '@/widgets/sidebarProfile'

import s from './profileLayout.module.scss'

export function ProfileLayout() {
  return (
    <div className={clsx('layout', 'page-wrapper--profile')}>
      <Header />

      <main>
        <SidebarProvider>
          <section className={s['profile-layout']}>
            <aside className={s['profile-layout__aside']}>
              <SidebarProfile />
            </aside>

            <SidebarInset>
              <Outlet />
            </SidebarInset>
          </section>
        </SidebarProvider>
      </main>

      <Footer />
    </div>
  )
}
