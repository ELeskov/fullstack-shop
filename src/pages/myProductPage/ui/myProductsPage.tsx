import { ProductsDataTable } from '@/widgets/productsDataTable/ui/productsDataTable'
import { ProfileHeader } from '@/widgets/profileHeader'

import s from './myProductsPage.module.scss'

export function MyProductsPage() {
  return (
    <div className={s['my-product-page']}>
      <ProfileHeader title="Мои товары" />
      <ProductsDataTable />
    </div>
  )
}
