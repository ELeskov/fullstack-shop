import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/shared/ui/components/ui/sidebar'
import { SidebarProfile } from '@/widgets/sidebarProfile'

import s from './profilePage.module.scss'

export function ProfilePage() {
  return (
    <div className={s['profile-page']}>
      <SidebarProvider>
        <SidebarProfile />

        <SidebarTrigger />
        <SidebarInset>
          <section className={s['profile-page__statistics']}>
            statistics
          </section>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
