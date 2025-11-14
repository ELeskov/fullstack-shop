import { CategoryDataTable } from '@/widgets/categoryDataTable'
import { ProfileHeader } from '@/widgets/profileHeader'

import s from './categoryPage.module.scss'

export function CategoryPage() {
  return (
    <div className={s['category-page']}>
      <ProfileHeader title="Категории" />
      <CategoryDataTable />
    </div>
  )
}
