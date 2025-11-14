import clsx from 'clsx'

import { ProductCard } from '@/entities/productCard'

import s from './cartProductsList.module.scss'

export function CartProductsList() {
  return (
    <section className={clsx(s['cart-products-list'], 'product-card-list')}>
      <ProductCard />
      <ProductCard />
    </section>
  )
}
