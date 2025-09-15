import { SidebarProfile } from '@/widgets/sidebarProfile'

import s from './profilePage.module.scss'

export function ProfilePage() {
  return (
    <div className={s['profile-page']}>
      <SidebarProfile />
      <section className={s['profile-page__statistics']}>statistics</section>
    </div>
  )
}
