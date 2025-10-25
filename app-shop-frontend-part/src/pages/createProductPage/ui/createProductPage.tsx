import { ProfileHeader } from '@/widgets/profileHeader'

import s from './createProductPage.module.scss'

export function CreateProductPage() {
  return (
    <div className={s['my-product-page']}>
      <ProfileHeader title="Создание товара" />
    </div>
  )
}
