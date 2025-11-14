import clsx from 'clsx'

import { ProductCard } from '@/entities/productCard'

import s from './likeProductsList.module.scss'

export function LikeProductsList() {
  return (
    <section className={clsx(s['like-products-list'], 'product-card-list')}>
      <ProductCard />
      <ProductCard />
    </section>
  )
}
