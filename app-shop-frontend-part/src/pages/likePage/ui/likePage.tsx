import clsx from 'clsx'

import { TitlePage } from '@/shared/ui/titlePage'
import { Breadcrumbs } from '@/widgets/breadcrumbs'
import { LikeProductsList } from '@/widgets/likeProductsList/ui/likeProductsList'

import s from './likePage.module.scss'

export function LikePage() {
  return (
    <div className={clsx(s['like-page'])}>
      <Breadcrumbs />
      <TitlePage text="Избранное" />
      <section className={s['like-products-wrapper']}>
        <LikeProductsList />
      </section>
    </div>
  )
}
