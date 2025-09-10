import clsx from 'clsx'

import { LikeProductsList } from '@/widgets/likeProductsList/ui/likeProductsList'

export function LikePage() {
  return (
    <div className={clsx('likePage')}>
      <h1>Избранные</h1>
      <LikeProductsList />
    </div>
  )
}
