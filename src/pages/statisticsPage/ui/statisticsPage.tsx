import { ProfileHeader } from '@/widgets/profileHeader'
import { StatisticsProfileAreaChart } from '@/widgets/statisticsProfileAreaChart'
import { StatisticsProfileCard } from '@/widgets/statisticsProfileCard'

import s from './statisticsPage.module.scss'

export function StatisticsPage() {
  return (
    <>
      <section className={s['statistics-page']}>
        <ProfileHeader title="Статистика" />
      </section>
      <div className={s['statistics-page__body']}>
        <StatisticsProfileCard />
        <StatisticsProfileAreaChart />
      </div>
    </>
  )
}
