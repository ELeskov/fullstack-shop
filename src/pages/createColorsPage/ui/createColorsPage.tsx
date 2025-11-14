import { CreateNewColorForm } from '@/widgets/createNewColorForm'
import { ProfileHeader } from '@/widgets/profileHeader'

import s from './createColorsPage.module.scss'

export function CreateColorsPage() {
  return (
    <div className={s['create-colors-page']}>
      <ProfileHeader title="Создать цвет" />
      <CreateNewColorForm />
    </div>
  )
}
