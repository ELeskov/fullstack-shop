import clsx from 'clsx'

import { LikeProductsList } from '@/widgets/likeProductsList/ui/likeProductsList'

import s from './likePage.module.scss'

export function LikePage() {
  return (
    <div className={clsx('likePage')}>
      <h1>Избранные</h1>
      <section className={s['like-products-wrapper']}>
        <LikeProductsList />
      </section>
    </div>
  )
}
