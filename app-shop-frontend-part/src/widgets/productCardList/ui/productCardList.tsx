import { ProductCard } from '@/entities/productCard'

import s from './productCardList.module.scss'

export function ProductCardList() {
  return (
    <div className={s['product-card-list']}>
      {[...Array(10)].map((_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  )
}
