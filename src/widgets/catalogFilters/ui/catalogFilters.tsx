import { DropdownFilter } from '@/features/dropdownFilter'

import s from './catalogFilters.module.scss'

export function CatalogFilters() {
  return (
    <div className={s['filters-block__wrap']}>
      <div className={s['filters-block__container']}>
        <div className={s['filters-block__dropdown']}>
          <DropdownFilter />
        </div>
      </div>
    </div>
  )
}
