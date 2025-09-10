import clsx from 'clsx'

import { ProductCard } from '@/entities/productCard'

import s from './productCardList.module.scss'

export function ProductCardList() {
  return (
    <section className={clsx(s['product-card-list'], 'product-card-list')}>
      {[...Array(10)].map((_, i) => (
        <ProductCard key={i} />
      ))}
    </section>
  )
}
