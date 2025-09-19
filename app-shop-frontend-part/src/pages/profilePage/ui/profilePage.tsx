import {
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
      </SidebarProvider>
      <section className={s['profile-page__statistics']}>statistics</section>
    </div>
  )
}
