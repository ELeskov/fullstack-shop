import { Breadcrumbs } from '@/widgets/breadcrumbs'
import { CartProductsList } from '@/widgets/cartProductsList'
import { TitlePage } from '@/shared/ui/titlePage/titlePage'

import s from './cartPage.module.scss'

export function CartPage() {
  return (
    <div className={s['cart-page']}>
      <Breadcrumbs />
      <TitlePage text="Корзина" />

      <section className={s['cart-products-wrapper']}>
        <CartProductsList />
      </section>
    </div>
  )
}
