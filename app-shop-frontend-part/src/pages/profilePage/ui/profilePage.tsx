import { Separator } from '@/shared/ui/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
} from '@/shared/ui/components/ui/sidebar'
import { SidebarProfile } from '@/widgets/sidebarProfile'
import { StatisticsProfileAreaChart } from '@/widgets/statisticsProfileAreaChart'
import { StatisticsProfileCard } from '@/widgets/statisticsProfileCard'
import { StatisticsProfileHeader } from '@/widgets/statisticsProfileHeader'

import s from './profilePage.module.scss'

export function ProfilePage() {
  return (
    <SidebarProvider>
      <section className={s['profile-page']}>
        <aside className={s['profile-page__aside']}>
          <SidebarProfile />
        </aside>

        <SidebarInset>
          <section className={s['profile-page__statistics']}>
            <StatisticsProfileHeader />
          </section>
          <Separator />
          <div className={s['profile-page__statistics-body']}>
            <StatisticsProfileCard />
            <StatisticsProfileAreaChart />
          </div>
        </SidebarInset>
      </section>
    </SidebarProvider>
  )
}
