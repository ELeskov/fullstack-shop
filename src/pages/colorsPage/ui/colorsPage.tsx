import { ColorsDataTable } from '@/widgets/colorsDataTable'
import { ProfileHeader } from '@/widgets/profileHeader'

import s from './colorsPage.module.scss'

export function ColorsPage() {
  return (
    <div className={s['colors-page']}>
      <ProfileHeader title="Цвета" />
      <ColorsDataTable />
    </div>
  )
}
