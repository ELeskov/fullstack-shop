import { ProfileHeader } from '@/widgets/profileHeader'
import { UserSettings } from '@/widgets/userSettings'

import s from './profilePage.module.scss'

export function ProfilePage() {
  return (
    <section className={s['profile-page']}>
      <ProfileHeader title="Профиль" />
      <UserSettings />
    </section>
  )
}
