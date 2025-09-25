import { Separator } from '@/shared/ui/components/ui/separator'
import { StatisticsProfileAreaChart } from '@/widgets/statisticsProfileAreaChart'
import { StatisticsProfileCard } from '@/widgets/statisticsProfileCard'
import { StatisticsProfileHeader } from '@/widgets/statisticsProfileHeader'

import s from './statisticsPage.module.scss'

export function StatisticsPage() {
  return (
    <>
      <section className={s['statistics-page']}>
        <StatisticsProfileHeader />
      </section>
      <Separator />
      <div className={s['statistics-page__body']}>
        <StatisticsProfileCard />
        <StatisticsProfileAreaChart />
      </div>
    </>
  )
}
