import { Separator } from '@/shared/ui/components/ui/separator'
import { SidebarTrigger } from '@/shared/ui/components/ui/sidebar'

import s from './statisticsProfileHeader.module.scss'

export function StatisticsProfileHeader() {
  return (
    <div className={s['statistics-header']}>
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="mx-2 data-[orientation=vertical]:h-4"
      />
      <h1 className="!text-lg !font-light">Статистика</h1>
    </div>
  )
}
